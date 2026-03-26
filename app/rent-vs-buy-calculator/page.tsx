import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import RentVsBuyForm from "@/components/calculator/RentVsBuyForm";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "Rent vs Buy Home Calculator: Is Buying Better Than Renting?",
  description: "Compare the total cost of renting versus buying a home. Use our rent vs buy calculator to see which path builds more wealth over the next 10 years.",
  alternates: { canonical: "https://clearnestcalculator.site/rent-vs-buy-calculator/" },
};

export default function RentVsBuyCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ClearNest Rent vs Buy Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "description": "Compare renting vs buying a home to find the most cost-effective option over time.",
    "url": "https://clearnestcalculator.site/rent-vs-buy-calculator"
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnestcalculator.site/" },
    { name: "Rent vs Buy Calculator", url: "https://clearnestcalculator.site/rent-vs-buy-calculator/" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Rent vs Buy Home Calculator</h1>
        <p className="text-lg text-text-muted">
          Compare the financial impact of renting vs buying a home over time.
        </p>
      </div>

      <RentVsBuyForm />

      <div className="mt-16 space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-6">Total Cost of Ownership vs. Monthly Rent</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            When comparing renting and buying, many people only look at the monthly payment. However, owning a home involves additional costs such as property taxes, homeowners insurance, maintenance, and HOA fees. On the other hand, renting involves monthly payments that likely increase every year with inflation.
          </p>
          <p className="text-text-muted leading-relaxed">
            Our <strong>rent versus buy calculator</strong> accounts for these variables, including the "opportunity cost" of your down payment, to show you the true financial impact over your planned stay in the property.
          </p>
        </section>

        <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
          <h2 className="text-3xl font-semibold text-text-primary mb-6">The Financial Advantage of Home Equity</h2>
          <p className="text-text-muted leading-relaxed mb-6">
            The biggest difference between renting and buying is equity. While rent is an expense that provides no return, a mortgage payment is partly an investment in an asset.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-text-primary mb-2">Price Appreciation</h3>
              <p className="text-sm text-text-muted">
                Historically, real estate values in the US tend to increase over time, potentially providing a significant capital gain when you sell.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-text-primary mb-2">Principal Paydown</h3>
              <p className="text-sm text-text-muted">
                Each month, a portion of your mortgage payment reduces your debt, increasing your ownership stake in the property.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-6">Key Factors in the Rent or Buy Decision</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 border border-border rounded-xl">
              <h4 className="font-bold text-text-primary mb-2">Duration of Stay</h4>
              <p className="text-sm text-text-muted">Buying usually makes more sense the longer you plan to live in the home, as costs are spread over more years.</p>
            </div>
            <div className="p-5 border border-border rounded-xl">
              <h4 className="font-bold text-text-primary mb-2">Local Market Trends</h4>
              <p className="text-sm text-text-muted">In some markets, renting is significantly cheaper than owning, even after accounting for appreciation.</p>
            </div>
            <div className="p-5 border border-border rounded-xl">
              <h4 className="font-bold text-text-primary mb-2">Tax Implications</h4>
              <p className="text-sm text-text-muted">Homeowners may benefit from mortgage interest and property tax deductions, depending on their tax situation.</p>
            </div>
          </div>
        </section>
      </div>

      <InternalLinks
        calculators={[
          { name: "Mortgage Calculator", href: "/mortgage-calculator/" },
          { name: "Affordability Calculator", href: "/affordability-calculator/" }
        ]}
        articles={[
          { name: "FHA vs. Conventional Loans", href: "/blog/fha-vs-conventional-loan/" },
          { name: "How Much House Can I Afford?", href: "/blog/how-much-house-can-i-afford/" }
        ]}
      />
    </div>
  );
}
