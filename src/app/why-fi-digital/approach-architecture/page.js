"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  Workflow, 
  Settings2, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Layers,
  ShieldCheck,
  Code2
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  { step: "01", title: "Discovery Audit", desc: "Identifying high-ROI workflows through our 4-week diagnostic." },
  { step: "02", title: "Architecture Design", desc: "Building secure RAG pipelines and selecting the optimal LLM mix." },
  { step: "03", title: "Agent Deployment", desc: "Deploying autonomous workers into production on UK infrastructure." },
  { step: "04", title: "Continuous Tuning", desc: "Ongoing prompt optimization and model monitoring for accuracy." }
];

export default function ApproachArchitecturePage() {
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
            <span className="section-label reveal">Our Methodology</span>
            <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              Our <span className="text-primary">Approach</span> & Architecture
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              We build AI-native systems with engineering discipline. Our methodology bridges the gap between raw LLM capabilities and production-grade enterprise reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section style={{ padding: '120px 1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {steps.map((s, i) => (
              <div key={s.step} className="reveal" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '4rem', fontWeight: 950, opacity: 0.1, color: 'var(--primary)', marginBottom: '-30px' }}>{s.step}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', position: 'relative' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture (REPLACE rule) */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="section-label">Technical Stack</span>
            <h2 className="section-title">The Enterprise AI Backbone</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div className="reveal">
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem' }}>Full-Stack Intelligence</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                We don&apos;t just build chat interfaces. We build **agentic meshes**. Our architecture follows a layered approach, ensuring that your AI strategy is decoupled from model volatility and anchored in secure UK infrastructure.
              </p>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  { title: "LangChain Orchestration", desc: "Using Python-based frameworks to manage complex agent chains and state.", icon: <Code2 /> },
                  { title: "Secure RAG Pipelines", desc: "Multi-layered retrieval ensuring factual accuracy and citation mapping.", icon: <Layers /> },
                  { title: "Azure/AWS Hosting", desc: "Private model instances deployed in UK South or AWS London regions.", icon: <ShieldCheck /> }
                ].map((item, i) => (
                   <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                      <div style={{ color: 'var(--primary)', flexShrink: 0 }}>{item.icon}</div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{item.title}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</div>
                      </div>
                   </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ background: 'var(--bg)', padding: '5rem 4rem', borderRadius: '48px', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)' }}>
               <h3 style={{ fontWeight: 950, fontSize: '1.75rem', marginBottom: '2.5rem', textAlign: 'center' }}>Agentic Governance</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    "Role-Based Permission Layer",
                    "Budget & Token Guardrails",
                    "Audit Trail Persistence",
                    "Model Feedback Loops",
                    "Secure VPC Termination"
                  ].map(s => (
                    <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', fontWeight: 700 }}>
                       <CheckCircle2 size={18} className="text-primary" /> {s}
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
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--primary)', padding: '6rem 3rem', borderRadius: '48px', color: 'white' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Designed for Reliability</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '3.5rem', opacity: 0.9 }}>Partner with the UK engineers who build for production, not just prototypes.</p>
            <Link href="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>Discuss Your Architecture</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
