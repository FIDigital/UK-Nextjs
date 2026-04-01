"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Network, 
  Zap, 
  ShieldCheck, 
  Database, 
  Layers, 
  TrendingUp, 
  ChevronDown,
  Lock,
  Workflow,
  Cpu,
  Server,
  Terminal,
  Activity,
  CheckCircle,
  FileSearch,
  History
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
                ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
                ctx.fill();

                for (let j = i + 1; j < dots.length; j++) {
                    const d2 = dots[j];
                    const dist = Math.hypot(dot.x - d2.x, dot.y - d2.y);
                    if (dist < maxDist) {
                        ctx.globalAlpha = 1 - dist / maxDist;
                        ctx.beginPath();
                        ctx.moveTo(dot.x, dot.y);
                        ctx.lineTo(d2.x, d2.y);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
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

    return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 0, opacity: 0.6 }} />;
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="faq-item" style={{ marginBottom: "1rem" }}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                style={{ 
                    width: "100%", 
                    padding: "1.5rem 2rem", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    background: "none", 
                    border: "none", 
                    color: "var(--text)", 
                    cursor: "pointer",
                    textAlign: "left"
                }}>
                <span style={{ fontSize: "1.1rem", fontWeight: 700 }}>{question}</span>
                <ChevronDown size={20} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s ease", color: "var(--primary)" }} />
            </button>
            <div style={{ 
                height: isOpen ? "auto" : "0", 
                overflow: "hidden", 
                transition: "all 0.3s ease",
                padding: isOpen ? "0 2rem 1.5rem 2rem" : "0 2rem"
            }}>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>{answer}</p>
            </div>
        </div>
    );
};

