"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  ShieldAlert, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Lock,
  Search,
  FileCheck
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ComplianceDataPage() {
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
      {/* Hero Section */}
      <section style={{ padding: '160px 1.5rem 100px', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', marginBottom: '4rem' }}>
            <span className="section-label reveal" style={{ background: 'var(--secondary)' }}>Security First</span>
            <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              UK <span style={{ color: 'var(--secondary)' }}>Compliance</span> & Data Residency
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Your data is sovereign. We build AI systems that satisfy the most stringent UK regulatory requirements, ensuring all inference, storage, and processing stays firmly within the United Kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* Key Compliance Bricks (REPLACE rule) */}
      <section style={{ padding: '120px 1.5rem' }}>
        <div className="container">
          <div style={{ display: grid, gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
            
            <div className="reveal" style={{ padding: '4rem 3rem', background: 'var(--bg-secondary)', borderRadius: '40px', border: '1px solid var(--border)' }}>
               <MapPin className="text-secondary" style={{ marginBottom: '1.5rem' }} size={40} />
               <h3 style={{ fontSize: '2rem', fontWeight: 950, marginBottom: '1.5rem' }}>Azure UK South</h3>
               <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                 We utilize Microsoft Azure&apos;s London-based data centres for all OpenAI workloads. This ensures your GPT-4o queries and results never leave the UK jurisdiction, satisfying FCA data residency guidelines.
               </p>
            </div>

            <div className="reveal" style={{ padding: '4rem 3rem', background: 'var(--bg-secondary)', borderRadius: '40px', border: '1px solid var(--border)' }}>
               <Lock className="text-secondary" style={{ marginBottom: '1.5rem' }} size={40} />
               <h3 style={{ fontSize: '2rem', fontWeight: 950, marginBottom: '1.5rem' }}>AWS London Region</h3>
               <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                 Our AWS Bedrock implementations are pinned to the **eu-west-2** region. This provides high-performance access to Claude reasoning engines within a secure, UK-governed VPC environment.
               </p>
            </div>

          </div>
        </div>
      </section>

      {/* GDPR & FCA Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div className="reveal">
              <h2 className="section-title">Built for Regulated Industries</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                We understand that for UK legal and financial firms, AI is a compliance challenge before it is a technology opportunity. Our &quot;Sovereign-First&quot; architecture provides documented proof of data handling to satisfy internal DPO audits.
              </p>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  { title: "Zero Model Training", desc: "Your data is never used to train public models (OpenAI/Anthropic)." },
                  { title: "FCA Tech Guidelines", desc: "Architectures designed following FCA operational resilience frameworks." },
                  { title: "GDPR by Design", desc: "Full data mapping and right-to-erasure protocols built into every agent." }
                ].map((item, i) => (
                   <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', fontWeight: 800 }}>
                      <CheckCircle2 className="text-secondary" />
                      <div>
                        {item.title}
                        <div style={{ fontWeight: 400, opacity: 0.6, fontSize: '0.85rem' }}>{item.desc}</div>
                      </div>
                   </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ background: 'var(--bg)', padding: '5rem 4rem', borderRadius: '48px', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)', textAlign: 'center' }}>
               <ShieldAlert className="text-secondary" style={{ marginBottom: '1.5rem', margin: '0 auto' }} size={64} />
               <h3 style={{ fontSize: '1.75rem', fontWeight: 950, marginTop: '2rem', marginBottom: '1rem' }}>Sovereign AI Only</h3>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>We refuse to deploy on &quot;Global&quot; endpoints for our UK clients. Every bit of data stays on UK soil. No exceptions.</p>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--text)', padding: '6rem 3rem', borderRadius: '48px', color: 'var(--bg)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Total Data Peace of Mind</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '3.5rem', opacity: 0.8 }}>Get of a copy of our UK South AI Security Manifest.</p>
            <Link href="/contact" className="btn-primary" style={{ background: 'var(--secondary)', border: 'none' }}>Request Security Review</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
