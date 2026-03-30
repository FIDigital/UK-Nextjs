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
        question: "How long are typical project engagements?",
        answer: "Engagements vary. Initial implementations typically run 3-6 months. Ongoing support contracts often run 12-24 months or longer. Some clients start with a proof-of-concept (4-8 weeks), then expand to full implementation. We're flexible about engagement duration; we want long-term relationships, not short-term transactions."
    },
    {
        question: "Can we meet the team before committing?",
        answer: "Yes, absolutely. We conduct initial consultation calls where you meet our account manager and architects. For larger engagements, we recommend on-site visits where you meet the team in person and we understand your business in detail. Many clients visit our London office; some visit our India centre if they want deeper technical immersion."
    },
    {
        question: "What's the typical team composition for a project?",
        answer: "Typical project has: 1 UK Account Manager (relationship and delivery accountability), 1 UK Solutions Architect (design and quality oversight), 1-2 India Tech Leads (engineering management and direction), 3-6 India Engineers (implementation), 1-2 QA Engineers (testing), and 1 Integration Engineer (system connections). As project scales, team expands. Smaller projects might have smaller teams; larger transformations might have larger teams."
    },
    {
        question: "What professional certifications do your engineers hold?",
        answer: "Many hold relevant certifications: AWS certification (Solutions Architect, Security Specialist, DevOps Engineer), Microsoft certifications (Azure solutions, Dynamics), PMP (Project Management Professional), PRINCE2, etc. We don't require certifications for hiring (we value demonstrated capability more), but we support certification pursuit."
    },
    {
        question: "How do you manage time zone differences for UK clients?",
        answer: "UK client calls typically happen during business hours in London (9am-5pm UK time). For real-time issues, we have UK-based engineers available during UK hours. For India-based engineers, they adjust to UK hours when needed. Regular calls (standups, status updates) happen at mutually convenient times (typically late afternoon UK, late evening India). Async communication is the norm."
    },
    {
        question: "What's the typical ratio of UK-based to India-based team members on my project?",
        answer: "Typically 1 UK person per 5-10 India people. The UK person (account manager or architect) owns the relationship and quality; India engineers do the execution. This ratio means you have close UK contact while getting the benefit of India-based engineering capacity. On some projects, the ratio is closer (more UK involvement); on others, it's higher India ratio (less UK involvement). It depends on project needs."
    },
    {
        question: "Can we insist on specific individuals from your team?",
        answer: "Yes, for ongoing engagements, we can commit specific team members long-term. Once engineers are familiar with your business, continuity is valuable. We'll assign the same individuals to your project over months and years. This continuity creates deeper understanding and faster delivery."
    },
    {
        question: "What if we're not happy with a team member's performance?",
        answer: "Performance issues are addressed immediately. If a team member isn't working out, we replace them. It's that simple. We want high-performing teams on your project; if someone isn't delivering, we swap them. This applies to UK and India team members. Your satisfaction is our primary metric."
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

export default function OurTeamPage() {
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
            <title>FI Digital Team | Leadership | Engineers | Experts</title>
            <meta name="description" content="UK leadership, 200+ engineers across India and Australia. 10 years of AI and enterprise software experience." />
            
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
                .team-card:hover .team-overlay {
                    opacity: 1 !important;
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
                        src="/images/team-hero.png" 
                        alt="FI Digital Global Team" 
                        fill 
                        style={{ objectFit: "cover", objectPosition: "left center", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }} 
                        priority 
                    />
                </div>
                <div className="container hero-container" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "100%", maxWidth: "1250px", margin: "0 auto" }}>
                    <div className="hero-tag" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.2rem", background: "rgba(79, 70, 229, 0.1)", borderRadius: "100px", border: "1px solid rgba(79, 70, 229, 0.2)", marginBottom: "2rem", color: "var(--primary)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                        Our People
                    </div>
                    <h1 className="hero-title" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.03em", color: "var(--text)" }}>
                        Experienced Leaders, <br />
                        <span style={{ color: "var(--primary)" }}>Global Engineers</span>
                    </h1>
                    <p className="hero-desc" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.6, maxWidth: "680px" }}>
                        UK leadership, 200+ engineers across India and Australia, 10 years of AI and enterprise experience.
                    </p>
                </div>
            </section>

            {/* Section 1: UK Leadership */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <h2 className="section-title">Executive Leadership</h2>
                        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
                            FI Digital's operations are led by a strategic leadership team with deep experience in enterprise software, AI, and regulated global delivery.
                        </p>
                    </div>

                    <div className="gsap-reveal" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "2.5rem",
                        marginBottom: "2rem"
                    }}>
                        {/* Pratik Modi */}
                        <div className="team-card" style={{ position: "relative", borderRadius: "24px", overflow: "hidden", aspectRatio: "3/4", cursor: "pointer", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                            <Image src="/images/team/pratikmodi.webp" alt="Pratik Modi" fill style={{ objectFit: "cover" }} />
                            <div className="team-overlay" style={{
                                position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.4) 50%, transparent 100%)",
                                display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "2.5rem",
                                opacity: 0, transition: "opacity 0.4s ease"
                            }}>
                                <h3 style={{ margin: 0, color: "white", fontSize: "1.8rem", fontWeight: 800 }}>Pratik Modi</h3>
                                <p style={{ margin: 0, color: "var(--primary)", fontWeight: 700, marginTop: "0.25rem", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>CEO</p>
                            </div>
                        </div>

                        {/* Paras Shah */}
                        <div className="team-card" style={{ position: "relative", borderRadius: "24px", overflow: "hidden", aspectRatio: "3/4", cursor: "pointer", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                            <Image src="/images/team/paras.png" alt="Paras Shah" fill style={{ objectFit: "cover" }} />
                            <div className="team-overlay" style={{
                                position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.4) 50%, transparent 100%)",
                                display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "2.5rem",
                                opacity: 0, transition: "opacity 0.4s ease"
                            }}>
                                <h3 style={{ margin: 0, color: "white", fontSize: "1.8rem", fontWeight: 800 }}>Paras Shah</h3>
                                <p style={{ margin: 0, color: "var(--primary)", fontWeight: 700, marginTop: "0.25rem", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>CTO</p>
                            </div>
                        </div>

                        {/* Nishant Modi */}
                        <div className="team-card" style={{ position: "relative", borderRadius: "24px", overflow: "hidden", aspectRatio: "3/4", cursor: "pointer", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                            <Image src="/images/team/nishant.webp" alt="Nishant Modi" fill style={{ objectFit: "cover" }} />
                            <div className="team-overlay" style={{
                                position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.4) 50%, transparent 100%)",
                                display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "2.5rem",
                                opacity: 0, transition: "opacity 0.4s ease"
                            }}>
                                <h3 style={{ margin: 0, color: "white", fontSize: "1.8rem", fontWeight: 800 }}>Nishant Modi</h3>
                                <p style={{ margin: 0, color: "var(--primary)", fontWeight: 700, marginTop: "0.25rem", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Operations Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: India Engineering Centre */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">India Engineering Centre: 200+ Engineers</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Our India engineering centre comprises 200+ engineers across offices in Bangalore, Hyderabad, and Gujarat. These engineers represent the technical backbone of FI Digital, building the systems that UK clients deploy. Our engineering structure reflects specialisation rather than generalism.
                                </p>
                                
                                <ReadMoreText previewHeight={200} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Platform Engineers (40 FTE):</strong> Manage cloud infrastructure with deep expertise in AWS and Azure. Many hold AWS Security or Solutions Architect certs, building reproducible infrastructure with Terraform and Kubernetes.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>AI/ML Engineers (60 FTE):</strong> Build production AI systems integrating Claude, GPT-4o, and Gemini. They understand model fine-tuning, prompt engineering, ML frameworks (LangChain), and vector databases.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Domain Specialists (50 FTE):</strong> Financial Services engineers understand KYC/AML and FCA reporting. Legal Tech engineers understand contract law, SRA requirements, and legal workflows. Manufacturing engineers understand IoT integration and production scheduling. We also maintain a specialized Zoho team mapping these advanced capabilities into the Zoho ecosystem.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            <strong>QA, Integration & DevOps (65 FTE):</strong> Comprehensive testing operations, complex API integrations for ERPs (SAP, Oracle), and Site Reliability Engineering for 24/7 incident response. This specialisation structure ensures that every project has the right expertise. Domain expertise accelerates delivery and improves quality.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/india-engineering.png"
                                alt="India Engineering Centre Scale & Specializations"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Australian Architecture */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/Australian-Architecture-Innovation.png"
                                alt="Australian Architecture & Innovation Hub"
                                fill
                                style={{ objectFit: "cover", objectPosition: "left center" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">Australian Architecture & Innovation</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Our Australia office (Sydney, Melbourne) is the innovation centre for FI Digital. While our India centre focuses on execution, our Australia team focuses on architecture, innovation, and emerging technology evaluation.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Chief Technology Officer:</strong> A 20-year veteran of software architecture and machine learning systems. He previously worked at Google on ML infrastructure before founding and exiting an ML consulting firm. He evaluates emerging models and conducts architecture reviews on major projects.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Architecture Lead:</strong> 16 years building financial services and manufacturing systems. Mentors architects globally and designs complex ecosystems.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            <strong>Innovation Engineers (15-20 FTE):</strong> Focus on proof-of-concepts, reference implementations, and performance testing for cutting-edge models. This geographic separation of innovation (Australia) from delivery (India) and client relationships (UK) ensures that delivery focuses on what's proven and battle-tested, while innovation doesn't disrupt production.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Our Culture */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">Our Culture</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    FI Digital's culture is shaped by our belief that technology should serve human needs, that quality matters more than speed, and that learning is continuous. We hire people genuinely curious about AI and solving complex problems deeply.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Depth over credentials:</strong> We look for demonstrated capability rather than just degrees. Some of our best engineers came from law, finance, or manufacturing.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>High autonomy, high accountability:</strong> Engineers are trusted to make technical decisions. We value transparency and documentation over extensive bureaucracy.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Learning and Open Source:</strong> We allocate time for engineers to learn, attend conferences, and contribute heavily to open-source communities like LangChain and n8n.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            <strong>Work-life balance & Blameless Postmortems:</strong> Crunch-time deadlines are exceptions, not norms. When incidents occur in production, we do not punish individuals; we treat incidents as learning opportunities. Diverse teams make better decisions, and we actively shape inclusive environments.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/our-culture.png"
                                alt="FI Digital Developer Culture"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Join Us */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)", textAlign: "center" }}>
                <div className="container gsap-reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <div className="section-label" style={{ display: "inline-block", padding: "0.5rem 1rem", background: "rgba(79, 70, 229, 0.1)", color: "var(--primary)", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "1.5rem" }}>Join Our Team</div>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1.5rem" }}>We're Growing in the UK and Beyond</h2>
                    <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "3rem", lineHeight: 1.6 }}>
                        We're hiring architects, engineers, and specialists across multiple disciplines. If you're passionate about AI, regulated industries, or enterprise software, we offer competitive compensation, mentorship, global exposure, and meaningful work on cutting edge problems. We're also open to strategic partnerships with domain-expert firms.
                    </p>
                    <Link href="/careers" className="btn-primary" style={{ padding: "1rem 2.5rem", borderRadius: "14px", textDecoration: "none" }}>
                        View Careers Page
                    </Link>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                
                <div className="container" style={{ maxWidth: "900px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <div className="section-label" style={{ display: "inline-block", padding: "0.5rem 1rem", background: "rgba(79, 70, 229, 0.1)", color: "var(--primary)", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Team & Operations FAQs</div>
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
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1.5rem", color: "var(--text)" }}>Talk to Our Experts</h2>
                    <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", lineHeight: 1.6 }}>
                        Discover how our global talent pool and localized domain knowledge can accelerate your AI objectives safely.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact?intent=team-introduction" style={{
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
                            Get to Know Our Team <ArrowRight size={20} />
                        </Link>
                        <Link href="/careers" style={{
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
                            View Careers Page
                        </Link>
                    </div>

                    <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", fontSize: "0.9rem", fontWeight: 600 }}>
                        <Link href="/why-fi-digital/global-delivery-model" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Global Delivery Model</Link>
                        <Link href="/why-fi-digital/approach-architecture" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Approach & Architecture</Link>
                        <Link href="/contact" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
