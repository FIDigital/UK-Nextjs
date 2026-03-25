"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  Network, 
  Settings2, 
  Workflow, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Layers,
  ShieldCheck
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
  "name": "Enterprise Workflow Automation (n8n)",
  "description": "Orchestrate complex enterprise workflows using n8n and AI. Built for self-healing, resilient UK business processes.",
  "provider": {
    "@type": "Organization",
    "name": "FI Digital UK",
    "url": "https://fidigital.co.uk"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "serviceType": "Workflow Automation Consulting",
  "offers": {
    "@type": "Offer",
    "description": "Enterprise-grade workflow orchestration"
  }
};

export default function WorkflowAutomationPage() {
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
            <span className="section-label reveal">Orchestration</span>
            <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              Enterprise <span className="text-secondary">Workflow</span> Automation
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Build resilient, self-healing enterprise workflows that bridge the gap between legacy systems and AI. Hosted securely on AWS (London) for full UK data compliance.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ background: 'var(--secondary)' }}>Automate My Workflows <ArrowRight size={18} /></Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginLeft: '1rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase' }}>Orchestration Hub:</span>
                <span style={{ fontWeight: 900, opacity: 0.7 }}>n8n.io Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* n8n Focus Section */}
      <section style={{ padding: '120px 1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div className="reveal" style={{ position: 'relative', height: '500px', borderRadius: '40px', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
               <div style={{ padding: '3rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ background: 'var(--bg)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--border)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff4d4d' }} />
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                    </div>
                    <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1rem', fontSize: '0.75rem', fontWeight: 700, opacity: 0.5 }}>n8n Workflow Preview</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 800 }}>● WEBHOOK: New ERP Order</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>→ AI AGENT: Reasoning Layer</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: 800 }}>→ ZOHO CRM: Update Record</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--success)', fontWeight: 800 }}>→ SLACK: Notify Team</div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="reveal">
              <span className="section-label" style={{ background: 'var(--secondary)' }}>Technical Excellence</span>
              <h2 className="section-title">The Error-Proof Workflow</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                Most automations break in production. We build with **engineering discipline**, using n8n for its transparent logic-mapping and robust error handling. If an API fails, our AI-native agents identify the issue and trigger a self-healing protocol.
              </p>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  { title: "n8n Orchestration Spine", desc: "Open-source flexibility with enterprise reliability. We host and manage your n8n instances on secure UK servers." },
                  { title: "Self-Healing Protocols", desc: "Automated retry logic and AI-driven error remediation ensure your business never stops." },
                  { title: "Legacy-First Integration", desc: "Zapier handles simple tasks; we handle the complex ones. Securely bridge your older database with modern AI." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={24} className="text-secondary" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ fontWeight: 800, marginBottom: '0.25rem' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zoho Blending Section (BLEND) */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
             <div className="reveal">
                <h3 className="section-title">Zoho Ecosystem Orchestration</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                  We specialize in extending the power of the **Zoho Suite**. By bridging Zoho Creator, CRM, and Books to external AI models via n8n, we create integrated ecosystems that handle complex multi-app business processes at scale.
                </p>
                <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--border)' }}>
                   <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                      <Layers size={20} className="text-secondary" />
                      <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>Enterprise Support</span>
                   </div>
                   <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>&quot;FI Digital transformed our chaotic Zoho instance into an automated powerhouse. Their n8n orchestration reduced our manual data entry by 80%.&quot;</p>
                </div>
             </div>
             <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                {[
                  { name: "Zoho CRM", tag: "Sales" },
                  { name: "Zoho Books", tag: "Finance" },
                  { name: "Zoho Creator", tag: "Custom" },
                  { name: "n8n.io", tag: "Bridge" },
                  { name: "AWS S3", tag: "Storage" },
                  { name: "AI Agent", tag: "Mind" }
                ].map(item => (
                  <div key={item.name} style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border)', textAlign: 'center' }}>
                    <div style={{ fontWeight: 900, marginBottom: '0.25rem' }}>{item.name}</div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase' }}>{item.tag}</div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--text)', padding: '5rem 2rem', borderRadius: '48px', color: 'var(--bg)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Ready to Scale Your Efficiency?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9 }}>Stop fighting your software. Start orchestrating your success.</p>
            <Link href="/contact" className="btn-primary" style={{ background: 'var(--secondary)', border: 'none' }}>Speak with an Automation Expert</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
