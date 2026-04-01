"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Cloud, Database } from "lucide-react";
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
        question: "What if a partnership becomes problematic? Are we locked in?",
        answer: "Partnerships are means to serving clients better, not ends in themselves. If AWS's pricing becomes uneconomical, we migrate to Azure or Google Cloud. If Claude's API becomes unavailable, we shift to GPT-4o or Gemini. Your system is designed to be model-agnostic; you're not dependent on any single partner. We proactively monitor partnership health and costs, recommending alternatives if better options emerge."
    },
    {
        question: "Do you recommend specific partners to clients?",
        answer: "We recommend the technology that's optimal for your use case. For legal and financial services (reasoning-heavy), Claude via AWS Bedrock. For real-time operations (dispatch, manufacturing), Gemini via Google Cloud. For Microsoft ecosystem clients, Azure OpenAI. For Zoho users, native Zoho with AI extensions. These are genuine recommendations based on technical fit, not partnership relationships."
    },
    {
        question: "Are we paying for redundant partnerships?",
        answer: "No. We maintain partnerships to provide options and resilience, not to charge premium costs. You pay for the specific technology you use. You don't pay for partnerships we maintain with other vendors. In fact, partnership relationships often enable cost advantages (volume discounts, reserved capacity) that we pass to clients."
    },
    {
        question: "Can FI Digital leave partnership and take my system elsewhere?",
        answer: "Yes, you own your systems. Your architecture is portable: we use standard AWS, Azure, and open-source technologies. You can move your deployment to another vendor; your data is yours. We'd prefer you remain a client because we believe we deliver exceptional value, but you're never locked in by proprietary technology or relationships."
    },
    {
        question: "What about partner certifications? How do I know they're genuine?",
        answer: "Partner certifications are verified through partner portals. You can check AWS Partner Network, Microsoft Cloud Partner Program, and Zoho Partner accounts directly to verify our status. These aren't self-awarded; they're maintained by the companies and require ongoing compliance with programme requirements."
    },
    {
        question: "Do partner relationships affect pricing?",
        answer: "Indirectly, yes—positively. Partnership volume discounts, reserved capacity commitments, and rebate arrangements that we negotiate are passed to clients. A partner with buying power at scale often gets better pricing than a customer would negotiate independently. Some of our cost advantage comes from partnership arrangements."
    },
    {
        question: "What if a partner (e.g., Anthropic) experiences a breach?",
        answer: "Security is each vendor's responsibility for their infrastructure. AWS, Microsoft, Google, and Anthropic have world-class security teams and undergo regular third-party audits. We maintain security regardless; we have additional layers of protection (encryption, access controls, monitoring) that protect your data even if a vendor experiences an incident. We carry cyber insurance specifically for this scenario."
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

const NetworkDiagramVisual = () => {
    return (
        <div style={{
            width: "100%",
            height: "550px",
            borderRadius: "32px",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem"
        }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "3rem",
                width: "100%",
                maxWidth: "600px",
                margin: "0 auto"
            }}>
                {/* AWS */}
                <div style={{
                    background: "white", padding: "12%", borderRadius: "24px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    aspectRatio: "1", border: "1px solid rgba(0,0,0,0.05)",
                    transition: "transform 0.3s ease"
                }}>
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <Image src="/images/aws.jpg" alt="AWS" fill style={{ objectFit: "contain" }} />
                    </div>
                </div>

                {/* Microsoft */}
                <div style={{
                    background: "white", padding: "12%", borderRadius: "24px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    aspectRatio: "1", border: "1px solid rgba(0,0,0,0.05)",
                    transition: "transform 0.3s ease"
                }}>
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <Image src="/images/microsoft-azure-logo.webp" alt="Microsoft Azure" fill style={{ objectFit: "contain" }} />
                    </div>
                </div>

                {/* Anthropic */}
                <div style={{
                    background: "white", padding: "12%", borderRadius: "24px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    aspectRatio: "1", border: "1px solid rgba(0,0,0,0.05)",
                    transition: "transform 0.3s ease"
                }}>
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <Image src="/images/Anthropic-Logo.wine.png" alt="Anthropic" fill style={{ objectFit: "contain" }} />
                    </div>
                </div>

                {/* Google */}
                <div style={{
                    background: "white", padding: "12%", borderRadius: "24px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    aspectRatio: "1", border: "1px solid rgba(0,0,0,0.05)",
                    transition: "transform 0.3s ease"
                }}>
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <Image src="/images/logo_google_cloud.png" alt="Google Cloud" fill style={{ objectFit: "contain" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function PartnershipsPage() {
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
            <title>Technology Partners | AWS | Microsoft | Anthropic | FI Digital UK</title>
            <meta name="description" content="AWS Partner, Microsoft Partner, Anthropic, Google Cloud partner. Enterprise certification and integrations." />

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
                        src="/images/Built-on-Enterprise-Partnerships.png"
                        alt="Enterprise Partnerships"
                        fill
                        style={{ objectFit: "cover", objectPosition: "left center", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }}
                        priority
                    />
                </div>
                <div className="container hero-container" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "100%", maxWidth: "1250px", margin: "0 auto" }}>
                    <div className="hero-tag" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.2rem", background: "rgba(79, 70, 229, 0.1)", borderRadius: "100px", border: "1px solid rgba(79, 70, 229, 0.2)", marginBottom: "2rem", color: "var(--primary)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                        Technology Partners
                    </div>
                    <h1 className="hero-title" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.03em", color: "var(--text)" }}>
                        Built on <span style={{ color: "var(--primary)" }}>Enterprise</span> <br />
                        Partnerships
                    </h1>
                    <p className="hero-desc" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.6, maxWidth: "680px" }}>
                        AWS Partner, Microsoft Partner, Anthropic & Google partnerships. 10 years of Zoho implementation expertise.
                    </p>
                </div>
            </section>

            {/* Section 1: Technology Partners Overview */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <NetworkDiagramVisual />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">Technology Partners Overview</h2>

                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    FI Digital is built on partnerships with the world's leading technology companies. These aren't superficial partnerships; they're technical relationships that shape our product architecture and delivery approach.
                                </p>

                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>AWS</strong> is our primary cloud infrastructure provider. We hold AWS Advanced Partner status, which certifies that we have demonstrated technical expertise, customer success, and operational excellence in delivering AWS-based solutions. We maintain active relationships with AWS solution architects, regularly attend AWS training and certification updates, and participate in AWS partner programmes focused on AI/ML and regulated industries.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        Our infrastructure is almost entirely AWS-based: we use AWS Bedrock for managed Claude access, AWS EC2 for compute, AWS RDS for databases, AWS S3 for storage, and AWS security services (GuardDuty, Security Hub, Config) for compliance. We're certified as a Competency Partner in AWS AI/ML.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Microsoft</strong> is our secondary cloud platform, with growing importance for clients committed to the Microsoft ecosystem. We hold Microsoft Gold Partner status in Data & AI, certifying advanced capability in Azure, OpenAI integration, and Dynamics-based solutions.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Anthropic</strong> is our primary AI model partner. As a trusted partner, we have deep access to Claude, advance notice of model releases, dedicated support, and participation in Anthropic's partner programme. This partnership shapes our legal and financial services solutions.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Google Cloud</strong> provides Gemini access and complementary services. We're experienced with Google Cloud's AI platform and integrated services. <strong>Zoho</strong> represents a special case: Zoho is not just a partner but an extension of our own capability. We've implemented Zoho solutions for 100+ clients across financial services, professional services, and manufacturing.
                                    </p>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: AWS Partnership Detail */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">AWS Partnership Detail</h2>

                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    AWS is the foundational platform for most FI Digital deployments. Our Advanced Partner status (with AI/ML Competency) reflects years of successful implementations and customer outcomes. AWS provides the infrastructure, the security guarantees, and the management services that make enterprise AI deployment viable.
                                </p>

                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        We deploy on AWS EC2 for general compute, but we increasingly use managed services: AWS Bedrock for Claude/Anthropic model access, AWS SageMaker for model management and monitoring, AWS Lambda for serverless AI inference, and AWS AppFlow for data integration. These managed services shift operational burden from us to AWS; they reduce the infrastructure you need to manage; they simplify deployment; and they improve security.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        AWS Bedrock is particularly important because it provides managed Claude access without requiring direct connection to Anthropic's infrastructure. Your requests flow through AWS's secure infrastructure; AWS encrypts data in transit and at rest; AWS doesn't use your data for model training. This arrangement provides the security and data protection guarantees that enterprise clients require.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            AWS's UK infrastructure (eu-west-2, London) is critical. Your data residency requirements are satisfied; your regulatory obligations (GDPR, UK DPA 2018) are met; your customers' data remains in UK sovereign cloud. We size infrastructure for your performance requirements, then leverage AWS auto-scaling to maintain performance while optimising cost.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", background: "#f8f9fa", padding: "2rem" }}>
                            {/* We will use an advanced CSS design here instead of a static image to represent AWS integration, or one of the existing pipeline images */}
                            <Image
                                src="/images/aws.jpg"
                                alt="AWS Infrastructure Security & Bedrock"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Microsoft & Azure Detail */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image
                                src="/images/microsoft-azure-logo.webp"
                                alt="AWS Advanced Partner Technology"
                                fill
                                style={{ objectFit: "contain", background: "white" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">Microsoft & Azure Detail</h2>

                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    For clients committed to the Microsoft ecosystem, Azure OpenAI UK South provides enterprise-grade access to GPT-4o on sovereign UK infrastructure. Azure OpenAI differs from direct OpenAI API access: Microsoft manages the infrastructure, provides SLA guarantees, ensures UK data residency, and integrates seamlessly with your Azure environment.
                                </p>

                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        Your AI workloads run in the same Azure tenant as your Dynamics 365, Power Platform, and other Microsoft services. Integration is native: you can build Power Automate workflows that call GPT-4o; you can embed vision AI into Power Apps; you can orchestrate AI within Dynamics business processes. This ecosystem integration is powerful for firms already invested in Microsoft.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        We integrate Azure OpenAI with Azure Cognitive Services (language understanding, content moderation, speech-to-text), Azure Data Lake Storage for your data warehousing, and Azure Synapse for analytics. For firms using Dynamics 365 for CRM or ERP, we can build AI capabilities that extend Dynamics' native functionality: automated customer intelligence, AI-powered sales recommendations, predictive account scoring.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            Azure's governance and compliance tools align with enterprise security requirements. Audit trails are comprehensive; data protection controls are robust; you can enforce organisational policies consistently. For regulated industries, Azure also offers Azure for Government, Azure Confidential Computing, and Azure Stack for stringent compliance requirements.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Anthropic Detail */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">Anthropic Detail</h2>

                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Anthropic is our strategic AI model partner. Claude is the foundation of our legal and financial services solutions because of its extended reasoning capability, explainability, and alignment with regulatory requirements.
                                </p>

                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        Our partnership with Anthropic is technically deep: we have access to Anthropic's research, we participate in conversations about model capabilities and limitations, and we provide feedback that shapes Anthropic's product direction. Claude's architecture—particularly extended context (200,000 tokens) and constitutional AI (which aligns model outputs with human-chosen values)—is uniquely suited to regulated industries.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        Extended context allows Claude to hold entire documents, conversations, and regulatory frameworks in mind simultaneously, enabling reasoning that smaller-context models cannot achieve. Constitutional AI means Claude is trained to be harmless, honest, and helpful using human-chosen principles; it avoids deception, explains limitations, and errs on the side of caution in high-stakes domains.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            We've built deep domain expertise in Claude: we know which tasks it excels at (document analysis, legal reasoning, regulatory compliance analysis), which tasks it struggles with, and how to architect systems that leverage Claude's strengths. Our architecture uses Claude for reasoning-heavy tasks and other models for speed-dependent tasks.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image
                                src="/images/Anthropic-Logo.wine.png"
                                alt="Anthropic Claude API Models"
                                fill
                                style={{ objectFit: "contain", background: "white", padding: "2rem" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Google Cloud Detail */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image
                                src="/images/logo_google_cloud.png"
                                alt="Google Cloud Gemini Models"
                                fill
                                style={{ objectFit: "contain", background: "white", padding: "2rem" }} />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">Google Cloud Detail</h2>

                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Google Cloud provides Gemini and complementary services that enable real-time AI operations. Gemini is our primary model for logistics, manufacturing, and operations AI because of its training on structured data and multi-step reasoning under time constraints.
                                </p>

                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        Gemini excels at constraint satisfaction problems (routing, scheduling, resource allocation) that require rapid decision-making. Google Cloud's infrastructure provides access to Gemini API with scale and reliability guarantees. Google Cloud also provides services that enhance our operational AI: BigQuery for analytics on massive datasets, Vertex AI for model management, and document understanding capabilities.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        For clients with existing Google Cloud infrastructure, integration is natural. We can deploy our AI systems on the same Google Cloud account as your business applications. Google Workspace integration is another advantage: if your firm uses Workspace, Gemini integrates into these tools natively.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            Google Cloud's data analytics capabilities are particularly strong: BigQuery can process billions of rows in seconds, enabling analytics on massive operational datasets to discover patterns humans never see—correlations between traffic patterns, weather, and delivery success rates.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Zoho Partnership */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">Zoho Partnership: A Decade of Expertise</h2>

                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Our Zoho expertise is accumulated over a decade of implementation experience. Zoho isn't a single product; it's a family of 40+ business applications. Most mid-market firms use 3-5 Zoho applications; many use 8-10.
                                </p>

                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        Zoho's customisation and integration capabilities are extensive but require deep understanding to use effectively. Our engineers have implemented Zoho solutions across financial services, professional services, and manufacturing/logistics. This experience has taught us where Zoho excels and where integration with external systems is necessary.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        We integrate AI with Zoho in two primary ways. First, we use Zoho as the operational data source: AI systems read from Zoho's databases, perform analysis, and write results back. For example, a CRM becomes the source for KYC automation. Second, we extend Zoho's native functionality with AI, such as adding AI-powered demand forecasting to Zoho Inventory using Zoho Creator.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            Zoho's openness—comprehensive APIs, extensive customisation, scripting capabilities—makes this integration natural. For firms already committed to Zoho, our partnership offers clear value: we understand your deployment and can implement AI solutions without the learning curve.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image
                                src="/images/zoho-logo.webp"
                                alt="Zoho Enterprise Consulting"
                                fill
                                style={{ objectFit: "contain", background: "white", padding: "2rem" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: What This Means for Clients */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image
                                src="/images/What-This-Means-for-Clients.png"
                                alt="Client Benefits"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">What This Means for Clients</h2>

                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    These partnerships translate into concrete client benefits. First, you get access to enterprise-grade infrastructure backed by the world's leading cloud and AI companies. Their security controls exceed what any individual consulting firm could build independently.
                                </p>

                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        Second, you benefit from our specialised knowledge. We're not generalists deploying AI; we're specialists in financial services AI, legal services AI, and operations AI. Our decade of Zoho experience means we can implement Zoho-based solutions faster effectively.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        Third, you get continuity and support. If you encounter an issue with Claude, we can escalate to Anthropic. If you encounter AWS infrastructure issues, we can escalate to AWS. You're not relying solely on FI Digital for support; you're leveraging a broader ecosystem of expert partners.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            Fourth, you're future-proofed. As these technologies evolve, we stay current and implement new features quickly. Finally, you benefit from our relationships. We provide feedback that shapes product direction, participate in beta programmes, and advise customers on roadmap decisions.
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
                        <div className="section-label" style={{ display: "inline-block", padding: "0.5rem 1rem", background: "rgba(79, 70, 229, 0.1)", color: "var(--primary)", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Partnership FAQs</div>
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
                        Harness the power of our enterprise partnerships to secure and scale your AI implementation.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact?intent=technology-consultation" style={{
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
                            Explore Technology Stack <ArrowRight size={20} />
                        </Link>
                        <Link href="/resources/partnerships-certifications.pdf" style={{
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
                            Download Partnership Whitepaper
                        </Link>
                    </div>

                    <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", fontSize: "0.9rem", fontWeight: 600 }}>
                        <Link href="/why-fi-digital/approach-architecture" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Architecture</Link>
                        <Link href="/why-fi-digital/uk-compliance" style={{ color: "var(--text-muted)", textDecoration: "none" }}>UK Compliance</Link>
                        <Link href="/why-fi-digital/global-delivery-model" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Global Delivery</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
