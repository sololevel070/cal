import {
  MortgageSummary,
  AmortizationRow,
  AffordabilityResult,
  RefinanceResult,
  ExtraPaymentResult,
  RentVsBuyInputs,
  RentVsBuyYearlyData,
} from "@/types/mortgage";

export function calculateMonthlyPayment(
  principal: number,
  annualRate: number,
  termYears: number
): number {
  if (principal <= 0 || termYears <= 0) return 0;
  if (annualRate === 0) return principal / (termYears * 12);

  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = termYears * 12;
  const factor = Math.pow(1 + monthlyRate, numberOfPayments);

  const payment = (principal * monthlyRate * factor) / (factor - 1);
  return isNaN(payment) || !isFinite(payment) ? 0 : payment;
}

export function calculateMortgageSummary(
  homePrice: number,
  downPayment: number,
  rate: number,
  term: number,
  tax: number,
  insurance: number,
  pmiRate: number,
  hoa: number
): MortgageSummary {
  const principal = Math.max(0, homePrice - downPayment);
  const emi = calculateMonthlyPayment(principal, rate, term);
  
  const monthlyTax = tax / 12;
  const monthlyInsurance = insurance / 12;
  
  // PMI applies if down payment is less than 20%
  const downPaymentPercent = homePrice > 0 ? (downPayment / homePrice) * 100 : 0;
  const monthlyPMI = downPaymentPercent < 20 ? (principal * (pmiRate / 100)) / 12 : 0;

  const totalMonthly = emi + monthlyTax + monthlyInsurance + monthlyPMI + hoa;
  const totalInterest = Math.max(0, emi * term * 12 - principal);
  const totalCost = homePrice + totalInterest + (monthlyTax + monthlyInsurance + monthlyPMI + hoa) * term * 12;

  const today = new Date();
  const payoffDate = new Date(today.getFullYear() + term, today.getMonth(), today.getDate()).toLocaleDateString("en-US", { month: "long", year: "numeric" });

  // Simplified effective APR calculation
  const effectiveAPR = rate + (pmiRate * (downPaymentPercent < 20 ? 1 : 0));

  return {
    emi,
    totalMonthly,
    totalInterest,
    totalCost,
    payoffDate,
    effectiveAPR,
    monthlyTax,
    monthlyInsurance,
    monthlyPMI,
  };
}

export function generateAmortizationSchedule(
  principal: number,
  annualRate: number,
  termYears: number,
  extraPayment: number = 0
): AmortizationRow[] {
  if (principal <= 0 || termYears <= 0) return [];

  const monthlyRate = annualRate / 100 / 12;
  const emi = calculateMonthlyPayment(principal, annualRate, termYears);
  
  let balance = principal;
  const schedule: AmortizationRow[] = [];
  const startYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth() + 1;
  let currentYear = startYear;

  for (let i = 1; i <= termYears * 12; i++) {
    if (balance <= 0) break;

    const interest = balance * monthlyRate;
    let principalPayment = emi - interest + extraPayment;

    if (balance < principalPayment) {
      principalPayment = balance;
    }

    balance -= principalPayment;

    schedule.push({
      month: currentMonth,
      year: currentYear,
      payment: principalPayment + interest,
      principal: principalPayment,
      interest,
      balance: Math.max(0, balance),
    });

    currentMonth++;
    if (currentMonth > 12) {
      currentMonth = 1;
      currentYear++;
    }
  }

  return schedule;
}

export function calculateAffordability(
  income: number,
  debts: number,
  downPayment: number,
  rate: number,
  term: number
): AffordabilityResult {
  const monthlyIncome = income / 12;
  
  // 28% front-end DTI rule
  const maxHousingPayment28 = monthlyIncome * 0.28;
  
  // 43% back-end DTI rule
  const maxHousingPayment43 = (monthlyIncome * 0.43) - debts;
  
  const maxMonthlyPayment = Math.min(maxHousingPayment28, maxHousingPayment43);
  
  // Reverse calculate loan amount from max monthly payment
  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = term * 12;
  
  let maxLoanAmount = 0;
  if (monthlyRate > 0) {
    const factor = Math.pow(1 + monthlyRate, numberOfPayments);
    maxLoanAmount = (maxMonthlyPayment * (factor - 1)) / (monthlyRate * factor);
  } else {
    maxLoanAmount = maxMonthlyPayment * numberOfPayments;
  }

  return {
    maxHomePrice: maxLoanAmount + downPayment,
    maxLoanAmount,
    monthlyBudgetBreakdown: {
      housing: maxMonthlyPayment,
      debts,
      remaining: monthlyIncome - maxMonthlyPayment - debts,
    },
  };
}

