"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  Calendar, 
  Search, 
  PenTool, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  BarChart,
  Lightbulb
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "4-Week AI Discovery Audit",
  "description": "A high-impact 4-week diagnostic to identify high-ROI AI opportunities within your UK enterprise.",
  "provider": {
    "@type": "Organization",
    "name": "FI Digital UK",
    "url": "https://fidigital.co.uk"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "serviceType": "AI Consulting & Strategy",
  "offers": {
    "@type": "Offer",
    "price": "12000",
    "priceCurrency": "GBP",
    "description": "Comprehensive AI audit and roadmap"
  }
};

const timeline = [
  { week: "Week 1", title: "Process Discovery", desc: "Mapping your core business workflows and identifying data silos." },
  { week: "Week 2", title: "AI Diagnostic", desc: "Testing 3 key pilot use-cases against Claude 3.5 and GPT-4o reasoning layers." },
  { week: "Week 3", title: "Compliance Review", desc: "Full audit of your data security and residency (GDPR/FCA) protocols." },
  { week: "Week 4", title: "Strategy & Roadmap", desc: "Delivery of a 12-month ROI-focused AI implementation roadmap." }
];

export default function DiscoveryAuditPage() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".reveal", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section style={{ padding: '160px 1.5rem 100px', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', marginBottom: '4rem' }}>
            <span className="section-label reveal">Engagement</span>
            <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              4-Week <span className="text-primary">AI Discovery</span> Audit
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Stop guessing. Start measuring. Get a high-impact diagnostic of your enterprise workflows to identify where AI-native agents will drive the most immediate ROI.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Book Audit <ArrowRight size={18} /></Link>
              <div style={{ background: 'rgba(59,130,246,0.1)', padding: '0.75rem 1.5rem', borderRadius: '12px', fontWeight: 900, color: 'var(--primary)' }}>
                Investment: from £12,000 + VAT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: '120px 1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {timeline.map((t, i) => (
              <div key={t.week} className="reveal" style={{ padding: '2.5rem', background: 'var(--bg-secondary)', borderRadius: '32px', border: '1px solid var(--border)', position: 'relative' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', opacity: 0.5, marginBottom: '1rem' }}>{t.week}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>{t.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{t.desc}</p>
                <div style={{ position: 'absolute', top: '-10px', right: '30px', fontSize: '4rem', fontWeight: 900, opacity: 0.03 }}>{i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Outcomes Section (BLEND) */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div className="reveal">
              <span className="section-label">Deliverables</span>
              <h2 className="section-title">The Roadmap to AI Maturity</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                We don&apos;t just deliver a report. We deliver an actionable blueprint that bridges the gap between your legacy software (Zoho, Salesforce, Microsoft) and the AI-native future.
              </p>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  { title: "Priority AI Heatmap", icon: <BarChart /> },
                  { title: "Technical Feasibility Study", icon: <Lightbulb /> },
                  { title: "Residency & Security Analysis", icon: <Search /> }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontWeight: 800 }}>
                    <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
                    {item.title}
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ background: 'var(--bg)', padding: '5rem 3.5rem', borderRadius: '48px', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}>
               <h3 style={{ fontWeight: 950, fontSize: '2rem', marginBottom: '2rem' }}>Audit Outcome</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    <span style={{ opacity: 0.8 }}>Processes Screened</span>
                    <span style={{ fontWeight: 800 }}>50+</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    <span style={{ opacity: 0.8 }}>High-ROI Pilots</span>
                    <span style={{ fontWeight: 800 }}>3</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem' }}>
                     <span style={{ opacity: 0.8 }}>Estimated ROI</span>
                     <span style={{ fontWeight: 800, color: 'var(--success)' }}>250 - 400%</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--text)', padding: '5rem 2rem', borderRadius: '48px', color: 'var(--bg)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Secure Your Audit Slot</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9 }}>Book now and discover your firm&apos;s AI advantage within 30 days.</p>
            <Link href="/contact" className="btn-primary">Apply for Audit Session</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
