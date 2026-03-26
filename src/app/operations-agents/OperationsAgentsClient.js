"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const TechMeshBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        resize();

        const dots = [];
        const dotCount = 60;
        const maxDist = 250;

        for (let i = 0; i < dotCount; i++) {
            dots.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3
            });
        }

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(59, 130, 246, 0.2)";
            ctx.strokeStyle = "rgba(59, 130, 246, 0.05)";

            dots.forEach((dot, i) => {
                dot.x += dot.vx;
                dot.y += dot.vy;

                if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
                if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
                ctx.fill();

                for (let j = i + 1; j < dots.length; j++) {
                    const d2 = dots[j];
                    const dist = Math.sqrt((dot.x - d2.x) ** 2 + (dot.y - d2.y) ** 2);
                    if (dist < maxDist) {
                        ctx.beginPath();
                        ctx.moveTo(dot.x, dot.y);
                        ctx.lineTo(d2.x, d2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                opacity: 0.5,
                pointerEvents: "none"
            }}
        />
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const containerRef = useRef(null);
    
    useEffect(() => {
        if (!contentRef.current) return;
        
        if (isOpen) {
            gsap.to(contentRef.current, {
                height: "auto",
                opacity: 1,
                duration: 0.4,
                ease: "power2.out"
            });
            gsap.to(containerRef.current, {
                borderColor: "var(--primary)",
                backgroundColor: "var(--hover-bg)",
                boxShadow: "var(--card-shadow)",
                duration: 0.3
            });
        } else {
            gsap.to(contentRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut"
            });
            gsap.to(containerRef.current, {
                borderColor: "var(--border)",
                backgroundColor: "var(--card-bg)",
                boxShadow: "none",
                duration: 0.3
            });
        }
    }, [isOpen]);

    return (
        <div 
            ref={containerRef}
            className="faq-item gsap-card"
            style={{ 
                background: "var(--card-bg)", 
                border: "1px solid var(--border)", 
                borderRadius: "12px", 
                marginBottom: "0.75rem", 
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease"
            }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div style={{ padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "2rem" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600, margin: 0, color: "var(--text)", letterSpacing: "0.01em" }}>{question}</h3>
                <div style={{ 
                    width: "32px", 
                    height: "32px", 
                    borderRadius: "50%", 
                    background: "rgba(255,255,255,0.02)", 
                    border: "1px solid rgba(255,255,255,0.04)",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    flexShrink: 0,
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                }}>
                    <ChevronDown size={16} color="rgba(255,255,255,0.4)" />
                </div>
            </div>
            <div ref={contentRef} style={{ height: 0, opacity: 0, overflow: "hidden" }}>
                <div style={{ padding: "0 1.5rem 1.5rem", color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default function OperationsAgentsClient() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.config({ nullTargetWarn: false });
        
        // Hero timeline
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(".hero-title-line",
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, stagger: 0.2 }
        )
        .fromTo(".hero-subtitle",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=0.6"
        )
        .fromTo(".hero-cta",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
            "-=0.6"
        );

        // Section reveals
        const revealElements = gsap.utils.toArray(".gsap-reveal");
        revealElements.forEach((el) => {
            gsap.fromTo(el,
                { y: 60, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }
            );
        });

        // Image placeholder reveals
        const imgElements = gsap.utils.toArray(".gsap-img-reveal");
        imgElements.forEach((el) => {
            gsap.fromTo(el,
                { scale: 0.95, opacity: 0, y: 30 },
                {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    },
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out"
                }
            );
        });

        // Smart stagger for cards (FAQ)
        gsap.utils.toArray('.faq-container').forEach(container => {
            const cards = container.querySelectorAll('.gsap-card');
            gsap.fromTo(cards,
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: container,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out"
                }
            );
        });
    }, { scope: containerRef });

    const faqs = [
        {
            q: "How does the agent handle time window constraints? What if a customer says '0800-1200 only' but that's not optimal?",
            a: "Time windows are hard constraints—the agent will never schedule a delivery outside a customer's specified window. If that makes the route longer or forces an extra driver, that's the cost of respecting their constraint. However, the agent flags violations in advance: 'Respecting all time windows requires 32 stops across 2 drivers; ignoring time window for Customer A would reduce to 31 stops in 1 route, saving £120.' You decide—enforce constraint or negotiate with customer."
        },
        {
            q: "What if we have drivers with different capabilities (some can handle fragile goods, some can't)?",
            a: "The agent tracks driver attributes: 'Driver 1: standard goods, max 200kg per stop. Driver 2: fragile/temperature-sensitive certified, max 150kg. Driver 3: can handle hazardous materials.' When building routes, the agent only assigns orders to drivers with matching capabilities. Configuration is simple: mark each driver's skills in your fleet management app or in a Zoho database; the agent reads it and respects it."
        },
        {
            q: "How accurate is the route optimisation? What if the algorithm makes a silly decision?",
            a: "Route optimisation is good, not perfect. The algorithm minimises distance (fuel cost) and respects time windows. That's why human review is built in: Ops Manager reviews the optimised routes before pushing to drivers. If a route looks wrong, they manually adjust 1-2 stops, and the agent learns from the adjustment. Most adjustments happen in the first 2-3 weeks; after that, the agent learns your network and rarely needs overrides."
        },
        {
            q: "What happens if a driver doesn't follow the route? Can the agent re-optimise on the fly?",
            a: "Telematics show driver location in real-time. If a driver deviates significantly (e.g., takes a 30-minute detour), the agent detects it and optionally re-optimises the remaining stops. You can set the agent to auto-adjust (if deviation is <10 minutes time impact), or alert Ops Manager for approval (if deviation is >10 minutes). Drivers often know local shortcuts; the agent learns from these and incorporates them into future routes."
        },
        {
            q: "How does demand forecasting work? What if demand is unpredictable?",
            a: "The agent uses historical data (minimum 3 months required) to learn seasonal patterns and day-of-week trends (e.g., Mondays are 15% higher than Fridays). For truly unpredictable spikes (viral product, celebrity endorsement), you manually alert the agent ('Expect 3x volume Friday due to press coverage'), and it adjusts forecasts immediately. Most demand is predictable within 10-15% variance."
        },
        {
            q: "Can the agent handle multiple delivery options (standard 1-2 days, or next-day, or 2-hour window)?",
            a: "Yes. Orders with flexible delivery windows are lower priority and batched with other orders. Urgent orders (next-day or 2-hour window) are routed immediately. The agent treats delivery SLA as a constraint: 2nd-day orders can be batched for optimal efficiency; next-day orders route the next morning; 2-hour urgent orders route immediately as a dedicated express route."
        },
        {
            q: "What if we're expanding to new cities or new delivery zones?",
            a: "The agent adapts as soon as you add new orders in those zones. It pulls map data for new areas via Google Maps API and starts calculating routes. Initially, routes might be suboptimal, but local drivers quickly provide feedback, and the agent learns. You can also provide a 'local knowledge file' (shortcuts, restricted zones, parking tips) for each zone to incorporate from day 1."
        },
        {
            q: "What's the cost if we already have a fleet management system?",
            a: "If you have a system like Samsara, Tookan, or Onfleet, we integrate the agent with it (usually included in your Build phase). The agent generates optimised routes and sends them to your existing fleet app—you don't replace your app; you just add the agent's optimisation layer. Ongoing API costs (maps, routing engine) range from £1,500-2,500/month depending on volume."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    const PlaceholderStyle = {
        width: "100%",
        minHeight: "500px",
        background: "rgba(59, 130, 246, 0.05)",
        borderRadius: "48px",
        border: "1px dashed rgba(59, 130, 246, 0.4)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        color: "var(--primary)",
        fontSize: "0.9rem",
        fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase"
    };

    return (
        <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <style jsx>{`
                .responsive-grid {
                    display: grid;
                    gap: 6rem;
                    align-items: center;
                    grid-template-columns: 1fr;
                }
                .hero-grid {
                    display: grid;
                    gap: 6rem;
                    align-items: center;
                    grid-template-columns: 1fr;
                }
                .metrics-grid {
                    display: grid;
                    gap: 2rem;
                    grid-template-columns: 1fr;
                }
                @media (min-width: 900px) {
                    .responsive-grid.zig { grid-template-columns: 1fr 1.4fr; }
                    .responsive-grid.zag { grid-template-columns: 1.4fr 1fr; }
                    .hero-grid { grid-template-columns: 1.2fr 1fr; }
                    .metrics-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (min-width: 1200px) {
                    .metrics-grid { grid-template-columns: repeat(4, 1fr); }
                }
                .links-grid {
                    display: grid;
                    gap: 1.5rem;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                }
            `}</style>
            
            {/* HERO SECTION */}
             <header style={{ 
                 padding: "clamp(120px, 15vh, 160px) 1.5rem 60px", 
                 display: "flex", 
                 alignItems: "center", 
                 position: "relative", 
                 overflow: "hidden" 
             }}>
                  <TechMeshBackground />
                  <div style={{
                      position: "absolute",
                      top: 0, left: 0, width: "100%", height: "100%",
                      background: "radial-gradient(circle at 70% 50%, transparent, var(--bg) 70%)",
                      pointerEvents: "none"
                  }} />

                  <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1250px" }}>
                       <div className="hero-grid">
                            <div style={{ maxWidth: "800px" }}>
                                <div className="hero-title-line" style={{ 
                                    display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.2rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "100px", border: "1px solid rgba(16, 185, 129, 0.2)", marginBottom: "2.5rem", color: "#10b981", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.05em"
                                }}>
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981" }} />
                                    OPERATIONS AUTOMATION
                                </div>
                                <h1 className="hero-title-line" style={{ fontSize: "clamp(2.3rem, 5vw, 4.2rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em", color: "var(--text)" }}>
                                    Your Operations Team<br /> Just Eliminated <span style={{ color: "var(--primary)" }}>35 Hours</span> of Weekly Scheduling
                                </h1>
                                <p className="hero-subtitle" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)", color: "var(--text-muted)", marginBottom: "2.5rem", lineHeight: 1.6, maxWidth: "700px" }}>
                                    Meet your Operations Digital Worker: automated dispatch optimisation, real-time scheduling, inventory coordination, vendor management—24/7.
                                </p>

                                <div className="hero-cta" style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "nowrap" }}>
                                    <Link href="/demo/operations" style={{ 
                                        display: "inline-flex", alignItems: "center", gap: "0.5rem", 
                                        padding: "1rem 2rem", background: "#4F46E5", color: "white", 
                                        fontWeight: 700, borderRadius: "12px", textDecoration: "none", 
                                        boxShadow: "0 10px 30px rgba(79, 70, 229, 0.3)", transition: "all 0.3s ease" 
                                    }}>
                                        See Operations Agent Demo <ArrowRight size={20} />
                                    </Link>
                                    <Link href="/case-studies/operations-pdf" style={{ 
                                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                                        padding: "1rem 2rem", background: "#0F172A", color: "white", 
                                        fontWeight: 700, borderRadius: "12px", textDecoration: "none",
                                        transition: "all 0.3s ease",
                                        border: "1px solid rgba(255,255,255,0.1)"
                                    }}>
                                        Download Operations Case Study
                                    </Link>
                                </div>
                            </div>
                            <div></div>
                       </div>
                  </div>
             </header>

            {/* Section 1A: The Problem (Zig) */}
            <section id="problem-1" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: The Problem - Operations Manager managing chaotic spreadsheets and phone calls with 30+ driver routes]
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">The Problem</span>
                            <h2 className="section-title">Operational Complexity Is Growing Faster Than Your Team</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Modern operations are chaotic. A mid-market logistics company (30 drivers, 80-120 daily deliveries) typically operates on spreadsheets, phone calls, and manual route planning. Monday morning: Operations Managers receive 120+ orders across B2B, B2C, and marketplaces. 
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Each order has specific windows, special handling (fragile, temperature-sensitive), and profit margins that varies 40% depending on routing efficiency. Currently, 2-3 planners spend 4-6 hours manually building routes—comparing postcodes and driver availability while manually updating spreadsheets as orders change.
                                </p>
                                <p>
                                    One urgent order at 2pm? You have to re-plan everything. One driver sick call? Absolute chaos. The result: 7-10% miss windows, and fuel efficiency sits at 85% of its theoretical optimal, wasting ~£18,000/month.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Section 1B: Margin Erosion (Zag) */}
             <section id="problem-2" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Margin Impact</span>
                            <h2 className="section-title">The Cost of Manual Friction</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Inventory across distribution points remains unreconciled—leading to misallocated stock claims and reactive vendor panic-orders at premium costs. Cost per delivery sits at £14-18 due to these widespread manual inefficiencies. 
                                </p>
                                <p style={{ marginBottom: "1.5rem", fontWeight: 700, color: "var(--text)" }}>
                                    This isn't just a logistics problem. It's a margin problem.
                                </p>
                                <p>
                                    Competitors running intelligent optimisation software maintain &lt;5% inventory variance and delivery costs between £11-13. In logistics, where margins are often 2-4%, a 15% cost reduction is structurally massive. Our Operations agent closes this gap definitively.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Margin Logic - Manual Delivery Cost £18 vs Automated Delivery Cost £11]
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2A: The Digital Worker (Zig) */}
            <section id="worker-1" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>Meet Your Operations Digital Worker</h2>
                    </div>
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Worker Workflow - Order Ingestion → Multi-Depot Optimization → Driver Sync]
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Morning Routine</span>
                            <h2 className="section-title">5am Autonomous Dispatch</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Your agent wakes up at 5am. It pulls orders from Shopify, APIs, and marketplaces, automatically reading postcodes, weights, and handling requirements. It cross-references current driver locations via GPS telematics and inventory levels across your depots.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Using machine learning trained on your actual route history, it calculates the 'mathematical best' depot and stops sequence to respect 98%+ of delivery windows while reducing total distance by 12-18%. 
                                </p>
                                <p style={{ fontWeight: 700, color: "var(--text)" }}>
                                    By 6:30am, drivers have turn-by-turn optimised routes on their mobile apps. No 4-hour manual planning session. No morning chaos. Just execution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2B: Real-time & Inventory (Zag) */}
            <section id="worker-2" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Dynamic Response</span>
                            <h2 className="section-title">Forecasting & Vendor Synergy</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    If a new urgent order arrives at 2pm, the agent re-optimises afternoon stops in seconds, alerts the driver, and updates the customer automatically. Beyond routing, it monitors inventory levels across all depots, forecasting 4-week demand based on historical triggers.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Vendor coordination becomes proactive: the agent drafts POs based on demand forecasts and stock levels, sending them to approved vendors via EDI or API for manager approval.
                                </p>
                                <p style={{ fontWeight: 700, color: "var(--text)" }}>
                                    The agent handles the administrative busywork, ensuring you never run out of SKU stock while keeping procurement managers focused on vendor relationships rather than paperwork.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Predictive Inventory Dashboard - Re-order signals, Demand spikes, and Vendor EDI sync]
                        </div>
                    </div>
                </div>
            </section>

             {/* Section 3: Architecture (The 6-Step Loop) */}
             <section id="architecture" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 950, marginBottom: "2rem" }}>
                            How It Works: The Architecture
                        </h2>
                        <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", lineHeight: 1.6 }}>
                            Built on n8n (orchestration), Claude 3.5 Sonnet (decision logic), and custom ML route optimisation. The agent doesn't replace your stack; it orchestrates it.
                        </p>
                    </div>

                    {/* Step 1 & 2: Ingestion & Inventory */}
                    <div className="responsive-grid zig" style={{ marginBottom: "120px" }}>
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Architecture Phase 1 - Order Ingestion (Shopify/Amazon) → Geocoding → Inventory Reservation (SAP/Zoho)]
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "white" }}>1. Intelligence at Ingestion</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1.2rem" }}>
                                    <strong>Order Enrichment:</strong> As orders arrive from Shopify, WooCommerce, or Amazon, the agent immediately converts postcodes to lat/long coordinates. It cross-references customer history for delivery preferences and checks item databases for specific handling constraints.
                                </p>
                                <p>
                                    <strong>Inventory Check:</strong> The agent queries your ERP (SAP, Oracle, or Zoho) to reserve stock from the optimal depot—prioritizing proximity to the customer and stock-level health to ensure fulfillment readiness.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Optimization Feature (Wide) */}
                    <div className="gsap-reveal" style={{ 
                        background: "#0F172A", 
                        borderRadius: "32px", 
                        padding: "4rem", 
                        border: "1px solid rgba(59, 130, 246, 0.2)",
                        marginBottom: "120px",
                        position: "relative",
                        overflow: "hidden"
                    }}>
                        <div style={{ position: "relative", zIndex: 1 }}>
                            <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
                                <h3 style={{ fontSize: "2.2rem", fontWeight: 900, marginBottom: "1.5rem", color: "var(--primary)" }}>3. Route Optimisation: The Secret Sauce</h3>
                                <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: "1.15rem", marginBottom: "3rem" }}>
                                    Claude reads the active order queue, current driver GPS locations, and road network data via Google Maps API. It breaks orders into route clusters and uses a heuristic solver to find the mathematical 'best' stop sequence.
                                </p>
                                <div style={{ background: "rgba(255,255,255,0.03)", padding: "2.5rem", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.05)", textAlign: "left" }}>
                                    <p style={{ margin: 0, fontWeight: 700, fontSize: "0.9rem", color: "#10b981", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>Agent Output Example:</p>
                                    <code style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", fontFamily: "monospace", display: "block", background: "black", padding: "1.5rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
                                        Route A (Driver 1): 18 stops, 65 miles, 07:00 - 17:30<br/>
                                        Route B (Driver 2): 17 stops, 62 miles, 06:30 - 17:00
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 & 5: Dispatch & Adjustment */}
                    <div className="responsive-grid zag" style={{ marginBottom: "120px" }}>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "white" }}>4. Dynamic Dispatch & Real-Time Sync</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1.2rem" }}>
                                    <strong>Driver Assignment:</strong> n8n pushes routes directly to fleet management apps (Onfleet, Samsara). Drivers receive a push notification with their full sequence, eliminating manual handouts.
                                </p>
                                <p>
                                    <strong>Real-Time Re-calculation:</strong> Throughout the day, the agent monitors telematics. If a driver is delayed, it auto-alerts upcoming customers. If a new urgent order arrives at 2pm, it calculates the 'near-zero' impact insertion point in seconds.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Architecture Phase 2 - Fleet App Integration (Tookan/Onfleet) & Real-time Customer Notification SMS]
                        </div>
                    </div>

                    {/* Step 6: Reporting */}
                     <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Analytics Dashboard - On-time %, Miles per stop, Fuel cost delta, Cost per delivery]
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "white" }}>6. Performance Tracking</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1.2rem" }}>
                                   By 8pm, the agent generates a comprehensive report on total miles, fuel consumption, and on-time performance (targeting 98%+). 
                                </p>
                                <p>
                                    It identifies week-on-week trends, highlighting which depots are performing best and surfacing underlying bottlenecks—turning logistics data into strategy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Section 4: Business Outcomes (Margin Impact) */}
             <section id="outcomes" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 950 }}>
                            Business Outcomes: The Margin Impact
                        </h2>
                    </div>

                    <div className="metrics-grid" style={{ marginBottom: "6rem" }}>
                        {[
                            { label: "Fuel Cost Reduction", value: "12-18%", sub: "£1,080 /month savings" },
                            { label: "On-Time Performance", value: "98%+", sub: "Reduced failure costs" },
                            { label: "Vehicle Utilisation", value: "+30%", sub: "More stops per driver" },
                            { label: "Margin Improvement", value: "+8-12%", sub: "Lower cost per delivery" }
                        ].map((metric, i) => (
                            <div key={i} className="gsap-card" style={{ padding: "2.5rem", background: "var(--bg-secondary)", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
                                <p style={{ color: "rgba(255,255,255,0.5)", fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>{metric.label}</p>
                                <h4 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 900, color: "var(--primary)", marginBottom: "0.5rem" }}>{metric.value}</h4>
                                <p style={{ color: "rgba(255,255,255,0.8)", margin: 0, fontWeight: 500 }}>{metric.sub}</p>
                            </div>
                        ))}
                    </div>

                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Cost Breakdown - Manual £16.00 vs Agent £14.66 per delivery]
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "2.2rem", fontWeight: 900, marginBottom: "2rem" }}>The Margin Multiplier</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    A 30-driver operation handles current volume by reducing fleet size by 20-25%, saving roughly £210k per year in salary and vehicle overhead. 
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Inventory variance drops from 12% to 2%—freeing up tied-up capital and improving cash flow. Proactive vendor ordering eliminates premium panic-buy costs.
                                </p>
                                <div style={{ background: "rgba(79, 70, 229, 0.1)", padding: "2.5rem", borderRadius: "24px", border: "1px solid rgba(79, 70, 229, 0.2)" }}>
                                    <h4 style={{ color: "white", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: 800 }}>Payback Period: 8 Months</h4>
                                    <p style={{ margin: 0, color: "rgba(255,255,255,0.7)" }}>Deployment: £32k | Monthly benefit: £4.5k | Positive ROI within 1st year.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* Section 5: Integration Ecosystem */}
             <section id="ecosystem" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 950 }}>
                            Integration Ecosystem: Your Entire Operations Stack
                        </h2>
                        <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "2rem auto 0", fontSize: "1.2rem", lineHeight: 1.6 }}>
                           The agent doesn't replace your stack; it sits on top, orchestrating data flow across your existing silos.
                        </p>
                    </div>

                    <div className="metrics-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                        {[
                            { title: "Order Sources", items: ["Shopify", "WooCommerce", "Amazon Business", "Custom B2B Portals"] },
                            { title: "Fleet & GPS", items: ["Onfleet", "Samsara", "Tookan", "Verizon Fleet"] },
                            { title: "Inventory & ERP", items: ["Zoho Inventory", "SAP S/4HANA", "Oracle NetSuite", "Custom SQL Databases"] },
                            { title: "Customer Link", items: ["Twilio SMS", "Email Automation", "Mobile Push", "Zendesk"] }
                        ].map((group, i) => (
                            <div key={i} className="gsap-card" style={{ padding: "2.5rem", background: "var(--bg)", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <h4 style={{ fontSize: "1.2rem", fontWeight: 850, marginBottom: "1.5rem", color: "var(--primary)" }}>{group.title}</h4>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                    {group.items.map((item, j) => (
                                        <li key={j} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.85rem", color: "rgba(255,255,255,0.7)", fontSize: "1rem" }}>
                                            <div style={{ width: "6px", height: "6px", borderRadius: "2px", background: "#4F46E5" }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="gsap-reveal" style={{ textAlign: "center", marginTop: "5rem" }}>
                        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.1rem", fontStyle: "italic" }}>
                             Missing a tool? We build custom connectors via REST APIs, SFTP, and Webhooks.
                        </p>
                    </div>
                </div>
             </section>

             {/* Section 6: Case Study */}
             <section id="case-study" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">REAL WORLD IMPACT</span>
                        <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 950 }}>
                            Case Study: London-Based Courier Company
                        </h2>
                    </div>

                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "white" }}>The Challenge: Scaling Beyond Manual Planning</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1.2rem" }}>
                                    <strong>Client:</strong> A London-based same-day courier with 35 drivers handling 150-200 daily deliveries across London and the M25 from 4 distribution points.
                                </p>
                                <p style={{ marginBottom: "1.2rem" }}>
                                    <strong>The Problem:</strong> Manual route planning was taking 5-6 hours daily. On-time performance had stalled at 87%, while fuel costs were 8% above industry benchmarks. They were literally turning away business because they couldn't hire and train drivers fast enough.
                                </p>
                                <p style={{ marginBottom: "1.2rem" }}>
                                    <strong>The Solution:</strong> We deployed an Operations Agent integrated with Samsara (fleet), Zoho Inventory (stock), and a custom Shopify-based order platform. The agent now orchestrates the entire fulfillment chain autonomously.
                                </p>
                                <div style={{ background: "rgba(255,255,255,0.03)", padding: "2rem", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.05)", marginTop: "2rem" }}>
                                    <h4 style={{ color: "var(--primary)", marginBottom: "1rem", fontSize: "1.2rem" }}>Investment & ROI Breakdown</h4>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "rgba(255,255,255,0.7)" }}>
                                        <li style={{ marginBottom: "0.5rem" }}>• Total Investment: £28,000 (12-week build)</li>
                                        <li style={{ marginBottom: "0.5rem" }}>• Ongoing: £2,200/mo retainer + £1,800/mo API costs</li>
                                        <li style={{ fontWeight: 800, color: "white", marginTop: "1rem" }}>Result: Fully Paid Back in 5.5 Months</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="gsap-reveal" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <div style={{ background: "var(--bg-secondary)", padding: "2.5rem", borderRadius: "24px", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
                                <h4 style={{ color: "white", marginBottom: "1.5rem", fontSize: "1.3rem", fontWeight: 800 }}>The Performance Lift</h4>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                                    {[
                                        { label: "On-Time Perf.", before: "87%", after: "96%" },
                                        { label: "Planning Time", before: "6h", after: "45m" },
                                        { label: "Fuel Efficiency", before: "Bench", after: "+14%" },
                                        { label: "Cost/Delivery", before: "£17.40", after: "£15.18" }
                                    ].map((res, i) => (
                                        <div key={i}>
                                            <p style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.5rem" }}>{res.label}</p>
                                            <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                                                <span style={{ fontSize: "0.9rem", textDecoration: "line-through", color: "rgba(255,255,255,0.3)" }}>{res.before}</span>
                                                <span style={{ fontSize: "1.4rem", fontWeight: 900, color: "var(--primary)" }}>{res.after}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ background: "rgba(16, 185, 129, 0.1)", padding: "2.5rem", borderRadius: "24px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                                <h4 style={{ color: "white", marginBottom: "1rem", fontSize: "1.3rem", fontWeight: 800 }}>Capacity Unlocked</h4>
                                <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: 0, fontSize: "1rem" }}>
                                    Delivery volume capacity increased <strong>28%</strong> without adding drivers. They now handle 40 more daily deliveries, generating <strong>£18,000/month</strong> in new revenue.
                                </p>
                            </div>

                            <div style={{ background: "var(--bg-secondary)", padding: "2rem", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div>
                                        <p style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.25rem" }}>Failed Deliveries</p>
                                        <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#ef4444" }}>11% → 3%</span>
                                    </div>
                                    <div style={{ textAlign: "right" }}>
                                        <p style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.25rem" }}>Customer Sat.</p>
                                        <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#10b981" }}>84% → 94%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </section>

            {/* FAQ */}
            <section id="faq" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "800px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <span className="section-label">FAQ</span>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-container">
                        {faqs.map((faq, idx) => (
                            <FAQItem key={idx} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal Links Block */}
            <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem" }}>Explore More Solutions</h3>
                        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>Discover how our AI agents are transforming other departments.</p>
                    </div>
                    <div className="links-grid gsap-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem" }}>
                        {[
                            { title: "Home", href: "/" },
                            { title: "Finance Agents", href: "/finance-agents" },
                            { title: "Sales Agents", href: "/sales-agents" },
                            { title: "Assessment", href: "/assessment" },
                            { title: "Case Studies", href: "/case-studies" }
                        ].map((link, idx) => (
                            <Link key={idx} href={link.href} style={{
                                padding: "1.5rem",
                                background: "var(--bg)",
                                borderRadius: "16px",
                                border: "1px solid rgba(255,255,255,0.05)",
                                color: "var(--text)",
                                textDecoration: "none",
                                fontWeight: 700,
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.transform = "none"; }}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
             <section style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                  <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
                       <div className="gsap-reveal">
                            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 950, marginBottom: "2rem" }}>
                                Ready to Architect Your <span style={{ color: "var(--primary)" }}>Operations Agent?</span>
                            </h2>
                            <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem auto", lineHeight: 1.6 }}>
                                Scale your operational capacity without adding headcount. Deploy an autonomous worker that never sleeps and always optimises.
                            </p>
                            <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                                <Link href="/assessment" className="btn-primary" style={{ padding: "1.2rem 2.5rem", background: "#4F46E5", color: "white", borderRadius: "12px", textDecoration: "none", fontWeight: 700 }}>
                                    Calculate Your ROI Opportunity
                                </Link>
                                <Link href="/case-studies" style={{ padding: "1.2rem 2.5rem", background: "transparent", color: "white", borderRadius: "12px", textDecoration: "none", fontWeight: 700, border: "1px solid var(--border)" }}>
                                    Explore Case Studies
                                </Link>
                            </div>
                       </div>
                  </div>
             </section>
        </div>
    );
}
