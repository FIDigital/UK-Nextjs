"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  RefreshCcw, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Building2,
  Lock
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
  "name": "Legacy System Modernisation with AI",
  "description": "Breathe new life into legacy systems (Zoho, Salesforce, Microsoft) by layering AI intelligence and modern API structures.",
  "provider": {
    "@type": "Organization",
    "name": "FI Digital UK",
    "url": "https://fidigital.co.uk"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "serviceType": "Digital Transformation",
  "offers": {
    "@type": "Offer",
    "description": "Legacy-first AI modernization"
  }
};

export default function LegacyModernisationPage() {
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
        <div className="container">
          <div style={{ maxWidth: '900px', marginBottom: '4rem' }}>
            <span className="section-label reveal">Digital Transformation</span>
            <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              Legacy System <span className="text-secondary">Modernisation</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Don&apos;t rip and replace. Modernize. We layer autonomous AI agents and modern API architectures over your legacy Zoho, Salesforce, and Microsoft environments to unlock immediate ROI.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ background: 'var(--secondary)' }}>Start Transformation <ArrowRight size={18} /></Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginLeft: '1rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase' }}>Built on Trust:</span>
                <span style={{ fontWeight: 900, opacity: 0.7 }}>AWS Bedrock</span>
                <span style={{ fontWeight: 900, opacity: 0.7 }}>Azure AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modernization Approach Section */}
      <section style={{ padding: '120px 1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center' }}>
            <div className="reveal">
              <span className="section-label" style={{ background: 'var(--secondary)' }}>The Strategy</span>
              <h2 className="section-title">AI: The Ultimate Bridge</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                Legacy systems are data goldmines often trapped behind outdated interfaces. Our approach treats your existing software as an API, using AI to translate outdated data structures into modern, actionable intelligence.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { title: "Zero Downtime Modernization", desc: "Layer AI agents over existing workflows without disrupting your daily operations.", icon: <Zap /> },
                  { title: "Legacy API Bridging", desc: "Build secure, modern REST APIs over old databases and terminal-based systems.", icon: <Layers /> },
                  { title: "Compliance-First Migration", desc: "Ensure all data remains in UK jurisdiction (Azure UK South) throughout the modernization process.", icon: <Lock /> }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(75,85,99,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>{item.icon}</div>
                    <div>
                      <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ background: 'var(--bg-secondary)', padding: '4rem', borderRadius: '48px', border: '1px solid var(--border)', boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}>
              <Building2 className="text-secondary" style={{ marginBottom: '2rem' }} size={48} />
              <h3 style={{ fontSize: '1.75rem', fontWeight: 950, marginBottom: '2rem' }}>Zoho & ERP Advanced Layering</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>We specialize in making your core business software work harder:</p>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  "Zoho Creator - Custom Intelligence Hubs",
                  "Salesforce - AI-Driven Leads Enrichment",
                  "Microsoft Dynamics - Workflow Automation",
                  "Sap/Oracle - Secure Data Extraction Pipelines"
                ].map((s) => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700, paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                     <CheckCircle2 size={18} className="text-secondary" /> {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--bg-secondary)', padding: '6rem 3rem', borderRadius: '48px', border: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Breathe New Life into Your Stack</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '3.5rem', color: 'var(--text-muted)' }}>Map your modernization roadmap in a 4-week discovery audit.</p>
            <Link href="/contact" className="btn-primary" style={{ background: 'var(--secondary)', border: 'none' }}>Speak with a Modernization Architect</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
