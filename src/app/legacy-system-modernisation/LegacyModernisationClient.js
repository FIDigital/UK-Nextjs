"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
    ArrowRight, 
    Database, 
    Layers, 
    ShieldCheck, 
    Zap, 
    Cpu, 
    ChevronDown, 
    TrendingUp, 
    Briefcase, 
    Users, 
    FileText, 
    Settings,
    History,
    CheckCircle2,
    BarChart3,
    ArrowUpRight
} from "lucide-react";
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

export default function LegacyModernisationClient() {
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
    }, { scope: containerRef });

    return (
            <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
            <style jsx>{`
                .container {
                    max-width: 1250px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }
                .section-label {
                    display: inline-block;
                    color: var(--primary);
                    font-weight: 800;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    margin-bottom: 1.5rem;
                    font-size: 0.9rem;
                }
                .section-title {
                    font-size: clamp(2.3rem, 5vw, 4rem);
                    font-weight: 950;
                    line-height: 1.1;
                    margin-bottom: 2.5rem;
                    letter-spacing: -0.03em;
                    color: var(--text);
                }
                .text-muted {
                    color: var(--text-muted);
                    line-height: 1.8;
                    font-size: 1.15rem;
                }
                .responsive-grid {
                    display: grid;
                    gap: 6rem;
                    align-items: center;
                    grid-template-columns: 1fr;
                }
                @media (min-width: 900px) {
                    .responsive-grid.zig { grid-template-columns: 1fr 1.2fr; }
                    .responsive-grid.zag { grid-template-columns: 1.2fr 1fr; }
                }
                .glass-card {
                    background: var(--card-bg);
                    border: 1px solid var(--border);
                    border-radius: 32px;
                    padding: 3rem;
                    transition: all 0.3s ease;
                }
                .glass-card:hover { border-color: var(--primary); }
                .accent-pill {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border);
                    padding: 0.6rem 1.2rem;
                    border-radius: 100px;
                    color: var(--primary);
                    font-weight: 700;
                    font-size: 0.85rem;
                }
            `}</style>

            {/* HERO SECTION */}
            <header style={{ 
                padding: "clamp(120px, 15vh, 180px) 0 100px", 
                position: "relative", 
                overflow: "hidden",
                background: "var(--bg)"
            }}>
                <div style={{
                    position: "absolute",
                    top: 0, right: 0, width: "70%", height: "100%",
                    zIndex: 0,
                    pointerEvents: "none",
                    opacity: 0.8
                }}>
                    <Image 
                        src="/images/modernisation/hero-legacy-modernisation.png" 
                        alt="Legacy System Modernisation" 
                        fill 
                        style={{ objectFit: "cover", objectPosition: "center right" }} 
                        priority 
                    />
                    <div style={{
                        position: "absolute",
                        top: 0, left: 0, width: "100%", height: "100%",
                        background: "radial-gradient(circle at 70% 50%, transparent, var(--bg) 75%)"
                    }} />
                </div>

                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ maxWidth: "850px" }}>
                        <div className="hero-title-line" style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", marginBottom: "2.5rem" }}>
                            <div className="pulse-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 15px var(--primary)" }} />
                            <span style={{ fontSize: "0.9rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--primary)" }}>Modernization Strategy</span>
                        </div>
                        <h1 className="hero-title-line" style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)", fontWeight: 950, lineHeight: 1.05, marginBottom: "2.5rem", letterSpacing: "-0.04em", color: "var(--text)" }}>
                            Don&apos;t Rip and Replace — <br />
                            <span style={{ color: "var(--primary)" }}>Layer AI on Top</span> <br />
                            of What Works
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", color: "var(--text-muted)", marginBottom: "4rem", maxWidth: "750px", lineHeight: 1.6, textAlign: "justify" }}>
                            Your Zoho CRM, Books, Projects, Inventory, SAP, or Oracle are the high-fidelity foundation of your business. We add AI intelligence on top. 10 years of Zoho expertise, 40+ implementations, certified depth.
                        </p>
                        <div className="hero-cta" style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
                            <Link href="/contact" style={{ padding: "1.25rem 2.8rem", background: "var(--primary)", color: "white", borderRadius: "14px", fontWeight: 700, textDecoration: "none", boxShadow: "0 10px 40px rgba(79, 70, 229, 0.3)" }}>Modernize Your Stack</Link>
                            <Link href="/discovery-audit" style={{ padding: "1.25rem 2.8rem", background: "transparent", color: "var(--text)", borderRadius: "14px", fontWeight: 700, textDecoration: "none", border: "1px solid var(--border)" }}>Technical Discovery</Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* SECTION 1: THE TRAP (Problem) */}
            <section style={{ padding: "100px 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="responsive-grid zig">
                        <div className="gsap-reveal">
                            <span className="section-label">Enterprise Realism</span>
                            <h2 className="section-title">Your Existing Systems Aren't Broken <br /><span style={{ color: "var(--primary)" }}>They're the Foundation</span></h2>
                            <div className="text-muted">
                                <p style={{ marginBottom: "2rem" }}>
                                    The worst advice from vendors: &quot;You need to replace your legacy system with our modern cloud platform.&quot; <strong>This is usually wrong.</strong>
                                </p>
                                <p style={{ marginBottom: "2rem" }}>
                                    Zoho CRM (or Salesforce, SAP, Oracle, Dynamics) is entrenched. It holds 5-10 years of customer data, transaction history, and <strong>process logic that nobody fully documents</strong>. Ripping it out and replacing it costs £500K-3M, takes 12-18 months, and disrupts business.
                                </p>
                                <p>
                                    The new system is often worse because all the accumulated business logic, workarounds, and edge cases that make your current system work didn&apos;t carry over.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal">
                            <div className="glass-card" style={{ textAlign: "center", border: "1px solid rgba(239, 68, 68, 0.3)", background: "var(--card-bg)" }}>
                                <ShieldCheck size={48} color="#ef4444" style={{ marginBottom: "2rem" }} />
                                <div style={{ fontSize: "2.5rem", fontWeight: 950, marginBottom: "0.5rem", color: "#ef4444" }}>£3M+</div>
                                <div style={{ color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.1em" }}>Potential Migration Cost</div>
                                <div style={{ marginTop: "2rem", height: "1px", background: "var(--border)", marginBottom: "2rem" }} />
                                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Loss of business logic is the hidden tax of replacement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE SOLUTION (Strategy) */}
            <section style={{ padding: "100px 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="responsive-grid zag">
                        <div className="gsap-img-reveal">
                            <div className="glass-card" style={{ textAlign: "center", border: "1px solid var(--primary)", background: "var(--card-bg)" }}>
                                <Zap size={48} color="var(--primary)" style={{ marginBottom: "2rem" }} />
                                <div style={{ fontSize: "2.5rem", fontWeight: 950, marginBottom: "0.5rem", color: "var(--text)" }}>12 Wks</div>
                                <div style={{ color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.1em" }}>Target Deployment</div>
                                <div style={{ marginTop: "2rem", height: "1px", background: "var(--border)", marginBottom: "2rem" }} />
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                                    <div>
                                        <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)" }}>Audit</div>
                                        <div style={{ fontSize: "0.6rem", color: "var(--text-muted)" }}>IDENTIFY VALUE</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)" }}>Layer</div>
                                        <div style={{ fontSize: "0.6rem", color: "var(--text-muted)" }}>INJECT AI</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">A Better Approach</span>
                            <h2 className="section-title">Modernisation <br /><span style={{ color: "var(--primary)" }}>Without Migration</span></h2>
                            <div className="text-muted">
                                <p style={{ marginBottom: "2rem" }}>
                                    Keep your existing system and add AI on top. We&apos;ve done this 40+ times with Zoho, SAP, Oracle, and Salesforce clients.
                                </p>
                                <p style={{ marginBottom: "2rem" }}>
                                    The pattern is identical: assess what your system does, identify where AI adds value, layer intelligent agents and automation on top, and <strong>keep the underlying system intact</strong>. 
                                </p>
                                <div style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "16px", border: "1px solid var(--border)" }}>
                                    <p style={{ margin: 0, fontSize: "1rem", color: "var(--text)", fontWeight: 500 }}>
                                        Benefit: Zero disruption. Accelerated ROI. Full retention of historical logic.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: "120px 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <span className="section-label">The Blueprint</span>
                        <h2 className="section-title">Example: Modernization <span style={{ color: "var(--primary)" }}>vs. Migration</span></h2>
                        <div className="text-muted" style={{ maxWidth: "900px", margin: "0 auto", textAlign: "justify" }}>
                            <p>
                                You have Zoho CRM tracking <strong>30,000 customers and 8,000 opportunities</strong>. Instead of migrating to Salesforce (cost: £800K, timeline: 14 months), we add: lead scoring AI (Claude predicts which leads will close), deal prediction (agent forecasts which deals are at risk), customer health scoring (agent monitors customer activity, flags at-risk accounts), and sales content recommendation (agent suggests relevant case studies, pricing, proof points to sales reps).
                            </p>
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
                        {/* THE WASTE CARD */}
                        <div className="gsap-reveal glass-card" style={{ border: "1px solid rgba(239, 68, 68, 0.3)", background: "var(--card-bg)" }}>
                            <div style={{ color: "#ef4444", fontWeight: 800, textTransform: "uppercase", fontSize: "0.80rem", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>The Migration Path</div>
                            <h4 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: "2rem", color: "var(--text)" }}>Rip and Replace</h4>
                            <div style={{ display: "grid", gap: "1.5rem" }}>
                                <div>
                                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>TYPICAL DIRECT COST</div>
                                    <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--text)" }}>£800,000+</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>TIMELINE</div>
                                    <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--text)" }}>14 Months</div>
                                </div>
                                <div style={{ padding: "1rem", background: "rgba(239, 68, 68, 0.05)", borderRadius: "12px", fontSize: "0.9rem", color: "#ef4444", border: "1px solid rgba(239, 68, 68, 0.1)" }}>
                                    Risk: 40% loss of historical business logic and edge-case data.
                                </div>
                            </div>
                        </div>

                        {/* THE AI CARDS */}
                        <div className="gsap-reveal glass-card" style={{ border: "1px solid #10b981", background: "var(--card-bg)" }}>
                            <div style={{ color: "#10b981", fontWeight: 800, textTransform: "uppercase", fontSize: "0.80rem", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>The Modernity Path</div>
                            <h4 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: "2rem", color: "var(--text)" }}>Layered AI Intelligence</h4>
                            <div style={{ display: "grid", gap: "1.5rem" }}>
                                <div>
                                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>TYPICAL DIRECT COST</div>
                                    <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--text)" }}>£120,000</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>TIMELINE</div>
                                    <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--text)" }}>12 Weeks</div>
                                </div>
                                <div style={{ padding: "1rem", background: "rgba(16, 185, 129, 0.05)", borderRadius: "12px", fontSize: "0.9rem", color: "#10b981", border: "1px solid rgba(16, 185, 129, 0.1)" }}>
                                    ROI: 15-20% productivity lift, 8-12% deal win rate improvement. No system downtime.
                                </div>
                            </div>
                        </div>

                        {/* CAPABILITIES CARD */}
                        <div className="gsap-reveal glass-card" style={{ background: "var(--card-bg)" }}>
                            <div style={{ color: "var(--primary)", fontWeight: 800, textTransform: "uppercase", fontSize: "0.80rem", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>Feature Layer</div>
                            <h4 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: "2rem", color: "var(--text)" }}>New AI Capabilities</h4>
                            <div style={{ display: "grid", gap: "1rem" }}>
                                {[
                                    "Claude Lead Scoring AI",
                                    "Deal Prediction Agents",
                                    "Customer Health Scoring",
                                    "Sales Content Recommendation"
                                ].map((feature, i) => (
                                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "0.95rem", color: "var(--text)" }}>
                                        <CheckCircle2 size={18} color="var(--primary)" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        
            {/* SECTION 2: OUR ZOHO EXPERTISE (Detailed) */}
            <section style={{ padding: "120px 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">A Decade of Implementation</span>
                        <h2 className="section-title">Our Zoho Expertise: <br /><span style={{ color: "var(--primary)" }}>Comprehensive Depth Across the Suite</span></h2>
                        <p className="text-muted" style={{ maxWidth: "800px", margin: "0 auto" }}>
                            We have unique depth in Zoho across all products. From CRM orchestration to low-code app development, we ensure your legacy foundation becomes an AI powerhouse.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "2rem" }}>
                        {[
                            {
                                product: "Zoho CRM",
                                logo: "zoho-crm.png",
                                count: "24 UK Enterprises",
                                desc: "Implemented for 24 enterprises. We handle customisation (workflows, custom fields, custom modules), migration, and AI integration. We've built custom apps using Zoho Creator for sector-specific workflows.",
                                kpis: [
                                    { label: "Implementation", val: "8-12 Weeks" },
                                    { label: "Efficiency", val: "40-60% Lift" }
                                ]
                            },
                            {
                                product: "Zoho Books",
                                logo: "zoho-books.png",
                                count: "18 Enterprises",
                                desc: "Multi-entity accounting, VAT/GST compliance, invoice workflows, and automated payment processing. Integrated with Zoho Inventory and ERP systems.",
                                kpis: [
                                    { label: "Implementation", val: "4-6 Weeks" },
                                    { label: "Manual Entry", val: "-20 Hrs/Wk" }
                                ]
                            },
                            {
                                product: "Zoho Projects",
                                logo: "zoho-project.png",
                                count: "12 Enterprises",
                                desc: "Project templates, task management, and resource planning. Integrated with Jira, GitHub, and Slack for cross-team real-time synchronization.",
                                kpis: [
                                    { label: "Implementation", val: "6-8 Weeks" },
                                    { label: "Team Sync", val: "Real-time" }
                                ]
                            },
                            {
                                product: "Zoho Inventory",
                                logo: "zoho-inventory.png",
                                count: "8 Enterprises",
                                desc: "Warehouse management, multi-location tracking, and fulfillment integrations with Shopify and WooCommerce for global supply chain visibility.",
                                kpis: [
                                    { label: "Integration", val: "Shopify/Woo" },
                                    { label: "Accuracy", val: "99.9%" }
                                ]
                            },
                            {
                                product: "Zoho Creator",
                                logo: "zoho-creator.png",
                                count: "7 Custom Apps",
                                desc: "Bespoke low-code application development for insurance policy management, manufacturing compliance tracking, and automated onboarding workflows.",
                                kpis: [
                                    { label: "ROI", val: "12 Months" },
                                    { label: "Build Time", val: "180+ Hours" }
                                ]
                            },
                            {
                                product: "Zoho Analytics",
                                logo: "zoho-analytics.png",
                                count: "15 Clients",
                                desc: "Advanced dashboards for sales pipeline analytics, financial KPIs, and inventory turnover. Transforming raw Zoho data into strategic technical insight.",
                                kpis: [
                                    { label: "Dashboards", val: "Sales/Fin" },
                                    { label: "Updates", val: "Real-time" }
                                ]
                            }
                        ].map((item, i) => (
                            <div key={i} className="gsap-reveal glass-card" style={{ display: "flex", flexDirection: "column", gap: "1.5rem", background: "var(--card-bg)", border: "1px solid var(--border)" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                    <div style={{ 
                                        position: "relative", 
                                        width: "120px", 
                                        height: "60px", 
                                        background: "white", 
                                        borderRadius: "12px", 
                                        padding: "0.8rem", 
                                        display: "flex", 
                                        alignItems: "center", 
                                        justifyContent: "center",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                                        border: "1px solid rgba(0,0,0,0.05)"
                                    }}>
                                        <Image 
                                            src={`/images/zoho/${item.logo}`} 
                                            alt={item.product} 
                                            fill 
                                            style={{ objectFit: "contain", padding: "0.6rem" }} 
                                        />
                                    </div>
                                    <span className="accent-pill" style={{ background: "var(--bg-secondary)", color: "var(--primary)", border: "1px solid var(--border)" }}>{item.count}</span>
                                </div>
                                <h4 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "0.2rem", color: "var(--text)" }}>{item.product}</h4>
                                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, flexGrow: 1 }}>{item.desc}</p>
                                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
                                    {item.kpis.map((kpi, ki) => (
                                        <div key={ki} style={{ padding: "0.5rem 1rem", background: "var(--bg)", borderRadius: "8px", border: "1px solid var(--border)" }}>
                                            <div style={{ fontSize: "0.6rem", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "0.2rem" }}>{kpi.label}</div>
                                            <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)" }}>{kpi.val}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="gsap-reveal" style={{ marginTop: "6rem", textAlign: "center", padding: "3rem", background: "var(--bg-secondary)", borderRadius: "32px", border: "1px solid var(--border)" }}>
                        <div style={{ fontSize: "0.80rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "2.5rem" }}>Verified Certifications & Partnership</div>
                        <div style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap", opacity: 0.8 }}>
                            {["Zoho CRM Advanced Certification", "Zoho Books Certification", "Zoho Creator Certification", "Official Zoho Partner Ecosystem"].map((cert, ci) => (
                                <div key={ci} style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--text)" }}>
                                    <ShieldCheck size={24} color="var(--primary)" />
                                    <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE AI LAYER */}
            <section style={{ padding: "120px 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">Intelligent Augmentation</span>
                        <h2 className="section-title">The AI Layer: <br /><span style={{ color: "var(--primary)" }}>What AI Adds to Your Zoho Environment</span></h2>
                        <p className="text-muted" style={{ maxWidth: "800px", margin: "0 auto" }}>
                            Here&apos;s how we layer AI intelligence on top of Zoho, across different Zoho products. We turn static data into proactive strategic assets.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "2.5rem" }}>
                        {/* CRM AI */}
                        <div className="gsap-reveal glass-card" style={{ background: "var(--card-bg)" }}>
                            <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                                <div style={{ color: "var(--primary)" }}><Users size={32} /></div>
                                <h4 style={{ fontSize: "1.6rem", fontWeight: 900, color: "var(--text)" }}>Zoho CRM + Claude AI</h4>
                            </div>
                            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1.2rem" }}>
                                {[
                                    { t: "Lead Scoring Agent", d: "Claude reads lead details, research, and past interactions to predict close probability within 30 days.", acc: "87% Accuracy" },
                                    { t: "Opportunity Health Agent", d: "Monitors activity, flags stalled deals, and suggests next steps based on historical wins." },
                                    { t: "Customer Health Monitoring", d: "Reads support tickets, product usage, and NPS scores to predict churn risk within 90 days.", acc: "79% Accuracy" },
                                    { t: "Sales Content Recommendation", d: "Claude suggests relevant case studies, pricing, and PoCs to sales reps during live calls." },
                                    { t: "Customer Segmentation", d: "Unsupervised clustering of CRM data identifying high-value cohorts and at-risk segments." }
                                ].map((bullet, i) => (
                                    <li key={i} style={{ paddingLeft: "1.5rem", position: "relative" }}>
                                        <div style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)" }} />
                                        <div style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.3rem", display: "flex", alignItems: "center", gap: "1rem", color: "var(--text)" }}>
                                            {bullet.t}
                                            {bullet.acc && <span style={{ fontSize: "0.65rem", padding: "0.2rem 0.6rem", background: "var(--bg-secondary)", color: "var(--primary)", borderRadius: "100px", border: "1px solid var(--border)" }}>{bullet.acc}</span>}
                                        </div>
                                        <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{bullet.d}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* BOOKS AI */}
                        <div className="gsap-reveal glass-card" style={{ background: "var(--card-bg)" }}>
                            <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                                <div style={{ color: "#10b981" }}><FileText size={32} /></div>
                                <h4 style={{ fontSize: "1.6rem", fontWeight: 900, color: "var(--text)" }}>Zoho Books + n8n + GPT-4o</h4>
                            </div>
                            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1.5rem" }}>
                                {[
                                    { t: "Automated Invoice Receipt", d: "Invoices arrive → OCR extracts data → n8n validates against PO → posts to Zoho Books → routes for approval." },
                                    { t: "Expense Categorisation", d: "Receipt arrives → GPT-4o categorises expense → Zoho Books GL coding applied automatically." },
                                    { t: "Revenue Recognition Automation", d: "Based on contract details in Zoho CRM, Zoho Books automatically books revenue on correct dates per ASC 606." }
                                ].map((bullet, i) => (
                                    <li key={i} style={{ paddingLeft: "1.5rem", position: "relative" }}>
                                        <div style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
                                        <div style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.3rem", color: "var(--text)" }}>{bullet.t}</div>
                                        <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{bullet.d}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* PROJECTS AI */}
                        <div className="gsap-reveal glass-card" style={{ background: "var(--card-bg)" }}>
                            <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                                <div style={{ color: "#f59e0b" }}><Briefcase size={32} /></div>
                                <h4 style={{ fontSize: "1.6rem", fontWeight: 900, color: "var(--text)" }}>Zoho Projects + Claude</h4>
                            </div>
                            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1.5rem" }}>
                                {[
                                    { t: "Resource Planning Agent", d: "Claude reads project requirements, team skills, and past allocation patterns to recommend optimal resource assignments." },
                                    { t: "Timeline Forecasting", d: "Agent predicts project completion date based on team velocity, scope changes, and dependency tracking." },
                                    { t: "Risk Identification", d: "Agent reads tasks and comments to identify schedule, budget, and execution risks." }
                                ].map((bullet, i) => (
                                    <li key={i} style={{ paddingLeft: "1.5rem", position: "relative" }}>
                                        <div style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b" }} />
                                        <div style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.3rem", color: "var(--text)" }}>{bullet.t}</div>
                                        <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{bullet.d}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* INVENTORY AI */}
                        <div className="gsap-reveal glass-card" style={{ background: "var(--card-bg)" }}>
                            <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                                <div style={{ color: "#06b6d4" }}><Database size={32} /></div>
                                <h4 style={{ fontSize: "1.6rem", fontWeight: 900, color: "var(--text)" }}>Zoho Inventory + GPT-4o + n8n</h4>
                            </div>
                            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1.5rem" }}>
                                {[
                                    { t: "Demand Forecasting", d: "GPT-4o reads historical sales data and seasonal patterns to predict future demand and trigger replenishment." },
                                    { t: "Supplier Recommendation", d: "Agent matches inventory items to best suppliers based on price, lead time, and quality history." },
                                    { t: "Stock-out Prevention", d: "Agent monitors inventory levels and triggers purchase orders before a stockout occurs." }
                                ].map((bullet, i) => (
                                    <li key={i} style={{ paddingLeft: "1.5rem", position: "relative" }}>
                                        <div style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", borderRadius: "50%", background: "#06b6d4" }} />
                                        <div style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.3rem", color: "var(--text)" }}>{bullet.t}</div>
                                        <div style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{bullet.d}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* INTEGRATION PATTERN */}
                    <div className="gsap-reveal" style={{ marginTop: "6rem", background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "32px", padding: "4rem" }}>
                        <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                            <div>
                                <span className="section-label">Technical Architecture</span>
                                <h3 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "2rem", color: "var(--text)" }}>Integration Pattern</h3>
                                <div className="text-muted" style={{ display: "grid", gap: "1.5rem" }}>
                                    <p>
                                        Zoho&apos;s API is straightforward. We build <strong>Python agents using LangChain</strong> that read from Zoho via API, reason with Claude/GPT-4o/Gemini, and write results back to Zoho.
                                    </p>
                                    <p>
                                        The agent runs on AWS, orchestrated via n8n. <strong>Zoho remains the system of record</strong>; AI agents are the augmentation layer. This ensures data integrity while unlocking massive intelligence.
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: "grid", gap: "1.5rem" }}>
                                <div className="glass-card" style={{ padding: "2rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "4px solid var(--primary)", borderRadius: "0 16px 16px 0" }}>
                                    <div style={{ fontWeight: 800, color: "var(--primary)", marginBottom: "1rem", fontSize: "0.80rem", letterSpacing: "0.1em" }}>IMPLEMENTATION</div>
                                    <div style={{ fontSize: "1.5rem", fontWeight: 950, marginBottom: "0.5rem", color: "var(--text)" }}>6-10 Weeks</div>
                                    <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Typical timeline to deploy the AI layer.</div>
                                    <div style={{ marginTop: "2rem", fontSize: "1.5rem", fontWeight: 950, color: "var(--text)" }}>£42,000 - £72,000</div>
                                    <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Direct implementation cost.</div>
                                </div>
                                <div className="glass-card" style={{ padding: "2rem", background: "var(--bg)", border: "1px solid var(--border)", borderLeft: "4px solid var(--primary)", borderRadius: "0 16px 16px 0" }}>
                                    <div style={{ fontWeight: 800, color: "var(--primary)", marginBottom: "1rem", fontSize: "0.80rem", letterSpacing: "0.1em" }}>ONGOING SUPPORT</div>
                                    <div style={{ fontSize: "1.5rem", fontWeight: 950, color: "var(--text)" }}>£3,000 - £8,000 /Mo</div>
                                    <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Agent infrastructure + API costs.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ROI SECTION */}
                    <div style={{ marginTop: "6rem" }}>
                        <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                            <span className="section-label">Business Value</span>
                            <h3 style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--text)" }}>Technical ROI Benchmarks</h3>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
                            {[
                                { val: "12-20%", label: "Sales Productivity", d: "Less manual entry, better lead prioritisation." },
                                { val: "25-35", label: "Finance Hours/Wk", d: "Saved from manual invoice processing." },
                                { val: "18-25%", label: "Ops Accuracy", d: "Improvement in demand forecast accuracy." },
                                { val: "3-7%", label: "Customer Retention", d: "Lift via proactive churn risk detection." }
                            ].map((roi, i) => (
                                <div key={i} className="gsap-reveal glass-card" style={{ textAlign: "center", background: "var(--card-bg)" }}>
                                    <div style={{ fontSize: "2.2rem", fontWeight: 950, color: "var(--primary)", marginBottom: "0.5rem" }}>{roi.val}</div>
                                    <div style={{ fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>{roi.label}</div>
                                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{roi.d}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: CASE STUDY (Detailed Phase-by-Phase) */}
            <section style={{ padding: "120px 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">Execution Strategy</span>
                        <h2 className="section-title">The 12-Week Modernisation <br /><span style={{ color: "var(--primary)" }}>Phase-by-Phase Breakdown</span></h2>
                    </div>

                    <div style={{ position: "relative", maxWidth: "1000px", margin: "0 auto" }}>
                        {/* Timeline Line */}
                        <div style={{ 
                            position: "absolute", left: "20px", top: 0, bottom: 0, width: "2px", 
                            background: "linear-gradient(to bottom, var(--primary), transparent)",
                            opacity: 0.3
                        }} />

                        {[
                            {
                                phase: "Phase 1: Technical Audit (Weeks 1-2)",
                                title: "Logic Extraction & Data Mapping",
                                points: [
                                    "Audit existing Zoho / SAP / Oracle workflows and custom functions.",
                                    "Map data relationships (what fields drive what reports?).",
                                    "Identify the 'Clean Core' - the logic that stays untouched."
                                ]
                            },
                            {
                                phase: "Phase 2: Agent Architecture (Weeks 3-5)",
                                title: "Building the AI Layer",
                                points: [
                                    "Develop Python agents using LangChain.",
                                    "Configure Claude/Gemini prompts for specific business tasks (Scoring, Analysis).",
                                    "Establish secure API handshake between Zoho and AWS/n8n."
                                ]
                            },
                            {
                                phase: "Phase 3: Integration & Testing (Weeks 6-9)",
                                title: "The Handshake Deployment",
                                points: [
                                    "Deploy real-time sync between Zoho and AI layer.",
                                    "Configure 'Back-writing' - agents update records in Zoho automatically.",
                                    "UAT (User Acceptance Testing) with internal sales/ops teams."
                                ]
                            },
                            {
                                phase: "Phase 4: Scaling & ROI (Weeks 10-12)",
                                title: "Strategic Rollout",
                                points: [
                                    "Full deployment across all teams.",
                                    "Initial ROI measurement vs. project benchmarks.",
                                    "Continuous prompt tuning based on live enterprise data."
                                ]
                            }
                        ].map((item, i) => (
                            <div key={i} className="gsap-reveal" style={{ position: "relative", paddingLeft: "60px", marginBottom: "4rem" }}>
                                <div style={{ 
                                    position: "absolute", left: "10px", top: "0", width: "22px", height: "22px", 
                                    borderRadius: "50%", background: "var(--bg)", border: "4px solid var(--primary)",
                                    boxShadow: "0 0 15px var(--primary)", zIndex: 1
                                }} />
                                <div className="glass-card" style={{ background: "var(--card-bg)" }}>
                                    <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", marginBottom: "1rem" }}>{item.phase}</div>
                                    <h4 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: "1.5rem", color: "var(--text)" }}>{item.title}</h4>
                                    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1rem" }}>
                                        {item.points.map((p, pi) => (
                                            <li key={pi} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", fontSize: "1.05rem" }}>
                                                <div style={{ color: "var(--primary)", fontWeight: 900 }}>→</div>
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: CASE STUDY */}
            <section style={{ padding: "120px 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">Real-World Case Study</span>
                        <h2 className="section-title">Zoho CRM Modernisation: <br /><span style={{ color: "var(--primary)" }}>£2.21M Annual Benefit</span></h2>
                        <p className="text-muted" style={{ maxWidth: "900px", margin: "0 auto" }}>
                            A £240M revenue financial services firm was using Zoho CRM to track 22,000 customers and 3,200 active opportunities. This is how we modernised their existing stack.
                        </p>
                    </div>

                    <div style={{ display: "grid", gap: "4rem" }}>
                        {/* PHASE 1 & 2: THE CHALLENGE & ASSESSMENT */}
                        <div className="responsive-grid zig" style={{ alignItems: "stretch" }}>
                            <div className="gsap-reveal glass-card" style={{ background: "var(--card-bg)", border: "1px solid var(--border)" }}>
                                <div style={{ color: "#ef4444", fontWeight: 800, textTransform: "uppercase", fontSize: "0.80rem", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>The Challenge</div>
                                <h4 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1.5rem", color: "var(--text)" }}>Opaque Pipeline & Churn</h4>
                                <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1rem" }}>
                                    {[
                                        "30% of inbound leads were unqualified.",
                                        "12% annual churn (lost 180 customers).",
                                        "Deals stuck in negotiation for months.",
                                        "Standard spreadsheet drudgery on top of Zoho."
                                    ].map((item, i) => (
                                        <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "0.95rem", color: "var(--text-muted)" }}>
                                            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ef4444" }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="gsap-reveal glass-card" style={{ background: "var(--card-bg)", border: "1px solid var(--border)" }}>
                                <div style={{ color: "var(--primary)", fontWeight: 800, textTransform: "uppercase", fontSize: "0.80rem", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>The Assessment</div>
                                <h4 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1.5rem", color: "var(--text)" }}>Drilling Into the Logic</h4>
                                <div className="text-muted" style={{ fontSize: "0.95rem" }}>
                                    <p style={{ marginBottom: "1rem", color: "var(--text-muted)" }}>We interviewed 18 sales reps and reviewed 2 years of historical data. Key findings: leads needed qualification before sales touched them; opportunities with no activity in 45+ days were dead but not closed; churn came as a surprise.</p>
                                    <div style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "16px", border: "1px solid var(--border)", fontSize: "0.95rem", color: "var(--primary)", fontWeight: 700, lineHeight: 1.5 }}>
                                        Strategy: AI agents for lead scoring, opportunity health, and customer health scoring.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="gsap-reveal" style={{ textAlign: "center", marginTop: "2rem" }}>
                            <h3 style={{ fontSize: "2.2rem", fontWeight: 950, marginBottom: "3rem", color: "var(--text)" }}>3 Claude-Powered AI Agents</h3>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                                {[
                                    { t: "Lead Scorer", d: "Reads lead details, research, engagement; predicts close probability with 85% target accuracy." },
                                    { t: "Opportunity Health", d: "Reads deal details and activity history; flags stalled deals for immediate re-engagement or auto-close." },
                                    { t: "Customer Health", d: "Reads support tickets, usage, and NPS scores; predicts churn risk before it becomes irreversible." }
                                ].map((agent, i) => (
                                    <div key={i} className="glass-card" style={{ padding: "2.5rem", background: "var(--card-bg)" }}>
                                        <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "var(--bg-secondary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: "1.5rem", margin: "0 auto 1.5rem", border: "1px solid var(--border)" }}>
                                            <ShieldCheck size={24} />
                                        </div>
                                        <div style={{ fontWeight: 900, marginBottom: "0.8rem", color: "var(--text)", fontSize: "1.2rem" }}>{agent.t}</div>
                                        <div style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{agent.d}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* PHASE 4: PILOT & OPTIMIZATION */}
                        <div className="gsap-reveal" style={{ padding: "4rem", background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "32px" }}>
                            <h4 style={{ fontSize: "2rem", fontWeight: 950, marginBottom: "2.5rem", textAlign: "center", color: "var(--text)" }}>Pilot Implementation & Refinement</h4>
                            <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                                <div className="text-muted" style={{ fontSize: "1.1rem" }}>
                                    <p style={{ marginBottom: "1.5rem", color: "var(--text-muted)" }}>In the pilot, agents scored 2,100 leads. Lead Scorer achieved 87% accuracy. We improved this to <strong>91% accuracy</strong> by adding Clearbit firmographic data.</p>
                                    <p style={{ color: "var(--text-muted)" }}>Opportunity health agent flagged 340 stalled opportunities (90% were unqualified). Customer health agent prevented <strong>£1.4M annual churn</strong> by flagging 18 at-risk accounts.</p>
                                </div>
                                <div className="glass-card" style={{ padding: "2.5rem", background: "var(--card-bg)", border: "1px solid #10b981" }}>
                                    <div style={{ color: "#10b981", fontWeight: 800, marginBottom: "1rem", fontSize: "0.8rem", letterSpacing: "0.1em" }}>PILOT PERFORMANCE</div>
                                    <div style={{ fontSize: "3.5rem", fontWeight: 950, color: "var(--primary)", lineHeight: 1 }}>91%</div>
                                    <div style={{ fontWeight: 800, marginTop: "1rem", color: "var(--text)" }}>Scoring Accuracy</div>
                                    <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "1.5rem" }}>Sales now prioritises leads with 91%+ probability, closing in 18 days av.</div>
                                </div>
                            </div>
                        </div>

                        {/* PHASE 5: RESULTS & ROI DASHBOARD */}
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "2.2rem", fontWeight: 950, marginBottom: "3rem", textAlign: "center", color: "var(--text)" }}>Technical Impact Dashboard (6 Months)</h3>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                                {[
                                    { v: "64% → 81%", l: "Forecast Accuracy", d: "Improvement in pipeline visibility" },
                                    { v: "8.2% → 11.4%", l: "Lead Conversion", d: "Improvement across the entire funnel" },
                                    { v: "+16%", l: "Sales Productivity", d: "Saved from manual qualification drudgery" },
                                    { v: "12% → 8.3%", l: "Churn Improvement", d: "Preventing £940K in annual churn" }
                                ].map((stat, i) => (
                                    <div key={i} className="glass-card" style={{ textAlign: "center", padding: "2.5rem", background: "var(--card-bg)" }}>
                                        <div style={{ fontSize: "2.4rem", fontWeight: 950, color: "var(--primary)", marginBottom: "0.5rem" }}>{stat.v}</div>
                                        <div style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--text)" }}>{stat.l}</div>
                                        <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{stat.d}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FINANCIAL ROI BLOCK */}
                        <div className="gsap-reveal glass-card" style={{ border: "1px solid var(--primary)", background: "var(--card-bg)" }}>
                            <div className="responsive-grid zig" style={{ gap: "4rem", alignItems: "center" }}>
                                <div>
                                    <div style={{ color: "var(--primary)", fontWeight: 800, textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.15em", marginBottom: "1.5rem" }}>Commercial Summary</div>
                                    <div style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 950, lineHeight: 1, letterSpacing: "-0.04em", marginBottom: "1.5rem", color: "var(--text)" }}>£2.21M</div>
                                    <div style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>Total Annual Benefit</div>
                                    <p className="text-muted" style={{ fontSize: "1.1rem", color: "var(--text-muted)" }}>Retained churn plus conversion lift across 2,000 leads with £18K ACV.</p>
                                </div>
                                <div style={{ display: "grid", gap: "1.5rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
                                        <span style={{ color: "var(--text-muted)", fontWeight: 500 }}>Implementation Cost</span>
                                        <span style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--text)" }}>£54,000</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
                                        <span style={{ color: "var(--text-muted)", fontWeight: 500 }}>Ongoing Monthly Cost</span>
                                        <span style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--text)" }}>£4,200</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
                                        <span style={{ color: "var(--text-muted)", fontWeight: 500 }}>Breakeven Timeline</span>
                                        <span style={{ fontWeight: 800, fontSize: "1.2rem", color: "#10b981" }}>3.2 Months</span>
                                    </div>
                                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6, marginTop: "1rem" }}>
                                        ROI Formula: £940K retained churn + (3.2% conversion improvement × 2,000 leads × £18K ACV) = £2.21M annually.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: FAQ Section */}
            <section style={{ padding: "120px 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">Questions & Answers</span>
                        <h2 className="section-title">Modernisation <span style={{ color: "var(--primary)" }}>FAQs</span></h2>
                        <p className="text-muted" style={{ maxWidth: "800px", margin: "0 auto" }}>
                            Everything you need to know about layering AI over your legacy enterprise systems.
                        </p>
                    </div>

                    <div className="gsap-reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            {[
                                {
                                    q: "Should we migrate away from our legacy system to something newer?",
                                    a: "Probably not. Rip-and-replace migrations cost £500K-3M and take 12-18 months. Your existing system, whether Zoho or SAP, holds 5-10 years of business logic. Migration risks disruption, data loss, and learning curve. Better: keep your system, add AI on top. AI layer costs £42K-95K, takes 8-14 weeks, and delivers 12-25% productivity improvement without migration risk. We've done this 40+ times; the approach works. Only migrate if your current system is genuinely failing (data loss, no vendor support, security liabilities). Most enterprises should deepen existing systems instead."
                                },
                                {
                                    q: "How long does it take to add AI to our Zoho environment?",
                                    a: "8-14 weeks depending on scope. Assessment phase (weeks 1-2): audit your Zoho configuration, identify improvement opportunities. Design phase (weeks 2-3): design AI agents, integration architecture, data flows. Pilot phase (weeks 3-6): build and test first 2-3 agents in parallel mode. Rollout phase (weeks 6-8): go live, embed hypercare engineer. Optimisation phase (weeks 8+): continuous improvement. Cost: £42,000-72,000 for implementation. Ongoing: £3,000-8,000 monthly."
                                },
                                {
                                    q: "Can we add AI to Salesforce, Dynamics, or SAP instead of Zoho?",
                                    a: "Yes. We've added AI to Salesforce (16 implementations), Dynamics (8 implementations), SAP (8 implementations), Oracle (5 implementations). The approach is identical: assess current state, design AI agents, pilot, rollout. Salesforce implementations: 8-12 weeks, £45K-75K. Dynamics implementations: 6-10 weeks, £38K-68K. SAP implementations: 10-14 weeks, £65K-95K (more complex due to SAP's architecture). Ongoing costs follow similar patterns. The underlying system remains your system of record; AI agents augment it."
                                },
                                {
                                    q: "How accurate are these AI agents in production?",
                                    a: "Varies by task. Lead scoring agents: 87-91% accuracy (we compare predictions against actual closes). Opportunity health agents: 89-93% accuracy (flagging stalled deals). Customer health agents: 76-82% accuracy (predicting churn; this is harder than scoring). We target different accuracy thresholds based on risk: low-risk tasks (suggestions) can tolerate 80% accuracy; high-risk tasks (financial decisions) need 95%+. In pilot, we measure accuracy, iterate to hit targets, then roll out. Production accuracy typically improves beyond pilot (agents learn from real edge cases)."
                                },
                                {
                                    q: "How much can AI improve our sales team productivity?",
                                    a: "Typical improvement: 12-20% productivity lift. Lead scoring cuts time spent on unqualified leads (reps focus on hot leads). Opportunity health flags stalled deals (reps don't waste time on dead opportunities). Customer health prediction catches churn before it happens (retention improves). On average, sales reps save 4-6 hours weekly. On a team of 20 reps at £75K average salary, that's £150K-225K annual productivity improvement. Plus improved forecast accuracy (3-5 point lift typical) and customer retention (3-7% churn reduction typical). ROI is typically 3-6 months."
                                },
                                {
                                    q: "What data security considerations are there?",
                                    a: "AI agents access your CRM/ERP via API using scoped credentials (we create agent-specific API users with limited permissions). Agents read data needed for analysis, write results back (scoring, predictions, flags). We never store your customer or transaction data in external systems; agents process in memory and discard after analysis. For highly regulated industries (finance, healthcare), we can run agents entirely on your infrastructure (private deployment) with zero external API calls. All agent decisions are logged to compliance audit trail. GDPR-compliant: agents don't export PII outside your control."
                                }
                            ].map((faq, i) => (
                                <details key={i} className="glass-card" style={{ padding: 0, overflow: "hidden", cursor: "pointer", background: "var(--card-bg)" }}>
                                    <summary style={{ padding: "1.5rem 2rem", fontWeight: 800, fontSize: "1.1rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--text)" }}>
                                        {faq.q}
                                        <span style={{ color: "var(--primary)" }}><ChevronDown size={20} /></span>
                                    </summary>
                                    <div style={{ padding: "0 2rem 2rem", color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1rem" }}>
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Should we migrate away from our legacy system to something newer?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Probably not. Rip-and-replace migrations cost £500K-3M and take 12-18 months. Your existing system, whether Zoho or SAP, holds 5-10 years of business logic. Migration risks disruption, data loss, and learning curve. Better: keep your system, add AI on top."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How long does it take to add AI to our Zoho environment?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "8-14 weeks depending on scope. Assessment phase (weeks 1-2): audit your Zoho configuration, identify improvement opportunities. Design phase (weeks 2-3): design AI agents, integration architecture, data flows."
                                    }
                                }
                            ]
                        })
                    }}
                />
            </section>

            {/* FINAL CTA */}
            <section style={{ padding: "120px 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <div className="gsap-reveal" style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <h2 className="section-title" style={{ color: "var(--text)" }}>Ready to Modernize Your <span style={{ color: "var(--primary)" }}>Legacy Infrastructure?</span></h2>
                        <p className="text-muted" style={{ marginBottom: "4rem", color: "var(--text-muted)", fontSize: "1.2rem" }}>
                            Stop fighting your software. Start orchestrating your success by layering AI over the foundations you&apos;ve already built.
                        </p>
                        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/discovery-audit" style={{ padding: "1.2rem 3rem", background: "var(--primary)", color: "white", borderRadius: "14px", fontWeight: 700, textDecoration: "none", boxShadow: "0 10px 40px rgba(79, 70, 229, 0.3)" }}>Assess Your System</Link>
                            <Link href="/work" style={{ padding: "1.2rem 3rem", background: "transparent", color: "var(--text)", borderRadius: "14px", fontWeight: 700, textDecoration: "none", border: "1px solid var(--border)" }}>View Zoho Portfolio</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERNAL LINKS */}
            <section style={{ padding: "80px 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
                    {[
                        { title: "AI Agent Development", href: "/ai-agent-development" },
                        { title: "Discovery Audit", href: "/discovery-audit" },
                        { title: "Zoho Portfolio & Case Studies", href: "/work" }
                    ].map((link, i) => (
                        <Link key={i} href={link.href} style={{ 
                            padding: "2rem", background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)", textDecoration: "none", color: "var(--text)", fontWeight: 800, fontSize: "1rem", transition: "all 0.3s ease", display: "flex", alignItems: "center", justifyContent: "space-between" 
                        }}>
                            {link.title}
                            <ArrowUpRight size={22} color="var(--primary)" />
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
