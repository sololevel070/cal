import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import RefinanceForm from "@/components/calculator/RefinanceForm";

export const metadata: Metadata = {
  title: "Refinance Calculator | ClearNest",
  description: "Calculate how much you can save by refinancing your mortgage.",
  alternates: { canonical: "https://clearnest.app/refinance-calculator" },
};

export default function RefinanceCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ClearNest Refinance Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "description": "Calculate how much you can save by refinancing your mortgage.",
    "url": "https://clearnest.app/refinance-calculator"
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnest.app" },
    { name: "Refinance Calculator", url: "https://clearnest.app/refinance-calculator" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Should I Refinance My Mortgage?</h1>
        <p className="text-lg text-text-muted">
          Calculate your potential monthly savings, break-even point, and lifetime savings.
        </p>
      </div>

      <RefinanceForm />
    </div>
  );
}
