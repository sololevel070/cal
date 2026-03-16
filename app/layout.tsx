import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ClearNest — Free US Mortgage Calculator',
  description: 'Calculate your monthly mortgage payment instantly. Includes taxes, insurance, PMI, and full amortization schedule. Free, fast, and mobile-friendly.',
  metadataBase: new URL('https://clearnest.pages.dev'),
  openGraph: {
    title: 'ClearNest — Free US Mortgage Calculator',
    description: 'Calculate monthly mortgage payments instantly.',
    siteName: 'ClearNest',
    locale: 'en_US',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body suppressHydrationWarning className={`${inter.className} bg-slate-50 text-slate-900 overflow-x-hidden min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 pb-24 lg:pb-0">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>
        <Footer />
      </body>
    </html>
  );
}
