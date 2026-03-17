import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "What is PMI (Private Mortgage Insurance)? | ClearNest",
  description: "Understand what PMI is, how much it costs, and how you can avoid paying it or get rid of it early.",
  alternates: { canonical: "https://clearnestcalculator.site/blog/what-is-pmi" },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What is PMI (Private Mortgage Insurance)?",
    "datePublished": "2026-03-05",
    "dateModified": "2026-03-05",
    "author": { "@type": "Organization", "name": "ClearNest" },
    "publisher": { "@type": "Organization", "name": "ClearNest" }
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnestcalculator.site" },
    { name: "Blog", url: "https://clearnestcalculator.site/blog" },
    { name: "What is PMI", url: "https://clearnestcalculator.site/blog/what-is-pmi" }
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />
      
      <div className="mb-8 border-b border-border pb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
          What is PMI (Private Mortgage Insurance)?
        </h1>
        <div className="text-text-muted flex items-center gap-4 text-sm">
          <span>By ClearNest Editorial Team</span>
          <span>•</span>
          <span>Last Updated: March 5, 2026</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none text-text-primary">
        <p>
          If you're buying a home with a conventional loan and putting down less than 20%, you'll likely have to pay for Private Mortgage Insurance (PMI). But what exactly is it, and how does it affect your monthly payments?
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">What Does PMI Do?</h2>
        <p>
          PMI is an insurance policy that protects the <em>lender</em>—not you—in case you default on your mortgage. Because a smaller down payment represents a higher risk for the lender, PMI is required to offset that risk.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">How Much Does PMI Cost?</h2>
        <p>
          The cost of PMI varies depending on several factors, including:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Your credit score:</strong> A higher credit score usually means lower PMI premiums.</li>
          <li><strong>Your down payment amount:</strong> The closer you are to 20%, the lower your PMI will be.</li>
          <li><strong>The loan type:</strong> Fixed-rate vs. adjustable-rate mortgages can have different PMI costs.</li>
        </ul>
        <p>
          On average, expect to pay between 0.5% and 1.5% of the original loan amount per year in PMI. For a $300,000 loan, this translates to roughly $125 to $375 per month added to your mortgage payment.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">How to Avoid or Remove PMI</h2>
        
        <h3 className="text-2xl font-semibold mt-8 mb-3">1. Put Down 20%</h3>
        <p>
          The most straightforward way to avoid PMI entirely is to make a down payment of at least 20% of the home's purchase price.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">2. Reach 20% Equity</h3>
        <p>
          Once you've paid down your mortgage balance to 80% of the home's original value, you can request that your lender cancel your PMI. By law, lenders must automatically terminate PMI when your balance reaches 78% of the original value.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">3. Refinance</h3>
        <p>
          If your home has increased in value significantly since you bought it, you might have reached 20% equity sooner than expected. Refinancing your mortgage based on the new, higher appraised value can eliminate PMI.
        </p>

        <div className="bg-slate-50 p-8 rounded-2xl border border-border my-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Calculate Your PMI</h3>
          <p className="mb-6 text-text-muted">Use our mortgage calculator to see exactly how much PMI will add to your monthly payment.</p>
          <Link href="/mortgage-calculator" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
            Calculate Mortgage with PMI
          </Link>
        </div>
      </div>
    </article>
  );
}
