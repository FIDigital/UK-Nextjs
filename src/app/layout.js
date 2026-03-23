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
  title: "FI Digital UAE | AI Agent Architects",
  description: "Enterprise-grade Agentic AI and Zoho CRM implementation services in Dubai and the UAE.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
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
