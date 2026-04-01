"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, Minus, CheckCircle2, ChevronDown } from "lucide-react";
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

export default function FinanceAgents() {
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
            q: "How accurate is the AI at reading invoices, especially poor quality PDFs?",
            a: "GPT-4o with vision handles ~98% of invoices cleanly—even faded scans, handwritten fields, and non-standard formats. The remaining 2% (genuinely illegible items) are flagged for manual review. We test on samples of your actual invoices during the Build phase; you'll see the accuracy before go-live. For well-formed digital invoices (from e-invoicing platforms like e-invoice.com), accuracy exceeds 99.5%. Hybrid scenarios—mostly digital with a few scanned PDFs—average 98.8% across our client base of 47 firms."
        },
        {
            q: "What if my supplier changes their invoice format or we add a new supplier mid-deployment?",
            a: "The agent adapts. Claude reads invoices contextually—it doesn't rely on fixed column positions or format templates. If Supplier A changes their invoice layout, Claude still reads it correctly because it's reading semantically ('find the invoice amount') not positionally. New suppliers are handled via a simple onboarding workflow: add them to your supplier master file (Zoho, Excel, or your ERP), include their GL code and approval rules, and the agent learns them immediately. No retraining required."
        },
        {
            q: "Can the agent handle multi-currency invoices, different tax treatments, and international suppliers?",
            a: "Yes. The agent reads currency codes (USD, EUR, GBP) from the invoice, converts using your chosen exchange rate source (ECB, XE.com, or your bank rate), applies the correct tax treatment per jurisdiction (HMRC rules for UK, VAT reverse-charge for EU), and categorises accordingly. We configure this during Build. Edge cases (uncommon currencies, treaty rules, complex allocation) route to manual review. Typical multi-currency accuracy: 99.2%."
        },
        {
            q: "What happens if there's a dispute? Can we reverse a transaction that the agent posted?",
            a: "Fully reversible. Every transaction posted by the agent can be reversed, amended, or cancelled—just like manual entries. If an invoice is disputed, you mark it in Xero/QuickBooks as disputed; the agent sees the flag and excludes it from reconciliation. If it's genuinely fraudulent, you reverse the GL entry (standard accounting practice), and the agent's audit trail documents the reversal. HMRC/auditors will see: original posting (date, amount, decision), dispute/reversal (date, reason, approver), final outcome. This is more transparent than manual processing."
        },
        {
            q: "How does the agent handle invoices that don't match our PO or purchase order data?",
            a: "PO mismatch is a key control. During Build, we configure the agent to flag invoices where: (a) amount exceeds PO by >10%, (b) invoice date is >60 days after PO, (c) supplier/GL code differs from PO. These exceptions route to manual review. Most PO mismatches are legitimate (partial shipments, invoice terms longer than PO), so the Finance Manager reviews the context and approves. The agent learns valid patterns and reduces false positives over time. Typical exception rate: 2-4% of invoices. Typical false-positive rate (flagged but legitimate): <1%."
        },
        {
            q: "Do we need special software or hardware to run this? What if we're on legacy systems?",
            a: "The agent runs entirely in cloud (AWS, Azure, or Google Cloud—your choice). You need no new hardware. For integrations, your existing systems just need API access or file-export capability. Even legacy systems (old Sage versions, custom ERPs on-premises) can integrate via SFTP or bulk SQL queries—we've done it before. Worst case: you export a CSV monthly, the agent processes it, you import the results. Not ideal, but workable. Cloud accounting (Xero, QB Online) integrate in 2-3 days. On-premises systems take 2-4 weeks to integrate securely."
        },
        {
            q: "What if the agent makes a mistake and posts a wrong transaction? How do we catch and fix it?",
            a: "Three layers of catching mistakes: (1) Real-time flagging during orchestration—rules catch obvious errors (negative amounts, mismatched suppliers, policy violations), (2) Human review on exceptions—flagged invoices are queued for Finance Manager review before posting, (3) Daily reconciliation monitoring—the agent runs overnight reconciliation and flags newly posted transactions that don't match bank feeds or have unusual patterns. If a mistake gets through all three (extremely rare), you reverse it in Xero/QB (standard accounting), and the agent logs the reversal. Across 47 clients, we've had 3 invoices post incorrectly due to agent error—all caught within 48 hours, all reversed cleanly."
        },
        {
            q: "Does the agent replace our Finance team or do we still need them?",
            a: "The agent replaces data entry, not judgment. You no longer need someone typing invoices into Xero 12 hours per week. You still need a Finance Manager to (a) set business rules for the agent, (b) review exceptions, (c) do variance analysis, (d) manage cash flow, (e) report to leadership. Actually, you get better Finance Management because your team is freed from admin. Three of our clients promoted their Finance Manager to Finance Analyst after deployment—same salary, higher impact. In lean teams, the agent lets you manage 50% more transaction volume with the same headcount."
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
                    .links-grid { grid-template-columns: repeat(5, 1fr); }
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
                .brand-logo-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                    gap: 1.25rem;
                }
                .brand-logo-card {
                    background: #ffffff;
                    width: 100%;
                    position: relative;
                    aspect-ratio: 1/1;
                    border-radius: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05), 0 10px 30px -5px rgba(0,0,0,0.1);
                    transition: transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28), box-shadow 0.3s ease;
                }
                .brand-logo-card:hover {
                    transform: translateY(-8px) scale(1.05);
                    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05), 0 20px 40px -10px rgba(0,0,0,0.2);
                    z-index: 2;
                }
                .brand-logo-img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    filter: none !important;
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
                        src="/images/agents/finance-agent-hero.jpg"
                        alt="Financial AI Agents"
                        fill
                        style={{ objectFit: "cover", objectPosition: "left center", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }}
                        priority
                    />
                </div>

                <div className="container hero-container" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "100%", maxWidth: "1250px", margin: "0 auto" }}>
                    <div className="hero-title-line" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.2rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "100px", border: "1px solid rgba(16, 185, 129, 0.2)", marginBottom: "2.5rem", color: "#10b981", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.05em" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981" }} />
                        FINANCE AUTOMATION AGENTS
                    </div>
                    <h1 className="hero-title-line" style={{ fontSize: "clamp(2.5rem, 8vw, 4.2rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "2rem", letterSpacing: "-0.03em", color: "var(--text)" }}>
                        Your Finance Team <br /> Just Got <span style={{ color: "var(--primary)" }}>40% Faster</span>
                    </h1>
                    <p className="hero-subtitle" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)", color: "var(--text-muted)", marginBottom: "2.5rem", lineHeight: 1.6, maxWidth: "700px" }}>
                        Meet your Finance Digital Worker: autonomous invoice processing, real-time reconciliation, anomaly detection, and compliance-ready audit trails.
                    </p>

                    <div className="hero-cta" style={{
                        background: "var(--card-bg)",
                        padding: "2rem",
                        borderRadius: "32px",
                        border: "1px solid var(--border)",
                        marginBottom: "3.5rem",
                        maxWidth: "750px",
                        boxShadow: "var(--card-shadow)"
                    }}>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem", lineHeight: 1.4 }}>
                            The Problem: Manual Finance Operations Are Bleeding Time and Accuracy
                        </h3>
                        <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text-muted)" }}>
                            Finance teams across the UK are stuck in spreadsheet hell. A mid-market company with £50m annual turnover processes 800-1,200 invoices monthly.
                            {!isReadMoreOpen && (
                                <>
                                    ... <button onClick={() => setIsReadMoreOpen(true)} style={{ color: "var(--primary)", background: "transparent", border: "none", cursor: "pointer", fontWeight: 700, padding: 0, textDecoration: "underline", marginLeft: "0.25rem", fontSize: "0.95rem" }}>Read more</button>
                                </>
                            )}
                            {isReadMoreOpen && (
                                <span style={{ display: "inline" }}>
                                    {' '}Each invoice requires data entry (supplier name, amount, tax, GL code), three-point verification, and manual categorisation. A Finance Manager spends 12 hours weekly on invoice processing alone. Expense reports arrive as PDFs, emails, and scattered attachments; nobody knows what&apos;s actually been submitted until the month-end audit.
                                    <button onClick={() => setIsReadMoreOpen(false)} style={{ color: "var(--primary)", background: "transparent", border: "none", cursor: "pointer", fontWeight: 700, padding: 0, textDecoration: "underline", marginLeft: "0.5rem", fontSize: "0.95rem" }}>Show less</button>
                                </span>
                            )}
                        </p>
                    </div>

                    <div className="hero-cta" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                        <Link href="/demo/finance" style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            padding: "1rem 2rem", background: "#4F46E5", color: "white",
                            fontWeight: 700, borderRadius: "12px", textDecoration: "none",
                            boxShadow: "0 10px 30px rgba(79, 70, 229, 0.3)", transition: "all 0.3s ease"
                        }}>
                            See Finance Agent Demo <ArrowRight size={20} />
                        </Link>
                        <Link href="/case-studies/finance-pdf" style={{
                            display: "inline-flex", alignItems: "center", justifyContent: "center",
                            padding: "1rem 2rem", background: "#0F172A", color: "white",
                            fontWeight: 700, borderRadius: "12px", textDecoration: "none",
                            transition: "all 0.3s ease"
                        }}>
                            Download Finance Case Study
                        </Link>
                    </div>
                </div>
            </header>


            {/* Section 1: The Problem (Zig) */}
            <section id="problem" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <Image src="/images/industries/finance-dw-problem.png" alt="The Problem - Overwhelmed finance professional at desk surrounded by invoices, spreadsheets, sticky notes" fill style={{ objectFit: "cover", borderRadius: "32px" }} />
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">The Impact</span>
                            <h2 className="section-title">The Cost of Manual Processing</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Bank reconciliation is a weekly pain—matching transactions, chasing missing documentation, hunting for unexplained variances. And compliance? Audit trails are fragmented across email, spreadsheets, and accounting software. If Companies House, HMRC, or an auditor asks &quot;prove every decision on this transaction,&quot; the answer is: &quot;we can&apos;t, not quickly.&quot;
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    The cost is real: £1,200-£1,800 per month in pure finance admin labour, plus 2-4 week cycle times for month-end close, plus a 3-5% error rate that gets caught too late. Worse, your best finance person is drowning in data entry instead of forecasting, analysing variance, or improving working capital.
                                </p>
                                <p style={{ fontWeight: 700, color: "var(--text)" }}>
                                    This isn&apos;t a problem to tolerate. It&apos;s a problem to eliminate. The Finance agent solves this by automating the 80% of work that&apos;s routine and rules-based, freeing your team to focus on the 20% that requires judgment and strategy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2A: Autonomous Invoice Processing (Zag) */}
            <section id="invoice-processing" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container">
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Invoice Processing</span>
                            <h2 className="section-title">Autonomous Invoice Processing</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Our Finance agent doesn&apos;t ask for permission—it operates. The moment an invoice lands in your email inbox, it springs into action. It extracts the invoice (from PDF, email body, attachment, scanned image) using GPT-4o&apos;s vision capability. It reads supplier name, invoice date, amount, tax code, purchase order reference, payment terms. Claude&apos;s reasoning engine cross-checks the invoice against your supplier master file, verifies the amount is within tolerance, and automatically assigns the correct GL code based on historical patterns and business rules.
                                </p>
                                <p>
                                    If the invoice is flagged as suspicious—duplicate, mismatched PO, amount outlier—the agent creates an exception ticket and alerts the Finance Manager. Otherwise, it pushes the approved invoice directly to Xero, QuickBooks, Sage, or Zoho Books. No human touch required. One client processing 1,100 invoices monthly now handles 80% of volume with zero manual data entry.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <Image src="/images/agents/finance-dw-workflow.png" alt="Autonomous Invoice Workflow - Invoice → Extraction → Categorisation → Accounting Software" fill style={{ objectFit: "cover", borderRadius: "32px" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2B: Expense Categorisation & Reconciliation (Zig) */}
            <section id="expense-reconciliation" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <Image src="/images/industries/finance-dw-recon.png" alt="Expense & Reconciliation - Mobile receipt upload matching against bank feed automatically" fill style={{ objectFit: "cover", borderRadius: "32px" }} />
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Expense & Reconciliation</span>
                            <h2 className="section-title">Intelligent Expense & Reconciliation</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Expense categorisation works similarly. An employee submits a receipt (photo via mobile app or email). The agent reads it, verifies it&apos;s a business expense, categorises it (Travel, Meals, Software, etc.), cross-checks the policy (is a £150 client dinner allowed? is the supplier approved?), and submits it to the workflow. For straightforward expenses, it auto-approves. For policy edge cases, it routes to a manager. Repeat 200 times per month—your Finance team reviews the flagged exceptions only.
                                </p>
                                <p>
                                    Bank reconciliation runs nightly. The agent pulls transactions from your bank via open banking APIs, matches them against your accounting software, flags unmatched items, and prompts resolution. Variance analysis is automatic: the agent spots if a supplier payment is 20% higher than last month. Cash flow forecasting runs weekly predicting 13 weeks forward. Most mid-market companies discover 2-4 weeks of additional cash visibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3A: Architecture & Extraction (Zig) */}
            <section id="architecture-extraction" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'var(--card-bg)', padding: '3rem', borderRadius: '32px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", textAlign: "center" }}>AI Reasoners & Orchestrators</h3>
                            <div className="brand-logo-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                                <div className="brand-logo-card">
                                    <Image src="/images/Anthropic-Logo.wine.png" fill className="brand-logo-img" alt="Claude Anthropic" style={{ objectFit: 'contain', padding: '1.5rem' }} />
                                </div>
                                <div className="brand-logo-card">
                                    <Image src="/images/microsoft-azure-logo.webp" fill className="brand-logo-img" alt="Azure" style={{ objectFit: 'contain', padding: '1.5rem' }} />
                                </div>
                                <div className="brand-logo-card">
                                    <strong style={{ color: "#000", fontSize: "1.2rem", fontWeight: 900 }}>GPT-4o</strong>
                                </div>
                                <div className="brand-logo-card">
                                    <strong style={{ color: "#EA4335", fontSize: "1.5rem", fontWeight: 900 }}>n8n</strong>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Methodology</span>
                            <h2 className="section-title">Orchestration & Data Extraction</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    The Finance agent is a multi-step orchestration built on proven, auditable infrastructure. The trigger is simple: an email arrives with an invoice attachment, or a user submits an expense via your custom app. n8n (open-source workflow automation) detects the trigger and starts the sequence.
                                </p>
                                <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    <li><strong>Step 1: Document Extraction.</strong> GPT-4o with vision capability reads the invoice, extracts key fields (supplier, date, amount, tax, PO), and returns structured JSON. Accuracy on well-formed invoices: 99.1%.</li>
                                    <li><strong>Step 2: Intelligent Categorisation.</strong> Claude reads the extracted data plus your business context—your supplier list, GL chart, approval thresholds, policy rules—and decides on GL code, cost centre, and approval routing. Claude works with a 200K token context window.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3B: Validation & Integration (Zag) */}
            <section id="architecture-integration" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container">
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Validation & Integration</span>
                            <h2 className="section-title">Rules Engine to ERP Synchronization</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    <li><strong>Step 3: Validation & Rules.</strong> The agent applies business logic: Is the supplier approved? Is the amount within limits? Rules are stored in a simple JSON configuration that your Finance Manager can edit.</li>
                                    <li><strong>Step 4: System Integration.</strong> n8n&apos;s connectors integrate with Xero, QuickBooks, Sage, Zoho Books via REST APIs. The agent pushes approved invoices directly into your accounting software in milliseconds.</li>
                                    <li><strong>Step 5: Audit Trail.</strong> Every decision is logged: who submitted, what was extracted, rules applied, decision made. Logs are immutable.</li>
                                </ul>
                                <p>
                                    The entire loop runs in 90 seconds. Humans never touch straightforward invoices. Exceptions land in a task queue; your Finance team reviews them, and the agent learns the decision for next time.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <Image src="/images/agents/finance-dw-erp-sync.png" alt="Rules Engine to ERP Synchronization - Real-time automated ledger posting" fill style={{ objectFit: "cover", borderRadius: "32px" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Business Outcomes: The Numbers That Matter (Zag) */}
            <section id="outcomes" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "800px", margin: "0 auto" }}>
                        <span className="section-label">Impact</span>
                        <h2 className="section-title">Business Outcomes: The Numbers That Matter</h2>
                    </div>

                    <div className="outcomes-grid">
                        <div className="gsap-reveal metrics-grid">
                            <div className="gsap-card" style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "32px", border: "1px solid var(--border)" }}>
                                <h4 style={{ color: "var(--primary)", fontWeight: 900, marginBottom: "0.5rem", fontSize: "1.7rem" }}>40-50%</h4>
                                <div style={{ fontWeight: 800, marginBottom: "0.5rem", color: "white" }}>Hours Saved</div>
                                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>Reduction in manual admin. For 3 FTEs, that&apos;s 1.5 redirected to strategy. Annual savings: £35k-55k per head.</p>
                            </div>
                            <div className="gsap-card" style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "32px", border: "1px solid var(--border)" }}>
                                <h4 style={{ color: "var(--primary)", fontWeight: 900, marginBottom: "0.5rem", fontSize: "1.7rem" }}>3-5 Days</h4>
                                <div style={{ fontWeight: 800, marginBottom: "0.5rem", color: "white" }}>Faster Cycle Time</div>
                                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>Month-end close now takes 3-5 days instead of 10-14 days. Open items resolved in real-time.</p>
                            </div>
                            <div className="gsap-card" style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "32px", border: "1px solid var(--border)" }}>
                                <h4 style={{ color: "var(--primary)", fontWeight: 900, marginBottom: "0.5rem", fontSize: "1.7rem" }}>99.2%</h4>
                                <div style={{ fontWeight: 800, marginBottom: "0.5rem", color: "white" }}>Accuracy</div>
                                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>Accuracy on routine invoices; 98% of flagged exceptions correctly identified. Fewer HMRC queries.</p>
                            </div>
                            <div className="gsap-card" style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "32px", border: "1px solid var(--border)" }}>
                                <h4 style={{ color: "var(--primary)", fontWeight: 900, marginBottom: "0.5rem", fontSize: "1.7rem" }}>6-9 Months</h4>
                                <div style={{ fontWeight: 800, marginBottom: "0.5rem", color: "white" }}>Typical Payback</div>
                                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>Eliminated £1,200-1,800/mo in outsourced data entry. Plus 3-5 days improved cash cycle.</p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <Image src="/images/industries/finance-dw-roi.png" alt="Business Outcomes - Metrics dashboard: 40% hours saved, 99.2% accuracy, 6-9 month payback, 3-5 day cycle time improvement" fill style={{ objectFit: "cover", borderRadius: "32px" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Integration Ecosystem (Zig) */}
            <section id="integration" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div className="responsive-grid zig">

                        <div className="gsap-img-reveal" style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '32px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1.5rem", textAlign: "center" }}>Supported Ecosystems</h3>
                            <div className="brand-logo-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                                <div className="brand-logo-card"><Image src="/images/aws.jpg" fill className="brand-logo-img" alt="AWS" style={{ objectFit: 'contain', padding: '1.5rem' }} /></div>
                                <div className="brand-logo-card"><Image src="/images/microsoft-azure-logo.webp" fill className="brand-logo-img" alt="Azure" style={{ objectFit: 'contain', padding: '1.5rem' }} /></div>
                                <div className="brand-logo-card"><Image src="/images/logo_google_cloud.png" fill className="brand-logo-img" alt="Google Cloud" style={{ objectFit: 'contain', padding: '1.5rem' }} /></div>
                                <div className="brand-logo-card"><Image src="/images/Anthropic-Logo.wine.png" fill className="brand-logo-img" alt="Claude Anthropic" style={{ objectFit: 'contain', padding: '1.5rem' }} /></div>
                                <div className="brand-logo-card"><Image src="/images/zoho-logo.webp" fill className="brand-logo-img" alt="Zoho" style={{ objectFit: 'contain', padding: '1.5rem' }} /></div>
                                <div className="brand-logo-card"><strong style={{ color: "#1880e6", fontSize: "1.5rem", fontWeight: 900 }}>Xero</strong></div>
                            </div>
                        </div>

                        <div className="gsap-reveal">
                            <span className="section-label">Connectivity</span>
                            <h2 className="section-title">Integration Ecosystem: One Agent, Your Entire Finance Stack</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    The Finance agent doesn&apos;t care what accounting software you use. It integrates with Xero (via REST API, 2-day setup), QuickBooks Online (Intuit integration, 3 days), Sage 50/100/Intacct (2-4 weeks depending on your Sage version), Zoho Books (1 day), or custom ERPs via SFTP/API. Most UK mid-market firms use either Xero or QuickBooks; integration is plug-and-play.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    For expense management, the agent connects to your HR system (SAP SuccessFactors, Workday, BambooHR) to verify employee data and cost centre allocation. Bank feeds come via Plaid, TrueLayer, or your bank&apos;s native open banking API. You choose; we integrate. Supplier data is synced from your ERP or maintained in a shared Zoho database.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    The key insight: the agent sits in the middle of your finance stack, orchestrating data flow, not replacing your existing tools. You keep Xero, QuickBooks, Sage, whatever you have. The agent adds a thinking layer on top—extraction, categorisation, validation, decision-making—and pushes results downstream.
                                </p>
                                <p>
                                    Multi-entity support: handles intercompany invoicing, group reconciliation, and consolidated reporting across operating companies. Data residency: EU/UK hosting available; we never store your financial data on US cloud infrastructure without approval.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Security, Compliance & Audit (Zag) */}
            <section id="security" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container">
                    <div className="responsive-grid zag">
                        <div className="gsap-reveal">
                            <span className="section-label">Governance</span>
                            <h2 className="section-title">Security, Compliance & Audit</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Finance is regulated. We understand FCA principles, AML/CTFS obligations, and audit expectations. Here&apos;s what we build into every Finance agent.
                                </p>
                                <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    <li><strong>Approval Workflows:</strong> High-risk transactions ({`>`}£50k, new suppliers, policy exceptions) route to a human approver before GL posting. The agent prepares the decision brief.</li>
                                    <li><strong>Segregation of Duties:</strong> The agent handles categorisation and validation; humans handle judgment calls and exceptions.</li>
                                    <li><strong>Encryption:</strong> API keys and credentials are stored in encrypted vaults (AWS Secrets Manager, Azure Key Vault). Integrations use OAuth.</li>
                                    <li><strong>Immutable Audit Trails:</strong> Logs track submission timestamp, who submitted, what was extracted, rules applied, decision made, who approved, when it posted. Logs are queryable for FCA compliance and SRA readiness.</li>
                                </ul>
                                <p>
                                    Retention logs stay per HMRC guidance (6 years for PAYE, 3 years for expenses, etc.). You define retention policy; we enforce it.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <Image src="/images/agents/finance-security-audit.png" alt="Security diagram - Encrypted vaults, approval workflows, audit trail, immutable logs" fill style={{ objectFit: "cover", borderRadius: "32px" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Case Study (Zig) */}
            <section id="case-study" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container">
                    <div className="responsive-grid zig">
                        <div className="gsap-img-reveal" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "16/9", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", background: "var(--card-bg)" }}>
                            <Image src="/images/agents/finance-case-study.png" alt="Case Study - Before/After metrics: 12 days → 5 days, 40 hrs → 8 hrs, 3.2% → 0.4% error, 7-month payback" fill style={{ objectFit: "cover", borderRadius: "32px" }} />
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">Case Study</span>
                            <h2 className="section-title">A £120M Turnover Professional Services Firm</h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Client:</strong> Mid-market UK professional services firm (120 staff, £120m turnover, 2 finance FTEs, 1,100 invoices/month).
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Challenge:</strong> Month-end close took 12 days, with 40 hours of manual invoice processing, frequent data entry errors, and fragmented approval workflows across email and spreadsheet.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    <strong>Outcome:</strong> We deployed a Finance agent integrating with Xero and BambooHR. The agent processes 80% of invoices without human touch (88% accuracy within first week, 99.2% by week 12).
                                </p>
                                <p>
                                    <strong>Results:</strong> Month-end close reduced from 12 days to 5 days. Manual invoice processing time dropped from 40 hours/month to 8 hours/month. Error rate dropped from 3.2% to 0.4%. Cash flow visibility improved 13 weeks out with 94% accuracy. Total investment: £28,000 + £800/month retainer. Payback: 7 months. Ongoing monthly savings: £2,100.
                                </p>
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
                        <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem" }}>Explore More Solutions</h3>
                        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>Discover how our AI agents are transforming other departments.</p>
                    </div>
                    <div className="links-grid gsap-reveal">
                        {[
                            { title: "Home", href: "/" },
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

            {/* Bottom CTAs */}
            <section style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1000px", textAlign: "center" }}>
                    <div className="gsap-reveal">
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 950, marginBottom: "2rem" }}>
                            Ready to <span style={{ color: "var(--primary)" }}>Automate</span> Your Finance Operations?
                        </h2>
                        <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem auto", lineHeight: 1.6 }}>
                            See how a Finance Digital Worker can instantly extract, categorise, and reconcile your data with 99.2% accuracy.
                        </p>
                        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                            <Link href="/demo/finance" className="btn-primary" style={{ padding: "0 2.5rem", background: "#1d4ed8", boxShadow: "0 10px 30px rgba(29, 78, 216, 0.3)" }}>
                                See Finance Agent Demo <ArrowRight size={20} />
                            </Link>
                            <Link href="/case-studies/finance-pdf" className="btn-secondary" style={{ padding: "0 2.5rem", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}>
                                Download Finance Case Study
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
