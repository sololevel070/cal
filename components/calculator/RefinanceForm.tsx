"use client";

import { useState, useMemo, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { calculateRefinanceSavings } from "@/lib/calculations";
import { formatCurrency } from "@/lib/formatters";
import { motion } from "motion/react";

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
        <h2 className="text-xl font-semibold mb-6">Current Loan</h2>
        
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
            <label className="block text-sm font-medium text-text-primary mb-2">New Loan Term</label>
            <div className="flex gap-2">
              {[15, 20, 30].map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setValue("newTerm", term)}
                  className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${
                    values.newTerm === term
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-text-primary hover:bg-slate-200"
                  }`}
                >
                  {term} yr
                </button>
              ))}
            </div>
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
        </div>
      </div>

      <div className="w-full lg:w-2/3 space-y-8">
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
      </div>
    </motion.div>
  );
}
