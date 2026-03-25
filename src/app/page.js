"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Zap,
  ArrowRight,
  Database,
  Network,
  Code2,
  Cpu,
  Bot,
  ShieldCheck,
  Globe, Briefcase,
  CheckCircle2,
  ChevronDown,
  Building2,
  Scale,
  Truck,
  LineChart,
  Calculator,
  MessageSquare,
  FileText,
  Activity,
  Plus,
  Minus
} from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- SUB-COMPONENTS FROM REFERENCE ---

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
            ctx.fillStyle = "rgba(59, 130, 246, 0.2)"; // Adjusted to primary blue
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
    const wrapperRef = useRef(null);

    useGSAP(() => {
        if (!wrapperRef.current) return;
        
        if (isOpen) {
            gsap.fromTo(wrapperRef.current, 
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.6, ease: "power3.inOut", overwrite: true }
            );
        } else {
            gsap.to(wrapperRef.current, {
                height: 0, opacity: 0, duration: 0.5, ease: "power3.inOut", overwrite: true
            });
        }
    }, { dependencies: [isOpen] });

    return (
        <div style={{
            cursor: "pointer",
            background: "var(--bg-secondary)",
            borderRadius: "32px",
            border: isOpen ? "1.5px solid var(--primary)" : "1.5px solid var(--border)",
            marginBottom: "1rem",
            padding: "1.5rem 2.5rem",
            transition: "border 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            overflow: "hidden"
        }} onClick={() => setIsOpen(!isOpen)}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 750, color: isOpen ? "var(--primary)" : "var(--text)" }}>{question}</h4>
                <div style={{ 
                    width: "36px", height: "36px", borderRadius: "50%", 
                    border: isOpen ? "1.5px solid var(--primary)" : "1.5px solid var(--border)", 
                    display: "flex", 
                    alignItems: "center", justifyContent: "center",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    background: isOpen ? "var(--primary)" : "transparent",
                    flexShrink: 0
                }}>
                    <ChevronDown size={18} color={isOpen ? "white" : "var(--text-muted)"} />
                </div>
            </div>
            <div ref={wrapperRef} style={{ height: 0, overflow: "hidden", opacity: 0 }}>
                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1.5px solid var(--border)", color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1rem" }}>
                    {answer}
                </div>
            </div>
        </div>
    );
};

const CollapsibleText = ({ children, maxHeight = 120, fadeColor = "var(--bg)" }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);
    const wrapperRef = useRef(null);

    useGSAP(() => {
        if (!wrapperRef.current || !contentRef.current) return;

        const targetHeight = isExpanded ? contentRef.current.scrollHeight : maxHeight;

        gsap.to(wrapperRef.current, {
            height: targetHeight,
            duration: 0.6,
            ease: "power3.inOut",
            overwrite: true
        });
    }, { dependencies: [isExpanded], scope: wrapperRef });

    return (
        <div style={{ marginBottom: "1.5rem" }}>
            <div
                ref={wrapperRef}
                style={{
                    height: `${maxHeight}px`,
                    overflow: "hidden",
                    position: "relative",
                    willChange: "height"
                }}
            >
                <div ref={contentRef}>
                    {children}
                </div>

                {!isExpanded && (
                    <div style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "60px",
                        background: `linear-gradient(to bottom, transparent, ${fadeColor})`,
                        pointerEvents: "none",
                        zIndex: 2
                    }} />
                )}
            </div>

            <button
                onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "1rem",
                    padding: "4px 0",
                    background: "none",
                    border: "none",
                    color: "var(--primary)",
                    fontSize: "1rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    outline: "none"
                }}
            >
                {isExpanded ? "Read Less" : "Read More"}
                <ArrowRight size={18} style={{
                    transform: isExpanded ? "rotate(-90deg)" : "rotate(90deg)",
                    transition: "transform 0.4s ease"
                }} />
            </button>
        </div>
    );
};

