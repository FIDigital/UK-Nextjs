"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Rocket, ShieldCheck, Zap, Code, Cpu, Server, Terminal, CheckCircle, CheckCircle2, Workflow, Layers, ShieldAlert, Binary, Database, Network, FileText, Activity, FileSearch, Lock, History } from "lucide-react";
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
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
        } else {
            gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
        }
    }, [isOpen]);

    return (
        <div 
            className="gsap-card"
            style={{ 
                background: "var(--bg-secondary)", 
                borderRadius: "20px", 
                marginBottom: "1rem", 
                border: "1px solid var(--border)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.3s ease"
            }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div style={{ padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "2rem" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600, margin: 0, color: "var(--text)", letterSpacing: "0.01em" }}>{question}</h3>
                <div style={{ 
                    width: "32px", 
                    height: "32px", 
                    borderRadius: "50%", 
                    background: "var(--hover-bg)", 
                    border: "1px solid var(--border)",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    flexShrink: 0,
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                }}>
                    <ChevronDown size={16} color="var(--primary)" />
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

export default function AIAgentDevelopmentClient() {
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

        // FAQ staggering
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
        { q: "How long does it actually take to build a production agent?", a: "8-14 weeks depending on scope and system complexity. Simple agents (5-8 tools, one data source, straightforward rules) take 8 weeks. Complex agents (15+ tools, multiple systems, sophisticated decision logic) take 12-14 weeks. Timeline scales less than linearly with complexity; a 2x more complex agent doesn't take 2x longer because we reuse architecture patterns. The cost is typically £90,000-220,000 depending on complexity. Ongoing support runs £8,000-15,000 monthly." },
        { q: "What's your accuracy track record with these agents?", a: "Our agents achieve 95-98% accuracy on routine tasks in production (measured against human baseline), with near-zero critical failures. We measure accuracy differently than vendors: we care about would a domain expert approve this decision in <30 seconds, not does the output match expected format. On our 47 production agents, average success rate is 96.3%, meaning 3.7% of transactions require human review. Zero unhandled errors in the past 18 months across the fleet." },
        { q: "Can we swap models (Claude to GPT-4o) if requirements change?", a: "Yes, swapping models takes 2-4 weeks and costs £15,000-28,000. Because we build on LangChain, the orchestration logic is model-agnostic. You change the model in configuration, re-run Phase 4 evaluation (200 test cases), verify accuracy is still 95%+, then deploy. We've done this for three clients as new models improved; one client is currently running Claude for reasoning-heavy tasks and GPT-4o for structured output tasks, using a router that picks the right model per request." },
        { q: "How do you handle sensitive data like financial records or PII?", a: "Data never lives in agent memory. The agent receives references (IDs) and fetches data on-demand using scoped credentials that you rotate regularly. All API calls are encrypted in transit. Logs never contain PII. Agent instances are isolated in containers with no shared storage. For highly regulated industries (banking, healthcare), we can deploy agents entirely within your VPC with zero external API calls. Data residency is controllable: agents can run in UK-based AWS regions or Azure UK." },
        { q: "What happens if the agent makes a mistake in production?", a: "We implement three-tier failure handling. Tier 1 (95% of cases): agent handles autonomously, logs everything. Tier 2 (4-5%): agent flags uncertainty, waits for human approval. Tier 3 (0.5-1%): agent can't proceed safely, escalates to management. For Tier 1 mistakes that slip through (0.04% of transactions), they're detected by our monitoring within minutes. We can roll back single transactions, replay them with corrected logic, and resubmit. Complete audit trail exists for every decision." },
        { q: "What's the ongoing cost after deployment?", a: "Ongoing costs split into three buckets: Infrastructure (£500-1,500/month depending on throughput), LLM API costs (£200-800/month typical), and support/maintenance (£8,000-15,000/month for 24/7 monitoring, monthly improvements, quarterly reviews). Total typical range is £9,000-18,000/month for a production agent. Our clients report ROI within 3-8 months on most agents. We're transparent about costs; we estimate them during Phase 1 and stay within 10%." },
        { q: "How do these agents integrate with our existing systems?", a: "We integrate via APIs. If your system has a REST or gRPC API, the agent calls it directly. We handle authentication (API keys, OAuth), error recovery, and data transformation. For legacy systems without APIs, we build data pipelines via ETL tools like Airflow or n8n; the agent interacts with database tables instead of APIs. We've integrated with 50+ different systems: Salesforce, SAP, Oracle, Zoho, ServiceNow, custom platforms. Average integration takes 2-3 weeks per system." }
    ];

    return (
        <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)", position: "relative", minHeight: "100vh", overflow: "hidden" }}>
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
                .links-grid {
                    display: grid;
                    gap: 1.5rem;
                    grid-template-columns: 1fr;
                }
                @media (min-width: 900px) {
                    .responsive-grid.zig { grid-template-columns: 1.4fr 1fr; }
                    .responsive-grid.zag { grid-template-columns: 1fr 1.4fr; }
                    .hero-grid { grid-template-columns: 1.2fr 1.4fr; }
                    .links-grid { grid-template-columns: repeat(3, 1fr); }
                }
                @media (min-width: 1200px) {
                    .links-grid { grid-template-columns: repeat(6, 1fr); }
                }
                .pillar-card {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .pillar-card:hover {
                    border-color: var(--primary) !important;
                    box-shadow: 0 20px 40px -20px rgba(79, 70, 229, 0.3);
                    transform: translateY(-8px);
                }
            `}</style>
            <TechMeshBackground />

            {/* Hero Section */}
            <section style={{ padding: "180px 1.5rem 120px", position: "relative", zIndex: 1 }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div style={{ maxWidth: "900px" }}>
                        <span className="section-label hero-cta">Agentic AI Engineering</span>
                        <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)", fontWeight: 950, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "2rem" }}>
                            <div className="hero-title-line">Production AI Agents</div>
                            <div className="hero-title-line text-primary">Built to Your Exact</div>
                            <div className="hero-title-line">Specifications.</div>
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "3.5rem", maxWidth: "700px" }}>
                            From concept to deployed agents solving real business problems — LangChain architecture, enterprise integrations, 24/7 monitoring.
                        </p>
                        <div className="hero-cta" style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
                            <Link href="/assessment" className="btn-primary" style={{ padding: "1.2rem 2.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                Start Architect Call <ArrowRight size={20} />
                            </Link>
                            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", paddingLeft: "1rem" }}>
                                <span style={{ fontSize: "0.8rem", fontWeight: 800, opacity: 0.4, textTransform: "uppercase" }}>Core Stack:</span>
                                <div style={{ display: "flex", gap: "1.25rem", opacity: 0.7, color: "var(--text)" }}>
                                    <span style={{ fontWeight: 800, fontSize: "0.95rem" }}>LangChain</span>
                                    <span style={{ fontWeight: 800, fontSize: "0.95rem" }}>Claude 3.5</span>
                                    <span style={{ fontWeight: 800, fontSize: "0.95rem" }}>GPT-4o</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1: Beyond Chatbots - The Difference */}
            <section id="the-difference" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 className="section-title">Beyond Chatbots</h2>
                        <p style={{ color: "var(--text-muted)", fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}>
                            Most enterprises confuse chatbots with AI agents — and that confusion costs them millions. 
                        </p>
                    </div>
                    <div className="responsive-grid zag" style={{ gap: "4rem" }}>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Beyond Chatbots: What Production AI Agents Actually Are</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p>
                                    Most enterprises confuse chatbots with AI agents — and that confusion costs them millions. A chatbot responds to user input. An agent thinks, plans, and acts autonomously. Our agents don't wait for questions; they observe your systems, identify opportunities, make decisions, and execute tasks across your infrastructure without human intervention.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div style={{ display: "grid", gap: "1.5rem" }}>
                                {[
                                    { label: "Chatbot", line: "Wait for Input", val: "Passive" },
                                    { label: "AI Agent", line: "Proactive Tasking", val: "Active", primary: true }
                                ].map((box, i) => (
                                    <div key={i} style={{ 
                                        padding: "2rem", 
                                        borderRadius: "24px", 
                                        background: box.primary ? "rgba(79, 70, 229, 0.1)" : "rgba(255,255,255,0.03)",
                                        border: box.primary ? "1px solid var(--primary)" : "1px solid var(--border)",
                                        textAlign: "center"
                                    }}>
                                        <div style={{ fontSize: "0.8rem", textTransform: "uppercase", fontWeight: 800, color: box.primary ? "var(--primary)" : "var(--text-muted)", marginBottom: "0.5rem" }}>{box.label}</div>
                                        <div style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: "0.5rem" }}>{box.line}</div>
                                        <div style={{ fontSize: "1.5rem", fontWeight: 950, color: box.primary ? "white" : "rgba(255,255,255,0.2)" }}>{box.val}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1B: Five Pillars of Agency */}
            <section id="five-pillars" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                        <div className="gsap-img-reveal">
                            <Image 
                                src="/assets/legal/ai_reasoning_loop.png"
                                alt="Five Pillars of AI Agency Diagram"
                                width={800}
                                height={600}
                                style={{ borderRadius: "48px", width: "100%", height: "auto", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                            />
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Five Critical Components</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p>
                                    A production AI agent combines five critical components: perception (monitoring your data streams), reasoning (using LLMs to interpret situations), planning (breaking complex goals into actionable steps), tool use (accessing APIs, databases, and services), and learning (improving through feedback loops). When built correctly, agents handle tasks that would require dozens of employees.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1C: Concrete Example - Trade Settlements */}
            <section id="settlement-agent" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "4rem" }}>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Autonomy in Action</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Consider this concrete example: a financial services agent managing trade settlements. It monitors incoming trade confirmations, validates them against clearing house rules, flags discrepancies to compliance, books the transaction in your system, and generates settlement instructions — all within 8 seconds, 24/7, with zero human touch. A human team takes 2-4 hours per batch.
                                </p>
                                <p>
                                    We've deployed 47 production agents across our client base. The smallest has automated 6,400 hours annually of manual work (one FTE). The largest automates 31,000 hours (7.5 FTEs). These aren't conceptual prototypes or demos; these are agents handling live financial transactions, legal document processing, and manufacturing logistics every single day.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal">
                            <Image 
                                src="/assets/legal/finance_settlement_agent.png"
                                alt="Financial Settlement Agent Dashboard"
                                width={800}
                                height={600}
                                style={{ borderRadius: "48px", width: "100%", height: "auto", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Section 1D: Reliability Engineering */}
            <section id="reliability-engineering" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                        <div className="gsap-img-reveal" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: "100%", height: "300px", background: "rgba(255,255,255,0.02)", borderRadius: "40px", border: "1px dashed var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ textAlign: "center", opacity: 0.5 }}>
                                    <ShieldCheck size={64} style={{ marginBottom: "1rem", color: "var(--primary)" }} />
                                    <div style={{ fontWeight: 800 }}>Reliability Visual</div>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Reliability Engineering</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p>
                                    The difference between an agent that works in a demo and one that works in production is reliability engineering. Production agents need fallback mechanisms, audit trails, SLA monitoring, graceful degradation, and human escalation pathways. They need to fail safely. We build all of that.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Our LangChain Architecture */}
            <section id="architecture" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">THE ARCHITECTURE</span>
                        <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 950, marginBottom: "2rem" }}>
                            Our LangChain Architecture: Agents, Tools, Memory, Chains
                        </h2>
                        <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", lineHeight: 1.6 }}>
                            LangChain is a framework for building AI applications with composable components. We use it because it eliminates 60% of the boilerplate code required to build production agents, and more importantly it forces architectural discipline.
                        </p>
                    </div>

                    {/* Agent Layer (Zig) */}
                    <div className="responsive-grid zig" style={{ marginBottom: "120px", gap: "6rem" }}>
                        <div className="gsap-img-reveal">
                             <div style={{ 
                                width: "100%", 
                                aspectRatio: "4/3",
                                background: "var(--bg-secondary)", 
                                borderRadius: "48px", 
                                border: "1px solid var(--border)",
                                padding: "2.5rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                position: "relative",
                                overflow: "hidden"
                             }}>
                                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.1), transparent)", pointerEvents: "none" }} />
                                <div style={{ position: "relative", zIndex: 1 }}>
                                    <div style={{ fontSize: "0.8rem", textTransform: "uppercase", fontWeight: 800, color: "var(--primary)", marginBottom: "1.5rem" }}>Decision Logic</div>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                                        {["Claude 3.5", "GPT-4o", "Gemini 1.5", "Llama 3"].map((model, i) => (
                                            <div key={i} style={{ padding: "0.75rem 1.25rem", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "12px", fontWeight: 800, fontSize: "0.9rem" }}>{model}</div>
                                        ))}
                                    </div>
                                    <div style={{ background: "rgba(16, 185, 129, 0.1)", padding: "1.5rem", borderRadius: "16px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#10b981", fontWeight: 800, marginBottom: "0.5rem" }}>
                                            <ShieldCheck size={20} /> ReAct Pattern Optimization
                                        </div>
                                        <div style={{ fontSize: "1.4rem", fontWeight: 900 }}>+34% Accuracy</div>
                                    </div>
                                </div>
                             </div>
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>1. The Agent Layer: The Reasoning Engine</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    The Agent Layer sits at the top (Claude, GPT-4o, or Gemini). The agent receives an objective, reasons about what tools it needs, and orchestrates calls to those tools. 
                                </p>
                                <p>
                                    We use <strong>ReAct (Reasoning+Acting)</strong> prompting patterns exclusively — this approach produces <strong>34% better accuracy</strong> than older zero-shot patterns across 156 agent deployments. The agent iteratively thinks about its next step, acts using a tool, and observes the result before continuing.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tool Layer & Execution (Zag) */}
                    <div className="responsive-grid zag" style={{ marginBottom: "120px", gap: "6rem" }}>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>2. Tools & Execution: Secure Production Runtime</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    The Tool Layer contains your integrations. A single agent might have <strong>12-18 tools available</strong>: query customer CRM, execute SQL, call third-party APIs, update document storage, send emails, trigger workflows, log to compliance systems. 
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Each tool is rigorously typed with clear input/output specifications. Sloppy tool definitions are one of the top causes of agent failure in production.
                                </p>
                                <div style={{ background: "rgba(255,255,255,0.03)", padding: "2rem", borderRadius: "24px", border: "1px solid var(--border)" }}>
                                    <div style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", color: "var(--primary)", marginBottom: "1rem" }}>Runtime Specifications</div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", fontSize: "0.95rem" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Server size={16} /> Python 3.11 / FastAPI</div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><ShieldAlert size={16} /> AWS ECS Containers</div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Binary size={16} /> Auditable Logs</div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Zap size={16} /> Strict Resource Limits</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-img-reveal">
                             <div style={{ 
                                width: "100%", 
                                aspectRatio: "4/3",
                                background: "#0F172A", 
                                borderRadius: "48px", 
                                border: "1px solid rgba(59, 130, 246, 0.2)",
                                padding: "2.5rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                             }}>
                                <div style={{ fontFamily: "monospace", fontSize: "0.9rem", color: "rgba(255,255,255,0.7)" }}>
                                    <div style={{ color: "var(--primary)", marginBottom: "0.5rem" }}># Execution Layer Handler</div>
                                    <div style={{ color: "#10b981" }}>class AIWorkerThread(AgentExecutor):</div>
                                    <div style={{ paddingLeft: "1rem" }}>def run_task(self, objective):</div>
                                    <div style={{ paddingLeft: "2rem" }}>logs.write(f"Objective: &#123;objective&#125;")</div>
                                    <div style={{ paddingLeft: "2rem" }}>worker = self.orchestrate(fastapi_ctx)</div>
                                    <div style={{ paddingLeft: "2rem" }}>return worker.execute(timeout=30)</div>
                                    <div style={{ marginTop: "1rem", opacity: 0.4 }}>// AWS ECS Resource Limits: 2vCPU, 8GB RAM</div>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* Memory Layer (Zig) */}
                    <div className="responsive-grid zig" style={{ marginBottom: "120px", gap: "6rem" }}>
                        <div className="gsap-img-reveal">
                             <div style={{ 
                                width: "100%", 
                                aspectRatio: "4/3",
                                background: "var(--bg-secondary)", 
                                borderRadius: "48px", 
                                border: "1px solid var(--border)",
                                padding: "3rem",
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                gap: "1rem"
                             }}>
                                {[
                                    { label: "Short-term", desc: "Conversation History / Current Session", color: "#4F46E5" },
                                    { label: "Medium-term", desc: "Session Summaries & Prior Decisions", color: "#7C3AED" },
                                    { label: "Long-term", desc: "Vector Embeddings (Searchable Relevance)", color: "#10B981" }
                                ].map((mem, i) => (
                                    <div key={i} style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: "20px" }}>
                                        <div style={{ fontWeight: 800, fontSize: "1.1rem", color: mem.color, marginBottom: "0.25rem" }}>{mem.label}</div>
                                        <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{mem.desc}</div>
                                    </div>
                                ))}
                             </div>
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>3. The Memory Layer: Structural Context</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    The Memory Layer stores context across conversations and tasks. This is structural knowledge that helps agents make context-aware decisions.
                                </p>
                                <p>
                                    We implement three types: <strong>Short-term</strong> (conversation history for current session), <strong>Medium-term</strong> (session summaries and prior decisions), and <strong>Long-term</strong> (vector embeddings of historical interactions, searchable by semantic relevance).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Wide Card: LlamaIndex & RAG */}
                    <div className="gsap-reveal" style={{ 
                        background: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)", 
                        borderRadius: "48px", 
                        padding: "5rem 4rem", 
                        border: "1px solid rgba(79, 70, 229, 0.3)",
                        position: "relative",
                        overflow: "hidden"
                    }}>
                        <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "radial-gradient(circle at 100% 0%, rgba(79, 70, 229, 0.2), transparent)", pointerEvents: "none" }} />
                        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
                            <span style={{ fontSize: "0.9rem", fontWeight: 800, color: "var(--primary)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem", display: "block" }}>Semantic Intelligence</span>
                            <h3 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 950, color: "white", marginBottom: "2rem" }}>LlamaIndex + LangChain: Hallucination-Free RAG</h3>
                            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.2rem", lineHeight: 1.8, marginBottom: "3rem" }}>
                                We layer LlamaIndex on top of LangChain for retrieval-augmented generation (RAG). This gives agents access to your entire document corpus, allowing them to pull relevant contract clauses, compliance policies, or historical precedents in real-time.
                            </p>
                            <div style={{ display: "inline-flex", background: "rgba(16, 185, 129, 0.1)", padding: "2rem 3rem", borderRadius: "32px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "3.5rem", fontWeight: 950, color: "#10b981", lineHeight: 1 }}>67%</div>
                                    <div style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", fontWeight: 700, marginTop: "0.5rem" }}>Reduction in Model Hallucinations</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section 3: How We Build Agents */}
            <section id="process" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">METHODOLOGY</span>
                        <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 950, marginBottom: "2rem" }}>
                            How We Build Agents: Our Development Process
                        </h2>
                        <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", lineHeight: 1.6 }}>
                            Building production AI agents takes a specific methodology refined across 47 deployments. The process takes 8-14 weeks depending on scope.
                        </p>
                    </div>

                    {/* Standardized Methodology Phases */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "4rem", position: "relative" }}>
                        {/* Vertical Progress Connector (Background) */}
                        <div className="hidden-mobile" style={{ 
                            position: "absolute", 
                            left: "0", 
                            top: "0", 
                            bottom: "0", 
                            width: "1px", 
                            background: "linear-gradient(to bottom, transparent, var(--primary), transparent)", 
                            opacity: 0.2,
                            zIndex: 0
                        }} />

                        {/* Phase 1: Requirements */}
                        <div className="gsap-reveal" style={{ 
                            background: "var(--bg)", 
                            borderRadius: "40px", 
                            border: "1px solid var(--border)", 
                            padding: "clamp(2rem, 5vw, 4rem)",
                            position: "relative",
                            overflow: "hidden",
                            transition: "all 0.4s ease"
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 20px 40px -20px rgba(79, 70, 229, 0.2)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}>
                            <div className="responsive-grid" style={{ gridTemplateColumns: "1.1fr 1fr", gap: "4rem", alignItems: "center" }}>
                                <div className="gsap-img-reveal">
                                    <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: "24px", padding: "2.5rem", border: "1px solid var(--border)" }}>
                                        <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--primary)", marginBottom: "1.5rem", textTransform: "uppercase" }}>Discovery Artifacts</div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                            {[
                                                { label: "Agent Task Matrix", val: "120-180 Tasks" },
                                                { label: "Stakeholder Interviews", val: "6-8 Sessions" },
                                                { label: "Edge Case Registry", val: "45+ Scenarios" }
                                            ].map((item, i) => (
                                                <div key={i} style={{ display: "flex", justifyContent: "space-between", paddingBottom: "1rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                                                    <span style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{item.label}</span>
                                                    <span style={{ color: "white", fontWeight: 700, fontSize: "0.95rem" }}>{item.val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                                        <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(79, 70, 229, 0.1)", border: "1px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontWeight: 900 }}>01</div>
                                        <span style={{ fontWeight: 800, color: "var(--primary)", fontSize: "0.85rem", textTransform: "uppercase" }}>WEEKS 1-2</span>
                                    </div>
                                    <h3 style={{ fontSize: "2.2rem", fontWeight: 950, color: "white", marginBottom: "1.5rem" }}>Phase 1: Requirements & Agent Specification</h3>
                                    <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                        <p style={{ marginBottom: "1.25rem" }}>We conduct 6-8 structured interviews with stakeholders: the people currently doing the work the agent will automate, the systems they interact with, the edge cases they handle, and the failure modes that keep them up at night.</p>
                                        <p>We document 120-180 specific tasks the agent must handle, prioritised by business impact. We also define what correct looks like: what metrics matter, what's acceptable error rate, what requires human escalation versus autonomous handling.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phase 2: Architecture */}
                        <div className="gsap-reveal" style={{ 
                            background: "var(--bg)", 
                            borderRadius: "40px", 
                            border: "1px solid var(--border)", 
                            padding: "clamp(2rem, 5vw, 4rem)",
                            position: "relative",
                            overflow: "hidden",
                            transition: "all 0.4s ease"
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 20px 40px -20px rgba(79, 70, 229, 0.2)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}>
                            <div className="responsive-grid" style={{ gridTemplateColumns: "1.1fr 1fr", gap: "4rem", alignItems: "center" }}>
                                <div className="gsap-img-reveal">
                                    <div style={{ background: "#0F172A", borderRadius: "24px", padding: "2rem", border: "1px solid rgba(255,255,255,0.05)" }}>
                                        <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--primary)", marginBottom: "1.5rem", textTransform: "uppercase" }}>Architecture Specs</div>
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                            {["Claude 3.5 Sonnet", "GPT-4o", "Gemini 1.5 Pro", "Llama 3.1"].map((llm, i) => (
                                                <div key={i} style={{ padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)", fontSize: "0.85rem", textAlign: "center", color: "rgba(255,255,255,0.7)" }}>
                                                    {llm}
                                                </div>
                                            ))}
                                        </div>
                                        <div style={{ marginTop: "1.5rem", height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "100px", overflow: "hidden" }}>
                                            <div style={{ width: "75%", height: "100%", background: "var(--primary)" }} />
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                                            <span>System Integration Load</span>
                                            <span>75% Mapped</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                                        <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(79, 70, 229, 0.1)", border: "1px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontWeight: 900 }}>02</div>
                                        <span style={{ fontWeight: 800, color: "var(--primary)", fontSize: "0.85rem", textTransform: "uppercase" }}>WEEKS 2-3</span>
                                    </div>
                                    <h3 style={{ fontSize: "2.2rem", fontWeight: 950, color: "white", marginBottom: "1.5rem" }}>Phase 2: Architecture & Tool Design</h3>
                                    <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                        <p style={{ marginBottom: "1.25rem" }}>Based on requirements, we design the agent's architecture: which LLM (Claude, GPT-4o, Gemini — we run comparative benchmarks), which tools it needs, how to structure memory, where to add human checkpoints.</p>
                                        <p>We also map all system integrations. If you're using Salesforce, SAP, Zoho, ServiceNow, or custom APIs, we document the exact payloads the agent will send and receive. We design the data pipeline and transaction integrity models.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phase 3: Build */}
                        <div className="gsap-reveal" style={{ 
                            background: "var(--bg)", 
                            borderRadius: "40px", 
                            border: "1px solid var(--border)", 
                            padding: "clamp(2rem, 5vw, 4rem)",
                            position: "relative",
                            overflow: "hidden",
                            transition: "all 0.4s ease"
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 20px 40px -20px rgba(79, 70, 229, 0.2)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}>
                            <div className="responsive-grid" style={{ gridTemplateColumns: "1.1fr 1fr", gap: "4rem", alignItems: "center" }}>
                                <div className="gsap-img-reveal">
                                    <div style={{ background: "#0F172A", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.05)", padding: "2rem", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
                                        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }} />
                                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b" }} />
                                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
                                        </div>
                                        <div style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                                            <span style={{ color: "#818cf8" }}>class</span> <span style={{ color: "white" }}>AgentCore</span>:<br/>
                                            &nbsp;&nbsp;<span style={{ color: "#818cf8" }}>def</span> <span style={{ color: "#10b981" }}>orchestrate_step</span>(self, goal):<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;history = memory.get_context(limit=10)<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;plan = claude.generate_plan(goal, history)<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#818cf8" }}>for</span> step <span style={{ color: "#818cf8" }}>in</span> plan.steps:<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tool = registry.get(step.tool_id)<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result = tool.execute(step.payload)<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logger.audit(step, result)<br/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                                        <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(79, 70, 229, 0.1)", border: "1px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontWeight: 900 }}>03</div>
                                        <span style={{ fontWeight: 800, color: "var(--primary)", fontSize: "0.85rem", textTransform: "uppercase" }}>WEEKS 3-7</span>
                                    </div>
                                    <h3 style={{ fontSize: "2.2rem", fontWeight: 950, color: "white", marginBottom: "1.5rem" }}>Phase 3: Build & Integration</h3>
                                    <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                        <p style={{ marginBottom: "1.25rem" }}>Our team implements the agent core in Python, integrates all tools, sets up the LangChain orchestration logic, and builds the memory systems. We integrate with your actual systems using specific, rotated API keys.</p>
                                        <p>We implement retry logic, timeout handling, and graceful degradation. Every decision is backed by comprehensive logging, ensuring full auditability from day one.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phase 4: Evaluation */}
                        <div className="gsap-reveal" style={{ 
                            background: "var(--bg)", 
                            borderRadius: "40px", 
                            border: "1px solid var(--border)", 
                            padding: "clamp(2rem, 5vw, 4rem)",
                            position: "relative",
                            overflow: "hidden",
                            transition: "all 0.4s ease"
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 20px 40px -20px rgba(79, 70, 229, 0.2)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}>
                            <div className="responsive-grid" style={{ gridTemplateColumns: "1.1fr 1fr", gap: "4rem", alignItems: "center" }}>
                                <div className="gsap-img-reveal">
                                    <div style={{ textAlign: "center", padding: "2rem", background: "rgba(16, 185, 129, 0.05)", borderRadius: "24px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                                        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#10b981", textTransform: "uppercase", marginBottom: "0.5rem" }}>Verification Level</div>
                                        <div style={{ fontSize: "3.5rem", fontWeight: 950, color: "white" }}>95%+</div>
                                        <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>Required Accuracy Threshold</div>
                                        <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", margin: "1.5rem 0" }} />
                                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                                            <span>500+ Test Cases</span>
                                            <span>Zero Escaped Bugs</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                                        <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(79, 70, 229, 0.1)", border: "1px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontWeight: 900 }}>04</div>
                                        <span style={{ fontWeight: 800, color: "var(--primary)", fontSize: "0.85rem", textTransform: "uppercase" }}>WEEKS 7-10</span>
                                    </div>
                                    <h3 style={{ fontSize: "2.2rem", fontWeight: 950, color: "white", marginBottom: "1.5rem" }}>Phase 4: Evaluation & Refinement</h3>
                                    <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                        <p style={{ marginBottom: "1.25rem" }}>We create 200-500 test cases based on the requirements from Phase 1. We run the agent against these test cases and measure success rate. We're looking for 95%+ accuracy on routine cases and zero critical failures on edge cases. </p>
                                        <p>When it fails, we iterate: adjust prompts, refine tool specifications, add additional context to memory, sometimes swap models. We benchmark against human performance; your agent should be within 2-5% of top performer accuracy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phase 5: Deployment */}
                        <div className="gsap-reveal" style={{ 
                            background: "var(--bg)", 
                            borderRadius: "40px", 
                            border: "1px solid var(--border)", 
                            padding: "clamp(2rem, 5vw, 4rem)",
                            position: "relative",
                            overflow: "hidden",
                            transition: "all 0.4s ease"
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "0 20px 40px -20px rgba(79, 70, 229, 0.2)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}>
                            <div className="responsive-grid" style={{ gridTemplateColumns: "1.1fr 1fr", gap: "4rem", alignItems: "center" }}>
                                <div className="gsap-img-reveal">
                                    <div style={{ background: "#0F172A", borderRadius: "24px", padding: "2rem", border: "1px solid var(--border)" }}>
                                        <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--primary)", marginBottom: "1.5rem", textTransform: "uppercase" }}>Hypercare Monitoring</div>
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                            {[
                                                { label: "Uptime", val: "99.99%" },
                                                { label: "Stability", val: "Rock Solid" },
                                                { label: "Lat.", val: "<1.2s" },
                                                { label: "Rel.", val: "98.8%" }
                                            ].map((m, i) => (
                                                <div key={i} style={{ padding: "1rem", background: "rgba(255,255,255,0.02)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                                                    <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase" }}>{m.label}</div>
                                                    <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "white" }}>{m.val}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                                        <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(79, 70, 229, 0.1)", border: "1px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontWeight: 900 }}>05</div>
                                        <span style={{ fontWeight: 800, color: "var(--primary)", fontSize: "0.85rem", textTransform: "uppercase" }}>WEEKS 10-14</span>
                                    </div>
                                    <h3 style={{ fontSize: "2.2rem", fontWeight: 950, color: "white", marginBottom: "1.5rem" }}>Phase 5: Production Deployment & Hypercare</h3>
                                    <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                        <p style={{ marginBottom: "1.25rem" }}>We containerise the agent, set up deployment pipelines, configure monitoring, establish on-call rotations, and run it in production with an engineer embedded full-time for the first 4 weeks. </p>
                                        <p>We collect real-world data, refine based on actual usage patterns, and tune thresholds. After 4 weeks and 10,000+ real transactions, we transition to 24/7 monitoring and escalation protocols.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Closing Note */}
                    <div className="gsap-reveal" style={{ textAlign: "center", marginTop: "6rem", padding: "4rem", background: "rgba(255,255,255,0.02)", borderRadius: "40px", border: "1px solid var(--border)" }}>
                         <p style={{ color: "var(--text-muted)", fontSize: "1.25rem", lineHeight: 1.8, margin: 0, fontStyle: "italic", maxWidth: "900px", margin: "0 auto" }}>
                            "This isn't a one-shot deployment. Agents improve continuously in their first 12 months. Real production data reveals edge cases no test suite could predict. We iterate monthly, shipping improvements to production continuously."
                         </p>
                    </div>
                </div>
            </section>

            {/* Section 4: Production Deployment */}
            <section id="production" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                         <span className="section-label">ENTERPRISE-GRADE</span>
                         <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 950, marginBottom: "2rem" }}>
                            Section 4: Production Deployment: What Makes Our Agents Enterprise-Grade
                         </h2>
                         <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", lineHeight: 1.6 }}>
                            There's a massive gap between an agent that works in development and one that works in production handling your real data. We've learned every lesson the hard way.
                         </p>
                    </div>

                    <div className="responsive-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem", alignItems: "stretch" }}>
                        {/* Pillar 1: Monitoring */}
                        <div className="gsap-reveal pillar-card" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "32px", padding: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem", height: "100%" }}>
                            <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(79, 70, 229, 0.1)", border: "1px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                                <Activity size={24} />
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white" }}>Monitoring & Economic Health</h3>
                            <div style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6, flex: 1 }}>
                                <p style={{ marginBottom: "1rem" }}>Every agent action is logged with timestamp, reasoning steps, tool calls, and outputs. We send logs to Prometheus and ELK stack aggregation platforms.</p>
                                <p>Our dashboard shows agent health in real-time, process latency, and cost per transaction. We also monitor <strong>economic health</strong>: if an agent costs more than the automation saves, we detect that automatically.</p>
                            </div>
                        </div>

                        {/* Pillar 2: Fallback */}
                        <div className="gsap-reveal pillar-card" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "32px", padding: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem", height: "100%" }}>
                            <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(79, 70, 229, 0.1)", border: "1px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                                <ShieldCheck size={24} />
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white" }}>Fallback Mechanisms (HITL)</h3>
                            <div style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6, flex: 1 }}>
                                <p style={{ marginBottom: "1rem" }}>Tier 1 (95%): Autonomous handling. Tier 2 (4-5%): Uncertainty triggers human review. The agent's reasoning is transparent, so 80% of corrects are instant.</p>
                                <p>Tier 3 (0.5-1%): Failure to proceed safely escalates to management. These tiers ensure no agent ever "hallucinates" a high-impact business decision blindly.</p>
                            </div>
                        </div>

                        {/* Pillar 3: Audit Logging */}
                        <div className="gsap-reveal pillar-card" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "32px", padding: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem", height: "100%" }}>
                            <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(79, 70, 229, 0.1)", border: "1px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                                <FileSearch size={24} />
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white" }}>Immutable Audit Logging</h3>
                            <div style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6, flex: 1 }}>
                                <p style={{ marginBottom: "1rem" }}>Every decision is logged to immutable storage with a full chain of evidence. Crucial for financial services (Why did this transaction happen?) or Legal (Why was this flagged?).</p>
                                <p>We sign logs with agent identity and timestamp everything, making regulatory audits a simple query of the transaction thread.</p>
                            </div>
                        </div>

                        {/* Pillar 4: Rate Limiting */}
                        <div className="gsap-reveal pillar-card" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "32px", padding: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem", height: "100%" }}>
                            <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(79, 70, 229, 0.1)", border: "1px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                                <Zap size={24} />
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white" }}>Rate Limiting & Circuit Breakers</h3>
                            <div style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6, flex: 1 }}>
                                <p style={{ marginBottom: "1rem" }}>We implement circuit breakers to prevent catastrophic loops. If an agent hits an error threshold, we kill the API call instead of hammering the service.</p>
                                <p>Every agent is rate-limited: a single agent processes max N transactions per second. If thresholds are exceeded, requests are queued for stability.</p>
                            </div>
                        </div>

                        {/* Pillar 5: Security */}
                        <div className="gsap-reveal pillar-card" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "32px", padding: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem", height: "100%" }}>
                            <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(79, 70, 229, 0.1)", border: "1px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                                <Lock size={24} />
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white" }}>Security & Data Isolation</h3>
                            <div style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6, flex: 1 }}>
                                <p style={{ marginBottom: "1rem" }}>We never store PII or Legal docs in agent memory. Agents fetch data on-demand using unique, rotated credentials specific to that agent.</p>
                                <p>In the event of compromise, the blast radius is strictly limited to the data actively being processed, protecting the rest of your data lake.</p>
                            </div>
                        </div>

                        {/* Pillar 6: SLA Guarantees */}
                        <div className="gsap-reveal pillar-card" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "32px", padding: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem", height: "100%" }}>
                            <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(79, 70, 229, 0.1)", border: "1px solid var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                                <CheckCircle size={24} />
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white" }}>SLA Guarantees</h3>
                            <div style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6, flex: 1 }}>
                                <p style={{ marginBottom: "1rem" }}>We commit to: 99.9% uptime with autonomous recovery, 95%+ accuracy on routine cases, and sub-second latency on most operations.</p>
                                <p>Monthly costs are monitored to stay within 10% of estimates. If we drift, our engineers are paged automatically.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Case Study */}
            <section id="case-study" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                         <span className="section-label">BANKING CASE STUDY</span>
                         <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 950, marginBottom: "2rem" }}>
                            Section 5: Case Study: Trade Settlement Agent
                         </h2>
                    </div>

                    <div style={{ background: "linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(15, 23, 42, 0.5) 100%)", borderRadius: "48px", border: "1px solid rgba(79, 70, 229, 0.3)", padding: "clamp(2rem, 5vw, 5rem)", position: "relative", overflow: "hidden" }}>
                        <div className="responsive-grid" style={{ gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "start" }}>
                            <div className="gsap-reveal">
                                <div style={{ marginBottom: "3rem" }}>
                                    <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>The £2.1B AUM Challenge</h3>
                                    <div style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                                        <p style={{ marginBottom: "1.5rem" }}>An investment bank was processing 4,200 trade settlement instructions daily. Their manual process required trades to be validated against clearing house rules, matched to internal accounting systems, and issued to custodians. This took 90 minutes per batch with 8 FTE settlement officers and a 2-3% error rate.</p>
                                        <p>We built an agent with 18 tools (ISDA standards, client portfolio limits, ERP querying, DTCC submission). Now, latency is 18 seconds from arrival to instruction. The 8 FTE team now only handles exceptions (0.8% of volume). Error rate dropped to 0.05%. Cost per trade fell from £8.40 to £0.12.</p>
                                    </div>
                                </div>

                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                                    <div style={{ padding: "2rem", background: "rgba(16, 185, 129, 0.05)", borderRadius: "24px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                                        <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "#10b981", textTransform: "uppercase", marginBottom: "0.5rem" }}>Annual ROI</div>
                                        <div style={{ fontSize: "2.5rem", fontWeight: 950, color: "white" }}>£1.3M+</div>
                                        <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>Labor + Error Recovery</div>
                                    </div>
                                    <div style={{ padding: "2rem", background: "rgba(79, 70, 229, 0.05)", borderRadius: "24px", border: "1px solid rgba(79, 70, 229, 0.2)" }}>
                                        <div style={{ fontSize: "0.8rem", fontWeight: 900, color: "var(--primary)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Breakeven</div>
                                        <div style={{ fontSize: "2.5rem", fontWeight: 950, color: "white" }}>2.3 Mo</div>
                                        <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>On £185k Initial Cost</div>
                                    </div>
                                </div>
                            </div>

                            <div className="gsap-img-reveal">
                                <div style={{ background: "#0F172A", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.05)", padding: "2.5rem" }}>
                                    <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)", marginBottom: "2rem", textTransform: "uppercase" }}>Agent Technical Blueprint</div>
                                    {/* Tool List */}
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                        {[
                                            "Validate ISDA Standards",
                                            "Check Portfolio Limits",
                                            "Query Voyager ERP (1998)",
                                            "Generate Settlement XML",
                                            "Submit to DTCC & Custodians",
                                            "Log Compliance Audit Trail",
                                            "Confirm to Trading Desk"
                                        ].map((tool, i) => (
                                            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", padding: "0.75rem", background: "rgba(255,255,255,0.02)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.05)" }}>
                                                <Workflow size={14} style={{ color: "var(--primary)" }} /> {tool}
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ marginTop: "2rem", padding: "1.5rem", background: "rgba(79, 70, 229, 0.1)", borderRadius: "16px", border: "1px solid var(--primary)", textAlign: "center" }}>
                                        <div style={{ fontSize: "1.2rem", fontWeight: 900 }}>2.2M Trades Processed</div>
                                        <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>0.04% Unhandled Error Rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: "5rem", paddingTop: "5rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                            <div className="responsive-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
                                {[
                                    { week: "Weeks 1-4", title: "Discovery", desc: "Understanding 13 order types, 7 custodian formats, and workflow semantics." },
                                    { week: "Weeks 5-8", title: "Integration", desc: "Building API bridges for Voyager ERP (Legacy) and clearing platforms." },
                                    { week: "Weeks 9-12", title: "Evaluation", desc: "Production-data benchmarking, 1200+ test cases, and hypercare." }
                                ].map((step, i) => (
                                    <div key={i} className="gsap-reveal">
                                        <div style={{ fontSize: "0.75rem", fontWeight: 900, color: "var(--primary)", textTransform: "uppercase", marginBottom: "0.5rem" }}>{step.week}</div>
                                        <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "white", marginBottom: "0.75rem" }}>{step.title}</div>
                                        <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{step.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* FAQ */}
            <section id="faq" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "800px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <span className="section-label">FAQ</span>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-container">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
             <section style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                  <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
                       <div className="gsap-reveal">
                            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 950, marginBottom: "2rem" }}>
                                Ready to Architect Your <span style={{ color: "var(--primary)" }}>AI Workforce?</span>
                            </h2>
                            <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem auto", lineHeight: 1.6 }}>
                                Stop experimenting. Start deploying. We help you build the autonomous systems that will define your next generation of operations.
                            </p>
                            <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                                <Link href="/discovery-audit" className="btn-primary" style={{ padding: "1.2rem 2.5rem", background: "#4F46E5", color: "white", borderRadius: "12px", textDecoration: "none", fontWeight: 700 }}>
                                    Start Your Agent Discovery
                                </Link>
                                <Link href="/technology" style={{ padding: "1.2rem 2.5rem", background: "transparent", color: "var(--text)", borderRadius: "12px", textDecoration: "none", fontWeight: 700, border: "1px solid var(--border)" }}>
                                    View Our Tech Stack
                                </Link>
                            </div>
                       </div>
                  </div>
             </section>

            {/* Explore More Agents */}
            <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <span className="section-label">Enterprise Solutions</span>
                        <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text)" }}>Explore Our Agentic Ecosystem</h2>
                    </div>
                    <div className="links-grid gsap-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem" }}>
                        {[
                            { title: "AI Discovery Audit", href: "/discovery-audit", desc: "Map your automation ROI" },
                            { title: "Enterprise Workflow", href: "/enterprise-workflow-automation", desc: "End-to-end agentic systems" },
                            { title: "AI Native Products", href: "/ai-native-products", desc: "Next-gen agentic SaaS" },
                            { title: "Operations Agents", href: "/operations-agents", desc: "Supply chain & logistics" },
                            { title: "Home", href: "/", desc: "Platform overview" }
                        ].map((link, i) => (
                            <Link key={i} href={link.href} style={{ 
                                padding: "1.5rem", 
                                background: "var(--bg)", 
                                borderRadius: "16px", 
                                border: "1px solid rgba(255,255,255,0.05)",
                                textDecoration: "none",
                                transition: "all 0.3s ease",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                fontWeight: 700,
                                color: "var(--text)",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                            }} 
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.transform = "none"; }}
                            className="hover-lift">
                                <div style={{ color: "var(--primary)", fontWeight: 800, marginBottom: "0.5rem" }}>{link.title}</div>
                                <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: 400 }}>{link.desc}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
