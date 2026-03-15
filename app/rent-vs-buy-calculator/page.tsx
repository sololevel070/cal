import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import RentVsBuyForm from "@/components/calculator/RentVsBuyForm";

export const metadata: Metadata = {
  title: "Rent vs Buy Calculator | ClearNest",
  description: "Compare the financial impact of renting vs buying a home over time.",
  alternates: { canonical: "https://clearnest.app/rent-vs-buy-calculator" },
};

export default function RentVsBuyCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ClearNest Rent vs Buy Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "description": "Compare the financial impact of renting vs buying a home over time.",
    "url": "https://clearnest.app/rent-vs-buy-calculator"
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnest.app" },
    { name: "Rent vs Buy Calculator", url: "https://clearnest.app/rent-vs-buy-calculator" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Rent vs Buy Calculator</h1>
        <p className="text-lg text-text-muted">
          Compare the financial impact of renting vs buying a home over time.
        </p>
      </div>

      <RentVsBuyForm />
    </div>
  );
}
