import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "What Credit Score Do You Need to Buy a House? | ClearNest",
  description: "Find out the minimum credit score requirements for different types of home loans and how to improve yours.",
  alternates: { canonical: "https://clearnestcalculator.site/blog/what-credit-score-to-buy-house" },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Credit Score Do You Need to Buy a House?",
    "datePublished": "2026-02-15",
    "dateModified": "2026-02-15",
    "author": { "@type": "Organization", "name": "ClearNest" },
    "publisher": { "@type": "Organization", "name": "ClearNest" }
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnestcalculator.site" },
    { name: "Blog", url: "https://clearnestcalculator.site/blog" },
    { name: "What Credit Score Do You Need", url: "https://clearnestcalculator.site/blog/what-credit-score-to-buy-house" }
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mb-8 border-b border-border pb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
          What Credit Score Do You Need to Buy a House?
        </h1>
        <div className="text-text-muted flex items-center gap-4 text-sm">
          <span>By ClearNest Editorial Team</span>
          <span>•</span>
          <span>Last Updated: February 15, 2026</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none text-text-primary">
        <figure className="mb-10 overflow-hidden rounded-2xl shadow-lg border border-border">
          <img
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200&h=630"
            alt="Financial graph showing growth"
            className="w-full h-auto object-cover"
          />
          <figcaption className="p-4 bg-slate-50 text-sm text-text-muted italic border-t border-border text-center">
            Your credit score is the most powerful tool in your financial belt.
          </figcaption>
        </figure>

        <p>
          Your credit score is one of the most important factors lenders consider when you apply for a mortgage. It not only determines whether you qualify for a loan but also heavily influences the interest rate you'll be offered. So, what is the magic number needed to buy a house?
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Minimum Credit Scores by Loan Type</h2>
        <p>
          There is no single minimum credit score required to buy a house, as different loan programs have different requirements. Here's a breakdown:
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Conventional Loans: 620</h3>
        <p>
          Conventional loans, which are not backed by the government, typically require a minimum credit score of 620. However, to get the best interest rates and terms, you generally need a score of 740 or higher.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">FHA Loans: 500 to 580</h3>
        <p>
          FHA loans are insured by the Federal Housing Administration and are designed for borrowers with lower credit scores. You can qualify with a score as low as 500 if you have a 10% down payment. If you want to take advantage of the 3.5% minimum down payment, you'll need a score of at least 580.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">VA Loans: No Official Minimum (Usually 620)</h3>
        <p>
          VA loans, available to eligible veterans and active-duty service members, do not have an official minimum credit score set by the Department of Veterans Affairs. However, most lenders overlay their own requirements, typically looking for a score of at least 620.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">USDA Loans: 640</h3>
        <p>
          USDA loans, designed for rural and suburban homebuyers, generally require a minimum credit score of 640 to qualify for automatic approval through the USDA's underwriting system.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">How Your Score Affects Your Interest Rate</h2>
        <p>
          While meeting the minimum requirement gets your foot in the door, a higher score saves you money. Lenders use risk-based pricing, meaning borrowers with lower scores are considered higher risk and are charged higher interest rates. Even a 0.5% difference in your interest rate can cost you tens of thousands of dollars over the life of a 30-year mortgage.
        </p>

        <div className="bg-slate-50 p-8 rounded-2xl border border-border my-10 text-center">
          <h3 className="text-2xl font-bold mb-4">See How Rates Affect Your Payment</h3>
          <p className="mb-6 text-text-muted">Use our mortgage calculator to test different interest rates and see how they impact your monthly payment.</p>
          <Link href="/mortgage-calculator" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
            Calculate Mortgage Payment
          </Link>
        </div>
      </div>
    </article>
  );
}
