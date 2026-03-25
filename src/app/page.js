"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, Minus, CheckCircle2, ChevronDown, Calculator } from "lucide-react";
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
                borderColor: "rgba(59, 130, 246, 0.4)",
                backgroundColor: "#060913",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
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
                borderColor: "rgba(255,255,255,0.05)",
                backgroundColor: "#0B0F19",
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
                background: "#0B0F19", 
                border: "1px solid rgba(255,255,255,0.05)", 
                borderRadius: "12px", 
                marginBottom: "0.75rem", 
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.3s ease"
            }}
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={(e) => { if(!isOpen) e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)" }}
            onMouseLeave={(e) => { if(!isOpen) e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)" }}
        >
            <div style={{ padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "2rem" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600, margin: 0, color: "rgba(255,255,255,0.9)", letterSpacing: "0.01em" }}>{question}</h3>
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
                <div style={{ padding: "0 1.5rem 1.5rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    const containerRef = useRef(null);
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

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
            q: "What's the difference between an AI agent and a chatbot?",
            a: "A chatbot responds to prompts—it's essentially a reactive interface answering questions based on fixed data. An AI agent is a digital employee that acts autonomously within defined boundaries. Our agents don't wait for you; they actively monitor networks, extract data from PDFs, validate via ERPs, and transact directly in accounting software, flagging only exceptions. This leap from conversation to action delivers 70-80% efficiency gains."
        },
        {
            q: "How long does a typical deployment take?",
            a: "Our “Discovery → Build → Operate” methodology is designed to move from initial audit to production handover in 12-16 weeks. We spend 1-2 weeks in discovery mapping data structures, followed by 6-8 weeks of build phase where we architect ( Claude, GPT-4o, n8n) and integrate. The final weeks strictly focus on UAT and handover. You receive battle-tested digital workers paying for themselves by month 3."
        },
        {
            q: "How do you ensure data security and compliance?",
            a: "Security is non-negotiable. We architect for compliance from day one (FCA/SRA). Data does not leave your infrastructure without approval. We deploy agents inside your cloud instance (AWS/Azure/GCP) for absolute UK/EU data residency. Immutable audit trails log every automated decision. Furthermore, all custom codebase and prompts engineered for your pipeline belong to you permanently."
        },
        {
            q: "How do you handle 'hallucinations' or errors?",
            a: "We heavily mitigate AI errors through a multi-layered verification strategy. First, RAG limits reasoning specifically to your datasets. Second, we integrate Human-in-the-Loop workflows handling routine 90% and flagging 10% anomalies. Finally, hard-coded guardrails prevent risky behavior (e.g., mismatching GL codes, processing unapproved invoices) without explicit human override."
        },
        {
            q: "Which AI model is best for my usecase?",
            a: "Claude 3.5 Sonnet excels at deep reasoning and complex contract interpretations via its 200K token window. GPT-4o is superior for vision tasks like document extraction from scanned PDFs. Gemini shines at speed and bulk API costs. We typically blend all three in specialized orchestration loops, assigning the optimal brain to the specific sub-task in your workflow."
        },
        {
            q: "Can I integrate with my custom ERP or Legacy System?",
            a: "Yes. Our n8n infrastructure orchestrates easily with 40+ main platforms including Salesforce, NetSuite, Xero, QuickBooks, Zoho, HubSpot, SAP, and custom REST API endpoints. Even legacy systems on-prem can interface via SFTP or direct SQL push/pull. If your tool has an API or imports files, we can connect."
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
                .outcomes-grid {
                    display: grid;
                    gap: 4rem;
                    align-items: center;
                    grid-template-columns: 1fr;
                }
                .metrics-grid {
                    display: grid;
                    gap: 2rem;
                    grid-template-columns: 1fr;
                }
                .links-grid {
                    display: grid;
                    gap: 1.5rem;
                    grid-template-columns: 1fr;
                }
                @media (min-width: 900px) {
                    .responsive-grid.zig { grid-template-columns: 1fr 1.4fr; }
                    .responsive-grid.zag { grid-template-columns: 1.4fr 1fr; }
                    .hero-grid { grid-template-columns: 1.2fr 1fr; }
                    .outcomes-grid { grid-template-columns: 1.2fr 1fr; }
                    .metrics-grid { grid-template-columns: 1fr 1fr; }
                    .links-grid { grid-template-columns: repeat(3, 1fr); }
                }
                @media (min-width: 1200px) {
                    .links-grid { grid-template-columns: repeat(5, 1fr); }
                }
            `}</style>
            
            {/* HER0 SECTION */}
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
                                    WHATSAPP SALES & CONCIERGE
                                </div>
                                <h1 className="hero-title-line" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em", color: "white" }}>
                                    WhatsApp Sales & <br /> Concierge Agents: The <br />
                                    Future of <span style={{ color: "#10b981" }}>Real-Time</span> <br />
                                    <span style={{ color: "#10b981" }}>Customer Engagement</span>
                                </h1>
                                <p className="hero-subtitle" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)", color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem", lineHeight: 1.6, maxWidth: "700px" }}>
                                    FI Digital's WhatsApp Sales Agents are autonomous AI workers designed for UAE enterprises. They qualify leads in Arabic and English, process voice notes, and sync data directly to Zoho CRM. Our agents reduce response times from hours to 4.2 seconds on average.
                                </p>

                                <div className="hero-cta" style={{ 
                                    background: "rgba(255,255,255,0.03)", 
                                    padding: "2rem", 
                                    borderRadius: "32px", 
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    marginBottom: "3.5rem",
                                    maxWidth: "750px",
                                }}>
                                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "white", marginBottom: "1rem", lineHeight: 1.4 }}>
                                        The Problem: Conversational AI Must Integrate Real Time
                                    </h3>
                                    <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}>
                                        In the UAE, 85%+ of business communication happens on WhatsApp.
                                        {!isReadMoreOpen && (
                                            <>
                                                ... <button onClick={() => setIsReadMoreOpen(true)} style={{ color: "var(--primary)", background: "transparent", border: "none", cursor: "pointer", fontWeight: 700, padding: 0, textDecoration: "underline", marginLeft: "0.25rem", fontSize: "0.95rem" }}>Read more</button>
                                            </>
                                        )}
                                        {isReadMoreOpen && (
                                            <span style={{ display: "inline" }}>
                                                {' '}Our AI-powered agents respond in real-time, handle complex Arabic language syntax, and integrate seamlessly with Zoho CRM to turn raw daily conversations into verified business conversions automatically.
                                                <button onClick={() => setIsReadMoreOpen(false)} style={{ color: "var(--primary)", background: "transparent", border: "none", cursor: "pointer", fontWeight: 700, padding: 0, textDecoration: "underline", marginLeft: "0.5rem", fontSize: "0.95rem" }}>Show less</button>
                                            </span>
                                        )}
                                    </p>
                                </div>

                                <div className="hero-cta" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                                    <Link href="/demo/whatsapp" style={{ 
                                        display: "inline-flex", alignItems: "center", gap: "0.5rem", 
                                        padding: "1rem 2rem", background: "#4F46E5", color: "white", 
                                        fontWeight: 700, borderRadius: "12px", textDecoration: "none", 
                                        boxShadow: "0 10px 30px rgba(79, 70, 229, 0.3)", transition: "all 0.3s ease" 
                                    }}>
                                        See WhatsApp Demo <ArrowRight size={20} />
                                    </Link>
                                    <Link href="/case-studies" style={{ 
                                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                                        padding: "1rem 2rem", background: "#0F172A", color: "white", 
                                        fontWeight: 700, borderRadius: "12px", textDecoration: "none",
                                        transition: "all 0.3s ease" 
                                    }}>
                                        Explore Global Case Studies
                                    </Link>
                                </div>
                            </div>
                            
                            {/* Empty right column */}
                            <div></div>
                       </div>
                  </div>
             </header>

            {/* Section 1: Enterprise Tech Stack (Zig) */}
            <section id="technology" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Enterprise AI Tech Stack - Battle-tested deployments integrating Claude, GPT-4o, and n8n]
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Technology</span>
                            <h2 className="section-title">Your Enterprise AI Stack</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    This isn't a boutique stack. It's battle-tested across 200+ live deployments in Financial Services, Legal, and Logistics across the UK, Australia, UAE, and India. We provide integrations with Xero, Salesforce, HubSpot, QuickBooks, Sage, and custom ERP systems.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    The stack we've chosen reflects 10 years of enterprise experience: we picked each component because it's proven in production. Claude handles reasoning because its 200K context window parses entire documents. GPT-4o handles rapid structured vision extraction. Gemini handles immense bulk datasets cost-efficiently. 
                                </p>
                                <p style={{ fontWeight: 700, color: "var(--text)" }}>
                                    Our orchestrated n8n infrastructure connects these models into your existing workflows without vendor-locking you into rigid subscription platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2A: Autonomous Digital Workers (Zag) */}
            <section id="capabilities" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container">
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Capabilities</span>
                            <h2 className="section-title">What We Build: Autonomous Digital Workers</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    An AI agent isn't an isolated chatbot sandbox. It's a digital employee that thinks, decides, and executes independently within precisely defined enterprise boundaries.
                                </p>
                                <p>
                                    Our workers autonomously process external documents, extract unstructured data, execute heuristic decisions based on rigid business rules, and interface directly with multiple CRM ecosystems. They run with zero human intervention required between the initial trigger and the final data outcome.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Autonomous Worker Workflow - Average 99.2% Accuracy, 80% Cost Base Savings]
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2B: Capabilities in Action (Zig) */}
            <section id="industry-applications" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Cross-Discipline Applications - Logistics Routing, Finance Reconciliations, Legal Contracts]
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Real World</span>
                            <h2 className="section-title">Workers Inside Finance, Legal & Logistics</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    In Finance, a digital worker handles 500+ invoices nightly, auto-categorising expenses with absolute accuracy and reconciling bank anomalies before morning coffee routines. In Legal, an agent cross-patterns complex term reviews against deeply embedded RAG precedent databases, producing massive contract summaries efficiently. 
                                </p>
                                <p>
                                    In Logistics, autonomous planners aggressively optimize driver delivery paths, coordinate vendor manifests instantly over API triggers, and forecast future volume trends without fatigue or error margins.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Section 3: Framework (Zag) */}
             <section id="framework" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container">
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Framework</span>
                            <h2 className="section-title">How We Deploy: Discovery to Operate</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Most AI vendors sell you a template and vanish entirely. We embed exclusively with your localized processes for 12-16 weeks. We aren't just parachuting in generic tools; we are hard-coding AI securely into your existing operational rhythms.
                                </p>
                                <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                     <li><strong>Discovery:</strong> Weeks 1-2 involve deeply auditing workflows, analyzing staff bandwidth, and exposing the critical 20% of manual tasks draining your capital.</li>
                                     <li><strong>Build:</strong> Weeks 3-8 encompass designing the agent's brain, routing API nodes, and running stress thresholds in robust pre-production testing.</li>
                                     <li><strong>Operate:</strong> Weeks 9-12 transition complete agent control. Your teams learn how to adjust rules and monitor scaling behaviors securely.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: 12-16 Week Embedded AI Deployment Timeline Graphic]
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Industries We Serve (Zig) */}
            <section id="expertise" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Key Sectors Map - Financial Services processing £2.4bn, Legal Due Diligence, Advanced Logistics]
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Expertise</span>
                            <h2 className="section-title">Industries We Scale</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Financial Services:</strong> Invoice processing, AML screening, and cash flow predictive analysis. Our finance agents route £2.4bn in transactions across our client ledger, dropping error bounds drastically while generating immediate ROI.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Legal Services:</strong> RAG frameworks power contract monitoring and compliance audits. We connect securely with document systems like iManage. Operations that used to soak 3 weeks of diligence wrap up in mere days.
                                </p>
                                <p>
                                    <strong>Logistics & Manufacturing:</strong> Intelligent tracking routing and live CRM fulfillment triggers. Deliveries hit optimal times continuously, boosting internal fleet efficiency by nearly 20% in documented case deployments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Global Delivery (Zag) */}
            <section id="global-delivery" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container">
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Digital Synergy Ventures UK</span>
                            <h2 className="section-title">Global Delivery, Local Compliance</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    FI Digital UK is a fully registered UK entity backed by a massive infrastructure of 200+ elite engineers operating across four primary hubs in Australia, India, and the UAE. We understand rigid strictures surrounding FCA boundaries, SRA oversight, and expansive GDPR protocols.
                                </p>
                                <p>
                                    Your agents securely live on your local cloud tenancy, guaranteeing full code ownership. Every data movement logs itself via immutable audit tracing, shielding your entity against risk while accelerating your core objectives exponentially.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: World Map Distribution - London Enterprise, Sydney HQ, Pune Engineering, Dubai Hub]
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: AI Readiness Assessment (Zig) */}
            <section id="assessment" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: AI Readiness Assessment Interface Mockup showing dimensions mapping]
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Readiness Assessment</span>
                            <h2 className="section-title">Architect The First Step</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Not every process benefits heavily from unstructured AI operations. We've developed a rigorous 5-minute evaluation covering 12 enterprise dimensions to surface genuine high-impact ROI zones quickly.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    It grades your system's legacy constraints, assesses data quality boundaries, isolates labor bottlenecks, and outputs an immediate actionable roadmap highlighting whether your firm should deploy immediately or pivot focus toward data preparation loops. 
                                </p>
                                <Link href="/assessment" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2rem", background: "#4F46E5", color: "white", borderRadius: "12px", textDecoration: "none" }}>
                                    Take the Assessment <ArrowRight size={20} />
                                </Link>
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
                <div className="container">
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem" }}>Explore Our Network</h3>
                        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>Navigate deeper into specialized autonomous endpoints.</p>
                    </div>
                    <div className="links-grid gsap-reveal">
                        {[
                            { title: "Finance Agents", href: "/finance-agents" },
                            { title: "Legal Agents", href: "/legal-agents" },
                            { title: "Logistics Agents", href: "/logistics-agents" },
                            { title: "Assessment", href: "/assessment" },
                            { title: "Case Studies", href: "/case-studies" }
                        ].map((link, idx) => (
                            <Link key={idx} href={link.href} style={{
                                padding: "1.5rem",
                                background: "var(--bg)",
                                borderRadius: "16px",
                                border: "1px solid var(--border)",
                                color: "var(--text)",
                                textDecoration: "none",
                                fontWeight: 600,
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.transform = "none"; }}
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
                                Ready to Architect Your <span style={{ color: "var(--primary)" }}>AI Platform?</span>
                            </h2>
                            <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem auto", lineHeight: 1.6 }}>
                                Work with UK engineering partners who stay exclusively accountable for massive automated production outcomes.
                            </p>
                            <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                                <Link href="/book-call" className="btn-primary" style={{ padding: "1rem 2.5rem", background: "#1d4ed8", color: "white", borderRadius: "12px", textDecoration: "none", fontWeight: 700, boxShadow: "0 10px 30px rgba(29, 78, 216, 0.3)" }}>
                                    Book 30-min Strategy Call
                                </Link>
                                <Link href="/contact" className="btn-secondary" style={{ padding: "1rem 2.5rem", border: "1px solid rgba(255,255,255,0.2)", color: "white", borderRadius: "12px", textDecoration: "none", fontWeight: 700 }}>
                                    Contact London Office
                                </Link>
                            </div>
                       </div>
                  </div>
             </section>

        </div>
    );
}
