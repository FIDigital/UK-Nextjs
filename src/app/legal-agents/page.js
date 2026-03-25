"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  Scale, 
  Gavel, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Lock,
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
  "name": "Legal & Compliance AI Agents",
  "description": "Autonomous AI agents for contract review, due diligence, and regulatory compliance (GDPR/FCA) for UK legal firms.",
  "provider": {
    "@type": "Organization",
    "name": "FI Digital UK",
    "url": "https://fidigital.co.uk"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "serviceType": "Legal Professional Services AI",
  "offers": {
    "@type": "Offer",
    "description": "Risk-aware legal agents"
  }
};

export default function LegalAgentsPage() {
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

  const capabilities = [
    {
      title: "Contract Review & Analysis",
      desc: "Instantly flag non-standard terms and liability risks across thousands of pages using Claude 3.5 Sonnet's 200k context window.",
      icon: <FileText size={28} className="text-secondary" />
    },
    {
      title: "Regulatory Compliance Monitoring",
      desc: "Real-time monitoring of SRA and FCA regulatory updates, automatically mapping changes to your internal policies and procedures.",
      icon: <Scale size={28} className="text-secondary" />
    },
    {
      title: "Due Diligence (RAG)",
      desc: "Advanced Retrieval-Augmented Generation for complex litigation support and historical case law investigation at massive scale.",
      icon: <Search size={28} className="text-secondary" />
    },
    {
      title: "GDPR & Data Sovereignty",
      desc: "Full data residency on Azure UK South ensures all legal documents never leave United Kingdom jurisdiction.",
      icon: <Lock size={28} className="text-secondary" />
    }
  ];

  return (
    <div ref={containerRef} style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section style={{ padding: '160px 1.5rem 100px', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '4rem' }}>
            <span className="section-label reveal" style={{ background: 'var(--secondary)' }}>Professional Services</span>
            <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Autonomous <span style={{ color: 'var(--secondary)' }}>Legal & Compliance</span> Agents
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              We build risk-aware AI agents for UK legal and professional services. Built on Anthropic&apos;s Claude and deployed in Azure UK South, our agents handle heavy document processing with human-level reasoning.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/contact" className="btn-primary" style={{ background: 'var(--secondary)' }}>Request Legal Audit <ArrowRight size={18} /></Link>
              <Link href="#architecture" className="btn-secondary">Technical Architecture</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" style={{ padding: '120px 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="section-title reveal">High-Integrity Intelligence</h2>
            <p className="reveal" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)' }}>
              From contract auditing to policy enforcement, our agents allow legal teams to focus on strategy while AI handles the heavy document lifting.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {capabilities.map((c, i) => (
              <div key={i} className="reveal" style={{ padding: '3rem 2rem', background: 'var(--bg)', borderRadius: '32px', border: '1px solid var(--border)', transition: 'transform 0.3s ease' }}>
                <div style={{ marginBottom: '1.5rem', background: 'rgba(75,85,99,0.1)', width: 'fit-content', padding: '1rem', borderRadius: '16px' }}>{c.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>{c.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPLACE RULE Section (No Zoho Mentioned) */}
      <section id="architecture" style={{ padding: '120px 1.5rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div className="reveal" style={{ position: 'relative', height: '500px', borderRadius: '40px', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--bg)', boxShadow: 'var(--card-shadow)' }}>
               <div style={{ padding: '4rem' }}>
                  <h4 style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', opacity: 0.6, marginBottom: '2rem' }}>Trust Architecture</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1.25rem' }}>
                      <Lock className="text-secondary" />
                      <div>
                        <div style={{ fontWeight: 800 }}>End-to-End Encryption</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>AES-256 for all stored legal documents.</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1.25rem' }}>
                      <Scale className="text-secondary" />
                      <div>
                        <div style={{ fontWeight: 800 }}>SRA Guidelines Built-in</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Agents operate within SRA ethics frameworks.</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1.25rem' }}>
                      <Gavel className="text-secondary" />
                      <div>
                        <div style={{ fontWeight: 800 }}>Chain of Reasoning</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Full logic traces for AI-assisted decisions.</div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
            <div>
              <span className="section-label reveal" style={{ background: 'var(--secondary)' }}>Security First</span>
              <h2 className="section-title reveal">Enterprise-Grade Legal AI Stack</h2>
              <p className="reveal" style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                We deploy our agents using Azure OpenAI Service in UK South. This provides the general reasoning and multimodal capabilities of GPT-4o while satisfying the most stringent data residency requirements of the UK legal sector.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "No Model Training on Client Data",
                  "Direct Microsoft Azure Government Integration",
                  "Customized RAG Pipelines for Precedent Retrieval",
                  "API-first Architecture for Legacy Legal Tech"
                ].map((item, i) => (
                  <li key={i} className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontWeight: 600 }}>
                    <CheckCircle2 size={18} className="text-secondary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--text)', padding: '6rem 3rem', borderRadius: '48px', color: 'var(--bg)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Scale Your Firm&apos;s Intelligence</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '3.5rem', opacity: 0.8 }}>Protect your firm’s reputation with AI that follows SRA guidelines and UK law.</p>
            <Link href="/contact" className="btn-primary" style={{ background: 'var(--secondary)', border: 'none' }}>Speak with a Legal AI Architect</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
