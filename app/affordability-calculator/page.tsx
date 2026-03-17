import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import AffordabilityForm from "@/components/calculator/AffordabilityForm";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "How Much House Can I Afford? Affordability Calculator",
  description: "Find out how much house you can afford based on your income, debts, and down payment. Calculate your maximum home price and loan limit today.",
  alternates: { canonical: "https://clearnestcalculator.site/affordability-calculator" },
};

export default function AffordabilityCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ClearNest Affordability Calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "description": "Calculate how much house you can afford based on your income, debts, and down payment.",
    "url": "https://clearnestcalculator.site/affordability-calculator"
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnestcalculator.site" },
    { name: "Affordability Calculator", url: "https://clearnestcalculator.site/affordability-calculator" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Home Affordability Calculator: How Much Can I Afford?</h1>
        <p className="text-lg text-text-muted">
          Find out your maximum home price and loan amount based on your income and debts.
        </p>
      </div>

      <AffordabilityForm />

      <div className="mt-16 space-y-16">
        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-6">How Banks Determine Your Home Buying Power</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Lenders use a variety of factors to determine how much they are willing to lend you. While your credit score is important for your interest rate, your <strong>Debt-to-Income (DTI) ratio</strong> is the primary driver of your maximum loan amount.
          </p>
          <p className="text-text-muted leading-relaxed">
            This affordability calculator uses these same industry-standard ratios to give you a realistic estimate of what you can qualify for in today's market.
          </p>
        </section>

        <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
          <h2 className="text-3xl font-semibold text-text-primary mb-6">The 28/36 Rule for Mortgage Affordability</h2>
          <p className="text-text-muted leading-relaxed mb-6">
            A common rule of thumb used by lenders to assess home affordability is the 28/36 rule:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-text-primary mb-2">Front-End Ratio (28%)</h3>
              <p className="text-sm text-text-muted">
                Your total monthly housing payment (including taxes, insurance, and HOA fees) should not exceed 28% of your gross monthly income.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="text-lg font-bold text-text-primary mb-2">Back-End Ratio (36%)</h3>
              <p className="text-sm text-text-muted">
                Your total monthly debt payments (including the new mortgage, car loans, credit cards, and student loans) should not exceed 36% of your gross income.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-6">Tips for Increasing Your Buying Power</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 border border-border rounded-xl">
              <h4 className="font-bold text-text-primary mb-2">Reduce Existing Debt</h4>
              <p className="text-sm text-text-muted">Paying down high-interest credit card debt or car loans lowers your DTI and increases your qualifying loan amount.</p>
            </div>
            <div className="p-5 border border-border rounded-xl">
              <h4 className="font-bold text-text-primary mb-2">Improve Credit Score</h4>
              <p className="text-sm text-text-muted">A higher credit score qualifies you for lower interest rates, which directly reduces your monthly payment and boosts affordability.</p>
            </div>
            <div className="p-5 border border-border rounded-xl">
              <h4 className="font-bold text-text-primary mb-2">Increase Down Payment</h4>
              <p className="text-sm text-text-muted">Putting more money down reduces the loan amount and can eliminate the need for Private Mortgage Insurance (PMI).</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-text-primary mb-6">Gross Income vs. Net Income</h2>
          <p className="text-text-muted leading-relaxed">
            Note that lenders calculate affordability based on your <strong>gross monthly income</strong> (before taxes are taken out). However, it's always wise to create a personal budget based on your <strong>net income</strong> (take-home pay) to ensure you are comfortable with the monthly payment in your day-to-day life.
          </p>
        </section>
      </div>

      <InternalLinks
        calculators={[
          { name: "Mortgage Calculator", href: "/mortgage-calculator" },
          { name: "Rent vs Buy Calculator", href: "/rent-vs-buy-calculator" }
        ]}
        articles={[
          { name: "How Much House Can I Afford?", href: "/blog/how-much-house-can-i-afford" },
          { name: "What Credit Score Do I Need to Buy a House?", href: "/blog/what-credit-score-to-buy-house" }
        ]}
      />
    </div>
  );
}
