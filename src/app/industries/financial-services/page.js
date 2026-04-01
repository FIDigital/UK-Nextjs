"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Script from "next/script";
import FAQItem from "@/components/FAQItem";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
    {
        question: "Is AI use in financial services compliant with FCA regulations?",
        answer: "Yes, when deployed properly. The FCA does not prohibit AI; it requires that firms deploying AI maintain human accountability, understand model outputs, maintain audit trails, and manage risks. The FCA's recent work on algorithmic accountability (consultation CP23/3) sets the framework. Our approach ensures you meet these expectations: we build explainable AI, maintain comprehensive audit trails, keep humans in control of material decisions, and stress-test systems before deployment."
    },
    {
        question: "What regulatory documentation do you provide for FCA conversations?",
        answer: "We provide comprehensive audit trails, decision documentation, and system design specifications that directly address FCA expectations. Our reporting package includes: system architecture diagrams, AI decision frameworks, audit logs, testing results, model performance metrics, and human review protocols. We've presented this documentation to regulatory teams at other firms; it satisfies the FCA's typical questions about AI governance and accountability."
    },
    {
        question: "How does your system handle edge cases and exceptions?",
        answer: "Edge cases are routed to human specialists. Our AI uses confidence scoring to distinguish high-confidence decisions from ambiguous cases. If confidence falls below your threshold, the case escalates automatically to a human reviewer with a detailed AI briefing. You set the thresholds—conservative settings route more cases to humans, aggressive settings process more automatically. This flexibility lets you tune the system to your risk appetite."
    },
    {
        question: "What happens if your AI makes an error?",
        answer: "Error accountability is clear and documented. Every decision is logged with timestamp, reasoning, and approver identity. If an error occurs, you have a complete record of what the AI recommended and what the human approved or rejected. This satisfies FCA expectations for accountability. We also track error patterns; if the AI consistently misclassifies a document type, we retrain it. You maintain final responsibility; AI is advisory."
    },
    {
        question: "How does your AI integrate with existing compliance systems?",
        answer: "We integrate with the systems you already use. If you use Zoho Finance Suite, we connect to your chart of accounts, invoice register, and reporting workflows. If you use Xero or Sage, we integrate there. For firms on Salesforce or Dynamics, we sync customer data, account relationships, and transaction history. Integration is designed to minimize disruption—we typically achieve live integration within 4-6 weeks."
    },
    {
        question: "Can you work within our existing Azure or AWS infrastructure?",
        answer: "Absolutely. We offer Azure OpenAI UK South for firms committed to Microsoft; we offer AWS Bedrock for firms using AWS. Both options keep your AI workloads within UK sovereign cloud infrastructure. Data never leaves your cloud tenant. This satisfies GDPR and data residency expectations while giving you flexibility in infrastructure choice."
    },
    {
        question: "What training do our compliance team need?",
        answer: "Training is minimal because our system is designed for operational teams, not data scientists. Your compliance officer needs 2 hours to understand the decision framework; your operational staff need 4 hours to manage the workflow interface. We provide comprehensive documentation, video walkthroughs, and 12 weeks of embedded support during implementation."
    },
    {
        question: "How do you handle sensitive customer data in your AI systems?",
        answer: "Sensitive data (SSNs, financial account details, beneficial ownership information) is encrypted end-to-end in transit and at rest. Claude and Azure OpenAI process encrypted data; they never see plaintext sensitive information. For medium-risk assessment, we use aggregated risk indicators rather than raw PII. Your data residency policy is respected; we offer UK-only data processing on AWS eu-west-2 or Azure UK South."
    }
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

// Reusable ReadMore component
const ReadMoreText = ({ children, previewHeight = 120, fadeColor = "var(--bg)" }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (!contentRef.current || !wrapperRef.current) return;

        if (isExpanded) {
            gsap.to(wrapperRef.current, {
                height: contentRef.current.scrollHeight,
                duration: 0.5,
                ease: "power3.out"
            });
        } else {
            gsap.to(wrapperRef.current, {
                height: previewHeight,
                duration: 0.5,
                ease: "power3.inOut"
            });
        }
    }, [isExpanded, previewHeight]);

    return (
        <div style={{ position: "relative", marginBottom: "1.5rem" }}>
            <div
                ref={wrapperRef}
                style={{
                    height: previewHeight,
                    overflow: "hidden",
                    position: "relative"
                }}
            >
                <div ref={contentRef} style={{ paddingBottom: "1rem" }}>
                    {children}
                </div>
            </div>

            {!isExpanded && (
                <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "80px",
                    background: `linear-gradient(to top, ${fadeColor}, transparent)`,
                    pointerEvents: "none"
                }} />
            )}

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    background: "none",
                    border: "none",
                    color: "var(--primary)",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    padding: "0.5rem 0",
                    marginTop: "0.5rem",
                    transition: "all 0.2s ease"
                }}
            >
                {isExpanded ? "Show Less" : "Read Full Detail"}
                <ChevronDown
                    size={16}
                    style={{
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease"
                    }}
                />
            </button>
        </div>
    );
};

