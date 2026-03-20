import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
    title: "How to Calculate Mortgage Payments (And Hidden Costs) | ClearNest",
    description: "Learn how to calculate your true mortgage payment. Understand principal, interest, taxes, insurance, and the formulas used to estimate your monthly cost.",
    alternates: { canonical: "https://clearnestcalculator.site/blog/how-to-calculate-mortgage-payments" },
};

export default function BlogPost() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Calculate Mortgage Payments (And Hidden Costs)",
        "datePublished": "2026-03-20",
        "dateModified": "2026-03-20",
        "author": { "@type": "Organization", "name": "ClearNest" },
        "publisher": { "@type": "Organization", "name": "ClearNest" }
    };

    const breadcrumbs = [
        { name: "Home", url: "https://clearnestcalculator.site" },
        { name: "Blog", url: "https://clearnestcalculator.site/blog" },
        { name: "How to Calculate Mortgage Payments", url: "https://clearnestcalculator.site/blog/how-to-calculate-mortgage-payments" }
    ];

    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <SchemaMarkup schema={schema} />
            <BreadcrumbSchema items={breadcrumbs} />

            <div className="mb-8 border-b border-border pb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
                    How to Calculate Mortgage Payments
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
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200&h=630"
                        alt="Person using a calculator to figure out budget"
                        className="w-full h-auto object-cover"
                    />
                    <figcaption className="p-4 bg-slate-50 text-sm text-text-muted italic border-t border-border text-center">
                        A standard mortgage payment is made up of Principal, Interest, Taxes, and Insurance (PITI).
                    </figcaption>
                </figure>

                <p>
                    When you buy a home, looking at the listing price isn't enough to tell you if it fits into your monthly budget. You need to calculate the actual mortgage payment. While you can easily use an online calculator, understanding the math behind it can help you make better financial decisions.
                </p>

                <h2 className="text-3xl font-semibold mt-10 mb-4">The PITI Breakdown</h2>
                <p>
                    Most conventional and government-backed loans require you to pay four main costs every single month, bundled together in an acronym known as <strong>PITI</strong>:
                </p>
                <ul className="list-disc pl-6 mb-6 mt-4">
                    <li><strong>P - Principal:</strong> The portion of the payment that pays down your actual loan balance.</li>
                    <li><strong>I - Interest:</strong> The fee the lender charges you to borrow the money.</li>
                    <li><strong>T - Taxes:</strong> Property taxes set by your local county. The lender collects this and puts it in an escrow account.</li>
                    <li><strong>I - Insurance:</strong> Homeowners insurance to protect against damage, plus Private Mortgage Insurance (PMI) if your down payment was less than 20%.</li>
                </ul>

                <h2 className="text-3xl font-semibold mt-10 mb-4">The Formula for Principal and Interest</h2>
                <p>
                    If you want to calculate the core part of your mortgage (just the Principal and Interest) by hand, the standard mathematical formula is:
                </p>
                <p className="bg-slate-100 p-4 rounded-lg font-mono text-center my-6">
                    M = P [ i(1 + i)^n ] / [ (1 + i)^n - 1]
                </p>
                <p>
                    <strong>Where:</strong><br />
                    <strong>M</strong> = Total monthly payment<br />
                    <strong>P</strong> = Principal loan amount<br />
                    <strong>i</strong> = Monthly interest rate (annual rate divided by 12)<br />
                    <strong>n</strong> = Number of months (e.g., 360 for a 30-year loan)
                </p>

                <h2 className="text-3xl font-semibold mt-10 mb-4">The Hidden Costs: Taxes and Insurance</h2>
                <p>
                    Once you find out the Principal and Interest, do not assume that is your final checkout price! Property taxes can add hundreds of dollars to your monthly payment depending on your state.
                </p>
                <p>
                    Similarly, home insurance rates have been rising nationwide. Lastly, if you didn't put 20% down, PMI can cost between 0.5% and 1.5% of the total loan amount annually. All of these figures are divided by 12 and added to your base Principal and Interest payment.
                </p>

                <div className="bg-slate-50 p-8 rounded-2xl border border-border my-10 text-center">
                    <h3 className="text-2xl font-bold mb-4">Calculate It Instantly</h3>
                    <p className="mb-6 text-text-muted">Skip the manual math. Our advanced calculator handles Principal, Interest, Taxes, and PMI instantly.</p>
                    <Link href="/mortgage-calculator" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                        Calculate My Payment
                    </Link>
                </div>
            </div>
        </article>
    );
}
