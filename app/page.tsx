import { Metadata } from "next";
import MortgageCalculator from "./mortgage-calculator/page";

export const metadata: Metadata = {
  title: 'ClearNest — Free US Mortgage Calculator',
  description: 'Calculate your monthly mortgage payment instantly. Includes taxes, insurance, PMI, and full amortization schedule. Free, fast, and mobile-friendly.',
  alternates: {
    canonical: 'https://clearnestcalculator.site/',
  },
};

export default function Home() {
  return <MortgageCalculator />;
}