export default function EnterpriseWorkflowClient() {
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
        <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)", position: "relative", minHeight: "100vh", overflow: "hidden" }}>
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
                    .hero-background-wrapper { width: 65% !important; }
                }
                .hero-section {
                    padding: 160px 1.5rem 100px;
                    position: relative;
                    z-index: 1;
                    min-height: 90vh;
                    display: flex;
                    align-items: center;
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
                    color: var(--text);
                }
                .text-secondary {
                    color: var(--text-muted);
                }
                .pillar-card {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .pillar-card:hover {
                    border-color: var(--primary) !important;
                    box-shadow: 0 20px 40px -20px rgba(79, 70, 229, 0.3);
                    transform: translateY(-8px);
                }
                .faq-container {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .faq-item {
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    overflow: hidden;
                    background: var(--bg-secondary);
                    transition: all 0.3s ease;
                }
                .faq-item:hover {
                    border-color: rgba(79, 70, 229, 0.3);
                }
                .hero-image-mask {
                    mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
                    -webkit-mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.5); opacity: 0.5; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .pulse-dot {
                    animation: pulse 2s infinite;
                }
            `}</style>

            <TechMeshBackground />

            {/* Hero Section */}
            <section className="hero-section">
                {/* Background Image Container */}
                <div className="hero-background-wrapper" style={{ 
                    position: "absolute", 
                    top: "0", 
                    right: "0", 
                    width: "100%", 
                    height: "100%", 
                    zIndex: -1,
                    overflow: "hidden",
                    opacity: 0.8
                }}>
                    <div className="hero-image-mask" style={{ width: "100%", height: "100%", position: "relative" }}>
                        <Image 
                            src="/images/workflows/hero-workflow-core.png"
                            alt="Enterprise Workflow Visualization"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center right" }}
                            priority
                        />
                        <div style={{ 
                            position: "absolute", 
                            inset: 0, 
                            background: "radial-gradient(circle at 20% 50%, var(--bg) 0%, transparent 100%)" 
                        }} />
                    </div>
                </div>

                <div className="container" style={{ 
                    position: "relative", 
                    zIndex: 1, 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "flex-start", 
                    textAlign: "left", 
                    width: "100%", 
                    maxWidth: "1250px", 
                    margin: "0 auto" 
                }}>
                    <div style={{ maxWidth: "850px" }}>
                        <div className="hero-title-line" style={{ 
                            display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.2rem", 
                            background: "rgba(79, 70, 229, 0.1)", borderRadius: "100px", 
                            border: "1px solid var(--primary)", marginBottom: "2.5rem", 
                            color: "var(--primary)", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.05em"
                        }}>
                            <div className="pulse-dot" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                            ENTERPRISE WORKFLOW AUTOMATION
                        </div>
                        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.8rem)", fontWeight: 950, lineHeight: 1.05, marginBottom: "2rem", letterSpacing: "-0.04em" }}>
                            <span className="hero-title-line" style={{ display: "block" }}>Architect Your</span>
                            <span className="hero-title-line" style={{ display: "block", color: "var(--primary)" }}>Enterprise Orchestration</span>
                            <span className="hero-title-line" style={{ display: "block" }}>Without SaaS Lock-In</span>
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "3.5rem", maxWidth: "750px", fontWeight: 450 }}>
                            De-risk your automation strategy with open-source n8n. UK-hosted, fixed-cost infrastructure with 400+ native integrations. Control your data, eliminate execution taxes, and scale infinitely.
                        </p>
                        <div className="hero-cta" style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
                            <Link href="/discovery-audit" className="btn-primary" style={{ padding: "1.25rem 2.8rem", background: "var(--primary)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "0.8rem", transition: "all 0.3s ease", boxShadow: "0 10px 30px -10px rgba(79, 70, 229, 0.5)" }}>
                                Start Audit <ArrowRight size={20} />
                            </Link>
                            <Link href="/technology" style={{ padding: "1.25rem 2.8rem", background: "transparent", color: "var(--text)", borderRadius: "14px", textDecoration: "none", fontWeight: 700, border: "1px solid var(--border)", transition: "all 0.3s ease" }}>
                                View Tech Stack
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1: The SaaS Sprawl Problem (Part 1) */}
            <section id="sprawl-pt1" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "6rem" }}>
                        <div className="gsap-reveal">
                            <span className="section-label">THE PROBLEM</span>
                            <h2 className="section-title">
                                The SaaS Sprawl Problem: <span style={{ color: "var(--primary)" }}>Why Enterprises Are Stuck</span>
                            </h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Most UK enterprises run 23-47 SaaS tools. You have Salesforce for CRM, Zoho Books or Xero for accounting, Slack for communication, Jira for project management, HubSpot for marketing, ServiceNow for IT, Workday for HR, and multiple cloud storage solutions. Each tool captures data. None of them talk to each other without manual intervention or expensive custom integrations.
                                </p>
                                <p>
                                    The result: your data is fragmented. A customer record lives in Salesforce. Their invoice history lives in Zoho Books or SAP. Their support tickets live in Zendesk. Your team spends 15-20% of their time copying data between systems. Sales reps manually update forecast spreadsheets. This isn&apos;t strategy work; it&apos;s data plumbing.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal">
                            <div style={{ 
                                background: "rgba(79, 70, 229, 0.03)", 
                                border: "1px solid var(--border)", 
                                borderRadius: "48px", 
                                padding: "3rem",
                                position: "relative",
                                overflow: "hidden"
                            }}>
                                <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", background: "radial-gradient(circle at 70% 30%, rgba(79, 70, 229, 0.1), transparent)", pointerEvents: "none" }} />
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", position: "relative", zIndex: 1 }}>
                                    {[
                                        { name: "Salesforce", src: "/images/brands/Salesforce.png" },
                                        { name: "Zoho", src: "/images/brands/zoho.png" },
                                        { name: "SAP", src: "/images/brands/SAP.png" },
                                        { name: "Slack", src: "/images/brands/slack.png" },
                                        { name: "Jira", src: "/images/brands/jira.png" },
                                        { name: "Workday", src: "/images/brands/workday.png" }
                                    ].map((tool, i) => (
                                        <div key={i} className="brand-logo-card" style={{ 
                                            background: "#FFFFFF", 
                                            padding: "1.5rem", 
                                            borderRadius: "20px", 
                                            border: "1px solid rgba(0,0,0,0.05)",
                                            textAlign: "center",
                                            aspectRatio: "1.2/1",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                                            transition: "all 0.3s ease"
                                        }}>
                                            <div style={{ position: "relative", width: "40px", height: "40px", marginBottom: "0.75rem" }}>
                                                <Image 
                                                    src={tool.src} 
                                                    alt={tool.name} 
                                                    fill 
                                                    style={{ objectFit: "contain" }} 
                                                />
                                            </div>
                                            <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#1e293b" }}>{tool.name}</div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ marginTop: "2rem", textAlign: "center", fontStyle: "italic", color: "var(--primary)", fontWeight: 700 }}>
                                    &quot;Data siloed across 40+ platforms&quot;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: The SaaS Sprawl Problem (Part 2) - The Cost */}
            <section id="sprawl-pt2" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "6rem" }}>
                        <div className="gsap-img-reveal">
                            <div style={{ 
                                background: "var(--bg)", 
                                border: "1px solid var(--border)", 
                                borderRadius: "48px", 
                                padding: "4rem",
                                textAlign: "center"
                            }}>
                                <div style={{ color: "var(--primary)", fontSize: "0.8rem", fontWeight: 900, textTransform: "uppercase", marginBottom: "1.5rem" }}>The Per-Execution Tax</div>
                                <div style={{ fontSize: "4.5rem", fontWeight: 950, color: "var(--text)", marginBottom: "0.5rem", lineHeight: 1 }}>£40k</div>
                                <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "3rem" }}>Annual SaaS Integration Leak</div>
                                <div style={{ height: "1px", background: "var(--border)", marginBottom: "3rem" }} />
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                                    <div>
                                        <div style={{ fontSize: "2rem", fontWeight: 900, color: "#ff4d4d" }}>£0.50</div>
                                        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Per Task Execution</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "2rem", fontWeight: 900, color: "#ff4d4d" }}>Locked</div>
                                        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Vendor Ecosystem</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">THE COST</span>
                            <h2 className="section-title">
                                Older Solutions <span style={{ color: "var(--primary)" }}>Made it Worse</span>
                            </h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem" }}>
                                <p>
                                    You&apos;d buy Zapier at £20-50 per month, then every workflow that exceeded 5 tasks per day hit per-execution charges (£0.10-0.50 per execution). Your high-volume automations (customer onboarding, invoice processing, order management) become expensive at scale. A workflow running 1,000 times daily costs £30-50/day in Zapier fees alone. Your total SaaS integration costs balloon to £15,000-40,000 annually for what should be standard middleware.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: The n8n Revolution */}
            <section id="solution" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "6rem" }}>
                        <div className="gsap-reveal">
                            <span className="section-label">THE SOLUTION</span>
                            <h2 className="section-title">
                                n8n: Automation <span style={{ color: "var(--primary)" }}>Without Boundaries</span>
                            </h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Make or Power Automate seem cheaper until you realise they&apos;re opinionated, vendor-locked (Make locks you into their platform, Power Automate locks you into Microsoft), and hit their own performance ceilings around 10,000 monthly executions without significant workarounds.
                                </p>
                                <p>
                                    This is where n8n enters. n8n is open-source workflow automation software. You host it (we host it for you on UK infrastructure). You define workflows visually. You connect any of 400+ integrations. You pay one fixed cost per month, never per execution. A workflow that runs 1M times monthly costs the same as one that runs 1,000 times. The math changes completely.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "var(--bg-secondary)", borderRadius: "48px", border: "1px solid var(--primary)", padding: "3rem", position: "relative", overflow: "hidden" }}>
                                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 70% 30%, rgba(79, 70, 229, 0.1), transparent)", pointerEvents: "none" }} />
                                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative", zIndex: 1 }}>
                                    {[
                                        { title: "Zero Execution Fees", val: "Unlimited Runs", icon: <TrendingUp size={20} /> },
                                        { title: "Self-Hosted Security", val: "UK Infrastructure", icon: <ShieldCheck size={20} /> },
                                        { title: "Open-Source Core", val: "No Vendor Lock-In", icon: <Workflow size={20} /> }
                                    ].map((feat, i) => (
                                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "1.5rem", padding: "1.5rem", background: "var(--bg)", borderRadius: "20px", border: "1px solid var(--border)" }}>
                                            <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(79, 70, 229, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>{feat.icon}</div>
                                            <div>
                                                <div style={{ fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", color: "var(--text-muted)", opacity: 0.8 }}>{feat.title}</div>
                                                <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "var(--text)" }}>{feat.val}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Control & Pricing */}
            <section id="pricing-roi" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "6rem" }}>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "rgba(16, 185, 129, 0.05)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "48px", padding: "3rem", position: "relative", overflow: "hidden" }}>
                                <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.4 }}>
                                    <Image 
                                        src="/images/workflows/roi-chart.png"
                                        alt="ROI Savings Chart"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div style={{ position: "relative", zIndex: 1 }}>
                                    <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "#10b981", textTransform: "uppercase", marginBottom: "1.5rem" }}>Case Study: Financial Services</div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem" }}>
                                        <div>
                                            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Legacy (Make/Zapier)</div>
                                            <div style={{ fontSize: "1.8rem", fontWeight: 900, textDecoration: "line-through", color: "var(--text-muted)", opacity: 0.6 }}>£12,000<span style={{ fontSize: "0.8rem" }}>/mo</span></div>
                                        </div>
                                        <div style={{ textAlign: "right" }}>
                                            <div style={{ fontSize: "0.8rem", color: "#10b981", fontWeight: 800, marginBottom: "0.5rem" }}>FI Digital (n8n)</div>
                                            <div style={{ fontSize: "2.5rem", fontWeight: 950, color: "var(--text)" }}>£2,800<span style={{ fontSize: "1rem" }}>/mo</span></div>
                                        </div>
                                    </div>
                                    <div style={{ background: "rgba(16, 185, 129, 0.1)", padding: "1.5rem", borderRadius: "20px", textAlign: "center", border: "1px dashed rgba(16, 185, 129, 0.3)", backdropFilter: "blur(10px)" }}>
                                        <div style={{ fontSize: "2rem", fontWeight: 950, color: "var(--text)" }}>£110,400</div>
                                        <div style={{ fontSize: "0.8rem", color: "#10b981", fontWeight: 800 }}>ANNUAL SAVINGS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">ECONOMICS</span>
                            <h2 className="section-title">Why n8n: The <span style={{ color: "var(--primary)" }}>Enterprise Automation Platform</span></h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>n8n is built for enterprises that want control. First: no per-execution pricing. Zapier charges £0.10-0.50 per task execution. If you have a workflow that runs 10,000 times daily, that&apos;s £1,000-5,000 per month in execution costs alone.</p>
                                <p>n8n is deployed on your infrastructure with fixed monthly pricing. A workflow that runs 100,000 times daily costs exactly the same as one that runs 1,000 times. This fundamentally changes ROI math. We&apos;ve had clients where Zapier was economically infeasible, but n8n makes it pencil out.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Ownership & Hosting */}
            <section id="hosting" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "6rem" }}>
                        <div className="gsap-reveal">
                            <span className="section-label">SOVEREIGNTY</span>
                            <h2 className="section-title">Open-Source <span style={{ color: "var(--primary)" }}>Code & Self-Hosting</span></h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>Second: it&apos;s open-source. Your workflows aren&apos;t proprietary artifacts trapped in Zapier&apos;s cloud; they&apos;re JSON and YAML you own. You can version control them, audit them, and migrate them without being locked into a vendor&apos;s road map or pricing model.</p>
                                <p>Third: self-hosting. We deploy n8n on your AWS (UK) infrastructure or data centre. This matters for data residency (FCA/GDPR compliance) and IP security. Your data never leaves your infrastructure, staying protected within an isolated VPC with restricted egress.</p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "48px", padding: "3rem", position: "relative" }}>
                                <div style={{ border: "2px dashed var(--primary)", borderRadius: "24px", padding: "2rem", textAlign: "center", position: "relative" }}>
                                    <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "var(--bg-secondary)", padding: "0 1rem", color: "var(--primary)", fontSize: "0.7rem", fontWeight: 900 }}>VPC BOUNDARY</div>
                                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "2rem" }}>
                                        <div style={{ padding: "1rem", background: "var(--bg)", borderRadius: "12px", border: "1px solid var(--border)" }}><Server size={24} color="var(--primary)" /></div>
                                        <div style={{ padding: "1rem", background: "var(--bg)", borderRadius: "12px", border: "1px solid var(--border)" }}><Database size={24} color="var(--primary)" /></div>
                                        <div style={{ padding: "1rem", background: "var(--bg)", borderRadius: "12px", border: "1px solid var(--border)" }}><Terminal size={24} color="var(--primary)" /></div>
                                    </div>
                                    <div style={{ position: "relative", height: "100px", background: "rgba(79, 70, 229, 0.02)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)" }}>
                                        <Lock size={32} color="#10b981" />
                                        <div style={{ position: "absolute", bottom: "10px", fontSize: "0.7rem", fontWeight: 700, color: "var(--text-muted)", opacity: 0.5 }}>Zero Data Egress</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Integration & Observability */}
            <section id="integrations" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "6rem" }}>
                        <div className="gsap-img-reveal">
                             <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "48px", padding: "3rem" }}>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem", marginBottom: "2.5rem" }}>
                                    {[
                                        { name: "SAP", src: "/images/brands/SAP.png" },
                                        { name: "Zoho", src: "/images/brands/zoho.png" },
                                        { name: "Salesforce", src: "/images/brands/Salesforce.png" },
                                        { name: "Azure", src: "/images/brands/Azure.jpg" },
                                        { name: "AWS", src: "/images/brands/Amazon.png" },
                                        { name: "Jira", src: "/images/brands/jira.png" },
                                        { name: "Xero", src: "/images/brands/xero.png" },
                                        { name: "Stripe", src: "/images/brands/stripe.png" }
                                    ].map((brand, i) => (
                                        <div key={i} className="brand-logo-card" style={{ 
                                            aspectRatio: "1", 
                                            background: "#FFFFFF", 
                                            border: "1px solid rgba(0,0,0,0.05)", 
                                            borderRadius: "16px", 
                                            display: "flex", 
                                            alignItems: "center", 
                                            justifyContent: "center",
                                            padding: "1rem",
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                                            transition: "all 0.3s ease"
                                        }}>
                                            <div style={{ position: "relative", width: "100%", height: "100%" }}>
                                                <Image 
                                                    src={brand.src} 
                                                    alt={brand.name} 
                                                    fill 
                                                    style={{ objectFit: "contain", filter: "none" }} 
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ height: "120px", background: "var(--bg-secondary)", borderRadius: "16px", border: "1px solid var(--border)", padding: "1rem", overflow: "hidden" }}>
                                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80" }} />
                                        <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--text-muted)", opacity: 0.6 }}>LIVE EXECUTION LOGS</div>
                                    </div>
                                    <div style={{ fontSize: "0.7rem", fontFamily: "monospace", color: "var(--text-muted)", opacity: 0.8 }}>
                                        {`[10:42:01] Processing Order #7782...`} <br/>
                                        {`[10:42:02] Querying Zoho CRM: SUCCESS`} <br/>
                                        {`[10:42:03] Generating SAP XML: SUCCESS`} <br/>
                                        {`[10:42:04] Workflow Complete (Latency: 3.2s)`}
                                    </div>
                                </div>
                             </div>
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">BREADTH</span>
                            <h2 className="section-title">Integrations & <span style={{ color: "var(--primary)" }}>Observability</span></h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>Fourth: integration breadth. n8n has 400+ connectors covering mainstream tools (Salesforce, SAP, Zoho, Microsoft 365) and niche UK services alike. We can also build custom connectors for legacy systems in 1-2 weeks.</p>
                                <p>Fifth: monitoring and observability. Every execution is logged (inputs, outputs, errors, execution time). Unlike Zapier, n8n allows you to replay failed executions and inspect exactly why a transaction failed—providing the audit trail required for enterprise compliance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Pricing Tiers */}
            <section id="tiers" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">FAIR PRICING</span>
                        <h2 className="section-title">Scalable Enterprise Cost Structure</h2>
                        <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem" }}>
                            Consistent, predictable pricing regardless of execution volume. Our fees cover deployment, licensing, and 24/7 UK support.
                        </p>
                    </div>
                    <div className="responsive-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                        {[
                            { name: "Basic", cost: "£2,800", capacity: "50K - 100K daily", desc: "Single instance for core operations." },
                            { name: "Professional", cost: "£5,600", capacity: "500K+ daily", desc: "High availability for high-throughput teams." },
                            { name: "Enterprise", cost: "£9,800", capacity: "10M+ daily", desc: "Multi-node, EU redundancy, custom SLA." }
                        ].map((tier, i) => (
                            <div key={i} className="pillar-card gsap-reveal" style={{ background: "var(--bg-secondary)", borderRadius: "32px", border: "1px solid var(--border)", padding: "3rem", textAlign: "center" }}>
                                <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "var(--primary)", textTransform: "uppercase", marginBottom: "1rem" }}>{tier.name}</div>
                                <div style={{ fontSize: "3rem", fontWeight: 950, color: "var(--text)", marginBottom: "0.5rem" }}>{tier.cost}<span style={{ fontSize: "1rem", color: "var(--text-muted)", opacity: 0.5 }}>/mo</span></div>
                                <div style={{ fontSize: "0.9rem", color: "#10b981", fontWeight: 800, marginBottom: "2rem" }}>{tier.capacity} Executions</div>
                                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>{tier.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 8: Case Study - The Challenge */}
            <section id="case-study-challenge" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "6rem" }}>
                        <div className="gsap-reveal">
                            <span className="section-label">CASE STUDY: PHASE 1</span>
                            <h2 className="section-title">The £850M AUM <span style={{ color: "var(--primary)" }}>Manual Processing Challenge</span></h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>A £850M AUM financial advisory firm was processing 1,200-1,800 invoices manually per month. Their accounting team (4 FTE) spent 5-7 days matching receipts to purchase orders, validating SAP records, and routing approvals—costing £200,000 annually with a 3.2% error rate.</p>
                                <p>Their previous Zapier approach failed; execution costs hit £1,200/month across 6 separate zaps. The rigid system couldn&apos;t handle intelligent routing or complex sign-off hierarchies, leaving error handling entirely manual and scaling costs out of control.</p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "rgba(255, 77, 77, 0.05)", border: "1px solid rgba(255, 77, 77, 0.2)", borderRadius: "48px", padding: "3rem", textAlign: "center" }}>
                                <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "#ff4d4d", textTransform: "uppercase", marginBottom: "1.5rem" }}>Manual Baseline</div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                                    <div>
                                        <div style={{ fontSize: "2.5rem", fontWeight: 950, color: "var(--text)" }}>7 Days</div>
                                        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", opacity: 0.6 }}>Processing Time</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "2.5rem", fontWeight: 950, color: "var(--text)" }}>3.2%</div>
                                        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", opacity: 0.6 }}>Error Rate</div>
                                    </div>
                                </div>
                                <div style={{ marginTop: "2rem", padding: "1.5rem", background: "rgba(255, 77, 77, 0.1)", borderRadius: "20px" }}>
                                    <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "var(--text)" }}>£200,000 / Year</div>
                                    <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", opacity: 0.6 }}>Manual Labor Costs (4 FTE)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 9: Case Study - The Blueprint */}
            <section id="case-study-solution" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "6rem" }}>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--primary)", borderRadius: "48px", padding: "3rem" }}>
                                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)", marginBottom: "2rem", textTransform: "uppercase" }}>Intelligent 42-Step Workflow</div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    {[
                                        "Email Arrival & OCR Extraction",
                                        "Salesforce Meta Enrichment",
                                        "SAP Purchase Order Validation",
                                        "Tiered Slack Signal Routing",
                                        "Audit Trail Archival (Post-Approval)"
                                    ].map((step, i) => (
                                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--text-muted)", fontSize: "0.9rem", padding: "1rem", background: "var(--bg)", borderRadius: "12px", border: "1px solid var(--border)" }}>
                                            <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--primary)", color: "white", fontSize: "0.7rem", display: "flex", alignItems: "center", justifyContent: "center" }}>{i+1}</div>
                                            {step}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">CASE STUDY: PHASE 2</span>
                            <h2 className="section-title">The n8n Blueprint: <span style={{ color: "var(--primary)" }}>Intelligent Orchestration</span></h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>We consolidated their 6 fragmented zaps into a single, comprehensive 42-step n8n workflow. The system performs full-spectrum validation: extracting invoice data via OCR, enriching it with Salesforce vendor master data, and matching it against SAP purchase orders.</p>
                                <p>Beyond simple matching, we implemented amount-based routing logic ($0-5K: Manager, $25K+: CFO + SVP) using a custom Slack voting UI for approvals. Post-approval, the system handles the bank cheque issuance and archives everything to S3 for immutable compliance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 10: Case Study - Measured Impact */}
            <section id="case-study-results" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">CASE STUDY: FINAL ROI</span>
                        <h2 className="section-title">Measured Impact: 13x First-Year ROI</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                        {[
                            { label: "Processing Time", before: "7 Days", after: "1-2 Hours", color: "var(--primary)" },
                            { label: "Error Rate", before: "3.2%", after: "0.15%", color: "#10b981" },
                            { label: "Resource Load", before: "4.0 FTE", after: "0.4 FTE", color: "var(--secondary)" }
                        ].map((stat, i) => (
                            <div key={i} className="gsap-reveal" style={{ 
                                background: "var(--bg)", 
                                borderRadius: "32px", 
                                border: "1px solid var(--border)", 
                                padding: "2.5rem",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                                <div style={{ fontSize: "0.80rem", fontWeight: 800, color: stat.color, textTransform: "uppercase", marginBottom: "1.5rem" }}>{stat.label}</div>
                                <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
                                    <div style={{ opacity: 0.5, textDecoration: "line-through", fontSize: "1.2rem", color: "var(--text-muted)" }}>{stat.before}</div>
                                    <ArrowRight size={20} style={{ opacity: 0.4, color: "var(--text-muted)" }} />
                                    <div style={{ fontSize: "2.5rem", fontWeight: 950, color: "var(--text)" }}>{stat.after}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="gsap-reveal" style={{ marginTop: "4rem", textAlign: "center", padding: "4rem", background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(79, 70, 229, 0.1))", borderRadius: "48px", border: "1px solid rgba(16, 185, 129, 0.2)", backdropFilter: "blur(20px)" }}>
                        <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#10b981", marginBottom: "1rem" }}>Total Annual Savings</div>
                        <div style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 950, color: "var(--text)", marginBottom: "1.5rem" }}>£200,200</div>
                        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
                            Saving £110k on execution costs and £190k on labor. 13x ROI in Year 1 on a £26k deployment.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "800px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <span className="section-label">FAQ</span>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-container">
                        {[
                            {
                                q: "How much could we save switching from Zapier to n8n?",
                                a: "Depends on your execution volume. For enterprises running 10,000+ daily executions, switching to n8n typically saves 40-60% annually. A firm running 50K daily executions on Zapier (£8,000-15,000/month in execution costs) would pay £2,800/month on n8n. For lower volumes (1-5K daily executions), savings are smaller but n8n offers better observability and control. Typical enterprise saves £40,000-180,000 annually."
                            },
                            {
                                q: "Can we run n8n ourselves or must it be managed?",
                                a: "You can do either. We offer managed n8n where we provision, monitor, and support the infrastructure (£2,800-9,800/month depending on scale). Alternatively, we help you deploy on your own AWS/Azure infrastructure; you manage it (costs £800-1,200/month in infrastructure, your team provides engineering time). Managed is simpler if you'd rather we handle all operations."
                            },
                            {
                                q: "How do you handle integrations that don't have pre-built connectors?",
                                a: "We build custom connectors. This takes 1-3 weeks depending on how mature the API is. If the system has a documented REST API, it's typically 1-2 weeks. If it's a legacy system with poor documentation, it can take 3 weeks and requires reverse-engineering. Cost is typically £8,000-18,000 per custom connector."
                            },
                            {
                                q: "What about data privacy and compliance?",
                                a: "All data stays on your infrastructure. Workflows run on your n8n instance in UK AWS regions or your own data centre. Integrations connect securely but data flows through your infrastructure first. We encrypt data in transit and at rest. Every workflow execution is logged with full audit trail, essential for GDPR and FCA-regulated work."
                            },
                            {
                                q: "Can n8n orchestrate our AI agents?",
                                a: "Yes. n8n workflows can trigger AI agents, pass context to them, handle routing of agent outputs, and manage escalation. We've built 31 workflows orchestrating agents. Typical workflow: Zendesk ticket arrives → n8n queries context from CRM → invokes agent with context → routes response → escalates to human if uncertain."
                            },
                            {
                                q: "How long does deployment take?",
                                a: "3-4 weeks end-to-end. Week 1: requirements gathering and infrastructure. Week 2: configuration and testing. Week 3: workflow builds. Week 4: parallel run and go live. If integrations require custom connectors, deployment can extend to 6-8 weeks. Cost is £18,000-32,000 depending on complexity."
                            },
                            {
                                q: "What monitoring and support do you provide?",
                                a: "Continuous monitoring of every workflow execution is standard. Dashboards show daily execution count, success rate, and error breakdown. Alerts are configured for failures or unusual spikes. On-call engineers respond to production issues, and monthly reviews identify optimisation opportunities."
                            }
                        ].map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
                    <div className="gsap-reveal">
                        <h2 className="section-title">Ready to Architect Your <span style={{ color: "var(--primary)" }}>Enterprise Workflow?</span></h2>
                        <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem", lineHeight: 1.6 }}>
                            Stop fighting your software. Start orchestrating your success with open-source n8n and FI Digital.
                        </p>
                        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                            <Link href="/discovery-audit" className="btn-primary" style={{ padding: "1.2rem 2.5rem", background: "#4F46E5", color: "white", borderRadius: "12px", textDecoration: "none", fontWeight: 700 }}>
                                Get n8n Cost Analysis
                            </Link>
                            <Link href="/integrations" style={{ padding: "1.2rem 2.5rem", background: "transparent", color: "var(--text)", borderRadius: "12px", textDecoration: "none", fontWeight: 700, border: "1px solid var(--border)" }}>
                                Explore Integrations
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Ecosystem Links */}
            <section style={{ padding: "80px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>Explore Our Agentic Ecosystem</h2>
                    </div>
                    <div className="links-grid gsap-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
                        {[
                            { title: "AI Agent Development", href: "/ai-agent-development", desc: "Build autonomous workers" },
                            { title: "AI Discovery Audit", href: "/discovery-audit", desc: "Map your automation ROI" },
                            { title: "Our Technology", href: "/technology", desc: "View our enterprise stack" },
                            { title: "Operations Agents", href: "/operations-agents", desc: "Supply chain & logistics" },
                            { title: "Home", href: "/", desc: "Platform overview" }
                        ].map((link, i) => (
                            <Link key={i} href={link.href} style={{ 
                                padding: "1.5rem", 
                                background: "var(--bg-secondary)", 
                                borderRadius: "16px", 
                                border: "1px solid var(--border)",
                                textDecoration: "none",
                                transition: "all 0.3s ease",
                                color: "var(--text)"
                            }} className="hover-lift">
                                <div style={{ color: "var(--primary)", fontWeight: 800, marginBottom: "0.5rem" }}>{link.title}</div>
                                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{link.desc}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
