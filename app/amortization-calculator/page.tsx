import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import MortgageForm from "@/components/calculator/MortgageForm";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "Mortgage Amortization Calculator with Extra Payments",
  description: "Generate a complete mortgage amortization schedule. See how extra payments can accelerate your payoff date and save you thousands in interest.",
  alternates: { canonical: "https://clearnestcalculator.site/amortization-calculator/" },
};

export default function AmortizationCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ClearNest Amortization Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "description": "Calculate your mortgage amortization schedule and see how extra payments can save you money.",
    "url": "https://clearnestcalculator.site/amortization-calculator/"
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnestcalculator.site/" },
    { name: "Amortization Calculator", url: "https://clearnestcalculator.site/amortization-calculator/" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Mortgage Amortization Schedule Calculator</h1>
        <p className="text-lg text-text-muted">
          See your full payment schedule and how extra payments can accelerate your payoff.
        </p>
      </div>

      <MortgageForm />

      <div className="mt-16 space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-6">What is a Mortgage Amortization Schedule?</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            An <strong>amortization schedule</strong> is a table detailing each periodic payment on an amortizing loan. While your monthly payment remains the same, the portion of that payment going toward interest decreases over time, while the portion going toward principal increases.
          </p>
          <p className="text-text-muted leading-relaxed">
            Early in your loan term, the majority of your payment goes to the lender as interest. As the balance drops, the interest charge is calculated on a smaller amount, allowing more of your payment to chip away at the principal balance.
          </p>
        </section>

        <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
          <h2 className="text-3xl font-semibold text-text-primary mb-6">How Extra Payments Affect Your Amortization</h2>
          <p className="text-text-muted leading-relaxed mb-6">
            Even small extra payments made early in the loan can have a massive impact. Because interest is compounded, every dollar of principal you pay off early is a dollar that you won't have to pay interest on for the remaining years of the loan.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-text-primary mb-2">Shorten Your Loan Term</h3>
              <p className="text-sm text-text-muted">
                Consistent extra principal payments can shave years off a 30-year mortgage, helping you reach the "debt-free" milestone much sooner.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-text-primary mb-2">Maximize Interest Savings</h3>
              <p className="text-sm text-text-muted">
                Reducing the principal balance faster significantly lowers the total interest paid to the bank, keeping more money in your pocket.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-6">The Benefit of Bi-Weekly Payments</h2>
          <p className="text-text-muted leading-relaxed">
            A popular strategy is to make half of your mortgage payment every two weeks. Resulting in 26 half-payments (or 13 full payments) per year, this simple trick can reduce a 30-year mortgage by about 4 to 6 years depending on your interest rate. Use our amortization calculator to see how different payout frequencies impact your long-term savings.
          </p>
        </section>
      </div>

      <InternalLinks
        calculators={[
          { name: "Mortgage Calculator", href: "/mortgage-calculator/" },
          { name: "Refinance Calculator", href: "/refinance-calculator/" }
        ]}
        articles={[
          { name: "How to Pay Off Your Mortgage Early", href: "/blog/how-to-pay-off-mortgage-early/" },
          { name: "30-Year vs. 15-Year Mortgage", href: "/blog/30-year-vs-15-year-mortgage/" }
        ]}
      />
    </div>
  );
}
