import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import RefinanceForm from "@/components/calculator/RefinanceForm";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "Mortgage Refinance Calculator: Savings & Break-Even",
  description: "Calculate your mortgage refinance savings instantly. See your potential monthly savings, total interest saved, and break-even point on a new loan.",
  alternates: { canonical: "https://clearnestcalculator.site/refinance-calculator" },
};

export default function RefinanceCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ClearNest Refinance Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "description": "Calculate how much you can save by refinancing your mortgage.",
    "url": "https://clearnestcalculator.site/refinance-calculator"
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnestcalculator.site" },
    { name: "Refinance Calculator", url: "https://clearnestcalculator.site/refinance-calculator" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Mortgage Refinance Savings Calculator</h1>
        <p className="text-lg text-text-muted">
          Calculate your potential monthly savings, break-even point, and lifetime savings.
        </p>
      </div>

      <RefinanceForm />

      <div className="mt-16 space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-6">When Should You Refinance Your Mortgage?</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Deciding to refinance is a major financial move. Generally, homeowners consider refinancing when interest rates have dropped by at least 0.75% to 1% below their current rate. However, the decision also depends on how long you plan to stay in the home and your specific financial goals.
          </p>
          <p className="text-text-muted leading-relaxed">
            Common reasons to refinance include lowering monthly payments, shortening the loan term to pay off debt faster, or tapping into home equity for renovations or debt consolidation.
          </p>
        </section>

        <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
          <h2 className="text-3xl font-semibold text-text-primary mb-6">Understanding Your Refinance Break-Even Point</h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Refinancing isn't free—it typically comes with closing costs ranging from 2% to 5% of the loan amount. Your <strong>break-even point</strong> is the amount of time it takes for your monthly savings to "pay back" these upfront costs.
          </p>
          <div className="bg-background p-6 rounded-xl border border-border font-mono text-center text-lg mb-6">
            Break-Even (Months) = Total Closing Costs / Monthly Savings
          </div>
          <p className="text-text-muted text-sm text-center">
            If you plan to move before reaching your break-even point, refinancing might not save you money.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-6">Refinance Savings Checklist</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 border border-border rounded-xl">
              <h4 className="font-bold text-text-primary mb-2">Lower Your Rate</h4>
              <p className="text-sm text-text-muted">The primary goal for most is to secure a lower interest rate, reducing the total interest paid over the life of the loan.</p>
            </div>
            <div className="p-5 border border-border rounded-xl">
              <h4 className="font-bold text-text-primary mb-2">Change Loan Term</h4>
              <p className="text-sm text-text-muted">Switching from a 30-year to a 15-year mortgage can save you six figures in interest, though it increases monthly payments.</p>
            </div>
            <div className="p-5 border border-border rounded-xl">
              <h4 className="font-bold text-text-primary mb-2">Simplify Your Debt</h4>
              <p className="text-sm text-text-muted">Refinancing can be an opportunity to consolidate a second mortgage or HELOC into one single loan with a better rate.</p>
            </div>
          </div>
        </section>
      </div>

      <InternalLinks
        calculators={[
          { name: "Amortization Calculator", href: "/amortization-calculator" },
          { name: "Mortgage Calculator", href: "/mortgage-calculator" }
        ]}
        articles={[
          { name: "How to Pay Off Your Mortgage Early", href: "/blog/how-to-pay-off-mortgage-early" }
        ]}
      />
    </div>
  );
}
