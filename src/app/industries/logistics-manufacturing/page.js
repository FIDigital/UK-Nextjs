"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  Building2, 
  Truck, 
  Warehouse, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Cpu,
  Boxes
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
  "name": "Enterprise AI for Logistics & Manufacturing",
  "description": "Autonomous AI solutions for UK logistics and manufacturing. Supply chain optimization, IoT integration, and Zoho Inventory automation.",
  "provider": {
    "@type": "Organization",
    "name": "FI Digital UK",
    "url": "https://fidigital.co.uk"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "serviceType": "Industrial AI Solutions",
  "offers": {
    "@type": "Offer",
    "description": "Efficiency-driven industrial AI systems"
  }
};

export default function LogisticsManufacturingIndustryPage() {
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
            <span className="section-label reveal">Industry Solution</span>
            <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              Enterprise AI for <span className="text-secondary">Logistics & Manufacturing</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Streamline your supply chain with autonomous AI agents. We combine the power of computer vision, IoT forecasting, and Zoho Inventory automation to optimize the physical movement of goods across the UK and beyond.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ background: 'var(--secondary)' }}>Consult with Logistics Architects <ArrowRight size={18} /></Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginLeft: '1rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase' }}>Expertise:</span>
                <span style={{ fontWeight: 900, opacity: 0.7 }}>Zoho Inventory</span>
                <span style={{ fontWeight: 900, opacity: 0.7 }}>IoT Mesh</span>
                <span style={{ fontWeight: 900, opacity: 0.7 }}>Azure AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section style={{ padding: '120px 1.5rem' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {[
              { title: "Autonomous Dispatch Control", desc: "Using AI to dynamically route UK vehicle fleets based on real-time traffic, fuel costs, and driver availability.", icon: <Truck /> },
              { title: "Predictive Warehouse Demand", desc: "Analyze historical Zoho data and external market signals to predict stock-outs and automate supplier reordering.", icon: <Warehouse /> },
              { title: "Computer Vision Inventory", desc: "Automate stock counts and quality control using high-speed visual reasoning agents deployed on edge devices.", icon: <Boxes /> }
            ].map((item, i) => (
              <div key={i} className="reveal" style={{ padding: '3.5rem 2.5rem', background: 'var(--bg-secondary)', borderRadius: '32px', border: '1px solid var(--border)' }}>
                 <div className="text-secondary" style={{ marginBottom: '1.5rem' }}>{item.icon}</div>
                 <h3 style={{ fontWeight: 900, marginBottom: '1rem' }}>{item.title}</h3>
                 <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoho Blending Section (BLEND) */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          <div style={{ textAlign: 'center' }}>
            <span className="section-label" style={{ background: 'var(--secondary)' }}>Industrial Synergy</span>
            <h2 className="section-title">The Zoho-AI Industrial Stack</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div className="reveal" style={{ display: 'grid', gap: '1.5rem' }}>
                {[
                  { title: "Zoho Inventory Optimization", desc: "Layer AI reasoners on your Zoho Inventory database to calculate true reorder points and lead times.", icon: <Zap /> },
                  { title: "n8n Fleet Bridging", desc: "Securely connect your Zoho CRM tracking to third-party telematics and fleet management platforms.", icon: <Cpu /> },
                  { title: "IoT & Asset Tracking", desc: "Integrate sensor data into your digital worker workflows for real-time asset visibility across UK hubs.", icon: <Boxes /> }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(75,85,99,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>{item.icon}</div>
                    <div>
                      <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.4rem' }}>{item.title}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="reveal" style={{ background: 'var(--bg)', padding: '5rem 3.5rem', borderRadius: '48px', border: '1px solid var(--border)', boxShadow: 'var(--card-shadow)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--secondary) 0%, #1d4ed8 100%)', opacity: 0.05 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                 <Building2 className="text-secondary" style={{ marginBottom: '1.5rem' }} size={48} />
                 <h3 style={{ fontSize: '1.75rem', fontWeight: 950, marginBottom: '2rem' }}>Scalable Physical Operations</h3>
                 <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>We bridge the &quot;last mile&quot; of digital workers—ensuring that your AI strategy results in faster shipments, lower fuel costs, and higher warehouse throughput for your UK operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--text)', padding: '6rem 3rem', borderRadius: '48px', color: 'var(--bg)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Optimize Your Supply Chain</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '3.5rem', opacity: 0.8 }}>Protect your firm’s reputation with AI that follows SRA guidelines and UK law.</p>
            <Link href="/contact" className="btn-primary" style={{ background: 'var(--secondary)', border: 'none' }}>Speak with a Logistics AI Architect</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
