"use client";



import { useState } from "react";
import { formatCurrency } from "@/lib/formatters";

interface Scenario {
  name: string;
  monthlyPayment: number;
  totalInterest: number;
  payoffDate: string;
}

interface ScenarioComparisonProps {
  currentScenario: Scenario;
}

export default function ScenarioComparison({ currentScenario }: ScenarioComparisonProps) {
  const [savedScenario, setSavedScenario] = useState<Scenario | null>(null);

  const handleSave = () => {
    setSavedScenario({ ...currentScenario, name: "Saved Scenario" });
  };

  const handleClear = () => {
    setSavedScenario(null);
  };

  return (
    <div className="p-6 bg-slate-50 rounded-2xl border border-border">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Compare Scenarios</h3>
        {!savedScenario && (
          <button
            onClick={handleSave}
            className="text-sm bg-white border border-border px-4 py-2 rounded-full hover:bg-slate-100 transition-colors"
          >
            Save Current to Compare
          </button>
        )}
        {savedScenario && (
          <button
            onClick={handleClear}
            className="text-sm text-danger hover:underline"
          >
            Clear Saved
          </button>
        )}
      </div>

      {savedScenario ? (
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-xl border border-primary/20 shadow-sm">
            <div className="text-sm font-medium text-primary mb-4">Current Scenario</div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-text-muted">Monthly Payment</div>
                <div className="font-semibold">{formatCurrency(currentScenario.monthlyPayment)}</div>
              </div>
              <div>
                <div className="text-xs text-text-muted">Total Interest</div>
                <div className="font-semibold">{formatCurrency(currentScenario.totalInterest)}</div>
              </div>
              <div>
                <div className="text-xs text-text-muted">Payoff Date</div>
                <div className="font-semibold">{currentScenario.payoffDate}</div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-border shadow-sm">
            <div className="text-sm font-medium text-text-muted mb-4">{savedScenario.name}</div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-text-muted">Monthly Payment</div>
                <div className="font-semibold">{formatCurrency(savedScenario.monthlyPayment)}</div>
              </div>
              <div>
                <div className="text-xs text-text-muted">Total Interest</div>
                <div className="font-semibold">{formatCurrency(savedScenario.totalInterest)}</div>
              </div>
              <div>
                <div className="text-xs text-text-muted">Payoff Date</div>
                <div className="font-semibold">{savedScenario.payoffDate}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-text-muted bg-white rounded-xl border border-dashed border-border">
          Save your current calculation to compare it side-by-side with new numbers.
        </div>
      )}
    </div>
  );
}
