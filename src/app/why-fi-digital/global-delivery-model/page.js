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
import { 
    GlobalMapVisual, 
    RolesChartVisual, 
    TimelineVisual,
    DataProtectionVisual,
    ZohoExpertiseVisual 
} from "@/components/DeliveryIllustrations";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
    {
        question: "Will my project be handled exclusively by India engineers I've never met?",
        answer: "No. You'll have a dedicated UK-based account manager and technical leader who you work with regularly. Those senior UK staff own your relationship and project outcomes. They're backed by India and Australian teams, but you have consistent UK-facing contacts. Most clients interact with 3-5 UK-based team members regularly and experience the India team through their work output, not direct interaction."
    },
    {
        question: "What about communication across time zones? Won't it slow down decisions?",
        answer: "Asynchronous work communication actually accelerates some decisions. Complex technical decisions are often made more thoughtfully when team members have time to consider options rather than being forced into immediate synchronous decisions. Real-time discussions happen when needed (we use early morning UK / late evening India time slots for critical discussions). Most work happens asynchronously, which forces clearer documentation and communication."
    },
    {
        question: "What if there's a quality issue with India-developed code?",
        answer: "Quality issues are caught by QA teams before code reaches you. We have formal testing stages and sign-off processes. If issues are discovered in production, root cause analysis is blameless—we focus on preventing recurrence, not assigning blame. India engineers who made the mistake are part of the resolution, not removed from it. Quality responsibility is shared."
    },
    {
        question: "Can I request specific individuals from India to stay on my project?",
        answer: "Yes, absolutely. Once you have team members who understand your business deeply, continuity is valuable. We can commit specific engineers to your project long-term. This is typically recommended for projects longer than 6 months. Dedicated teams build deeper understanding and faster delivery."
    },
    {
        question: "Is there a risk that India team members will leave and knowledge will be lost?",
        answer: "Attrition risk exists in any location, but we manage it through knowledge documentation. We enforce that all technical knowledge is documented (architecture decisions, integration details, configuration notes). When team members transition, documentation enables continuity. We also maintain knowledge continuity through overlapping transitions: outgoing team members work with incoming team members for 1-2 weeks to transfer context."
    },
    {
        question: "How do you ensure India engineers understand UK regulatory requirements?",
        answer: "Domain specialists in India have deep understanding of UK regulation—Financial Services Specialists understand FCA requirements, Legal Tech Specialists understand SRA expectations, Manufacturing Specialists understand UK health and safety standards. This knowledge is supplemented by training and mentorship from UK architects. India engineers are never unsupervised on regulatory decisions; UK architects review and approve all regulatory-material decisions."
    },
    {
        question: "What languages do your India engineers speak?",
        answer: "All engineers working with UK clients are fluent in English (requirement for hire). Most are native English speakers or are fluent non-natives who studied in English-medium institutions. Technical communication is clear; cultural communication takes slightly more care but is professional and effective."
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

export default function GlobalDeliveryModelPage() {
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

        // Image wrappers parallax
        gsap.utils.toArray('.gsap-img-wrapper').forEach((wrapper) => {
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
            <style jsx global>{`
                .section-label {
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    background: rgba(79, 70, 229, 0.1);
                    color: var(--primary);
                    border-radius: 100px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    margin-bottom: 1.5rem;
                }
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
                        src="/images/engineeringacross-everytimezone-hero-image.png" 
                        alt="Global Engineering Delivery" 
                        fill 
                        style={{ objectFit: "cover", objectPosition: "left center", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }} 
                        priority 
                    />
                </div>
                <div className="container hero-container" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "100%", maxWidth: "1250px", margin: "0 auto" }}>
                    <div className="hero-tag" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.2rem", background: "rgba(79, 70, 229, 0.1)", borderRadius: "100px", border: "1px solid rgba(79, 70, 229, 0.2)", marginBottom: "2rem", color: "var(--primary)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                        Global AI Delivery Model
                    </div>
                    <h1 className="hero-title" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.03em", color: "var(--text)" }}>
                        Engineering Across <br />
                        <span style={{ color: "var(--primary)" }}>Every Time Zone</span>
                    </h1>
                    <p className="hero-desc" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.6, maxWidth: "680px" }}>
                        200+ specialist engineers across UK, India, and Australia. 24/7 delivery, local expertise, global scale.
                    </p>
                </div>
            </section>

            {/* Section 1: The Model */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/The-Model-UK-India.png"
                                alt="Global Delivery Network Map"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">The Model: UK + India + Australia</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    FI Digital operates a genuinely distributed global delivery model. Our UK headquarters in London manages client relationships, regulatory compliance, and senior architecture for European clients. Our India engineering centre (Bangalore, Hyderabad, Gujarat) comprises 200+ engineers building systems, conducting quality assurance, and providing operational support.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        Our Australia office (Sydney, Melbourne) drives innovation, manages Asia-Pacific clients, and oversees financial services architecture. This distribution isn't simply about cost optimisation (though it is cost-effective); it's about having the right expertise in the right location at the right time. UK-based clients interact with UK salespeople, UK architects, and UK account managers who understand the regulatory environment.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        Those UK teams are backed by deep engineering resources in India: when UK architects design a system, India engineers build it; when architects iterate based on feedback, India engineers implement changes with 24-hour turnaround. When issues arise overnight or over weekends, India-based support escalates and responds.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            Australia provides innovation leadership: our Australian architects design foundational systems, evaluate emerging AI models and technologies, and set technical direction. If Australia experiences natural disaster, India and UK provide backup. This resilience is increasingly important for regulated industries.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Specialisation */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">200+ Engineers by Specialisation</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Our engineering team spans multiple specialisations aligned to the work we deliver. <strong>Platform Engineers (40 FTE)</strong> design and maintain cloud infrastructure, manage AWS and Azure deployments, implement security controls, and ensure observability across systems.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Generalist AI/ML Engineers (60 FTE)</strong> build AI systems end-to-end: they select models, fine-tune implementations, integrate AI into applications, manage deployment, and handle operational support. They're comfortable with Claude, GPT-4o, Gemini, and open-source models.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Domain Specialists (50 FTE)</strong> bring deep expertise in specific verticals. Financial Services Specialists understand banking regulation, payment processing, and regulatory reporting. Legal Tech Specialists understand contract law and firm operations. Manufacturing Specialists understand IoT integration, ERP systems, and supply chain management.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Quality Assurance Engineers (30 FTE)</strong> test systems comprehensively. <strong>Integration Engineers (20 FTE)</strong> specialise in connecting disparate systems (SAP, Oracle). <strong>DevOps/Site Reliability (15 FTE)</strong> continuously improve reliability. This structure ensures that every project has the right expertise applied at the right stage.
                                    </p>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/india-engineering.png"
                                alt="Roles and Specialisation NOC"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Time Zone Advantage */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/time-zone-advantage.png"
                                alt="24/7 Delivery Timeline NOC"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">Time Zone Advantage</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Concurrent work across time zones is an operational superpower on software projects. Consider a typical feature development cycle: UK architects design a feature on Monday; they document requirements, acceptance criteria, and technical approach; by end of Monday London time, the design document is ready for handoff.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        India engineers receive the brief on Tuesday morning India time; they begin implementation immediately. By Wednesday morning India time (Tuesday afternoon UK time), India has delivered code for review. UK engineers review Tuesday evening; they provide feedback or approval. If code is approved, it's deployed to staging Wednesday evening UK time.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            Compare this to sequential development: Monday design, Tuesday-Thursday implementation, Friday review. Time zones accelerate delivery meaningfully. A six-month project with concurrent delivery typically completes in 4.5 months; a three-month project completes in 2.5 months. Our clients consistently see 30-40% faster delivery.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Data Protection */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">UK Data Protection in Global Model</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Distributed delivery requires careful management of data protection. Your client data—customer records, financial information, legal documents—must remain under UK data protection law (GDPR, Data Protection Act 2018). Our global model maintains absolute separation of concerns. Client data is processed exclusively on UK-based infrastructure (AWS eu-west-2 or Azure UK South).
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        Your production databases, customer-facing applications, and sensitive data remain in UK cloud infrastructure, accessible only by UK-based team members or explicitly authorised India-based engineers (with granular access controls). India-based engineers work on code development (non-sensitive), system architecture (non-sensitive), testing against anonymised or synthetic data, and operational support.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        When India engineers need to troubleshoot a production issue, they access production systems through a VPN, they see encrypted logs, and they use service accounts that are audited. They never see plaintext customer data unless explicitly required for troubleshooting a specific issue; in that case, explicit approval is recorded.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            This separation is enforced technically: we use AWS IAM roles to restrict access by geography; VPN gateways that log all access; database-level encryption. We're ISO 27001 certified and pass regular audits (SOC 2 Type II, UK GDPR) that verify our practices.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/continuous-pipeline.png"
                                alt="UK Data Protection Cloud Infrastructure"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: QA Across Borders - Zoho + AI */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/zoho-logo.webp"
                                alt="Zoho Integration AI Ecosystem Pipeline"
                                fill
                                style={{ objectFit: "contain", background: "white", padding: "1.5rem" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">QA Across Borders: India's Zoho + AI Expertise</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Our India engineering centre has accumulated a decade of expertise in Zoho ecosystem implementations. Zoho has thousands of modules—Zoho CRM, Books, Projects, Inventory, People, Desk—and most mid-market firms use multiple Zoho applications. Our India engineers are fluent in Zoho's architecture, customisation patterns, API design, and extension frameworks.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        This expertise is a competitive advantage, particularly for firms using Zoho. When we implement AI for Zoho Inventory, India engineers understand not just the technical integration but the operational context: how Zoho Inventory integrates with Books, how purchase orders flow from Projects into Inventory, how custom fields are used.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        Quality assurance benefits substantially from this expertise. When testing AI systems that integrate with Zoho, our QA teams in India understand not just the AI output but whether that output correctly flows into Zoho workflows. They can test complex integrations: does an AI-generated invoice correctly post to Zoho Books?
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            Clients using Zoho benefit from accumulated knowledge across 100+ implementations. Our India engineers have seen patterns; they anticipate issues and recommend configurations that prevent common pitfalls. This knowledge transfer is one of the most valuable aspects of our global delivery model.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                
                <div className="container" style={{ maxWidth: "900px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <div className="section-label">Global Delivery FAQs</div>
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

             {/* Final CTA Section */}
             <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)", textAlign: "center" }}>
                <div className="container gsap-reveal" style={{ maxWidth: "800px" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1.5rem" }}>Accelerate Your Delivery</h2>
                    <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", lineHeight: 1.6 }}>
                        Harness the power of our 24/7 global engineering capability to ship products 40% faster than single-zone teams.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact?intent=team-overview" style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "1rem 2.5rem",
                            background: "var(--primary)",
                            color: "white",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            borderRadius: "14px",
                            textDecoration: "none",
                            boxShadow: "0 10px 30px rgba(79, 70, 229, 0.3)",
                            transition: "all 0.3s ease"
                        }}>
                            Meet Our Global Team <ArrowRight size={20} />
                        </Link>
                        <Link href="/resources/global-delivery-model.pdf" style={{
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
                            Download Guide
                        </Link>
                    </div>

                    <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", fontSize: "0.9rem", fontWeight: 600 }}>
                        <Link href="/why-fi-digital/our-team" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Our Team</Link>
                        <Link href="/why-fi-digital/uk-compliance" style={{ color: "var(--text-muted)", textDecoration: "none" }}>UK Compliance</Link>
                        <Link href="/why-fi-digital/approach-architecture" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Architecture</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
