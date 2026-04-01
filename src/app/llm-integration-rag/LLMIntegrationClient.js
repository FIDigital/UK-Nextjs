"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
    ArrowRight, 
    ChevronDown, 
    Database, 
    Layers, 
    Server, 
    Network, 
    Activity, 
    Lock,
    BrainCircuit,
    Cpu,
    Search,
    ShieldCheck,
    Zap,
    Scale,
    FileSearch,
    Share2,
    DatabaseZap
} from "lucide-react";
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
            ctx.fillStyle = "var(--primary)";
            ctx.strokeStyle = "var(--primary)";
            ctx.globalAlpha = 0.15;

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
                opacity: 0.3,
                pointerEvents: "none"
            }}
        />
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const containerRef = useRef(null);
    const detailsRef = useRef(null);
    
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

    // Handle native <details> click to prevent sudden jump and use custom logic
    const handleToggle = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <details 
            ref={detailsRef}
            open={isOpen || true} // Keep open in DOM for layout, control visibility via GSAP
            className="faq-item gsap-card"
            style={{ 
                background: "var(--card-bg)", 
                border: "1px solid var(--border)", 
                borderRadius: "12px", 
                marginBottom: "0.75rem", 
                overflow: "hidden",
                transition: "all 0.3s ease",
                listStyle: "none"
            }}
        >
            <summary 
                onClick={handleToggle}
                style={{ 
                    padding: "1.25rem 1.5rem", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    gap: "2rem",
                    cursor: "pointer",
                    listStyle: "none",
                    outline: "none"
                }}
            >
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
            </summary>
            {/* Custom styled list marker removal for various browsers */}
            <style jsx>{`
                summary::-webkit-details-marker { display: none; }
                details[open] summary ~ * { animation: none; }
            `}</style>
            <div ref={contentRef} style={{ height: 0, opacity: 0, overflow: "hidden" }}>
                <div style={{ padding: "0 1.5rem 1.5rem", color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                    {answer}
                </div>
            </div>
        </details>
    );
};

