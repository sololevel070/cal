import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "How Much House Can I Afford? | ClearNest",
  description: "Learn how to calculate your homebuying budget using the 28/43 rule and understand what lenders look for when approving your mortgage.",
  alternates: { canonical: "https://clearnestcalculator.site/blog/how-much-house-can-i-afford/" },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Much House Can I Afford?",
    "datePublished": "2026-03-15",
    "dateModified": "2026-03-15",
    "author": { "@type": "Organization", "name": "ClearNest" },
    "publisher": { "@type": "Organization", "name": "ClearNest" }
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnestcalculator.site/" },
    { name: "Blog", url: "https://clearnestcalculator.site/blog/" },
    { name: "How Much House Can I Afford?", url: "https://clearnestcalculator.site/blog/how-much-house-can-i-afford/" }
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mb-8 border-b border-border pb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
          How Much House Can I Afford?
        </h1>
        <div className="text-text-muted flex items-center gap-4 text-sm">
          <span>By ClearNest Editorial Team</span>
          <span>•</span>
          <span>Last Updated: March 15, 2026</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none text-text-primary">
        <figure className="mb-10 overflow-hidden rounded-2xl shadow-lg border border-border">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200&h=630"
            alt="New house keys on a wooden table"
            className="w-full h-auto object-cover"
          />
          <figcaption className="p-4 bg-slate-50 text-sm text-text-muted italic border-t border-border text-center">
            Determining your budget is the first step toward homeownership.
          </figcaption>
        </figure>

        <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-xl mb-8">
          <h2 className="text-xl font-bold text-primary mt-0 mb-2">Quick Answer</h2>
          <p className="m-0 text-text-primary">
            To determine how much house you can afford, lenders typically use the <strong>28/43 rule</strong>. This means your monthly housing costs (mortgage, taxes, insurance) should not exceed 28% of your gross monthly income, and your total monthly debt payments (including the mortgage) should not exceed 43% of your gross income.
          </p>
        </div>

        <p>
          Buying a home is one of the largest financial decisions you'll ever make. Before you start browsing listings or attending open houses, it's crucial to understand exactly how much house you can comfortably afford. This prevents you from becoming "house poor"—having a beautiful home but struggling to pay for other necessities.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">The 28/43 Rule Explained</h2>
        <p>
          Most mortgage lenders use the 28/43 rule as a baseline to determine your borrowing capacity. This rule consists of two parts: the front-end ratio and the back-end ratio.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">The Front-End Ratio (28%)</h3>
        <p>
          Your front-end ratio, also known as your housing ratio, dictates that your total monthly housing costs should not exceed 28% of your gross monthly income (your income before taxes).
        </p>
        <p>
          <strong>Housing costs include PITI:</strong>
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>P</strong>rincipal (the loan amount)</li>
          <li><strong>I</strong>nterest (the cost of borrowing)</li>
          <li><strong>T</strong>axes (property taxes)</li>
          <li><strong>I</strong>nsurance (homeowners insurance and PMI, if applicable)</li>
          <li>HOA fees (if applicable)</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-3">The Back-End Ratio (43%)</h3>
        <p>
          Your back-end ratio, or Debt-to-Income (DTI) ratio, dictates that your total monthly debt payments should not exceed 43% of your gross monthly income.
        </p>
        <p>
          <strong>Total debts include:</strong>
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Your new mortgage payment (PITI)</li>
          <li>Auto loans</li>
          <li>Student loans</li>
          <li>Minimum credit card payments</li>
          <li>Child support or alimony</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Example Calculation</h2>
        <p>
          Let's say your household earns $120,000 per year, which is $10,000 per month gross income. You currently pay $500/month for a car loan and $300/month for student loans.
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Front-end limit (28%):</strong> $10,000 × 0.28 = $2,800 maximum monthly housing payment.</li>
          <li><strong>Back-end limit (43%):</strong> $10,000 × 0.43 = $4,300 maximum total debt. Subtracting your $800 in existing debts leaves $3,500 for housing.</li>
        </ul>
        <p>
          Since lenders use the lower of the two numbers, your maximum monthly housing payment would be <strong>$2,800</strong>.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Other Factors Lenders Consider</h2>
        <p>
          While the 28/43 rule is a great starting point, lenders also look at:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Credit Score:</strong> A higher score can qualify you for a lower interest rate, which increases your purchasing power. <Link href="/blog/what-credit-score-to-buy-house/" className="text-primary hover:underline">Learn more about credit scores.</Link></li>
          <li><strong>Down Payment:</strong> A larger down payment reduces your loan amount and can eliminate the need for Private Mortgage Insurance (PMI). <Link href="/blog/what-is-pmi/" className="text-primary hover:underline">Learn more about PMI.</Link></li>
          <li><strong>Employment History:</strong> Lenders typically want to see at least two years of stable employment in the same industry.</li>
          <li><strong>Cash Reserves:</strong> Having savings left over after closing shows lenders you can handle unexpected expenses.</li>
        </ul>

        <div className="bg-slate-50 p-8 rounded-2xl border border-border my-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to see your numbers?</h3>
          <p className="mb-6 text-text-muted">Use our free affordability calculator to get a personalized estimate based on your exact income and debts.</p>
          <Link href="/affordability-calculator/" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
            Calculate My Affordability
          </Link>
        </div>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Can I get a mortgage with a DTI higher than 43%?</h3>
            <p className="text-text-muted">Yes, some loan programs, like FHA loans or certain conventional loans with strong compensating factors (like a high credit score or large cash reserves), may allow a DTI up to 50%.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Does the 28/43 rule apply to net income or gross income?</h3>
            <p className="text-text-muted">The rule applies to your gross income, which is your income before taxes and deductions are taken out.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Should I borrow the maximum amount I qualify for?</h3>
            <p className="text-text-muted">Not necessarily. Just because a lender approves you for a certain amount doesn't mean it fits your personal budget. Consider your lifestyle, future goals, and other expenses like childcare or travel.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">How does the interest rate affect affordability?</h3>
            <p className="text-text-muted">A higher interest rate increases your monthly payment for the same loan amount, which decreases the total home price you can afford. Even a 1% difference can significantly impact your purchasing power.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Do I need a 20% down payment?</h3>
            <p className="text-text-muted">No. While 20% helps you avoid PMI, many programs allow down payments as low as 3% (conventional) or 3.5% (FHA). VA and USDA loans even offer 0% down options for qualified buyers.</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-sm text-text-muted italic">
          Disclaimer: Results are estimates. ClearNest provides educational content and is not a licensed lender or financial advisor. Consult a licensed mortgage professional for personalized advice.
        </div>
      </div>
    </article>
  );
}
