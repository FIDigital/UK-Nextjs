"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  Users, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Cpu,
  Star
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const teamGroups = [
  { group: "UK Architecture", location: "London", focus: "Enterprise Strategy & Compliance" },
  { group: "Zoho Excellence", location: "Sydney", focus: "Eco-system Integration & Flow" },
  { group: "AI R&D Labs", location: "Pune", focus: "Agentic Reasoning & LLM Fine-tuning" },
  { group: "Client Success", location: "Dubai", focus: "ROI Mapping & Global Ops" }
];

export default function OurTeamPage() {
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
            <span className="section-label reveal">The Collective</span>
            <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              Our <span className="text-primary">Team</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              A global powerhouse of 200+ engineers, architects, and AI researchers. We bring together the world&apos;s best talent to solve the UK&apos;s most complex enterprise automation challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Team Distribution (BLEND) */}
      <section style={{ padding: '120px 1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {teamGroups.map((t) => (
              <div key={t.group} className="reveal" style={{ padding: '3.5rem 2.5rem', background: 'var(--bg-secondary)', borderRadius: '32px', border: '1px solid var(--border)', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                    <Users className="text-primary" />
                  </div>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>{t.group}</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.5, marginBottom: '1.5rem' }}>
                  <MapPin size={12} /> {t.location}
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.9rem' }}>{t.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoho Heritage (BLEND) */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Rooted in Platform Expertise</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', marginBottom: '4rem', fontSize: '1.1rem' }}>
            Our team includes some of the world’s most certified Zoho and Salesforce architects. This technical depth allows us to build AI agents that truly &quot;understand&quot; the nuances of enterprise database structures.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
             {[
               "Zoho MVP Alumni",
               "Salesforce Architect Certified",
               "n8n Core Experts",
               "FCA Tech Panel Members"
             ].map(s => (
               <div key={s} className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2rem', background: 'var(--bg)', borderRadius: '16px', border: '1px solid var(--border)', fontWeight: 800 }}>
                  <Star size={18} className="text-secondary" /> {s}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--primary)', padding: '5rem 2rem', borderRadius: '48px', color: 'white' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 950, marginBottom: '1.5rem' }}>The Architect Advantage</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9 }}>Work with a team that values engineering integrity and UK jurisdiction security above all else.</p>
            <Link href="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>Speak to Our Leadership</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
