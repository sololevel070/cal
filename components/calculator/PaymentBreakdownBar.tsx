"use client";

import { useMemo, Suspense } from "react";
import dynamic from "next/dynamic";
import { generateAmortizationSchedule } from "@/lib/calculations";
import { formatCurrency } from "@/lib/formatters";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";


interface Props {
  principal: number;
  rate: number;
  term: number;
}

export default function PaymentBreakdownBar({ principal, rate, term }: Props) {
  const data = useMemo(() => {
    const schedule = generateAmortizationSchedule(principal, rate, term, 0);
    const yearlyData: Record<number, { year: number; principal: number; interest: number }> = {};

    schedule.forEach((row: any) => {
      if (!yearlyData[row.year]) {
        yearlyData[row.year] = { year: row.year, principal: 0, interest: 0 };
      }
      yearlyData[row.year].principal += row.principal;
      yearlyData[row.year].interest += row.interest;
    });

    return Object.values(yearlyData);
  }, [principal, rate, term]);

  return (
    <Suspense fallback={<div className="w-full h-80 bg-gray-100 rounded-xl animate-pulse" />}>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis dataKey="year" stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              tickFormatter={(value: any) => `$${(value / 1000).toFixed(0)}k`}
              stroke="#64748B"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              formatter={(value: any) => formatCurrency(Number(value))}
              labelStyle={{ color: '#1E293B', fontWeight: 'bold' }}
              contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar dataKey="principal" name="Principal Paid" stackId="a" fill="#004fc8" radius={[0, 0, 4, 4]} />
            <Bar dataKey="interest" name="Interest Paid" stackId="a" fill="#F59E0B" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Suspense>
  );
}
