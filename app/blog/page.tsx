import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Mortgage & Homebuying Blog | ClearNest",
  description: "Learn everything you need to know about mortgages, homebuying, and personal finance.",
  alternates: { canonical: "https://clearnestcalculator.site/blog/" },
};

const posts = [
  {
    title: "How to Calculate Mortgage Payments (And Hidden Costs)",
    slug: "how-to-calculate-mortgage-payments",
    excerpt: "Learn how to calculate your true mortgage payment. Understand principal, interest, taxes, insurance, and the formulas used to estimate your monthly cost.",
    date: "March 20, 2026"
  },
  {
    title: "Mortgage Interest Deduction 2026: Rules & Limits",
    slug: "mortgage-interest-deduction",
    excerpt: "Learn about the permanent 2026 mortgage interest deduction rules. Find out how much interest you can deduct, PMI deductibility, and whether you should itemize.",
    date: "March 20, 2026"
  },
  {
    title: "VA Mortgage Rates 2026: Limits, Funding Fees & Guidelines",
    slug: "va-mortgage-rates",
    excerpt: "Your complete guide to VA mortgage rates in 2026. Discover today's rates, zero-down payment options, funding fee changes, and exact VA loan limits.",
    date: "March 20, 2026"
  },
  {
    title: "How to Get Preapproved for a Mortgage in 2026",
    slug: "how-to-get-preapproved-for-mortgage",
    excerpt: "Learn the exact steps to get preapproved for a mortgage in 2026. Discover the requirements, how your credit score affects the process, and what documents you need.",
    date: "March 20, 2026"
  },
  {
    title: "What is a Reverse Mortgage? 2026 Limits & Rates",
    slug: "what-is-a-reverse-mortgage",
    excerpt: "Learn what a reverse mortgage is, the 2026 HECM loan limits, interest rates, and how you can turn your home equity into tax-free cash in retirement.",
    date: "March 20, 2026"
  },
  {
    title: "How to Find a Mortgage Broker in 2026",
    slug: "how-to-find-a-mortgage-broker",
    excerpt: "Looking for a mortgage broker near you? Learn the steps to find, interview, and compare brokers to secure the best rates.",
    date: "March 20, 2026"
  },
  {
    title: "How Much House Can I Afford?",
    slug: "how-much-house-can-i-afford",
    excerpt: "Learn how to calculate your homebuying budget using the 28/43 rule and understand what lenders look for.",
    date: "March 15, 2026"
  },
  {
    title: "FHA vs Conventional Loan: Which is Right for You?",
    slug: "fha-vs-conventional-loan",
    excerpt: "Compare FHA and conventional mortgages to find the best fit for your credit score and down payment.",
    date: "March 10, 2026"
  },
  {
    title: "What is PMI (Private Mortgage Insurance)?",
    slug: "what-is-pmi",
    excerpt: "Understand what PMI is, how much it costs, and how you can avoid paying it or get rid of it early.",
    date: "March 5, 2026"
  },
  {
    title: "30-Year vs 15-Year Mortgage: Pros and Cons",
    slug: "30-year-vs-15-year-mortgage",
    excerpt: "Decide between a 15-year and 30-year mortgage by comparing monthly payments and total interest costs.",
    date: "February 28, 2026"
  },
  {
    title: "How to Pay Off Your Mortgage Early",
    slug: "how-to-pay-off-mortgage-early",
    excerpt: "Discover proven strategies to pay off your mortgage years ahead of schedule and save thousands in interest.",
    date: "February 20, 2026"
  },
  {
    title: "What Credit Score Do You Need to Buy a House?",
    slug: "what-credit-score-to-buy-house",
    excerpt: "Find out the minimum credit score requirements for different types of home loans and how to improve yours.",
    date: "February 15, 2026"
  }
];

export default function BlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "ClearNest Mortgage Blog",
    "url": "https://clearnestcalculator.site/blog/"
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnestcalculator.site/" },
    { name: "Blog", url: "https://clearnestcalculator.site/blog/" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Mortgage & Homebuying Insights</h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          Expert advice to help you navigate the homebuying process, understand your mortgage options, and save money.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}/`} key={post.slug} className="group">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border h-full transition-all hover:shadow-md hover:border-primary/30">
              <div className="text-sm text-text-muted mb-3">{post.date}</div>
              <h2 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-text-muted line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-4 text-primary font-medium flex items-center">
                Read Article &rarr;
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
