import { MortgageSummary } from "@/types/mortgage";
import { formatCurrency, formatPercentage } from "@/lib/formatters";

interface Props {
  summary: MortgageSummary;
  values: any;
}

export default function ResultSummary({ summary, values }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-slate-50 p-4 rounded-xl border border-border">
        <div className="text-sm text-text-muted mb-1">Down Payment</div>
        <div className="font-semibold text-lg">{formatCurrency(values.downPayment)}</div>
      </div>
      <div className="bg-slate-50 p-4 rounded-xl border border-border">
        <div className="text-sm text-text-muted mb-1">Loan Amount</div>
        <div className="font-semibold text-lg">{formatCurrency(values.homePrice - values.downPayment)}</div>
      </div>
      <div className="bg-slate-50 p-4 rounded-xl border border-border">
        <div className="text-sm text-text-muted mb-1">Total Interest</div>
        <div className="font-semibold text-lg">{formatCurrency(summary.totalInterest)}</div>
      </div>
      <div className="bg-slate-50 p-4 rounded-xl border border-border">
        <div className="text-sm text-text-muted mb-1">Total Cost</div>
        <div className="font-semibold text-lg">{formatCurrency(summary.totalCost)}</div>
      </div>
      <div className="bg-slate-50 p-4 rounded-xl border border-border">
        <div className="text-sm text-text-muted mb-1">Payoff Date</div>
        <div className="font-semibold text-lg">{summary.payoffDate}</div>
      </div>
      <div className="bg-slate-50 p-4 rounded-xl border border-border">
        <div className="text-sm text-text-muted mb-1">Effective APR</div>
        <div className="font-semibold text-lg">{formatPercentage(summary.effectiveAPR)}</div>
      </div>
    </div>
  );
}
