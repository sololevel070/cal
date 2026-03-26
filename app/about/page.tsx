import { Metadata } from "next";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Us | ClearNest",
  description: "Learn about ClearNest's mission to provide transparent, accurate, and easy-to-use mortgage tools for homebuyers.",
  alternates: { canonical: "https://clearnestcalculator.site/about/" },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About ClearNest",
    "description": "Learn about ClearNest's mission to provide transparent, accurate, and easy-to-use mortgage tools for homebuyers.",
    "url": "https://clearnestcalculator.site/about"
  };

  const breadcrumbs = [
    { name: "Home", url: "https://clearnestcalculator.site/" },
    { name: "About Us", url: "https://clearnestcalculator.site/about/" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SchemaMarkup schema={schema} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-text-primary mb-4">About ClearNest</h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          Demystifying the mortgage process with clear, accurate, and user-friendly tools.
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-text-primary">
        <h2 className="text-3xl font-semibold mt-10 mb-4">Our Mission</h2>
        <p>
          At ClearNest, we believe that buying a home shouldn't require a degree in finance. Our mission is to empower homebuyers with the most accurate, transparent, and easy-to-use mortgage calculators on the web. We want to help you make confident financial decisions by providing clear insights into your true housing costs.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Why We Built ClearNest</h2>
        <p>
          The internet is full of mortgage calculators, but we found that most of them suffer from the same problems:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Hidden Costs:</strong> Many calculators only show principal and interest, hiding the true cost of taxes, insurance, and HOA fees until it's too late.</li>
          <li><strong>Clunky Interfaces:</strong> Most tools are outdated, not mobile-friendly, and difficult to use on the go.</li>
          <li><strong>Lead Generation Traps:</strong> Too many sites force you to enter your email or phone number just to see your results, leading to endless spam calls from lenders.</li>
        </ul>
        <p>
          We built ClearNest to be the antidote to these problems. Our tools are 100% free, require no personal information, and include all the hidden costs of homeownership upfront.
        </p>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Our Commitment to Accuracy (E-E-A-T)</h2>
        <p>
          We understand that the numbers we provide influence major life decisions. That's why we adhere to the highest standards of Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T):
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Expertise:</strong> Our calculation engines are built using standard industry formulas used by actual lenders and financial institutions.</li>
          <li><strong>Transparency:</strong> We clearly explain how every number is calculated. You can see the exact formulas we use on our calculator pages.</li>
          <li><strong>No Bias:</strong> We are an independent platform. We are not a lender, and we do not steer you toward specific loan products. Our only goal is to provide you with accurate math.</li>
          <li><strong>Privacy First:</strong> We do not collect, store, or sell your personal financial data. All calculations happen directly in your browser.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-10 mb-4">Contact Us</h2>
        <p>
          Have a question, suggestion, or found a bug? We'd love to hear from you.
        </p>
        <p>
          Email us at: <a href="mailto:sololevel0700@gmail.com" className="text-primary hover:underline">sololevel0700@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
