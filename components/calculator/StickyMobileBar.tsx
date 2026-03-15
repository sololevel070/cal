"use client";

import { formatCurrency } from "@/lib/formatters";

interface Props {
  total: number;
}

export default function StickyMobileBar({ total }: Props) {
  const scrollToResults = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-t border-border p-4 shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.05)] lg:hidden">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <p className="text-xs font-medium text-text-muted uppercase tracking-wider">Est. Monthly</p>
          <p className="text-2xl font-bold text-primary">{formatCurrency(total)}</p>
        </div>
        <button
          onClick={scrollToResults}
          className="bg-primary text-white px-6 py-3 rounded-full font-medium shadow-sm hover:bg-blue-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
