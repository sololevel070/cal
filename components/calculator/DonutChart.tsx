"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { formatCurrency } from "@/lib/formatters";
import { MortgageSummary } from "@/types/mortgage";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";


interface Props {
  data?: { name: string; value: number; color: string }[];
  summary?: MortgageSummary;
  homePrice?: number;
  downPayment?: number;
  loanTerm?: number;
}

export default function DonutChart({ data: customData, summary, homePrice, downPayment, loanTerm = 30 }: Props) {
  const data = customData || (summary && homePrice !== undefined && downPayment !== undefined ? [
    { name: "Principal", value: homePrice - downPayment, color: "#004fc8" },
    { name: "Interest", value: summary.totalInterest, color: "#10ae76" },
    { name: "Property Tax", value: summary.monthlyTax * 12 * loanTerm, color: "#F59E0B" },
    { name: "Home Insurance", value: summary.monthlyInsurance * 12 * loanTerm, color: "#EF4444" },
  ] : []);

  if (data.length === 0) return null;

  return (
    <Suspense fallback={<div className="w-full h-64 bg-gray-100 rounded-xl animate-pulse" />}>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry: any, index: number) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: any) => formatCurrency(Number(value))}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Suspense>
  );
}