const faqs = [
  {
    q: "What's the difference between an AI agent and a chatbot?",
    a: "Wait, isn't an AI agent just a fancy chatbot? No. A chatbot responds to prompts—it's essentially a reactive interface that answers questions based on a fixed dataset. An AI agent, however, is a digital employee that acts autonomously within defined business rules. Our Finance agents don't wait for you to ask if an invoice is paid; they actively monitor your inbox, extract data from incoming PDFs, validate it against your existing ERP records, and post the transaction directly to your accounting software. They only flag exceptions for human review. While a chatbot can explain a policy, an AI agent executes the workflow that the policy dictates. This leap from conversation to action is what delivers the 70-80% efficiency gains our clients expect from FI Digital UK."
  },
  {
    q: "How long does a typical deployment take?",
    a: "Enterprise AI projects shouldn't take years to deliver value. Our 'Discovery → Build → Operate' methodology is designed to move from initial audit to production handover in 12-16 weeks. We spend the first two weeks in discovery—mapping your data structures and identifying the highest ROI automation points—and then move straight into a 6-week build phase where we architect the agent (using Claude, GPT-4o, and n8n) and integrate it with your live systems. The final four weeks are dedicated to a collaborative handover where your team takes control while we observe and troubleshoot. We don't believe in long-tail 'consulting' projects; we believe in shipping battle-tested, production-ready digital workers that start paying for themselves by the third month."
  },
  {
    q: "How do you ensure data security and compliance for regulated industries?",
    a: "Data security is the primary objection for every enterprise we work with. We architect for compliance from day one, particularly for our clients in Financial Services (FCA) and Legal (SRA). Your data doesn't leave your infrastructure unless you explicitly approve it. We typically deploy AI agents within your own cloud tenancy—whether that's Azure UK South, AWS eu-west-2, or Google Cloud—ensuring full data residency within the UK or EU. We provide absolute audit trails for every decision the agent makes, ensuring that your compliance team can review the 'reasoning' behind any transaction or contract interpretation. We also maintain significant Professional Indemnity insurance and ensure all source code and intellectual property produced during the engagement belong entirely to you."
  },
  {
    q: "How do you handle 'hallucinations' or errors in critical business processes?",
    a: "We mitigate the risk of AI 'hallucinations' through a multi-layered verification strategy. First, we use retrieval-augmented generation (RAG) to ensure the agent only makes decisions based on your verified datasets, not general training data. Second, we implement 'human-in-the-loop' workflows; the agent processes the routine 90% and flags the complex 10% for your experts to review. Third, we layer hard-coded business rules on top of the AI's reasoning—if a transaction exceeds a specific tolerance or doesn't match an approved supplier ID, the agent cannot proceed without manual override. This 'governed AI' approach ensures that while the agent is autonomous, it is never unmonitored. It brings the speed of AI together with the reliability of your existing enterprise controls."
  },
  {
    q: "Which AI model is best for my use case?",
    a: "Claude 3.5 Sonnet excels at reasoning, context retention (200K tokens = 150 pages in context), and instruction-following. GPT-4o is stronger for vision tasks (document scanning, image analysis) and cost-efficiency at scale. Gemini is fastest and cheapest for high-volume, straightforward tasks. We typically blend all three: Claude for decision logic, GPT-4o for document understanding, Gemini for bulk volume. Your specific use case (Finance vs. Legal vs. Logistics) determines the optimal mix. We recommend it during Discovery; you approve the choice before Build."
  },
  {
    q: "What's included in the monthly retainer after handover?",
    a: "First 6 months: 4-8 hours per month on-call support, bug fixes, and optimisation. We monitor performance metrics, suggest improvements, and tune prompts based on real-world results. Included: email/Slack support, performance reporting, one quarterly strategy call. Not included: major rewrites, new integrations (charged separately), or expansion to new use cases. After month 6, retainer typically shifts to 2-4 hours/month (maintenance only) or you self-manage with our support available on demand. Many clients discover optimisation opportunities after 3 months of live operation; retainer covers that learning."
  },
  {
    q: "Can I integrate with Salesforce/SAP/my custom ERP?",
    a: "Yes. We've integrated agents with 40+ platforms. Salesforce, SAP, Oracle, NetSuite, Xero, QuickBooks, Sage, Zoho, Pipedrive, HubSpot, Asana, Monday.com, custom REST APIs, SFTP, and SQL databases. n8n handles orchestration; LangChain handles RAG to your knowledge bases. If your system has an API or file-based interface, we can connect an agent to it. Integration complexity varies: Zoho CRM takes 2-3 days; bespoke legacy systems may take 2-3 weeks. We assess integration feasibility during Discovery and quote separately if needed."
  },
  {
    q: "What if we need to scale the agent to handle 10x volume?",
    a: "Agents scale horizontally (more parallel instances) and vertically (faster models, larger context windows). Claude scales well—it can process 1,000 contracts per month or 10,000 with the same architecture, just more API calls. Cost scales linearly with volume. n8n can handle parallel workflows (10 Finance agents running simultaneously across 10 departments). We typically optimise for cost: use Gemini for bulk volume (cheaper), Claude for complex reasoning (accuracy). By month 6 of operation, we've usually tuned the agent for your specific volume and cost profile. Scaling is straightforward; we handle the architecture planning."
  }
];

