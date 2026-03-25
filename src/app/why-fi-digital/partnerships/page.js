"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  Award, 
  ShieldCheck, 
  Certificate, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Cpu,
  Lock
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PartnershipsPage() {
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
            <span className="section-label reveal">Our Credentials</span>
            <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              Partnerships & <span className="text-secondary">Certifications</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.3rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              We partner with the world’s leading technology providers to deliver certified, high-performance AI solutions for UK enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Bricks (BLEND) */}
      <section style={{ padding: '120px 1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            
            <div className="reveal" style={{ padding: '4rem 3rem', background: 'var(--bg-secondary)', borderRadius: '40px', border: '1px solid var(--border)' }}>
               <h3 style={{ fontSize: '2rem', fontWeight: 950, marginBottom: '1.5rem' }}>Microsoft Cloud Partner</h3>
               <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
                 As a Microsoft Cloud Partner, we deploy sovereign AI solutions via **Azure OpenAI Service**. This gives our UK clients GPT-4o power with UK jurisdictional data residency.
               </p>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 800, fontSize: '0.9rem' }}>
                 <CheckCircle2 className="text-secondary" /> Azure UK South Expert
               </div>
            </div>

            <div className="reveal" style={{ padding: '4rem 3rem', background: 'rgba(59,130,246,0.05)', borderRadius: '40px', border: '1px solid var(--border)' }}>
               <h3 style={{ fontSize: '2rem', fontWeight: 950, marginBottom: '1.5rem' }}>AWS Solutions Partner</h3>
               <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
                 We utilize **AWS Bedrock** for high-context legal and financial document reasoning using Anthropic Claude Opus and Sonnet models.
               </p>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 800, fontSize: '0.9rem' }}>
                 <CheckCircle2 className="text-primary" /> AWS London Regional Support
               </div>
            </div>

            <div className="reveal" style={{ padding: '4rem 3rem', background: 'var(--bg-secondary)', borderRadius: '40px', border: '1px solid var(--border)' }}>
               <h3 style={{ fontSize: '2rem', fontWeight: 950, marginBottom: '1.5rem' }}>Zoho Authorized Partner</h3>
               <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
                 With deep heritage in the Zoho ecosystem, we are uniquely positioned to build complex AI agents that layer over Zoho CRM, Books, and Inventory.
               </p>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 800, fontSize: '0.9rem' }}>
                 <CheckCircle2 className="text-orange" style={{ color: '#F06624' }} /> Zoho AI Implementation Specialists
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Compliance Awards */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Security & Governance</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', marginTop: '4rem', flexWrap: 'wrap' }}>
             {[
               "Cyber Essentials Plus (UK)",
               "GDPR Registered Official",
               "FCA Tech Practitioner",
               "ISO 27001 Methodology"
             ].map(s => (
               <div key={s} className="reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <ShieldCheck size={48} className="text-secondary" />
                  <span style={{ fontWeight: 900, fontSize: '0.9rem' }}>{s}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--text)', padding: '6rem 3rem', borderRadius: '48px', color: 'var(--bg)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Work with Certified Experts</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '3.5rem', opacity: 0.8 }}>Leverage the world’s most powerful AI platforms with total UK jurisdictional security.</p>
            <Link href="/contact" className="btn-primary" style={{ background: 'var(--secondary)', border: 'none' }}>Verify Our Credentials</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
