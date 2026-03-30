"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2, Zap, Settings, BarChart3, Globe, ShieldCheck, Cpu, AppWindow, Smartphone, Code2, Database, Activity, RefreshCw, Users, Clock, CreditCard, Cloud } from "lucide-react";
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

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    
    useEffect(() => {
        if (!contentRef.current) return;
        if (isOpen) {
            gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
        } else {
            gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut" });
        }
    }, [isOpen]);

    return (
        <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "24px", marginBottom: "1rem", overflow: "hidden" }}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                style={{ width: "100%", padding: "1.5rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
            >
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "white" }}>{question}</span>
                <ChevronDown size={20} style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease", color: "var(--primary)" }} />
            </button>
            <div ref={contentRef} style={{ height: 0, opacity: 0, overflow: "hidden" }}>
                <div style={{ padding: "0 2rem 2rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{answer}</div>
            </div>
        </div>
    );
};

const FAQContent = () => (
    <div className="faq-container gsap-reveal">
        {[
            {
                q: "How much does it cost to build an AI product?",
                a: "Depends on product type. Average product: 16-week timeline, £120K-280K development cost. Web application (Type 1): £100K-200K. Mobile application (Type 2): £140K-300K. API platform (Type 3): £110K-240K. Internal tool (Type 4): £60K-140K. Post-launch cloud costs: £40K-120K monthly depending on scale. Post-launch team: £20K-60K monthly (2-4 engineers). Payback timeline: 8-24 months for SaaS products; 3-6 months for internal ROI. We're transparent about costs; we estimate during discovery and stay within 10%."
            },
            {
                q: "How long does it take from idea to launch?",
                a: "14-20 weeks depending on product type. Type 1 (web): 12-16 weeks. Type 2 (mobile): 16-20 weeks (iOS/Android review process adds time). Type 3 (API): 12-16 weeks. Type 4 (internal): 8-12 weeks. Timeline includes: weeks 1-2 for AI architecture, weeks 2-3 for product design, weeks 3-14 for build, weeks 14-16 for evaluation and launch. This is for MVP (minimum viable product). Additional features and polish add 2-4 weeks."
            },
            {
                q: "What if the AI doesn't perform as well as expected?",
                a: "We design for this. During Phase 1 (AI Architecture Sprint), we benchmark the model and prove it works. If it doesn't meet performance requirements, we either: switch models (Claude to GPT-4o, open-source to fine-tuned version, etc.), refine the approach (add RAG, add human-in-the-loop, decompose problem into smaller pieces), or reassess requirements (maybe 90% accuracy is acceptable instead of 95%). We don't proceed to full build until AI core is proven. If performance drops post-launch, we iterate: adjust prompts, add features, fine-tune models. We don't ship and abandon."
            },
            {
                q: "Can we build a product similar to ChatGPT or Copilot?",
                a: "ChatGPT and Copilot are exceptional products, but they're not products we'd recommend for most organisations. They require: massive scale (serving millions of users) to justify cost, continuous model improvement (hiring PhD researchers), and significant product iteration. If you want to build a general-purpose conversational AI, that's a 24-month, £2M+ project with uncertain ROI. If you want to build a domain-specific assistant (customer support chatbot, technical documentation Q&A, sales assistant), that's 12-16 weeks, £120K-200K, with clear ROI. We recommend the latter."
            },
            {
                q: "What's the best AI model for our product?",
                a: "Depends on your product requirements. Claude: reasoning-heavy products (compliance analysis, complex decision-making). GPT-4o: conversation-focused, user-facing products. Gemini: multimodal products (image+text analysis). Open-source: latency-critical or privacy-critical products. We benchmark all options during Phase 1 and recommend optimal choice based on: accuracy requirements, latency requirements, cost sensitivity, data privacy. Most web/mobile products use Claude or GPT-4o; most API platforms use Claude (better reasoning); most internal tools use open-source (cost) or Claude (quality)."
            }
         ].map((faq, idx) => (
             <FAQItem key={idx} question={faq.q} answer={faq.a} />
         ))}
    </div>
);