export function calculateRefinanceSavings(
  currentBalance: number,
  currentRate: number,
  currentRemainingTerm: number,
  newRate: number,
  newTerm: number,
  closingCosts: number
): RefinanceResult {
  const currentMonthly = calculateMonthlyPayment(currentBalance, currentRate, currentRemainingTerm / 12);
  const newMonthly = calculateMonthlyPayment(currentBalance + closingCosts, newRate, newTerm);
  
  const monthlySavings = currentMonthly - newMonthly;
  const breakEvenMonths = monthlySavings > 0 ? closingCosts / monthlySavings : Infinity;
  
  const currentTotalRemaining = currentMonthly * currentRemainingTerm;
  const newTotalCost = newMonthly * (newTerm * 12);
  const lifetimeSavings = currentTotalRemaining - newTotalCost;

  return {
    monthlySavings: Math.max(0, monthlySavings),
    breakEvenMonths: isFinite(breakEvenMonths) ? breakEvenMonths : 0,
    lifetimeSavings,
  };
}

export function calculateExtraPaymentSavings(
  principal: number,
  rate: number,
  term: number,
  extraPayment: number
): ExtraPaymentResult {
  const standardSchedule = generateAmortizationSchedule(principal, rate, term, 0);
  const acceleratedSchedule = generateAmortizationSchedule(principal, rate, term, extraPayment);

  const standardInterest = standardSchedule.reduce((sum, row) => sum + row.interest, 0);
  const acceleratedInterest = acceleratedSchedule.reduce((sum, row) => sum + row.interest, 0);

  const monthsSaved = standardSchedule.length - acceleratedSchedule.length;
  
  const today = new Date();
  const newPayoffDate = new Date(today.getFullYear(), today.getMonth() + acceleratedSchedule.length, today.getDate()).toLocaleDateString("en-US", { month: "long", year: "numeric" });

  return {
    interestSaved: Math.max(0, standardInterest - acceleratedInterest),
    monthsSaved: Math.max(0, monthsSaved),
    newPayoffDate,
  };
}

export interface RentVsBuyResult {
  isBetterToBuy: boolean;
  totalCostOfRenting: number;
  totalCostOfBuying: number;
}

export function calculateRentVsBuy(
  currentRent: number,
  homePrice: number,
  downPayment: number,
  interestRate: number,
  loanTerm: number,
  yearsInHome: number
): RentVsBuyResult {
  // Renting costs
  let totalCostOfRenting = 0;
  let monthlyRent = currentRent;
  for (let year = 1; year <= yearsInHome; year++) {
    totalCostOfRenting += monthlyRent * 12;
    monthlyRent *= 1.03; // 3% annual rent increase
  }

  // Buying costs
  const loanAmount = homePrice - downPayment;
  const monthlyMortgage = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
  
  const propertyTaxRate = 0.012; // 1.2% annual
  const maintenanceRate = 0.01; // 1% annual
  const homeInsuranceRate = 0.005; // 0.5% annual
  
  let totalCostOfBuying = downPayment; // Initial cost
  let currentHomeValue = homePrice;
  let remainingBalance = loanAmount;
  const monthlyRate = interestRate / 100 / 12;

  for (let year = 1; year <= yearsInHome; year++) {
    // Mortgage payments
    for (let m = 0; m < 12; m++) {
      const interest = remainingBalance * monthlyRate;
      const principal = monthlyMortgage - interest;
      remainingBalance -= principal;
      totalCostOfBuying += interest; // Only interest is a "cost", principal is equity
    }
    
    // Taxes, insurance, maintenance
    totalCostOfBuying += currentHomeValue * (propertyTaxRate + maintenanceRate + homeInsuranceRate);
    
    // Appreciation
    currentHomeValue *= 1.03; // 3% annual appreciation
  }

  // Selling costs (6% of final home value)
  const sellingCosts = currentHomeValue * 0.06;
  totalCostOfBuying += sellingCosts;

  // Subtract equity gained (Home Value - Remaining Balance - Initial Down Payment)
  // Actually, total cost of buying should be: Total Cash Out - Equity at Sale
  // Total Cash Out = Down Payment + Total Mortgage Payments + Total Taxes + Total Maintenance + Total Insurance + Selling Costs
  // Equity at Sale = Final Home Value - Remaining Balance
  // Net Cost = Total Cash Out - Equity at Sale
  
  // Let's recalculate Net Cost of Buying
  let totalCashOut = downPayment;
  let homeValue = homePrice;
  let balance = loanAmount;
  
  for (let year = 1; year <= yearsInHome; year++) {
    totalCashOut += monthlyMortgage * 12;
    totalCashOut += homeValue * (propertyTaxRate + maintenanceRate + homeInsuranceRate);
    
    for (let m = 0; m < 12; m++) {
      const interest = balance * monthlyRate;
      const principal = monthlyMortgage - interest;
      balance -= principal;
    }
    
    homeValue *= 1.03;
  }
  
  const finalSellingCosts = homeValue * 0.06;
  totalCashOut += finalSellingCosts;
  
  const equityAtSale = homeValue - balance;
  const netCostOfBuying = totalCashOut - equityAtSale;

  return {
    isBetterToBuy: netCostOfBuying < totalCostOfRenting,
    totalCostOfRenting,
    totalCostOfBuying: netCostOfBuying,
  };
}
