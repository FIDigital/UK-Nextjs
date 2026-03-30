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
        answer: "This is a change management question, not a technical one. Drivers typically accept AI routes within 1-2 weeks once they see that routes are genuinely shorter, that time windows are respected, and that they're not being micromanaged. We recommend transparent communication: explain that AI is optimising for their efficiency too. Most drivers appreciate the system because it removes the need to plan routes themselves and reduces time pressure. Experienced drivers often discover that AI-generated routes avoid congestion they know about; they gain confidence quickly."
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

export default function LogisticsManufacturingPage() {
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
            <title>Logistics & Manufacturing AI | Supply Chain Optimization | FI Digital UK</title>
            <meta name="description" content="AI-powered dispatch, warehouse automation, predictive maintenance, and supply chain optimisation for UK manufacturers and logistics providers." />
            
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
                        src="/images/monitoring-dashboard.png" 
                        alt="AI That Understands Your Supply Chain" 
                        fill 
                        style={{ objectFit: "cover", objectPosition: "left center", maskImage: "radial-gradient(circle at right, black, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" }} 
                        priority 
                    />
                </div>
                <div className="container hero-container" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", width: "100%", maxWidth: "1250px", margin: "0 auto" }}>
                    <div className="hero-tag" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.2rem", background: "rgba(79, 70, 229, 0.1)", borderRadius: "100px", border: "1px solid rgba(79, 70, 229, 0.2)", marginBottom: "2rem", color: "var(--primary)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                        Logistics & Manufacturing
                    </div>
                    <h1 className="hero-title" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.03em", color: "var(--text)" }}>
                        AI That Understands <br />
                        <span style={{ color: "var(--primary)" }}>Your Supply Chain</span>
                    </h1>
                    <p className="hero-desc" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.6, maxWidth: "680px" }}>
                        Dispatch optimisation, warehouse automation, predictive maintenance, and supply chain visibility powered by Gemini and n8n. Built for operations teams.
                    </p>
                </div>
            </section>

            {/* Section 1: The Challenge */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                           <Image 
                                src="/images/enterprise-data-layer.png"
                                alt="Inefficient warehouse logistics vs optimized blue routes"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">The Challenge: Manual Operations Can't Scale</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    UK manufacturing and logistics operations face a fundamental scaling problem. A mid-sized manufacturer typically manages operations through a combination of legacy ERP systems, spreadsheets, email, and institutional knowledge.
                                </p>
                                
                                <ReadMoreText previewHeight={220} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        This model works until it doesn't: as volume grows, as supply chains extend globally, as customer delivery expectations tighten, the manual model breaks. Dispatch optimisation is still often done by human coordinators assigning 80-120 delivery requests using intuition rather than constraint mathematics.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        The result is suboptimal: vehicles miss full utilisation, drivers take inefficient routes, and delivery windows collapse. A typical mid-market logistics operation runs at 65-75% vehicle utilisation when industry best practice is 85-90%. At scale, that 10-15% efficiency gap represents £200,000-£500,000 in unnecessary annual fleet costs.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            Warehouse operations face duplicate challenges: inventory mapped by history rather than velocity; stock data disjointed from physical reality; and almost entirely absent predictive maintenance, causing shutdowns burning £10,000-£50,000 per hour. Operations urgently need AI capable of absorbing deep physical complexity.
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
                            <h2 className="section-title">Solutions: Dispatch, Warehouse & Predictive Maintenance</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    We deliver four integrated AI solutions that radically reform logistics and manufacturing operational matrices.
                                </p>
                                
                                <ReadMoreText previewHeight={200} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Dispatch Optimisation:</strong> Replaces manual intuition with AI-driven routing. It ingests package weights, time windows, map telemetry, and DOT restrictions to dynamically calculate perfect fleet routes. A typical deployment cuts fuel costs by 12-18% and surges on-time delivery from 82% to 96%.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Warehouse Optimisation:</strong> Organises your facility for maximal picking velocity. High-velocity items shift toward dispatch bays; concurrent picks cluster geographically. Deployed dynamically over your WMS, it routinely cuts picking errors by 40-60%.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Predictive Maintenance:</strong> Integrates natively with IoT acoustic/thermal/vibration sensors on heavy pumps or conveying structures. Identifying mathematical failure signatures weeks ahead of catastrophic faults routinely slashes unplanned downtime by 60%.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            <strong>Supply Chain Visibility:</strong> A deep AI lens consolidating SAP/EDI telemetry, inbound shipment ETAs, and manufacturing inventory. Real-time predictive forecasting alerts operations to potential inbound disruptions immediately.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/continuous_pipeline_arch_1774850879428.png"
                                alt="Four panels visualizing route arrays, warehouse heatmaps, and sensor IoT nodes"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Technology Architecture */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/reasoning_engine_routing_1774850660150.png"
                                alt="n8n orchestration layer routing Gemini optimizations back to TMS"
                                fill
                                style={{ objectFit: "cover", objectPosition: "left center" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">Technology: n8n + Gemini for Operational AI</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    Our operational layer acts as the autonomous central nervous system of your supply chain, powered aggressively by Google's Gemini and orchestrated by n8n.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>Gemini</strong> excels at constraint complexity. While certain models target dense legal texts, Gemini thrives assessing multi-modal structural realities—calculating microsecond route alterations across 100+ variables, reading IoT gauge visuals natively, and returning operational commands.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        <strong>n8n</strong> establishes the execution architecture. When a delivery request drops, n8n invokes Gemini for route calculations, commands the TMS Dispatch Board, and pages the driver via Samsara or internal apps instantly—with zero codebase intervention needed from your internal teams.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            Integration is uniquely bi-directional. n8n pulls from Epicor, Infor, JinxTMS, Blue Yonder, or Oracle seamlessly, pushes Gemini's routing logic back to the database, and alerts mobile field operators synchronously.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Integration Dynamics */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zag-grid">
                        <div className="gsap-reveal">
                            <h2 className="section-title">Integration: Zoho, SAP, Oracle & Custom ERP</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    We inject operational intelligence cleanly into whatever enterprise stack you currently maintain, ensuring high-frequency data streams remain unsiloed.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        For mid-market operations leveraging <strong>Zoho Inventory</strong> and <strong>Zoho Projects</strong>, AI integration is profoundly native. We aggressively scale Zoho environments to digest real-time dispatch telemetrics and predictive manufacturing limits in under 4 weeks.
                                    </p>
                                    <p style={{ marginBottom: "1rem" }}>
                                        For dominant deployments like <strong>SAP</strong> via OData and <strong>Oracle Cloud ERP</strong>, we orchestrate complex connections bypassing their rigid legacy bounds, synchronizing vendor masters and maintenance orders intelligently.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            Operating an isolated custom legacy ERP? We deploy intermediary data lakes, extracting structures via secure ETLs, optimising against modern cloud computing logic, and forcing scheduled automated injection back to your legacy tables securely.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/dual_cloud_architecture_v3_1774850639873.png"
                                alt="ERP integration stack highlighting Zoho, SAP, Oracle bridging to AI"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Global Experience */}
            <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
                <div className="container" style={{ maxWidth: "1250px" }}>
                    <div className="zig-grid">
                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/india_engineering_scale_1774850377523.png"
                                alt="FI Digital India Engineering hubs supporting UAE logistics corridors"
                                fill
                                style={{ objectFit: "cover", objectPosition: "left center" }}
                            />
                        </div>

                        <div className="gsap-reveal">
                            <h2 className="section-title">UAE & India Operational Excellence</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    FI Digital actively builds aggressive manufacturing execution systems for high-yield industrial electronics and automotive bases across the UAE, Bangalore, Hyderabad, and Gujarat.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg-secondary)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        Our Dubai infrastructure supports major logistics firms managing the intense Gulf trade corridor, tracking high-volume GCC distributions flawlessly. That unyielding real-world operational scale is directly imported into our UK deployments.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            Managing profound regulatory variations, multi-zone transit complexities, and IoT fleet sensor integration (ABB, GE, Siemens) demands an engineering core built strictly on industrial reality, not theory. Our India-based automation experts map these hard-won operational frameworks directly onto your UK manufacturing floor constraints natively.
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
                            <h2 className="section-title">Case Study: Logistics Dispatch Optimization</h2>
                            
                            <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                                <p style={{ marginBottom: "1rem" }}>
                                    A Bristol-based 3PL managed 150 delivery vehicles serving 800+ UK retailers. Dispatchers burned 3 manual hours daily assigning 500 orders blindly—leaving fleet utilisation stuck at a costly 68% and tanking on-time ratings to 84%.
                                </p>
                                
                                <ReadMoreText previewHeight={180} fadeColor="var(--bg)">
                                    <p style={{ marginBottom: "1rem" }}>
                                        We deployed our dispatch logic directly onto their TMC software and Samsara telematics endpoints. Generating hyper-optimized mathematical transit routes instantly, we ingested current truck geolocations against strict customer drop-off windows and DOT driver caps.
                                    </p>
                                    <div className="card-highlight">
                                        <p style={{ margin: 0, fontWeight: 500, color: "var(--text)" }}>
                                            <strong>The Result:</strong> Within 48 hours, utilisation spiked instantly to 85%, cutting 14% of their annual £1.2M fuel expenses outright (£168,000 savings). On-time delivery surged to an unprecedented 96%. With £280k in total annual benefits off an initial £90k integration, they confidently scaled up another 600 daily regional routes without purchasing a single new vehicle.
                                        </p>
                                    </div>
                                </ReadMoreText>
                            </div>
                        </div>

                        <div className="gsap-img-wrapper" style={{ position: "relative", width: "100%", height: "550px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <Image 
                                src="/images/client-success-real.jpg"
                                alt="UK 3PL Logistics Case Study Optimization metrics"
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
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "1.5rem" }}>Modernize Your Operational Capacity</h2>
                    <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "3rem", lineHeight: 1.6 }}>
                        Discuss your specific ERP and routing constraints with our deeply experienced Automation Architects today.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/contact?intent=logistics-demo" className="btn-primary" style={{ padding: "1rem 2.5rem", borderRadius: "14px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                            Request Logistics Optimization Demo <ArrowRight size={20} />
                        </Link>
                        <Link href="/resources/logistics-manufacturing-ai.pdf" style={{
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
                        <Link href="/why-fi-digital/global-delivery-model" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Global Delivery Model</Link>
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
                        <div className="section-label" style={{ display: "inline-block", padding: "0.5rem 1rem", background: "rgba(79, 70, 229, 0.1)", color: "var(--primary)", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Operations FAQs</div>
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
