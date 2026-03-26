import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Calculators</h3>
            <ul className="space-y-2">
              <li><Link href="/mortgage-calculator/" className="text-text-muted hover:text-primary">Mortgage Calculator</Link></li>
              <li><Link href="/affordability-calculator/" className="text-text-muted hover:text-primary">Affordability Calculator</Link></li>
              <li><Link href="/refinance-calculator/" className="text-text-muted hover:text-primary">Refinance Calculator</Link></li>
              <li><Link href="/amortization-calculator/" className="text-text-muted hover:text-primary">Amortization Calculator</Link></li>
              <li><Link href="/rent-vs-buy-calculator/" className="text-text-muted hover:text-primary">Rent vs Buy Calculator</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Blog</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/how-much-house-can-i-afford/" className="text-text-muted hover:text-primary">How Much House Can I Afford?</Link></li>
              <li><Link href="/blog/fha-vs-conventional-loan/" className="text-text-muted hover:text-primary">FHA vs Conventional Loan</Link></li>
              <li><Link href="/blog/what-is-pmi/" className="text-text-muted hover:text-primary">What is PMI?</Link></li>
              <li><Link href="/blog/30-year-vs-15-year-mortgage/" className="text-text-muted hover:text-primary">30-Year vs 15-Year Mortgage</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about/" className="text-text-muted hover:text-primary">About Us</Link></li>
              <li><Link href="/disclaimer/" className="text-text-muted hover:text-primary">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-text-muted text-center mb-4">
            ClearNest provides estimates only. Not financial advice. Consult a licensed mortgage professional.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-text-muted">
            <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">CFPB</a>
            <a href="https://www.freddiemac.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Freddie Mac</a>
            <a href="https://www.hud.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">HUD</a>
          </div>
          <p className="text-sm text-text-muted text-center mt-4">
            &copy; {new Date().getFullYear()} ClearNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
