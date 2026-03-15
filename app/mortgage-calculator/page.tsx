import { Metadata } from "next";
import MortgageForm from "@/components/calculator/MortgageForm";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Mortgage Calculator — Calculate Monthly Payment Free | ClearNest",
  description: "Free mortgage calculator with taxes, insurance, PMI, and amortization schedule. Instantly calculate your monthly payment. Mobile-friendly.",
  alternates: { canonical: "https://clearnest.app/mortgage-calculator" },
  openGraph: {
    title: "Free Mortgage Calculator | ClearNest",
    description: "Calculate monthly mortgage payments instantly.",
    url: "https://clearnest.app/mortgage-calculator",
    siteName: "ClearNest",
    locale: "en_US",
    type: "website"
  }
};

export default function MortgageCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ClearNest Mortgage Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "description": "Free US mortgage calculator with amortization schedule, taxes, insurance, and PMI",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "featureList": "Monthly payment, amortization table, extra payments, charts, share results",
    "url": "https://clearnest.app/mortgage-calculator"
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnest.app" },
    { name: "Mortgage Calculator", url: "https://clearnest.app/mortgage-calculator" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Mortgage Calculator</h1>
        <p className="text-lg text-text-muted">
          Estimate your monthly mortgage payments, including taxes, insurance, and PMI.
        </p>
      </div>

      <MortgageForm />

      <div className="mt-16 space-y-12">
        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-4">How to Use This Mortgage Calculator</h2>
          <p className="text-text-muted leading-relaxed">
            Our mortgage calculator is designed to be simple yet comprehensive. Start by entering your home price, down payment, and loan details. The calculator will instantly update your estimated monthly payment, breaking it down into principal, interest, taxes, and insurance (PITI). You can also explore different scenarios by adjusting the interest rate, loan term, or adding extra monthly payments to see how they affect your payoff date and total interest paid.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-4">How Your Monthly Mortgage Payment is Calculated</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Your monthly payment is calculated using the standard amortization formula:
          </p>
          <div className="bg-white p-6 rounded-xl border border-border font-mono text-center text-lg shadow-sm">
            M = P[r(1+r)^n] / [(1+r)^n - 1]
          </div>
          <ul className="list-disc pl-6 mt-4 text-text-muted space-y-2">
            <li><strong>M</strong> = Total monthly payment</li>
            <li><strong>P</strong> = Principal loan amount</li>
            <li><strong>r</strong> = Monthly interest rate (annual rate divided by 12)</li>
            <li><strong>n</strong> = Number of payments (loan term in years multiplied by 12)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-4">What's Included in Your Monthly Payment?</h2>
          <p className="text-text-muted leading-relaxed">
            A typical mortgage payment includes four main components, often referred to as PITI:
          </p>
          <ul className="list-disc pl-6 mt-4 text-text-muted space-y-2">
            <li><strong>Principal:</strong> The portion of your payment that goes toward paying down the loan balance.</li>
            <li><strong>Interest:</strong> The cost of borrowing the money from your lender.</li>
            <li><strong>Taxes:</strong> Property taxes assessed by your local government.</li>
            <li><strong>Insurance:</strong> Homeowners insurance to protect your property, and potentially Private Mortgage Insurance (PMI) if your down payment is less than 20%.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
