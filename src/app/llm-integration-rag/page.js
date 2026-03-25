"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  Database, 
  Search, 
  FileSearch, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  ShieldCheck,
  BrainCircuit,
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
  "name": "LLM Integration & RAG Systems",
  "description": "Enterprise-grade Retrieval-Augmented Generation (RAG) and LLM integration using Claude 3.5, GPT-4o, and secure vector databases.",
  "provider": {
    "@type": "Organization",
    "name": "FI Digital UK",
    "url": "https://fidigital.co.uk"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "serviceType": "AI Infrastructure Engineering",
  "offers": {
    "@type": "Offer",
    "description": "High-accuracy RAG & LLM pipelines"
  }
};

const modelMatrix = [
  { model: "Anthropic Claude 3.5", context: "200k Tokens", strength: "High-accuracy reasoning & compliance", bestFor: "Legal, Finance, Large Document Analysis" },
  { model: "OpenAI GPT-4o", context: "128k Tokens", strength: "Conversational speed & code generation", bestFor: "Customer Service, Engineering, General Utility" },
  { model: "Google Gemini 1.5 Pro", context: "2M Tokens", strength: "Multimodal & massive context windows", bestFor: "Video Analysis, Ultra-long PDF repositories" },
  { model: "Meta Llama 3.1 (70B/405B)", context: "128k Tokens", strength: "Open-source & private cloud flexibility", bestFor: "Data Sovereignty, Custom Finetuning" }
];

export default function LlmIntegrationRAGPage() {
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
            <span className="section-label reveal">AI Infrastructure</span>
            <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              LLM Integration & <span className="text-primary">RAG</span> Systems
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              We transform your static data into a living intelligence layer. Using Retrieval-Augmented Generation (RAG) and multi-model architectures, we bridge the gap between enterprise data silos and private LLM instances.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Build Your Data Layer <ArrowRight size={18} /></Link>
              <Link href="#matrix" className="btn-secondary">View Model Matrix</Link>
            </div>
          </div>
        </div>
      </section>

      {/* RAG Process Section */}
      <section style={{ padding: '120px 1.5rem' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '5rem' }}>
           <h2 className="section-title">Beyond Simple Chat</h2>
           <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
             We don&apos;t just connect an LLM to your data. We build a high-fidelity information retrieval system that ensures your AI is factual, grounded, and secure.
           </p>
        </div>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            <div className="reveal" style={{ padding: '3.5rem 2.5rem', background: 'var(--bg-secondary)', borderRadius: '32px', border: '1px solid var(--border)' }}>
               <Database className="text-primary" style={{ marginBottom: '1.5rem' }} />
               <h3 style={{ fontWeight: 900, marginBottom: '1rem' }}>Data Orchestration</h3>
               <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>We pipeline data from SharePoint, local databases, and web APIs into secure vector stores using Pinecone or Milvus.</p>
            </div>
            <div className="reveal" style={{ padding: '3.5rem 2.5rem', background: 'var(--bg-secondary)', borderRadius: '32px', border: '1px solid var(--border)' }}>
               <BrainCircuit className="text-primary" style={{ marginBottom: '1.5rem' }} />
               <h3 style={{ fontWeight: 900, marginBottom: '1rem' }}>Reasoning Layer</h3>
               <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Using LangChain or LlamaIndex, we build complex retrieval logic that searches for semantic meaning, not just keywords.</p>
            </div>
            <div className="reveal" style={{ padding: '3.5rem 2.5rem', background: 'var(--bg-secondary)', borderRadius: '32px', border: '1px solid var(--border)' }}>
               <ShieldCheck className="text-primary" style={{ marginBottom: '1.5rem' }} />
               <h3 style={{ fontWeight: 900, marginBottom: '1rem' }}>Grounded Output</h3>
               <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Our systems cite their sources for every answer, ensuring auditability and eliminating hallucinations in enterprise environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Matrix Section */}
      <section id="matrix" style={{ padding: '120px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <span className="section-label">Technical Reference</span>
             <h2 className="section-title">LLM Decision Matrix</h2>
             <p style={{ color: 'var(--text-muted)' }}>Choosing the right foundation model for your specific UK enterprise workflow.</p>
          </div>
          <div className="reveal" style={{ overflowX: 'auto', background: 'var(--bg)', borderRadius: '32px', border: '1px solid var(--border)', boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)', background: 'rgba(59,130,246,0.05)' }}>
                  <th style={{ padding: '2rem', fontWeight: 900 }}>Model Class</th>
                  <th style={{ padding: '2rem', fontWeight: 900 }}>Context Window</th>
                  <th style={{ padding: '2rem', fontWeight: 900 }}>Core Strength</th>
                  <th style={{ padding: '2rem', fontWeight: 900 }}>Primary Use Case</th>
                </tr>
              </thead>
              <tbody>
                {modelMatrix.map((m, i) => (
                  <tr key={m.model} style={{ borderBottom: i === modelMatrix.length - 1 ? 'none' : '1px solid var(--border)', transition: 'background 0.2s ease' }}>
                    <td style={{ padding: '2rem', fontWeight: 800, color: 'var(--primary)' }}>{m.model}</td>
                    <td style={{ padding: '2rem', opacity: 0.8 }}>{m.context}</td>
                    <td style={{ padding: '2rem', fontWeight: 600 }}>{m.strength}</td>
                    <td style={{ padding: '2rem', opacity: 0.8 }}>{m.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--text)', padding: '5rem 2rem', borderRadius: '48px', color: 'var(--bg)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Make Your Data Actionable</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.8 }}>Protect your firm&apos;s trade secrets while leveraging the power of generative AI.</p>
            <Link href="/contact" className="btn-primary">Schedule Technical Review</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
