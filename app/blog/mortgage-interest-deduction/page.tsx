import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import InternalLinks from "@/components/ui/InternalLinks";

export const metadata: Metadata = {
    title: "Mortgage Interest Deduction 2026: Rules & Limits | ClearNest",
    description: "Learn about the permanent 2026 mortgage interest deduction rules. Find out how much interest you can deduct, PMI deductibility, and whether you should itemize.",
    alternates: { canonical: "https://clearnestcalculator.site/blog/mortgage-interest-deduction/" },
};

export default function BlogPost() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Mortgage Interest Deduction 2026: What You Need to Know",
        "datePublished": "2026-03-20",
        "dateModified": "2026-03-20",
        "author": { "@type": "Organization", "name": "ClearNest" },
        "publisher": { "@type": "Organization", "name": "ClearNest" }
    };

    const breadcrumbs = [
        { name: "Home", url: "https://clearnestcalculator.site/" },
        { name: "Blog", url: "https://clearnestcalculator.site/blog/" },
        { name: "Mortgage Interest Deduction 2026", url: "https://clearnestcalculator.site/blog/mortgage-interest-deduction/" }
    ];

    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <SchemaMarkup schema={schema} />
            <BreadcrumbSchema items={breadcrumbs} />

            <div className="mb-8 border-b border-border pb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
                    Mortgage Interest Deduction 2026: Rules, Limits, and PMI
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
                        src="https://images.unsplash.com/photo-1554224154-26032ffc0fee?auto=format&fit=crop&q=80&w=1200&h=630"
                        alt="Tax documents with glasses and calculator"
                        className="w-full h-auto object-cover"
                    />
                    <figcaption className="p-4 bg-slate-50 text-sm text-text-muted italic border-t border-border text-center">
                        Itemizing your deductions could save you thousands at tax time via the OBBBA limits.
                    </figcaption>
                </figure>

                <p>
                    As homeowners prepare their finances for 2026, understanding the Mortgage Interest Deduction (MID) is critical. Thanks to recent legislative changes—specifically the One Big Beautiful Bill Act (OBBBA)—many of the temporary tax rules we grew accustomed to have been made permanent or significantly altered.
                </p>

                <h2 className="text-3xl font-semibold mt-10 mb-4">2026 Acquisition Debt Limits</h2>
                <p>
                    For mortgages originated after December 15, 2017, the rules are officially permanent: you can only deduct the interest on the first <strong>$750,000</strong> of mortgage debt (or $375,000 if married filing separately).
                </p>
                <p>
                    If your mortgage was secured <em>before</em> December 15, 2017, you rest securely in the grandfathered tier. You can continue to deduct the interest on up to $1 million of mortgage debt ($500,000 if married filing separately).
                </p>

                <h2 className="text-3xl font-semibold mt-10 mb-4">Is PMI Deductible in 2026?</h2>
                <p>
                    Yes! One of the most sought-after provisions has returned. Beginning in the 2026 tax year, homeowners paying Private Mortgage Insurance (PMI), FHA premiums, VA funding fees, or USDA guarantee fees can once again deduct these costs. Just be aware that this deduction is subject to phase-outs for high earners based on their Adjusted Gross Income (AGI).
                </p>

                <h2 className="text-3xl font-semibold mt-10 mb-4">Should You Take the Standard Deduction?</h2>
                <p>
                    You cannot claim the mortgage interest deduction unless you <strong>itemize</strong> your taxes on Schedule A. For the 2025 tax year (filed in 2026), the standard deductions are:
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li><strong>Single / Married Filing Separately:</strong> $15,750</li>
                    <li><strong>Head of Household:</strong> $23,625</li>
                    <li><strong>Married Filing Jointly:</strong> $31,500</li>
                </ul>
                <p>
                    Additionally, the 2026 rules raised the State and Local Tax (SALT) deduction cap to $40,000. For many homeowners in high-property-tax states, the combination of a $40,000 SALT deduction plus their mortgage interest will heavily outweigh the $31,500 standard deduction, making itemizing the clear winner.
                </p>

                <h2 className="text-3xl font-semibold mt-10 mb-4">Home Equity Loans and HELOCs</h2>
                <p>
                    If you take out a Home Equity Line of Credit (HELOC), the interest is only deductible if you use the funds to "buy, build, or substantially improve" the home that secures the loan. If you use a HELOC to pay off credit card debt or buy a car, that interest is <strong>not</strong> deductible.
                </p>

                <div className="bg-slate-50 p-8 rounded-2xl border border-border my-10 text-center">
                    <h3 className="text-2xl font-bold mb-4">Want to See How Much Interest You Pay?</h3>
                    <p className="mb-6 text-text-muted">Use our Amortization Calculator to see your exact interest payments year by year, helping you estimate your potential tax deductions.</p>
                    <Link href="/amortization-calculator/" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                        View Amortization Schedule
                    </Link>
                </div>
            </div>
        </article>
    );
}
