import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import MortgageForm from "@/components/calculator/MortgageForm";

export const metadata: Metadata = {
  title: "Amortization Calculator | ClearNest",
  description: "Calculate your mortgage amortization schedule and see how extra payments can save you money.",
  alternates: { canonical: "https://clearnest.app/amortization-calculator" },
};

export default function AmortizationCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ClearNest Amortization Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "description": "Calculate your mortgage amortization schedule and see how extra payments can save you money.",
    "url": "https://clearnest.app/amortization-calculator"
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnest.app" },
    { name: "Amortization Calculator", url: "https://clearnest.app/amortization-calculator" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Amortization Calculator</h1>
        <p className="text-lg text-text-muted">
          See your full payment schedule and how extra payments can accelerate your payoff.
        </p>
      </div>

      <MortgageForm />
    </div>
  );
}
