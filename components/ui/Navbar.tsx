"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Mortgage Calc", href: "/mortgage-calculator" },
    { name: "Affordability", href: "/affordability-calculator" },
    { name: "Refinance", href: "/refinance-calculator" },
    { name: "Amortization", href: "/amortization-calculator" },
    { name: "Rent vs Buy", href: "/rent-vs-buy-calculator" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* Show icon only on small screens (mobile) */}
              <div className="block sm:hidden">
                <Image src="/clearicon.svg" alt="ClearNest Icon" width={32} height={32} className="h-8 w-auto" priority />
              </div>
              {/* Show full logo on medium and larger screens (tablets, desktop) */}
              <div className="hidden sm:block">
                <Image src="/clearlogo.svg" alt="ClearNest Logo" width={160} height={40} className="h-8 w-auto min-h-[32px] max-h-[40px]" priority />
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-text-primary hover:text-primary font-medium text-sm lg:text-base">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center">
            <Link href="/mortgage-calculator" className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:brightness-110 transition-all text-sm lg:text-base">
              Get Started Free
            </Link>
          </div>
          <div className="flex items-center lg:hidden">
            <button onClick={toggleMenu} className="text-text-primary hover:text-primary focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-primary hover:bg-slate-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Link
                  href="/mortgage-calculator"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary text-white px-4 py-3 rounded-full font-medium hover:brightness-110 transition-all"
                >
                  Get Started Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
