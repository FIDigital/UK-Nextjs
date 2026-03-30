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
        question: "Is my client confidentiality guaranteed with Claude AI?",
        answer: "Yes, completely. Your client data is processed on UK-based infrastructure (AWS eu-west-2 or Azure UK South) and is never shared with other clients, never used for model training, and never viewed by Anthropic staff. We don't use shared models processing your data—we can deploy a private Claude instance on your infrastructure if you require absolute isolation. Attorney-client privilege is preserved because the AI operates within your confidential matter workflows and creates no external record of privileged communication."
    },
    {
        question: "What SRA compliance documentation do you provide?",
        answer: "We provide comprehensive AI governance documentation: system architecture, data flow diagrams, security controls, human oversight protocols, testing results, and error management procedures. This documentation is designed to satisfy SRA enquiries about AI governance. We also work with your compliance team to develop firm-specific AI governance policies that align with SRA expectations. Many firms use our documentation as the foundation for their AI policies."
    },
    {
        question: "Can the AI help with legal research and case law analysis?",
        answer: "Yes, though with an important caveat: our primary strength is document analysis and contract interpretation, not current legal research. Claude can analyse case law documents you provide, extract holdings, and relate them to your specific facts. However, Claude is not trained on real-time legal databases. For current legal research, you'll continue using LexisNexis or Westlaw. We integrate with these platforms so the AI can reference materials your team has flagged."
    },
    {
        question: "What happens if the AI misinterprets a contract clause?",
        answer: "Error accountability is clear. The AI flags its confidence level on every analysis; lower-confidence outputs get explicit human review. The system logs every analysis with timestamp and human reviewer approval/rejection. If the AI errs, you have a complete record. More importantly, the AI is designed as an analytical assistant—lawyers review and approve all AI output before relying on it. The lawyer, not the AI, is accountable."
    },
    {
        question: "How does the AI handle ambiguous or deliberately unclear contract language?",
        answer: "This is where human judgment is essential and irreplaceable. The AI can flag ambiguity—highlighting two possible interpretations and explaining the business implications of each—but it cannot and should not resolve genuine ambiguity. Our system is designed to surface these issues for human analysis. In disputed contract interpretation, that's often the most valuable output: identifying where the drafting is unclear and flagging it for client instruction or negotiation."
    },
    {
        question: "Can we use the AI across multiple practice areas?",
        answer: "Absolutely. The system is practice-agnostic: it works for corporate transactions, litigation, employment, property, insolvency, and regulatory matters. However, we typically recommend starting with one practice area—corporate or litigation—to develop confidence with the system before expanding. Each practice has distinct document types and templates; starting focused ensures you optimise configuration before rolling out firm-wide."
    },
    {
        question: "What's the implementation timeline and firm disruption?",
        answer: "Implementation typically takes 8-12 weeks. We begin with system setup and integration with your practice management system and document repository. You then run a 4-week pilot with one practice group, testing the system on real work and refining configuration. If the pilot is successful, you roll out firm-wide. Disruption is minimal—associates are using a new tool, not changing how they work fundamentally. Training takes 2 hours per user."
    },
    {
        question: "How does AI-assisted contract review work in competitive transactions?",
        answer: "Competitive M&A transactions often involve tight timelines where speed is a competitive advantage. Our AI can accelerate your first-pass analysis so your team can negotiate faster and spot issues earlier. In high-speed transactions, being able to process 500 pages of disclosure overnight and present structured legal analysis by morning is genuinely differentiation. Buyers have successfully used AI-assisted review to close faster and with more thorough due diligence."
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

export default function LegalServicesPage() {
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
            <title>Legal AI Solutions | SRA Compliant | FI Digital UK</title>
            <meta name="description" content="AI-powered contract review, due diligence, and matter management for UK law firms. SRA-compliant, Confidentiality-safe, Enterprise-ready." />
            
            <style jsx global>{`
                .section-title {
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 800;
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                    color: var(--text);
                    letter-spacing: -0.02em;
                }
                .zig-grid {
                    display: grid;
                    gap: 5rem;
                    align-items: center;
                    grid-template-columns: 1fr;
                }
                .zag-grid {
                    display: grid;
                    gap: 5rem;
                    align-items: center;
                    grid-template-columns: 1fr;
                }
                .card-highlight {
                    background: var(--card-bg);
                    border: 1px solid var(--border);
                    padding: 1.5rem;
                    border-radius: 16px;
                    margin-top: 1.5rem;
                }
                @media (min-width: 900px) {
                    .zig-grid { grid-template-columns: 1fr 1.2fr; }
                    .zag-grid { grid-template-columns: 1.2fr 1fr; }
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
                        src="/images/legal-scales-real.jpg" 
                        alt="AI That Understands Legal Confidentiality" 
                        fill 
                        style={{ objectFit: "cover", objectPosition: "left center", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }} 
                        priority 
                    />
                </div>
                <div className="container hero-container" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "100%", maxWidth: "1250px", margin: "0 auto" }}>
                    <div className="hero-tag" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.2rem", background: "rgba(79, 70, 229, 0.1)", borderRadius: "100px", border: "1px solid rgba(79, 70, 229, 0.2)", marginBottom: "2rem", color: "var(--primary)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                        Legal & Professional Services
                    </div>
                    <h1 className="hero-title" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.03em", color: "var(--text)" }}>
                        AI That Understands <br />
                        <span style={{ color: "var(--primary)" }}>Legal Confidentiality</span>
                    </h1>
                    <p className="hero-desc" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.6, maxWidth: "680px" }}>
                        Contract review, due diligence, and matter management powered by Claude's 200K context. Built for law firms where confidentiality is non-negotiable.
                    </p>
                </div>
            </section>

            {/* Section 1: The Opportunity */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                           <Image 
                                src="/images/business-meeting-real.jpg"
                                alt="Modern law office reviewing contracts with AI analysis"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">The Opportunity: UK Law Firms Ready for AI</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    The UK legal market stands at an inflection point. Over 10,000 law firms operate in England, Wales, and Scotland, yet the adoption of enterprise AI in legal services remains surprisingly low.
                                </p>
                                
                                <ReadMoreText previewHeight={220} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        The legal profession is increasingly tech-savvy; in-house counsel teams at FTSE 100 companies are actively seeking AI-powered contract and document intelligence. Yet most firms still rely on keyword search, manual document review, and time-consuming due diligence processes.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        The opportunity is acute: a mid-sized law firm spends an estimated £2-4 million annually on document review, contract analysis, and due diligence activities that are inherently repeatable and well-suited to AI.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            The barrier to adoption isn't technology—it's finding AI partners who understand that legal work is fundamentally different. Lawyers must guarantee client confidentiality, explain reasoning in detail, maintain privileged attorney-client communication, and comply with Solicitors Regulation Authority (SRA) standards. These constraints are entirely solvable with the right architecture.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Solutions */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">Solutions: Contract Review, Due Diligence, Matter Management</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    We deliver four core AI solutions purpose-built for legal services to radically accelerate your most time-consuming workflows.
                                </p>
                                
                                <ReadMoreText previewHeight={200} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Contract Review:</strong> Using Claude's 200,000-token context window, our system can ingest an entire contract, background documents, and client instructions to produce comprehensive legal analysis in minutes. It identifies key obligations, unusual terms, and missing provisions. M&A contract reviews that traditionally demand 40-80 hours can be completed in 4 hours.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Due Diligence:</strong> In acquisition transactions, sellers routinely provide 5,000+ documents. Our system reads them simultaneously, extracting contractual counterparties, payment terms, and indemnities to produce immediately actionable due diligence risk matrices.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Matter Management:</strong> Integration with Practice Management systems (Opus, CaseLines, LexisNexis) allows the AI to track open matters, auto-draft early correspondence, summarise status updates, and surface precedents naturally.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            <strong>Compliance Intelligence:</strong> Ensures your firm stays unequivocally within SRA professional standards. The system flags potential conflicts of interest, identifies areas demanding statutory disclosures, and keeps practitioners strictly within their admitted credentials.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/reasoning-routing.png"
                                alt="Three-panel layout mapping contract terms, diligence grids, and matter deadlines"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Claude Architecture */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/ai-discovery.png"
                                alt="Claude Multi-Step Reasoning Architecture"
                                fill
                                style={{ objectFit: "cover", objectPosition: "left center" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">How Claude Powers Legal AI: 200K Context & Reasoning</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Claude's architecture is unusually well-suited to legal work. The massive 200,000-token context window (roughly 150,000 words) allows it to read and deeply reason about entire document sets in a single sweep.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        For an M&A transaction, Claude can simultaneously ingest the share purchase agreement, completion mechanics, warranties, indemnity schedules, and the buyer's bespoke instructions. This holistic reasoning far surpasses basic searching, spotting true ambiguities and complex cross-document conflicts humans might easily miss.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        Legal analysis fundamentally requires multi-step logic. Claude's extended reasoning means the system articulates exactly *how* it reached a conclusion, producing outputs any lawyer can forensically trace.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            This explainability is non-negotiable in legal work—you aren't just given a 'risk score;' you are given the cited paragraphs and logic. The SRA demands lawyers remain fully responsible for their final analysis. AI accelerates human judgment; it never replaces it.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: SRA Compliance */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">SRA Compliance & Professional Conduct</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    The Solicitors Regulation Authority doesn't strictly prohibit AI use—but it imposes standards that directly reshape how AI architectures must be deployed.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        SRA Principle 4 requires upholding the 'rule of law and administration of justice,' and Principle 6 dictates 'integrity.' This means firms must ensure absolute systemic supervision, active confidentiality management, and guaranteed human judgment loop integration.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Confidentiality is Non-Negotiable:</strong> Your AI data is processed wholly within UK sovereign zones (AWS eu-west-2 / Azure UK South), and never used to train public models. Privilege is preserved entirely using contained, ephemerally restricted workflows.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            When the SRA asks about your firm's AI governance, our architecture provides complete transparency. We deliver full systemic documentation to empower you in demonstrating unquestionable professional supervision.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/SRA-Awareness.png"
                                alt="SRA Standards of Conduct compliance architecture"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Target Market */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/corporate-hq-real.jpg"
                                alt="UK Legal Market Segmentation highlighting mid-market firms"
                                fill
                                style={{ objectFit: "cover", objectPosition: "left center" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">Targeting the 50-500 Lawyer Mid-Market</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Our core focus operates aggressively within the upper-mid-market UK legal sector: ambitious firms hosting between 50 and 500 lawyers handling heavy corporate flows.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        These prominent commercial practices actively handle M&A, complex litigation, and high-value property finance, but historically lack the sprawling internal technology teams enjoyed by Magic Circle mega-firms.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            The economics make undeniable sense: a 150-lawyer firm typically recovers the deployment cost of AI architecture within a mere 6 months via boosted billable realisation margins and accelerated matter cycles. We empower entrepreneurial practices to seamlessly acquire Magic Circle technological capabilities out-of-the-box.
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
                            <h2 className="section-title">Case Study: Commercial Litigation Contract Review</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    A 120-lawyer commercial litigation boutique in the City handled complex disputes involving extensive documentary discovery. Associates spent ~800 hours annually purely extracting relevant holdings and cross-referencing file contracts.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        We deployed our AI document review systems directly integrating internally to their Westlaw DocPoint and Opus practice software. For a £2.1M shareholder dispute spanning 3,500 highly dense pages, the AI natively processed the complete load overnight. It accurately isolated 47 key documents, material breaches, and cross-referenced claims automatically.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            <strong>The Impact:</strong> A highly structured 15-page pre-analysis document generated in just 3 hours, a task traditionally bleeding 40-60 associate hours. The partners billed identical matter volume utilizing 25% fewer associate hours, winning numerous future clients through enhanced strategy execution rather than document digging.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/client-success-real.jpg"
                                alt="Commercial litigation AI contract review case study"
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
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1.5rem" }}>Modernize Your Law Firm Safely</h2>
                    <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "3rem", lineHeight: 1.6 }}>
                        Explore how enterprise-grade SRA-compliant architecture can liberate your senior associates and multiply your billing margins today.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact?intent=legal-services-demo" className="btn-primary" style={{ padding: "1rem 2.5rem", borderRadius: "14px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                            Book SRA Compliance Demo <ArrowRight size={20} />
                        </Link>
                        <Link href="/resources/legal-services-case-study.pdf" style={{
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
                            Download Case Study
                        </Link>
                    </div>

                    <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", fontSize: "0.9rem", fontWeight: 600 }}>
                        <Link href="/why-fi-digital/uk-compliance" style={{ color: "var(--text-muted)", textDecoration: "none" }}>UK Compliance Hub</Link>
                        <Link href="/why-fi-digital/approach-architecture" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Our AI Architecture</Link>
                        <Link href="/why-fi-digital/partnerships" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Technology Partners</Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                
                <div className="container" style={{ maxWidth: "900px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <div className="section-label" style={{ display: "inline-block", padding: "0.5rem 1rem", background: "rgba(79, 70, 229, 0.1)", color: "var(--primary)", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Legal Operations FAQs</div>
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
