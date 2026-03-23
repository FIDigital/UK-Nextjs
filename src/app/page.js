"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Zap,
  MessageCircleMore,
  ArrowRight,
  Database,
  Network,
  Code,
  Cpu,
  Bot,
  Shield,
  Settings,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- SUB-COMPONENTS (IN-FILE) ---

function HomeHero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".hero-reveal", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section
      className="hero-section"
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "clamp(120px, 15vh, 160px) 1.5rem 100px",
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60%",
          height: "100%",
          zIndex: 0,
          opacity: 0.45,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/home_hero_professional.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          style={{
            objectFit: "cover",
            maskImage: "radial-gradient(circle at right, black, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)",
          }}
        />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 3, textAlign: "left" }}>
        <div style={{ maxWidth: "1000px", textAlign: "left" }}>
          <h1
            className="hero-title hero-reveal"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: "2rem",
              textWrap: "balance",
            }}
          >
            FI Digital UAE: AI Agent Architects <br />
            <span style={{ background: "linear-gradient(135deg, var(--primary) 0%, #6366F1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              for Enterprise Transformation
            </span>
          </h1>

          <p
            className="hero-reveal"
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
              color: "var(--text-muted)",
              maxWidth: "800px",
              marginBottom: "3rem",
              lineHeight: 1.7,
              textWrap: "balance",
            }}
          >
            Welcome to FI Digital UAE, where Australian Zoho expertise meets Middle
            Eastern ambition. We combine Zoho&apos;s enterprise reliability with
            Claude&apos;s reasoning, n8n&apos;s orchestration, and LangChain&apos;s
            context awareness to build agents that actually work in Arabic, across
            multiple currencies, and within UAE regulatory frameworks.
          </p>

          <div
            className="hero-actions hero-reveal"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "1.5rem",
              marginBottom: "4rem",
            }}
          >
            <Link href="/contact" className="btn-primary">
              Start Strategy Session <ArrowRight size={18} />
            </Link>

            <Link href="#pillars" className="btn-secondary">
              Explore Pillars
            </Link>
          </div>

          <div
            className="hero-reveal"
            style={{
              display: "flex",
              gap: "3rem",
              flexWrap: "wrap",
              textAlign: "left",
            }}
          >
            {[
              { num: "80+", label: "Enterprise Clients" },
              { num: "13+", label: "Years in Market" },
              { num: "AED 2M+", label: "Client Value Created" },
              { num: "99.1%", label: "Avg Automation Accuracy" },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 950, fontFamily: "inherit", background: "linear-gradient(135deg, var(--primary), var(--accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EcosystemSection() {
  return (
    <section id="ecosystem" style={{ background: 'var(--bg-secondary)', padding: '100px 1.5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="section-label">Our Technology Ecosystem</div>
            <h2 className="section-title">What Technology Stack Does FI Digital Use?</h2>
            <p style={{ marginBottom: '2.5rem', color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
              The foundation of modern enterprise transformation is orchestration across best-of-breed tools. Zoho
              provides the operational backbone. We bridge it to Claude and Gemini through n8n, creating an &apos;AI Agent Mesh&apos;
              that handles complex reasoning and maintains data sovereignty within UAE boundaries.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {[
                  { name: 'Zoho', label: 'Backbone' },
                  { name: 'Claude', label: 'Reasoning' },
                  { name: 'n8n.io', label: 'Orchestration' },
                  { name: 'LangChain', label: 'Knowledge' }
              ].map(tech => (
                <div key={tech.name} className="tech-card" style={{ padding: '2rem 1.5rem', textAlign: 'center', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '24px', transition: 'all 0.3s ease' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '0.5rem', color: 'var(--primary)' }}>{tech.name}</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>{tech.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.12)', border: '1px solid var(--border)', height: '500px', background: 'var(--bg)' }}>
            <Image
              src="/img/ecosystem_mockup.png"
              alt="Technology Ecosystem Mesh"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarRow({ pillar, index }) {
  const cardRef = useRef(null);
  const isEven = index % 2 === 0;

  useGSAP(() => {
    gsap.from(cardRef.current, {
      x: isEven ? -60 : 60,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100",
      }
    });
  }, { scope: cardRef });

  return (
    <div 
      ref={cardRef}
      style={{
        display: 'flex',
        flexDirection: isEven ? 'row' : 'row-reverse',
        gap: '5rem',
        alignItems: 'center',
        marginBottom: '8rem'
      }}
    >
      <div style={{ flex: '1', position: 'relative', height: '480px', borderRadius: '40px', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--card-shadow)' }}>
        <div style={{ width: '60%', height: '60%', border: '2px solid var(--border)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {pillar.icon}
        </div>
      </div>

      <div style={{ flex: '1' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
          <div style={{ width: '64px', height: '64px', background: 'var(--hover-bg)', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>{pillar.icon}</div>
          <h3 style={{ fontSize: '2.2rem', fontWeight: 950, lineHeight: 1.1 }}>{pillar.title}</h3>
        </div>
        <p style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '1.25rem', fontSize: '1.2rem' }}>{pillar.subtitle}</p>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.1rem', color: 'var(--text)' }}>{pillar.content}</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>{pillar.details}</p>
        
        <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--border)' }}>
          <h4 style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1.5rem', opacity: 0.6, letterSpacing: '0.1em' }}>Key Performance Metrics</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem', gridTemplateColumns: '1fr' }}>
            {pillar.stats.map(s => (
              <li key={s} style={{ display: 'flex', gap: '0.75rem', fontSize: '1rem', fontWeight: 600, alignItems: 'center' }}>
                <CheckCircle2 size={18} className="text-primary" /> {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PillarsSection() {
  const pillars = [
    {
      id: "pillar-1",
      title: "AI Agent Architecture",
      subtitle: "Transparent, Governance-First AI",
      icon: <Bot size={32} className="text-primary" />,
      content: "We architect transparent, governance-first AI agents that reason through business logic, manage approvals, and integrate seamlessly with Zoho. No black-box risks.",
      details: "Built on Claude for reasoning and Gemini for volume. Fully compliant with ISO and UAE regulations with explicit audit trails. Cycle time reduction from hours to minutes.",
      stats: ["40+ Deployed Workflows", "87% Qualification Accuracy", "Native Gulf & Levantine Arabic Support"],
    },
    {
      id: "pillar-2",
      title: "Zoho Governance",
      subtitle: "Clean, Scalable, AI-Ready Instances",
      icon: <Shield size={32} className="text-success" />,
      content: "Zoho implementations fail from customization chaos. We architect clean, governed instances designed for scale and AI integration.",
      details: "Handling VAT, labor law compliance, and data sovereignty in the architecture phase. Assistance across 80+ Zoho instances with a 94% retention rate.",
      stats: ["80+ Implementations", "Single Source of Truth Architecture", "VAT & UAE Labor Law Integration"],
    },
    {
      id: "pillar-3",
      title: "Enterprise Automation",
      subtitle: "Engineering Discipline for Workflow",
      icon: <Settings size={32} className="text-secondary" />,
      content: "Automation in the enterprise means engineering discipline: process mapping, transparent decision trees, and error handling.",
      details: "Using n8n as the orchestration spine. Organizations see payback in 3-4 months through freed capacity and reduced risk. Team of 6 operates like 8.5.",
      stats: ["200+ Hours/Month Saved", "n8n Orchestration Spine", "ROI realized in < 120 Days"],
    }
  ];

  return (
    <section id="pillars" style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <div className="section-label">Core Expertise</div>
          <h2 className="section-title">The Three Core Pillars of Our Architecture</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {pillars.map((pillar, idx) => (
            <PillarRow key={pillar.id} pillar={pillar} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { num: "01", title: "Discovery & Analysis", desc: "We analyze your business processes, identify pain points, and map the right Zoho solutions for your goals." },
    { num: "02", title: "Custom Implementation", desc: "Our certified consultants configure and customize Zoho apps to match your exact workflow requirements." },
    { num: "03", title: "Training & Onboarding", desc: "We train your team thoroughly so they can use Zoho confidently from day one, maximizing adoption." },
    { num: "04", title: "Ongoing Support", desc: "We provide dedicated post-go-live support, regular updates, and continuous optimization as your business grows." },
  ];

  return (
    <section id="process" style={{ background: "var(--bg-secondary)", padding: '120px 1.5rem' }}>
        <div className="container">
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                <span className="section-label">Execution Framework</span>
                <h2 className="section-title">Our Proven Implementation Process</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                {steps.map((step, i) => (
                    <div
                        key={step.num}
                        style={{
                            background: "var(--bg)",
                            borderRadius: "24px",
                            padding: "3rem 2rem",
                            boxShadow: "var(--card-shadow)",
                            borderTop: "4px solid var(--primary)",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <span style={{ position: "absolute", top: "1rem", right: "1.5rem", fontSize: "4rem", fontWeight: 950, color: "var(--primary)", opacity: 0.05, lineHeight: 1 }}>{step.num}</span>
                        <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, marginBottom: "1.5rem" }}>{i + 1}</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>{step.title}</h3>
                        <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

function MethodologySection() {
    const phases = [
      { num: "01", title: "Discover & Diagnose", duration: "Weeks 1-3", price: "AED 18,000", desc: "We interview your team, observe actual processes, and identify pain points with impact. We deliver a diagnostic report with automation opportunities." },
      { num: "02", title: "Design & Architecture", duration: "Weeks 3-8", price: "AED 28,000+", desc: "Process redesign, Zoho data models, n8n workflows, and AI agent specifications. We present architecture diagrams ensuring long-term maintenance." },
      { num: "03", title: "Deploy & Test", duration: "Weeks 8-16", price: "AED 80,000+", desc: "Implementation is orchestrated. We run parallel periods where human and AI processes are validated side by side for 100% accuracy." },
      { num: "04", title: "Optimize & Govern", duration: "Ongoing", price: "AED 15,000+/mo", desc: "We monitor agent accuracy and user adoption, refining behavior based on real-world feedback and establishing clear governance." }
    ];
  
    return (
      <section id="methodology" style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <div className="section-label">Strategy Session</div>
            <h2 className="section-title">How We Deploy AI Agents in Dubai</h2>
          </div>
  
          <div style={{ position: 'relative', paddingLeft: '4rem' }}>
            <div style={{ position: 'absolute', left: '1.5rem', top: 0, bottom: 0, width: '2px', background: 'var(--border)', opacity: 0.5 }} />
            
            {phases.map((p, i) => (
              <div key={p.num} style={{ position: 'relative', marginBottom: '5rem' }}>
                <div style={{ position: 'absolute', left: '-3.2rem', top: '0', width: '24px', height: '24px', borderRadius: '50%', background: 'var(--bg)', border: '4px solid var(--primary)', zIndex: 1 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.15em' }}>PHASE {p.num}</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, opacity: 0.5 }}>{p.duration}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900 }}>{p.title}</h3>
                    <span style={{ background: 'rgba(29, 78, 216, 0.08)', color: 'var(--primary)', padding: '0.5rem 1.5rem', borderRadius: '100px', fontSize: '1rem', fontWeight: 800 }}>{p.price}</span>
                  </div>
                  <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '800px' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

function NextStepsSection() {
    return (
        <section id="next-steps" style={{ padding: '120px 1.5rem', background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <div className="section-label">Get Started</div>
                    <h2 className="section-title">Ready to Architect Your AI Future?</h2>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                    {[
                        { title: "Complimentary Audit", desc: "A 45-minute readiness report identifying top automation opportunities.", action: "Get Started", icon: <Search size={32} /> },
                        { title: "Deep Strategy Session", desc: "Full technical roadmap design for enterprise-scale Zoho ecosystems.", action: "Book Call", icon: <Zap size={32} /> },
                        { title: "WhatsApp Connect", desc: "Quick answers and initial assessment from our Dubai-based team.", action: "Chat Now", icon: <MessageCircleMore size={32} /> }
                    ].map(step => (
                        <div key={step.title} style={{ background: 'var(--bg)', padding: '4rem 2.5rem', borderRadius: '32px', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)', transition: 'all 0.3s ease' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '2rem' }}>{step.icon}</div>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>{step.desc}</p>
                            <Link href="/contact" className="btn-primary" style={{ width: '100%' }}>{step.action}</Link>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '6rem', padding: '6rem 4rem', background: 'linear-gradient(135deg, #1d4ed8 0%, #6366f1 100%)', borderRadius: '48px', color: 'white', textAlign: 'center', boxShadow: '0 40px 80px rgba(29, 78, 216, 0.25)' }}>
                    <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Innovation Credit</h3>
                    <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
                        Invest in the right decision once. We credit the full cost of discovery (AED 18,000+) against your implementation contract.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <HomeHero />
      <EcosystemSection />
      <PillarsSection />
      <ProcessSection />
      <MethodologySection />
      <NextStepsSection />
    </div>
  );
}