export default function LLMIntegrationClient() {
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
            q: "Which LLM should we use for our use case?",
            a: "Depends on the task. Document reasoning and compliance? Claude. Customer conversation and Microsoft integration? GPT-4o. Scanned documents and Google Workspace? Gemini. We recommend multi-model: use Claude for high-value reasoning tasks, GPT-4o for conversation, Gemini for multimodal. This improves accuracy 3-5% and reduces cost 15-25% vs single-model approach. We benchmark your specific tasks during discovery and recommend the optimal model mix."
        },
        {
            q: "What's the typical cost of a RAG system?",
            a: "Implementation: £18,000-28,000 (2-3 weeks to build). Monthly costs: embedding generation (£100-300), vector database (Pinecone: £400-2,000 depending on document volume), LLM API costs (£300-1,000 depending on query volume). Total monthly: £800-3,300. This is front-loaded in implementation; scale doesn't increase costs linearly. A system handling 10K documents costs same as one handling 100K (amortised)."
        },
        {
            q: "How much can RAG reduce hallucinations?",
            a: "67% reduction on average. Without RAG, Claude hallucinates 3.8% of statements. With RAG and proper prompt engineering, this drops to 1.2%. This is critical for regulated industries. Every claim the system makes is grounded in your documents, traceable, auditable. You get confidence scores indicating whether the system has high certainty or low certainty in answers."
        },
        {
            q: "Can we use open-source models instead of paid APIs?",
            a: "Yes. Llama 2 (70B parameter version) runs on your infrastructure, costs nothing per query, gives you privacy (your data never leaves your servers). Trade-off: accuracy is 8-10% lower than Claude, and you need engineers to manage infrastructure. Suitable if: you process extremely high volume (1M+ queries monthly, where API costs become prohibitive), need zero data residency outside your control, or acceptable error rates are high. For most enterprises, managed APIs (Claude, GPT-4o) balance cost, accuracy, and operational simplicity."
        },
        {
            q: "How do you handle document updates in RAG systems?",
            a: "Vector databases are updatable. When a document changes, we re-embed it and update the vector store (takes minutes). For high-frequency updates (customer policies changing daily), we rebuild embeddings nightly. For low-frequency updates (contract library), we update on-demand when documents change. The system always searches the current version of documents; no stale data is retrieved."
        },
        {
            q: "What about data privacy with external LLM APIs?",
            a: "If you use Claude or GPT-4o APIs, your prompts and documents are processed by Anthropic/OpenAI servers. Both comply with GDPR and data protection laws. For ultra-sensitive data (client confidential records, financial data), we offer alternatives: run open-source models on your infrastructure (Llama 2), or use enterprise deployments of Claude (Anthropic offers on-premise deployments). Decision depends on data sensitivity and regulatory requirements. We assess during discovery."
        },
        {
            q: "How do you choose between different embedding models?",
            a: "OpenAI's text-embedding-3-large is SOTA (state-of-the-art), costs £0.13 per 1M tokens, accuracy 99.2%. Sentence Transformers (open-source) cost nothing, run on your infrastructure, accuracy 90.8%. For 99.9% of enterprises, the cost/quality trade-off favours OpenAI embeddings. For extremely cost-sensitive or privacy-critical work, open-source embeddings are viable. We benchmark both during implementation and recommend optimal choice."
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
            <style jsx>{`
                .responsive-grid {
                    display: grid;
                    gap: 6rem;
                    align-items: center;
                    grid-template-columns: 1fr;
                }
                @media (min-width: 900px) {
                    .responsive-grid.zig { grid-template-columns: 1fr 1.4fr; }
                    .responsive-grid.zag { grid-template-columns: 1.4fr 1fr; }
                    .hero-grid { grid-template-columns: 1.2fr 1fr; }
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
                .card-grid {
                    display: grid;
                    gap: 1.5rem;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                }
                .pillar-card {
                    padding: 2.5rem;
                    background: var(--card-bg);
                    border: 1px solid var(--border);
                    border-radius: 24px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.3s ease;
                }
                .pillar-card:hover {
                    border-color: var(--primary);
                    box-shadow: var(--card-shadow);
                    transform: translateY(-5px);
                }
                .hero-image-mask {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle at 80% 50%, transparent, var(--bg) 75%);
                    pointer-events: none;
                    z-index: 1;
                }
                @keyframes pulse-soft {
                    0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
                }
                .brand-logo-card {
                    background: #FFFFFF;
                    border: 1px solid rgba(0,0,0,0.05);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1.5rem;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.03);
                    transition: all 0.3s ease;
                    height: 80px;
                    width: 100%;
                }
                .brand-logo-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 24px rgba(0,0,0,0.08);
                }
            `}</style>
            
            {/* HERO SECTION */}
             <header style={{ 
                 minHeight: "100vh",
                 padding: "clamp(120px, 15vh, 160px) 1.5rem 60px", 
                 display: "flex", 
                 alignItems: "center", 
                 position: "relative", 
                 overflow: "hidden",
                 background: "var(--bg)"
             }}>
                  <div style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "60%",
                      height: "100%",
                      zIndex: 0,
                      opacity: 0.6
                  }}>
                      <Image 
                          src="/images/rag/hero-llm-rag.png" 
                          alt="LLM & RAG Architecture" 
                          fill 
                          style={{ objectFit: "cover", objectPosition: "center right" }}
                          priority
                      />
                      <div className="hero-image-mask" />
                  </div>

                  <TechMeshBackground />
                  
                  <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: "1250px", width: "100%" }}>
                       <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
                            <div className="hero-title-line" style={{ 
                                display: "inline-flex", 
                                alignItems: "center", 
                                gap: "0.75rem", 
                                padding: "0.6rem 1.2rem", 
                                background: "var(--bg-secondary)", 
                                borderRadius: "100px", 
                                border: "1px solid var(--border)", 
                                marginBottom: "2.5rem", 
                                color: "var(--primary)", 
                                fontSize: "0.9rem", 
                                fontWeight: 700, 
                                letterSpacing: "0.05em",
                                animation: "pulse-soft 2s infinite"
                            }}>
                                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                                LLM & RAG ARCHITECTURE
                            </div>
                            <h1 style={{ fontSize: "clamp(2.3rem, 6vw, 4.8rem)", fontWeight: 950, lineHeight: 1.05, marginBottom: "2.5rem", letterSpacing: "-0.04em", maxWidth: "900px" }}>
                                <span className="hero-title-line" style={{ display: "block", color: "var(--text)" }}>Intelligent Systems</span>
                                <span className="hero-title-line" style={{ display: "block", color: "var(--primary)" }}>That Learn From Your Data</span>
                            </h1>
                            <p className="hero-subtitle" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", color: "var(--text-muted)", marginBottom: "3.5rem", lineHeight: 1.6, maxWidth: "650px", fontWeight: 500 }}>
                                Multi-model orchestration (Claude, GPT-4o, Gemini). RAG architecture grounded in your enterprise knowledge. Production-grade hallucination reduction for regulated industries.
                            </p>

                            <div className="hero-cta" style={{ display: "flex", gap: "1.25rem", alignItems: "center", flexWrap: "wrap" }}>
                                <Link href="/contact" style={{ 
                                    display: "inline-flex", alignItems: "center", gap: "0.75rem", 
                                    padding: "1.25rem 2.5rem", background: "var(--primary)", color: "white", 
                                    fontWeight: 700, borderRadius: "14px", textDecoration: "none", 
                                    boxShadow: "0 10px 30px rgba(79, 70, 229, 0.3)", transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" 
                                }}>
                                    Start Your RAG Pilot <ArrowRight size={20} />
                                </Link>
                                <Link href="/why-fi-digital" style={{ 
                                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                                    padding: "1.25rem 2.5rem", background: "var(--bg-secondary)", color: "var(--text)", 
                                    fontWeight: 700, borderRadius: "14px", textDecoration: "none",
                                    transition: "all 0.3s ease",
                                    border: "1px solid var(--border)"
                                }}>
                                    Engineering Methodology
                                </Link>
                            </div>
                       </div>
                  </div>
             </header>

             <section id="agnostic-infra" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "6rem" }}>
                        <div className="gsap-reveal">
                            <span className="section-label">THE TRUTH</span>
                            <h2 className="section-title">Why No Single LLM <br /><span style={{ color: "var(--primary)" }}>Is Right for Everything</span></h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p>
                                    Here&apos;s the truth enterprises need to understand: no single LLM is optimal for all tasks. Claude excels at reasoning and code generation. GPT-4o handles conversation and user interaction better. Gemini integrates seamlessly with Google Workspace. Open-source models (Llama 2, Mistral) work entirely on your infrastructure. The most sophisticated enterprises deploy multi-model systems, using the right model for each task.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "48px", padding: "3rem" }}>
                                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)", marginBottom: "2.5rem", textTransform: "uppercase", textAlign: "center" }}>Model Ecosystem</div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                                    {[
                                        { name: "CLAUDE 3.5", src: "/images/brands/claude.png", scale: 1.8 },
                                        { name: "GPT-4o", src: "/images/brands/OpenAI.png", scale: 0.8 },
                                        { name: "GEMINI 1.5", src: "/images/brands/Google_Gemini.png", scale: 1.1 },
                                        { name: "LLAMA 3.1", src: "/images/brands/llama.png", scale: 1.5 }
                                    ].map((m, i) => (
                                        <div key={i} className="brand-logo-card">
                                            <div style={{ position: "relative", width: "100%", height: "50px", transform: `scale(${m.scale})` }}>
                                                <Image 
                                                    src={m.src} 
                                                    alt={m.name} 
                                                    fill 
                                                    style={{ objectFit: "contain" }} 
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ marginTop: "2rem", textAlign: "center", color: "var(--text-muted)", fontSize: "0.85rem", fontWeight: 600 }}>
                                    Optimized based on Task Reasoning Requirements
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* Section 2: Benchmarking Edge (Zag) */}
             <section id="benchmarks" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "6rem" }}>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "48px", padding: "3rem" }}>
                                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)", marginBottom: "2rem", textTransform: "uppercase" }}>Accuracy vs Naturalness</div>
                                <div style={{ display: "grid", gap: "1.5rem" }}>
                                    <div style={{ padding: "1.5rem", background: "var(--bg)", borderRadius: "20px", border: "1px solid var(--border)" }}>
                                        <div style={{ fontSize: "0.75rem", opacity: 0.5, marginBottom: "0.5rem" }}>CONTRACT ANALYSIS ACCURACY</div>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                            <span style={{ fontWeight: 800 }}>Claude 3.5</span>
                                            <span style={{ fontWeight: 950, fontSize: "2rem", color: "var(--primary)" }}>96.2%</span>
                                        </div>
                                    </div>
                                    <div style={{ padding: "1.5rem", background: "var(--bg)", borderRadius: "20px", border: "1px solid var(--border)" }}>
                                        <div style={{ fontSize: "0.75rem", opacity: 0.5, marginBottom: "0.5rem" }}>SUPPORT TONE SCORE (1-10)</div>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                            <span style={{ fontWeight: 800 }}>GPT-4o</span>
                                            <span style={{ fontWeight: 950, fontSize: "2rem", color: "#10b981" }}>7.8/10</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">THE BENCHMARKS</span>
                            <h2 className="section-title">The Benchmarking Edge: <br /><span style={{ color: "var(--primary)" }}>Data Over Convenience</span></h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p>
                                    We&apos;ve benchmarked this extensively. On contract analysis (financial services), Claude achieves 96.2% accuracy vs GPT-4o&apos;s 91.8%. On customer support interaction (tone, naturalness), GPT-4o scores 7.8/10 vs Claude&apos;s 7.1/10. On structured data extraction from emails, Gemini&apos;s multimodal capabilities enable image recognition of handwritten notes, something text-only models can&apos;t do.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* Section 3: Orchestrated ROI (Zig) - RESTORED */}
             <section id="orchestration-roi" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "6rem" }}>
                        <div className="gsap-reveal">
                            <span className="section-label">THE ECONOMICS</span>
                            <h2 className="section-title">Intelligent Orchestration: <br /><span style={{ color: "var(--primary)" }}>18% Lower Token Costs</span></h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    We built a multi-model orchestration system that routes requests to the right model: contract review → Claude, customer emails → GPT-4o, invoice processing with scanned documents → Gemini. Cost averages 18% lower than using single-model approach (we use cheaper models where possible) and accuracy is 3-5% higher overall.
                                </p>
                                <p>
                                    This requires managing multiple API keys, handling different response formats, and orchestrating based on task requirements. But the ROI is clear. Your AI system becomes optimized for reality rather than vendor convenience.
                                </p>
                            </div>
                        </div>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "48px", padding: "3.5rem", textAlign: "center" }}>
                                <div style={{ color: "#10b981", fontSize: "0.85rem", fontWeight: 900, textTransform: "uppercase", marginBottom: "1.5rem" }}>Orchestration Benefit</div>
                                <div style={{ fontSize: "5rem", fontWeight: 950, color: "var(--text)", marginBottom: "0.5rem", lineHeight: 1 }}>18%</div>
                                <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "3rem" }}>Average Cost Reduction</div>
                                <div style={{ height: "1px", background: "var(--border)", marginBottom: "3rem" }} />
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                                    <div>
                                        <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--primary)" }}>+5%</div>
                                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Total Accuracy Lift</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--primary)" }}>Agile</div>
                                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Model Swapping</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* Section 4: Claude Context Window (Zag) - REFACTORED */}
             <section id="claude-context" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "6rem" }}>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "48px", padding: "3rem", position: "relative", overflow: "hidden" }}>
                                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)", marginBottom: "2rem", textTransform: "uppercase" }}>Context Capacity</div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    <div style={{ padding: "1.5rem", background: "var(--bg)", borderRadius: "16px", border: "1px solid var(--border)" }}>
                                        <div style={{ fontSize: "2.5rem", fontWeight: 950, color: "var(--text)" }}>200K</div>
                                        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Context Tokens (Claude)</div>
                                    </div>
                                    <div style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "16px", border: "1px solid var(--border)", opacity: 0.6 }}>
                                        <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--text)" }}>128K</div>
                                        <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>GPT-4o Baseline</div>
                                    </div>
                                </div>
                                <div style={{ marginTop: "2rem", height: "4px", width: "100%", background: "var(--border)", borderRadius: "2px" }}>
                                    <div style={{ width: "100%", height: "100%", background: "var(--primary)" }} />
                                </div>
                                <div style={{ marginTop: "0.5rem", fontSize: "0.7rem", color: "var(--text-muted)", textAlign: "right" }}>+400% Reasoning Depth</div>
                            </div>
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">DEPTH OF REASONING</span>
                            <h2 className="section-title">Claude: When Reasoning and <br /><span style={{ color: "var(--primary)" }}>Accuracy Are Paramount</span></h2>
                            <div style={{ display: "grid", gap: "2rem" }}>
                                <div style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "20px", border: "1px solid var(--border)" }}>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "1rem" }}>
                                        Claude (Anthropic&apos;s flagship model, currently on version 3.5 Sonnet and Opus) is the gold standard for reasoning-intensive tasks. Here&apos;s why. Context window: Claude handles 200,000 tokens of context (roughly 150,000 words). That&apos;s 4x more than GPT-4o.
                                    </p>
                                </div>
                                <div style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "20px", border: "1px solid var(--border)" }}>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "1rem" }}>
                                        For enterprises, this is transformative. You can feed an entire annual report, all contract clauses, complete email thread history, and months of case notes into a single Claude prompt. The model reasons about all of it simultaneously.
                                    </p>
                                </div>
                                <div style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "20px", border: "1px solid var(--border)" }}>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "1rem" }}>
                                        We tested this against GPT-4o: given a contract with 200 pages of related documents, Claude found 23 unusual clauses and risks, GPT-4o found 18. The difference is depth of reasoning with complete context.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* Section 5: Claude Accuracy & Resistance (Zig) - REFACTORED */}
             <section id="claude-accuracy" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "6rem" }}>
                        <div className="gsap-reveal">
                            <span className="section-label">PRECISION DATA</span>
                            <h2 className="section-title">94.2% Accuracy: <br /><span style={{ color: "var(--primary)" }}>Hallucination Resistance</span></h2>
                            <div style={{ display: "grid", gap: "2rem" }}>
                                <div style={{ padding: "2rem", background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)" }}>
                                    <h4 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>Enterprise Benchmarks</h4>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "1rem" }}>
                                        Accuracy on complex tasks: We benchmarked Claude and GPT-4o on 127 enterprise tasks (contract analysis, compliance review, technical decision-making, financial forecasting). Claude achieved 94.2% accuracy average, GPT-4o achieved 89.7%. On financial services tasks specifically, Claude&apos;s advantage widens to 5.8 percentage points. For legal work, 6.2 points.
                                    </p>
                                </div>
                                <div style={{ padding: "2rem", background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)" }}>
                                    <h4 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "1rem", color: "var(--primary)" }}>Behavioral Trust</h4>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "1rem" }}>
                                        Hallucination resistance: Claude explicitly states uncertainty. When it doesn&apos;t know something, it says &quot;I don&apos;t have enough information to determine this&quot; rather than making something up. This is behaviourally different from GPT-4o and critical for production systems. A financial model that confidently gives wrong answers is worse than no model.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "48px", padding: "3rem" }}>
                                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)", marginBottom: "2rem", textTransform: "uppercase" }}>Comparative Accuracy</div>
                                <div style={{ display: "grid", gap: "2rem" }}>
                                    {[
                                        { l: "Enterprise Task Avg", label: "CLAUDE", v: "94.2%", c: "var(--primary)" },
                                        { l: "Enterprise Task Avg", label: "GPT-4o", v: "89.7%", c: "var(--text-muted)" },
                                        { l: "Legal Specific Delta", label: "CLAUDE EDGE", v: "+6.2%", c: "#10b981" }
                                    ].map((m, i) => (
                                        <div key={i} style={{ padding: "1.5rem", background: "var(--bg)", borderRadius: "20px", border: "1px solid var(--border)" }}>
                                            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>{m.l}</div>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                                <span style={{ fontWeight: 800, color: "var(--text)" }}>{m.label}</span>
                                                <span style={{ fontWeight: 950, fontSize: "2rem", color: m.c }}>{m.v}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* Section 6: Claude Deployment & Cost (Zag) - REFACTORED */}
             <section id="claude-strategy" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "6rem" }}>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "48px", padding: "3rem" }}>
                                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#10b981", marginBottom: "2.5rem", textTransform: "uppercase" }}>Strategic Use Cases</div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    {["Merger Agreements", "NDAs / Vendor Terms", "Compliance Overhaul", "Financial Forecasting"].map((use, i) => (
                                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--text)", fontWeight: 600, fontSize: "0.9rem", padding: "1.2rem", background: "var(--bg)", borderRadius: "12px", border: "1px solid var(--border)" }}>
                                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
                                            {use}
                                        </div>
                                    ))}
                                </div>
                                <div style={{ marginTop: "2rem", padding: "1.5rem", background: "var(--bg)", borderRadius: "20px", textAlign: "center", border: "1px solid var(--border)" }}>
                                    <div style={{ fontSize: "0.7rem", opacity: 0.5, marginBottom: "0.25rem" }}>EST. SESSION COST (50K TOKENS)</div>
                                    <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--text)" }}>£0.15 - £0.75</div>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">STRATEGIC ROI</span>
                            <h2 className="section-title">Deployment: <br /><span style={{ color: "#10b981" }}>First-Attempt Success</span></h2>
                            <div style={{ display: "grid", gap: "1.5rem" }}>
                                <div style={{ padding: "1.5rem", borderLeft: "4px solid #10b981", background: "rgba(255,255,255,0.02)" }}>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                                        Code generation: Claude generates more correct code on the first attempt (78% vs 71% for GPT-4o). This matters when building agents and automation; fewer iteration cycles mean faster deployment.
                                    </p>
                                </div>
                                <div style={{ padding: "1.5rem", borderLeft: "4px solid #10b981", background: "rgba(255,255,255,0.02)" }}>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                                        We use Claude for: contract analysis (merger agreements, NDAs, vendor terms), compliance review (regulations, audit trails), financial forecasting (building models from historical data), technical architecture design, and knowledge synthesis (reading 500 research papers to create a summary).
                                    </p>
                                </div>
                                <div style={{ padding: "1.5rem", borderLeft: "4px solid #10b981", background: "rgba(255,255,255,0.02)" }}>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                                        Cost: Claude is price-competitive, roughly £0.003-0.015 per 1K input tokens depending on model version. For a 50K-token request (typical for document-heavy work), you&apos;re paying £0.15-0.75. Expensive if you&apos;re doing 100 requests daily, but efficient compared to GPT-4o when you factor in accuracy (fewer retries needed).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* Section 7: Corporate Memory (Zag) */}
             <section id="rag-memory" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "6rem" }}>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "48px", overflow: "hidden", position: "relative", minHeight: "450px" }}>
                                <Image 
                                    src="/images/rag/corporate-memory.png" 
                                    alt="Corporate Memory Grounding" 
                                    fill 
                                    style={{ objectFit: "cover" }} 
                                />
                                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", padding: "2rem", background: "linear-gradient(transparent, rgba(0,0,0,0.8))", zIndex: 1 }}>
                                    <div style={{ color: "white", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Knowledge Retrieval Layer</div>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">THE MEMORY LAYER</span>
                            <h2 className="section-title">RAG Architecture: <br /><span style={{ color: "var(--primary)" }}>Giving AI Your Company&apos;s Memory</span></h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p>
                                    RAG (Retrieval-Augmented Generation) is how you teach LLMs about your company&apos;s proprietary knowledge. Without it, Claude knows only what was in its training data (knowledge cutoff is April 2024). With it, Claude can reason about documents you uploaded yesterday.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* Section 8: Vector Pipeline (Zig) */}
             <section id="vector-pipeline" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "6rem" }}>
                        <div className="gsap-reveal">
                            <span className="section-label">THE PIPELINE</span>
                            <h2 className="section-title">How RAG Works: <br /><span style={{ color: "var(--primary)" }}>From Documents to Dimensions</span></h2>
                            <div style={{ display: "grid", gap: "1.5rem" }}>
                                <div style={{ padding: "1.5rem", background: "var(--card-bg)", borderRadius: "20px", border: "1px solid var(--border)" }}>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "1rem" }}>
                                        Your document (contract, policy, case study) is split into chunks (roughly 400-500 tokens per chunk). Each chunk is converted to a vector embedding (a 1,536-dimensional number representing semantic meaning) using an embedding model (OpenAI&apos;s text-embedding-3-large, or open-source alternatives).
                                    </p>
                                </div>
                                <div style={{ padding: "1.5rem", background: "var(--card-bg)", borderRadius: "20px", border: "1px solid var(--border)" }}>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "1rem" }}>
                                        These vectors are stored in a vector database (Pinecone, Milvus, Weaviate). When you ask a question, the same embedding model converts your question to a vector. You search the vector database for the most similar document chunks (cosine similarity).
                                    </p>
                                </div>
                                <div style={{ padding: "1.5rem", background: "var(--card-bg)", borderRadius: "20px", border: "1px solid var(--border)" }}>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "1rem" }}>
                                        Those matching chunks are inserted into the LLM prompt along with your question. The LLM then reasons about your documents plus the question.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "48px", overflow: "hidden", position: "relative", minHeight: "400px" }}>
                                <Image 
                                    src="/images/rag/rag-pipeline.png" 
                                    alt="RAG Semantic Pipeline" 
                                    fill 
                                    style={{ objectFit: "cover" }} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* Section 9: Hallucination Case Study (Zag) */}
             <section id="compliance-study" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "6rem" }}>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "var(--bg-secondary)", border: "1px solid #10b981", borderRadius: "48px", padding: "4rem", textAlign: "center" }}>
                                <div style={{ color: "#10b981", fontSize: "0.85rem", fontWeight: 900, textTransform: "uppercase", marginBottom: "1.5rem" }}>Hallucination Reduction</div>
                                <div style={{ fontSize: "5rem", fontWeight: 950, color: "var(--text)", marginBottom: "0.5rem", lineHeight: 1 }}>67%</div>
                                <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-muted)" }}>Accuracy Lift over Baseline</div>
                                <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                                    <div>
                                        <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#ef4444" }}>3.8%</div>
                                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Standard LLM</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#10b981" }}>1.2%</div>
                                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>RAG Grounded</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">THE EXAMPLE</span>
                            <h2 className="section-title">Precision Benchmarks: <br /><span style={{ color: "#10b981" }}>The Compliance Use Case</span></h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Example: You upload 180 pages of regulatory compliance documentation. An agent needs to answer &quot;Are our current data retention policies compliant with GDPR?&quot; The agent converts the question to a vector, retrieves the 5 most similar sections from your compliance docs, inserts them into the prompt, and asks Claude.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Claude reasons about the specific text and gives an answer grounded in your documentation. This is vastly superior to asking Claude from scratch (it would hallucinate compliance rules).
                                </p>
                                <p>
                                    Hallucination reduction: RAG reduces hallucinations 67% on our benchmarks, from 3.8% to 1.2%.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* Section 10: Infrastructure Economics (Zig) */}
             <section id="rag-logistics" style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zig" style={{ gap: "6rem" }}>
                        <div className="gsap-reveal">
                            <span className="section-label">LOGISTICS & SCALE</span>
                            <h2 className="section-title">Infrastructure Economics: <br /><span style={{ color: "var(--primary)" }}>Deployment & Strategy</span></h2>
                            <div style={{ display: "grid", gap: "1.5rem" }}>
                                <div style={{ padding: "1.5rem", borderLeft: "4px solid var(--primary)", background: "var(--bg)", border: "1px solid var(--border)", borderLeftWidth: "4px", borderRadius: "0 16px 16px 0" }}>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                                        Key components: Embedding model (£0.13 per 1M tokens). Vector database (Pinecone at £400/mo for 1M vectors, or Milvus self-hosted). Chunking strategy (400-token chunks with 100-token overlap). Retrieval pipeline (re-rank to score relevance and keep top-3; improves quality 12-18%).
                                    </p>
                                </div>
                                <div style={{ padding: "1.5rem", borderLeft: "4px solid var(--primary)", background: "var(--bg)", border: "1px solid var(--border)", borderLeftWidth: "4px", borderRadius: "0 16px 16px 0" }}>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                                        Implementation: We build RAG pipelines using LlamaIndex (orchestration), Pinecone or Milvus (vector storage), and LLMs of choice. A typical pipeline for 10,000 documents (100GB) takes 2-3 weeks to implement, test, and optimize.
                                    </p>
                                </div>
                                <div style={{ padding: "1.5rem", borderLeft: "4px solid var(--primary)", background: "var(--bg)", border: "1px solid var(--border)", borderLeftWidth: "4px", borderRadius: "0 16px 16px 0" }}>
                                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                                        Cost is £18,000-28,000 for implementation, then £400-2,000/month in vector database costs depending on scale.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "48px", padding: "3rem" }}>
                                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--primary)", marginBottom: "2rem", textTransform: "uppercase" }}>Implementation Roadmap</div>
                                <div style={{ display: "grid", gap: "1.5rem" }}>
                                    <div style={{ padding: "1.5rem", background: "var(--bg)", borderRadius: "20px", border: "1px solid var(--border)", textAlign: "center" }}>
                                        <div style={{ fontSize: "0.75rem", opacity: 0.5, marginBottom: "0.5rem" }}>TIMELINE (10K DOCS)</div>
                                        <div style={{ fontSize: "2rem", fontWeight: 950 }}>2-3 Weeks</div>
                                    </div>
                                    <div style={{ padding: "1.5rem", background: "var(--bg)", borderRadius: "20px", border: "1px solid var(--border)", textAlign: "center" }}>
                                        <div style={{ fontSize: "0.75rem", opacity: 0.5, marginBottom: "0.5rem" }}>EST. SETUP COST</div>
                                        <div style={{ fontSize: "2rem", fontWeight: 950 }}>£18K - £28K</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* Section 11: Case Study - The Problem (Zag) */}
             <section id="case-study-problem" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "6rem" }}>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "48px", padding: "4rem", textAlign: "center" }}>
                                <div style={{ color: "var(--primary)", fontSize: "0.85rem", fontWeight: 900, textTransform: "uppercase", marginBottom: "1.5rem" }}>The Bottleneck</div>
                                <div style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: 950, color: "var(--text)", marginBottom: "0.5rem", lineHeight: 1 }}>300-500</div>
                                <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-muted)" }}>Deal Documents per Case</div>
                                <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                                    <div>
                                        <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#ef4444" }}>60 Hrs</div>
                                        <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>Junior Review / Deal</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#ef4444" }}>£24,000</div>
                                        <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>Labor Cost / Case</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">THE CHALLENGE</span>
                            <h2 className="section-title">Case Study: Legal Firm Using <br /><span style={{ color: "var(--primary)" }}>Claude RAG for Contract Review</span></h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p>
                                    A 120-lawyer UK law firm handles corporate M&A work. Each deal involves reviewing 300-500 documents (contracts, regulatory filings, due diligence reports). Current process: junior lawyers spend 40-60 hours each manually reviewing documents, flagging unusual clauses, extracting key terms. Cost per deal: £18,000-24,000 in junior labor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* Section 12: Case Study - The RAG Solution (Centered High-Fidelity Cards) */}
             <section id="case-study-solution" style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <span className="section-label">THE SOLUTION</span>
                        <h2 className="section-title">Intelligent Retrieval: <br /><span style={{ color: "var(--primary)" }}>Claude + LlamaIndex + Pinecone</span></h2>
                    </div>
                    
                    <div className="gsap-card-grid" style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
                        gap: "2.5rem", 
                        marginBottom: "5rem",
                        maxWidth: "1150px",
                        margin: "0 auto 5rem"
                    }}>
                        {[
                            { 
                                icon: <DatabaseZap size={32} />, 
                                text: "We built a RAG system using Claude + LlamaIndex + Pinecone. Process: client uploads deal documents (typically 2GB across 300-500 files). The system converts each document to chunks, generates embeddings, stores in vector database." 
                            },
                            { 
                                icon: <Search size={32} />, 
                                text: "When a junior lawyer asks \"What are the payment terms?\" the system retrieves relevant clauses, passes them to Claude, and Claude extracts and summarises payment schedules across all documents." 
                            },
                            { 
                                icon: <ShieldCheck size={32} />, 
                                text: "If the lawyer asks \"Are there any unusual non-compete clauses?\" the system retrieves non-compete sections, Claude flags unusual terms, cross-references against historical deals to identify non-standard language." 
                            }
                        ].map((item, i) => (
                            <div key={i} className="gsap-card solution-card" style={{ 
                                padding: "3rem 2.5rem", 
                                background: "var(--card-bg)", 
                                border: "1px solid var(--border)",
                                borderRadius: "32px",
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                height: "auto",
                                minHeight: "100%",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                            }}>
                                <div style={{ 
                                    color: "var(--primary)", 
                                    marginBottom: "2rem", 
                                    background: "var(--bg-secondary)", 
                                    width: "64px",
                                    height: "64px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "16px",
                                    border: "1px solid var(--border)"
                                }}>{item.icon}</div>
                                <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1rem", margin: 0, flexGrow: 1 }}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="gsap-img-reveal" style={{ maxWidth: "1000px", margin: "0 auto" }}>
                        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "24px", padding: "2rem" }}>
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center", gap: "2rem" }}>
                                {[
                                    { s: "Upload", d: "300-500 Files" },
                                    { s: "Index", d: "Vector Embedding" },
                                    { s: "Query", d: "Semantic Search" },
                                    { s: "Response", d: "Claude Accuracy" }
                                ].map((step, i) => (
                                    <div key={i} style={{ textAlign: "center", flex: "1 1 150px" }}>
                                        <div style={{ fontSize: "0.7rem", opacity: 0.5, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{step.s}</div>
                                        <div style={{ fontWeight: 800, color: "var(--primary)", fontSize: "0.95rem" }}>{step.d}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
             </section>

             {/* Section 13: Case Study - The Result (Zag) */}
             <section id="case-study-result" style={{ padding: "120px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="responsive-grid zag" style={{ gap: "6rem" }}>
                        <div className="gsap-img-reveal">
                            <div style={{ background: "var(--bg-secondary)", border: "1px solid #10b981", borderRadius: "48px", padding: "4rem", textAlign: "center" }}>
                                <div style={{ color: "#10b981", fontSize: "0.85rem", fontWeight: 900, textTransform: "uppercase", marginBottom: "1.5rem" }}>Deal Throughput</div>
                                <div style={{ fontSize: "5rem", fontWeight: 950, color: "var(--text)", marginBottom: "0.5rem", lineHeight: 1 }}>85%</div>
                                <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-muted)" }}>Reduction in Lawyer Hours</div>
                                <div style={{ marginTop: "3rem", height: "1px", background: "var(--border)", marginBottom: "3rem" }} />
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                                    <div>
                                        <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#10b981" }}>£400K+</div>
                                        <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>Additional Annual Profit</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#10b981" }}>3x</div>
                                        <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>Deal Capacity Lift</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gsap-reveal">
                            <span className="section-label">THE IMPACT</span>
                            <h2 className="section-title">Results: 85% Efficiency Lift <br /><span style={{ color: "#10b981" }}>£400,000 Annual Profit Growth</span></h2>
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Results: junior lawyer time per deal dropped from 40-60 hours to 8-12 hours (85% reduction). The lawyers now spot-check Claude&apos;s work rather than doing primary analysis. Error rate actually dropped (Claude is more thorough than junior humans at scale). Law firm can handle 3x more deals without hiring additional lawyers.
                                </p>
                                <p style={{ marginBottom: "1.5rem" }}>
                                    Cost: system implementation £24,000. Monthly vector DB cost (handling 40-50 active deals) £1,200. LLM API cost £400/month. Per deal: £1,600 in overhead amortised + variable costs.
                                </p>
                                <p>
                                    Deal cost improved from £18,000-24,000 (junior labor) to £8,000-10,000 (junior verification + AI). Margin improvement: £10,000 per deal, 40 deals annually = £400,000 additional profit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
             </section>


             {/* FAQ SECTION */}
             <section id="faq" style={{ padding: "120px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "800px" }}>
                    <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <span className="section-label">GOVERNANCE</span>
                        <h2 className="section-title">Technical Deep-Dive</h2>
                    </div>
                    <div className="faq-container">
                        {faqs.map((faq, idx) => (
                            <FAQItem key={idx} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
                <div className="container" style={{ textAlign: "center" }}>
                     <div className="gsap-reveal">
                         <h2 className="section-title">Ready to Orchestrate Your <span style={{ color: "var(--primary)" }}>Enterprise Intelligence?</span></h2>
                         <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", maxWidth: "800px", margin: "0 auto 3.5rem", lineHeight: 1.6 }}>
                             Stop waiting for vendor roadmaps. Deploy multi-model RAG architecture that works on your infrastructure, with your data, under your security protocols.
                         </p>
                         <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
                             <Link href="/discovery-audit" style={{ padding: "1.2rem 2.5rem", background: "var(--primary)", color: "white", borderRadius: "12px", textDecoration: "none", fontWeight: 700, boxShadow: "0 10px 30px rgba(79, 70, 229, 0.2)" }}>
                                 Multi-Model LLM Assessment
                             </Link>
                             <Link href="/technology" style={{ padding: "1.2rem 2.5rem", background: "transparent", color: "var(--text)", borderRadius: "12px", textDecoration: "none", fontWeight: 700, border: "1px solid var(--border)" }}>
                                 RAG Architecture Design
                             </Link>
                         </div>
                     </div>
                </div>
            </section>

            {/* INTERNAL LINKS */}
             <section id="ecosystem" style={{ padding: "80px 1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
                 <div className="container" style={{ maxWidth: "1250px" }}>
                     <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
                         <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>Explore Our Agentic Ecosystem</h2>
                     </div>
                     <div className="links-grid gsap-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
                         {[
                             { title: "AI Agent Development", href: "/ai-agent-development", desc: "Build autonomous workers" },
                             { title: "LLM Integration & RAG", href: "/llm-integration-rag", desc: "Deploy multi-model RAG systems" },
                             { title: "Discovery Audit", href: "/discovery-audit", desc: "Map your automation ROI" }
                         ].map((link, i) => (
                             <Link key={i} href={link.href} style={{ 
                                 padding: "1.5rem", 
                                 background: "var(--bg-secondary)", 
                                 borderRadius: "16px", 
                                 border: "1px solid var(--border)",
                                 textDecoration: "none",
                                 transition: "all 0.3s ease",
                                 color: "var(--text)",
                                 display: "block"
                             }} className="hover-lift">
                                 <div style={{ color: "var(--primary)", fontWeight: 800, marginBottom: "0.5rem" }}>{link.title}</div>
                                 <div style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{link.desc}</div>
                             </Link>
                         ))}
                     </div>
                 </div>
             </section>
        </div>
    );
}
