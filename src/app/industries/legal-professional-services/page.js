"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  Building2, 
  Scale, 
  Gavel, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  BookOpen,
  Search
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
  "name": "Enterprise AI for Legal & Professional Services",
  "description": "High-accuracy AI solutions for UK legal firms. Contract reasoning, due diligence automation, and SRA-compliant data residency.",
  "provider": {
    "@type": "Organization",
    "name": "FI Digital UK",
    "url": "https://fidigital.co.uk"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "serviceType": "Legal Professional Services AI",
  "offers": {
    "@type": "Offer",
    "description": "Risk-aware AI for professional services"
  }
};

export default function LegalIndustryPage() {
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
            <span className="section-label reveal" style={{ background: 'var(--secondary)' }}>Industry Solution</span>
            <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              Enterprise AI for <span style={{ color: 'var(--secondary)' }}>Legal & Professional</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              We build high-integrity AI for the UK professional services sector. Leveraging Claude 3.5 Sonnet&apos;s 200k context window and secure RAG pipelines, our systems handle the most complex legal document reasoning tasks with mathematical precision.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ background: 'var(--secondary)' }}>Consult with Legal AI Architects <ArrowRight size={18} /></Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginLeft: '1rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase' }}>Jurisdiction:</span>
                <span style={{ fontWeight: 900, opacity: 0.7 }}>SRA Compliant</span>
                <span style={{ fontWeight: 900, opacity: 0.7 }}>UK Data Residency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section style={{ padding: '120px 1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {[
              { title: "Due Diligence Automation", desc: "Automate the analysis of thousands of disclosure documents, instantly flagging risks and inconsistencies with full citation mapping.", icon: <Search /> },
              { title: "Contract Reasoning Layer", desc: "Layer AI over your precedent library to draft high-accuracy agreements that follow your firm's specific house style and risk appetite.", icon: <BookOpen /> },
              { title: "Conflict Check Intelligence", desc: "AI agents that monitor firm-wide engagements in real-time to identify potential conflicts of interest before they emerge.", icon: <Scale /> }
            ].map((item, i) => (
              <div key={i} className="reveal" style={{ padding: '3.5rem 2.5rem', background: 'var(--bg)', borderRadius: '32px', border: '1px solid var(--border)' }}>
                 <div style={{ marginBottom: '1.5rem', background: 'rgba(75,85,99,0.1)', width: 'fit-content', padding: '1rem', borderRadius: '16px', color: 'var(--secondary)' }}>{item.icon}</div>
                 <h3 style={{ fontWeight: 900, marginBottom: '1rem' }}>{item.title}</h3>
                 <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RAG & Reasoning Section (REPLACE rule) */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div className="reveal">
              <span className="section-label" style={{ background: 'var(--secondary)' }}>Trust Architecture</span>
              <h2 className="section-title">The Foundation of Legal AI</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                Legal firms require truth, not estimation. Our architectures use **Retrieval-Augmented Generation (RAG)** to ensure AI answers are grounded in your private documents. By hosting all inference within **Azure UK South**, we ensure your clients&apos; data remains within the United Kingdom under the highest security protocols.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "No Public Model Training on Client Data",
                  "Encrypted VNET Data Transmission",
                  "Dedicated 200k Context Windows for Large Files",
                  "SRA & GDPR Compliance Documentation Provided"
                ].map((s) => (
                  <li key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontWeight: 600 }}>
                    <CheckCircle2 size={18} className="text-secondary" /> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal" style={{ background: 'var(--bg)', padding: '5rem 3.5rem', borderRadius: '48px', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)', textAlign: 'center' }}>
               <Gavel className="text-secondary" style={{ marginBottom: '1.5rem', margin: '0 auto' }} size={64} />
               <h3 style={{ fontSize: '1.75rem', fontWeight: 950, marginTop: '1.5rem', marginBottom: '1rem' }}>Regulated Intelligence</h3>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>We partner with UK legal firms to build AI tools that augment professional judgment while strictly adhering to SRA guidelines and ethics frameworks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--text)', padding: '6rem 3rem', borderRadius: '48px', color: 'var(--bg)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Scale Your Firm&apos;s Brilliance</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '3.5rem', opacity: 0.8 }}>Securely leverage the world&apos;s most advanced reasoning engines on UK soil.</p>
            <Link href="/contact" className="btn-primary" style={{ background: 'var(--secondary)', border: 'none' }}>Speak with a Legal AI Architect</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
