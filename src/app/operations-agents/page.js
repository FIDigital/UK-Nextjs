"use client";

import { useRef } from "react";
import Link from "next/link";
import { 
  Truck, 
  Warehouse, 
  Route, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  PackageCheck,
  BarChart4
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
  "name": "Operations & Dispatch AI Agents",
  "description": "Autonomous AI agents for route optimization, inventory management, and warehouse automation for UK logistics.",
  "provider": {
    "@type": "Organization",
    "name": "FI Digital UK",
    "url": "https://fidigital.co.uk"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "serviceType": "Logistics AI Automation",
  "offers": {
    "@type": "Offer",
    "description": "Efficiency-focused operations agents"
  }
};

export default function OperationsAgentsPage() {
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
      title: "Real-time Route Optimization",
      desc: "AI agents that dynamically adjust dispatch schedules based on traffic, weather, and fuel efficiency in real-time.",
      icon: <Route size={28} className="text-primary" />
    },
    {
      title: "Predictive Inventory Control",
      desc: "Autonomous monitoring of stock levels across multiple UK hubs, predicting shortages before they happen.",
      icon: <Warehouse size={28} className="text-primary" />
    },
    {
      title: "Automated Dispatch Workflow",
      desc: "Seamlessly connect customer orders from Zoho Inventory to fleet management systems without manual intervention.",
      icon: <Truck size={28} className="text-primary" />
    },
    {
      title: "Self-healing Supply Chain",
      desc: "Automatically detect and resolve delays by rerouting shipments and notifying stakeholders instantly.",
      icon: <PackageCheck size={28} className="text-primary" />
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
              Autonomous <span className="text-primary">Operations & Dispatch</span> Agents
            </h1>
            <p className="reveal" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              From warehouse to doorstep, our AI agents optimize every mile. We bridge the gap between order legacy systems and modern logistics technology to drive efficiency and reduce operational overhead.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/contact" className="btn-primary">Optimize Your Fleet <ArrowRight size={18} /></Link>
              <Link href="#capabilities" className="btn-secondary">View Efficiency Tech</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" style={{ padding: '120px 1.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="section-title reveal">Built for Scale, Optimized for Profit</h2>
            <p className="reveal" style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)' }}>
              We deploy agents that analyze data from across your entire supply chain to make split-second decisions that human teams simply can&apos;t.
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
            <div>
              <span className="section-label reveal">Operations Synergy</span>
              <h2 className="section-title reveal">Zoho Inventory & Logistics Integration</h2>
              <p className="reveal" style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                Connect your Zoho Inventory backbone to your fleet and warehouse management systems using n8n and AI. We create a seamless data loop that maximizes visibility and minimizes fulfillment errors.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "Real-time Inventory Syncing in Zoho",
                  "AI-Optimized Warehouse Pick Paths",
                  "Automated Shipping Carrier Selection",
                  "Real-time Fleet Status Dashboards"
                ].map((item, i) => (
                  <li key={i} className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontWeight: 600 }}>
                    <CheckCircle2 size={18} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal" style={{ position: 'relative', height: '450px', borderRadius: '32px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--primary) 0%, #4F46E5 100%)', opacity: 0.1 }} />
              <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <div style={{ background: 'var(--bg)', padding: '2rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span style={{ fontWeight: 800 }}>Dispatch Mesh</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--secondary)' }}>LIVE FEED</span>
                  </div>
                  <div style={{ position: 'relative', height: '100px', border: '1px dashed var(--border)', borderRadius: '12px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 800 }}>ROUTING: M25 / NORTH LONDON</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', opacity: 0.8 }}>
                    <span>Active Trucks: 14</span>
                    <span>AI Efficiency: +22%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero CTA Section */}
      <section style={{ padding: '120px 1.5rem', background: 'var(--bg)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(135deg, #1d4ed8 0%, #6366f1 100%)', padding: '5rem 2rem', borderRadius: '48px', color: 'white' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 950, marginBottom: '1.5rem' }}>Modernize Your Logistics</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9 }}>Reduce your cost-to-serve and increase your margin with autonomous operations agents.</p>
            <Link href="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>Start Strategy Session</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
