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
        question: "What happens if your UK infrastructure experiences an outage?",
        answer: "Redundancy is built in. AWS eu-west-2 has multiple availability zones; if one data centre fails, your data is automatically served from another. We maintain database replication and automated failover. For critical systems, we recommend multi-region backup (eu-west-2 primary, eu-west-1 secondary) so that even if London-region experiences catastrophic failure, you have failover capability. Our SLA typically commits 99.95% uptime with automatic failover."
    },
    {
        question: "Can you prove my data stays in the UK?",
        answer: "Yes. You can audit AWS or Azure directly to verify data location. AWS region specifications document eu-west-2 physical location. Azure region specifications document UK South location. You can also review our infrastructure-as-code configuration (stored in your Git repository) to see exactly how data is stored and where. You can request third-party audits; we support SOC 2 audits that include data residency verification."
    },
    {
        question: "What about backups? Where do backups go?",
        answer: "Backups go to the same region as primary data (EU-West-2 for AWS, UK South for Azure). You can configure backup retention (typically 30 days to 7 years, depending on your requirements). Backup location is explicitly configured and verified. If you require backups in a different region, we configure that with your approval, but default is same-region backup for data residency compliance."
    },
    {
        question: "What if a US government agency demands my data?",
        answer: "This is an important question. US government requests for data must go through formal legal channels (mutual legal assistance treaties). When data is stored on US-based cloud platforms, US law applies to some government requests. However, when data is stored in UK regions (AWS eu-west-2, Azure UK South), UK law applies, and UK courts have been protective of data residency rights. The EU-UK trade agreement includes provisions protecting personal data in both directions. Additionally, you maintain control of encryption keys (customer-managed encryption), meaning even cloud providers cannot comply with requests for plaintext data. This is a complex area with ongoing litigation and regulatory evolution. We recommend discussing with your legal counsel and regulators if you have concerns."
    },
    {
        question: "Do you support GDPR Data Subject Access Requests?",
        answer: "Yes, absolutely. If an individual requests access to their personal data, we cooperate with your firm to compile that data and provide it to the individual. We maintain records of what data we process for each individual; we can produce those records efficiently. Typical turnaround is 2-3 weeks for compilation and delivery. We don't charge additional fees for data subject requests; it's part of our standard data processor responsibilities."
    },
    {
        question: "What about GDPR deletion rights? Can we delete historical data?",
        answer: "Yes. If an individual exercises their right to be forgotten, we delete their data from production systems and backups. We maintain deletion records (we delete, but we don't leave a record of what we deleted, which would be new personal data). For regulatory or legal holds (you must retain data for audit or litigation), we support those holds—data is retained as long as legally required, then deleted. Deletion is permanent; once deleted, data cannot be recovered."
    },
    {
        question: "How do you handle data breach notifications?",
        answer: "We maintain incident response procedures. If a breach is detected (unauthorised access, data loss, accidental exposure), we immediately: contain the breach (stop unauthorised access), conduct forensic investigation (understand what happened and what data was affected), and notify you immediately. You then have 72 hours to notify the ICO (GDPR requirement). We provide you with detailed breach assessment within 24 hours so you can make timely disclosure decisions. We also conduct post-incident review to prevent recurrence. Our cyber insurance covers breach costs; we have incident response capabilities available 24/7."
    },
    {
        question: "Can we move our data if we change vendors?",
        answer: "Yes, absolutely. Your data is yours. We provide export in standard formats; you can migrate to another vendor. No proprietary formats, no artificial barriers. Export typically takes 1-2 weeks for large datasets. You maintain data ownership throughout and can retrieve it at any time."
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

export default function ComplianceDataPage() {
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
            <title>UK Compliance & Data Residency | GDPR | DPA 2018 | FI Digital</title>
            <meta name="description" content="UK data residency, GDPR compliance, FCA aware, SRA aware, ICO AI ethics. Your data stays in UK, always." />
            
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
                        src="/images/uk-compliance-hero.png" 
                        alt="UK Data Residency & Compliance" 
                        fill 
                        style={{ objectFit: "cover", objectPosition: "left center", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }} 
                        priority 
                    />
                </div>
                <div className="container hero-container" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "100%", maxWidth: "1250px", margin: "0 auto" }}>
                    <div className="hero-tag" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.2rem", background: "rgba(79, 70, 229, 0.1)", borderRadius: "100px", border: "1px solid rgba(79, 70, 229, 0.2)", marginBottom: "2rem", color: "var(--primary)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                        UK Sovereign Cloud
                    </div>
                    <h1 className="hero-title" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.03em", color: "var(--text)" }}>
                        Your Data Stays <br />
                        <span style={{ color: "var(--primary)" }}>in the UK</span>
                    </h1>
                    <p className="hero-desc" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.6, maxWidth: "680px" }}>
                        GDPR, UK DPA 2018, FCA, SRA, ICO. Data residency guaranteed. No exceptions.
                    </p>
                </div>
            </section>

            {/* Section 1: Our Commitment */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                           <Image 
                                src="/images/our-commitment.png"
                                alt="ISO 27001, SOC 2 Type II Certifications"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">Our Commitment</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Data protection and regulatory compliance are foundational to FI Digital, not afterthoughts. Our commitment is unambiguous: your data remains in UK sovereign cloud infrastructure (AWS eu-west-2 or Azure UK South) under your complete control and subject to UK law only. No exceptions.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        No data is processed, stored, or transferred outside the UK without explicit written approval. This commitment applies regardless of whether you're a financial services firm (regulated by FCA), law firm (regulated by SRA), or manufacturer (regulated by Health and Safety Executive). Data protection and privacy compliance are core to our operations, not negotiable aspects of engagement.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        We understand that data protection is not merely a compliance checkbox; it's fundamental to client trust and regulatory accountability. When a UK financial services firm deploys an AI system, the FCA expects the firm to maintain control of where data is processed, how it's encrypted, who can access it, and what happens to it. We enable that control through our architecture: your data stays in UK cloud infrastructure, access is logged and auditable, encryption is customer-controlled, and deletion is permanent.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        We're ISO 27001 certified (Information Security Management Systems), which requires formal processes around information security governance, risk management, access control, encryption, incident response, and supplier management. Our certification is valid (annually audited by external auditors); it's not self-awarded. We also maintain SOC 2 Type II certification (System and Organization Controls) covering security, availability, processing integrity, confidentiality, and privacy.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            These certifications demonstrate that we maintain rigorous security practices and that those practices are independently verified. Compliance isn't just our responsibility; it's your responsibility, and we support you by ensuring we don't become your compliance liability. You can point to our architecture, certifications, and documentation when explaining your AI deployment to regulators.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: UK GDPR & Data Protection Act 2018 */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">UK GDPR & Data Protection Act 2018</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    UK GDPR and the Data Protection Act 2018 (DPA 2018) form the legal foundation for data protection in the UK. Both apply to any organisation processing personal data of UK residents, regardless of where that organisation is located. As an AI services provider processing data on your behalf, we are your data processor; you remain the data controller.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        This distinction is crucial for regulatory accountability: you decide what data is processed, for what purpose, and how long it's retained. We process data according to your instructions. This controller-processor relationship must be formalised in a Data Processing Agreement (DPA). Our standard DPA meets ICO guidance and covers: scope of processing, data categories, processing purposes, security measures, sub-processors, international transfers (we commit to UK-only processing), data subject rights, and incident response.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        UK GDPR's core principles require that personal data is processed lawfully, fairly, transparently; for specified explicit purposes only; minimally; accurately maintained; retained only as long as necessary; and protected with appropriate security. Our system architecture embeds these principles.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        Data minimisation: we process only the data necessary for your purposes. If you're running KYC automation, we don't ingest your entire customer database; we ingest only application records requiring verification. Accuracy: data we process is validated against source systems. Retention: data is deleted according to your retention policy automatically. Security: encryption, access controls, and monitoring protect data throughout its lifecycle.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            DPA 2018 adds UK-specific requirements beyond GDPR. Organisations must conduct Data Protection Impact Assessments (DPIAs) for high-risk processing. We support your DPIA by providing documentation of our security controls, data flows, and risk management approaches. We maintain detailed records of processing activities as required by DPA 2018; you have access to these records for your statutory record-keeping.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/gdpr-privacy.png"
                                alt="UK GDPR & DPA 2018 Principles"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Data Residency */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/dual-cloud-arch.png"
                                alt="Data Residency: AWS eu-west-2 & Azure UK South"
                                fill
                                style={{ objectFit: "cover", objectPosition: "left center" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">Data Residency: AWS eu-west-2 & Azure UK South</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Data residency is where your data physically exists and where it's processed. UK law requires that certain types of data (particularly personal data of UK residents and financial data of UK firms) remain in UK jurisdiction. We offer two deployment options, both of which guarantee UK data residency.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        AWS eu-west-2 (London) is our primary deployment platform. AWS's London region is a full AWS region with multiple availability zones, meaning your data is redundantly stored across geographically separated data centres within the London region. If one data centre experiences failure, your data is automatically available from another centre. AWS eu-west-2 is physically located in the UK; data never leaves UK jurisdiction.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        We use AWS encryption to ensure data is encrypted in transit (TLS 1.3) and at rest (AES-256). Encryption keys are customer-managed (you control the keys, not AWS). This arrangement ensures that even AWS staff cannot decrypt your data without your key.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        Azure UK South (London) is Microsoft's equivalent. Azure maintains full isolation between regions; data stored in UK South never replicates to other regions without explicit permission. Azure offers encryption at rest and in transit; key management options include customer-controlled keys. Integration with Azure services keeps workloads in UK South if you choose.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            We can also integrate with your cloud account: rather than us hosting infrastructure on behalf of you, we provision infrastructure within your own AWS or Azure account. This approach gives you maximum control and visibility—you can audit our infrastructure configuration directly. For firms with stringent requirements, we support customer-managed encryption: you generate encryption keys and provide them only when processing is required.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: FCA Awareness */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">FCA Awareness</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    The Financial Conduct Authority (FCA) is the primary regulator of UK financial services. The FCA doesn't prohibit AI use, but it requires firms deploying AI to maintain appropriate governance, manage risks, and maintain human accountability.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        We design systems with FCA expectations in mind. <strong>Algorithmic accountability:</strong> The FCA expects firms to understand what AI systems do, to trace decision-making, and to maintain human oversight. Our systems are architected for traceability—every decision is logged with reasoning, confidence, and human approver identity. When the FCA examines a firm's AI systems, you can produce comprehensive documentation.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Data governance:</strong> The FCA expects firms to know where data comes from, how it's transformed, and where it goes. Our integration design is explicit—we document data flows, validate data quality, and flag anomalies.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Consumer protection:</strong> The FCA expects AI to protect consumers, not exploit them. Our systems are designed to flag edge cases and conflicts of interest for human review; they don't autonomously make decisions that could harm consumers.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            <strong>Model risk management:</strong> We implement model monitoring, testing, and governance that aligns with FCA expectations. We don't claim to be "FCA-approved"—the FCA doesn't pre-approve specific AI systems—but we claim to be "FCA-aware," meaning we design systems and governance approaches that satisfy known FCA expectations. We can support conversations with the FCA by providing documentation and testing results.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/fca-awareness.png"
                                alt="FCA Awareness & Governance"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: SRA Awareness */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/SRA-Awareness.png"
                                alt="SRA Awareness & Standards of Conduct"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">SRA Awareness</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    The Solicitors Regulation Authority (SRA) regulates UK solicitors and law firms. The SRA's approach to AI is similarly expectation-based: the SRA doesn't prohibit AI, but it requires solicitors to maintain professional conduct, client confidentiality, and professional judgment. SRA Principle 4 (rule of law) and Principle 6 (ethical conduct) create expectations around AI governance.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        The SRA expects law firms using AI to: maintain client confidentiality (information must be appropriately safeguarded), understand AI limitations (solicitors must not rely blindly on AI), maintain professional judgment (solicitors remain responsible for their work), and ensure appropriate oversight. Our legal AI systems are architected with SRA expectations in mind. <strong>Confidentiality:</strong> client data is processed in confidential matter workflows; data is encrypted; access is restricted. You maintain attorney-client privilege.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Professional judgment:</strong> the AI is an analytical tool; lawyers review and approve all output. The lawyer remains accountable for legal advice, not the AI. <strong>Transparency:</strong> the AI explains its reasoning; lawyers understand what the AI is doing and why.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            <strong>Professional responsibility:</strong> if the AI errs, the firm knows immediately because the human lawyer reviews the output. The error is caught before it affects client service. <strong>Training and oversight:</strong> We provide training materials; you maintain oversight. We're available to explain AI capabilities and limitations to your firm's management and the SRA.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: ICO & AI Ethics */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">ICO & AI Ethics</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    The Information Commissioner's Office (ICO) is the UK's independent data protection authority. The ICO is increasingly focused on AI ethics, particularly as AI systems make decisions that affect individuals. We design AI systems with ICO's ethical expectations in mind.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Fairness and bias:</strong> AI systems can perpetuate or amplify existing biases. We actively test for bias, monitor for fairness across demographic groups, and adjust systems if unfair patterns emerge. <strong>Transparency and explainability:</strong> Our systems produce explanations that individuals can understand. If your firm uses AI to make a credit decision, the system explains which factors influenced the decision.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Individual rights:</strong> Our systems support data subject rights (access, correction, deletion, objection). <strong>Accountability:</strong> We maintain detailed records of system development and conduct Data Protection Impact Assessments for high-risk processing.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            AI ethics extends beyond regulatory compliance. Algorithms that appear technically correct can produce outcomes that feel unfair. We test for subtle biases and adjust systems to be fair to all groups. This is particularly important in financial services and legal services. Ethically-trained AI systems are better-performing systems: more robust, less vulnerable to regulatory challenge, and trusted by users.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", background: "#f8f9fa", padding: "2rem" }}>
                            <Image 
                                src="/images/ico-and-ai-ethics.png"
                                alt="ICO AI Ethics Principles"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                
                <div className="container" style={{ maxWidth: "900px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <div className="section-label" style={{ display: "inline-block", padding: "0.5rem 1rem", background: "rgba(79, 70, 229, 0.1)", color: "var(--primary)", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Compliance FAQs</div>
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
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)", textAlign: "center" }}>
                <div className="container gsap-reveal" style={{ maxWidth: "800px" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1.5rem", color: "var(--text)" }}>Secure Your Sovereign AI</h2>
                    <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", lineHeight: 1.6 }}>
                        Ensure your enterprise AI deployment is fully compliant with UK data residency laws. Schedule a technical deep dive with our architecture team.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact?intent=compliance-consultation" style={{
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
                            Schedule Compliance Deep Dive <ArrowRight size={20} />
                        </Link>
                        {/* <Link href="/resources/uk-compliance-data-residency.pdf" style={{
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
                            Download UK Compliance Whitepaper
                        </Link> */}
                    </div>

                    <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", fontSize: "0.9rem", fontWeight: 600 }}>
                        <Link href="/why-fi-digital/approach-architecture" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Architecture</Link>
                        <Link href="/why-fi-digital/partnerships" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Partnerships</Link>
                        <Link href="/industries/financial-services" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Financial Services</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
