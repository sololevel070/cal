"use client";

import Link from "next/link";
import { Home, Menu, X } from "lucide-react";
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
            <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
              <Home className="w-6 h-6" />
              ClearNest
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-text-primary hover:text-primary font-medium text-sm lg:text-base">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center">
            <Link href="/mortgage-calculator" className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors text-sm lg:text-base">
              Get Started Free
            </Link>
          </div>
          <div className="flex items-center md:hidden">
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
            className="md:hidden bg-white border-b border-border overflow-hidden"
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
                  className="block w-full text-center bg-primary text-white px-4 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
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
