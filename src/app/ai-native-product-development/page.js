"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  AppWindow, 
  Smartphone, 
  Settings2, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Code2,
  Cpu
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
  "name": "AI-Native Product Development",
  "description": "Full-stack development of AI-native web and mobile applications using React, Python, and integrated LLM architectures.",
  "provider": {
    "@type": "Organization",
    "name": "FI Digital UK",
    "url": "https://fidigital.co.uk"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "serviceType": "SaaS Product Engineering",
  "offers": {
    "@type": "Offer",
    "description": "Custom AI-native product engineering"
  }
};

export default function AiNativeProductPage() {
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
            <span className="section-label reveal">SaaS Engineering</span>
            <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              AI-Native <span className="text-secondary">Product</span> Development
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              We build software where AI is the foundation, not just a feature. Full-stack development of web and mobile applications designed for the agentic era.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ background: 'var(--secondary)' }}>Launch Your Product <ArrowRight size={18} /></Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginLeft: '1rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase' }}>Built with:</span>
                <span style={{ fontWeight: 900, opacity: 0.7 }}>React</span>
                <span style={{ fontWeight: 900, opacity: 0.7 }}>Python</span>
                <span style={{ fontWeight: 900, opacity: 0.7 }}>FastAPI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Excellence Section */}
      <section style={{ padding: '120px 1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'flex-start' }}>
            <div className="reveal">
              <h2 className="section-title">The AI-Native Stack</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                Building an AI-native product requires more than just calling an API. It requires a resilient backend (Python/FastAPI), a high-performance frontend (React/Next.js), and a deep understanding of prompt orchestration and model latency.
              </p>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                  { title: "Scalable AI Backends", desc: "Using Python and FastAPI to build high-concurrency reasoners that power your product features.", icon: <Code2 /> },
                  { title: "Dynamic AI Interfaces", desc: "React-based frontends that handle real-time AI streams, multimodal interaction, and adaptive layouts.", icon: <AppWindow /> },
                  { title: "Mobile Agentic Apps", desc: "React Native solutions that bring autonomous agent power to iOS and Android devices.", icon: <Smartphone /> }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '12px', background: 'var(--hover-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>{item.icon}</div>
                    <div>
                      <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ background: 'var(--bg-secondary)', padding: '3.5rem', borderRadius: '40px', border: '1px solid var(--border)' }}>
              <Cpu className="text-secondary" style={{ marginBottom: '2rem' }} size={40} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Integrated LLM Ops</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>We ensure your product is stable, scalable, and secure from day one:</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                {[
                  "Prompt Caching & Cost Optimization",
                  "Automated Model Fallbacks",
                  "Secure UK Data Governance Layers",
                  "Multi-tenant AI Architectures",
                  "Real-time Token Monitoring",
                  "Private Semantic Caches"
                ].map(s => (
                  <li key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} className="text-secondary" /> {item}
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
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(135deg, #1d4ed8 0%, #4F46E5 100%)', padding: '5rem 2rem', borderRadius: '48px', color: 'white' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Ready to Ship?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9 }}>Convert your vision into a production-grade AI-native product in weeks.</p>
            <Link href="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>Start Your Build Session</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
