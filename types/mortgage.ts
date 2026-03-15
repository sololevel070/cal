export interface MortgageSummary {
  emi: number;
  totalMonthly: number;
  totalInterest: number;
  totalCost: number;
  payoffDate: string;
  effectiveAPR: number;
  monthlyTax: number;
  monthlyInsurance: number;
  monthlyPMI: number;
}

export interface AmortizationRow {
  month: number;
  year: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface AffordabilityResult {
  maxHomePrice: number;
  maxLoanAmount: number;
  monthlyBudgetBreakdown: {
    housing: number;
    debts: number;
    remaining: number;
  };
}

export interface RefinanceResult {
  monthlySavings: number;
  breakEvenMonths: number;
  lifetimeSavings: number;
}

export interface ExtraPaymentResult {
  interestSaved: number;
  monthsSaved: number;
  newPayoffDate: string;
}

export interface RentVsBuyInputs {
  homePrice: number;
  rent: number;
  downPayment: number;
  rate: number;
  appreciationRate: number;
  investmentReturnRate: number;
  yearsToStay: number;
}

export interface RentVsBuyYearlyData {
  year: number;
  netWorthBuy: number;
  netWorthRent: number;
}
