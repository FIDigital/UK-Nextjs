import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import ZohoSalesIQ from "@/components/ZohoSalesIQ";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Enterprise AI Agents | FI Digital UK",
  description: "Custom AI agents for Finance, Legal & Logistics. 200+ engineers. 10 years experience. Claude, GPT-4o, n8n, LangChain.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FI Digital UK",
  "legalName": "Digital Synergy Ventures UK Limited",
  "url": "https://fidigital.co.uk",
  "logo": "https://fidigital.co.uk/images/logo.png",
  "description": "AI agent development and enterprise automation for UK businesses",
  "foundingDate": "2016",
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": 200 },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressCountry": "GB"
  },
  "sameAs": [
    "https://fidigital.com.au",
    "https://www.linkedin.com/company/fidigital"
  ],
  "areaServed": ["GB", "AU", "AE", "IN"],
  "knowsAbout": ["AI Agents", "LangChain", "Claude AI", "n8n", "Enterprise Automation", "Azure OpenAI"]
};

import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
          <Header />
          <main style={{ minHeight: '80vh' }}>
            {children}
          </main>
          <Footer />
          <FloatingContactButton />
          <ZohoSalesIQ />
        </ThemeProvider>
      </body>
    </html>
  );
}
