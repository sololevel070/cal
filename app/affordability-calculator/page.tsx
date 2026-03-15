import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import AffordabilityForm from "@/components/calculator/AffordabilityForm";

export const metadata: Metadata = {
  title: "Home Affordability Calculator | ClearNest",
  description: "Calculate how much house you can afford based on your income, debts, and down payment.",
  alternates: { canonical: "https://clearnest.app/affordability-calculator" },
};

export default function AffordabilityCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ClearNest Affordability Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "description": "Calculate how much house you can afford based on your income, debts, and down payment.",
    "url": "https://clearnest.app/affordability-calculator"
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnest.app" },
    { name: "Affordability Calculator", url: "https://clearnest.app/affordability-calculator" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-text-primary mb-4">How Much House Can I Afford?</h1>
        <p className="text-lg text-text-muted">
          Find out your maximum home price and loan amount based on your income and debts.
        </p>
      </div>

      <AffordabilityForm />
    </div>
  );
}
