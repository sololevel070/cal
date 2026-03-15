"use client";

import React, { useState, useMemo } from "react";
import { generateAmortizationSchedule } from "@/lib/calculations";
import { formatCurrency } from "@/lib/formatters";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  principal: number;
  rate: number;
  term: number;
  extraPayment: number;
}

export default function AmortizationTable({ principal, rate, term, extraPayment }: Props) {
  const [expandedYears, setExpandedYears] = useState<Set<number>>(new Set([new Date().getFullYear()]));

  const schedule = useMemo(() => {
    return generateAmortizationSchedule(principal, rate, term, extraPayment);
  }, [principal, rate, term, extraPayment]);

  const yearlySummary = useMemo(() => {
    const summary: Record<number, { year: number; rows: any[]; totalPrincipal: number; totalInterest: number; endBalance: number }> = {};
    
    schedule.forEach((row) => {
      if (!summary[row.year]) {
        summary[row.year] = { year: row.year, rows: [], totalPrincipal: 0, totalInterest: 0, endBalance: 0 };
      }
      summary[row.year].rows.push(row);
      summary[row.year].totalPrincipal += row.principal;
      summary[row.year].totalInterest += row.interest;
      summary[row.year].endBalance = row.balance;
    });

    return Object.values(summary);
  }, [schedule]);

  const toggleYear = (year: number) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  return (
    <div className="overflow-x-auto print:overflow-visible">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="border-b-2 border-border text-text-muted text-sm uppercase tracking-wider">
            <th className="py-4 px-4 font-semibold">Date</th>
            <th className="py-4 px-4 font-semibold text-right">Payment</th>
            <th className="py-4 px-4 font-semibold text-right">Principal</th>
            <th className="py-4 px-4 font-semibold text-right">Interest</th>
            <th className="py-4 px-4 font-semibold text-right">Remaining Balance</th>
          </tr>
        </thead>
        <tbody>
          {yearlySummary.map((yearData) => (
            <React.Fragment key={yearData.year}>
              <tr 
                className="bg-slate-50 border-b border-border cursor-pointer hover:bg-slate-100 transition-colors"
                onClick={() => toggleYear(yearData.year)}
              >
                <td className="py-4 px-4 font-semibold flex items-center gap-2">
                  {expandedYears.has(yearData.year) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  {yearData.year}
                </td>
                <td className="py-4 px-4 text-right font-medium text-text-muted">-</td>
                <td className="py-4 px-4 text-right font-medium text-primary">{formatCurrency(yearData.totalPrincipal)}</td>
                <td className="py-4 px-4 text-right font-medium text-warning">{formatCurrency(yearData.totalInterest)}</td>
                <td className="py-4 px-4 text-right font-semibold">{formatCurrency(yearData.endBalance)}</td>
              </tr>
              {expandedYears.has(yearData.year) && yearData.rows.map((row) => (
                <tr key={`${row.year}-${row.month}`} className="border-b border-border/50 text-sm">
                  <td className="py-3 px-4 pl-10 text-text-muted">
                    {new Date(row.year, row.month - 1).toLocaleString('default', { month: 'short' })}
                  </td>
                  <td className="py-3 px-4 text-right">{formatCurrency(row.payment)}</td>
                  <td className="py-3 px-4 text-right">{formatCurrency(row.principal)}</td>
                  <td className="py-3 px-4 text-right">{formatCurrency(row.interest)}</td>
                  <td className="py-3 px-4 text-right">{formatCurrency(row.balance)}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
