"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    ShieldCheck, 
    Zap, 
    Cpu, 
    BarChart3, 
    CheckCircle2,
    Target,
    Activity,
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

export default function DiscoveryAuditClient() {
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
                .glass-card {
                    background: var(--card-bg);
                    border: 1px solid var(--border);
                    border-radius: 32px;
                    padding: 3rem;
                    transition: all 0.3s ease;
                }
                .glass-card:hover { border-color: var(--primary); background: var(--bg-secondary); }
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
                        src="/images/discovery-audit/hero-discovery-audit.png" 
                        alt="AI Discovery Audit" 
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
                            <span style={{ fontSize: "0.9rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--primary)" }}>Strategy Audit</span>
                        </div>
                        <h1 className="hero-title-line" style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)", fontWeight: 950, lineHeight: 1.05, marginBottom: "2.5rem", letterSpacing: "-0.04em", color: "var(--text)" }}>
                            De-Risk Your <span style={{ color: "var(--primary)" }}>AI Investment</span> <br />
                            With a Structured 4-Week Discovery
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", color: "var(--text-muted)", marginBottom: "4rem", maxWidth: "750px", lineHeight: 1.6, textAlign: "justify" }}>
                            Comprehensive assessment of your systems, AI opportunities, technical architecture, and business case. From £12,000. Deliverables: 90-day roadmap, detailed business case, technical design, ROI projections.
                        </p>
                        <div className="hero-cta" style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", alignItems: "center" }}>
                            <Link href="/contact" style={{ padding: "1.25rem 2.8rem", background: "var(--primary)", color: "white", borderRadius: "14px", fontWeight: 700, textDecoration: "none", boxShadow: "0 10px 40px rgba(79, 70, 229, 0.3)" }}>Book 4-Week Audit</Link>
                           
                        </div>
                    </div>
                </div>
            </header>

            {/* ACT I: THE STRATEGY GAP */}
            <section style={{ padding: "120px 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="responsive-grid zig">
                        <div className="gsap-reveal">
                            <span className="section-label">Act I: The Strategy Gap</span>
                            <h2 className="section-title">Why First-Time AI Projects <br /><span style={{ color: "#ef4444" }}>Frequently Fail</span></h2>
                            <div className="text-muted" style={{ display: "grid", gap: "1.8rem" }}>
                                <p>
                                    Most enterprises jump straight to AI implementation. They read a case study, get excited, hire an AI vendor, start building. Six months later, they&apos;ve spent £150K, have an agent that solves a marginal problem, and wonder why ROI isn&apos;t materialising.
                                </p>
                                <p>
                                    The problem: AI projects fail not because of technology risk (that&apos;s manageable), but because of <strong>strategy risk</strong>. You didn&apos;t properly diagnose where AI adds value. You overestimated impact. You didn&apos;t account for change management. You picked the wrong team to pilot with. The technology was fine; the strategy was weak.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-reveal glass-card" style={{ borderLeft: "4px solid #ef4444" }}>
                            <h4 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--text)" }}>The Cost of Premature Scaling</h4>
                            <div style={{ display: "grid", gap: "1rem" }}>
                                {[
                                    { l: "Misaligned High-ROI Pilots", v: "82% Failure" },
                                    { l: "Average Strategy Waste", v: "£150,000" },
                                    { l: "Technical Debt Accumulation", v: "High" }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "var(--bg)", borderRadius: "12px", border: "1px solid var(--border)" }}>
                                        <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{item.l}</span>
                                        <span style={{ fontWeight: 800, color: "#ef4444" }}>{item.v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ACT II: THE PROCESS OVERVIEW */}
            <section style={{ padding: "120px 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">Act II: The Diagnostic Method</span>
                        <h2 className="section-title">A Structured <span style={{ color: "var(--primary)" }}>4-Week Assessment</span></h2>
                        <p className="text-muted" style={{ maxWidth: "800px", margin: "0 auto" }}>
                            A structured discovery process eliminates strategy risk. We conduct a deep-dive diagnostic covering four critical dimensions of your enterprise logic.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                        {[
                            { t: "Current State Analysis", d: "What's your current state? Which processes are manual, which are broken, and which could be automated today?" },
                            { t: "AI Opportunity Mapping", d: "Where does AI add value? Which problems can AI solve for your firm that couldn't be solved before?" },
                            { t: "Technical Architecture", d: "What's your technical architecture? Defining AI models, private infrastructure, and deep integrations." },
                            { t: "Business Case & Risk", d: "What's the business case? Full projection of implementation timeline, cost, ROI, and risk mitigation." }
                        ].map((item, i) => (
                            <div key={i} className="gsap-reveal glass-card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                <div style={{ marginBottom: "1.5rem" }}>
                                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(79, 70, 229, 0.1)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 900 }}>{i + 1}</div>
                                </div>
                                <h4 style={{ fontWeight: 800, marginBottom: "1rem", fontSize: "1.1rem", color: "var(--text)" }}>{item.t}</h4>
                                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6, marginTop: "auto" }}>{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
                        {/* ACT III: THE OUTPUT */}
            <section style={{ padding: "120px 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <div style={{ display: "grid", gap: "2rem" }}>
                                <div className="glass-card" style={{ textAlign: "center", border: "1px solid var(--primary)" }}>
                                    <Activity size={40} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
                                    <div style={{ fontSize: "3rem", fontWeight: 950, color: "var(--primary)", lineHeight: 1 }}>94%</div>
                                    <div style={{ color: "var(--text-muted)", fontWeight: 800, textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.15em", marginTop: "1rem" }}>Implementation Rate</div>
                                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "1.5rem" }}>Industry standard: 60%</p>
                                </div>
                                <div className="glass-card" style={{ textAlign: "center" }}>
                                    <Target size={40} color="#10b981" style={{ marginBottom: "1.5rem" }} />
                                    <div style={{ fontSize: "3rem", fontWeight: 950, color: "#10b981", lineHeight: 1 }}>89%</div>
                                    <div style={{ color: "var(--text-muted)", fontWeight: 800, textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.15em", marginTop: "1rem" }}>ROI Success Rate</div>
                                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "1rem" }}>Promised ROI achieved in Year 1.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Act III: The Output</span>
                            <h2 className="section-title">The Roadmap to <br /><span style={{ color: "var(--primary)" }}>Execution</span></h2>
                            <div className="text-muted" style={{ display: "grid", gap: "1.8rem" }}>
                                <p>
                                    The output of this 4-week diagnostic is a <strong>detailed 90-day roadmap</strong> that you understand, approve, and are confident will deliver value.
                                </p>
                                <p>
                                    We ensure your AI strategy is as robust as your existing systems—without the gamble. 89% of our clients achieve promised ROI within the first year because discovery defines the path correctly.
                                </p>
                                <div style={{ marginTop: "2rem" }}>
                                    <Link href="/contact" style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--text)", textDecoration: "none", fontWeight: 800 }}>
                                        Secure Your Discovery Slot <ArrowUpRight size={20} color="var(--primary)" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WEEK 1: FOUNDATIONS */}
            <section style={{ padding: "120px 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">Week 1: Foundations</span>
                        <h2 className="section-title">Current State <span style={{ color: "var(--primary)" }}>Assessment</span></h2>
                        <p className="text-muted" style={{ maxWidth: "850px", margin: "0 auto" }}>
                            Week 1 is interviews and audits. We work with your team to understand the current state, mapping every stakeholder pain point and technical bottleneck.
                        </p>
                    </div>

                    <div style={{ display: "grid", gap: "3rem" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
                            <div className="gsap-reveal glass-card" style={{ borderTop: "4px solid var(--primary)" }}>
                                <div style={{ fontSize: "0.80rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", marginBottom: "1rem" }}>Days 1-2</div>
                                <h4 style={{ fontWeight: 800, marginBottom: "1.5rem", color: "var(--text)" }}>Stakeholder Interviews</h4>
                                <div style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                                    <p>We interview 12-18 stakeholders across finance (CFO, Controller), operations (COO, managers), sales (VP Sales), and technology (CTO, infrastructure). We ask: What processes take the most time? Where do errors happen most? What systems do you use (CRM, ERP, accounting, etc.)?</p>
                                </div>
                            </div>
                            <div className="gsap-reveal glass-card" style={{ borderTop: "4px solid #10b981" }}>
                                <div style={{ fontSize: "0.80rem", fontWeight: 800, color: "#10b981", textTransform: "uppercase", marginBottom: "1rem" }}>Days 2-4</div>
                                <h4 style={{ fontWeight: 800, marginBottom: "1.5rem", color: "var(--text)" }}>System Audit</h4>
                                <div style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                                    <p>Technical audit of systems (Zoho, SAP, etc.). We review configurations, API capabilities, and data volume. We generate a data quality assessment: records with critical fields and integration health.</p>
                                </div>
                            </div>
                            <div className="gsap-reveal glass-card" style={{ borderTop: "4px solid #f59e0b" }}>
                                <div style={{ fontSize: "0.80rem", fontWeight: 800, color: "#f59e0b", textTransform: "uppercase", marginBottom: "1rem" }}>Days 3-5</div>
                                <h4 style={{ fontWeight: 800, marginBottom: "1.5rem", color: "var(--text)" }}>Process Documentation</h4>
                                <div style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                                    <p>We map your top 5-10 processes: onboarding, invoice processing, lead management. We document cycle time, error rates, and labor costs. Deliverable: <strong>Current State Assessment Report</strong> (30-40 pages).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WEEK 2: STRATEGY */}
            <section style={{ padding: "120px 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">Week 2: Strategy</span>
                        <h2 className="section-title">AI Opportunity <span style={{ color: "var(--primary)" }}>Mapping</span></h2>
                        <p className="text-muted" style={{ maxWidth: "850px", margin: "0 auto" }}>
                            Week 2 is creative and strategic. Given the current state, where does AI create the most material value?
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
                        {[
                            { i: <Target size={24} />, t: "Impact (Value)", d: "Quantified in: revenue upside, cost reduction (e.g., £104K/yr), risk reduction, or experience improvement." },
                            { i: <Cpu size={24} />, t: "Feasibility (Tech)", d: "Can we build it? We assess data, technical requirements, and current AI capabilities." },
                            { i: <ShieldCheck size={24} />, t: "Confidence", d: "Probability of success. Straightforward automation: 85-90%. Complex logic: 70-80%." },
                            { i: <Activity size={24} />, t: "Timeline", d: "How long to deliver? Ranges from 8-12 weeks for simple automations to 16-24 weeks for complex integrations." },
                            { i: <Zap size={24} />, t: "Cost", d: "Implementation cost (engineer time) + ongoing cost (LLM APIs, infrastructure). Typically £40K-180K." },
                            { i: <BarChart3 size={24} />, t: "Data Needs", d: "Do we have the data history? Missing data increases both timeline and implementation cost." },
                            { i: <ShieldCheck size={24} />, t: "Regulatory", d: "Constraints for FCA (audit trails) or GDPR (dataroom residency). Managed via private model deployments." }
                        ].map((dim, i) => (
                            <div key={i} className="gsap-reveal glass-card" style={{ padding: "2rem" }}>
                                <div style={{ color: i === 6 ? "#10b981" : "var(--primary)", marginBottom: "1.5rem" }}>
                                    {dim.i}
                                </div>
                                <h4 style={{ fontWeight: 800, marginBottom: "1rem", fontSize: "1.05rem", color: "var(--text)" }}>Dimension {i + 1}: {dim.t}</h4>
                                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{dim.d}</p>
                            </div>
                        ))}
                    </div>

                    <div className="gsap-reveal glass-card" style={{ background: "rgba(79, 70, 229, 0.05)", border: "1px solid var(--primary)", textAlign: "center", padding: "4rem 2rem" }}>
                        <div style={{ color: "var(--primary)", fontWeight: 800, textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.15em", marginBottom: "2rem" }}>Opportunity Ranking Formula</div>
                        <div style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 950, letterSpacing: "0.05em", fontFamily: "monospace", display: "inline-flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center", color: "var(--text)" }}>
                            <span>(Impact × Confidence)</span>
                            <span style={{ color: "var(--primary)" }}> / </span>
                            <span>(Cost × Timeline)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* WEEK 3: TECHNOLOGY DESIGN (100% VERBATIM) */}
            <section style={{ padding: "120px 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ position: "relative" }}>
                    <div style={{ position: "absolute", top: "10%", right: "5%", opacity: "0.05", pointerEvents: "none", color: "var(--primary)" }}>
                        <Cpu size={400} />
                    </div>
                    
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">Week 3: Technology Design</span>
                        <h2 className="section-title">Architecture & <br />Technology <span style={{ color: "var(--primary)" }}>Design</span></h2>
                        <p className="text-muted" style={{ maxWidth: "850px", margin: "0 auto" }}>
                            Week 3 is technical deep-dive. For the top 3-5 opportunities, we design the technical solution.
                        </p>
                    </div>

                    <div style={{ display: "grid", gap: "3rem" }}>
                        <div className="gsap-reveal glass-card">
                            <h4 style={{ fontWeight: 800, marginBottom: "1.5rem", color: "var(--text)" }}>Model Selection</h4>
                            <div style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    For each opportunity, which AI model? Claude (reasoning-heavy tasks), GPT-4o (conversation, structured output), Gemini (multimodal, Google ecosystem), open-source (latency-sensitive, privacy-critical). We benchmark each model against your requirements.
                                </p>
                                <div style={{ padding: "2rem", background: "rgba(79, 70, 229, 0.05)", borderRadius: "24px", border: "1px solid rgba(79, 70, 229, 0.2)", marginBottom: "1.5rem" }}>
                                    <p style={{ margin: 0 }}>
                                        <strong>Example:</strong> for contract analysis, we test Claude and GPT-4o on 20 sample contracts, measure accuracy, measure cost, measure speed. Claude wins (96.2% vs 91.8% accuracy). Cost difference: £0.12 more per contract, but higher accuracy means fewer human reviews. We quantify trade-offs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gsap-reveal glass-card">
                            <h4 style={{ fontWeight: 800, marginBottom: "1.5rem", color: "var(--text)" }}>Architecture Design</h4>
                            <div style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    We design the technical system. Example: lead scoring system looks like: Salesforce webhook → triggers agent → Claude reads lead details + company research + historical data → agent returns score (0-100%) → score written back to Salesforce → Salesforce workflow routes leads based on score.
                                </p>
                                <p style={{ margin: 0 }}>
                                    We specify: which APIs, which databases, which integrations, latency requirements (lead scoring should complete in &lt;2 seconds), error handling (if Claude API fails, what&apos;s the fallback), monitoring (how do we know if agent is working), auditing (compliance trail).
                                </p>
                            </div>
                        </div>

                        <div className="gsap-reveal glass-card">
                            <h4 style={{ fontWeight: 800, marginBottom: "1.5rem", color: "var(--text)" }}>Data Pipeline Design</h4>
                            <div style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    For models that need historical data (churn prediction, forecasting), we design data pipelines: which data sources (your CRM, ERP, data warehouse), how often to refresh (daily, hourly, real-time), which data transformations (cleaning, normalisation, feature engineering), where to store (S3, database, vector store).
                                </p>
                                <p style={{ margin: 0, padding: "1.2rem", background: "var(--bg-secondary)", borderRadius: "16px", border: "1px solid var(--border)" }}>
                                    We assess data quality: if 30% of records have missing fields, do we clean data first? If we do, cost and timeline increase. We give you the choice.
                                </p>
                            </div>
                        </div>

                        <div className="gsap-reveal glass-card">
                            <h4 style={{ fontWeight: 800, marginBottom: "1.5rem", color: "var(--text)" }}>Infrastructure Design</h4>
                            <div style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Where does this run? Cloud-hosted (AWS, Azure, Google Cloud) costs less operationally but requires cloud management. Self-hosted (on your infrastructure) gives you more control but requires ops team. We typically recommend cloud-hosted for UK enterprises (AWS UK region for data residency), with managed services where possible (RDS for databases, ECS for containers, CloudWatch for monitoring) to minimise ops burden.
                                </p>
                            </div>
                        </div>

                        <div className="gsap-reveal glass-card" style={{ background: "rgba(79, 70, 229, 0.05)", border: "1px solid var(--primary)" }}>
                            <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                                <div>
                                    <span className="section-label" style={{ background: "var(--primary)", color: "white" }}>End of Week 3 Deliverable</span>
                                    <h3 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "1.5rem", color: "var(--text)" }}>Technical Architecture Document</h3>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.05rem" }}>
                                        Typically 40-60 pages. Includes: for each top opportunity, system architecture (flowcharts, component diagrams), technology stack (LLMs, APIs, databases), infrastructure diagram, security specification, and integration specs.
                                    </p>
                                </div>
                                <div style={{ display: "grid", gap: "1rem" }}>
                                    {[
                                        { l: "Estimated Infrastructure", v: "£500-1,500/mo per agent" },
                                        { l: "Typical LLM API Cost", v: "£200-800/mo typical" },
                                        { l: "Implementation Timeline", v: "8-14 weeks typical" }
                                    ].map((item, i) => (
                                        <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "1.2rem", background: "var(--bg)", borderRadius: "14px", border: "1px solid var(--border)" }}>
                                            <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 700 }}>{item.l}</span>
                                            <span style={{ fontWeight: 800, color: "var(--primary)" }}>{item.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: PRICING & DELIVERABLES SUMMARY */}
            <section id="pricing" style={{ padding: "120px 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">Investment</span>
                        <h2 className="section-title">Pricing & <span style={{ color: "var(--primary)" }}>Deliverables Summary</span></h2>
                        <p className="text-muted" style={{ maxWidth: "800px", margin: "0 auto" }}>
                            Discovery audits are fixed-scope, fixed-price. No sliding scales. No hidden costs.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
                        {/* STARTUP */}
                        <div className="gsap-reveal glass-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                            <div style={{ marginBottom: "2rem" }}>
                                <h4 style={{ fontWeight: 800, marginBottom: "0.5rem", fontSize: "1.2rem", color: "var(--text)" }}>Startup Package</h4>
                                <div style={{ fontSize: "2.8rem", fontWeight: 950, color: "var(--text)", letterSpacing: "-0.02em" }}>£12,000</div>
                            </div>
                            <div className="text-muted" style={{ fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                                <p>1 opportunity deep-dive, lightweight documentation, suitable for smaller firms or single-domain focus.</p>
                            </div>
                            <div style={{ marginTop: "auto", display: "grid", gap: "1rem" }}>
                                <div style={{ display: "flex", gap: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)", alignItems: "center" }}>
                                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)" }} /> Single Domain Focus
                                </div>
                                <div style={{ display: "flex", gap: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)", alignItems: "center" }}>
                                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)" }} /> Strategic Roadmap
                                </div>
                            </div>
                        </div>

                        {/* STANDARD */}
                        <div className="gsap-reveal glass-card" style={{ display: "flex", flexDirection: "column", height: "100%", border: "1px solid var(--primary)", background: "rgba(79, 70, 229, 0.05)", position: "relative", transform: "scale(1.02)", zIndex: 1 }}>
                            <div style={{ position: "absolute", top: "-15px", left: "50%", transform: "translateX(-50%)", background: "var(--primary)", color: "white", padding: "4px 14px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em" }}>Recommended</div>
                            <div style={{ marginBottom: "2rem" }}>
                                <h4 style={{ fontWeight: 800, marginBottom: "0.5rem", fontSize: "1.2rem", color: "var(--text)" }}>Standard Package</h4>
                                <div style={{ fontSize: "3.2rem", fontWeight: 950, color: "var(--primary)", letterSpacing: "-0.02em" }}>£18,000</div>
                            </div>
                            <div className="text-muted" style={{ fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                                <p>3-5 opportunities, comprehensive documentation, suitable for most mid-market enterprises.</p>
                            </div>
                            <div style={{ marginTop: "auto", display: "grid", gap: "1rem" }}>
                                <div style={{ display: "flex", gap: "0.8rem", fontSize: "0.95rem", fontWeight: 700, alignItems: "center", color: "var(--text)" }}>
                                    <ShieldCheck size={18} color="var(--primary)" /> 3-5 Opportunity Deep-Dives
                                </div>
                                <div style={{ display: "flex", gap: "0.8rem", fontSize: "0.95rem", fontWeight: 700, alignItems: "center", color: "var(--text)" }}>
                                    <Target size={18} color="var(--primary)" /> Full Financial Modelling
                                </div>
                            </div>
                        </div>

                        {/* ENTERPRISE */}
                        <div className="gsap-reveal glass-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                            <div style={{ marginBottom: "2rem" }}>
                                <h4 style={{ fontWeight: 800, marginBottom: "0.5rem", fontSize: "1.2rem", color: "var(--text)" }}>Enterprise Package</h4>
                                <div style={{ fontSize: "2.8rem", fontWeight: 950, color: "var(--text)", letterSpacing: "-0.02em" }}>£28,000</div>
                            </div>
                            <div className="text-muted" style={{ fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "2rem" }}>
                                <p>6-10 opportunities, detailed enterprise-grade documentation, multiple business units, suitable for larger enterprises.</p>
                            </div>
                            <div style={{ marginTop: "auto", display: "grid", gap: "1rem" }}>
                                <div style={{ display: "flex", gap: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)", alignItems: "center" }}>
                                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} /> 6-10 Depth Workstreams
                                </div>
                                <div style={{ display: "flex", gap: "0.8rem", fontSize: "0.9rem", color: "var(--text-muted)", alignItems: "center" }}>
                                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} /> Multi-Unit Strategy
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DETAILS GRID */}
                    <div className="gsap-reveal glass-card" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", padding: "4rem" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
                            <div>
                                <h5 style={{ fontWeight: 800, marginBottom: "1.5rem", color: "var(--primary)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.15em" }}>Inclusions</h5>
                                <p className="text-muted" style={{ fontSize: "1rem" }}>
                                    Includes: all stakeholder interviews, system audits, technology benchmarking, financial modelling, roadmap planning, delivery of all reports and deliverables.
                                </p>
                            </div>
                            <div>
                                <h5 style={{ fontWeight: 800, marginBottom: "1.5rem", color: "#ef4444", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.15em" }}>Exclusions</h5>
                                <p className="text-muted" style={{ fontSize: "1rem" }}>
                                    Doesn&apos;t include: actual implementation (billed separately), ongoing support (purchased separately).
                                </p>
                            </div>
                            <div>
                                <h5 style={{ fontWeight: 800, marginBottom: "1.5rem", color: "#10b981", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.15em" }}>Payment Terms</h5>
                                <p className="text-muted" style={{ fontSize: "1rem" }}>
                                    50% upfront (to confirm commitment), 50% upon delivery. If you decide not to proceed with us for implementation, no problem — you have a complete roadmap to take elsewhere. (Though 89% of our discovery clients do proceed with us.)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* TRANSITION QUOTE */}
                    <div className="gsap-reveal" style={{ marginTop: "4rem", textAlign: "center", maxWidth: "900px", margin: "4rem auto 0" }}>
                        <div style={{ padding: "3rem", background: "rgba(79, 70, 229, 0.03)", borderLeft: "4px solid var(--primary)", borderRadius: "24px", textAlign: "left" }}>
                            <p className="text-muted" style={{ fontSize: "1.2rem", fontStyle: "italic", margin: 0 }}>
                                &quot;If you choose option 1 (move forward with us), we transition to implementation mode. We use the 90-day roadmap as our contract; we execute against it, you pay for implementation (typically £140K-250K for 3-5 agents), and we measure against the KPIs and timelines we defined together.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section style={{ padding: "120px 0", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">Common Questions</span>
                        <h2 className="section-title">Strategic <span style={{ color: "var(--primary)" }}>Clarification</span></h2>
                    </div>

                    <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gap: "1.5rem" }}>
                        {[
                            {
                                q: "Why is discovery valuable instead of just jumping to implementation?",
                                a: "Enterprises that do discovery are 34% more likely to achieve promised ROI, 51% more likely to stay on budget, and 67% more likely to complete implementations on time. Discovery forces strategic clarity: you agree on which problems to solve before starting. Typical discovery findings: enterprises had opportunities they didn't know existed (60% of enterprises), better prioritisation than initial guesses (72% said our ranking changed their plan), and reduced implementation risk (only 6% of discovery clients had to pivot mid-implementation vs 34% of non-discovery clients). Cost: £12K-28K. Value: £400K-1.2M annually. ROI on discovery investment itself: 14-30x."
                            },
                            {
                                q: "How much time does this require from our team?",
                                a: "30-50 hours total across the enterprise (spread over 4 weeks, so 8-12 hours per week). This breaks down: Week 1 (24-32 hours): 12-18 people interviewed for 2-3 hours each. Week 2 (4-6 hours): follow-up calls with select stakeholders. Week 3 (4-6 hours): tech leads reviewing architectural designs. Week 4 (4-6 hours): finance team validating assumptions. Minimal disruption; most people contribute only 1-2 sessions."
                            },
                            {
                                q: "What if the roadmap says don't do AI yet?",
                                a: "That happens 5% of the time. Some enterprises discover: data quality is so poor that AI won't work without data cleanup first (upgrade cost: £80K-120K, 6-month timeline). Or: your business is so seasonal that benefits are marginal until you fix the season forecasting manually. In these cases, we recommend: (a) do this prerequisite work first, then revisit AI in 6 months, or (b) do a small pilot to build confidence. Most enterprises find at least one high-value opportunity; few find zero."
                            },
                            {
                                q: "Can we see examples of discovery findings for similar companies?",
                                a: "We can show you anonymised examples (financials, metrics) but not client names or sensitive details. Typical examples: insurance firm discovered 18 opportunities, prioritised churn prediction and claims routing, ROI 2.8x year 1. Manufacturing firm discovered 9 opportunities, prioritised demand forecasting and supplier recommendation, ROI 4.1x year 1. Financial services firm discovered 14 opportunities, prioritised lead scoring and deal prediction, ROI 5.2x year 1. Ask us during the initial call; we'll share relevant examples."
                            }
                        ].map((item, i) => (
                            <details key={i} className="gsap-reveal glass-card" style={{ padding: "1.5rem 2.5rem", cursor: "pointer" }}>
                                <summary style={{ fontSize: "1.1rem", fontWeight: 800, padding: "0.5rem 0", color: "var(--text)", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    {item.q}
                                    <span style={{ color: "var(--primary)" }}>+</span>
                                </summary>
                                <div className="text-muted" style={{ marginTop: "1.5rem", fontSize: "1rem", lineHeight: 1.8, paddingBottom: "1rem" }}>
                                    {item.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTERNAL LINKING / ecosystem */}
            <section style={{ padding: "100px 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container">
                    <div style={{ marginBottom: "4rem" }}>
                        <span className="section-label">The Ecosystem</span>
                        <h2 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)" }}>Where Discovery <span style={{ color: "var(--primary)" }}>Leads Next</span></h2>
                    </div>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                        {[
                            { t: "AI Agent Development", l: "/ai-agent-development", icon: <Cpu size={20} /> },
                            { t: "Workflow Automation", l: "/enterprise-workflow-automation", icon: <Zap size={20} /> },
                            { t: "LLM & RAG Integration", l: "/llm-integration-rag", icon: <BarChart3 size={20} /> },
                            { t: "Legacy Modernisation", l: "/legacy-system-modernisation", icon: <ShieldCheck size={20} /> }
                        ].map((link, i) => (
                            <Link key={i} href={link.l} className="gsap-reveal glass-card" style={{ textDecoration: "none", padding: "2rem", display: "flex", alignItems: "center", gap: "1.2rem", border: "1px solid var(--border)" }}>
                                <div style={{ color: "var(--primary)" }}>{link.icon}</div>
                                <span style={{ fontWeight: 800, color: "var(--text)" }}>{link.t}</span>
                                <ArrowUpRight size={16} style={{ marginLeft: "auto", opacity: 0.3, color: "var(--text)" }} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section style={{ padding: "120px 0", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <div className="gsap-reveal" style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <h2 className="section-title">Ready to <span style={{ color: "var(--primary)" }}>Start Your Discovery?</span></h2>
                        <p className="text-muted" style={{ marginBottom: "4rem" }}>
                            Stop gambling with AI. Start executing against a tested, structured, and ROI-focused plan.
                        </p>
                        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/contact" style={{ padding: "1.2rem 3rem", background: "var(--primary)", color: "white", borderRadius: "14px", fontWeight: 700, textDecoration: "none", boxShadow: "0 10px 40px rgba(79, 70, 229, 0.3)" }}>Start Your Discovery Today</Link>
                            <Link href="/resources/discovery-overview" style={{ padding: "1.2rem 3rem", background: "transparent", color: "var(--text)", borderRadius: "14px", fontWeight: 700, textDecoration: "none", border: "1px solid var(--border)" }}>Download Discovery Overview</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
