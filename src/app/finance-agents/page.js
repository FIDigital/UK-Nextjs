"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  BarChart3, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  FileSearch,
  Receipt
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
  "name": "Finance & Billing AI Agents",
  "description": "Autonomous AI agents for KYC/AML automation, invoice processing, and FCA-compliant financial workflows.",
  "provider": {
    "@type": "Organization",
    "name": "FI Digital UK",
    "url": "https://fidigital.co.uk"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "serviceType": "FinTech AI Automation",
  "offers": {
    "@type": "Offer",
    "description": "Enterprise-grade financial automation agents"
  }
};

export default function FinanceAgentsPage() {
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
      title: "KYC & AML Automation",
      desc: "Instant identity verification and sanction screening using Claude-powered reasoning for high-accuracy compliance.",
      icon: <ShieldCheck size={28} className="text-primary" />
    },
    {
      title: "Intelligent Invoice processing",
      desc: "Extract data from complex multi-layered invoices with 99.1% accuracy, including line-item reconciliation.",
      icon: <Receipt size={28} className="text-primary" />
    },
    {
      title: "Automated Collections",
      desc: "Sentiment-aware AI agents that manage outreach for overdue payments while maintaining professional brand voice.",
      icon: <Clock size={28} className="text-primary" />
    },
    {
      title: "Real-time Reconciliation",
      desc: "Bridge bank statements to your accounting ledger (Zoho Books/Xero) automatically with self-healing error detection.",
      icon: <BarChart3 size={28} className="text-primary" />
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
            <span className="section-label reveal">Digital Workers</span>
            <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Autonomous <span className="text-primary">Finance & Billing</span> Agents
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Eliminate manual data entry and compliance risks. Our agents integrate with your existing ERP to handle high-volume financial workflows with mathematical precision and FCA-compliant audit trails.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/contact" className="btn-primary">Deploy Your Agent <ArrowRight size={18} /></Link>
              <Link href="#capabilities" className="btn-secondary">View Capabilities</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" style={{ padding: '120px 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="section-title reveal">Where AI Meets Financial Integrity</h2>
            <p className="reveal" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)' }}>
              We deploy agents that don&apos;t just follow rules—they reason through them, ensuring every transaction is governed and every error is flagged.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {capabilities.map((c, i) => (
              <div key={i} className="reveal" style={{ padding: '3rem 2rem', background: 'var(--bg-secondary)', borderRadius: '32px', border: '1px solid var(--border)', transition: 'transform 0.3s ease' }}>
                <div style={{ marginBottom: '1.5rem' }}>{c.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>{c.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoho Blending Section (BLEND) */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-label reveal">Platform Synergy</span>
              <h2 className="section-title reveal">Zoho Books & Finance Suite Powered by AI</h2>
              <p className="reveal" style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                Don&apos;t replace your infrastructure—amplify it. We layer Azure OpenAI (GPT-4o) and Claude reasoning over your Zoho Finance Plus stack to create self-healing accounting workflows.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "Automatic Ledger Categorization",
                  "AI-Powered Cash Flow Forecasting",
                  "Automated Supplier Portal Management",
                  "Secure UK Data Residency for Every Record"
                ].map((item, i) => (
                  <li key={i} className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontWeight: 600 }}>
                    <CheckCircle2 size={18} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal" style={{ position: 'relative', height: '450px', borderRadius: '32px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--primary) 0%, #4F46E5 100%)', opacity: 0.1 }} />
              <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <div style={{ background: 'var(--bg)', padding: '2rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span style={{ fontWeight: 800 }}>Agent Activity Log</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--success)' }}>● ONLINE</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--primary)', fontWeight: 700 }}>[REASONING]</span> Analyzing Invoice #INV-882...
                    </div>
                    <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--success)', fontWeight: 700 }}>[ACTION]</span> Matched PO-922 to Receipt.
                    </div>
                    <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--primary)', fontWeight: 700 }}>[ZOHO]</span> Booked to General Ledger.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee (Small version) */}
      <section style={{ padding: '80px 1.5rem', borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2rem', letterSpacing: '0.1em' }}>Deployed On Enterprise Infrastructure</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.5 }}>
            <span style={{ fontWeight: 900, fontSize: '1.2rem' }}>Azure OpenAI</span>
            <span style={{ fontWeight: 900, fontSize: '1.2rem' }}>AWS Bedrock</span>
            <span style={{ fontWeight: 900, fontSize: '1.2rem' }}>n8n</span>
            <span style={{ fontWeight: 900, fontSize: '1.2rem' }}>Claude 3.5</span>
            <span style={{ fontWeight: 900, fontSize: '1.2rem' }}>Zoho Finance</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)', padding: '5rem 2rem', borderRadius: '48px', color: 'white' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Ready to Automate Your Ledger?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9 }}>Book a 4-week discovery audit to map your financial automation roadmap.</p>
            <Link href="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>Book Audit Sessions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
