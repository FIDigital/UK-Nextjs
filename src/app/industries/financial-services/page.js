"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  PieChart, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Lock,
  LineChart
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
  "name": "Enterprise AI for Financial Services",
  "description": "FCA-compliant AI solutions for UK financial institutions. AML/KYC automation, risk modeling, and secure data residency.",
  "provider": {
    "@type": "Organization",
    "name": "FI Digital UK",
    "url": "https://fidigital.co.uk"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "serviceType": "FinTech AI Solutions",
  "offers": {
    "@type": "Offer",
    "description": "High-integrity financial AI systems"
  }
};

export default function FinancialServicesIndustryPage() {
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
            <span className="section-label reveal">Industry Solution</span>
            <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              Enterprise AI for <span className="text-primary">Financial Services</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              We build mission-critical AI for the UK financial sector. From autonomous AML screening to real-time risk modeling, our systems meet the highest standards of FCA compliance and data residency.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Consult with FinTech Architects <ArrowRight size={18} /></Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginLeft: '1rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase' }}>Compliance:</span>
                <span style={{ fontWeight: 900, opacity: 0.7 }}>FCA Ready</span>
                <span style={{ fontWeight: 900, opacity: 0.7 }}>Azure UK South</span>
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
              { title: "AML & KYC Automation", desc: "Autonomous identity verification and transaction monitoring that reduces false positives by 60% while maintaining 100% auditability.", icon: <ShieldCheck /> },
              { title: "Predictive Risk Modeling", desc: "AI agents that analyze market volatility and credit risk in real-time, providing instant decision support for lending and investment.", icon: <LineChart /> },
              { title: "Algorithmic Compliance", desc: "Automatic mapping of FCA and BoE regulatory updates to internal policies, ensuring real-time adherence to UK law.", icon: <Lock /> }
            ].map((item, i) => (
              <div key={i} className="reveal" style={{ padding: '3.5rem 2.5rem', background: 'var(--bg-secondary)', borderRadius: '32px', border: '1px solid var(--border)' }}>
                 <div className="text-primary" style={{ marginBottom: '1.5rem' }}>{item.icon}</div>
                 <h3 style={{ fontWeight: 900, marginBottom: '1rem' }}>{item.title}</h3>
                 <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residency Section (REPLACE rule - emphasis on Azure/Bedrock) */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div className="reveal">
              <h2 className="section-title">Mission-Critical Security</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                Security is not an add-on for financial services; it is the foundation. We deploy all UK financial AI workloads within **Azure UK South** or **AWS London**, ensuring data never leaves the jurisdiction and satisfies all GDPR and FCA data sovereignty requirements.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "Private Endpoint AI Orchestration",
                  "Bring Your Own Key (BYOK) Encryption",
                  "VPC Isolation for All Model Inference",
                  "Dedicated UK-Based Engineering Support"
                ].map((s) => (
                  <li key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontWeight: 600 }}>
                    <CheckCircle2 size={18} className="text-primary" /> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal" style={{ background: 'var(--bg)', padding: '4rem', borderRadius: '48px', border: '1px solid var(--border)', boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}>
               <Building2 className="text-primary" style={{ marginBottom: '2rem' }} size={48} />
               <h3 style={{ fontSize: '1.75rem', fontWeight: 950, marginBottom: '1.5rem' }}>FCA Compliance Framework</h3>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>Our AI architectures are designed from the ground up to follow the FCA&apos;s guiding principles on transparency, accountability, and consumer protection in the age of generative AI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(135deg, var(--primary) 0%, #4F46E5 100%)', padding: '5rem 2rem', borderRadius: '48px', color: 'white' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Secure Your Financial Future</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9 }}>Partner with the UK architects of high-integrity financial AI.</p>
            <Link href="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>Request Regulatory Review</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
