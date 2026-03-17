import { Metadata } from "next";
import MortgageForm from "@/components/calculator/MortgageForm";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "Mortgage Calculator: Estimate Payment with Taxes & PMI",
  description: "Free mortgage calculator with taxes, insurance, and PMI. Instantly calculate your 30-year or 15-year monthly payment with an amortization schedule.",
  alternates: { canonical: "https://clearnestcalculator.site/mortgage-calculator" },
  openGraph: {
    title: "Free Mortgage Calculator | ClearNest",
    description: "Calculate monthly mortgage payments instantly.",
    url: "https://clearnestcalculator.site/mortgage-calculator",
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
    "url": "https://clearnestcalculator.site/mortgage-calculator"
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnestcalculator.site" },
    { name: "Mortgage Calculator", url: "https://clearnestcalculator.site/mortgage-calculator" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Mortgage Calculator with Taxes and PMI</h1>
        <p className="text-lg text-text-muted">
          Estimate your monthly mortgage payments, including taxes, insurance, and PMI.
        </p>
      </div>

      <MortgageForm />

      <div className="mt-16 space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-6">How to Use This Mortgage Calculator</h2>
          <p className="text-text-muted leading-relaxed">
            Our mortgage calculator is designed to be simple yet comprehensive. Start by entering your home price, down payment, and loan details. The calculator will instantly update your estimated monthly payment, breaking it down into principal, interest, taxes, and insurance (PITI). You can also explore different scenarios by adjusting the interest rate, loan term, or adding extra monthly payments to see how they affect your payoff date and total interest paid.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-6">30-Year vs. 15-Year Mortgage Calculator</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-text-primary mb-3">30-Year Fixed Mortgage</h3>
              <p className="text-text-muted mb-4 text-sm">
                The most popular choice for US home buyers. It offers the lowest monthly payments, making homeownership more accessible, though you will pay more in interest over the life of the loan.
              </p>
              <ul className="text-sm text-text-muted space-y-1">
                <li>• Lower monthly payments</li>
                <li>• More buying power</li>
                <li>• Higher total interest paid</li>
              </ul>
            </div>
            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-text-primary mb-3">15-Year Fixed Mortgage</h3>
              <p className="text-text-muted mb-4 text-sm">
                Ideal for those who want to pay off their home quickly and save on interest. Interest rates are typically lower than 30-year loans, but the monthly payments are significantly higher.
              </p>
              <ul className="text-sm text-text-muted space-y-1">
                <li>• Pay off debt 2x faster</li>
                <li>• Thousands saved in interest</li>
                <li>• Higher monthly payments</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-6">What's Included in Your Monthly Payment?</h2>
          <p className="text-text-muted leading-relaxed mb-6">
            A typical mortgage payment includes four main components, often referred to as PITI:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 border border-border rounded-xl">
              <h4 className="font-bold text-text-primary mb-2">Principal</h4>
              <p className="text-sm text-text-muted">The amount borrowed that goes toward paying down your loan balance.</p>
            </div>
            <div className="p-5 border border-border rounded-xl">
              <h4 className="font-bold text-text-primary mb-2">Interest</h4>
              <p className="text-sm text-text-muted">The cost paid to the lender for borrowing the principal amount.</p>
            </div>
            <div className="p-5 border border-border rounded-xl">
              <h4 className="font-bold text-text-primary mb-2">Taxes</h4>
              <p className="text-sm text-text-muted">Property taxes collected by local governments to fund services.</p>
            </div>
            <div className="p-5 border border-border rounded-xl">
              <h4 className="font-bold text-text-primary mb-2">Insurance</h4>
              <p className="text-sm text-text-muted">Homeowners insurance and PMI (if down payment is under 20%).</p>
            </div>
          </div>
        </section>

        <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
          <h2 className="text-3xl font-semibold text-text-primary mb-6">Mortgage Calculator with Extra Payments</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            One of the most effective ways to save money on your mortgage is by making extra payments toward your principal. Even a small additional monthly payment can shave years off your loan term and save you tens of thousands of dollars in interest charges.
          </p>
          <p className="text-text-muted leading-relaxed">
            Use the "Extra Payments" field in our calculator to see exactly how much you can save and how much faster you could be debt-free.
          </p>
        </section>
      </div>

      <InternalLinks
        calculators={[
          { name: "Amortization Calculator", href: "/amortization-calculator" },
          { name: "Rent vs Buy Calculator", href: "/rent-vs-buy-calculator" },
          { name: "Affordability Calculator", href: "/affordability-calculator" }
        ]}
        articles={[
          { name: "30-Year vs. 15-Year Mortgage", href: "/blog/30-year-vs-15-year-mortgage" },
          { name: "What is Private Mortgage Insurance (PMI)?", href: "/blog/what-is-pmi" },
          { name: "FHA vs. Conventional Loans", href: "/blog/fha-vs-conventional-loan" }
        ]}
      />
    </div>
  );
}