export default function Home() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Global Section Reveals
    const sections = gsap.utils.toArray("section, header");
    sections.forEach((section) => {
        gsap.from(section.querySelectorAll(".gsap-reveal"), {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Staggered Cards (Industries, Steps, FAQ)
    gsap.from(".gsap-card", {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".gsap-card-container",
            start: "top 85%",
        }
    });

    // Hero Specific - split text style reveal
    gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power4.out",
        delay: 0.2
    });

    // Diagram animation (Section 2)
    gsap.from(".diagram-node", {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".diagram-container",
            start: "top center+=100",
        }
    });

    // Image reveal with zoom
    gsap.from(".gsap-img-reveal", {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".gsap-img-reveal",
            start: "top 80%",
        }
    });

    gsap.from(".diagram-line", {
        strokeDashoffset: 1000,
        opacity: 0,
        duration: 2,
        stagger: 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: ".diagram-container",
            start: "top center+=100",
        }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Hero Section */}
      <header style={{ 
        minHeight: "100vh", 
        padding: "clamp(120px, 15vh, 160px) 1.5rem 100px", 
        display: "flex", 
        alignItems: "center", 
        position: "relative",
        overflow: "hidden",
        background: "#05070a"
      }}>
        <div style={{
            position: "absolute",
            top: 0, right: 0, width: "100%", height: "100%",
            zIndex: 0, opacity: 0.6
        }}>
            <Image 
                src="/assets/images/hero-ai-core.png" 
                alt="FI Digital Hero AI Core" 
                fill
                style={{ 
                    objectFit: "cover",
                    objectPosition: "right center",
                    maskImage: "linear-gradient(to right, transparent, black 40%, black 60%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 40%, black 60%, transparent)"
                }}
                priority
            />
            <div style={{
                position: "absolute",
                top: 0, left: 0, width: "100%", height: "100%",
                background: "radial-gradient(circle at 70% 50%, transparent, #05070a 70%)"
            }} />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1250px" }}>
          <div style={{ maxWidth: "800px" }}>
            <div className="hero-reveal">
              <div style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "0.75rem", 
                  padding: "0.6rem 1.2rem", 
                  background: "rgba(16, 185, 129, 0.1)", 
                  borderRadius: "100px", 
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  marginBottom: "2.5rem",
                  color: "#10b981",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em"
              }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981" }} />
                WHATSAPP SALES & CONCIERGE
              </div>
              <h1 style={{ 
                fontSize: "clamp(2.5rem, 5vw, 4.2rem)", 
                fontWeight: 950, 
                lineHeight: 1.1, 
                marginBottom: "2rem", 
                letterSpacing: "-0.03em",
                color: "white"
              }}>
                WhatsApp Sales & <br /> Concierge Agents: The <br />
                Future of <span style={{ color: "#10b981" }}>Real-Time</span> <br />
                <span style={{ color: "#10b981" }}>Customer Engagement</span>
              </h1>
              <div style={{ fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "750px" }}>
                 <p style={{ 
                   color: "var(--primary)", 
                   fontWeight: 700,
                   marginBottom: "1.5rem" 
                 }}>
                   FI Digital&apos;s WhatsApp Sales Agents are autonomous AI workers designed for UAE enterprises. They qualify leads in Arabic and English, process voice notes, and sync data directly to Zoho CRM. Our agents reduce response times from hours to 4.2 seconds on average.
                 </p>
                 <p style={{ 
                   color: "rgba(255,255,255,0.6)", 
                   marginBottom: "3.5rem"
                 }}>
                   In the UAE, 85%+ of business communication happens on WhatsApp. Our AI-powered agents respond in real-time, handle Arabic language nuance, and integrate directly with Zoho CRM to turn conversations into conversions.
                 </p>
              </div>

              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                <Link href="/assessment" className="btn-primary" style={{ padding: "0 2.5rem", background: "#1d4ed8", boxShadow: "0 10px 30px rgba(29, 78, 216, 0.3)" }}>
                    Book WhatsApp Audit <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: Your Enterprise AI Stack */}
      <section style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "6rem", alignItems: "start" }}>
            <div className="gsap-img-reveal" style={{ position: "sticky", top: "120px" }}>
               <Image 
                 src="/assets/images/tech-stack.png" 
                 alt="FI Digital Enterprise AI Tech Stack" 
                 width={600} 
                 height={600} 
                 style={{ width: "100%", height: "auto", borderRadius: "48px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}
               />
               <div style={{ marginTop: "2rem", padding: "1.5rem", background: "rgba(59,130,246,0.05)", borderRadius: "24px", fontSize: "0.9rem", color: "var(--text-muted)", border: "1px dashed var(--primary)", textAlign: "center" }}>
                  <CheckCircle2 size={16} style={{ verticalAlign: "middle", marginRight: "0.5rem", color: "var(--primary)" }} /> Battle-tested across 200+ live enterprise deployments globally.
               </div>
            </div>

            <div className="gsap-reveal">
              <span className="section-label">Section 1: Technology</span>
              <h2 className="section-title" style={{ fontSize: "3.5rem", fontWeight: 950 }}>Your Enterprise AI Stack</h2>
              <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.15rem", textAlign: "justify" }}>
                <CollapsibleText maxHeight={200} fadeColor="var(--bg-secondary)">
                  <p style={{ marginBottom: "1.5rem" }}>
                    This isn&apos;t a boutique stack. It&apos;s battle-tested across 200+ live deployments in Financial Services, Legal, and Logistics across the UK, Australia, UAE, and India. We&apos;ve integrated with Xero, QuickBooks, Sage, Zoho Books, Salesforce, HubSpot, Pipedrive, Zoho CRM, Monday.com, Asana, and custom ERP systems. Your AI agent sits on top of proven, auditable infrastructure. No experimental frameworks. No single-vendor lock-in. Just results.
                  </p>
                  <p style={{ marginBottom: "1.5rem" }}>
                    The stack we&apos;ve chosen reflects 10 years of enterprise experience: we picked each component because it&apos;s proven in production, well-supported, and integrates with real-world business systems. Claude handles reasoning because its 200K context window means we can feed entire documents in a single API call. GPT-4o handles vision because invoice scanning and document extraction is critical in Finance. Gemini handles bulk volume because it&apos;s cost-efficient at scale. n8n orchestrates everything because it&apos;s open-source, enterprise-grade, and doesn&apos;t vendor-lock you. LangChain enables memory because historical context matters in legal work and contract negotiations. 
                  </p>
                  <p>
                    This isn&apos;t theoretical. Our clients run this stack in production today, processing millions in transactions, managing thousands of contracts, optimising delivery routes across 4 countries.
                  </p>
                </CollapsibleText>
              </div>
              <Link href="/technology" style={{ fontWeight: 800, color: "var(--primary)", display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "2rem" }}>
                Explore Our Technology Stack <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Build: Autonomous Digital Workers */}
      <section style={{ padding: "120px 1.5rem", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <span className="section-label">Section 2: Capabilities</span>
            <h2 className="section-title" style={{ fontSize: "3.5rem", fontWeight: 950 }}>What We Build: Autonomous Digital Workers</h2>
            <p style={{ maxWidth: "900px", margin: "0 auto", fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", lineHeight: 1.4 }}>
              An AI agent isn&apos;t a chatbot. It&apos;s a digital employee that thinks, decides, and acts within defined boundaries.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "6rem", alignItems: "start" }}>
            <div className="gsap-img-reveal" style={{ position: "sticky", top: "120px" }}>
               <Image 
                 src="/assets/images/agent-diagram.png" 
                 alt="Autonomous Digital Worker Conceptual Diagram" 
                 width={600} 
                 height={600} 
                 style={{ width: "100%", height: "auto", borderRadius: "56px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}
               />
               <div style={{ marginTop: "2rem", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", display: "grid" }}>
                  <div style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "24px", border: "1px solid var(--border)", textAlign: "center" }}>
                     <div style={{ fontSize: "1.5rem", fontWeight: 950, color: "var(--primary)" }}>99.2%</div>
                     <div style={{ fontSize: "0.7rem", fontWeight: 700, opacity: 0.5, textTransform: "uppercase" }}>Avg Accuracy</div>
                  </div>
                  <div style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderRadius: "24px", border: "1px solid var(--border)", textAlign: "center" }}>
                     <div style={{ fontSize: "1.5rem", fontWeight: 950, color: "#6366f1" }}>70-80%</div>
                     <div style={{ fontSize: "0.7rem", fontWeight: 700, opacity: 0.5, textTransform: "uppercase" }}>Time Savings</div>
                  </div>
               </div>
            </div>

            <div className="gsap-reveal" style={{ color: "var(--text-muted)", fontSize: "1.15rem", lineHeight: 1.8 }}>
              <p style={{ marginBottom: "2rem" }}>
                Our agents autonomously process documents, extract data, make decisions based on business rules, and integrate findings across multiple systems—without human intervention between trigger and outcome.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "32px", border: "1px solid var(--border)" }}>
                  <h4 style={{ color: "var(--text)", fontWeight: 900, marginBottom: "1rem" }}>In Finance</h4>
                  <CollapsibleText maxHeight={80} fadeColor="var(--bg-secondary)">
                    <p style={{ textAlign: "justify" }}>
                      A digital worker processes 500+ invoices monthly, auto-categorises expenses with 99.2% accuracy, reconciles bank statements overnight, and flags anomalies before they become problems. It reads an invoice (PDF, email, scanned image), extracts key fields, validates against your rules, and posts directly to your software. Exceptions get flagged to your Finance Manager with context. One client saved 32 manual hours per week.
                    </p>
                  </CollapsibleText>
                </div>

                <div style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "32px", border: "1px solid var(--border)" }}>
                  <h4 style={{ color: "var(--text)", fontWeight: 900, marginBottom: "1rem" }}>In Legal</h4>
                  <CollapsibleText maxHeight={80} fadeColor="var(--bg-secondary)">
                    <p style={{ textAlign: "justify" }}>
                      An agent reviews contracts, extracts key terms, cross-references against precedent databases (via LangChain RAG), and produces annotated summaries in minutes instead of hours. A solicitor reviews the analysis, makes judgment calls, and approves. Time savings: 70-80% on routine contract review. Better decisions: the agent never forgets your precedent patterns.
                    </p>
                  </CollapsibleText>
                </div>

                <div style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "32px", border: "1px solid var(--border)" }}>
                  <h4 style={{ color: "var(--text)", fontWeight: 900, marginBottom: "1rem" }}>In Logistics</h4>
                  <CollapsibleText maxHeight={80} fadeColor="var(--bg-secondary)">
                    <p style={{ textAlign: "justify" }}>
                      An autonomous dispatcher optimises routes, coordinates with vendors via n8n integrations, updates inventory in real-time, and forecasts demand using historical patterns. Routes are optimised overnight; drivers have their plan by 6am. Fuel efficiency improves 12-18%, on-time performance hits 98%+, and cost per delivery drops 15-20%.
                    </p>
                  </CollapsibleText>
                </div>
              </div>

              <p style={{ fontWeight: 700, fontStyle: "italic", borderTop: "1px solid var(--border)", paddingTop: "1.5rem", marginTop: "3rem" }}>
                These aren&apos;t theoretical exercises. Our agents are supervised—audit trails are absolute, human oversight is built in—but they operate 24/7 without fatigue, bias, or inconsistency. That&apos;s the FI Digital difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How We Deploy: Discovery → Build → Operate */}
      <section style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <span className="section-label">Section 3: Framework</span>
            <h2 className="section-title" style={{ fontSize: "3.5rem", fontWeight: 950 }}>How We Deploy: Discovery → Build → Operate</h2>
            <p style={{ maxWidth: "850px", margin: "0 auto", fontSize: "1.2rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
               Most AI vendors sell you a template and vanish. We embed with your team for 12-16 weeks minimum. We&apos;re not parachuting in AI; we&apos;re building AI into your workflows.
            </p>
          </div>

          <div className="reveal" style={{ marginBottom: "6rem" }}>
             <Image 
               src="/assets/images/deployment-timeline.png" 
               alt="12-16 Week AI Deployment Timeline" 
               width={1400} 
               height={700} 
               style={{ width: "100%", height: "auto", borderRadius: "48px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}
             />
          </div>

            <div className="gsap-card-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
            <div className="gsap-card" style={{ padding: "2.5rem", background: "var(--bg)", borderRadius: "32px", border: "1px solid var(--border)" }}>
               <h4 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1.5rem", color: "var(--primary)" }}>01. Discovery</h4>
               <CollapsibleText maxHeight={120}>
                 <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    <strong>Week 1-2.</strong> We audit your current workflows, identify the 20% of tasks consuming 80% of labour, and map your tech stack. We interview 8-12 stakeholders to understand decision logic that no documentation captures. By end of Week 2, we&apos;ve produced a detailed Discovery Report: here&apos;s what works, here&apos;s what&apos;s broken, and here&apos;s the roadmap.
                 </p>
               </CollapsibleText>
            </div>

            <div className="gsap-card" style={{ padding: "2.5rem", background: "var(--bg)", borderRadius: "32px", border: "1px solid var(--border)" }}>
               <h4 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1.5rem", color: "var(--primary)" }}>02. Build</h4>
               <CollapsibleText maxHeight={120}>
                 <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    <strong>Week 3-8.</strong> Our engineers design the agent architecture, train on your data, and integrate with your systems (Zoho, Salesforce, etc.). We conduct 4 review cycles—every agent decision is explained, every edge case is tested. We finish with full UAT where your team drives the agent and we observe.
                 </p>
               </CollapsibleText>
            </div>

            <div className="gsap-card" style={{ padding: "2.5rem", background: "var(--bg)", borderRadius: "32px", border: "1px solid var(--border)" }}>
               <h4 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1.5rem", color: "var(--primary)" }}>03. Operate</h4>
               <CollapsibleText maxHeight={120}>
                 <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    <strong>Week 9-12+.</strong> Your team takes the wheel. We run a 4-week handover where you control the agent while we troubleshoot. You own the code, the prompts, and the integration configs. Your team learns how to adjust the agent&apos;s rules; it&apos;s not a black box, it&apos;s a tool you control.
                 </p>
               </CollapsibleText>
            </div>
          </div>
          
          <div className="reveal" style={{ marginTop: "4rem", textAlign: "center", fontStyle: "italic", color: "var(--text-muted)" }}>
             <CheckCircle2 size={16} style={{ verticalAlign: "middle", marginRight: "0.5rem", color: "var(--primary)" }} /> Methodology optimized over 47+ enterprise engagements.
          </div>
        </div>
      </section>

      {/* Section 4: Industries We Serve */}
      <section style={{ padding: "120px 1.5rem" }}>
        <div className="container">
          <div className="gsap-reveal" style={{ textAlign: "center", marginBottom: "6rem" }}>
            <span className="section-label">Section 4: Expertise</span>
            <h2 className="section-title" style={{ fontSize: "3.5rem", fontWeight: 950 }}>Industries We Serve</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "5rem" }}>
            <div className="gsap-card" style={{ background: "var(--bg-secondary)", padding: "4rem 3rem", borderRadius: "56px", border: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
              <div style={{ width: "80px", height: "80px", background: "var(--primary)", borderRadius: "24px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", marginBottom: "2.5rem", boxShadow: "0 15px 30px rgba(59,130,246,0.3)" }}>
                <LineChart size={40} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: "2rem", fontWeight: 950, marginBottom: "1.5rem" }}>Financial Services</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem", textAlign: "justify" }}>
                Invoice processing, expense categorisation, reconciliation, cash flow forecasting, AML screening, payment exception handling. Our Finance agents process £2.4bn in transactions annually across 47 clients. One mid-market firm went from 12-day month-end close to 5-day close. Another saved £2,100 per month in manual processing while improving accuracy from 94% to 99.2%. We integrate with your accounting software (Xero, QuickBooks, Sage, Zoho Books) and your HR system for expense approvals. The agent handles routine transactions; your team focuses on analysis and strategy.
              </p>
              <Link href="/finance-agents" style={{ fontWeight: 800, color: "var(--primary)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                Explore Finance Agents <ArrowRight size={16} />
              </Link>
            </div>

            <div className="gsap-card" style={{ background: "var(--bg-secondary)", padding: "4rem 3rem", borderRadius: "56px", border: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
              <div style={{ width: "80px", height: "80px", background: "#10b981", borderRadius: "24px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", marginBottom: "2.5rem", boxShadow: "0 15px 30px rgba(16,185,129,0.3)" }}>
                <Briefcase size={40} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: "2rem", fontWeight: 950, marginBottom: "1.5rem" }}>Legal Services</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem", textAlign: "justify" }}>
                Contract review, due diligence, compliance monitoring, precedent search, KYC workflows. Our Legal agents have reviewed 18,000+ contracts. LangChain-powered RAG retrieves relevant case law and precedents; Claude handles the nuanced interpretation. Your solicitor reviews and approves; the agent does the heavy lifting. A mid-tier law firm reduced due diligence time from 2-3 weeks to 4-5 days, freeing up capacity for additional deals. We integrate with document management systems (iManage, ShareFile) and your contract repository. The SRA expects supervision; we architect compliance into every agent.
              </p>
              <Link href="/legal-agents" style={{ fontWeight: 800, color: "#10b981", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                Explore Legal Agents <ArrowRight size={16} />
              </Link>
            </div>

            <div className="gsap-card" style={{ background: "var(--bg-secondary)", padding: "4rem 3rem", borderRadius: "56px", border: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
              <div style={{ width: "80px", height: "80px", background: "#6366f1", borderRadius: "24px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", marginBottom: "2.5rem", boxShadow: "0 15px 30px rgba(99,102,241,0.3)" }}>
                <Truck size={40} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontSize: "2rem", fontWeight: 950, marginBottom: "1.5rem" }}>Logistics & Manufacturing</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem", textAlign: "justify" }}>
                Route optimisation, demand forecasting, supplier coordination, inventory management, exception handling. Agents reduce delivery times by 12-18%, cut fuel costs by 8-14%, and improve on-time performance to 98%+. A London-based courier with 35 drivers increased delivery capacity by 28% without adding vehicles. We integrate with your fleet management system (Tookan, Onfleet, Samsara), your inventory system (Zoho Inventory, SAP), and your order platform (Shopify, custom API). The agent optimises routes; your operations team manages exceptions and vendor relationships.
              </p>
              <Link href="/logistics-agents" style={{ fontWeight: 800, color: "#6366f1", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                Explore Logistics Agents <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          
          <div className="reveal" style={{ marginTop: "4rem", textAlign: "center" }}>
            <p style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--text-muted)", maxWidth: "900px", margin: "0 auto 2rem" }}>
              These aren&apos;t one-off pilots. They&apos;re operational workhorses embedded in mission-critical workflows, handling real P&L impact every single day.
            </p>
            <Link href="/case-studies" className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
              View Enterprise Case Studies <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
       {/* Section 5: Global Delivery, UK Focused */}
      <section style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "6rem", alignItems: "start" }}>
             <div className="gsap-img-reveal" style={{ position: "sticky", top: "100px" }}>
                <Image 
                  src="/assets/images/world-map.png" 
                  alt="FI Digital Global Network Map" 
                  width={800} 
                  height={800} 
                  style={{ width: "100%", height: "auto", borderRadius: "48px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}
                />
                <div style={{ marginTop: "2rem", padding: "2rem", background: "var(--bg)", borderRadius: "32px", border: "1px solid var(--border)" }}>
                   {["London (Enterprise Clients)", "Sydney (HQ)", "Pune (Engineering Hub)", "Dubai (Regional Operations)"].map(loc => (
                     <div key={loc} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem", fontWeight: 800, fontSize: "0.9rem" }}>
                        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--primary)" }} /> {loc}
                     </div>
                   ))}
                </div>
             </div>

             <div className="gsap-reveal">
                <span className="section-label">Digital Synergy Ventures UK Limited</span>
                <h2 className="section-title">Global Delivery, UK Focused</h2>
                <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify" }}>
                   <p style={{ marginBottom: "1.5rem" }}>
                     FI Digital UK is Digital Synergy Ventures UK Limited—a UK-registered entity backed by 200+ engineers across 4 countries: Australia (HQ), India (engineering, 150+ staff), UAE (regional hub), and UK (enterprise relationships and support). Ten years building AI automation systems for enterprises means we&apos;ve seen every compliance framework, every integration nightmare, every edge case twice. 
                   </p>
                   <p style={{ marginBottom: "1.5rem" }}>
                     We understand FCA regulations for Finance, SRA ethics for Legal, and GDPR for everything. Your agent is built, tested, and audited to UK/EU standards. Your data stays in your infrastructure or our UK/EU data residency options. Your IP is yours. Your source code is yours. Deployment happens in your environment with your security review.
                   </p>
                   <p style={{ marginBottom: "1.5rem" }}>
                     We&apos;re not a typical outsourcing firm—we&apos;re engineering partners who stay accountable for production outcomes. Our UK team is embedded in the relationship; our India team is experienced and proven; our SLAs are contractual, not aspirational. We&apos;ve worked with FTSE 100 companies, large law firms, and logistics networks.
                   </p>
                   <p style={{ marginBottom: "1.5rem" }}>
                     We understand regulatory constraints and security requirements. Your data doesn&apos;t leave your infrastructure unless you explicitly approve it. We run agents on your cloud tenancy (AWS, Azure, Google Cloud) or on-premises. We provide immutable audit trails for compliance reviews. We maintain professional indemnity insurance. We&apos;re invested in your success because deployment is the beginning, not the end.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 6: Take the AI Readiness Assessment */}
      <section style={{ padding: "120px 1.5rem", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ background: "linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg) 100%)", padding: "6rem 4rem", borderRadius: "64px", border: "1px solid var(--border)", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "6rem", alignItems: "center" }}>
             <div className="gsap-reveal">
                <Calculator className="text-primary" size={56} strokeWidth={1.5} style={{ marginBottom: "2.5rem" }} />
                <h2 style={{ fontSize: "3.5rem", fontWeight: 950, lineHeight: 1.1, marginBottom: "2rem" }}>Take the AI Readiness Assessment</h2>
                <div style={{ color: "var(--text-muted)", fontSize: "1.15rem", lineHeight: 1.8, textAlign: "justify" }}>
                   <p style={{ marginBottom: "1.5rem" }}>
                     Not every process benefits from AI. Some should. Others shouldn&apos;t. We&apos;ve built a 5-minute assessment that scores your readiness across 12 dimensions: process repeatability (are the steps consistent?), data quality (can we parse and understand your data?), volume/cost impact (how much manual labour is involved?), compliance complexity (are there regulatory constraints?), legacy system integration (how connected is your tech stack?), and team capacity (are you stretched thin?).
                   </p>
                   <p style={{ marginBottom: "1.5rem" }}>
                     Answer 15 questions, get an immediate score (0-100), and a personalised report showing which of your operations would benefit most from automation. No sales pitch. No pressure. Just data. 73% of assessments surface a high-impact automation opportunity within 90 days.
                   </p>
                   <p style={{ marginBottom: "1.5rem" }}>
                     Some clients discover they&apos;re already AI-ready (all preconditions met, can deploy in 8-10 weeks); others learn they need 6 months of data prep first (messy source systems, poor process documentation). Both are valuable insights. The assessment is free, takes 5 minutes, and the insights are yours to keep. Many clients share the results with their CFO or COO to build the business case for the engagement.
                   </p>
                </div>
                <Link href="/assessment" className="btn-primary" style={{ marginTop: "2rem" }}>Start Your Assessment <ArrowRight size={20} /></Link>
             </div>
             
              <div className="gsap-img-reveal">
                 <div style={{ position: "relative", borderRadius: "40px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                    <Image 
                      src="/assets/images/assessment-mockup.png" 
                      alt="AI Readiness Assessment Interface Mockup" 
                      width={800} 
                      height={800}
                      style={{ width: "100%", height: "auto" }}
                    />
                 </div>
                <div style={{ marginTop: "2rem", padding: "2rem", background: "var(--bg)", borderRadius: "32px", border: "1px solid var(--border)", textAlign: "center" }}>
                   <div style={{ fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase", opacity: 0.5, marginBottom: "1rem" }}>Current Success Rate</div>
                   <div style={{ fontSize: "2.5rem", fontWeight: 950, color: "var(--primary)" }}>73%</div>
                   <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 700 }}>Surface high-impact opportunities within 90 days.</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "120px 1.5rem", background: "var(--bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
           <div style={{ textAlign: "center", marginBottom: "6rem" }}>
              <span className="section-label">Common Questions</span>
              <h2 className="section-title">AI & Compliance FAQ</h2>
           </div>
           
           <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
           </div>
        </div>
      </section>

      {/* Universal CTA */}
      <section style={{ padding: "120px 1.5rem" }}>
        <div className="container">
          <div style={{ background: "var(--text)", color: "var(--bg)", padding: "6rem 4rem", borderRadius: "64px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 950, marginBottom: "1.5rem" }}>Ready to Architect Your <span className="text-primary">AI Future?</span></h2>
            <p style={{ fontSize: "1.3rem", opacity: 0.8, marginBottom: "3.5rem", maxWidth: "700px", margin: "0 auto 3.5rem" }}>
              Work with the UK engineering partners who stay accountable for production outcomes.
            </p>
             <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/book-call" className="btn-primary">Book 30-min Strategy Call</Link>
                <Link href="/contact" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.2)" }}>Contact London Office</Link>
             </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        details[open] .accordion-icon {
          transform: rotate(180deg);
        }
        .accordion-icon {
          transition: transform 0.3s ease;
        }
        summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </div>
  );
}
