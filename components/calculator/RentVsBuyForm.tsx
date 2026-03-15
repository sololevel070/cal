"use client";

import { useState, useMemo, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { calculateRentVsBuy } from "@/lib/calculations";
import { formatCurrency } from "@/lib/formatters";
import { motion } from "motion/react";

const schema = z.object({
  currentRent: z.number().min(100),
  homePrice: z.number().min(10000),
  downPayment: z.number().min(0),
  interestRate: z.number().min(1).max(15),
  loanTerm: z.number().min(10).max(30),
  yearsInHome: z.number().min(1).max(30),
});

type FormData = z.infer<typeof schema>;

export default function RentVsBuyForm() {
  const [isClient, setIsClient] = useState(false);

  const { control, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      currentRent: 2000,
      homePrice: 400000,
      downPayment: 80000,
      interestRate: 6.5,
      loanTerm: 30,
      yearsInHome: 7,
    },
    mode: "onChange",
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const values = watch();

  const result = useMemo(() => {
    return calculateRentVsBuy(
      values.currentRent,
      values.homePrice,
      values.downPayment,
      values.interestRate,
      values.loanTerm,
      values.yearsInHome
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
        <h2 className="text-xl font-semibold mb-6">Scenario Details</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Current Monthly Rent</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">$</span>
              <Controller
                name="currentRent"
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
            <label className="block text-sm font-medium text-text-primary mb-2">Target Home Price</label>
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
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Down Payment</label>
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
            <label className="block text-sm font-medium text-text-primary mb-2">Loan Term</label>
            <div className="flex gap-2">
              {[15, 20, 30].map((term) => (
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

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Years You Plan to Stay</label>
            <div className="relative">
              <Controller
                name="yearsInHome"
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
      </div>

      <div className="w-full lg:w-2/3 space-y-8">
        <div className={`p-8 rounded-2xl shadow-lg relative overflow-hidden text-white ${result.isBetterToBuy ? 'bg-primary' : 'bg-orange-500'}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-lg font-medium opacity-90 mb-2">After {values.yearsInHome} Years</h2>
          <div className="text-4xl font-bold mb-6">
            {result.isBetterToBuy ? 'Buying is Better' : 'Renting is Better'}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="opacity-75">Total Cost of Renting</div>
              <div className="font-semibold text-lg">{formatCurrency(result.totalCostOfRenting)}</div>
            </div>
            <div>
              <div className="opacity-75">Total Cost of Buying (Net)</div>
              <div className="font-semibold text-lg">{formatCurrency(result.totalCostOfBuying)}</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
          <h3 className="text-lg font-semibold mb-6">Financial Breakdown</h3>
          <p className="text-text-muted mb-6">
            This calculation assumes standard national averages for property appreciation (3% annually), rent increases (3% annually), property taxes (1.2%), maintenance (1%), and selling costs (6%).
          </p>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
              <span className="font-medium text-text-primary">Net Difference</span>
              <span className={`font-bold ${result.isBetterToBuy ? 'text-primary' : 'text-orange-500'}`}>
                {formatCurrency(Math.abs(result.totalCostOfRenting - result.totalCostOfBuying))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
