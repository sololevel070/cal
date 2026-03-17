import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "FHA vs Conventional Loan | ClearNest",
  description: "Compare FHA and conventional mortgages to find the best fit for your credit score and down payment.",
  alternates: { canonical: "https://clearnestcalculator.site/blog/fha-vs-conventional-loan" },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "FHA vs Conventional Loan: Which is Right for You?",
    "datePublished": "2026-03-10",
    "dateModified": "2026-03-10",
    "author": { "@type": "Organization", "name": "ClearNest" },
    "publisher": { "@type": "Organization", "name": "ClearNest" }
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnestcalculator.site" },
    { name: "Blog", url: "https://clearnestcalculator.site/blog" },
    { name: "FHA vs Conventional Loan", url: "https://clearnestcalculator.site/blog/fha-vs-conventional-loan" }
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mb-8 border-b border-border pb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
          FHA vs Conventional Loan: Which is Right for You?
        </h1>
        <div className="text-text-muted flex items-center gap-4 text-sm">
          <span>By ClearNest Editorial Team</span>
          <span>•</span>
          <span>Last Updated: March 10, 2026</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none text-text-primary">
        <figure className="mb-10 overflow-hidden rounded-2xl shadow-lg border border-border">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200&h=630"
            alt="Business document and a house model"
            className="w-full h-auto object-cover"
          />
          <figcaption className="p-4 bg-slate-50 text-sm text-text-muted italic border-t border-border text-center">
            Choosing the right loan depends on your financial profile.
          </figcaption>
        </figure>

        <p>
          Choosing the right mortgage is a critical step in the homebuying process. Two of the most popular options are FHA loans and conventional loans. While both can help you buy a home, they have different requirements, costs, and benefits.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">What is an FHA Loan?</h2>
        <p>
          An FHA loan is a mortgage insured by the Federal Housing Administration. They are designed to help low-to-moderate-income borrowers and those with lower credit scores buy a home. Because the government insures the loan, lenders are willing to offer more flexible qualification requirements.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">What is a Conventional Loan?</h2>
        <p>
          A conventional loan is a mortgage that is not backed or insured by any government agency. They are typically originated by private lenders and sold to government-sponsored enterprises like Fannie Mae or Freddie Mac. Conventional loans often have stricter credit requirements but can be more cost-effective for borrowers with strong financial profiles.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Key Differences</h2>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Credit Score Requirements</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>FHA:</strong> You can qualify with a credit score as low as 500 (with a 10% down payment) or 580 (with a 3.5% down payment).</li>
          <li><strong>Conventional:</strong> Typically requires a minimum credit score of 620. Borrowers with scores above 740 usually get the best interest rates.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Down Payment</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>FHA:</strong> Minimum down payment is 3.5% for credit scores 580 and above.</li>
          <li><strong>Conventional:</strong> Minimum down payment can be as low as 3% for first-time homebuyers, though 5% to 20% is more common.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Mortgage Insurance</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>FHA:</strong> Requires an upfront mortgage insurance premium (UFMIP) and an annual mortgage insurance premium (MIP). If you put down less than 10%, the MIP stays for the life of the loan.</li>
          <li><strong>Conventional:</strong> Requires private mortgage insurance (PMI) if you put down less than 20%. However, PMI can be canceled once you reach 20% equity in the home.</li>
        </ul>

        <div className="bg-slate-50 p-8 rounded-2xl border border-border my-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Compare Your Options</h3>
          <p className="mb-6 text-text-muted">Use our mortgage calculator to see how different loan types affect your monthly payment.</p>
          <Link href="/mortgage-calculator" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
            Calculate Mortgage Payment
          </Link>
        </div>
      </div>
    </article>
  );
}
