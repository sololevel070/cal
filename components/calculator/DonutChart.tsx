"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { formatCurrency } from "@/lib/formatters";
import { MortgageSummary } from "@/types/mortgage";

interface Props {
  summary: MortgageSummary;
  homePrice: number;
  downPayment: number;
}

export default function DonutChart({ summary, homePrice, downPayment }: Props) {
  const principal = homePrice - downPayment;
  const data = [
    { name: "Principal", value: principal, color: "#2563EB" },
    { name: "Interest", value: summary.totalInterest, color: "#10B981" },
    { name: "Property Tax", value: summary.monthlyTax * 12 * 30, color: "#F59E0B" },
    { name: "Home Insurance", value: summary.monthlyInsurance * 12 * 30, color: "#EF4444" },
  ];

  return (
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
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value: any) => formatCurrency(Number(value))} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
