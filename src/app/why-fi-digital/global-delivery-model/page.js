"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  Globe, 
  MapPin, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Building2,
  Clock
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const offices = [
  { city: "London", country: "United Kingdom", desc: "Strategic Head Office & Enterprise Architecture Hub." },
  { city: "Sydney", country: "Australia", desc: "Operations & Zoho Excellence Centre." },
  { city: "Dubai", country: "UAE", desc: "Innovation & MENA Growth Office." },
  { city: "Pune", country: "India", desc: "High-Scale Engineering & AI R&D Labs." }
];

export default function GlobalDeliveryPage() {
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
            <span className="section-label reveal">Our Scale</span>
            <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              Global <span className="text-primary">Delivery</span> Model
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              We bring 200+ specialized engineers to your UK enterprise. Our hybrid delivery model combines London-based strategic architecture with global engineering excellence to deliver AI at pace and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Office Grid */}
      <section style={{ padding: '120px 1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {offices.map((o) => (
              <div key={o.city} className="reveal" style={{ padding: '3.5rem 2.5rem', background: 'var(--bg-secondary)', borderRadius: '32px', border: '1px solid var(--border)', transition: 'transform 0.3s ease' }}>
                <MapPin className="text-primary" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.25rem' }}>{o.city}</h3>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.5, marginBottom: '1.5rem' }}>{o.country}</div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Blend (REPLACE rule focus on UK scale) */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div className="reveal">
              <h2 className="section-title">The Hybrid Advantage</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                Your project is led by a UK-based Technical Lead and AI Architect. This ensures your strategic requirements, compliance protocols (FCA/GDPR), and data residency needs are managed locally, while our global engineering labs handle the heavy implementation.
              </p>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  { title: "24/7 Support Mesh", icon: <Clock /> },
                  { title: "200+ Specialized Engineers", icon: <Users /> },
                  { title: "One Point of UK Accountability", icon: <Building2 /> }
                ].map((item, i) => (
                   <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', fontWeight: 800 }}>
                      <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
                      {item.title}
                   </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ background: 'var(--bg)', padding: '5rem 4rem', borderRadius: '48px', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)', textAlign: 'center' }}>
               <Globe className="text-primary" style={{ marginBottom: '1.5rem', margin: '0 auto' }} size={64} />
               <h3 style={{ fontSize: '1.75rem', fontWeight: 950, marginTop: '2rem', marginBottom: '1rem' }}>Sovereignty by Design</h3>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>While our talent is global, your data is local. We utilize private models and dedicated UK South infrastructure for every UK client engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--text)', padding: '6rem 3rem', borderRadius: '48px', color: 'var(--bg)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Enterprise Scale. Local Trust.</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '3.5rem', opacity: 0.8 }}>Leverage a global engineering lab led by London-based AI architects.</p>
            <Link href="/contact" className="btn-primary">Speak to Our UK Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
