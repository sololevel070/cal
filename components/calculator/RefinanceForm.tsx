"use client";



import { useState, useMemo, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { calculateRefinanceSavings } from "@/lib/calculations";
import { formatCurrency } from "@/lib/formatters";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const DonutChart = dynamic(() => import("./DonutChart"), { ssr: false });

import DownloadPDFButton from "./DownloadPDFButton";


const schema = z.object({
  currentBalance: z.number().min(10000),
  currentRate: z.number().min(1).max(15),
  currentRemainingTerm: z.number().min(1).max(360),
  newRate: z.number().min(1).max(15),
  newTerm: z.number().min(10).max(30),
  closingCosts: z.number().min(0),
});

type FormData = z.infer<typeof schema>;

export default function RefinanceForm() {
  const [isClient, setIsClient] = useState(false);

  const { control, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      currentBalance: 300000,
      currentRate: 6.5,
      currentRemainingTerm: 300, // 25 years
      newRate: 5.5,
      newTerm: 30,
      closingCosts: 4000,
    },
    mode: "onChange",
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const values = watch();

  const result = useMemo(() => {
    return calculateRefinanceSavings(
      values.currentBalance,
      values.currentRate,
      values.currentRemainingTerm,
      values.newRate,
      values.newTerm,
      values.closingCosts
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
        <h2 className="text-xl font-semibold mb-1">Current Loan</h2>
        <p className="text-sm text-text-muted mb-6 italic">Results change as you change input</p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Current Balance</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">$</span>
              <Controller
                name="currentBalance"
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
            <label className="block text-sm font-medium text-text-primary mb-2">Current Interest Rate</label>
            <div className="relative">
              <Controller
                name="currentRate"
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
            <label className="block text-sm font-medium text-text-primary mb-2">Remaining Term (Months)</label>
            <div className="relative">
              <Controller
                name="currentRemainingTerm"
                control={control}
                render={({ field }) => (
                  <input
                    type="number"
                    className="w-full pl-4 pr-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                )}
              />
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-6">New Loan</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">New Interest Rate</label>
            <div className="relative">
              <Controller
                name="newRate"
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
            <label className="block text-sm font-medium text-text-primary mb-2">New Loan Term (Years)</label>
            <div className="relative">
              <Controller
                name="newTerm"
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
              name="newTerm"
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

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Closing Costs</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">$</span>
              <Controller
                name="closingCosts"
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
          <div className="pt-4 border-t border-border">
            <DownloadPDFButton filename="refinance-calculation.pdf" />
          </div>
        </div>
      </div>

      <div id="calculator-results" className="w-full lg:w-2/3 space-y-8 bg-slate-50 p-4 rounded-2xl">
        <div className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-lg font-medium opacity-90 mb-2">Monthly Savings</h2>
          <div className="text-5xl font-bold mb-6">{formatCurrency(result.monthlySavings)}</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="opacity-75">Break-Even Point</div>
              <div className="font-semibold text-lg">{result.breakEvenMonths > 0 ? `${Math.ceil(result.breakEvenMonths)} months` : 'N/A'}</div>
            </div>
            <div>
              <div className="opacity-75">Lifetime Savings</div>
              <div className="font-semibold text-lg">{formatCurrency(result.lifetimeSavings)}</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
          <h3 className="text-lg font-semibold mb-6">Payment Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <DonutChart
                data={[
                  { name: "New Payment", value: result.newMonthly, color: "#004fc8" },
                  { name: "Monthly Savings", value: result.monthlySavings, color: "#10ae76" },
                ]}
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                <span className="font-medium text-text-primary">Current Payment</span>
                <span className="font-bold text-text-muted">{formatCurrency(result.currentMonthly)}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                <span className="font-medium text-primary">New Payment</span>
                <span className="font-bold text-primary">{formatCurrency(result.newMonthly)}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-100">
                <span className="font-medium text-green-700">Monthly Savings</span>
                <span className="font-bold text-green-600">{formatCurrency(result.monthlySavings)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