export default function FinancialServicesPage() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const reveals = gsap.utils.toArray('.gsap-reveal');

        reveals.forEach((element) => {
            gsap.fromTo(element,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        const wrappers = gsap.utils.toArray('.gsap-img-wrapper');
        wrappers.forEach((wrapper) => {
            gsap.fromTo(wrapper,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: wrapper,
                        start: "top 85%",
                    }
                }
            );
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} style={{ background: "var(--bg)", minHeight: "100vh" }}>
            <title>Financial Services AI | FCA Compliant | FI Digital UK</title>
            <meta name="description" content="FCA-compliant AI for KYC, AML, invoice processing, and regulatory reporting. Trusted by UK financial institutions." />

            <style jsx global>{`
                .section-title {
                    font-size: clamp(2rem, 3.5vw, 2.8rem);
                    font-weight: 800;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    color: var(--text);
                    letter-spacing: -0.02em;
                }
                .zig-grid, .zag-grid {
                    display: grid;
                    gap: 3rem;
                    align-items: center;
                    grid-template-columns: 1fr;
                }
                .card-highlight {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border);
                    padding: 1.5rem;
                    border-radius: 16px;
                    margin-top: 1.5rem;
                }
                @media (min-width: 1024px) {
                    .zig-grid, .zag-grid { 
                        grid-template-columns: repeat(12, 1fr); 
                        gap: 0;
                        align-items: center;
                    }
                    
                    /* Modern Overlapping Floating Cards Design */
                    .zig-grid > .gsap-img-wrapper {
                        grid-column: 1 / 9;
                        grid-row: 1;
                        box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
                    }
                    .zig-grid > .gsap-reveal {
                        grid-column: 7 / 13;
                        grid-row: 1;
                        position: relative;
                        z-index: 10;
                        background: var(--bg);
                        padding: 3.5rem;
                        border-radius: 24px;
                        border: 1px solid var(--border);
                        box-shadow: 0 40px 80px rgba(0,0,0,0.6);
                        transform: translateY(40px);
                    }

                    .zag-grid > .gsap-reveal {
                        grid-column: 1 / 7;
                        grid-row: 1;
                        position: relative;
                        z-index: 10;
                        background: var(--bg);
                        padding: 3.5rem;
                        border-radius: 24px;
                        border: 1px solid var(--border);
                        box-shadow: 0 40px 80px rgba(0,0,0,0.6);
                        transform: translateY(-40px);
                    }
                    .zag-grid > .gsap-img-wrapper {
                        grid-column: 5 / 13;
                        grid-row: 1;
                        box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
                    }
                }
            `}</style>

            {/* Hero Section */}
            <section className="hero-section" style={{
                position: "relative",
                minHeight: "65vh",
                display: "flex",
                alignItems: "center",
                padding: "clamp(120px, 15vh, 140px) 1.5rem 80px",
                background: "var(--bg)",
                overflow: "hidden"
            }}>
                <div className="hero-background" style={{
                    position: "absolute", top: "0", right: "0", width: "65%", height: "100%", zIndex: 0, opacity: 0.7, pointerEvents: "none"
                }}>
                    <Image
                        src="/images/industries/finance-hero.png"
                        alt="AI That Understands FCA Compliance"
                        fill
                        style={{ objectFit: "cover", objectPosition: "left center", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }}
                        priority
                    />
                </div>
                <div className="container hero-container" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "100%", maxWidth: "1250px", margin: "0 auto" }}>
                    <div className="hero-tag" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.2rem", background: "rgba(79, 70, 229, 0.1)", borderRadius: "100px", border: "1px solid rgba(79, 70, 229, 0.2)", marginBottom: "2rem", color: "var(--primary)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                        Financial Services
                    </div>
                    <h1 className="hero-title" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.03em", color: "var(--text)" }}>
                        AI That Understands <br />
                        <span style={{ color: "var(--primary)" }}>FCA Compliance</span>
                    </h1>
                    <p className="hero-desc" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.6, maxWidth: "680px" }}>
                        Automate KYC, AML, and regulatory reporting without compromising compliance. Built for regulated financial services.
                    </p>
                </div>
            </section>

            {/* Section 1: The Challenge */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "2816/1536", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image
                                src="/images/industries/finance-challenge.jpg.png"
                                alt="Dashboard showing FCA compliance metrics, audit trails, and KYC workflow stages"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">The Challenge: FCA-Regulated AI in Financial Services</h2>

                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    UK financial institutions operate under the strict oversight of the Financial Conduct Authority (FCA), a regulatory framework that has become exponentially more complex as artificial intelligence enters the sector.
                                </p>

                                <ReadMoreText previewHeight={220} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        The challenge isn't simply deploying AI—it's deploying AI that can demonstrate compliance at every step, from training data lineage through to operational decision-making. Financial firms currently face a perfect storm: manual KYC (Know Your Customer) and AML (Anti-Money Laundering) processes consume 15-25% of operations teams' time, while regulatory expectations demand increasingly sophisticated detection of illicit activity.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        Regulatory reporting obligations have multiplied, with firms required to file monthly returns, transaction reports, and compliance assessments to the FCA. The cost of compliance breach is catastrophic—firms routinely face penalties ranging from £100,000 to £50 million+, as well as reputational damage and potential criminal liability for senior management.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            Manual processes are inherently fragile; they introduce human error, create audit trail gaps, and leave firms vulnerable to enforcement action. Traditional automation falls short because it cannot explain decisions in the regulatory language the FCA demands. Your firm needs AI that not only processes faster but builds an impeccable compliance record as it works.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Our Solutions */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">Our Solutions: KYC/AML, Invoice Processing, Regulatory Reporting</h2>

                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    We deliver purpose-built AI solutions across the four pillars of financial services operations, drastically reducing manual overhead while improving regulatory compliance accuracy.
                                </p>

                                <ReadMoreText previewHeight={200} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>KYC/AML Automation:</strong> Leverages Claude's advanced reasoning to parse complex customer documents—passports, utility bills, beneficial ownership registers—cross-reference them against sanction lists, PEPs (Politically Exposed Persons) databases, and adverse media, then generate regulatory-grade decision reports with full audit trails. Our system flags high-risk cases for human review while approving routine applications in minutes.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Invoice Processing:</strong> Eliminates the manual data entry that plagues accounts payable departments. Our AI reads invoices in any format, extracts line items, validates against purchase orders, and routes them to the correct cost centre.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Regulatory Reporting:</strong> The FCA requires firms to submit structured data (CFTC reports, EMIR transaction reports, MIFID II) in precise XML formats. Our system ingests transaction data from your core banking system, applies the correct regulatory taxonomy, validates against FCA schemas, and generates compliant submission files.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            <strong>Customer Onboarding Orchestration:</strong> From initial application to account opening, our orchestration layer (powered by n8n) coordinates multiple AI agents specializing in different validation types. It integrates perfectly with your existing Zoho Finance Suite, Xero, or Sage deployment.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "2816/1536", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image
                                src="/images/industries/finance-solutions.png"
                                alt="Automated Pipeline with AI Decision Points"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Compliance-Safe AI */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "2816/1536", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image
                                src="/images/industries/finance-compliance.png"
                                alt="Compliance Safe AI Flowchart Audit Log"
                                fill
                                style={{ objectFit: "cover", objectPosition: "left center" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">Compliance-Safe AI: Audit Trails & Human-in-Loop</h2>

                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Regulatory compliance isn't an afterthought in our architecture—it's foundational. Every decision our AI makes is accompanied by a complete, immutable audit trail.
                                </p>

                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        When Claude assesses a customer's risk profile or flags a transaction as potentially suspicious, the system logs: the input documents, the reasoning applied, the decision threshold triggered, the exact timestamp, and which human reviewer approved or overrode the decision. This audit trail is FCA-ready and defensible.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Human-in-Loop design</strong> is mandatory in our system. AI never operates autonomously on sensitive compliance decisions. Instead, our platform uses AI to accelerate human decision-making: it pre-filters high-confidence approvals to expedite workflow, flags medium-risk cases with detailed briefings for human judgment, and escalates exceptions.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            <strong>FCA Awareness</strong> means our system is built with current regulatory guidance front-of-mind. We actively track the FCA's supervisory expectations so that when your firm explains its use of AI to the FCA, you have a documented, bulletproof approach.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Technology Stack */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">Technology: Claude Reasoning, n8n, Azure OpenAI</h2>

                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Our technology stack is meticulously engineered for highly regulated environments, prioritizing absolute data sovereignty, security, and interpretability.
                                </p>

                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        We use <strong>Claude</strong> as the core analytical engine because of its ability to interpret complex documents and articulate its reasoning in natural language—exactly what regulators demand. Its 200,000-token context window allows it to review entire customer files and historical records in a single inference.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        For firms committed to Microsoft, we offer <strong>Azure OpenAI UK South</strong>, ensuring workloads stay within Microsoft's sovereign cloud and integrate natively with Dynamics and Teams.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            <strong>n8n</strong> serves as our orchestration layer, meaning your operational teams can modify workflows without engineering support. We natively integrate two-way syncs with Zoho Finance Suite, Xero, Sage, Salesforce, and core banking platforms like Temenos and Finastra.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "2816/1536", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image
                                src="/images/industries/finance-tech.png"
                                alt="Technology Stack Diagram for Finance"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Australian Regulatory Experience */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "2816/1536", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image
                                src="/images/industries/finance-global.png"
                                alt="Australian APRA ASIC Experience"
                                fill
                                style={{ objectFit: "cover", objectPosition: "left center" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">Australian Regulatory Experience Translates to FCA</h2>

                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    FI Digital was founded in Australia in 2014, operating through APRA and ASIC frameworks—some of the world's most stringent financial regulatory regimes.
                                </p>

                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        The core principles that guided our APRA-compliant solutions translate beautifully to FCA compliance. Both regulators demand that firms deploying AI maintain human accountability, understand model limitations, manage data integrity, and produce strict audit trails.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            Our decade of experience navigating APRA's requirements means we understand the regulatory mindset: we're not building AI to circumvent compliance, we're building compliance infrastructure that happens to use AI. Our architects have defended deployments directly in conversations with APRA, and that elite expertise is now available to forward-thinking UK firms.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Case Study */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">Case Study: Financial Advisory KYC Automation</h2>

                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    A London-based independent financial advisory firm with £2.8 billion AUM was spending 120 advisor hours per month on manual KYC documentation review.
                                </p>

                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        Advisors were doing compliance administrative work instead of serving clients. We implemented a unified KYC automation system integrated directly with their Salesforce and SharePoint deployments. The AI now automatically extracts identity data, runs OFSI sanction checks, and determines a client's risk bucket in under 4 minutes.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            <strong>The Result:</strong> Within 6 months, their onboarding timeframe dropped from 10 days to 2 days, allowing them to rapidly acquire £180M in new AUM. When the FCA supervision team recently reviewed the workflow, they explicitly noted that the automated framework's audit trails were exemplary.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "auto", aspectRatio: "2816/1536", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image
                                src="/images/industries/finance-casestudy.png"
                                alt="Financial Advisory Success Case Study"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)", textAlign: "center" }}>
                <div className="container gsap-reveal" style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1.5rem" }}>Modernize Your Compliance Operations</h2>
                    <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "3rem", lineHeight: 1.6 }}>
                        Discuss your current bottlenecks with our Solutions Architects and discover how FCA-aware AI can redefine your operational efficiency.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact?intent=financial-services-demo" className="btn-primary" style={{ padding: "1rem 2.5rem", borderRadius: "14px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                            Schedule FCA Compliance Consultation <ArrowRight size={20} />
                        </Link>
                        <Link href="/resources/financial-services-ai-compliance.pdf" style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "1rem 2.5rem",
                            background: "transparent",
                            color: "var(--text)",
                            border: "1px solid var(--border)",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            borderRadius: "14px",
                            textDecoration: "none",
                            transition: "all 0.3s ease"
                        }}>
                            Download Whitepaper
                        </Link>
                    </div>

                    <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", fontSize: "0.9rem", fontWeight: 600 }}>
                        <Link href="/why-fi-digital/uk-compliance" style={{ color: "var(--text-muted)", textDecoration: "none" }}>UK Compliance Hub</Link>
                        <Link href="/why-fi-digital/approach-architecture" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Our AI Architecture</Link>
                        <Link href="/why-fi-digital/global-delivery-model" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Global Delivery Model</Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

                <div className="container" style={{ maxWidth: "900px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <div className="section-label" style={{ display: "inline-block", padding: "0.5rem 1rem", background: "rgba(79, 70, 229, 0.1)", color: "var(--primary)", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1.5rem" }}>FCA & Intelligence FAQs</div>
                        <h2 className="section-title">Common Questions</h2>
                    </div>

                    <div className="gsap-reveal" style={{ display: "flex", flexDirection: "column" }}>
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