export default function AiNativeProductClient() {
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
                .diff-card {
                    padding: 2.5rem; 
                    background: var(--bg-secondary); 
                    border: 1px solid var(--border); 
                    borderRadius: 32px;
                    transition: all 0.3s ease;
                }
                .diff-card:hover {
                    border-color: var(--primary);
                }
                .product-stats-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }
                @media (max-width: 600px) {
                    .product-stats-grid {
                        grid-template-columns: 1fr;
                    }
                }
                .product-type-card {
                    padding: 3rem; 
                    background: var(--bg-secondary); 
                    border: 1px solid var(--border); 
                    border-radius: 32px;
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    transition: all 0.3s ease;
                }
                .product-type-card:hover {
                    border-color: var(--primary);
                }
                .phase-card {
                    position: relative;
                    padding-left: 4rem;
                    padding-bottom: 5rem;
                }
                .phase-card:last-child {
                    padding-bottom: 0;
                }
                .phase-card::before {
                    content: '';
                    position: absolute;
                    left: 1.15rem;
                    top: 2.5rem;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(180deg, var(--primary) 0%, var(--border) 100%);
                    opacity: 0.3;
                }
                .phase-card:last-child::before {
                    display: none;
                }
                .phase-dot {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 2.5rem;
                    height: 2.5rem;
                    background: var(--bg-secondary);
                    border: 2px solid var(--primary);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 900;
                    color: var(--primary);
                    z-index: 10;
                    box-shadow: 0 0 20px rgba(79, 70, 229, 0.4);
                }
                @media (max-width: 600px) {
                    .phase-card {
                        padding-left: 3rem;
                    }
                    .phase-dot {
                        width: 2rem;
                        height: 2rem;
                        font-size: 0.8rem;
                    }
                    .phase-card::before {
                        left: 0.9rem;
                    }
                }
            `}</style>
             <TechMeshBackground />
 
             {/* FAQ Call Removed */}

            {/* Hero Section */}
            <section style={{ position: "relative", padding: "180px 1.5rem 100px", minHeight: "90vh", display: "flex", alignItems: "center" }}>
                <div className="container" style={{ maxWidth: "1250px", position: "relative", zIndex: 1 }}>
                    <div style={{ maxWidth: "950px" }}>
                        <div className="hero-reveal" style={{ 
                            display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.2rem", 
                            background: "rgba(79, 70, 229, 0.1)", borderRadius: "100px", 
                            border: "1px solid rgba(79, 70, 229, 0.2)", marginBottom: "2.5rem", 
                            color: "var(--primary)", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.05em"
                        }}>
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                            AI-NATIVE ENGINEERING
                        </div>
                        <h1 className="hero-reveal" style={{ fontSize: "clamp(2.3rem, 5vw, 4.2rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em" }}>
                            Build Products That <span style={{ color: "var(--primary)" }}>Wouldn't Exist Without AI</span>
                        </h1>
                        <p className="hero-reveal" style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)", color: "var(--text-muted)", marginBottom: "3.5rem", lineHeight: 1.6, maxWidth: "800px" }}>
                            AI-native web apps, mobile apps, API platforms, internal tools. Full-stack engineering. Concept to production in 14-20 weeks. 200+ engineers, £10M+ projects delivered.
                        </p>
                        <div className="hero-reveal" style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                            <Link href="/book-call" className="btn-primary" style={{ padding: "1.2rem 2.5rem", background: "var(--primary)", border: "none", borderRadius: "12px", color: "white", textDecoration: "none", fontWeight: 700, fontSize: "1.1rem" }}>
                                Book Discovery Session
                            </Link>
                            <Link href="#difference" style={{ padding: "1.2rem 2.5rem", background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", borderRadius: "12px", color: "white", textDecoration: "none", fontWeight: 700, fontSize: "1.1rem" }}>
                                AI Feature vs. Product
                            </Link>
                        </div>
                    </div>

                    <div className="hero-reveal" style={{ marginTop: "6rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", borderTop: "1px solid var(--border)", paddingTop: "3rem" }}>
                        {[
                            { label: "Build Timeline", value: "14-20", sub: "Weeks to Launch" },
                            { label: "AI Experience", value: "12+", sub: "Native Products Built" },
                            { label: "Supported Models", value: "LLM+", sub: "Claude, GPT-4o, Gemini" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", marginBottom: "0.5rem" }}>{stat.label}</div>
                                <div style={{ fontSize: "2.5rem", fontWeight: 900 }}>{stat.value}</div>
                                <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{stat.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 1: AI Feature vs AI Product */}
            <section id="difference" style={{ padding: "120px 1.5rem", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div style={{ textAlign: "center", marginBottom: "5rem" }} className="gsap-reveal">
                        <span className="section-label">THE PHILOSOPHY</span>
                        <h2 className="section-title">AI Feature vs. AI Product: <span style={{ color: "var(--primary)" }}>The Difference That Matters</span></h2>
                    </div>

                    <div className="responsive-grid zig">
                        <div className="gsap-reveal">
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    An AI feature is a capability you add to existing software. Smart email suggestions in Gmail, predictive text in WhatsApp, fraud detection in Stripe — these are features. They enhance existing products.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    An <strong>AI product</strong> is built from the ground up with AI as the core. Midjourney's image generation, ChatGPT's conversational intelligence, GitHub Copilot's code generation — these products wouldn't exist without AI. AI isn't a feature; it's the entire reason to use the product.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    We build AI products. This is different from adding AI to existing systems. When you add an AI feature to legacy software, you're retrofitting intelligence into traditional architecture. When you build an AI product, you design the entire system around AI from day one.
                                </p>
                                <p>
                                    If you're building a product where AI is the core, we're the right partner.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "48px", padding: "3rem" }}>
                                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)", marginBottom: "2rem", textTransform: "uppercase" }}>Key Differences</div>
                                <div style={{ display: "grid", gap: "1.5rem" }}>
                                    {[
                                        { l: "Architecture", v: "Observe & Reason", c: "var(--primary)", desc: "Built on loops, not just CRUD." },
                                        { l: "Performance", v: "Sub-second Speed", c: "white", desc: "Native latency for AI interactions." },
                                        { l: "Reliability", v: "Soft Failover", c: "white", desc: "Greaceful degradation under load." },
                                        { l: "Data", v: "Learning Loops", c: "white", desc: "Real-time interaction training." }
                                    ].map((m, i) => (
                                        <div key={i} style={{ padding: "1.25rem", background: "var(--bg)", borderRadius: "16px", border: "1px solid var(--border)" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                                                <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{m.l}</span>
                                                <span style={{ fontWeight: 900, color: m.c, fontSize: '0.85rem' }}>{m.v}</span>
                                            </div>
                                            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{m.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Cards Section */}
            <section style={{ padding: "60px 1.5rem 120px" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
                        <div className="gsap-reveal diff-card">
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem", color: "white" }}>Traditional Products</h3>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {[
                                    "Architecture: Built on CRUD and linear business logic",
                                    "Performance: Tolerate 1-2s latency (traditional page loads)",
                                    "Reliability: Fail catastrophically on system errors",
                                    "Data: Relational databases as the primary source of truth"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1rem", color: "var(--text-muted)", fontSize: '0.95rem' }}>
                                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444", marginTop: "0.6rem", flexShrink: 0 }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="gsap-reveal diff-card" style={{ borderColor: 'var(--primary)', background: 'rgba(79, 70, 229, 0.05)' }}>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--primary)" }}>AI-Native Products</h3>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {[
                                    "Architecture: Built on loops (Observe, Reason, Learn)",
                                    "Performance: Sub-second latency (Copilot-level responsiveness)",
                                    "Reliability: Degrade gracefully (simplified results faster)",
                                    "Data: Large datasets, interaction data, and learning loops"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1rem", color: "white", fontSize: '0.95rem' }}>
                                        <CheckCircle2 size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "0.2rem" }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Track Record Section */}
            <section style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 className="section-title">Our <span style={{ color: "var(--primary)" }}>Track Record</span></h2>
                        <p style={{ color: "var(--text-muted)", maxWidth: "900px", margin: "2rem auto 0", fontSize: "1.2rem", lineHeight: 1.8 }}>
                            We've built 12 AI-native products in the past three years. None of them would work as traditional products; AI is why they exist. Average product: 16-week timeline, £120K-280K development cost, £40K-120K monthly cloud costs, £20K-60K monthly team costs for 2-4 FTE post-launch.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                        {[
                            { label: "Timeline", value: "16 Weeks", sub: "Average project duration" },
                            { label: "Dev Cost", value: "£120K-280K", sub: "Total development investment" },
                            { label: "Cloud Ops", value: "£40K-120K", sub: "Monthly cloud costs" },
                            { label: "Post-Launch", value: "£20K-60K", sub: "Monthly team (2-4 FTEs)" }
                        ].map((stat, i) => (
                            <div key={i} className="gsap-card" style={{ 
                                padding: "2.5rem", 
                                background: "var(--bg)", 
                                border: "1px solid var(--border)", 
                                borderRadius: "24px",
                                textAlign: "center"
                            }}>
                                <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", marginBottom: "1rem" }}>{stat.label}</div>
                                <div style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>{stat.value}</div>
                                <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{stat.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Section 2: Types of AI Products */}
            <section style={{ padding: "120px 1.5rem", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div style={{ textAlign: "center", marginBottom: "5rem" }} className="gsap-reveal">
                        <span className="section-label">THE OFFERING</span>
                        <h2 className="section-title">What We Build: <span style={{ color: "var(--primary)" }}>Four Types of AI-Native Products</span></h2>
                        <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "1rem auto 0", fontSize: "1.2rem" }}>
                            We've built AI products across four categories. Each has different architecture, team composition, timeline, and cost profile.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))", gap: "2.5rem" }} className="gsap-reveal">
                        {[
                            { 
                                type: "Type 1: Web Applications", 
                                desc: "SaaS-style products accessed via browser.", 
                                examples: ["Compliance document analysis (extract obligations, flag risks)", "Research synthesis (automated paper summaries)", "Transcription & routing (categorise and queue calls)"],
                                tech: "React/TypeScript, Node.js or Python, PostgreSQL, Claude/GPT-4o/Gemini",
                                stats: [
                                    { l: "Team", v: "2 FE, 1 BE, 1 AI, 1 Des" },
                                    { l: "Timeline", v: "12-16 Weeks" },
                                    { l: "Dev Cost", v: "£100K - 200K" },
                                    { l: "Monthly Ops", v: "£20K Cloud | £25K Team" }
                                ]
                            },
                            { 
                                type: "Type 2: Mobile Applications", 
                                desc: "Native iOS/Android experiences with mobile-first AI features.", 
                                examples: ["Personal finance assistant (spending analysis)", "Health tracker (insights from wearable data)", "Professional networking (AI-driven connections)"],
                                tech: "React Native or Native iOS/Android, Python/Node.js backend, Claude/GPT-4o",
                                stats: [
                                    { l: "Team", v: "1-2 iOS, 1 Android, 1 BE, 1 AI, 1 Des" },
                                    { l: "Timeline", v: "16-20 Weeks" },
                                    { l: "Dev Cost", v: "£140K - 300K" },
                                    { l: "Monthly Ops", v: "£25K Cloud | £30K Team" }
                                ]
                            },
                            { 
                                type: "Type 3: API Platforms", 
                                desc: "Headless AI intelligence sold via API for other developers to integrate.", 
                                examples: ["Compliance-as-a-Service", "Content moderation API", "Legal research & search API"],
                                tech: "FastAPI or Flask, PostgreSQL, Redis (caching), Claude/GPT-4o/Gemini",
                                stats: [
                                    { l: "Team", v: "1 BE, 2 AI, 1 DevOps" },
                                    { l: "Timeline", v: "12-16 Weeks" },
                                    { l: "Dev Cost", v: "£110K - 240K" },
                                    { l: "Monthly Ops", v: "£30K Cloud | £25K Team" }
                                ]
                            },
                            { 
                                type: "Type 4: Internal Tools", 
                                desc: "Products built to optimize your own organisation's specific workflows.", 
                                examples: ["Employee onboarding assistant", "Financial deal analysis tool", "Engineering handoff automation"],
                                tech: "Streamlit or React frontend, Python backend, Claude/GPT-4o",
                                stats: [
                                    { l: "Team", v: "1 Full-stack, 1 AI Engineer" },
                                    { l: "Timeline", v: "8-12 Weeks" },
                                    { l: "Dev Cost", v: "£60K - 140K" },
                                    { l: "Monthly Ops", v: "£10K Cloud | £15K Team" }
                                ]
                            }
                        ].map((item, i) => (
                            <div key={i} className="product-type-card">
                                <div>
                                    <h3 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: "1rem", color: "var(--primary)" }}>{item.type}</h3>
                                    <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                                
                                <div>
                                    <h4 style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", marginBottom: "1.5rem", letterSpacing: "0.1em" }}>Application Examples</h4>
                                    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1rem" }}>
                                        {item.examples.map((ex, j) => (
                                            <li key={j} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.95rem", color: "white" }}>
                                                <CheckCircle2 size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "0.1rem" }} />
                                                {ex}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div style={{ marginTop: "auto", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
                                    <div style={{ fontSize: "0.8rem", fontWeight: 800, opacity: 0.5, marginBottom: "1.5rem", textTransform: "uppercase" }}>Project Profile</div>
                                    <div className="product-stats-grid">
                                        {item.stats.map((s, k) => (
                                            <div key={k}>
                                                <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", marginBottom: "0.25rem" }}>{s.l}</div>
                                                <div style={{ fontSize: "1rem", fontWeight: 700, color: "white" }}>{s.v}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ marginTop: "1.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                                        <strong>Stack:</strong> {item.tech}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: "6rem", textAlign: "center", color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "900px", margin: "6rem auto 0", lineHeight: 1.8 }} className="gsap-reveal">
                        <p>
                            Each type has different considerations. Web apps and mobile apps have consumer UX requirements (design matters). API platforms need robust error handling and documentation. Internal tools prioritise speed-to-value over polish.
                        </p>
                    </div>
                </div>
            </section>
 
             {/* Section 3: Our Build Process */}
             <section style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                 <div className="container" style={{ maxWidth: "1000px" }}>
                     <div style={{ textAlign: "center", marginBottom: "6rem" }} className="gsap-reveal">
                         <span className="section-label">THE METHODOLOGY</span>
                         <h2 className="section-title">Our Build Process: <span style={{ color: "var(--primary)" }}>5 Phases</span></h2>
                         <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "1rem auto 0", fontSize: "1.2rem", lineHeight: 1.6 }}>
                            Building an AI product is 40% architecture, 40% engineering, 20% polish. We follow a specific process developed across 12+ launches.
                         </p>
                     </div>
 
                     <div style={{ position: 'relative' }}>
                         {[
                             {
                                 phase: "Phase 1: AI Architecture Sprint",
                                 timeline: "Weeks 1-2",
                                 desc: "Before any product design, we nail the AI architecture. We build prototypes in this phase to prove the AI core works before we build the full product around it.",
                                 items: [
                                     "Model Selection: Claude for reasoning, GPT-4o for conversation, Gemini for multimodal, or open-source.",
                                     "Core AI Loop: Designing how the system observes, reasons, generates, and learns.",
                                     "Benchmarking: Testing accuracy, cost, and latency for your specific use case.",
                                     "Integration Design: Connecting to data sources, databases, and external APIs.",
                                     "Evaluation Framework: Designing how to measure if the AI is 'good enough'."
                                 ]
                             },
                             {
                                 phase: "Phase 2: Product Design",
                                 timeline: "Weeks 2-3",
                                 desc: "Once the AI architecture is proven, we design the product to feel intuitive and responsive.",
                                 items: [
                                     "User Research: Identifying personas, objectives, and optimal workflows.",
                                     "UX/UI Design: Creating wireframes and mockups that highlight AI interactions.",
                                     "Feedback Loop Design: Designing how user input explicitly improves the AI model.",
                                     "Iteration: Rapid design cycles to ensure perfect alignment with business goals."
                                 ]
                             },
                             {
                                 phase: "Phase 3: Agile Build",
                                 timeline: "Weeks 3-14 typically",
                                 desc: "We build the product using two-week sprints. Every two weeks, you see working software. We demo, you give feedback, we adjust.",
                                 items: [
                                     "Working Increments: Each sprint produces a functional, testable piece of the system.",
                                     "Technical Excellence: Unit tests, integration tests, and automated CI/CD pipelines.",
                                     "Transparency: Periodic demos and feedback loops to de-risk development.",
                                     "Healthy Codebase: Priority on documentation and tracking technical debt."
                                 ]
                             },
                             {
                                 phase: "Phase 4: AI Evaluation",
                                 timeline: "Weeks final 3-4 of build",
                                 desc: "Parallel to final engineering work, we thoroughly evaluate the AI against real-world scenarios.",
                                 items: [
                                     "Deep Testing: 200-500 test cases representing complex user scenarios.",
                                     "Core Metrics: Measuring accuracy, latency, cost per request, and hallucination rates.",
                                     "Edge Case Handling: Stress-testing 'weird' inputs to ensure resilience.",
                                     "Performance Tracking: Weekly tests to track and prove continuous quality improvement."
                                 ]
                             },
                             {
                                 phase: "Phase 5: Launch & Hypercare",
                                 timeline: "Weeks final 2-4",
                                 desc: "Phased deployment to ensure total stability and rapid response to real usage.",
                                 items: [
                                     "Internal Launch: Initial testing by the core internal team to catch edge bugs.",
                                     "Beta Access: Controlled launch to 50-100 real users with close monitoring.",
                                     "Production Launch: Full public rollout with embedded engineer on-call.",
                                     "Refinement: Real-time monitoring and rapid engineering response during the first month."
                                 ]
                             }
                         ].map((p, i) => (
                             <div key={i} className="phase-card gsap-reveal">
                                 <div className="phase-dot">{i + 1}</div>
                                 <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '2.5rem', borderRadius: '32px' }}>
                                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                                         <h3 style={{ fontSize: "1.6rem", fontWeight: 900, color: "white", margin: 0 }}>{p.phase}</h3>
                                         <span style={{ fontSize: "0.85rem", fontWeight: 800, background: 'rgba(79, 70, 229, 0.1)', color: 'var(--primary)', padding: '0.5rem 1.25rem', borderRadius: '50px', border: '1px solid rgba(79, 70, 229, 0.2)' }}>
                                             {p.timeline}
                                         </span>
                                     </div>
                                     <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1.5rem" }}>{p.desc}</p>
                                     <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1rem" }}>
                                         {p.items.map((item, j) => (
                                             <li key={j} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)" }}>
                                                 <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.6rem', flexShrink: 0 }} />
                                                 {item}
                                             </li>
                                         ))}
                                     </ul>
                                 </div>
                             </div>
                         ))}
                     </div>
 
                     <div style={{ marginTop: "6rem" }} className="gsap-reveal">
                         <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', padding: '3rem', borderRadius: '48px', textAlign: 'center' }}>
                             <h4 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: "2rem", textTransform: 'uppercase', letterSpacing: '0.1em' }}>Typical Delivery Timelines</h4>
                             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                                 {[
                                     { type: "Web App", time: "10-14 Weeks" },
                                     { type: "Mobile App", time: "14-18 Weeks" },
                                     { type: "API Platform", time: "10-14 Weeks" },
                                     { type: "Internal Tool", time: "6-10 Weeks" }
                                 ].map((t, i) => (
                                     <div key={i}>
                                         <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>{t.type}</div>
                                         <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "var(--primary)" }}>{t.time}</div>
                                     </div>
                                 ))}
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
 
             {/* Section 4: Case Study */}
             <section style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                 <div className="container" style={{ maxWidth: "1200px" }}>
                     <div style={{ textAlign: "center", marginBottom: "6rem" }} className="gsap-reveal">
                         <span className="section-label">CASE STUDY</span>
                         <h2 className="section-title">Compliance Platform: <span style={{ color: "var(--primary)" }}>60 Hours to 4 Hours</span></h2>
                         <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "1rem auto 0", fontSize: "1.2rem", lineHeight: 1.6 }}>
                            How we built an AI-native SaaS that compressed 60+ hours of manual legal review into a 4-minute automated sweep + 3 hours of expert verification.
                         </p>
                     </div>
 
                     {/* The Impact Cards */}
                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                         {[
                             { label: "Productivity Increase", val: "10x", desc: "A single lawyer now verifies 300+ contracts monthly, up from 30 manual reviews." },
                             { label: "AI Accuracy (vs Human)", val: "94.2%", desc: "Claude 3.5 identified critical risks with near-parity to the 96.8% human baseline." },
                             { label: "Processing Cost", val: "£0.18", desc: "Average API cost per contract, replacing £40+ per hour in junior associate time." }
                         ].map((m, i) => (
                             <div key={i} className="gsap-reveal" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', padding: '2.5rem', borderRadius: '32px', textAlign: 'center' }}>
                                 <div style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: 800, textTransform: "uppercase", marginBottom: "1rem", letterSpacing: "0.1em" }}>{m.label}</div>
                                 <div style={{ fontSize: "3.5rem", fontWeight: 950, color: "white", marginBottom: "1rem" }}>{m.val}</div>
                                 <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.5, margin: 0 }}>{m.desc}</p>
                             </div>
                         ))}
                     </div>
 
                     {/* Case Study Narrative Grid */}
                     <div style={{ display: 'grid', gap: '4rem' }}>
                         
                         {/* Challenge & Vision */}
                         <div className="responsive-grid zig gsap-reveal" style={{ alignItems: 'start' }}>
                             <div style={{ background: 'rgba(79, 70, 229, 0.05)', border: '1px solid rgba(79, 70, 229, 0.2)', padding: '2.5rem', borderRadius: '32px' }}>
                                 <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: "1.5rem", color: "var(--primary)" }}>The Challenge</h3>
                                 <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                     A legal tech firm was struggling with manual contract review. Human lawyers spent <strong>60+ hours</strong> per contract, charging £2,500 for a process that was slow, expensive, and limited to 20-30 reviews monthly.
                                 </p>
                                 <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: "1.5rem", color: "var(--primary)" }}>The Vision</h3>
                                 <p style={{ color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                                     Build an AI-native SaaS where users upload contracts, and AI autonomously performs the first-pass analysis, identifying risks and linking them to supporting evidence in minutes.
                                 </p>
                             </div>
                             <div style={{ padding: '1rem' }}>
                                 <h3 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "2rem" }}>Step 1: AI Architecture Sprint</h3>
                                 <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                                     We benchmarked Claude vs GPT-4o on contract reasoning. Claude achieved <strong>96.2% accuracy</strong> vs 91.8%, with superior performance on complex cross-references.
                                 </p>
                                 <div style={{ display: 'grid', gap: '1.5rem' }}>
                                     <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '20px', border: '1px solid var(--border)' }}>
                                         <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}>Decision Layer</strong>
                                         <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Upload Contract → Chunking → Semantic Retrieval of Policy Clauses → Claude Reasoning Loop → Structured JSON Output.</span>
                                     </div>
                                 </div>
                             </div>
                         </div>
 
                         {/* Design & Build */}
                         <div className="responsive-grid zag gsap-reveal" style={{ alignItems: 'start' }}>
                             <div>
                                 <h3 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "2rem" }}>Step 2: Product Design & Feedback</h3>
                                 <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                                     Interviews with 6 lead lawyers revealed they didn't want "automated decisions"—they wanted <strong>automated highlighting</strong>. We designed the UI to present "judgment calls" backed by evidence.
                                 </p>
                                 <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                                     {[
                                         "Confidence Scoring: Visibility into the certainty of each risk flag.",
                                         "Evidence Linking: Direct links to the contract clause and policy origin.",
                                         "Lawyer Feedback Loop: Marking risks as valid or false positive to fine-tune prompts."
                                     ].map((li, i) => (
                                         <li key={i} style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                                             <CheckCircle2 size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                                             {li}
                                         </li>
                                     ))}
                                 </ul>
                             </div>
                             <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', padding: '2.5rem', borderRadius: '32px' }}>
                                 <h4 style={{ fontSize: "1.1rem", fontWeight: 900, marginBottom: "1.5rem", color: "white", textTransform: 'uppercase' }}>12-Week Build Journey</h4>
                                 <div style={{ display: 'grid', gap: '1rem', borderLeft: '2px solid var(--border)', paddingLeft: '1.5rem' }}>
                                     {[
                                         { w: "W1-2", t: "Auth & Doc Upload Architecture" },
                                         { w: "W3-4", t: "Claude Core & Risk Logic" },
                                         { w: "W5-6", t: "High-Fidelity UI & Evidence Linking" },
                                         { w: "W7-8", t: "Feedback Loops & Analytics" },
                                         { w: "W9-10", t: "Latency Optimisation (30s → 4s)" },
                                         { w: "W11-12", t: "Security Hardening & Launch" }
                                     ].map((w, i) => (
                                         <div key={i}>
                                             <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)' }}>{w.w}</div>
                                             <div style={{ fontSize: '0.9rem', color: 'white' }}>{w.t}</div>
                                         </div>
                                     ))}
                                 </div>
                             </div>
                         </div>
 
                         {/* Results & ROI */}
                         <div className="gsap-reveal" style={{ marginTop: '4rem' }}>
                             <div style={{ background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(13, 17, 23, 0.1) 100%)', border: '1px solid rgba(79, 70, 229, 0.3)', padding: '4rem', borderRadius: '48px' }}>
                                 <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                                     <h3 style={{ fontSize: "2.2rem", fontWeight: 950, marginBottom: "1rem" }}>The Results: <span style={{ color: "var(--primary)" }}>Business & ROI</span></h3>
                                     <p style={{ color: "var(--text-muted)", fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}>
                                         The firm transformed from a cost-heavy service model to a highly profitable, licensed software product.
                                     </p>
                                 </div>
 
                                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                                     <div>
                                         <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Operating Efficiency</h4>
                                         <div style={{ display: 'grid', gap: '1rem' }}>
                                             <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                                 <span style={{ color: 'var(--text-muted)' }}>Monthly Contracts</span>
                                                 <span style={{ color: 'white', fontWeight: 700 }}>30 → 300+</span>
                                             </div>
                                             <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                                 <span style={{ color: 'var(--text-muted)' }}>Revenue Model</span>
                                                 <span style={{ color: 'white', fontWeight: 700 }}>Service → Licensed</span>
                                             </div>
                                             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                 <span style={{ color: 'var(--text-muted)' }}>Annual Growth</span>
                                                 <span style={{ color: 'white', fontWeight: 700 }}>40% YoY</span>
                                             </div>
                                         </div>
                                     </div>
 
                                     <div>
                                         <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Financial Profile</h4>
                                         <div style={{ display: 'grid', gap: '1rem' }}>
                                             <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                                 <span style={{ color: 'var(--text-muted)' }}>Dev Investment</span>
                                                 <span style={{ color: 'white', fontWeight: 700 }}>£140,000</span>
                                             </div>
                                             <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                                 <span style={{ color: 'var(--text-muted)' }}>Cloud OpEx</span>
                                                 <span style={{ color: 'white', fontWeight: 700 }}>£8,000/mo</span>
                                             </div>
                                             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                 <span style={{ color: 'var(--text-muted)' }}>Break-even</span>
                                                 <span style={{ color: 'white', fontWeight: 700 }}>18 Months</span>
                                             </div>
                                         </div>
                                     </div>
 
                                     <div>
                                         <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>The Value Add</h4>
                                         <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                                             By licensing the product to other firms (£5K-30K/mo), the original investment has become a recurring revenue driver with near-infinite scalability.
                                         </p>
                                     </div>
                                 </div>
                             </div>
                         </div>
 
                     </div>
                 </div>
             </section>

            {/* FAQ Section */}
            <section style={{ padding: "120px 1.5rem", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "900px" }}>
                    <div style={{ textAlign: "center", marginBottom: "5rem" }} className="gsap-reveal">
                        <span className="section-label">RESOURCES</span>
                        <h2 className="section-title">Frequently Asked <span style={{ color: "var(--primary)" }}>Questions</span></h2>
                    </div>
                    <FAQContent />
                </div>
                {/* FAQ Schema */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "How much does it cost to build an AI product?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Costs range from £50K for internal tools to £260K for complex mobile apps. Discovery helps estimate within 10% accuracy."
                            }
                        }
                    ]
                })}} />
            </section>

            {/* Bottom CTA */}
            <section style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                  <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
                       <div className="gsap-reveal">
                            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 950, marginBottom: "2rem" }}>
                                Let's Build Your <span style={{ color: "var(--primary)" }}>AI Product</span>
                            </h2>
                            <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem auto", lineHeight: 1.6 }}>
                                Whether you're building a new SaaS platform or an internal tool to optimize your organization, we're the right partner to de-risk your investment.
                            </p>
                            <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                                <Link href="/contact" className="btn-primary" style={{ padding: "1.2rem 2.5rem", background: "var(--primary)", color: "white", borderRadius: "12px", textDecoration: "none", fontWeight: 700 }}>
                                    Build Your AI Product
                                </Link>
                                <Link href="/work" style={{ padding: "1.2rem 2.5rem", background: "transparent", color: "white", borderRadius: "12px", textDecoration: "none", fontWeight: 700, border: "1px solid var(--border)" }}>
                                    View Our Portfolio
                                </Link>
                            </div>
                       </div>
                  </div>
            </section>

            {/* Internal Links */}
            <section style={{ padding: "80px 1.5rem", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="links-grid gsap-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
                        {[
                            { title: "AI Agent Development", href: "/ai-agent-development" },
                            { title: "Discovery & Audit", href: "/discovery-audit" },
                            { title: "Our Portfolio", href: "/work" }
                        ].map((link, idx) => (
                            <Link key={idx} href={link.href} style={{
                                padding: "1.5rem",
                                background: "var(--bg-secondary)",
                                borderRadius: "16px",
                                border: "1px solid var(--border)",
                                color: "white",
                                textDecoration: "none",
                                fontWeight: 700,
                                textAlign: "center",
                                transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "none"; }}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
