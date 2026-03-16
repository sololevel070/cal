"use client";

import { Calculator } from "lucide-react";
import { formatCurrency } from "@/lib/formatters";
import DownloadPDFButton from "./DownloadPDFButton";


interface Props {
  total: number;
}

export default function StickyMobileBar({ total }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-t border-border p-4 shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.05)] lg:hidden">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <p className="text-xs font-medium text-text-muted uppercase tracking-wider">Est. Monthly</p>
          <p className="text-2xl font-bold text-primary">{formatCurrency(total)}</p>
        </div>
        <div className="flex gap-2">
          <DownloadPDFButton iconOnly={true} />
          <button
            onClick={() => {
              const el = document.getElementById("calculator-results");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="bg-slate-100 text-text-primary px-4 py-3 rounded-full font-medium shadow-sm hover:bg-slate-200 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
