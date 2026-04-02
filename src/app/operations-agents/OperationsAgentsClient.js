"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2, Zap, Settings, BarChart3, Globe, ShieldCheck } from "lucide-react";
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
            ctx.fillStyle = "rgba(79, 70, 229, 0.2)";
            ctx.strokeStyle = "rgba(79, 70, 229, 0.05)";

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
                    const dist = Math.hypot(dot.x - d2.x, dot.y - d2.y);
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
                duration: 0.3
            });
        }
    }, [isOpen]);

    return (
        <div
            ref={containerRef}
            style={{
                border: "1px solid var(--border)",
                borderRadius: "16px",
                marginBottom: "1rem",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease"
            }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div style={{ padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "2rem" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0, color: "var(--text)" }}>{question}</h3>
                <ChevronDown size={20} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease", color: "var(--primary)" }} />
            </div>
            <div ref={contentRef} style={{ height: 0, opacity: 0, overflow: "hidden" }}>
                <div style={{ padding: "0 1.5rem 1.5rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default function OperationsAgentsClient() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(".hero-reveal", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2 });

        gsap.utils.toArray(".gsap-reveal").forEach(el => {
            gsap.fromTo(el, { y: 50, opacity: 0 }, {
                scrollTrigger: { trigger: el, start: "top 85%" },
                y: 0, opacity: 1, duration: 0.8
            });
        });

        gsap.utils.toArray(".gsap-img-reveal").forEach(el => {
            gsap.fromTo(el, { scale: 0.9, opacity: 0 }, {
                scrollTrigger: { trigger: el, start: "top 80%" },
                scale: 1, opacity: 1, duration: 1, ease: "back.out(1.2)"
            });
        });
    }, { scope: containerRef });

    const faqs = [
        {
            q: "How does the agent handle time window constraints in UK traffic?",
            a: "The agent treats time windows as hard constraints. It cross-references real-time Google Maps/Samsara telematics to ensure routes are viable within legal working hours and congestion charge zones. It will prioritize 0800-1200 windows while clustering standard deliveries in the same postcode to minimize dead-mileage."
        },
        {
            q: "Can it integrate with our existing WMS and 3PL providers?",
            a: "Yes. Using n8n orchestration, we build custom connectors for Zoho Inventory, SAP S/4HANA, and Oracle NetSuite. It can ingest EDI feeds from 3PL providers to sync stock levels across multiple distribution hubs near London, Birmingham, and Manchester."
        },
        {
            q: "What level of human oversight is required for daily dispatch?",
            a: "We recommend a 'Human-on-the-Loop' model. The agent builds the full 4am dispatch schedule autonomously; your floor manager spends 15-20 minutes reviewing and 'releasing' the routes. The agent handles the 3,000+ daily micro-decisions, leaving the manager to handle edge cases like vehicle breakdowns."
        },
        {
            q: "Does the agent comply with UK GDPR and data residency requirements?",
            a: "Absolutely. All agents can be deployed on UK-based infrastructure (AWS London or Azure UK South). Customer PII (Personally Identifiable Information) is encrypted at rest and in transit, and we can configure data retention policies to match your compliance standards."
        }
    ];

    return (
        <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
            <style jsx>{`
                .responsive-grid {
                    display: grid;
                    gap: 6rem;
                    align-items: center;
                    grid-template-columns: 1fr;
                }
                @media (min-width: 992px) {
                    .responsive-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                    .responsive-grid.zig {
                        grid-template-columns: 1.1fr 0.9fr;
                    }
                    .responsive-grid.zag {
                        grid-template-columns: 0.9fr 1.1fr;
                    }
                }
                .section-label {
                    font-size: 0.9rem;
                    font-weight: 800;
                    color: var(--primary);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 1.5rem;
                    display: block;
                }
                .section-title {
                    font-size: clamp(2rem, 4vw, 3.2rem);
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 2.5rem;
                    letter-spacing: -0.02em;
                }
                @media (max-width: 768px) {
                    .section-title {
                        font-size: 2.2rem;
                    }
                }
                .hero-background-wrapper {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    opacity: 0.8;
                    pointer-events: none;
                }
                @media (min-width: 900px) {
                    .hero-background-wrapper {
                        width: 65%;
                    }
                }
                .brand-logo-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                    gap: 1.25rem;
                }
                .brand-logo-card {
                    background: var(--card-bg);
                    width: 100%;
                    position: relative;
                    aspect-ratio: 1/1;
                    border-radius: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: var(--card-shadow);
                    border: 1px solid var(--border);
                    transition: transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28), box-shadow 0.3s ease;
                }
                .brand-logo-card:hover {
                    transform: translateY(-8px) scale(1.05);
                    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.2);
                    z-index: 2;
                    border-color: var(--primary);
                }
                .brand-logo-img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    transition: filter 0.3s ease;
                }
                [data-theme='dark'] .logo-invert-dark {
                    filter: invert(1) brightness(1.5);
                }
                [data-theme='dark'] .logo-brighten-dark {
                    filter: brightness(1.3) contrast(1.1);
                }
            `}</style>
            <TechMeshBackground />

            {/* HERO SECTION - REBUILT TO MATCH INDUSTRIES */}
            <header className="hero-section" style={{
                position: "relative",
                minHeight: "90vh",
                display: "flex",
                alignItems: "center",
                padding: "clamp(120px, 15vh, 160px) 1.5rem 60px",
                background: "var(--bg)",
                overflow: "hidden"
            }}>
                <div style={{
                    position: "absolute",
                    top: 0, left: 0, width: "100%", height: "100%",
                    background: "radial-gradient(circle at 70% 50%, transparent, var(--bg) 70%)",
                    pointerEvents: "none",
                    zIndex: 1
                }} />

                {/* Right-aligned Faded Hero Image Background */}
                <div className="hero-background hero-background-wrapper">
                    <Image
                        src="/images/agents/ops-agent-hero.png"
                        alt="Operations AI Agents"
                        fill
                        style={{ objectFit: "cover", objectPosition: "left center", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }}
                        priority
                    />
                </div>
                <div className="container hero-container" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "100%", maxWidth: "1250px", margin: "0 auto" }}>
                    <div style={{ maxWidth: "900px" }}>
                        <div className="hero-reveal" style={{
                            display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.2rem",
                            background: "rgba(79, 70, 229, 0.1)", borderRadius: "100px",
                            border: "1px solid rgba(79, 70, 229, 0.2)", marginBottom: "2.5rem",
                            color: "var(--primary)", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.05em"
                        }}>
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                            UK LOGISTICS INTELLIGENCE
                        </div>
                        <h1 className="hero-reveal" style={{ fontSize: "clamp(2.3rem, 5vw, 4.2rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em" }}>
                            Automate the <span style={{ color: "var(--primary)" }}>Chaos</span> of Physical Operations
                        </h1>
                        <p className="hero-reveal" style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)", color: "var(--text-muted)", marginBottom: "3.5rem", lineHeight: 1.6, maxWidth: "750px" }}>
                            Move beyond spreadsheets. Deploy Operations Agents that orchestrate dispatch, manage inventory, and optimize last-mile margin in real-time.
                        </p>
                        <div className="hero-reveal" style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                            <Link href="/assessment" className="btn-primary" style={{ padding: "1.2rem 2.5rem", borderRadius: "12px", textDecoration: "none" }}>
                                Calculate Dispatch ROI
                            </Link>
                            <Link href="#architecture" className="btn-secondary" style={{ padding: "1.2rem 2.5rem", borderRadius: "12px", textDecoration: "none" }}>
                                Technical Architecture
                            </Link>
                        </div>
                    </div>

                    <div className="hero-reveal" style={{ width: "100%", marginTop: "6rem", display: "flex", flexWrap: "wrap", gap: "clamp(2rem, 5vw, 5rem)", borderTop: "1px solid var(--border)", paddingTop: "3rem" }}>
                        {[
                            { label: "Dispatch Latency", value: "2.4s", sub: "Manual: 4-6 hrs" },
                            { label: "UK Postcode Coverage", value: "100%", sub: "Full Geocoding" },
                            { label: "Margin Increase", value: "11.2%", sub: "Last-mile Optimized" }
                        ].map((stat, i) => (
                            <div key={i} style={{ flex: "1 1 200px", minWidth: "150px" }}>
                                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>{stat.label}</div>
                                <div style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 900, color: "var(--text)", lineHeight: 1.1, marginBottom: "0.25rem" }}>{stat.value}</div>
                                <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 500 }}>{stat.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            {/* Section 1: The Friction */}
            <section style={{ padding: "120px 1.5rem", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig">
                        <div className="gsap-reveal">
                            <span className="section-label">THE PROBLEM</span>
                            <h2 className="section-title">Manual Speed is <span style={{ color: "#ef4444" }}>Scaling's Ceiling</span></h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    In UK logistics, the 6am "Dispatch Panic" is the norm. Planners juggle driver absences, vehicle weight limits, and urgent 32rd-party requests across multiple browser tabs and WhatsApp groups.
                                </p>
                                <p>
                                    This manual orchestration creates <strong>invisible friction</strong>: suboptimal routes that waste 8-12% of fuel, inventory stock-outs that kill customer LTV, and a total inability to scale without adding expensive operations headcount.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                            <Image src="/images/industries/ops-dw-problem.png" width={800} height={450} style={{ borderRadius: "32px", width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", boxShadow: "var(--card-shadow)" }} alt="Logistics Manual Friction" />
                            <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "32px", padding: "2.5rem", boxShadow: "var(--card-shadow)" }}>
                                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)", marginBottom: "2rem", textTransform: "uppercase" }}>Manual Friction Metrics</div>
                                <div style={{ display: "grid", gap: "1.5rem" }}>
                                    {[
                                        { l: "Route Planning Time", v: "4.5 Hours", c: "#ef4444" },
                                        { l: "Fuel Waste (Dead Miles)", v: "14%", c: "#ef4444" },
                                        { l: "Customer Notification Latency", v: "12 Mins", c: "var(--text)" }
                                    ].map((m, i) => (
                                        <div key={i} style={{ padding: "1.5rem", background: "var(--bg)", borderRadius: "16px", border: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <span style={{ fontWeight: 600, color: "var(--text)" }}>{m.l}</span>
                                            <span style={{ fontWeight: 900, color: m.c }}>{m.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Margin Impact */}
            <section style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag">
                        <div className="gsap-img-reveal" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                            <Image src="/images/industries/ops-dw-predictive.png" width={800} height={450} style={{ borderRadius: "32px", width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", boxShadow: "var(--card-shadow)" }} alt="Predictive Operations Margin" />
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "32px", padding: "2.5rem", boxShadow: "var(--card-shadow)" }}>
                                    <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "var(--primary)", marginBottom: "1.5rem" }}>REAL-TIME MARGIN TRACKING</div>
                                    <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.5rem" }}>
                                        <span style={{ fontSize: "3rem", fontWeight: 900, color: "var(--text)" }}>+11.2%</span>
                                        <span style={{ color: "#10b981", fontWeight: 700 }}>↑ Net Margin Lift</span>
                                    </div>
                                    <div style={{ height: "4px", width: "100%", background: "var(--border)", borderRadius: "2px" }}>
                                        <div style={{ width: "75%", height: "100%", background: "var(--primary)" }} />
                                    </div>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                    <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "1.5rem", boxShadow: "var(--card-shadow)" }}>
                                        <div style={{ fontSize: "0.6rem", color: "var(--text-muted)", textTransform: "uppercase" }}>CO2 SAVED</div>
                                        <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)" }}>4.2 Tons/Mo</div>
                                    </div>
                                    <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "1.5rem", boxShadow: "var(--card-shadow)" }}>
                                        <div style={{ fontSize: "0.6rem", color: "var(--text-muted)", textTransform: "uppercase" }}>AVG. STOP ROI</div>
                                        <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)" }}>£18.42</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">THE IMPACT</span>
                            <h2 className="section-title">Every Stop, <span style={{ color: "var(--primary)" }}>Optimised</span></h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    An Operations Agent doesn't just 'track' deliveries—it actively improves the financial outcome of every decision. It routes drivers not just by distance, but by <strong>cost-to-serve</strong>.
                                </p>
                                <p>
                                    By integrating fuel costs, vehicle depreciation, driver wages, and item-level margin, the agent surfaces the exact profit impact of setiap routing decision, allowing you to prioritize high-value fulfillment during regional capacity crunches.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Digital Worker 5am Dispatch */}
            <section style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig">
                        <div className="gsap-reveal">
                            <span className="section-label">THE WORKER</span>
                            <h2 className="section-title">A Worker That <span style={{ color: "var(--primary)" }}>Never Sleeps</span></h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    While your operations team is asleep, the agent is already at work. At 4am, it triggers its first daily routine: ingesting new orders, checking vehicle readiness from telematics, and calculating the optimal UK-wide logistics grid.
                                </p>
                                <p>
                                    When your dispatch manager arrives at 7am, they aren't starting from scratch. They are simply reviewing a perfectly orchestrated sequence that is already pushing routes to driver tablets and notifying customers of exact ETA windows.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                            <Image src="/images/industries/ops-dw-supply.png" width={800} height={450} style={{ borderRadius: "32px", width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", boxShadow: "var(--card-shadow)" }} alt="Digital Worker Dispatch" />
                            <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "32px", padding: "2.5rem", boxShadow: "var(--card-shadow)" }}>
                                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)", marginBottom: "2rem", textTransform: "uppercase" }}>5AM Dispatch Timeline</div>
                                <div style={{ position: "relative", paddingLeft: "2rem", borderLeft: "2px solid var(--primary)", opacity: 0.8 }}>
                                    {[
                                        { t: "04:00", d: "Order ingestion & stock lock" },
                                        { t: "04:15", d: "Route optimization (12,000 permutations)" },
                                        { t: "04:45", d: "Vehicle telematics & weight validation" },
                                        { t: "05:00", d: "Digital manifest released to drivers" }
                                    ].map((step, i) => (
                                        <div key={i} style={{ marginBottom: "2rem", position: "relative" }}>
                                            <div style={{ position: "absolute", left: "-2.45rem", top: "0.2rem", width: "12px", height: "12px", borderRadius: "50%", background: "var(--primary)" }} />
                                            <div style={{ fontWeight: 800, fontSize: "0.75rem", color: "var(--primary)", marginBottom: "0.25rem" }}>{step.t}</div>
                                            <div style={{ fontSize: "1rem", color: "var(--text)" }}>{step.d}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Architecture Loop */}
            <section id="architecture" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 className="section-title">The <span style={{ color: "var(--primary)" }}>Orchestration Loop</span></h2>
                        <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "2rem auto 0", fontSize: "1.2rem" }}>
                            Built on n8n (orchestration), Claude 3.5 Sonnet (decision logic), and Google Maps/Samsara (real-world execution).
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
                        {/* Architecture Loop Cards */}
                        {[
                            { step: "01", t: "Ingestion", d: "Pulls order data from Shopify, Zoho, or SAP. Geocodes precisely to UK postcodes." },
                            { step: "02", t: "Constraint Match", d: "Checks vehicle weight, driver licenses, and time-window restrictions." },
                            { step: "03", t: "Optimization", d: "Runs 10,000+ routing permutations to find the lowest cost-to-serve path." },
                            { step: "04", t: "Execution", d: "Pushes manifests directly to driver tablets via Samsara/Tookan." },
                            { step: "05", t: "Feedback", d: "Monitors GPS in real-time. If a driver is delayed, auto-notifies the customer." },
                            { step: "06", t: "Analytics", d: "Logs total miles and ROI per stop for end-of-day margin reporting." }
                        ].map((item, i) => (
                            <div key={i} className="gsap-card" style={{
                                padding: "2.5rem",
                                background: "var(--card-bg)",
                                border: "1px solid var(--border)",
                                borderRadius: "24px",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: "var(--card-shadow)"
                            }}>
                                <div style={{ fontSize: "2rem", fontWeight: 950, color: "var(--primary)", opacity: 0.3, marginBottom: "1rem" }}>{item.step}</div>
                                <h4 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>{item.t}</h4>
                                <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: 1.6, flexGrow: 1 }}>{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Business Outcomes */}
            <section style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                            <Image src="/images/industries/ops-dw-roi.png" width={800} height={450} style={{ borderRadius: "32px", width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", boxShadow: "var(--card-shadow)" }} alt="Operations ROI Output" />
                            <div style={{ background: "var(--card-bg)", border: "1px solid var(--primary)", borderRadius: "32px", padding: "2.5rem", textAlign: "center", boxShadow: "var(--card-shadow)" }}>
                                <div style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: 800, textTransform: "uppercase", marginBottom: "2rem" }}>Delivery Cost Breakdown</div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem" }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ height: "140px", background: "var(--bg-secondary)", borderRadius: "8px", position: "relative" }}>
                                            <div style={{ position: "absolute", bottom: 0, width: "100%", height: "90%", background: "#ff4d4d", borderRadius: "8px", opacity: 0.6 }} />
                                        </div>
                                        <div style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>Manual (£16.00)</div>
                                    </div>
                                    <div style={{ flex: 1, marginLeft: "1rem" }}>
                                        <div style={{ height: "140px", background: "var(--bg-secondary)", borderRadius: "8px", position: "relative" }}>
                                            <div style={{ position: "absolute", bottom: 0, width: "100%", height: "65%", background: "var(--primary)", borderRadius: "8px" }} />
                                        </div>
                                        <div style={{ marginTop: "1rem", fontSize: "0.8rem", fontWeight: 800, color: "var(--text)" }}>Agent (£14.66)</div>
                                    </div>
                                </div>
                                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Estimated savings per 10k monthly deliveries: £13,400</div>
                            </div>
                        </div>
                        <div className="gsap-reveal">
                            <h2 className="section-title">The Margin Multiplier</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    A 30-driver operation handles current volume by reducing fleet size by 20-25%, saving roughly £210k per year in salary and vehicle overhead.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Inventory variance drops from 12% to 2%—freeing up tied-up capital and improving cash flow. Proactive vendor ordering eliminates premium panic-buy costs.
                                </p>
                                <div style={{ background: "var(--hover-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                                    <h4 style={{ color: "var(--text)", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: 800 }}>Payback Period: 8 Months</h4>
                                    <p style={{ margin: 0, color: "var(--text-muted)" }}>Deployment: £32k | Monthly benefit: £4.5k | Positive ROI within 1st year.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Integration Ecosystem */}
            <section id="ecosystem" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 className="section-title">Operations Integration Stack</h2>
                    </div>

                    <div className="brand-logo-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                        <div className="brand-logo-card"><Image src="/images/brands/zoho.png" fill className="brand-logo-img" alt="Zoho" style={{ objectFit: 'contain', padding: '1.5rem' }} /></div>
                        <div className="brand-logo-card"><Image src="/images/brands/SAP.png" fill className="brand-logo-img" alt="SAP" style={{ objectFit: 'contain', padding: '1.5rem' }} /></div>
                        <div className="brand-logo-card"><Image src="/images/brands/oracle.jpg" fill className="brand-logo-img" alt="Oracle" style={{ objectFit: 'contain', padding: '1.5rem' }} /></div>
                        <div className="brand-logo-card"><Image src="/images/brands/Amazon.png" fill className="brand-logo-img" alt="Amazon" style={{ objectFit: 'contain', padding: '1.5rem' }} /></div>
                        <div className="brand-logo-card"><Image src="/images/brands/slack.png" fill className="brand-logo-img" alt="Slack" style={{ objectFit: 'contain', padding: '1.5rem' }} /></div>
                        <div className="brand-logo-card"><Image src="/images/brands/N8n.png" fill className="brand-logo-img logo-invert-dark" alt="n8n" style={{ objectFit: 'contain', padding: '1.5rem' }} /></div>
                        <div className="brand-logo-card"><Image src="/images/brands/OpenAI.png" fill className="brand-logo-img logo-invert-dark" alt="OpenAI" style={{ objectFit: 'contain', padding: '1.5rem' }} /></div>
                        <div className="brand-logo-card"><Image src="/images/brands/Hubspot.png" fill className="brand-logo-img" alt="HubSpot" style={{ objectFit: 'contain', padding: '1.5rem' }} /></div>
                    </div>
                </div>
            </section>

            {/* Section 7: Case Study */}
            <section id="case-study" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "48px", overflow: "hidden" }}>
                        <div className="responsive-grid zag" style={{ gap: 0 }}>
                            <div style={{ padding: "5rem" }}>
                                <span className="section-label">CASE STUDY: LONDON COURIER</span>
                                <h2 className="section-title">Scaling Dispatch Without <span style={{ color: "var(--primary)" }}>Manual Overhead</span></h2>
                                <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                    <p style={{ marginBottom: "1.5rem" }}>
                                        A London-based same-day courier with 35 drivers was spending 6 hours daily on manual route planning. On-time performance had stalled at 87%, while fuel costs remained 8% above industry mid-market benchmarks.
                                    </p>
                                    <p style={{ marginBottom: "2.5rem" }}>
                                        We deployed an Operations Agent integrated with Samsara (Fleet) and Zoho Inventory. Today, planning takes 45 minutes, capacity has increased 28% without adding drivers, and customer satisfaction has peaked at 94% due to real-time notification accuracy.
                                    </p>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
                                        {[
                                            { l: "Investment", v: "£28,000" },
                                            { l: "Year 1 ROI", v: "410%" },
                                            { l: "FTE Saved", v: "1.5 Units" },
                                            { l: "Payback", v: "5.5 Months" }
                                        ].map((stat, i) => (
                                            <div key={i}>
                                                <div style={{ fontSize: "0.65rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>{stat.l}</div>
                                                <div style={{ fontSize: "1.5rem", fontWeight: 950, color: "var(--text)" }}>{stat.v}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div style={{ background: "rgba(79, 70, 229, 0.05)", padding: "5rem", borderLeft: "1px solid var(--border)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "3rem", boxShadow: "var(--card-shadow)" }}>
                                    <h4 style={{ color: "var(--primary)", fontWeight: 800, textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "2rem" }}>Financial Performance Lift</h4>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                        {[
                                            { label: "Cost Per Delivery", before: "£17.40", after: "£15.18", accent: "var(--primary)" },
                                            { label: "On-Time Fulfillment", before: "87%", after: "96%", accent: "#10b981" },
                                            { label: "Fuel Expenses/Mo", before: "£6.2k", after: "£5.1k", accent: "#10b981" }
                                        ].map((row, i) => (
                                            <div key={i}>
                                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                                                    <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text)" }}>{row.label}</span>
                                                    <span style={{ fontSize: "0.9rem", fontWeight: 800, color: row.accent }}>{row.after}</span>
                                                </div>
                                                <div style={{ height: "4px", background: "var(--bg-secondary)", borderRadius: "2px", overflow: "hidden" }}>
                                                    <div style={{ width: "85%", height: "100%", background: row.accent, opacity: 0.6 }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8: FAQ */}
            <section id="faq" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
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

            {/* Section 9: Internal Links */}
            <section style={{ padding: "80px 1.5rem", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="links-grid gsap-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
                        {[
                            { title: "Home", href: "/" },
                            { title: "Finance Agents", href: "/finance-agents" },
                            { title: "Sales Agents", href: "/sales-agents" },
                            { title: "Workflow Automation", href: "/enterprise-workflow-automation" },
                            { title: "Assessment", href: "/assessment" }
                        ].map((link, idx) => (
                            <Link key={idx} href={link.href} style={{
                                padding: "2rem",
                                background: "var(--card-bg)",
                                borderRadius: "16px",
                                border: "1px solid var(--border)",
                                color: "var(--text)",
                                textDecoration: "none",
                                fontWeight: 700,
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.3s ease",
                                boxShadow: "var(--card-shadow)"
                            }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.transform = "none"; }}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 10: Bottom CTA */}
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
                            <Link href="/assessment" className="btn-primary" style={{ padding: "1.2rem 2.5rem", borderRadius: "12px", textDecoration: "none" }}>
                                Calculate Your ROI Opportunity
                            </Link>
                            {/* <Link href="/case-studies" className="btn-secondary" style={{ padding: "1.2rem 2.5rem", borderRadius: "12px", textDecoration: "none" }}>
                                Explore Case Studies
                            </Link> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
