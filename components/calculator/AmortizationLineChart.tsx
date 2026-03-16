"use client";

import { useMemo, Suspense } from "react";
import dynamic from "next/dynamic";
import { generateAmortizationSchedule } from "@/lib/calculations";
import { formatCurrency } from "@/lib/formatters";

import {
  LineChart,
  Line,
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
  extraPayment: number;
}

export default function AmortizationLineChart({ principal, rate, term, extraPayment }: Props) {
  const data = useMemo(() => {
    const standard = generateAmortizationSchedule(principal, rate, term, 0);
    const accelerated = extraPayment > 0 ? generateAmortizationSchedule(principal, rate, term, extraPayment) : [];

    const result = [];
    const maxMonths = Math.max(standard.length, accelerated.length);

    for (let i = 0; i < maxMonths; i += 12) {
      const yearData: any = {
        year: standard[i]?.year || accelerated[i]?.year,
        standardBalance: standard[i]?.balance || 0,
      };
      if (extraPayment > 0) {
        yearData.acceleratedBalance = accelerated[i]?.balance || 0;
      }
      result.push(yearData);
    }
    return result;
  }, [principal, rate, term, extraPayment]);

  return (
    <Suspense fallback={<div className="w-full h-80 bg-gray-100 rounded-xl animate-pulse" />}>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
            <Line
              type="monotone"
              dataKey="standardBalance"
              name="Standard Balance"
              stroke="#004fc8"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
            {extraPayment > 0 && (
              <Line
                type="monotone"
                dataKey="acceleratedBalance"
                name="With Extra Payment"
                stroke="#10ae76"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6 }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Suspense>
  );
}
