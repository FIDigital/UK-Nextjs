"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  Code2, 
  Cpu, 
  Server, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Terminal,
  ShieldAlert
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
  "name": "Custom AI Agent Development",
  "description": "Production-grade AI agent development using LangChain, Python, and enterprise LLMs like Claude 3.5 and GPT-4o.",
  "provider": {
    "@type": "Organization",
    "name": "FI Digital UK",
    "url": "https://fidigital.co.uk"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "serviceType": "AI Software Engineering",
  "offers": {
    "@type": "Offer",
    "description": "Custom autonomous AI agent solutions"
  }
};

export default function CustomAIAgentDevPage() {
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
            <span className="section-label reveal">AI Engineering</span>
            <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              Custom <span className="text-primary">AI Agent</span> Development
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              We build production-grade, autonomous AI agents that operate inside your enterprise systems. Powered by LangChain, Python, and the world&apos;s most advanced LLMs, deployed on secure UK infrastructure.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Start Development <ArrowRight size={18} /></Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginLeft: '1rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase' }}>Partners:</span>
                <span style={{ fontWeight: 900, opacity: 0.7 }}>AWS Bedrock</span>
                <span style={{ fontWeight: 900, opacity: 0.7 }}>Azure OpenAI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section style={{ padding: '120px 1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'flex-start' }}>
            <div className="reveal">
              <h2 className="section-title">Engineering-First AI</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Unlike &quot;no-code&quot; wrappers, we build custom agentic architectures using the **LangChain** ecosystem and **Python**. This allows for complex multi-step reasoning, custom tool-calling, and state-persistent memory that enterprise workloads demand.
              </p>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {[
                  { title: "Advanced Model Orchestration", desc: "Dynamically switch between GPT-4o for code generation and Claude 3.5 for complex reasoning within a single agentic workflow.", icon: <Cpu /> },
                  { title: "Custom Tool Integration", desc: "We build secure API bridges that allow agents to read and write to your private databases, ERPs, and legacy software.", icon: <Terminal /> },
                  { title: "Secure UK Deployment", desc: "Deployment options include Azure UK South and AWS eu-west-2 (London) to meet FCA and GDPR residency requirements.", icon: <Server /> }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '12px', background: 'var(--hover-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>{item.icon}</div>
                    <div>
                      <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ background: 'var(--bg-secondary)', padding: '3rem', borderRadius: '40px', border: '1px solid var(--border)' }}>
              <div style={{ marginBottom: '2rem' }}>
                <Code2 size={40} className="text-primary" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>The Agentic Layer</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Our custom agents are built with engineering discipline, incorporating:</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                {[
                  "Hierarchical Multi-Agent Systems",
                  "Plan-and-Execute Architectures",
                  "Self-Correction & Reflection Loops",
                  "FCA-Compliant Audit Logging",
                  "Role-Based Access Control (RBAC)",
                  "Prompt Engineering Excellence"
                ].map(s => (
                  <li key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} className="text-primary" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Azure/AWS Deployment Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
             <span className="section-label">Enterprise Deployment</span>
             <h2 className="section-title">Cloud Agnostic. Compliance Specific.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            <div className="reveal" style={{ background: 'var(--bg)', padding: '3.5rem 2.5rem', borderRadius: '32px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontWeight: 900, marginBottom: '1.5rem' }}>Azure OpenAI</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Best for Microsoft-invested enterprises. We deploy GPT-4o via **Azure UK South** for general reasoning, conversational intelligence, and rapid code generation.
              </p>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', opacity: 0.6, fontSize: '0.8rem', fontWeight: 700 }}>IDEAL FOR: OFFICE 365 ECOSYSTEMS</div>
            </div>
            <div className="reveal" style={{ background: 'var(--bg)', padding: '3.5rem 2.5rem', borderRadius: '32px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontWeight: 900, marginBottom: '1.5rem' }}>AWS Bedrock</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Leveraging **AWS London (eu-west-2)** for heavy document processing using Claude 3.5 Sonnet and Opus. Superior reasoning for factual compliance tasks.
              </p>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', opacity: 0.6, fontSize: '0.8rem', fontWeight: 700 }}>IDEAL FOR: CONTRACT & COMPLIANCE AI</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(135deg, var(--primary) 0%, #4F46E5 100%)', padding: '5rem 2rem', borderRadius: '48px', color: 'white' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Build Your Autonomous Workforce</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9 }}>Stop experimenting. Start deploying production-ready AI agents.</p>
            <Link href="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>Request Architect Call</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
