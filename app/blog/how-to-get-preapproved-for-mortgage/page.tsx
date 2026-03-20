import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
    title: "How to Get Preapproved for a Mortgage in 2026 | ClearNest",
    description: "Learn the exact steps to get preapproved for a mortgage in 2026. Discover the requirements, how your credit score affects the process, and what documents you need.",
    alternates: { canonical: "https://clearnestcalculator.site/blog/how-to-get-preapproved-for-mortgage" },
};

export default function BlogPost() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Get Preapproved for a Mortgage in 2026",
        "datePublished": "2026-03-20",
        "dateModified": "2026-03-20",
        "author": { "@type": "Organization", "name": "ClearNest" },
        "publisher": { "@type": "Organization", "name": "ClearNest" }
    };

    const breadcrumbs = [
        { name: "Home", url: "https://clearnestcalculator.site" },
        { name: "Blog", url: "https://clearnestcalculator.site/blog" },
        { name: "How to Get Preapproved for a Mortgage", url: "https://clearnestcalculator.site/blog/how-to-get-preapproved-for-mortgage" }
    ];

    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <SchemaMarkup schema={schema} />
            <BreadcrumbSchema items={breadcrumbs} />

            <div className="mb-8 border-b border-border pb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
                    How to Get Preapproved for a Mortgage in 2026
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
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200&h=630"
                        alt="Signing mortgage documents with keys"
                        className="w-full h-auto object-cover"
                    />
                    <figcaption className="p-4 bg-slate-50 text-sm text-text-muted italic border-t border-border text-center">
                        Getting preapproved gives you a clear budget and shows sellers you are serious.
                    </figcaption>
                </figure>

                <p>
                    Before you start house hunting, your first step should always be getting preapproved for a mortgage. A preapproval letter is a conditional commitment from a lender stating exactly how much they are willing to lend you. In a competitive 2026 housing market, this letter is essential—it tells sellers you have the financial backing to close the deal.
                </p>

                <h2 className="text-3xl font-semibold mt-10 mb-4">Step 1: Check Your Credit Score & Financial Health</h2>
                <p>
                    Lenders look closely at your credit history to determine your reliability. Generally, you need a minimum FICO score of 620 for a conventional loan, while FHA loans might accept scores as low as 580 (with a 3.5% down payment). Check your credit report for errors and pay down revolving debt to boost your score ahead of the application.
                </p>

                <h2 className="text-3xl font-semibold mt-10 mb-4">Step 2: Calculate Your Debt-to-Income (DTI) Ratio</h2>
                <p>
                    Your Debt-to-Income (DTI) ratio is a crucial metric. It compares your total monthly debt payments (like auto loans, student loans, and credit cards) to your gross monthly income. Most lenders prefer a DTI below 36%, though some loan programs will allow up to 43% or 50% under certain circumstances.
                </p>

                <h2 className="text-3xl font-semibold mt-10 mb-4">Step 3: Gather Required Documents</h2>
                <p>
                    To complete the preapproval process, the lender will need to verify your income, assets, and employment. Collect these items in advance:
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li><strong>Proof of Identity:</strong> Government-issued ID and Social Security Number.</li>
                    <li><strong>Income Verification:</strong> W-2s or 1099s from the last two years, and your most recent pay stubs (typically covering 30 days).</li>
                    <li><strong>Asset Verification:</strong> Bank statements (last 60 days) and retirement/investment account statements.</li>
                    <li><strong>Tax Returns:</strong> Your federal tax returns from the past two years.</li>
                </ul>

                <h2 className="text-3xl font-semibold mt-10 mb-4">Step 4: Shop Around and Compare Lenders</h2>
                <p>
                    Don't just stick with your current bank. Compare rates and terms from multiple mortgage lenders, including big banks, credit unions, and online lenders. Applying with multiple lenders within a short window (e.g., 30 to 45 days) counts as a single inquiry on your credit report, minimizing the impact on your score.
                </p>

                <h2 className="text-3xl font-semibold mt-10 mb-4">Step 5: Submit the Application</h2>
                <p>
                    Once you choose a lender, complete their application and submit your documentation. They will perform a "hard pull" on your credit and assess your financial profile to determine your loan limits and interest rate.
                </p>

                <p>
                    After review, you'll receive a preapproval letter—usually valid for 60 to 90 days. Keep this letter handy so your real estate agent can attach it to any offers you make.
                </p>

                <div className="bg-slate-50 p-8 rounded-2xl border border-border my-10 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to See Your Numbers?</h3>
                    <p className="mb-6 text-text-muted">Use our free mortgage calculator to estimate your payments before you get preapproved.</p>
                    <Link href="/mortgage-calculator" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                        Try the Calculator
                    </Link>
                </div>
            </div>
        </article>
    );
}
