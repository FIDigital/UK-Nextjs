"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import HeroSection from "@/components/HeroSection";
import FAQItem from "@/components/FAQItem";
import { HeroArchitectureVisual, ModelAgnosticVisual, DualCloudVisual, CICDPipelineVisual, ObservabilityVisual, SecurityVisual } from "@/components/ArchitectureIllustrations";

import { ArrowRight, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

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
                {isExpanded ? "Show Less" : "Read Full Philosophy"}
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

const faqs = [
    {
        question: "How does the system handle real-world constraints like traffic and vehicle breakdowns?",
        answer: "Real-time constraints are central to our design. The system ingests live traffic data (Google Maps, TomTom), real-time vehicle telemetry (current location, fuel level, hours driven), and driver availability. When vehicle breakdown occurs, the system immediately recalculates affected routes, reassigning deliveries to nearby vehicles. When traffic conditions change, routes are updated dynamically if new conditions materially affect delivery windows. The system continuously optimises; it's not a static plan generated once per day."
    },
    {
        question: "Can the system work with multiple fleet types and driver certifications?",
        answer: "Yes, absolutely. You can specify vehicle constraints (e.g., only articulated vehicles can carry pallets; only CPC-qualified drivers can carry hazardous materials; electric vehicles for city centre delivery). The system respects these constraints when generating routes. You can also specify vehicle specialisation preferences (e.g., temperature-controlled vehicles for refrigerated goods) and customer preferences (e.g., named-driver loyalty). All constraints are incorporated into optimisation."
    },
    {
        question: "What's the cost impact if we have many customer time-window constraints?",
        answer: "Time-window constraints are actually manageable and don't dramatically impact cost savings. In fact, respecting customer time windows precisely is where AI-driven dispatch creates value versus human dispatch—humans guess at time windows or miss them; the AI optimises routes to respect them perfectly. The cost impact is minimal: 10-15% improvement in vehicle utilisation even with strict time windows."
    },
    {
        question: "How does predictive maintenance integrate with existing maintenance systems?",
        answer: "We integrate with whatever maintenance system you use (SAP PM module, standalone CMMS, or even spreadsheets). Anomaly detection results are pushed to your maintenance system as alerts, work orders, or scheduled maintenance. Your maintenance team reviews the AI recommendation and either approves scheduled maintenance or dismisses the alert if context suggests no action is needed. Human maintenance expertise remains central; AI is advisory."
    },
    {
        question: "What IoT sensors do we need to install for predictive maintenance?",
        answer: "You likely already have relevant data. Most modern manufacturing equipment has built-in sensors (vibration, temperature, power monitoring). If you're using ABB, Siemens, or GE equipment, you already have sensor data. We integrate with your existing IoT platform or sensor infrastructure. For older equipment without sensors, you can add low-cost vibration and temperature sensors (£200-500 per machine). ROI is typically strong: preventing one unplanned breakdown pays for sensor installation."
    },
    {
        question: "How do we ensure drivers trust and follow AI-optimised routes?",
        answer: "This is a change management question, not a technical one. Drivers typically accept AI routes within 1-2 weeks once they see that routes are genuinely shorter, that time windows are respected, and that they're not being micromanaged. We recommend transparent communication: explain that AI is optimising for their efficiency too. Most drivers appreciate the system because it reverses the burden of route planning and reduces time pressure. Experienced drivers often discover that AI-generated routes avoid congestion they know about; they gain confidence quickly."
    },
    {
        question: "What's the implementation timeline for a 100+ vehicle fleet?",
        answer: "Implementation typically takes 10-14 weeks. Weeks 1-2: system setup, integration with your TMS and telematics. Weeks 3-6: data migration and system testing with historical data. Weeks 7-10: pilot deployment with one depot or vehicle subset, refining algorithms based on real operation. Weeks 11-14: firm-wide rollout and team training. Go-live is typically quick (1 day per depot); rollback is possible if issues emerge (we keep manual dispatch running parallel initially)."
    },
    {
        question: "Can the system be used for resource planning, not just daily dispatch?",
        answer: "Yes, that's an advanced use case. Once you have 3-6 months of operational data, the system can forecast demand seasonality, predict peak periods, and recommend fleet size and composition for the year ahead. You can run scenarios: 'If we added 20 vehicles, how would capacity and costs change?' This planning function is valuable but less commonly used than daily dispatch optimisation. Many customers eventually implement it as a second phase."
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

export default function ApproachArchitecturePage() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.config({ nullTargetWarn: false });
        
        // Hero timeline
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(".hero-tag", 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8 }
        )
        .fromTo(".hero-title",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=0.5"
        )
        .fromTo(".hero-desc",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
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

        const imgElements = gsap.utils.toArray(".gsap-img-wrapper");
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

    }, { scope: containerRef });

    const PlaceholderStyle = {
        width: "100%",
        minHeight: "450px",
        background: "rgba(79, 70, 229, 0.05)",
        borderRadius: "32px",
        border: "1px dashed rgba(79, 70, 229, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        color: "var(--primary)",
        fontSize: "0.95rem",
        fontWeight: 600,
        letterSpacing: "0.02em",
        position: "relative",
        overflow: "hidden"
    };

    return (
        <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)" }}>
            <style jsx>{`
                .content-grid {
                    display: grid;
                    gap: 5rem;
                    align-items: center;
                    grid-template-columns: 1fr;
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
                        src="/images/hero-realistic.png" 
                        alt="Enterprise AI Architecture" 
                        fill 
                        style={{ objectFit: "cover", objectPosition: "left center", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }} 
                        priority 
                    />
                </div>
                <div className="container hero-container" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "100%", maxWidth: "1250px", margin: "0 auto" }}>
                    <div className="hero-tag" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.2rem", background: "rgba(79, 70, 229, 0.1)", borderRadius: "100px", border: "1px solid rgba(79, 70, 229, 0.2)", marginBottom: "2rem", color: "var(--primary)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                        FI Digital Enterprise Architecture
                    </div>
                    <h1 className="hero-title" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.03em", color: "var(--text)" }}>
                        The Right Model for the <br />
                        <span style={{ color: "var(--primary)" }}>Right Problem</span>
                    </h1>
                    <p className="hero-desc" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.6, maxWidth: "680px" }}>
                        Model-agnostic AI architecture that uses Claude for reasoning, GPT-4o for vision, Gemini for real-time operations. Multi-cloud deployment across AWS and Azure.
                    </p>
                </div>
            </section>

            {/* Section 1: Model-Agnostic Philosophy */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                            <Image src="/images/model-agnostic-realistic.png" alt="Model Agnostic AI Approach" fill style={{ objectFit: "cover" }} />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">Model-Agnostic Philosophy</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Most AI consultancies are model-married: they commit to a single foundation model and fit every problem to that model's strengths. This creates misalignment. If your primary model is excellent at vision tasks but weak at reasoning, you're incentivised to force-fit reasoning problems onto a vision model. The result is suboptimal solutions.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        We adopt a model-agnostic philosophy: we choose the best model for each problem, regardless of vendor. For document analysis, legal reasoning, and complex compliance decisions, <strong>Claude (from Anthropic)</strong> is the superior choice. Claude's 200,000-token context window, extended reasoning capability, and explainability are unmatched.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        For real-time operations requiring rapid decision-making and constraint satisfaction (dispatch, warehouse optimisation, production scheduling), <strong>Google Gemini</strong> delivers superior performance because of its training on structured data and multi-step reasoning under time constraints.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        For vision tasks (document scanning, damage assessment, quality inspection), <strong>GPT-4o (Microsoft's deployment of OpenAI's model)</strong> is strongest because of its superior image understanding and recent improvements in spatial reasoning.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        For cost-sensitive applications where latent understanding is acceptable, we use open-source models like Llama 3 or Mistral, deployed via Replicate or your own infrastructure. This model diversity requires more sophisticated orchestration, but it delivers measurably better outcomes.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            A client using our approach gets a legal AI system powered by Claude, a logistics AI system powered by Gemini, and an inspection AI system powered by GPT-4o—because each model is genuinely optimal for its task. This hedges risk against vendor price hikes or API downtime.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: AWS Bedrock & Azure OpenAI */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">AWS Bedrock & Azure OpenAI: Dual UK Cloud</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Your data must remain in UK sovereign cloud infrastructure, with no ambiguity about data residency, data governance, or where processing occurs. We offer two primary deployment architectures, both of which ensure UK data residency.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>AWS Bedrock (available in eu-west-2, London)</strong> provides managed access to Claude without requiring direct API calls to Anthropic's infrastructure. Your requests flow through AWS's data centres; data residency is guaranteed. We use Bedrock when deploying Claude for financial services, legal work, and sensitive applications because AWS's SoC 2 compliance and GDPR certifications provide regulatory reassurance.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Azure OpenAI UK South (available in London)</strong> provides managed access to GPT-4o and other OpenAI models. Your requests remain on Microsoft's UK infrastructure; data does not leave the UK and is not used for model training. Firms with existing Azure commitments (Microsoft Dynamics, Teams, Power Platform) achieve seamless integration.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            Both deployments support enterprise requirements: dedicated throughput, higher rate limits, SLA guarantees, and direct support. You can also adopt a hybrid model (Claude via AWS, GPT-4o via Azure) orchestrated through a common API gateway like n8n, giving your teams a unified platform.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                            <Image src="/images/dual-cloud-realistic.png" alt="Dual Cloud Deployment" fill style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: CI/CD Pipeline */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                            <Image src="/images/cicd-pipeline-realistic.png" alt="Automated CI/CD AI Pipeline" fill style={{ objectFit: "cover" }} />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">Infrastructure-as-Code & CI/CD</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Your AI systems must be reproducible, versioned, and automatically deployed—just like your application code. We enforce infrastructure-as-code (IaC) practices across all deployments.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        Every AI system is defined in code (Terraform for cloud infrastructure, Kubernetes manifests for container deployment), version-controlled in Git, and auditable. When a new AI model version is available, we update the code, run comprehensive tests, and deploy only after validation. There's no manual server configuration, no snowflake deployments, and no tribal knowledge.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        When you commit changes (model updates, prompt refinement), the pipeline automatically runs unit tests, executes regression tests against historical data, evaluates model performance on a test dataset, deploys to staging, runs smoke tests, and (with human approval) deploys to production.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            If a new model causes a regression or unexpected output, we automatically rollback to the previous version. This level of rigor is standard in application development but uncommon in AI systems. We apply it universally to ensure tracebility and reliability.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Section 4: Monitoring & Observability for AI */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">Monitoring & Observability for AI</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Traditional application monitoring (CPU, memory, latency, error rates) is necessary but insufficient for AI systems. AI systems can silently degrade—models can produce consistently wrong answers, drift in capability, or exhibit unexpected bias—without triggering traditional alerts. We implement comprehensive AI observability.
                                </p>
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        Every AI inference is logged with: input, output, confidence score, model version, latency, cost, and human feedback (if available). This data is aggregated into dashboards that track: model performance over time, error patterns, cost trends, and latency distribution.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        When performance degrades (accuracy drops, confidence decreases, error rates increase), alerts trigger automatically. When model output begins drifting from expected patterns, we detect it. When latency increases unexpectedly (indicating computational bottlenecks), we're alerted.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        Observability includes human feedback loops. When humans correct an AI decision, override a recommendation, or flag an error, that feedback is captured and analysed. If a large percentage of humans are overriding a particular type of decision, that indicates the model is weak on that decision type. We use that signal to retrain the model or adjust confidence thresholds.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            For regulated industries (financial services, legal), observability is essential for regulatory conversations. When the FCA or SRA asks how your AI system performed last month, you have comprehensive data: accuracy metrics, error logs, human override patterns, and performance trends. You can answer with confidence.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                            <Image src="/images/observability-realistic.png" alt="AI Observability Dashboard" fill style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Security Practices */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                            <Image src="/images/security-realistic.png" alt="Deep Security Architecture" fill style={{ objectFit: "cover" }} />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">Security Practices</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    AI systems handle sensitive data—customer records, financial information, legal documents, health information. Security practices must be comprehensive and embedded into architecture. We implement defence-in-depth security. Data in transit is encrypted using TLS 1.3. Data at rest is encrypted using AES-256.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        Access to AI systems is authenticated and authorised: users authenticate via SSO (Okta, Azure AD, or other enterprise providers); fine-grained authorisation ensures users can only access systems they're permitted to use; all access is logged and auditable. API keys and credentials are managed through secure vaults (AWS Secrets Manager, Azure Key Vault, or HashiCorp Vault), never hardcoded or checked into version control.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        AI model outputs are reviewed before being returned to users—sensitive data in model outputs (PII, confidential information) is masked or redacted. Code and infrastructure are regularly scanned for vulnerabilities. We conduct threat modelling on new systems, identifying potential attack vectors and mitigating them.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            We work with your security team to understand your specific requirements and threat model, then tailor controls accordingly. Penetration testing is conducted annually. Incident response procedures are documented and regularly exercised. Security isn't a feature added at the end; it's embedded throughout design and operation.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture FAQ Section */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "start" }}>
                        <div className="gsap-reveal" style={{ position: "sticky", top: "120px" }}>
                            <div className="section-label">FAQ</div>
                            <h2 className="section-title">Common Questions</h2>
                            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                                Find answers to common technical queries regarding our AI implementation, fleet optimization tracking, routing predictability, and system integration.
                            </p>
                            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", fontWeight: 700, textDecoration: "none" }}>
                                Still have questions? Talk to an expert <ArrowRight size={18} />
                            </Link>
                        </div>
                        
                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <FAQItem 
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

             <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)", textAlign: "center" }}>
                <div className="container gsap-reveal" style={{ maxWidth: "800px" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1.5rem" }}>Evaluate Your Stack</h2>
                    <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", lineHeight: 1.6 }}>
                        Unsure which model is right for your workflow? Let us conduct a 4-week evaluation on your data inside a UK-sovereign environment.
                    </p>
                    <Link href="/discovery-audit" style={{
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
                        Start AI Discovery Audit <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
