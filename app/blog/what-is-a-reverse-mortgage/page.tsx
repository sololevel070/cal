import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
    title: "What is a Reverse Mortgage? 2026 Limits & Rates | ClearNest",
    description: "Learn what a reverse mortgage is, the 2026 HECM loan limits, interest rates, and how you can turn your home equity into tax-free cash in retirement.",
    alternates: { canonical: "https://clearnestcalculator.site/blog/what-is-a-reverse-mortgage/" },
};

export default function BlogPost() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What is a Reverse Mortgage? 2026 Limits & Rates",
        "datePublished": "2026-03-20",
        "dateModified": "2026-03-20",
        "author": { "@type": "Organization", "name": "ClearNest" },
        "publisher": { "@type": "Organization", "name": "ClearNest" }
    };

    const breadcrumbs = [
        { name: "Home", url: "https://clearnestcalculator.site/" },
        { name: "Blog", url: "https://clearnestcalculator.site/blog/" },
        { name: "What is a Reverse Mortgage", url: "https://clearnestcalculator.site/blog/what-is-a-reverse-mortgage/" }
    ];

    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <SchemaMarkup schema={schema} />
            <BreadcrumbSchema items={breadcrumbs} />

            <div className="mb-8 border-b border-border pb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
                    What is a Reverse Mortgage? 2026 Limits & Rates
                </h1>
                <div className="text-text-muted flex items-center gap-4 text-sm">
                    <span>By ClearNest Editorial Team</span>
                    <span>•</span>
                    <span>Last Updated: March 20, 2026</span>
                </div>
            </div>

            <div className="prose prose-lg max-w-none text-text-primary">
                <figure className="mb-10 overflow-hidden rounded-2xl shadow-lg border border-border">
                    <img
                        src="https://images.unsplash.com/photo-1570534241031-6bba84b0eb1a?auto=format&fit=crop&q=80&w=1200&h=630"
                        alt="Senior couple reviewing their finances at home"
                        className="w-full h-auto object-cover"
                    />
                    <figcaption className="p-4 bg-slate-50 text-sm text-text-muted italic border-t border-border text-center">
                        A reverse mortgage helps homeowners 62 and older convert equity into cash.
                    </figcaption>
                </figure>

                <p>
                    For many seniors, their home is their biggest financial asset. However, much of that wealth is tied up in the property—which isn't useful for paying day-to-day living expenses or healthcare bills. That's where a reverse mortgage comes in.
                </p>

                <p>
                    A Home Equity Conversion Mortgage (HECM)—the most common type of reverse mortgage—allows homeowners aged 62 or older to convert a portion of their home equity into usable cash. Unlike a traditional mortgage, you don't make monthly loan payments. Instead, the lender pays you, and the loan balance increases over time until you sell the home, move out permanently, or pass away.
                </p>

                <h2 className="text-3xl font-semibold mt-10 mb-4">How Does a Reverse Mortgage Work?</h2>
                <p>
                    In a reverse mortgage, the lender makes payments to you using the accumulated equity in your home. These funds are generally tax-free and can be received as a lump sum, monthly payments, a line of credit, or a combination. The loan is non-recourse, meaning you (or your heirs) will never owe more than the home's appraised value at the time the loan is repaid.
                </p>
                <p>
                    However, you are still required to pay property taxes, homeowners insurance, and maintain the property. Failing to meet these obligations can result in the loan becoming due immediately.
                </p>

                <h2 className="text-3xl font-semibold mt-10 mb-4">2026 Reverse Mortgage Limits</h2>
                <p>
                    The Federal Housing Administration (FHA), which insures HECM loans, sets an annual maximum claim amount limit. For 2026, the maximum claim amount for an HECM reverse mortgage has increased to <strong>$1,249,125</strong> (up from $1,209,750 in 2025). This limit applies nationwide, including in high-cost areas.
                </p>
                <p>
                    It's important to remember that this limit is the maximum home value the FHA will consider for calculating proceeds. The actual cash you receive depends on:
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li><strong>Age:</strong> The older you are, the higher the percentage of equity you can borrow.</li>
                    <li><strong>Interest Rates:</strong> Lower interest rates increase your borrowing power.</li>
                    <li><strong>Home Value:</strong> Your home's appraised value up to the FHA limit.</li>
                </ul>

                <h2 className="text-3xl font-semibold mt-10 mb-4">What Are the Current Interest Rates?</h2>
                <p>
                    Reverse mortgages typically feature two main types of interest rates:
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li><strong>Fixed-Rate:</strong> Best if you want a lump-sum disbursement. In early 2026, fixed rates typically hovered between 7.68% and 7.81%.</li>
                    <li><strong>Adjustable-Rate:</strong> Commonly preferred for lines of credit or monthly payments. These rates fluctuated starting around 5.375% (plus margins) and adjusted based on market indices. These loans carry a lifetime cap (usually 5% over the start rate) to protect borrowers.</li>
                </ul>

                <h2 className="text-3xl font-semibold mt-10 mb-4">Steps to Get an HECM Reverse Mortgage</h2>
                <p>
                    If you meet the age and equity requirements, you must follow strict FHA guidelines to acquire the loan:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                    <li><strong>Attend HUD-Approved Counseling:</strong> This is a mandatory, independent session where a counselor explains the costs, risks, and alternatives to ensure you understand what you are signing up for.</li>
                    <li><strong>Apply with a Lender:</strong> Choose an FHA-approved lender to submit your application.</li>
                    <li><strong>Financial Assessment:</strong> Lenders will verify that you have the income and resources to continue paying your property taxes and home insurance.</li>
                    <li><strong>Appraisal:</strong> A licensed appraiser evaluates your home's current market value and condition.</li>
                    <li><strong>Closing & Funding:</strong> Once approved, the loan closes and you can access your equity.</li>
                </ol>

                <div className="bg-slate-50 p-8 rounded-2xl border border-border my-10 text-center">
                    <h3 className="text-2xl font-bold mb-4">Looking at Traditional Mortgages?</h3>
                    <p className="mb-6 text-text-muted">Use our powerful calculators to model traditional 15-year or 30-year payments.</p>
                    <Link href="/mortgage-calculator/" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                        Calculate Mortgage
                    </Link>
                </div>
            </div>
        </article>
    );
}
