"use client";

import { useState, useMemo, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { calculateMortgageSummary } from "@/lib/calculations";
import { formatCurrency, formatPercentage } from "@/lib/formatters";
import { motion } from "motion/react";
import DonutChart from "./DonutChart";
import ResultSummary from "./ResultSummary";
import AmortizationLineChart from "./AmortizationLineChart";
import PaymentBreakdownBar from "./PaymentBreakdownBar";
import AmortizationTable from "./AmortizationTable";
import StickyMobileBar from "./StickyMobileBar";
import ShareResultsButton from "./ShareResultsButton";
import ScenarioComparison from "./ScenarioComparison";
import ExtraPaymentToggle from "./ExtraPaymentToggle";

const schema = z.object({
  homePrice: z.number().min(50000).max(2000000),
  downPayment: z.number().min(0),
  downPaymentPercent: z.number().min(0).max(100),
  loanTerm: z.number().min(10).max(30),
  interestRate: z.number().min(1).max(15),
  propertyTax: z.number().min(0),
  homeInsurance: z.number().min(0),
  pmi: z.number().min(0).max(5),
  hoa: z.number().min(0),
  loanType: z.enum(["Conventional", "FHA", "VA", "USDA"]),
  extraPayment: z.number().min(0).optional(),
});

type FormData = z.infer<typeof schema>;

export default function MortgageForm() {
  const [isClient, setIsClient] = useState(false);
  const [showExtraPayment, setShowExtraPayment] = useState(false);
  const [compareMode, setCompareMode] = useState(false);

  const { control, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      homePrice: 400000,
      downPayment: 80000,
      downPaymentPercent: 20,
      loanTerm: 30,
      interestRate: 6.5,
      propertyTax: 3000,
      homeInsurance: 1500,
      pmi: 0.5,
      hoa: 0,
      loanType: "Conventional",
      extraPayment: 0,
    },
    mode: "onChange",
  });

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem("mortgageCalcState");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        Object.keys(parsed).forEach((key) => {
          setValue(key as keyof FormData, parsed[key]);
        });
      } catch (e) {}
    }
  }, [setValue]);

  const values = watch();

  // Auto-sync down payment dollar and percent
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === "homePrice" || name === "downPayment" || name === "downPaymentPercent") {
        const price = value.homePrice || 0;
        if (name === "downPayment") {
          const dp = value.downPayment || 0;
          const pct = price > 0 ? (dp / price) * 100 : 0;
          if (Math.abs(pct - (value.downPaymentPercent || 0)) > 0.1) {
            setValue("downPaymentPercent", parseFloat(pct.toFixed(2)), { shouldValidate: true });
          }
        } else if (name === "downPaymentPercent" || name === "homePrice") {
          const pct = value.downPaymentPercent || 0;
          const dp = (price * pct) / 100;
          if (Math.abs(dp - (value.downPayment || 0)) > 1) {
            setValue("downPayment", Math.round(dp), { shouldValidate: true });
          }
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue]);

  const summary = useMemo(() => {
    return calculateMortgageSummary(
      values.homePrice,
      values.downPayment,
      values.interestRate,
      values.loanTerm,
      values.propertyTax,
      values.homeInsurance,
      values.downPaymentPercent >= 20 ? 0 : values.pmi,
      values.hoa
    );
  }, [values]);

  const handleSave = () => {
    localStorage.setItem("mortgageCalcState", JSON.stringify(values));
    alert("Calculation saved!");
  };

  if (!isClient) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row gap-8"
    >
      {/* Input Section */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-2xl shadow-sm border border-border">
        <h2 className="text-xl font-semibold mb-6">Loan Details</h2>
        
        <div className="space-y-6">
          {/* Home Price */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Home Price</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">$</span>
              <Controller
                name="homePrice"
                control={control}
                render={({ field }) => (
                  <input
                    type="number"
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                )}
              />
            </div>
            <Controller
              name="homePrice"
              control={control}
              render={({ field }) => (
                <input
                  type="range"
                  min="50000"
                  max="2000000"
                  step="5000"
                  className="w-full mt-4 accent-primary"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              )}
            />
            {errors.homePrice && <p className="text-danger text-sm mt-1">{errors.homePrice.message}</p>}
          </div>

          {/* Down Payment */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Down Payment</label>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">$</span>
                <Controller
                  name="downPayment"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="number"
                      className="w-full pl-8 pr-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  )}
                />
              </div>
              <div className="relative w-24">
                <Controller
                  name="downPaymentPercent"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="number"
                      className="w-full pl-3 pr-8 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  )}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">%</span>
              </div>
            </div>
            {errors.downPayment && <p className="text-danger text-sm mt-1">{errors.downPayment.message}</p>}
          </div>

          {/* Loan Term */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Loan Term</label>
            <div className="flex gap-2">
              {[10, 15, 20, 30].map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setValue("loanTerm", term)}
                  className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${
                    values.loanTerm === term
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-text-primary hover:bg-slate-200"
                  }`}
                >
                  {term} yr
                </button>
              ))}
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Interest Rate</label>
            <div className="relative">
              <Controller
                name="interestRate"
                control={control}
                render={({ field }) => (
                  <input
                    type="number"
                    step="0.05"
                    className="w-full pl-4 pr-8 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                )}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">%</span>
            </div>
            <Controller
              name="interestRate"
              control={control}
              render={({ field }) => (
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.05"
                  className="w-full mt-4 accent-primary"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              )}
            />
          </div>

          {/* Property Tax */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Property Tax (Annual)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">$</span>
              <Controller
                name="propertyTax"
                control={control}
                render={({ field }) => (
                  <input
                    type="number"
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                )}
              />
            </div>
          </div>

          {/* Home Insurance */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Home Insurance (Annual)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">$</span>
              <Controller
                name="homeInsurance"
                control={control}
                render={({ field }) => (
                  <input
                    type="number"
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                )}
              />
            </div>
          </div>

          {/* PMI */}
          {values.downPaymentPercent < 20 && (
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">PMI (%)</label>
              <div className="relative">
                <Controller
                  name="pmi"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="number"
                      step="0.1"
                      className="w-full pl-4 pr-8 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  )}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">%</span>
              </div>
            </div>
          )}

          {/* HOA */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Monthly HOA</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">$</span>
              <Controller
                name="hoa"
                control={control}
                render={({ field }) => (
                  <input
                    type="number"
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                )}
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-border">
            <button
              type="button"
              onClick={handleSave}
              className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-text-primary font-medium rounded-xl transition-colors"
            >
              Save
            </button>
            <ShareResultsButton values={values} />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="w-full lg:w-2/3 space-y-8">
        {/* Hero Card */}
        <div className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-lg font-medium opacity-90 mb-2">Estimated Monthly Payment</h2>
          <div className="text-5xl font-bold mb-6">{formatCurrency(summary.totalMonthly)}</div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="opacity-75">Principal & Interest</div>
              <div className="font-semibold text-lg">{formatCurrency(summary.emi)}</div>
            </div>
            <div>
              <div className="opacity-75">Property Tax</div>
              <div className="font-semibold text-lg">{formatCurrency(summary.monthlyTax)}</div>
            </div>
            <div>
              <div className="opacity-75">Home Insurance</div>
              <div className="font-semibold text-lg">{formatCurrency(summary.monthlyInsurance)}</div>
            </div>
            {(summary.monthlyPMI > 0 || values.hoa > 0) && (
              <div>
                <div className="opacity-75">{summary.monthlyPMI > 0 ? "PMI" : "HOA"}</div>
                <div className="font-semibold text-lg">{formatCurrency(summary.monthlyPMI || values.hoa)}</div>
              </div>
            )}
          </div>
        </div>

        {/* Charts and Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
            <h3 className="text-lg font-semibold mb-4 text-center">Payment Breakdown</h3>
            <DonutChart summary={summary} homePrice={values.homePrice} downPayment={values.downPayment} />
          </div>
          <ResultSummary summary={summary} values={values} />
        </div>

        <ScenarioComparison 
          currentScenario={{
            name: "Current",
            monthlyPayment: summary.totalMonthly,
            totalInterest: summary.totalInterest,
            payoffDate: summary.payoffDate
          }}
        />

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Amortization Schedule</h3>
            <ExtraPaymentToggle enabled={showExtraPayment} onToggle={() => setShowExtraPayment(!showExtraPayment)} />
          </div>
          
          {showExtraPayment && (
            <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-border">
              <label className="block text-sm font-medium text-text-primary mb-2">Extra Monthly Payment</label>
              <div className="relative max-w-xs">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">$</span>
                <Controller
                  name="extraPayment"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="number"
                      className="w-full pl-8 pr-4 py-2 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  )}
                />
              </div>
            </div>
          )}

          <AmortizationLineChart 
            principal={values.homePrice - values.downPayment}
            rate={values.interestRate}
            term={values.loanTerm}
            extraPayment={showExtraPayment ? (values.extraPayment || 0) : 0}
          />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-border overflow-hidden">
          <h3 className="text-lg font-semibold mb-6">Annual Payment Breakdown</h3>
          <PaymentBreakdownBar 
            principal={values.homePrice - values.downPayment}
            rate={values.interestRate}
            term={values.loanTerm}
          />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
          <h3 className="text-lg font-semibold mb-6">Amortization Table</h3>
          <AmortizationTable 
            principal={values.homePrice - values.downPayment}
            rate={values.interestRate}
            term={values.loanTerm}
            extraPayment={showExtraPayment ? (values.extraPayment || 0) : 0}
          />
        </div>
      </div>

      <StickyMobileBar total={summary.totalMonthly} />
    </motion.div>
  );
}
