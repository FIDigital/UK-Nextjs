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
        <div ref={containerRef} style={{ background: "#0B0F1A", color: "white", minHeight: "100vh" }}>
            <style jsx>{`
                .container {
                    max-width: 1250px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                }
                .section-label {
                    display: inline-block;
                    color: #4F46E5;
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
                }
                .text-muted {
                    color: rgba(255,255,255,0.6);
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
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.06);
                    border-radius: 32px;
                    padding: 3rem;
                    transition: all 0.3s ease;
                }
                .glass-card:hover { border-color: #4F46E5; background: rgba(255,255,255,0.05); }
                .accent-pill {
                    background: rgba(79, 70, 229, 0.1);
                    border: 1px solid rgba(79, 70, 229, 0.2);
                    padding: 0.6rem 1.2rem;
                    border-radius: 100px;
                    color: #4F46E5;
                    font-weight: 700;
                    font-size: 0.85rem;
                }
            `}</style>

            {/* HERO SECTION */}
            <header style={{ 
                padding: "clamp(120px, 15vh, 160px) 0 80px", 
                position: "relative", 
                overflow: "hidden" 
            }}>
                <TechMeshBackground />
                <div style={{
                    position: "absolute",
                    top: 0, left: 0, width: "100%", height: "100%",
                    background: "radial-gradient(circle at 70% 50%, transparent, #0B0F1A 70%)",
                    pointerEvents: "none"
                }} />

                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ maxWidth: "1000px" }}>
                        <div className="hero-title-line" style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", marginBottom: "2.5rem" }}>
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4F46E5", boxShadow: "0 0 10px #4F46E5" }} />
                            <span style={{ fontSize: "0.9rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4F46E5" }}>Modernization Strategy</span>
                        </div>
                        <h1 className="hero-title-line" style={{ fontSize: "clamp(2.5rem, 6vw, 4.8rem)", fontWeight: 950, lineHeight: 1.05, marginBottom: "2.5rem", letterSpacing: "-0.04em" }}>
                            Don&apos;t Rip and Replace — <br />
                            <span style={{ color: "#4F46E5" }}>Layer AI on Top</span> of What Works
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: "clamp(1.15rem, 1.8vw, 1.4rem)", color: "rgba(255,255,255,0.7)", marginBottom: "4rem", maxWidth: "800px", lineHeight: 1.6 }}>
                            Your Zoho CRM, Books, Projects, Inventory, SAP, or Oracle aren&apos;t broken. They&apos;re the foundation. We add AI intelligence on top. 10 years of Zoho expertise, 40+ implementations, certified.
                        </p>
                        <div className="hero-cta" style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
                            <Link href="/contact" style={{ padding: "1.25rem 2.8rem", background: "#4F46E5", color: "white", borderRadius: "14px", fontWeight: 700, textDecoration: "none", boxShadow: "0 10px 40px rgba(79, 70, 229, 0.3)" }}>Modernize Your Stack</Link>
                            <Link href="/discovery-audit" style={{ padding: "1.25rem 2.8rem", background: "transparent", color: "white", borderRadius: "14px", fontWeight: 700, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>Technical Discovery</Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* SECTION 1: THE TRAP (Problem) */}
            <section style={{ padding: "100px 0", background: "linear-gradient(to bottom, #0B0F1A, #0F172A)" }}>
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
                            <div className="glass-card" style={{ textAlign: "center", border: "1px solid rgba(239, 68, 68, 0.2)" }}>
                                <ShieldCheck size={48} color="#ef4444" style={{ marginBottom: "2rem" }} />
                                <div style={{ fontSize: "2.5rem", fontWeight: 950, marginBottom: "0.5rem", color: "#ef4444" }}>£3M+</div>
                                <div style={{ color: "rgba(255,255,255,0.7)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.1em" }}>Potential Migration Cost</div>
                                <div style={{ marginTop: "2rem", height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "2rem" }} />
                                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)" }}>Loss of business logic is the hidden tax of replacement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE SOLUTION (Strategy) */}
            <section style={{ padding: "100px 0", background: "#0B0F1A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="container">
                    <div className="responsive-grid zag">
                        <div className="gsap-img-reveal">
                            <div className="glass-card" style={{ textAlign: "center", border: "1px solid var(--primary)" }}>
                                <Zap size={48} color="var(--primary)" style={{ marginBottom: "2rem" }} />
                                <div style={{ fontSize: "2.5rem", fontWeight: 950, marginBottom: "0.5rem" }}>12 Wks</div>
                                <div style={{ color: "rgba(255,255,255,0.7)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.1em" }}>Target Deployment</div>
                                <div style={{ marginTop: "2rem", height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "2rem" }} />
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                                    <div>
                                        <div style={{ fontSize: "1.2rem", fontWeight: 800 }}>Audit</div>
                                        <div style={{ fontSize: "0.6rem", opacity: 0.5 }}>IDENTIFY VALUE</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "1.2rem", fontWeight: 800 }}>Layer</div>
                                        <div style={{ fontSize: "0.6rem", opacity: 0.5 }}>INJECT AI</div>
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
                                <div style={{ padding: "1.5rem", background: "rgba(79, 70, 229, 0.05)", borderRadius: "16px", border: "1px solid rgba(79, 70, 229, 0.2)" }}>
                                    <p style={{ margin: 0, fontSize: "1rem", color: "white", fontWeight: 500 }}>
                                        Benefit: Zero disruption. Accelerated ROI. Full retention of historical logic.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>

                        <section style={{ padding: "120px 0", background: "linear-gradient(to bottom, #0B0F1A, #0F172A)" }}>
                <div className="container">
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <span className="section-label">The Blueprint</span>
                        <h2 className="section-title">Example: Modernization <span style={{ color: "#4F46E5" }}>vs. Migration</span></h2>
                        <div className="text-muted" style={{ maxWidth: "900px", margin: "0 auto", textAlign: "justify" }}>
                            <p>
                                You have Zoho CRM tracking <strong>30,000 customers and 8,000 opportunities</strong>. Instead of migrating to Salesforce (cost: £800K, timeline: 14 months), we add: lead scoring AI (Claude predicts which leads will close), deal prediction (agent forecasts which deals are at risk), customer health scoring (agent monitors customer activity, flags at-risk accounts), and sales content recommendation (agent suggests relevant case studies, pricing, proof points to sales reps).
                            </p>
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
                        {/* THE WASTE CARD */}
                        <div className="gsap-reveal glass-card" style={{ border: "1px solid rgba(239, 68, 68, 0.2)" }}>
                            <div style={{ color: "#ef4444", fontWeight: 800, textTransform: "uppercase", fontSize: "0.80rem", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>The Migration Path</div>
                            <h4 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: "2rem" }}>Rip and Replace</h4>
                            <div style={{ display: "grid", gap: "1.5rem" }}>
                                <div>
                                    <div style={{ fontSize: "0.75rem", opacity: 0.5 }}>TYPICAL DIRECT COST</div>
                                    <div style={{ fontSize: "1.8rem", fontWeight: 900 }}>£800,000+</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: "0.75rem", opacity: 0.5 }}>TIMELINE</div>
                                    <div style={{ fontSize: "1.8rem", fontWeight: 900 }}>14 Months</div>
                                </div>
                                <div style={{ padding: "1rem", background: "rgba(239, 68, 68, 0.05)", borderRadius: "12px", fontSize: "0.9rem", color: "#ef4444" }}>
                                    Risk: 40% loss of historical business logic and edge-case data.
                                </div>
                            </div>
                        </div>

                        {/* THE AI CARDS */}
                        <div className="gsap-reveal glass-card" style={{ border: "1px solid #10b981" }}>
                            <div style={{ color: "#10b981", fontWeight: 800, textTransform: "uppercase", fontSize: "0.80rem", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>The Modernity Path</div>
                            <h4 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: "2rem" }}>Layered AI Intelligence</h4>
                            <div style={{ display: "grid", gap: "1.5rem" }}>
                                <div>
                                    <div style={{ fontSize: "0.75rem", opacity: 0.5 }}>TYPICAL DIRECT COST</div>
                                    <div style={{ fontSize: "1.8rem", fontWeight: 900 }}>£120,000</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: "0.75rem", opacity: 0.5 }}>TIMELINE</div>
                                    <div style={{ fontSize: "1.8rem", fontWeight: 900 }}>12 Weeks</div>
                                </div>
                                <div style={{ padding: "1rem", background: "rgba(16, 185, 129, 0.05)", borderRadius: "12px", fontSize: "0.9rem", color: "#10b981" }}>
                                    ROI: 15-20% productivity lift, 8-12% deal win rate improvement. No system downtime.
                                </div>
                            </div>
                        </div>

                        {/* CAPABILITIES CARD */}
                        <div className="gsap-reveal glass-card">
                            <div style={{ color: "#4F46E5", fontWeight: 800, textTransform: "uppercase", fontSize: "0.80rem", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>Feature Layer</div>
                            <h4 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: "2rem" }}>New AI Capabilities</h4>
                            <div style={{ display: "grid", gap: "1rem" }}>
                                {[
                                    "Claude Lead Scoring AI",
                                    "Deal Prediction Agents",
                                    "Customer Health Scoring",
                                    "Sales Content Recommendation"
                                ].map((feature, i) => (
                                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "0.95rem" }}>
                                        <CheckCircle2 size={18} color="#4F46E5" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        
            {/* SECTION 2: OUR ZOHO EXPERTISE (Detailed) */}
            <section style={{ padding: "120px 0", background: "linear-gradient(to bottom, #0B0F1A, #0F172A)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
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
                                icon: <Users size={32} />,
                                count: "24 UK Enterprises",
                                desc: "Implemented for 24 enterprises. We handle customisation (workflows, custom fields, custom modules), integration (Salesforce migrations, Zoho + QuickBooks + Slack, etc.), and configuration (sales processes, pipeline management, forecasting). We've built custom apps using Zoho Creator for sector-specific workflows. Trained 800+ sales reps over the years.",
                                kpis: [
                                    { label: "Implementation", val: "8-12 Weeks" },
                                    { label: "Cost", val: "£35k - £65k" },
                                    { label: "Efficiency", val: "40-60% Lift" }
                                ]
                            },
                            {
                                product: "Zoho Books",
                                icon: <FileText size={32} />,
                                count: "18 Enterprises",
                                desc: "Multi-entity accounting, VAT/GST compliance, invoice workflows, payment processing. Integrated with Zoho Inventory, Stripe, Xero migration, custom ERP systems. Eliminates manual invoice entry (average 20+ hours weekly).",
                                kpis: [
                                    { label: "Implementation", val: "4-6 Weeks" },
                                    { label: "Cost", val: "£18k - £32k" },
                                    { label: "Manual Entry", val: "-20 Hrs/Wk" }
                                ]
                            },
                            {
                                product: "Zoho Projects",
                                icon: <Briefcase size={32} />,
                                count: "12 Enterprises",
                                desc: "Project templates, task management, resource planning, time tracking, budget management. Integrated with: Jira, GitHub, Slack, Teams (automated status updates). Focused on resource optimization and multi-team collaboration.",
                                kpis: [
                                    { label: "Implementation", val: "6-8 Weeks" },
                                    { label: "Cost", val: "£22k - £38k" },
                                    { label: "Team Sync", val: "Real-time" }
                                ]
                            },
                            {
                                product: "Zoho Inventory",
                                icon: <Database size={32} />,
                                count: "8 Enterprises",
                                desc: "Warehouse management, SKU tracking, multi-location inventory, integrations with Shopify, WooCommerce, and custom fulfillment systems. Enabling centralized visibility across global supply chains.",
                                kpis: [
                                    { label: "Integration", val: "Shopify/Woo" },
                                    { label: "Accuracy", val: "99.9%" }
                                ]
                            },
                            {
                                product: "Zoho Creator",
                                icon: <Cpu size={32} />,
                                count: "7 Custom Apps",
                                desc: "Our team has built 7 custom applications using Zoho's low-code platform. Examples: insurance policy management system (180 hours build, 12 months ROI), manufacturing compliance tracker (capturing production data, auditing quality), and customer onboarding workflows.",
                                kpis: [
                                    { label: "Creator ROI", val: "12 Months" },
                                    { label: "Build Time", val: "180+ Hours" }
                                ]
                            },
                            {
                                product: "Zoho Analytics",
                                icon: <BarChart3 size={32} />,
                                count: "15 Clients",
                                desc: "Built dashboards and reports for sales pipeline analytics (daily updates), customer lifetime value analysis, financial KPIs, and inventory turnover. Transforming raw data into technical strategic insight.",
                                kpis: [
                                    { label: "Dashboards", val: "Sales/Fin" },
                                    { label: "Updates", val: "Real-time" }
                                ]
                            }
                        ].map((item, i) => (
                            <div key={i} className="gsap-reveal glass-card" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                    <div style={{ color: "var(--primary)" }}>{item.icon}</div>
                                    <span className="accent-pill">{item.count}</span>
                                </div>
                                <h4 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "0.5rem" }}>{item.product}</h4>
                                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.7, flexGrow: 1 }}>{item.desc}</p>
                                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
                                    {item.kpis.map((kpi, ki) => (
                                        <div key={ki} style={{ padding: "0.5rem 1rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
                                            <div style={{ fontSize: "0.6rem", opacity: 0.5, textTransform: "uppercase", marginBottom: "0.2rem" }}>{kpi.label}</div>
                                            <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)" }}>{kpi.val}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="gsap-reveal" style={{ marginTop: "6rem", textAlign: "center", padding: "3rem", background: "rgba(79, 70, 229, 0.03)", borderRadius: "32px", border: "1px solid rgba(79, 70, 229, 0.15)" }}>
                        <div style={{ fontSize: "0.80rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "2.5rem" }}>Verified Certifications & Partnership</div>
                        <div style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap", opacity: 0.8 }}>
                            {["Zoho CRM Advanced Certification", "Zoho Books Certification", "Zoho Creator Certification", "Official Zoho Partner Ecosystem"].map((cert, ci) => (
                                <div key={ci} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                    <ShieldCheck size={24} color="var(--primary)" />
                                    <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE AI LAYER */}
            <section style={{ padding: "120px 0", background: "#0B0F1A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
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
                        <div className="gsap-reveal glass-card">
                            <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                                <div style={{ color: "var(--primary)" }}><Users size={32} /></div>
                                <h4 style={{ fontSize: "1.6rem", fontWeight: 900 }}>Zoho CRM + Claude AI</h4>
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
                                        <div style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.3rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                                            {bullet.t}
                                            {bullet.acc && <span style={{ fontSize: "0.65rem", padding: "0.2rem 0.6rem", background: "rgba(79, 70, 229, 0.1)", color: "var(--primary)", borderRadius: "100px", border: "1px solid rgba(79, 70, 229, 0.2)" }}>{bullet.acc}</span>}
                                        </div>
                                        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.6 }}>{bullet.d}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* BOOKS AI */}
                        <div className="gsap-reveal glass-card">
                            <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                                <div style={{ color: "#10b981" }}><FileText size={32} /></div>
                                <h4 style={{ fontSize: "1.6rem", fontWeight: 900 }}>Zoho Books + n8n + GPT-4o</h4>
                            </div>
                            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1.5rem" }}>
                                {[
                                    { t: "Automated Invoice Receipt", d: "Invoices arrive → OCR extracts data → n8n validates against PO → posts to Zoho Books → routes for approval." },
                                    { t: "Expense Categorisation", d: "Receipt arrives → GPT-4o categorises expense → Zoho Books GL coding applied automatically." },
                                    { t: "Revenue Recognition Automation", d: "Based on contract details in Zoho CRM, Zoho Books automatically books revenue on correct dates per ASC 606." }
                                ].map((bullet, i) => (
                                    <li key={i} style={{ paddingLeft: "1.5rem", position: "relative" }}>
                                        <div style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
                                        <div style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.3rem" }}>{bullet.t}</div>
                                        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.6 }}>{bullet.d}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* PROJECTS AI */}
                        <div className="gsap-reveal glass-card">
                            <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                                <div style={{ color: "#f59e0b" }}><Briefcase size={32} /></div>
                                <h4 style={{ fontSize: "1.6rem", fontWeight: 900 }}>Zoho Projects + Claude</h4>
                            </div>
                            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1.5rem" }}>
                                {[
                                    { t: "Resource Planning Agent", d: "Claude reads project requirements, team skills, and past allocation patterns to recommend optimal resource assignments." },
                                    { t: "Timeline Forecasting", d: "Agent predicts project completion date based on team velocity, scope changes, and dependency tracking." },
                                    { t: "Risk Identification", d: "Agent reads tasks and comments to identify schedule, budget, and execution risks." }
                                ].map((bullet, i) => (
                                    <li key={i} style={{ paddingLeft: "1.5rem", position: "relative" }}>
                                        <div style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b" }} />
                                        <div style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.3rem" }}>{bullet.t}</div>
                                        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.6 }}>{bullet.d}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* INVENTORY AI */}
                        <div className="gsap-reveal glass-card">
                            <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
                                <div style={{ color: "#06b6d4" }}><Database size={32} /></div>
                                <h4 style={{ fontSize: "1.6rem", fontWeight: 900 }}>Zoho Inventory + GPT-4o + n8n</h4>
                            </div>
                            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1.5rem" }}>
                                {[
                                    { t: "Demand Forecasting", d: "GPT-4o reads historical sales data and seasonal patterns to predict future demand and trigger replenishment." },
                                    { t: "Supplier Recommendation", d: "Agent matches inventory items to best suppliers based on price, lead time, and quality history." },
                                    { t: "Stock-out Prevention", d: "Agent monitors inventory levels and triggers purchase orders before a stockout occurs." }
                                ].map((bullet, i) => (
                                    <li key={i} style={{ paddingLeft: "1.5rem", position: "relative" }}>
                                        <div style={{ position: "absolute", left: 0, top: "8px", width: "6px", height: "6px", borderRadius: "50%", background: "#06b6d4" }} />
                                        <div style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.3rem" }}>{bullet.t}</div>
                                        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.6 }}>{bullet.d}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* INTEGRATION PATTERN */}
                    <div className="gsap-reveal" style={{ marginTop: "6rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "32px", padding: "4rem" }}>
                        <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                            <div>
                                <span className="section-label">Technical Architecture</span>
                                <h3 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "2rem" }}>Integration Pattern</h3>
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
                                <div className="glass-card" style={{ padding: "2rem", background: "rgba(79, 70, 229, 0.05)", border: "1px solid rgba(79, 70, 229, 0.1)" }}>
                                    <div style={{ fontWeight: 800, color: "var(--primary)", marginBottom: "1rem", fontSize: "0.80rem", letterSpacing: "0.1em" }}>IMPLEMENTATION</div>
                                    <div style={{ fontSize: "1.5rem", fontWeight: 950, marginBottom: "0.5rem" }}>6-10 Weeks</div>
                                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>Typical timeline to deploy the AI layer.</div>
                                    <div style={{ marginTop: "2rem", fontSize: "1.5rem", fontWeight: 950 }}>£42,000 - £72,000</div>
                                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>Direct implementation cost.</div>
                                </div>
                                <div className="glass-card" style={{ padding: "2rem" }}>
                                    <div style={{ fontWeight: 800, color: "var(--primary)", marginBottom: "1rem", fontSize: "0.80rem", letterSpacing: "0.1em" }}>ONGOING SUPPORT</div>
                                    <div style={{ fontSize: "1.5rem", fontWeight: 950 }}>£3,000 - £8,000 /Mo</div>
                                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>Agent infrastructure + API costs.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ROI SECTION */}
                    <div style={{ marginTop: "6rem" }}>
                        <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                            <span className="section-label">Business Value</span>
                            <h3 style={{ fontSize: "2.5rem", fontWeight: 900 }}>Technical ROI Benchmarks</h3>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
                            {[
                                { val: "12-20%", label: "Sales Productivity", d: "Less manual entry, better lead prioritisation." },
                                { val: "25-35", label: "Finance Hours/Wk", d: "Saved from manual invoice processing." },
                                { val: "18-25%", label: "Ops Accuracy", d: "Improvement in demand forecast accuracy." },
                                { val: "3-7%", label: "Customer Retention", d: "Lift via proactive churn risk detection." }
                            ].map((roi, i) => (
                                <div key={i} className="gsap-reveal glass-card" style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "2.2rem", fontWeight: 950, color: "var(--primary)", marginBottom: "0.5rem" }}>{roi.val}</div>
                                    <div style={{ fontWeight: 800, marginBottom: "1rem" }}>{roi.label}</div>
                                    <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{roi.d}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
 
            {/* SECTION 4: CASE STUDY */}
            <section style={{ padding: "120px 0", background: "linear-gradient(to bottom, #0B0F1A, #0F172A)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
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
                            <div className="gsap-reveal glass-card">
                                <div style={{ color: "#ef4444", fontWeight: 800, textTransform: "uppercase", fontSize: "0.80rem", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>The Challenge</div>
                                <h4 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>Opaque Pipeline & Churn</h4>
                                <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1rem" }}>
                                    {[
                                        "30% of inbound leads were unqualified.",
                                        "12% annual churn (lost 180 customers).",
                                        "Deals stuck in negotiation for months.",
                                        "Standard spreadsheet drudgery on top of Zoho."
                                    ].map((item, i) => (
                                        <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "0.95rem", color: "rgba(255,255,255,0.6)" }}>
                                            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ef4444" }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="gsap-reveal glass-card">
                                <div style={{ color: "var(--primary)", fontWeight: 800, textTransform: "uppercase", fontSize: "0.80rem", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>The Assessment</div>
                                <h4 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>Drilling Into the Logic</h4>
                                <div className="text-muted" style={{ fontSize: "0.95rem" }}>
                                    <p style={{ marginBottom: "1rem" }}>We interviewed 18 sales reps and reviewed 2 years of historical data. Key findings: leads needed qualification before sales touched them; opportunities with no activity in 45+ days were dead but not closed; churn came as a surprise.</p>
                                    <div style={{ padding: "1rem", background: "rgba(79, 70, 229, 0.05)", borderRadius: "12px", border: "1px solid rgba(79, 70, 229, 0.1)", fontSize: "0.85rem", color: "var(--primary)", fontWeight: 700 }}>
                                        Strategy: AI agents for lead scoring, opportunity health, and customer health scoring.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PHASE 3: THE SOLUTION AGENTS */}
                        <div className="gsap-reveal" style={{ textAlign: "center", marginTop: "2rem" }}>
                            <h3 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "3rem" }}>3 Claude-Powered AI Agents</h3>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                                {[
                                    { t: "Lead Scorer", d: "Reads lead details, research, engagement; predicts close probability with 85% target accuracy." },
                                    { t: "Opportunity Health", d: "Reads deal details and activity history; flags stalled deals for immediate re-engagement or auto-close." },
                                    { t: "Customer Health", d: "Reads support tickets, usage, and NPS scores; predicts churn risk before it becomes irreversible." }
                                ].map((agent, i) => (
                                    <div key={i} className="glass-card" style={{ padding: "2rem" }}>
                                        <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(79, 70, 229, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: "1.5rem", margin: "0 auto 1.5rem" }}>
                                            <ShieldCheck size={20} />
                                        </div>
                                        <div style={{ fontWeight: 800, marginBottom: "0.5rem" }}>{agent.t}</div>
                                        <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{agent.d}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* PHASE 4: PILOT & OPTIMIZATION */}
                        <div className="gsap-reveal" style={{ padding: "4rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "32px" }}>
                            <h4 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "2rem", textAlign: "center" }}>Pilot Implementation & Refinement</h4>
                            <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                                <div className="text-muted" style={{ fontSize: "1rem" }}>
                                    <p style={{ marginBottom: "1.5rem" }}>In the pilot, agents scored 2,100 leads. Lead Scorer achieved 87% accuracy. We improved this to <strong>91% accuracy</strong> by adding Clearbit firmographic data.</p>
                                    <p>Opportunity health agent flagged 340 stalled opportunities (90% were unqualified). Customer health agent prevented <strong>£1.4M annual churn</strong> by flagging 18 at-risk accounts.</p>
                                </div>
                                <div className="glass-card" style={{ padding: "2.5rem", background: "linear-gradient(to right, rgba(16, 185, 129, 0.05), transparent)" }}>
                                    <div style={{ color: "#10b981", fontWeight: 800, marginBottom: "1rem", fontSize: "0.8rem", letterSpacing: "0.1em" }}>PILOT PERFORMANCE</div>
                                    <div style={{ fontSize: "3.5rem", fontWeight: 950, color: "#10b981", lineHeight: 1 }}>91%</div>
                                    <div style={{ fontWeight: 800, marginTop: "1rem" }}>Scoring Accuracy</div>
                                    <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", marginTop: "1.5rem" }}>Sales now prioritises leads with 91%+ probability, closing in 18 days av.</div>
                                </div>
                            </div>
                        </div>

                        {/* PHASE 5: RESULTS & ROI DASHBOARD */}
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "3rem", textAlign: "center" }}>Technical Impact Dashboard (6 Months)</h3>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                                {[
                                    { v: "64% → 81%", l: "Forecast Accuracy", d: "Improvement in pipeline visibility" },
                                    { v: "8.2% → 11.4%", l: "Lead Conversion", d: "Improvement across the entire funnel" },
                                    { v: "+16%", l: "Sales Productivity", d: "Saved from manual qualification drudgery" },
                                    { v: "12% → 8.3%", l: "Churn Improvement", d: "Preventing £940K in annual churn" }
                                ].map((stat, i) => (
                                    <div key={i} className="glass-card" style={{ textAlign: "center", padding: "2.5rem" }}>
                                        <div style={{ fontSize: "2.2rem", fontWeight: 950, color: "var(--primary)", marginBottom: "0.5rem" }}>{stat.v}</div>
                                        <div style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.5rem" }}>{stat.l}</div>
                                        <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>{stat.d}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FINANCIAL ROI BLOCK */}
                        <div className="gsap-reveal glass-card" style={{ border: "1px solid var(--primary)", background: "rgba(79, 70, 229, 0.05)" }}>
                            <div className="responsive-grid zig" style={{ gap: "4rem", alignItems: "center" }}>
                                <div>
                                    <div style={{ color: "var(--primary)", fontWeight: 800, textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.15em", marginBottom: "1.5rem" }}>Commercial Summary</div>
                                    <div style={{ fontSize: "4.5rem", fontWeight: 950, lineHeight: 1, letterSpacing: "-0.04em", marginBottom: "1.5rem" }}>£2.21M</div>
                                    <div style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1rem" }}>Total Annual Benefit</div>
                                    <p className="text-muted" style={{ fontSize: "1rem" }}>Retained churn plus conversion lift across 2,000 leads with £18K ACV.</p>
                                </div>
                                <div style={{ display: "grid", gap: "1.5rem" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                                        <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Implementation Cost</span>
                                        <span style={{ fontWeight: 800, fontSize: "1.2rem" }}>£54,000</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                                        <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Ongoing Monthly Cost</span>
                                        <span style={{ fontWeight: 800, fontSize: "1.2rem" }}>£4,200</span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                                        <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Breakeven Timeline</span>
                                        <span style={{ fontWeight: 800, fontSize: "1.2rem", color: "#10b981" }}>3.2 Months</span>
                                    </div>
                                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginTop: "1rem" }}>
                                        ROI Formula: £940K retained churn + (3.2% conversion improvement × 2,000 leads × £18K ACV) = £2.21M annually.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* SECTION 5: FAQ Section */}
             <section style={{ padding: "120px 0", background: "#0B0F1A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
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
                                 <details key={i} className="glass-card" style={{ padding: 0, overflow: "hidden", cursor: "pointer" }}>
                                     <summary style={{ padding: "1.5rem 2rem", fontWeight: 800, fontSize: "1.1rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                         {faq.q}
                                         <span style={{ color: "var(--primary)" }}><ChevronDown size={20} /></span>
                                     </summary>
                                     <div style={{ padding: "0 2rem 2rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontSize: "1rem" }}>
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
             <section style={{ padding: "120px 0", background: "#0B0F1A" }}>
                 <div className="container" style={{ textAlign: "center" }}>
                     <div className="gsap-reveal" style={{ maxWidth: "800px", margin: "0 auto" }}>
                         <h2 className="section-title">Ready to Modernize Your <span style={{ color: "#4F46E5" }}>Legacy Infrastructure?</span></h2>
                         <p className="text-muted" style={{ marginBottom: "4rem" }}>
                             Stop fighting your software. Start orchestrating your success by layering AI over the foundations you&apos;ve already built.
                         </p>
                         <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                             <Link href="/discovery-audit" style={{ padding: "1.2rem 3rem", background: "#4F46E5", color: "white", borderRadius: "14px", fontWeight: 700, textDecoration: "none", boxShadow: "0 10px 40px rgba(79, 70, 229, 0.3)" }}>Assess Your System</Link>
                             <Link href="/work" style={{ padding: "1.2rem 3rem", background: "transparent", color: "white", borderRadius: "14px", fontWeight: 700, textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>View Zoho Portfolio</Link>
                         </div>
                     </div>
                 </div>
             </section>

             {/* INTERNAL LINKS */}
             <section style={{ padding: "80px 0", background: "#0B0F1A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                 <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
                     {[
                         { title: "AI Agent Development", href: "/ai-agent-development" },
                         { title: "Discovery Audit", href: "/discovery-audit" },
                         { title: "Zoho Portfolio & Case Studies", href: "/work" }
                     ].map((link, i) => (
                         <Link key={i} href={link.href} style={{ 
                             padding: "1.5rem", background: "rgba(255,255,255,0.02)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)", textDecoration: "none", color: "white", fontWeight: 700, fontSize: "0.9rem", transition: "all 0.3s ease", display: "flex", alignItems: "center", justifyContent: "space-between" 
                         }}>
                             {link.title}
                             <ArrowUpRight size={18} color="#4F46E5" />
                         </Link>
                     ))}
                 </div>
             </section>
        </div>
    );
}
