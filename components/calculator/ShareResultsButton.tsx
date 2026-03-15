"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

interface Props {
  values: any;
}

export default function ShareResultsButton({ values }: Props) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      const params = new URLSearchParams();
      Object.keys(values).forEach((key) => {
        if (values[key] !== undefined) {
          params.append(key, values[key].toString());
        }
      });
      
      const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex-1 py-3 bg-white border border-border hover:bg-slate-50 text-text-primary font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
    >
      {copied ? <Check className="w-5 h-5 text-accent" /> : <Share2 className="w-5 h-5" />}
      {copied ? "Copied!" : "Share"}
    </button>
  );
}
