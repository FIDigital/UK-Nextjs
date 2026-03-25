"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  Users, 
  Target, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  MessageSquare,
  TrendingUp
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
  "name": "Sales & Outreach AI Agents",
  "description": "Autonomous AI agents for personalized lead generation, LinkedIn outreach, and Zoho CRM automation.",
  "provider": {
    "@type": "Organization",
    "name": "FI Digital UK",
    "url": "https://fidigital.co.uk"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "serviceType": "Sales Automation",
  "offers": {
    "@type": "Offer",
    "description": "High-performance sales outreach agents"
  }
};

export default function SalesAgentsPage() {
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
      title: "Hyper-Personalized Outreach",
      desc: "Our agents research prospects in real-time and craft 1-to-1 emails and LinkedIn messages that feel human and drive 3x higher response rates.",
      icon: <Mail size={28} className="text-primary" />
    },
    {
      title: "Lead Scoring & Qualification",
      desc: "Automatically filter incoming leads based on intent signals and ICP fit, surfacing only high-value opportunities to your sales team.",
      icon: <Target size={28} className="text-primary" />
    },
    {
      title: "Automated Appointment Setting",
      desc: "Agents handle the back-and-forth scheduling across time zones, booking meetings directly into your team's calendar.",
      icon: <Users size={28} className="text-primary" />
    },
    {
      title: "Market Intelligence Gathering",
      desc: "Constant monitoring of industry trends and competitor moves, feeding direct insights into your CRM for strategic advantage.",
      icon: <TrendingUp size={28} className="text-primary" />
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
              Autonomous <span className="text-primary">Sales & Outreach</span> Agents
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Scale your pipeline without increasing your headcount. Our AI sales agents research, engage, and qualify prospects 24/7, ensuring no lead is ever left cold.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/contact" className="btn-primary">Scale Your Outreach <ArrowRight size={18} /></Link>
              <Link href="#capabilities" className="btn-secondary">Explore Sales AI</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" style={{ padding: '120px 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="section-title reveal">Precision Outreach at Unlimited Scale</h2>
            <p className="reveal" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)' }}>
              From initial contact to qualified meeting, our agents manage the entire top-of-funnel journey with human-level intelligence.
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

      {/* Zoho Integration Section (BLEND) */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div className="order-mobile-2">
              <span className="section-label reveal">CRM Synergy</span>
              <h2 className="section-title reveal">Zoho CRM & AI: The Perfect Sales Engine</h2>
              <p className="reveal" style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                Keep your Zoho CRM data pristine. Our agents automatically update records, log activities, and trigger follow-up tasks, ensuring your sales pipeline is always accurate and actionable.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "Automatic Lead Enrichment in Zoho CRM",
                  "AI-Driven Next-Step Recommendations",
                  "Seamless LinkedIn + Email Orchestration",
                  "Real-time Pipeline Forecasting"
                ].map((item, i) => (
                  <li key={i} className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontWeight: 600 }}>
                    <CheckCircle2 size={18} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal order-mobile-1" style={{ position: 'relative', height: '450px', borderRadius: '32px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #6366F1 0%, var(--primary) 100%)', opacity: 0.1 }} />
              <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <div style={{ background: 'var(--bg)', padding: '2rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>AI</div>
                    <div style={{ fontSize: '0.85rem' }}>
                      <div style={{ fontWeight: 800 }}>Sales Agent Beta</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Active in LinkedIn Outreach</div>
                    </div>
                  </div>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    <p style={{ fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>&quot;I noticed you recently expanded your UK operations into cloud logistics. Given FI Digital&apos;s work with...&quot;</p>
                    <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                      <span style={{ fontSize: '0.7rem', padding: '0.25rem 0.5rem', background: 'var(--success-bg)', color: 'var(--success)', borderRadius: '4px', fontWeight: 700 }}>HIGH INTENT REACTION</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--bg-secondary)', padding: '5rem 2rem', borderRadius: '48px', border: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Stop Chasing Leads. Start Closing Them.</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--text-muted)' }}>Launch your first autonomous sales agent in as little as 4 weeks.</p>
            <Link href="/contact" className="btn-primary">Book a Strategy Call <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
