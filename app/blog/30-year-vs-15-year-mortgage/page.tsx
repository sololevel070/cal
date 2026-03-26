import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
  title: "30-Year vs 15-Year Mortgage | ClearNest",
  description: "Decide between a 15-year and 30-year mortgage by comparing monthly payments and total interest costs.",
  alternates: { canonical: "https://clearnestcalculator.site/blog/30-year-vs-15-year-mortgage/" },
};

export default function BlogPost() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "30-Year vs 15-Year Mortgage: Pros and Cons",
    "datePublished": "2026-02-28",
    "dateModified": "2026-02-28",
    "author": { "@type": "Organization", "name": "ClearNest" },
    "publisher": { "@type": "Organization", "name": "ClearNest" }
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnestcalculator.site/" },
    { name: "Blog", url: "https://clearnestcalculator.site/blog/" },
    { name: "30-Year vs 15-Year Mortgage", url: "https://clearnestcalculator.site/blog/30-year-vs-15-year-mortgage/" }
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mb-8 border-b border-border pb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
          30-Year vs 15-Year Mortgage: Pros and Cons
        </h1>
        <div className="text-text-muted flex items-center gap-4 text-sm">
          <span>By ClearNest Editorial Team</span>
          <span>•</span>
          <span>Last Updated: February 28, 2026</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none text-text-primary">
        <figure className="mb-10 overflow-hidden rounded-2xl shadow-lg border border-border">
          <img
            src="https://images.unsplash.com/photo-1518481612222-68bbe828eba1?auto=format&fit=crop&q=80&w=1200&h=630"
            alt="Clock and calendar on a desk"
            className="w-full h-auto object-cover"
          />
          <figcaption className="p-4 bg-slate-50 text-sm text-text-muted italic border-t border-border text-center">
            The loan term significantly impacts your monthly payment and total interest.
          </figcaption>
        </figure>

        <p>
          When choosing a mortgage, one of the most significant decisions you'll make is the loan term. The two most common options are the 30-year fixed-rate mortgage and the 15-year fixed-rate mortgage. Each has its own set of advantages and disadvantages, and the best choice depends entirely on your financial situation and goals.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">The 30-Year Mortgage: Lower Payments, More Flexibility</h2>
        <p>
          The 30-year fixed-rate mortgage is the most popular choice among homebuyers. Its primary appeal is that it spreads the cost of the home over three decades, resulting in significantly lower monthly payments compared to shorter terms.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Pros:</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Lower Monthly Payments:</strong> Because the principal is spread over 360 months, your monthly obligation is much lower, making it easier to qualify for the loan and leaving more room in your budget for other expenses.</li>
          <li><strong>Increased Purchasing Power:</strong> Lower payments mean you can afford to borrow more, potentially allowing you to buy a larger or more expensive home.</li>
          <li><strong>Flexibility:</strong> You can always choose to pay extra toward the principal when you have the funds, effectively turning a 30-year loan into a 15-year loan, but you aren't locked into the higher payment if times get tough.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Cons:</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Higher Total Interest:</strong> You will pay significantly more in interest over the life of the loan because you are borrowing the money for twice as long.</li>
          <li><strong>Higher Interest Rates:</strong> Lenders typically charge slightly higher interest rates for 30-year loans compared to 15-year loans because they are taking on risk for a longer period.</li>
          <li><strong>Slower Equity Build-Up:</strong> In the early years of a 30-year mortgage, the vast majority of your payment goes toward interest, meaning you build equity very slowly.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-10 mb-4">The 15-Year Mortgage: Faster Payoff, Less Interest</h2>
        <p>
          A 15-year fixed-rate mortgage compresses the repayment schedule into half the time. This means higher monthly payments, but substantial savings over the long run.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Pros:</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Massive Interest Savings:</strong> You will pay a fraction of the total interest compared to a 30-year loan.</li>
          <li><strong>Lower Interest Rates:</strong> Lenders generally offer lower interest rates for 15-year loans, compounding your savings.</li>
          <li><strong>Faster Equity Growth:</strong> A much larger portion of your monthly payment goes toward the principal from day one, allowing you to build equity rapidly.</li>
          <li><strong>Debt-Free Sooner:</strong> You'll own your home free and clear in 15 years, which is especially appealing for those planning for retirement.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-3">Cons:</h3>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Higher Monthly Payments:</strong> The monthly payment will be significantly higher, which can strain your budget and make it harder to qualify for the loan.</li>
          <li><strong>Reduced Purchasing Power:</strong> Because the payment is higher, you may not qualify to borrow as much, potentially limiting your home choices.</li>
          <li><strong>Less Financial Flexibility:</strong> You are locked into the higher payment. If you experience a job loss or financial hardship, the higher payment could become a burden.</li>
        </ul>

        <div className="bg-slate-50 p-8 rounded-2xl border border-border my-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Compare Terms Side-by-Side</h3>
          <p className="mb-6 text-text-muted">Use our amortization calculator to see the exact difference in monthly payments and total interest between a 15-year and 30-year loan.</p>
          <Link href="/amortization-calculator/" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
            Compare Amortization Schedules
          </Link>
        </div>
      </div>
    </article>
  );
}
