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
            a: "A chatbot responds to prompts—you ask, it answers. An agent acts autonomously within guardrails. Our Finance agent doesn't wait for a question; it monitors your inbox for invoices, processes them, categorises expenses, flags anomalies, and updates QuickBooks—all without human intervention. Chatbots are reactive; agents are proactive. Both use Claude or GPT-4o under the hood, but the architecture is fundamentally different. Agents require orchestration (n8n), decision logic, system integrations, and audit trails. They're more complex to build, but far more valuable."
        },
        {
            q: "How long does a typical deployment take?",
            a: "Discovery to handover: 12-16 weeks for most projects. Discovery (1-2 weeks) + Build (5-6 weeks) + Operate & handover (4-5 weeks). Some simpler agents (expense categorisation, basic lead scoring) ship in 8 weeks. Complex agents (legal due diligence, supply chain optimisation) may take 20 weeks. Timeline depends on data quality, integration complexity, and stakeholder availability—not on how clever the AI is. We've optimised our methodology over 47 prior engagements; timeline predictability is now ±2 weeks."
        },
        {
            q: "Which AI model is best for my use case?",
            a: "Claude 3.5 Sonnet excels at reasoning, context retention (200K tokens = 150 pages in context), and instruction-following. GPT-4o is stronger for vision tasks (document scanning, image analysis) and cost-efficiency at scale. Gemini is fastest and cheapest for high-volume, straightforward tasks. We typically blend all three: Claude for decision logic, GPT-4o for document understanding, Gemini for bulk categorisation. Your specific use case (Finance vs. Legal vs. Logistics) determines the optimal mix. We recommend it during Discovery; you approve the choice before Build."
        },
        {
            q: "Is my data secure? Can you access it?",
            a: "Your data lives in your infrastructure—your cloud, your on-premises system, or your chosen secure data residency (UK/EU options available). We don't download, copy, or store your transaction data. Our integrations use API keys and OAuth tokens, which are encrypted and stored separately. For legal/IP-sensitive work, we offer air-gapped deployments where the agent runs entirely within your network. Audit trails are immutable—every decision, every data access, every model call is logged. You can review logs; your compliance team can audit them. We comply with FCA regulations, SRA ethics, and GDPR. You remain the data controller."
        },
        {
            q: "What happens if the AI makes a mistake?",
            a: "AI is never 100% accurate, which is why we architect supervision into every agent. Finance agents flag low-confidence categorisations for human review (typically 2-5% of volume). Legal agents surface ambiguous clauses for solicitor review. Logistics agents alert dispatch managers to unusual route changes. Our design philosophy: AI speeds up the 95% of straightforward decisions; humans make the 5% of edge cases. Most teams find this reduces errors overall—consistent AI is less error-prone than tired humans. Over 10,000 live agent interactions, our Finance agents achieve 99.2% accuracy; Legal agents are reviewed by humans but reduce solicitor review time by 70%."
        },
        {
            q: "What's included in the monthly retainer after handover?",
            a: "First 6 months: 4-8 hours per month on-call support, bug fixes, and optimisation. We monitor performance metrics, suggest improvements, and tune prompts based on real-world results. Included: email/Slack support, performance reporting, one quarterly strategy call. Not included: major rewrites, new integrations (charged separately), or expansion to new use cases. After month 6, retainer typically shifts to 2-4 hours/month (maintenance only) or you self-manage with our support available on demand. Many clients discover optimisation opportunities after 3 months of live operation; retainer covers that learning."
        },
        {
            q: "Can I integrate with Salesforce/SAP/my custom ERP?",
            a: "Yes. We've integrated agents with 40+ platforms. Salesforce, SAP, Oracle, NetSuite, Xero, QuickBooks, Sage, Zoho, Pipedrive, HubSpot, Asana, Monday.com, custom REST APIs, SFTP, and SQL databases. n8n handles orchestration; LangChain handles RAG to your knowledge bases. If your system has an API or file-based interface, we can connect an agent to it. Integration complexity varies: Zoho CRM takes 2-3 days; bespoke legacy systems may take 2-3 weeks. We assess integration feasibility during Discovery and quote separately if needed."
        },
        {
            q: "What if we need to scale the agent to handle 10x volume?",
            a: "Agents scale horizontally (more parallel instances) and vertically (faster models, larger context windows). Claude scales well—it can process 1,000 contracts per month or 10,000 with the same architecture, just more API calls. Cost scales linearly with volume. n8n can handle parallel workflows (10 Finance agents running simultaneously across 10 departments). We typically optimise for cost: use Gemini for bulk volume (cheaper), Claude for complex reasoning (accuracy). By month 6 of operation, we've usually tuned the agent for your specific volume and cost profile. Scaling is straightforward; we handle the architecture planning."
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
                                    ENTERPRISE AI
                                </div>
                                <h1 className="hero-title-line" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em", color: "white" }}>
                                    Enterprise AI Agents <br /> That <span style={{ color: "#10b981" }}>Actually Work</span>
                                </h1>
                                <p className="hero-subtitle" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)", color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem", lineHeight: 1.6, maxWidth: "700px" }}>
                                    Autonomous digital workers built on Claude, GPT-4o, and LangChain. Deploy in weeks, not years. FI Digital UK—trusted by UK enterprise since 2016.
                                </p>

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

            {/* Section 1A: Enterprise Tech Stack (Zig) */}
            <section id="technology-1" style={{ padding: "120px 1.5rem 60px", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>Your Enterprise AI Stack</h2>
                    </div>
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Enterprise AI Tech Stack - Battle-tested deployments integrating Claude, GPT-4o, and n8n]
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Technology</span>
                            <h2 className="section-title">Core Infrastructure</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    FI Digital UK builds on the world's most powerful AI models and orchestration platforms. Our technology stack combines foundational large language models—Claude 3.5 Sonnet for reasoning and context understanding, GPT-4o for vision and multimodal tasks, and Google Gemini for cost-effective scale—with enterprise automation platforms that connect to your existing systems. 
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    We layer n8n for workflow orchestration, LangChain for advanced prompt engineering and retrieval-augmented generation, AWS Bedrock and Azure OpenAI for compliance-aware deployments, and Zoho's integration ecosystem for seamless SAP/Oracle/Salesforce connectivity. This isn't a boutique stack. It's battle-tested across 200+ live deployments in Financial Services, Legal, and Logistics across the UK, Australia, UAE, and India.
                                </p>
                                <p style={{ fontWeight: 700, color: "var(--text)" }}>
                                    We've integrated with Xero, QuickBooks, Sage, Zoho Books, Salesforce, HubSpot, Pipedrive, Zoho CRM, Monday.com, Asana, and custom ERP systems. Your AI agent sits on top of proven, auditable infrastructure. No experimental frameworks. No single-vendor lock-in. Just results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1B: Production Reality (Zag) */}
            <section id="technology-2" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Production Tested</span>
                            <h2 className="section-title">Built For The Enterprise Reality</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    The stack we've chosen reflects 10 years of enterprise experience: we picked each component because it's proven in production, well-supported, and integrates with real-world business systems. Claude handles reasoning because its 200K context window means we can feed entire documents in a single API call. GPT-4o handles vision because invoice scanning and document extraction is critical in Finance.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Gemini handles bulk volume because it's cost-efficient at scale. n8n orchestrates everything because it's open-source, enterprise-grade, and doesn't vendor-lock you. LangChain enables memory because historical context matters in legal work and contract negotiations. 
                                </p>
                                <p style={{ fontWeight: 700, color: "var(--text)" }}>
                                    This isn't theoretical. Our clients run this stack in production today, processing millions in transactions, managing thousands of contracts, optimising delivery routes across 4 countries.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Systems Diagram - n8n routing Claude, GPT-4o, and Gemini requests in real-time]
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2A: Autonomous Digital Workers (Zig) */}
            <section id="capabilities-1" style={{ padding: "120px 1.5rem 60px", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>What We Build: Autonomous Digital Workers</h2>
                    </div>
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Autonomous Worker Workflow - Average 99.2% Accuracy, 80% Cost Base Savings]
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Capabilities</span>
                            <h2 className="section-title">Intelligent Execution</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    An AI agent isn't a chatbot. It's a digital employee that thinks, decides, and acts within defined boundaries. Our agents autonomously process documents, extract data, make decisions based on business rules, and integrate findings across multiple systems—without human intervention between trigger and outcome.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    In Finance, a digital worker processes 500+ invoices monthly, auto-categorises expenses with 99.2% accuracy, reconciles bank statements overnight, and flags anomalies before they become problems. It reads an invoice (PDF, email, scanned image), extracts key fields (supplier, amount, tax, GL code), validates against your business rules (is this supplier approved? is the amount within tolerance?), and posts the transaction directly to your accounting software.
                                </p>
                                <p style={{ fontWeight: 700, color: "var(--text)" }}>
                                    Exceptions (duplicate invoices, policy violations, unusual amounts) get flagged to your Finance Manager with context. No manual data entry. No spreadsheets. No email hunting. One client went from 40 hours per week of manual invoice processing to 8 hours per week of exception review.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2B: Capabilities in Action (Zag) */}
            <section id="industry-applications" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Real World Context</span>
                            <h2 className="section-title">Scaling Legal and Logistics Frameworks</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    In Legal, an agent reviews contracts, extracts key terms, cross-references against precedent databases (via LangChain RAG), and produces annotated summaries in minutes instead of hours. A solicitor reviews the analysis, makes judgment calls, and approves. Time savings: 70-80% on routine contract review. Better decisions: the agent never forgets your precedent patterns. 
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    In Logistics, an autonomous dispatcher optimises routes, coordinates with vendors via n8n integrations, updates inventory in real-time, and forecasts demand using historical patterns. Routes are optimised overnight; drivers have their day's plan by 6am. If a new urgent order arrives at 2pm, the agent recalculates the afternoon route in seconds and alerts affected drivers. Fuel efficiency improves 12-18%, on-time performance hits 98%+, and cost per delivery drops 15-20%. 
                                </p>
                                <p style={{ fontWeight: 700, color: "var(--text)" }}>
                                    These aren't theoretical exercises. These are production agents handling £millions in transaction value, managing legal IP portfolios, and orchestrating thousands of shipments weekly. They're supervised—audit trails are absolute, human oversight is built in—but they operate 24/7 without fatigue, bias, or inconsistency. That's the FI Digital difference.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Cross-Discipline Applications - Logistics Routing, Finance Reconciliations, Legal Contracts]
                        </div>
                    </div>
                </div>
            </section>

             {/* Section 3A: Framework - Discovery (Zag) */}
             <section id="framework-1" style={{ padding: "120px 1.5rem 60px", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>How We Deploy: Discovery → Build → Operate</h2>
                    </div>
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Framework</span>
                            <h2 className="section-title">The Foundation</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Most AI vendors sell you a template and vanish. We embed with your team for 12-16 weeks minimum. This is intense, collaborative work. We're not parachuting in AI; we're building AI into your workflows. 
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Week 1-2: Discovery.</strong> We audit your current workflows, identify the 20% of tasks consuming 80% of labour, quantify the cost of errors, and map your tech stack. We interview 8-12 stakeholders—finance directors, paralegals, operations managers—to understand decision logic that no documentation captures. We review your existing systems, APIs, and data structures. 
                                </p>
                                <p style={{ fontWeight: 700, color: "var(--text)" }}>
                                    We identify quick wins (automated report generation, simple categorisation rules) and deep challenges (complex risk assessment, multi-entity reconciliation). By end of Week 2, we've produced a detailed Discovery Report: here's what we found, here's what works well, here's what's broken, here's what the agent should do, here's the timeline and investment.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: 12-16 Week Embedded AI Deployment Timeline Graphic]
                        </div>
                    </div>
                </div>
            </section>

             {/* Section 3B: Framework - Operate (Zig) */}
             <section id="framework-2" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: AI Agent Build & Operate Framework Dashboard]
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Deploy & Scale</span>
                            <h2 className="section-title">The Operational Handover</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Week 3-8: Build.</strong> Our engineering team designs the agent architecture, trains on your data, and integrates with your systems. Claude and GPT-4o handle reasoning; n8n orchestrates workflows; Zoho/Salesforce integrations ensure data flows correctly. We conduct 4 review cycles—Week 3: architecture review, Week 4-5: training/testing, Week 6: system integration, Week 7: UAT (user acceptance testing), Week 8: final refinement.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Week 9-12: Operate.</strong> Your team takes the wheel. We run a 4-week handover where you control the agent, we troubleshoot, and document everything. You own the code, the prompts, the configs. We stay on retainer for the first 6 months (typically 4-8 hours per month). 
                                </p>
                                <p style={{ fontWeight: 700, color: "var(--text)" }}>
                                    Throughout, we're coaching your team. By week 12, your Finance Manager adjusts rules, your legal team adds contracts to RAG, your Operations Manager refines routing. The agent isn't a black box; it's a tool your team understands and controls.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4A: Industries - Finance & Legal (Zag) */}
            <section id="expertise-1" style={{ padding: "120px 1.5rem 60px", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>Industries We Serve</h2>
                    </div>
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Expertise</span>
                            <h2 className="section-title">Financial & Legal Services</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Financial Services:</strong> Invoice processing, expense categorisation, reconciliation, cash flow forecasting, AML screening, payment exception handling. Our agents process £2.4bn traversing 47 clients. One mid-market firm went from 12-day to 5-day month-end close. Another saved £2,100/month in manual processing while improving accuracy from 94% to 99.2%. We integrate with Xero, QuickBooks, Sage, Zoho Books, and HR systems. Your team focuses on analysis and strategy.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Legal:</strong> Contract review, due diligence, compliance monitoring, precedent search, KYC. Our Legal agents have reviewed 18,000+ contracts using LangChain-powered RAG and Claude. A mid-tier law firm reduced due diligence time from 2-3 weeks to 4-5 days.
                                </p>
                                <p style={{ fontWeight: 700, color: "var(--text)" }}>
                                    We integrate securely with document management systems (iManage, ShareFile) and your contract repository. The SRA expects supervision; we rigorously architect compliance into every agent.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Key Sectors Map - Financial Services processing £2.4bn, Legal Due Diligence]
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4B: Industries - Logistics (Zig) */}
            <section id="expertise-2" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Advanced Logistics Routing Map & Supply Chain Orchestration]
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Operations</span>
                            <h2 className="section-title">Logistics & Manufacturing</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Logistics & Manufacturing:</strong> Route optimisation, demand forecasting, supplier coordination, inventory management, exception handling. Agents dynamically reduce delivery times by 12-18%, cut fuel costs by 8-14%, and strictly improve on-time performance to 98%+.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    A London-based courier with 35 drivers increased delivery capacity by 28% without adding vehicles. We integrate natively with your fleet management system (Tookan, Onfleet, Samsara), your inventory system (Zoho Inventory, SAP), and your order platform (Shopify, custom API). 
                                </p>
                                <p style={{ fontWeight: 700, color: "var(--text)" }}>
                                    The agent aggressively optimises routes while your operations team handles human exceptions and vendor relationships. These aren't one-off pilots. They're operational workhorses embedded in mission-critical workflows, handling real P&L impact every single day.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5A: Global Delivery (Zag) */}
            <section id="global-delivery-1" style={{ padding: "120px 1.5rem 60px", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>Global Delivery, UK Focused</h2>
                    </div>
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Digital Synergy Ventures UK</span>
                            <h2 className="section-title">Local Compliance & Security</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    FI Digital UK is Digital Synergy Ventures UK Limited—a UK-registered entity backed by 200+ engineers across 4 countries: Australia (HQ), India (engineering, 150+ staff), UAE (regional hub), and UK (enterprise relationships and support). 
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Ten years building AI automation systems for enterprises means we've seen every compliance framework, every integration nightmare, every edge case twice. We understand FCA regulations for Finance, SRA ethics for Legal, and GDPR for everything. 
                                </p>
                                <p style={{ fontWeight: 700, color: "var(--text)" }}>
                                    Your agent is built, tested, and audited to UK/EU standards. Your data stays in your infrastructure or our UK/EU data residency options. Your IP is yours. Your source code is yours. Deployment happens in your environment with your security review.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: World Map Distribution - London Enterprise, Sydney HQ, Pune Engineering, Dubai Hub]
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5B: Accountability (Zig) */}
            <section id="global-delivery-2" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: UK Engineering Partnership Dashboard & Slack Integration]
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Partnership</span>
                            <h2 className="section-title">Engineering Accountability</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    We're not a typical outsourcing firm—we're engineering partners who stay accountable for production outcomes. Our UK team is embedded in the relationship; our India team is experienced and proven; our SLAs are contractual, not aspirational. We've worked with FTSE 100 companies, large law firms, and logistics networks.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    We understand regulatory constraints and security requirements. Your data doesn't leave your infrastructure unless you explicitly approve it. We run agents on your cloud tenancy (AWS, Azure, Google Cloud) or on-premises. 
                                </p>
                                <p style={{ fontWeight: 700, color: "var(--text)" }}>
                                    We provide immutable audit trails for compliance reviews. We maintain professional indemnity insurance. We're invested in your success because deployment is the beginning, not the end.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6A: AI Readiness Assessment (Zig) */}
            <section id="assessment-1" style={{ padding: "120px 1.5rem 60px", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>Take the AI Readiness Assessment</h2>
                    </div>
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: AI Readiness Assessment Interface Mockup showing dimensions mapping]
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Evaluation Mechanics</span>
                            <h2 className="section-title">Are You Ready For AI?</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Not every process benefits from AI. Some should. Others shouldn't. We've built a 5-minute assessment that scores your readiness across 12 dimensions: process repeatability (are the steps consistent?), data quality (can we parse and understand your data?), volume/cost impact (how much manual labour is involved?), compliance complexity (are there regulatory constraints?), legacy system integration (how connected is your tech stack?), and team capacity (are you stretched thin?).
                                </p>
                                <p>
                                    Answer 15 questions, get an immediate score (0-100), and a personalised report showing which of your operations would benefit most from automation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6B: Assessment Results (Zag) */}
            <section id="assessment-2" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Valuable Insights</span>
                            <h2 className="section-title">No Sales Pitch. Just Data.</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    73% of assessments surface a high-impact automation opportunity within 90 days. Some clients discover they're already AI-ready (all preconditions met, can deploy in 8-10 weeks); others learn they need 6 months of data prep first (messy source systems, poor process documentation). 
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Both are valuable insights. The assessment is free, takes 5 minutes, and the insights are yours to keep. Many clients share the results with their CFO or COO to build the business case for the engagement.
                                </p>
                                <Link href="/assessment" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2rem", background: "#4F46E5", color: "white", borderRadius: "12px", textDecoration: "none" }}>
                                    Take the Assessment <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={PlaceholderStyle}>
                            [Image Placeholder: Personalized ROI Report Output Dashboard Example]
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
