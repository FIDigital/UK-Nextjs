"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
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

export default function SalesAgentsClient() {
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
            q: "How does the agent know my ideal customer profile (ICP)? Do I have to tell it?",
            a: "You give it a simple written description: 'We sell to SaaS companies, £5-50m revenue, with 20-100 employees, in vertical: B2B Sales Tools, using AWS, and have recently raised funding or hired heavily in Engineering.' That's your ICP. Claude reads it and scores leads against it. You can refine the ICP over time as you close deals; we analyse your closed-won deals and recommend adjustments. Most teams refine their ICP after 4-6 weeks of live operation."
        },
        {
            q: "Can the agent send emails without looking spammy or robotic?",
            a: "Yes. The agent crafts personalised emails, not template blasts. It reads company data (recent hiring, funding, tech stack), prospect role (VP Engineering vs Sales Director), and trigger signal (congrats on funding). Then Claude composes a natural email with specific references. Email 1 might say: 'Hi Sarah, saw Acme raised £5m Series A last month and immediately hired 3 cloud engineers. Your infrastructure team is probably swamped. Most teams at your scale use [X solution] to solve [Y problem]. Curious if it's on your radar.' That's specific, relevant, and has a clear angle. Open rates: 35-42% (industry average: 20-25%). Click rates: 8-12% (industry average: 2-3%)."
        },
        {
            q: "What if we have a complex, long sales cycle? Can the agent handle multiple touchpoints over months?",
            a: "Absolutely. You define your sales cycle (e.g., 90-180 day enterprise deals). The agent spaces outreach accordingly: immediate outreach sequence (days 1, 3, 7), then monthly check-ins if no response, then quarterly nurture if still unresponsive. For active opportunities (ones your rep is actively working), the agent monitors and reminds about stalled deals. For passive pipeline (leads scored high but not yet contacted), the agent runs a gentle nurture sequence—case studies, industry reports, webinar invites—without aggressive selling."
        },
        {
            q: "Does the agent follow CAN-SPAM, GDPR, and UK email regulations?",
            a: "Yes. The agent includes an unsubscribe link in every email (GDPR requirement). It respects opt-out requests immediately—if a recipient unsubscribes, they're added to a global DND list and never contacted again. It only emails leads you have consent for (inbound submissions, bought lists with consent, LinkedIn contacts if via approved partner API). For UK/EU leads, it doesn't send unsolicited B2B marketing unless you have prior business relationship or legitimate interest. We advise on compliance during Build; your legal team approves before go-live."
        },
        {
            q: "What if we change our CRM or outreach tool mid-year?",
            a: "The agent is CRM-agnostic. If you swap Zoho CRM for Salesforce, we disconnect from Zoho and reconnect to Salesforce. Data exports from old CRM, imports to new CRM, agent resumes operation. Migration takes 1-2 weeks. No loss of lead data or history. We maintain an audit trail throughout."
        },
        {
            q: "Can reps override the agent? What if they don't like the score or outreach sequence?",
            a: "Reps have full override. A lead scored 65 might have context only your rep knows ('I already pitched them last year, waste of time'). Rep can lower the score or move to DND. Outreach sequences are customisable: rep can swap email #2 for a different case study, change send times, skip the LinkedIn message if they prefer a phone call. The agent learns from rep overrides. If a rep consistently ignores agent-qualified leads, we flag that and refine the scoring logic. The goal is to augment rep judgment, not replace it."
        },
        {
            q: "How does the agent handle international leads (US, APAC, EU)? Does language matter?",
            a: "The agent handles global leads. Company research APIs (Crunchbase, LinkedIn) work worldwide. Email copy is drafted in the prospect's language if you specify (Claude supports 20+ languages). Email send times are optimised to prospect's timezone (afternoon local time typically has better open rates). For US/EU/APAC, we configure enrichment data sources available in those regions. Non-English markets: email copy quality is slightly lower than English (model performance varies by language), but still effective. Most clients focus on English-speaking markets (US, UK, Australia) first, then expand."
        },
        {
            q: "What metrics should we track to know if the agent is working?",
            a: "Key metrics: (1) Lead score calibration—are high-scored leads converting at higher rates than low-scored leads? (2) Response time—how fast from lead arrival to first touch? (3) Outreach volume—how many qualified conversations per rep per month? (4) Conversion rate by score band (leads 80+ should have 25%+ conversion). (5) Pipeline momentum—are deals moving faster? (6) Forecast accuracy—how close is your forecast to actual outcomes? We set up dashboards (Looker, Tableau, or Metabase connected to your CRM) to track these weekly. Most teams see conversion rate lift by week 4."
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
                    .hero-background-wrapper {
                        width: 65%;
                    }
                    .responsive-grid.zig { grid-template-columns: 1fr 1.4fr; }
                    .responsive-grid.zag { grid-template-columns: 1.4fr 1fr; }
                    .hero-grid { grid-template-columns: 1.2fr 1fr; }
                    .outcomes-grid { grid-template-columns: 1.2fr 1fr; }
                    .metrics-grid { grid-template-columns: 1fr 1fr; }
                    .links-grid { grid-template-columns: repeat(3, 1fr); }
                }
                @media (min-width: 1200px) {
                    .metrics-grid { grid-template-columns: repeat(3, 1fr); }
                    .links-grid { grid-template-columns: repeat(5, 1fr); }
                }
                .brand-logo-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                    gap: 1.25rem;
                }
                .brand-logo-card {
                    background: #ffffff;
                    aspect-ratio: 1/1;
                    border-radius: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 1.5rem;
                    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05), 0 10px 30px -5px rgba(0,0,0,0.1);
                    transition: transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28), box-shadow 0.3s ease;
                }
                .brand-logo-card:hover {
                    transform: translateY(-8px) scale(1.05);
                    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05), 0 20px 40px -10px rgba(0,0,0,0.2);
                    z-index: 2;
                }
                .brand-logo-img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    filter: none !important;
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
                        src="/images/agents/sales-agent-hero.png"
                        alt="Sales AI Agents"
                        fill
                        style={{ objectFit: "cover", objectPosition: "left center", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }}
                        priority
                    />
                </div>

                <div className="container hero-container" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "100%", maxWidth: "1250px", margin: "0 auto" }}>
                    <div className="hero-title-line" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.2rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "100px", border: "1px solid rgba(16, 185, 129, 0.2)", marginBottom: "2.5rem", color: "#10b981", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.05em" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981" }} />
                        SALES AUTOMATION AGENTS
                    </div>
                    <h1 className="hero-title-line" style={{ fontSize: "clamp(2.5rem, 8vw, 4.2rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em", color: "var(--text)" }}>
                        Your Sales Team <br /> Just Got <span style={{ color: "var(--primary)" }}>30 Extra Hours</span> Per Week
                    </h1>
                    <p className="hero-subtitle" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)", color: "var(--text-muted)", marginBottom: "2.5rem", lineHeight: 1.6, maxWidth: "700px" }}>
                        Meet your Sales Digital Worker: automated lead research, intelligent outreach sequencing, CRM hygiene, and pipeline accuracy—24/7.
                    </p>

                    <div className="hero-cta" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                        <Link href="/demo/sales" style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            padding: "1rem 2rem", background: "#4F46E5", color: "white",
                            fontWeight: 700, borderRadius: "12px", textDecoration: "none",
                            boxShadow: "0 10px 30px rgba(79, 70, 229, 0.3)", transition: "all 0.3s ease"
                        }}>
                            See Sales Agent Demo <ArrowRight size={20} />
                        </Link>
                        <Link href="/case-studies/sales-pdf" style={{
                            display: "inline-flex", alignItems: "center", justifyContent: "center",
                            padding: "1rem 2rem", background: "#0F172A", color: "white",
                            fontWeight: 700, borderRadius: "12px", textDecoration: "none",
                            transition: "all 0.3s ease",
                            border: "1px solid rgba(255,255,255,0.1)"
                        }}>
                            Download Sales Case Study
                        </Link>
                    </div>
                </div>
            </header>

            {/* Section 1A: The Problem (Zig) */}
            <section id="problem" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <img src="/images/industries/sales-dw-problem.png" alt="The Problem - Sales rep at desk overwhelmed with browser tabs, email notifications, spreadsheets" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "32px" }} />
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">The Problem</span>
                            <h2 className="section-title">Your Sales Team Is Drowning in Admin</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    A modern B2B sales rep spends 40-50% of working time on admin instead of selling. Monday morning: 50 inbound leads land in the inbox—some qualified, most noise. The sales rep manually Googles each one, checks LinkedIn, and hunts for buying signals.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Tuesday: CRM updates, email hunting, formatting lead info. Wednesday: outreach sequencing—who to call first, what's their trigger event, what's the angle.
                                </p>
                                <p>
                                    Result: The rep talks to 6-8 qualified prospects per week. A competitor with an automated lead qualification and outreach system is tracking and talking to 15-20. Conversion rates drop because prospects invariably go cold while you're busy doing manual administrative triage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1B: Pipeline Confusion (Zag) */}
            <section id="pipeline-reality" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container">
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">The Reality</span>
                            <h2 className="section-title">Dirty CRMs and Stalled Pipelines</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Pipeline accuracy is abysmal—your CRM shows a £2m pipeline, but 40% of it is stalled, wildly unqualified, or duplicated data. The Sales Manager spends Monday morning doing pure data hygiene (deduplicating contacts, deleting old leads, updating job titles) instead of coaching their team.
                                </p>
                                <p style={{ marginBottom: "1.5rem", fontWeight: 700, color: "var(--text)" }}>
                                    This isn't a productivity problem; it's a revenue problem.
                                </p>
                                <p>
                                    Every hour your rep spends googling is an hour a prospect sits unqualified. The Sales agent decisively solves this by continuously researching leads, dynamically qualifying them, rapidly running outreach sequences, and monitoring pipeline health—24/7.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <img src="/images/industries/sales-dw-lead.png" alt="Contrast - Clean automated CRM pipeline vs cluttered manual CRM pipeline" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "32px" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2A: Autonomous Enrichment (Zig) */}
            <section id="enrichment" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="section-label">Capabilities</span>
                        <h2 className="section-title">Meet Your Sales Digital Worker</h2>
                    </div>
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <img src="/images/agents/sales-dq-qualification.png" alt="Autonomous Lead Qualification Interface" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "32px" }} />
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Digital Worker Profile</span>
                            <h2 className="section-title">Autonomous Lead Qualification</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Your Sales agent works while you sleep. An inbound lead arrives via your website form, LinkedIn, or an imported list.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Step 1: Enrichment.</strong> It deeply researches the company (Crunchbase, LinkedIn, Companies House), the individual (tenure, recent activity), and pulling firmographic data (revenue, funding, tech stack). It flags buying signals like leadership changes or hiring sprees—all within 90 seconds.
                                </p>
                                <p>
                                    <strong>Step 2: Qualification.</strong> Claude reads the research plus your precise sales playbook and scores the lead 0-100. The agent auto-assigns high-scoring leads (80+) directly to specific reps while simultaneously routing low-scoring metrics into a passive nurture sequence. This alone eliminates 30% of manual qualify/disqualify admin overnight.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2B: Outreach Sequence (Zag) */}
            <section id="outreach" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container">
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Outreach Engine</span>
                            <h2 className="section-title">Intelligent Outreach Sequencing</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Step 3: Outreach Sequence.</strong> For high-scoring leads, the agent meticulously crafts a personalised multi-touch sequence.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Your first email isn't generic; it's a warm introduction mentioning their specific trigger (e.g., funding or rapid scaling). Email 2 follows three days later with a hyper-focused case study from a peer company in their specific sector. Next, an automated LinkedIn invitation incorporates a targeted value hook before a final 7-day last-touch conversational offer via email.
                                </p>
                                <p>
                                    A Sales rep manually sending similar sequences might touch 8-12 prospects a week. Your digital agent rigorously touches 80-120 qualified prospects a week, logging every touch securely.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <img src="/images/agents/sales-outreach-sequence.png" alt="AI-Generated Intelligent Outreach Sequence Flow" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "32px" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2C: Pipeline Sync (Zig) */}
            <section id="pipeline" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <img src="/images/agents/sales-pipeline-visibility.png" alt="Total Sales Pipeline Dashboard sync" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "32px" }} />
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">CRM Sync & Intelligence</span>
                            <h2 className="section-title">Total Pipeline Visibility</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Step 4: CRM Sync.</strong> All research, engagement scores, and outreach parameters automatically update your underlying databases—Zoho CRM, Salesforce, HubSpot, or Pipedrive.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Step 5: Pipeline Intelligence.</strong> The agent aggressively monitors your entire active pipeline. Deal hasn't moved in 14 days? An automated email pings the rep with context detailing the stall and recommending a nudge strategy. Deals decaying over 60 days flag immediately for critical win/loss analysis.
                                </p>
                                <p>
                                    Result: reps focus on closing conversations, not executing admin. Your pipeline stays rigorously clean because the overarching agent manages the weekly hygiene and compliance loops without friction constraints.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3A: Orchestration (Zag) */}
            <section id="orchestration-1" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="section-label">Architecture</span>
                        <h2 className="section-title">How It Works: The Orchestration</h2>
                    </div>
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">How It Works</span>
                            <h2 className="section-title">Data Enrichment via Trigger Architectures</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    The Sales agent relies on an advanced n8n orchestration loop utilizing Claude for tactical copywriting and GPT-4o for complex entity research. Trigger: a lead arrives natively via web form or direct Apollo/LinkedIn API pushes.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Step 1: Data Enrichment.</strong> The agent instantly queries Crunchbase arrays for hard revenue and technical tech stacks. Simultaneously, third-party LinkedIn enrichment hooks locate recent departmental hires, crossing referenced UK Companies House metrics in under 60 seconds.
                                </p>
                                <p>
                                    <strong>Step 2: AI Qualification.</strong> Claude reads the aggregate JSON configuration—matching specific targets like 'ideal company size' and 'buying triggers'. It then assigns a detailed probability score directly back to your team.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <img src="/images/agents/sales-data-enrichment.png" alt="Data Enrichment Architecture - High-speed data conduits pulling from Crunchbase, LinkedIn" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "32px" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3B: Copywriting (Zig) */}
            <section id="orchestration-2" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <img src="/images/agents/sales-ai-copywriting.png" alt="Dynamic AI Copywriting Structure - generating ultra-personalized sequences" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "32px" }} />
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">AI Driven Sequence</span>
                            <h2 className="section-title">Copywriting & Multi-Touch Flow</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Step 3: Tactical Copywriting.</strong> If a score exceeds 75, Claude writes extremely personalized bodies: "Congrats—Acme's growing fast by adding 3 cloud engineers."
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    These concise, highly personalized hooks routinely benchmark 35-40% open rates across our integrations compared to generic industry spam.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Step 4: Orchestration.</strong> The node sequences space these texts deliberately (Day 1, Day 3, Day 7). Wait commands isolate behaviors—if your prospect clicks a provided pricing link or downloads a case study attachment, the agent's sequence pauses cleanly, prompting the human representative to aggressively pursue the now warmly activated lead directly.
                                </p>
                                <p>
                                    <strong>Step 5: CRM Update.</strong> All data—company research, lead score, email content, send times, open rates, click rates—flows into your CRM (Zoho CRM, Salesforce, HubSpot, Pipedrive) via native connectors or REST APIs. Your rep sees a pre-researched lead with a clear next action. The entire loop, end-to-end, takes 90 seconds. Manual process: 12-15 minutes per lead. Efficiency gain: 95% faster, same or better quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Business Outcomes: Revenue Impact in Numbers (Zag) */}
            <section id="outcomes" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="section-label">Impact</span>
                        <h2 className="section-title">Business Outcomes: Revenue Impact in Numbers</h2>
                    </div>

                    <div className="gsap-reveal metrics-grid">
                        <div className="gsap-card" style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "32px", border: "1px solid var(--border)", display: "flex", flexDirection: "column", height: "100%" }}>
                            <h4 style={{ color: "var(--primary)", fontWeight: 900, marginBottom: "0.5rem", fontSize: "1.7rem" }}>20-35%</h4>
                            <div style={{ fontWeight: 800, marginBottom: "0.5rem", color: "white", fontSize: "1.2rem" }}>Conversion Uplift</div>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, flexGrow: 1 }}>Leads that go through automated qualification and research see a 20-35% higher conversion rate than manually qualified leads. Why? Because your rep knows the lead is real, the company is a fit, and the trigger is fresh. Less time wasted on dead-end conversations.</p>
                        </div>
                        <div className="gsap-card" style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "32px", border: "1px solid var(--border)", display: "flex", flexDirection: "column", height: "100%" }}>
                            <h4 style={{ color: "var(--primary)", fontWeight: 900, marginBottom: "0.5rem", fontSize: "1.7rem" }}>&lt;2 Min</h4>
                            <div style={{ fontWeight: 800, marginBottom: "0.5rem", color: "white", fontSize: "1.2rem" }}>Sales Velocity</div>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, flexGrow: 1 }}>Average time from inbound lead to first touch drops from 4-6 hours (manual) to &lt;2 minutes (agent). Early response matters in B2B—HubSpot data shows response time under 5 minutes increases conversion by 30%. Your agent ensures you're first, always.</p>
                        </div>
                        <div className="gsap-card" style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "32px", border: "1px solid var(--border)", display: "flex", flexDirection: "column", height: "100%" }}>
                            <h4 style={{ color: "var(--primary)", fontWeight: 900, marginBottom: "0.5rem", fontSize: "1.7rem" }}>60-80</h4>
                            <div style={{ fontWeight: 800, marginBottom: "0.5rem", color: "white", fontSize: "1.2rem" }}>Added Conversations</div>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, flexGrow: 1 }}>A rep freed from 15-18 hours per week of manual admin can take 60-80 additional qualified conversations per month. At average conversion rates and deal values, that's an additional £225k-£1m per month in pipeline for a single rep.</p>
                        </div>
                        <div className="gsap-card" style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "32px", border: "1px solid var(--border)", display: "flex", flexDirection: "column", height: "100%" }}>
                            <h4 style={{ color: "var(--primary)", fontWeight: 900, marginBottom: "0.5rem", fontSize: "1.7rem" }}>85-90%</h4>
                            <div style={{ fontWeight: 800, marginBottom: "0.5rem", color: "white", fontSize: "1.2rem" }}>Forecast Accuracy</div>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, flexGrow: 1 }}>Your CRM stops being a fiction novel. Stalled deals get identified within 2-3 days, not discovered at month-end. Your forecast improves because you have robust qualitative visibility. Teams report forecast accuracy improving from 65-70% up to 85-90%.</p>
                        </div>
                        <div className="gsap-card" style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "32px", border: "1px solid var(--border)", display: "flex", flexDirection: "column", height: "100%" }}>
                            <h4 style={{ color: "var(--primary)", fontWeight: 900, marginBottom: "0.5rem", fontSize: "1.7rem" }}>25-40%</h4>
                            <div style={{ fontWeight: 800, marginBottom: "0.5rem", color: "white", fontSize: "1.2rem" }}>Lower CPA</div>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, flexGrow: 1 }}>A £50k lead generation budget (ads, events, tools) goes structurally further because more leads are actually qualified and rigorously worked on time. Consequently, your entire macro cost per newly qualified opportunity drops by 25-40% year-over-year.</p>
                        </div>
                        <div className="gsap-card" style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "32px", border: "1px solid var(--border)", display: "flex", flexDirection: "column", height: "100%" }}>
                            <h4 style={{ color: "var(--primary)", fontWeight: 900, marginBottom: "0.5rem", fontSize: "1.7rem" }}>3-4 Mo</h4>
                            <div style={{ fontWeight: 800, marginBottom: "0.5rem", color: "white", fontSize: "1.2rem" }}>Faster Ramp Time</div>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, flexGrow: 1 }}>A new sales rep typically takes 6 months to build pipeline and product knowledge. With the agent autonomously providing enriched leads and clear playbooks, ramp time drops cleanly to 3-4 months. New reps are productive by week 3, not month 6.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5A: Integration Hub (Zig) */}
            <section id="integration-1" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="section-label">Connectivity</span>
                        <h2 className="section-title">Integration Ecosystem: Your Entire Sales Stack Connected</h2>
                    </div>
                    <div className="responsive-grid zig">

                        <div className="gsap-img-reveal" style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '32px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1.5rem", textAlign: "center" }}>Supported Ecosystems</h3>
                            <div className="brand-logo-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                                <div className="brand-logo-card"><img src="/images/aws.jpg" className="brand-logo-img" alt="AWS" /></div>
                                <div className="brand-logo-card"><img src="/images/microsoft-azure-logo.webp" className="brand-logo-img" alt="Azure" /></div>
                                <div className="brand-logo-card"><img src="/images/logo_google_cloud.png" className="brand-logo-img" alt="Google Cloud" /></div>
                                <div className="brand-logo-card"><img src="/images/Anthropic-Logo.wine.png" className="brand-logo-img" alt="Claude Anthropic" /></div>
                                <div className="brand-logo-card"><img src="/images/zoho-logo.webp" className="brand-logo-img" alt="Zoho" /></div>
                                <div className="brand-logo-card"><strong style={{ color: "#0091da", fontSize: "1.2rem", fontWeight: 900 }}>Salesforce</strong></div>
                                <div className="brand-logo-card"><strong style={{ color: "#ff7a59", fontSize: "1.3rem", fontWeight: 900 }}>HubSpot</strong></div>
                                <div className="brand-logo-card"><strong style={{ color: "#000", fontSize: "1.2rem", fontWeight: 900 }}>LinkedIn</strong></div>
                                <div className="brand-logo-card"><strong style={{ color: "#EA4335", fontSize: "1.5rem", fontWeight: 900 }}>n8n</strong></div>
                            </div>
                        </div>

                        <div className="gsap-reveal">
                            <span className="section-label">Ecosystem</span>
                            <h2 className="section-title">Your Entire Sales Stack Connected</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>CRM Integration:</strong> The agent connects to Zoho CRM (native n8n connector, 1-day setup), Salesforce (REST API, 2-3 days), HubSpot (3 days), Pipedrive (1-2 days), or Copper (1 day). Your team keeps their existing CRM; the agent autonomously feeds data into it.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Lead Source Integration:</strong> Leads come strictly from your website form (via webhook), LinkedIn Sales Navigator (via third-party sync), Apollo (API integration), Hunter.io (API), or a bulk upload (CSV directly to agent processing).
                                </p>
                                <p>
                                    <strong>Enrichment Data:</strong> Crunchbase, LinkedIn, Companies House, Clearbit, or RocketReach APIs forcefully feed company and personal intelligence data. You choose your robust data sources; we seamlessly integrate them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5B: Multi-Channel Edge (Zag) */}
            <section id="integration-2" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container">
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Deployment</span>
                            <h2 className="section-title">Multi-channel Feedback Environments</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Multi-channel Outreach:</strong> Email sends via your email service provider (Gmail, Office 365, Zoho Mail, or HubSpot). LinkedIn messages go via third-party API (via approved partners like PhantomBuster or Leonardo). SMS goes via Twilio. Phone transcripts can be ingested for deal notes.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Engagement Tracking:</strong> Email open/click tracking, LinkedIn profile visits, website session data—all distinct actions feed back immediately into the agent to constantly refine individual lead scores real-time.
                                </p>
                                <p>
                                    <strong>Feedback Loop:</strong> As deals close, the agent learns which trigger signals correlated with wins (e.g., "companies that hired 3+ engineers in Q1 close 40% faster"). Over time, lead scores become hyper-accurate for your specific business logic.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <img src="/images/observability-realistic.png" alt="Omnichannel Feedback Diagram depicting email, LinkedIn, and SMS looping back to scoring models" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "32px" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6A: Case Study Overview (Zig) */}
            <section id="case-study-overview" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="section-label">Case Study</span>
                        <h2 className="section-title">Case Study: B2B SaaS Company, 5-Rep Sales Team</h2>
                    </div>
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <img src="/images/industries/sales-dw-roi.png" alt="Case Study Overview - SaaS company metrics dashboard £1.8m ARR" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "32px" }} />
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Client & Challenge</span>
                            <h2 className="section-title">£1.8m ARR SaaS Ecosystem</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Client:</strong> UK-based SaaS company (15 staff, £1.8m ARR, 5-rep sales team, £50k/month in lead gen spend, 12% conversion rate).
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Challenge:</strong> Leads arrived daily; reps spent 40+ hours/week on manual research and CRM admin. Average time to first touch: 6-8 hours. Pipeline felt bloated—lots of activity, but conversion rate wasn't improving.
                                </p>
                                <p>
                                    <strong>Outcome:</strong> We deployed a Sales Agent integrated with Salesforce and LinkedIn Sales Navigator. The agent enriches all inbound leads, scores them, auto-assigns high-scoring leads, and runs outreach sequences continuously.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6B: Case Study Results (Zag) */}
            <section id="case-study-results" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Impact & ROI</span>
                            <h2 className="section-title">£1.7m Additional Pipeline Generated</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Results:</strong> Time to first touch dropped from 6-8 hours to &lt;2 minutes. Lead quality filtering improved—reps now spend time on 75+ scored leads only. Conversion rate improved from 12% to 17% (not because reps are better, but because they're talking to better-fit prospects faster).
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Scaling Output:</strong> Rep outreach capacity increased from 8-12 conversations/week to 18-22 conversations/week (because they're not doing manual research). Pipeline grew from £2.1m to £3.8m in 3 months—not from more leads, but from faster movement and lower churn. Win rate for "auto-qualified" leads (60+) is 28%; manual leads averaged 18%.
                                </p>
                                <p>
                                    <strong>ROI Metrics:</strong> Total investment: £24,000 (12-week build). Ongoing retainer: £1,200/month. Payback: 2.3 months. Benefit: additional £1.7m pipeline, 5% higher conversion rate, improved forecast accuracy. Annual benefit: £1.2m+ additional revenue.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <img src="/images/agents/sales-case-study.png" alt="Case Study - Before/After metrics: 6-8 hrs → &lt;2 min response, £2.1m → £3.8m pipeline, 2.3 month payback" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "32px" }} />
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
                        <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem" }}>Explore More Solutions</h3>
                        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>Discover how our AI agents are transforming other departments.</p>
                    </div>
                    <div className="links-grid gsap-reveal">
                        {[
                            { title: "Home", href: "/" },
                            { title: "Finance Agents", href: "/finance-agents" },
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

            {/* Bottom CTAs */}
            <section style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
                    <div className="gsap-reveal">
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 950, marginBottom: "2rem" }}>
                            Ready to <span style={{ color: "var(--primary)" }}>Automate</span> Your Sales Operations?
                        </h2>
                        <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem auto", lineHeight: 1.6 }}>
                            Integrate intelligent tracking mechanisms to dramatically scale rep communication velocity securely.
                        </p>
                        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                            <Link href="/demo/sales" className="btn-primary" style={{ padding: "1rem 2.5rem", background: "#1d4ed8", color: "white", borderRadius: "12px", textDecoration: "none", fontWeight: 700, boxShadow: "0 10px 30px rgba(29, 78, 216, 0.3)" }}>
                                See Sales Agent Demo <ArrowRight size={20} />
                            </Link>
                            <Link href="/case-studies/sales-pdf" className="btn-secondary" style={{ padding: "1rem 2.5rem", border: "1px solid rgba(255,255,255,0.2)", color: "white", borderRadius: "12px", textDecoration: "none", fontWeight: 700 }}>
                                Download Sales Case Study
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
