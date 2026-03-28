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
  metadataBase: new URL('https://clearnestcalculator.site/'),
  alternates: {
    canonical: './',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'ClearNest — Free US Mortgage Calculator',
    description: 'Calculate monthly mortgage payments instantly.',
    url: 'https://clearnestcalculator.site/',
    siteName: 'ClearNest',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClearNest — Free US Mortgage Calculator',
    description: 'Calculate your monthly mortgage payment instantly.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#004fc8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Dynamic Fix for Domain Redirection, pages.dev Indexing & Canonical Consistency */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var h = window.location.hostname;
                var p = window.location.pathname;
                var s = window.location.search;

                // 1. Full Domain Redirection (self-healing for lack of dashboard rules)
                if (h === 'www.clearnestcalculator.site' || h.includes('.pages.dev')) {
                  window.location.replace('https://clearnestcalculator.site' + p + s);
                  return;
                }

                // 2. Prevent indexing of preview domains (Double protection)
                if (h.includes('.pages.dev')) {
                  var r = document.createElement('meta');
                  r.name = 'robots'; r.content = 'noindex, nofollow';
                  document.head.appendChild(r);
                }

                // 3. Forced Canonical Consistency (ensures trailing slashes & absolute custom domain)
                var c = document.querySelector('link[rel="canonical"]');
                if (!c) {
                  c = document.createElement('link');
                  c.rel = 'canonical';
                  document.head.appendChild(c);
                }
                c.href = 'https://clearnestcalculator.site' + (p === '/' ? '/' : p.replace(/\\/$/, '') + '/');
              })();
            `
          }}
        />
      </head>
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
