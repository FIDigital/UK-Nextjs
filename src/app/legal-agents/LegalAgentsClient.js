"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Rocket, ShieldCheck, Zap, Scale, FileText, CheckCircle2 } from "lucide-react";
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

export default function LegalAgentsClient() {
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
        {
            q: "Is Claude a trained legal AI? Has it been trained on UK law?",
            a: "Claude is a general-purpose large language model trained on a broad corpus of text, including legal documents, case law, and regulatory guidance. While not a specialised legal AI, it is highly knowledgeable about UK, EU, and US law. For commercial contracts and regulatory compliance, its performance is equivalent to a capable junior associate, though we recommend human experts for niche areas like maritime or planning law."
        },
        {
            q: "Can Claude replace a solicitor?",
            a: "No. Claude is a paralegal-level tool, not a solicitor. It cannot give legal advice, make judgment calls about risk acceptance, or appear in court. Claude handles the 'heavy lifting'—reading, analysing, and flagging issues—so the solicitor can make the final decisions. The SRA expects this supervision: AI assists, humans decide."
        },
        {
            q: "What if Claude misses a critical clause or misunderstands a term?",
            a: "Claude is ~96-98% accurate on routine contract analysis, but solicitor review is non-negotiable. We provide a QA checklist for all findings marked as 'high-risk' for independent verification. This dual-layer approach (AI analysis + human verification) is more accurate than either alone and ensures errors in complex cross-references or buried carve-outs are caught."
        },
        {
            q: "How do we maintain confidentiality? Does Claude see our sensitive documents?",
            a: "Claude processes documents without retaining them; they are deleted from context after analysis. For highly sensitive work, we offer three secure options: (1) using Claude via your own private Azure OpenAI instance, (2) deploying a private local LLM on your infrastructure, or (3) using redacted versions. Most firms opt for the private Azure instance for sensitive deals."
        },
        {
            q: "How does LangChain RAG improve analysis over time?",
            a: "LangChain indexes your past contracts and precedents into a secure vector database. Over time, it learns your firm's institutional memory and specific preferences. When reviewing a new agreement, it can identify deviations from your signed precedents (e.g., 'This liability cap is £500k; your standard is £1m'). After 6 months, the system is hyper-tailored to your specific risk profile."
        },
        {
            q: "What if a dispute arises about whether your legal analysis was correct?",
            a: "Every analysis is backed by a defensive audit trail: date, time, requester, Claude's output, and the solicitor's final approval. If a dispute arises years later, you can demonstrate exactly what was analysed and who signed off. This provides significantly better defensibility than manual documentation."
        },
        {
            q: "How does this work for compliance monitoring? What regulatory deadlines does the agent track?",
            a: "The agent monitors your compliance database (spreadsheets or MATS) and sends automated alerts at 90, 60, and 30-day intervals for contract renewals, license expiries, and regulatory filings (e.g., DPIAs with the ICO). It doesn't know the law—it tracks the dates and ensures your team never misses a critical filing window."
        },
        {
            q: "Can you use Claude for contentious work or litigation support?",
            a: "For litigation, Claude is best used as a research assistant rather than a primary analyst. It excels at document review for disclosure (e.g., flagging privileged emails across 10,000 documents) and evidence summarisation. For litigation strategy and legal argument, human lawyers remain the primary decision-makers."
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
                    font-size: clamp(2rem, 4vw, 3.2rem);
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 2.5rem;
                    letter-spacing: -0.02em;
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
            `}</style>

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
                <TechMeshBackground />
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
                        src="/images/agents/legal-agent-hero.png"
                        alt="Legal AI Agents"
                        fill
                        style={{ objectFit: "cover", objectPosition: "left center", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }}
                        priority
                    />
                </div>

                <div className="container hero-container" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "100%", maxWidth: "1250px", margin: "0 auto" }}>
                    <div className="hero-title-line" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.2rem", background: "var(--hover-bg)", borderRadius: "100px", border: "1px solid var(--border)", marginBottom: "2.5rem", color: "var(--primary)", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.05em" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                        LEGAL AUTOMATION
                    </div>
                    <h1 className="hero-title-line" style={{ fontSize: "clamp(2.5rem, 8vw, 4.2rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em", color: "var(--text)" }}>
                        Your Legal Team Now Reviews<br /> Contracts in <span style={{ color: "var(--primary)" }}>Minutes</span>, Not Days
                    </h1>
                    <p className="hero-subtitle" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)", color: "var(--text-muted)", marginBottom: "2.5rem", lineHeight: 1.6, maxWidth: "700px" }}>
                        Meet your Legal Digital Worker: AI-assisted contract review, due diligence, compliance monitoring, and KYC—powered by Claude, supervised by solicitors.
                    </p>

                    <div className="hero-cta" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                        <Link href="/demo/legal" className="btn-primary" style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            padding: "1rem 2rem", background: "var(--primary)", color: "white",
                            fontWeight: 700, borderRadius: "12px", textDecoration: "none",
                            boxShadow: "0 10px 30px var(--card-shadow)", transition: "all 0.3s ease"
                        }}>
                            Request Legal Pilot <ArrowRight size={20} />
                        </Link>
                        {/* <Link href="/case-studies/legal-pdf" style={{
                            display: "inline-flex", alignItems: "center", justifyContent: "center",
                            padding: "1rem 2rem", background: "var(--card-bg)", color: "var(--text)",
                            fontWeight: 700, borderRadius: "12px", textDecoration: "none",
                            transition: "all 0.3s ease",
                            border: "1px solid var(--border)"
                        }}>
                            SRA Compliance Guide
                        </Link> */}
                    </div>
                </div>
            </header>

            <section id="opportunity-p1" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "800px", textAlign: "center", marginBottom: "5rem" }}>
                    <span className="section-label">Market Context</span>
                    <h2 className="section-title">The Opportunity: UK Legal Sector Is Ready for AI</h2>
                </div>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                        <div className="gsap-img-reveal">
                            <Image
                                src="/images/agents/legal-growth-paradox.png"
                                alt="A Paradox of Growth and Constraints"
                                width={800}
                                height={600}
                                style={{ borderRadius: "32px", width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
                            />
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem" }}>A Paradox of Growth & Constraints</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    The UK legal sector faces a paradox. Transaction volumes are growing (M&A, regulatory filings, contract management), but legal budgets are flat or contracting. Law firms are constrained by partner billable hour requirements and client cost sensitivity.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    In-house legal teams are resource-stretched—managing 500+ active contracts, hundreds of regulatory obligations, and KYC screening on new vendors. A typical contract review (SPA, NDA, service agreement) takes a senior associate <strong>2-4 hours</strong>.
                                </p>
                                <p>
                                    A due diligence exercise (reviewing 100 documents) takes a paralegal 1-2 weeks of full-time work. The cost is real: a transaction that should cost £800-1,200 in AI-assisted review costs <strong>£2,000-3,000</strong> if done manually.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1B: The Today Problem */}
            <section id="opportunity-p2" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "4rem" }}>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem" }}>The Inflection Point</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    An in-house legal team with 3 FTE lawyers can't handle the volume; they either hire more (expensive, slow to ramp) or risk regulatory/contractual exposure. <strong>This isn't a future problem. It's a today problem.</strong>
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    The legal profession is ready for AI because the alternative—status quo manual processing—is unsustainable. What's changed is that <strong>Claude is now good enough</strong> (96-98% accurate on routine reviews), cost-effective, and explainable.
                                </p>
                                <p>
                                    This is the inflection point where AI becomes a no-brainer for legal work. We have reached the threshold where high-accuracy contract analysis is no longer a human-exclusive domain.
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            {[
                                { title: "Cost per Review", val: "£0.15 - £0.25", desc: "Batch processed vs £40+ per hour for manual junior review." },
                                { title: "Decision Accuracy", val: "96% - 98%", desc: "High-fidelity analysis verified by senior solicitors." },
                                { title: "Processing Speed", val: "Minutes vs Weeks", desc: "Due diligence bundle (100+ docs) processed in < 1 hour." }
                            ].map((stat, i) => (
                                <div key={i} className="gsap-card" style={{ padding: "2rem", background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                                    <div style={{ color: "var(--primary)", fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>{stat.title}</div>
                                    <div style={{ color: "var(--text)", fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>{stat.val}</div>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="the-agent-p1" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px", textAlign: "center", marginBottom: "5rem" }}>
                    <span className="section-label">Meet Your Agent</span>
                    <h2 className="section-title" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>Meet Your Legal Digital Worker</h2>
                </div>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                        <div className="gsap-img-reveal">
                            <Image
                                src="/images/agents/legal-autonomous-review.png"
                                alt="Autonomous Contract Review Interface"
                                width={800}
                                height={600}
                                style={{ borderRadius: "32px", width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
                            />
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem" }}>Autonomous Contract Review</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Your Legal agent is Claude, supervised by you. An NDA arrives. The agent reads every clause, definition, and carve-out. Claude's <strong>200K token context window</strong> means it holds the entire agreement, templates, and your risk profile in memory.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    It outputs a summary, clause-by-clause analysis, and flags non-standard liability caps or vague termination rights. <strong>This analysis would take a junior associate 3-4 hours; Claude does it in 90 seconds.</strong>
                                </p>
                                <p>
                                    You simply review the analysis, tweak recommendations, and share with the other party. The heavy lifting is automated; the judgment remains yours.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2B: Deep-Dive Due Diligence */}
            <section id="the-agent-p2" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "4rem" }}>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem" }}>Deep-Dive Due Diligence</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Upload 100 documents—SPAs, regulatory filings, employment contracts. Claude identifies key risks like <strong>unfunded covenants</strong> or <strong>undisclosed liabilities</strong>, and flags missing director appointments or IP confirmations.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    It produces an annotated list: <em>"Risk: Company has £2.4m contingent liability not disclosed in latest accounts. Document: litigation_2022.pdf. Recommendation: Require indemnity in SPA."</em>
                                </p>
                                <p>
                                    A team of specialists would spend <strong>2 weeks</strong> on this; Claude produces a comprehensive report in <strong>4-6 hours</strong>, catching nuances that manual review often misses.
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            {[
                                { title: "Document Vol", val: "100+ Docs", desc: "SPAs, Employment, IP, and Regulatory filings processed as a single context." },
                                { title: "Turnaround", val: "4-6 Hours", desc: "Full audit report vs 2 weeks for a manual associate team." },
                                { title: "Turnaround", val: "Risk-First", desc: "Automatically flags undisclosed liabilities and missing board consents." }
                            ].map((stat, i) => (
                                <div key={i} className="gsap-card" style={{ padding: "2rem", background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                                    <div style={{ color: "var(--primary)", fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>{stat.title}</div>
                                    <div style={{ color: "var(--text)", fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>{stat.val}</div>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2C: Continuous Compliance */}
            <section id="the-agent-p3" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                        <div className="gsap-img-reveal">
                            <Image
                                src="/images/industries/legal-dw-discovery.png"
                                alt="AI Legal Compliance Monitoring"
                                width={800}
                                height={600}
                                style={{ borderRadius: "32px", width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
                            />
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem" }}>Continuous Monitoring</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Claude monitors your entire portfolio, flagging <strong>licenses expiring in 60 days</strong> and notice periods for re-negotiation. It tracks your policy library against new regulations, eliminating <strong>80% of "surprise" compliance issues</strong>.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Claude is your <strong>paralegal on steroids</strong>. It does the heavy lifting (reading, summarising, categorising); solicitors do the thinking (judgment calls, negotiation, escalated decisions).
                                </p>
                                <p>
                                    This is not AI replacing lawyers. It's AI freeing lawyers to do lawyering while the agent maintains a permanent, objective legal memory for the entire firm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3A: Holistic Context */}
            <section id="claude-p1" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px", textAlign: "center", marginBottom: "5rem" }}>
                    <span className="section-label" style={{ color: "var(--primary)" }}>Intelligence Layer (Part 1)</span>
                    <h2 className="section-title" style={{ color: "var(--text)" }}>How Claude Powers Legal AI</h2>
                </div>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "4rem" }}>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Holistic Contractual Context</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Claude 3.5 Sonnet is purpose-built for legal work. Its <strong>200K token context window</strong> (roughly 150 pages) means a single API call holds an entire SPA, your company's standard terms, and relevant precedents.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Most legal documents fit in one API call. This is critical: a 200-page agreement doesn't require chunking; Claude reads it holistically and understands the <strong>interdependencies between clauses</strong>.
                                </p>
                                <p>
                                    If Clause 3 says "Party A indemnifies Party B for all losses," and Clause 7 says "except for consequential damages," Claude understands that the indemnity is actually limited, ensuring no nuance is lost.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal">
                            <Image
                                src="/images/agents/legal-holistic-context.png"
                                alt="Holistic Contractual Context Understanding via LLM"
                                width={800}
                                height={600}
                                style={{ borderRadius: "32px", width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3B: Reasoning & Accuracy Benchmarks */}
            <section id="claude-p2" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            {[
                                { title: "Drafting Analysis", val: "98% Sharpness", desc: "Identifies unenforceable terms and asymmetric indemnity risks." },
                                { title: "Market Standard", val: "Benchmarked", desc: "Flags terms that deviate from typical balanced market practice." },
                                { title: "Review Benchmark", val: "Junior+", desc: "More accurate than a 2-year junior; significantly faster than a senior." }
                            ].map((stat, i) => (
                                <div key={i} className="gsap-card" style={{ padding: "2rem", background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                                    <div style={{ color: "var(--primary)", fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>{stat.title}</div>
                                    <div style={{ color: "var(--text)", fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>{stat.val}</div>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Reasoning & Accuracy</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Claude's reasoning capability is sharp. It understands <strong>contractual logic</strong>, <strong>drafting intent</strong>, and <strong>legal principles</strong>. It doesn't just highlight words; it understands structure and consequence.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Accuracy on routine contract reviews is <strong>96-98%</strong>. Edge cases (highly unusual terms or novel legal concepts) are automatically flagged for solicitor review.
                                </p>
                                <p>
                                    Claude is more accurate than a junior associate with 2 years' experience, and significantly faster than either. It handles the heavy lifting; solicitors do the judgment calls.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3C: Compelling Economics */}
            <section id="claude-p3" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "4rem" }}>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Compelling Economics</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    The financial model is disruptive. Claude via API costs roughly <strong>£0.15-0.25 per review</strong>, compared to a junior associate at £40+ per hour.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    For due diligence: Claude can process <strong>100 documents</strong> for <strong>£10-20 total</strong>, versus £2,000-4,000 in manual associate time.
                                </p>
                                <p>
                                    The typical deployment model is high-efficiency: Claude does the first-pass analysis; a qualified solicitor focuses strictly on high-value negotiation and final escalation.
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            {[
                                { title: "Cost per Review", val: "£0.20 Avg", desc: "Typical cost including the full 150-page context window." },
                                { title: "Due Diligence", val: "£15.00 Total", desc: "Batch processing for 100 documents assuming 50-80 API calls." },
                                { title: "Deployment", val: "Solicitor-Led", desc: "AI handles the first-pass; humans handle the final judgment." }
                            ].map((stat, i) => (
                                <div key={i} className="gsap-card" style={{ padding: "2rem", background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                                    <div style={{ color: "var(--primary)", fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>{stat.title}</div>
                                    <div style={{ color: "var(--text)", fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>{stat.val}</div>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4A: The RAG Semantic Index */}
            <section id="memory-p1" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px", textAlign: "center", marginBottom: "5rem" }}>
                    <span className="section-label" style={{ color: "var(--primary)" }}>Institutional Memory (Part 1)</span>
                    <h2 className="section-title" style={{ color: "var(--text)" }}>How LangChain RAG Enables Legal Memory</h2>
                </div>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                        {/* Image placeholder */}
                        <div className="gsap-img-reveal">
                            <Image
                                src="/images/agents/legal-rag-index.png"
                                alt="Semantic RAG Vector Index Representation"
                                width={800}
                                height={600}
                                style={{ borderRadius: "32px", width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", boxShadow: "var(--card-shadow)" }}
                            />
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>The RAG Semantic Index</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    A lawyer's power comes from memory: precedent contracts, case law, and your firm's approved terms. Claude is smart, but it doesn't have <strong>institutional memory</strong>. That's where <strong>LangChain RAG</strong> comes in.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    You maintain a <strong>semantic index</strong> of templates, precedents, and historical analysis. When an NDA arrives, LangChain retrieves the 3 most similar signed contracts and relevant FCA guidance.
                                </p>
                                <p>
                                    Claude then analyzes the new document: <em>"This NDA is 85% similar to the Partner A deal. Here's what's different. Last time, you flagged issue Q which is present here again."</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4B: Institutional Memory at Scale */}
            <section id="memory-p2" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "4rem" }}>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Pattern Recognition at Scale</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    This is memory at scale. You're not relying on a paralegal remembering past deals; <strong>the system remembers</strong>. Accuracy improves as Claude identifies patterns in your risk appetite.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    You consistently resist liability caps above X or require specific audit rights; Claude learns this. Over 6 months, your library becomes <strong>hyper-tailored to your business</strong>.
                                </p>
                                <p>
                                    Risk decisions are more consistent because the system sees historical precedents. New contracts are reviewed faster because the AI operates with your full institutional context.
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            {[
                                { title: "Semantic Index", val: "Vector DB", desc: "Templates, precedents, and FCA/ICO regulatory guidance stored as vectors." },
                                { title: "Consistency", val: "Pattern AI", desc: "System learns your specific risk profile for liability caps and audit rights." },
                                { title: "Memory", val: "Institutional", desc: "No more relying on manual memory; every past deal is indexed and retrievable." }
                            ].map((stat, i) => (
                                <div key={i} className="gsap-card" style={{ padding: "2rem", background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                                    <div style={{ color: "var(--primary)", fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>{stat.title}</div>
                                    <div style={{ color: "var(--text)", fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>{stat.val}</div>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4C: Automated Deployment & Cost */}
            <section id="memory-p3" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            {[
                                { title: "Integration", val: "DMS Sync", desc: "Directly connects with iManage, Clio, or shared folders/emails." },
                                { title: "Operating Cost", val: "£60 - £250/mo", desc: "Storage + API cost depending on firm-wide document volume." },
                                { title: "Initial Ramp", val: "4-8 Hours", desc: "To curate initial precedent library; system then learns automatically." }
                            ].map((stat, i) => (
                                <div key={i} className="gsap-card" style={{ padding: "2rem", background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                                    <div style={{ color: "var(--primary)", fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>{stat.title}</div>
                                    <div style={{ color: "var(--text)", fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>{stat.val}</div>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Implementation & Unit Costs</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Implementation is seamless. LangChain integrates with your <strong>Document Management System</strong> (iManage, Clio, or shared folders). The entire flow is <strong>fully automatic</strong>.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Costs are predictable: vector storage at ~£50-200/month and LangChain API calls at ~£10-50. The only one-time cost is the <strong>4-8 hours</strong> needed to curate your initial library.
                                </p>
                                <p>
                                    The benefit is twofold: unshakeable institutional memory and absolute decision consistency. You transition from a reactive posture to a proactive, AI-augmented legal practice.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5A: Operational Velocity */}
            <section id="outcomes-p1" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px", textAlign: "center", marginBottom: "5rem" }}>
                    <span className="section-label">Business Outcomes</span>
                    <h2 className="section-title">Hours Saved & Turnaround Improved</h2>
                </div>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "4rem" }}>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Operational Velocity</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    A contract review that took 3 hours now takes <strong>45 minutes</strong> (45 minutes to read Claude's analysis, think, and prepare feedback; Claude does the 2.5 hours of grunt work).
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    For a law firm reviewing 100 contracts per month, that's 250 hours/month saved—the equivalent of <strong>6 FTE</strong>. In-house legal teams managing 20 agreements save 60 hours per month.
                                </p>
                                <p>
                                    Due diligence exercises (100 documents) that once took 2 weeks now take <strong>3-4 days</strong>. Remaining time is spent on judgment calls, not document reading.
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            {[
                                { title: "Review Speed", val: "75% Faster", desc: "3-hour manual reviews reduced to 45 minutes of solicitor-led oversight." },
                                { title: "Capacity Gain", val: "6 FTE Equiv.", desc: "Based on 100 contracts/month. Redirect talent to high-value strategy." },
                                { title: "DD Acceleration", val: "2wk → 4 Days", desc: "Massive document bundle processing with near-instant extraction." }
                            ].map((stat, i) => (
                                <div key={i} className="gsap-card" style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "24px", border: "1px solid var(--border)" }}>
                                    <div style={{ color: "var(--primary)", fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>{stat.title}</div>
                                    <div style={{ color: "var(--text)", fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>{stat.val}</div>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5B: Negotiation Sharpness & Risk Reduction */}
            <section id="outcomes-p2" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            {[
                                { title: "Response Time", val: "2 Minutes", desc: "AI analysis ready instantly. Feedback delivered to client same evening." },
                                { title: "Dispute Drop", val: "40% Fewer", desc: "Fewer litigation risks from poorly drafted or inconsistent clauses." },
                                { title: "Momentum", val: "Zero Lag", desc: "Negotiations don't stall in queues. Feedback loops close in hours." }
                            ].map((stat, i) => (
                                <div key={i} className="gsap-card" style={{ padding: "2rem", background: "var(--bg)", borderRadius: "24px", border: "1px solid var(--border)" }}>
                                    <div style={{ color: "var(--primary)", fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>{stat.title}</div>
                                    <div style={{ color: "var(--text)", fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>{stat.val}</div>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Negotiation & Risk</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Traditional turnaround is slow; our process analyzes is 2 minutes. Feedback for a 5pm contract can be sent by 7pm. Negotiate from a position of <strong>knowledge, not guessing</strong>.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Compliance issues are caught earlier, and institutional consistency means junior lawyers aren't inventing solutions—they're following the firm's established approach.
                                </p>
                                <p>
                                    One law firm reports a <strong>40% reduction in disputes</strong> arising from poorly-drafted contracts after deploying the AI memory layer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5C: Economic Impact & ROI */}
            <section id="outcomes-p3" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "4rem" }}>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Economic Impact</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    In-house legal teams processing high volumes save <strong>£100k-250k per year</strong> in outsourcing fees. The agent costs only £200-500/year in API and infrastructure.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Closed deals occur faster because you're not waffling on acceptability. One counsel reports closing an SPA <strong>3 weeks faster</strong> through Claude's confident analysis.
                                </p>
                                <div style={{ background: "var(--primary)", padding: "2.5rem", borderRadius: "24px", color: "white" }}>
                                    <h4 style={{ fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>Bottom Line: Payback is Immediate</h4>
                                    <p style={{ margin: 0, opacity: 0.9 }}>Reallocate talent to relationship-building while your digital worker handles technical document volume.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-img-reveal">
                            <Image
                                src="/images/industries/legal-casestudy.png"
                                alt="Legal AI Economic Outcomes"
                                width={800}
                                height={600}
                                style={{ borderRadius: "32px", width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6A: Governance & Responsibility */}
            <section id="compliance-p1" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px", textAlign: "center", marginBottom: "5rem" }}>
                    <span className="section-label">Ethics & Compliance</span>
                    <h2 className="section-title">SRA Compliance: AI as Assistant, Not Replacement</h2>
                </div>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                        <div className="gsap-img-reveal">
                            <Image
                                src="/images/agents/legal-governance-oversight.png"
                                alt="SRA Compliance and Executive Lawyer Oversight"
                                width={800}
                                height={600}
                                style={{ borderRadius: "32px", width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
                            />
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Governance & Oversight</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    The SRA (Solicitors Regulation Authority) guidance is clear: AI can assist, but <strong>solicitors remain responsible</strong> for the work. You cannot outsource judgement to an algorithm.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Every output from Claude is reviewed by a qualified solicitor before it leaves the firm. Claude is a research tool, not a decision-maker.
                                </p>
                                <p>
                                    When an analysis goes external, the solicitor's name is on it—ensuring human accountability and regulatory alignment at every step.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6B: The Defensive Audit Trail */}
            <section id="compliance-p2" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "4rem" }}>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>The Defensive Audit Trail</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Every Claude analysis is logged: date, time, requester, document analysed, and exactly what the solicitor changed in the final output.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    If a dispute arises 2 years later, you can demonstrate: <em>"Here is what the AI said, here is what we modified, and here is the solicitor who signed off."</em>
                                </p>
                                <p>
                                    This creates a robust, <strong>defensible evidence trail</strong> that exceeds manual process documentation in consistency and detail.
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            {[
                                { title: "Logging", val: "Continuous", desc: "Every API call and solicitor interaction is captured for the firm's permanent record." },
                                { title: "Defensibility", val: "Evidence-Led", desc: "Easily prove that human oversight was applied to every AI-assisted draft." },
                                { title: "PI Ready", val: "Insurable", desc: "Audit trails support Professional Indemnity (PI) requirements for generative AI work." }
                            ].map((stat, i) => (
                                <div key={i} className="gsap-card" style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "24px", border: "1px solid var(--border)" }}>
                                    <div style={{ color: "var(--primary)", fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>{stat.title}</div>
                                    <div style={{ color: "var(--text)", fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>{stat.val}</div>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6C: Privacy, Bias & Ethics */}
            <section id="compliance-p3" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                        <div className="gsap-img-reveal">
                            <Image
                                src="/images/agents/legal-privacy-guardrails.png"
                                alt="Private Legal Sector AI Data Privacy Guardrails"
                                width={800}
                                height={600}
                                style={{ borderRadius: "32px", width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
                            />
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Privacy & Ethical Guardrails</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Confidentiality is paramount. We can run the agent on your <strong>private cloud infrastructure</strong>, ensuring no external vendor ever sees your contracts.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    We coach solicitors on bias awareness: Claude can miss nuances. Our checklists ensure you verify carve-outs and precedent practice alongside AI reports.
                                </p>
                                <div style={{ background: "var(--primary)", padding: "2.5rem", borderRadius: "24px", color: "white" }}>
                                    <h4 style={{ fontWeight: 800, fontSize: "1.4rem", marginBottom: "1rem" }}>SRA Readiness Guaranteed</h4>
                                    <p style={{ margin: 0, opacity: 0.9 }}>We check all five boxes: Human review, Audit trails, Confidentiality, Tool oversight, and Limitation awareness.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7A: Case Study - The Bottleneck */}
            <section id="case-study-p1" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px", textAlign: "center", marginBottom: "5rem" }}>
                    <span className="section-label">Real-World Impact</span>
                    <h2 className="section-title">Case Study: Mid-Tier UK Law Firm</h2>
                </div>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "4rem" }}>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>The M&A Bottleneck</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    A mid-tier firm (35 lawyers, 8 in M&A) was handling 12 transactions per year. Due diligence had become a critical bottleneck.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    A typical deal required 2-3 weeks of manual review across property, environmental, and IP files—tying up 2 senior associates and a paralegal full-time.
                                </p>
                                <p>
                                    Partners needed faster turnaround times to identify risk markers earlier and free up their senior talent for high-level negotiation strategy.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-card" style={{ padding: "3rem", background: "var(--bg-secondary)", borderRadius: "32px", border: "1px solid var(--border)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div style={{ marginBottom: "2rem" }}>
                                <div style={{ fontSize: "0.9rem", color: "var(--primary)", fontWeight: 800, marginBottom: "0.5rem" }}>CLIENT PROFILE</div>
                                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)" }}>Mid-Tier UK M&A Practice</div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                                <div>
                                    <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--text)" }}>35</div>
                                    <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Total Lawyers</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--text)" }}>12</div>
                                    <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Deals / Year</div>
                                </div>
                                <div style={{ gridColumn: "span 2" }}>
                                    <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#EF4444" }}>3-Week Bottleneck</div>
                                    <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Manual Document Review</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7B: Case Study - AI Intelligence */}
            <section id="case-study-p2" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "4rem" }}>
                        <div className="gsap-img-reveal">
                            <Image
                                src="/images/agents/legal-ai-discovery.png"
                                alt="Deep Due Diligence & M&A AI Data Discovery"
                                width={800}
                                height={600}
                                style={{ borderRadius: "32px", width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
                            />
                        </div>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>AI-Driven Discovery</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    We deployed a Legal agent integrated with their iManage system. LangChain automatically indexes new deal files, and Claude runs preliminary risk analysis.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Immediate Outcome:</strong> Due diligence time dropped from 3 weeks to 5 days. Review labour was reduced by 80%, allowing associates to focus on client advice.
                                </p>
                                <p>
                                    Risk identification improved significantly: Claude caught a contingent liability buried in employment files that junior associates had previously missed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7C: Case Study - Financial ROI */}
            <section id="case-study-p3" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "4rem" }}>
                        <div className="gsap-reveal">
                            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Financial ROI & Scale</h3>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    The initial investment of £18,000 for the 8-week build and RAG setup achieved <strong>payback in just 1.2 months</strong>.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    With ongoing costs of only £800/month, the firm is now targeting one additional deal per year, yielding £150k+ in incremental revenue.
                                </p>
                                <p>
                                    From Year 2 onwards, the firm projects a <strong>£140,400 net annual benefit</strong>, transforming their M&A profit margins while improving risk quality.
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            {[
                                { title: "Upfront Investment", val: "£18,000", desc: "8-week build with full LangChain setup and library curation." },
                                { title: "Time to Payback", val: "1.2 Months", desc: "Immediate ROI through labor savings and deal velocity." },
                                { title: "Net Annual Benefit", val: "£140k+", desc: "Projected annual gain after all platform operating costs." }
                            ].map((stat, i) => (
                                <div key={i} className="gsap-card" style={{ padding: "2rem", background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                                    <div style={{ color: "var(--primary)", fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>{stat.title}</div>
                                    <div style={{ color: "var(--text)", fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>{stat.val}</div>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>{stat.desc}</p>
                                </div>
                            ))}
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
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
                    <div className="gsap-reveal">
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 950, marginBottom: "2rem" }}>
                            Ready to Deploy Your <span style={{ color: "var(--primary)" }}>Legal Agent?</span>
                        </h2>
                        <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem auto", lineHeight: 1.6 }}>
                            Start with a 4-week contract review pilot. No technical overhead, SRA-compliant security, and immediate ROI.
                        </p>
                        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                            <Link href="/demo/legal" className="btn-primary" style={{ padding: "1.2rem 2.5rem", background: "var(--primary)", color: "white", borderRadius: "12px", textDecoration: "none", fontWeight: 700 }}>
                                Request Legal Agent Demo
                            </Link>
                            {/* <Link href="/case-studies/legal-pdf" style={{ padding: "1.2rem 2.5rem", background: "var(--card-bg)", color: "var(--text)", borderRadius: "12px", textDecoration: "none", fontWeight: 700, border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                                Download Legal Case Study
                            </Link> */}
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
                            { title: "Finance Agents", href: "/finance-agents", desc: "Automated reconciliation" },
                            { title: "Sales Agents", href: "/sales-agents", desc: "CRM automation" },
                            { title: "Operations Agents", href: "/operations-agents", desc: "Supply chain & logistics" },
                            { title: "AI Assessment", href: "/assessment", desc: "Calculate your readiness" },
                            { title: "Case Studies", href: "/case-studies", desc: "Real ROI from UK firms" },
                            { title: "Home", href: "/", desc: "Platform overview" }
                        ].map((link, i) => (
                            <Link key={i} href={link.href} style={{
                                padding: "1.5rem",
                                background: "var(--card-bg)",
                                borderRadius: "16px",
                                border: "1px solid var(--border)",
                                textDecoration: "none",
                                transition: "all 0.3s ease",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                fontWeight: 700,
                                color: "var(--text)",
                                boxShadow: "var(--card-shadow)"
                            }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.transform = "none"; }}
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
