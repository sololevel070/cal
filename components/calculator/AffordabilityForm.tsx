"use client";

import { useState, useMemo, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { calculateAffordability } from "@/lib/calculations";
import { formatCurrency } from "@/lib/formatters";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const DonutChart = dynamic(() => import("./DonutChart"), { ssr: false });

import DownloadPDFButton from "./DownloadPDFButton";


const schema = z.object({
  annualIncome: z.number().min(10000),
  monthlyDebts: z.number().min(0),
  downPayment: z.number().min(0),
  interestRate: z.number().min(1).max(15),
  loanTerm: z.number().min(10).max(30),
});

type FormData = z.infer<typeof schema>;

export default function AffordabilityForm() {
  const [isClient, setIsClient] = useState(false);

  const { control, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      annualIncome: 100000,
      monthlyDebts: 500,
      downPayment: 50000,
      interestRate: 6.5,
      loanTerm: 30,
    },
    mode: "onChange",
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const values = watch();

  const result = useMemo(() => {
    return calculateAffordability(
      values.annualIncome,
      values.monthlyDebts,
      values.downPayment,
      values.interestRate,
      values.loanTerm
    );
  }, [values]);

  if (!isClient) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row gap-8"
    >
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-2xl shadow-sm border border-border">
        <h2 className="text-xl font-semibold mb-1">Financial Details</h2>
        <p className="text-sm text-text-muted mb-6 italic">Results change as you change input</p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Annual Income</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">$</span>
              <Controller
                name="annualIncome"
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
            {errors.annualIncome && <p className="text-danger text-sm mt-1">{errors.annualIncome.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Monthly Debts (Auto, Student, Credit Cards)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">$</span>
              <Controller
                name="monthlyDebts"
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
            {errors.monthlyDebts && <p className="text-danger text-sm mt-1">{errors.monthlyDebts.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Available Down Payment</label>
            <div className="relative">
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
          </div>

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
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Loan Term (Years)</label>
            <div className="relative">
              <Controller
                name="loanTerm"
                control={control}
                render={({ field }) => (
                  <input
                    type="number"
                    className="w-full pl-4 pr-12 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                )}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">yrs</span>
            </div>
            <Controller
              name="loanTerm"
              control={control}
              render={({ field }) => (
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  className="w-full mt-4 accent-primary"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              )}
            />
          </div>

          <div className="pt-4 border-t border-border">
            <DownloadPDFButton filename="affordability-calculation.pdf" />
          </div>
        </div>
      </div>

      <div id="calculator-results" className="w-full lg:w-2/3 space-y-8 bg-slate-50 p-4 rounded-2xl">
        <div className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-lg font-medium opacity-90 mb-2">You Can Afford a Home Up To</h2>
          <div className="text-5xl font-bold mb-6">{formatCurrency(result.maxHomePrice)}</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="opacity-75">Max Loan Amount</div>
              <div className="font-semibold text-lg">{formatCurrency(result.maxLoanAmount)}</div>
            </div>
            <div>
              <div className="opacity-75">Max Monthly Payment</div>
              <div className="font-semibold text-lg">{formatCurrency(result.monthlyBudgetBreakdown.housing)}</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
          <h3 className="text-lg font-semibold mb-6">Monthly Budget Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <DonutChart
                data={[
                  { name: "Housing", value: result.monthlyBudgetBreakdown.housing, color: "#004fc8" },
                  { name: "Other Debts", value: result.monthlyBudgetBreakdown.debts, color: "#F59E0B" },
                  { name: "Living Expenses", value: Math.max(0, result.monthlyBudgetBreakdown.remaining), color: "#10ae76" },
                ]}
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                <span className="font-medium text-text-primary">Housing (P&I, Taxes, Ins)</span>
                <span className="font-bold text-primary">{formatCurrency(result.monthlyBudgetBreakdown.housing)}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                <span className="font-medium text-text-primary">Other Debts</span>
                <span className="font-bold text-warning">{formatCurrency(result.monthlyBudgetBreakdown.debts)}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                <span className="font-medium text-text-primary">Remaining for Living Expenses</span>
                <span className="font-bold text-accent">{formatCurrency(result.monthlyBudgetBreakdown.remaining)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
