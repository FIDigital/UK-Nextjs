"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection({ 
    badge,
    title,
    titleHighlight,
    description,
    primaryButtonText = "Get Started",
    primaryButtonLink = "/contact",
    stats = [],
    visualElement = null, // Can pass custom JSX for the visual part
    background = "var(--bg)",
    paddingTop = "160px",
    paddingBottom = "100px"
}) {
    return (
        <section
            className="hero-section"
            style={{
                background: background,
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
                position: "relative",
                overflow: "hidden"
            }}
        >
            {/* Subtle background glow */}
            <div style={{
                position: "absolute",
                top: 0, right: "10%",
                width: "40vw", height: "40vw",
                background: "var(--primary)",
                opacity: 0.05,
                filter: "blur(100px)",
                borderRadius: "50%",
                pointerEvents: "none"
            }} />

            <div style={{ maxWidth: "1250px", margin: "0 auto", position: "relative", zIndex: 1, padding: "0 1.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: visualElement ? "1fr 1fr" : "1fr", gap: "4rem", alignItems: "center" }}>
                    
                    {/* Left: Text Content */}
                    <div style={{ textAlign: visualElement ? "left" : "center", maxWidth: visualElement ? "600px" : "800px", margin: visualElement ? "0" : "0 auto" }}>
                        {/* Badge */}
                        {badge && (
                            <div style={{ 
                                display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.2rem", background: "rgba(79, 70, 229, 0.1)", borderRadius: "100px", border: "1px solid rgba(79, 70, 229, 0.2)", marginBottom: "2rem", color: "var(--primary)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase"
                            }}>
                                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                                {badge}
                            </div>
                        )}

                        {/* Heading */}
                        <h1 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 950, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.03em", color: "var(--text)" }}>
                            {title}
                            {titleHighlight && (
                                <><br /><span style={{ color: "var(--primary)" }}>{titleHighlight}</span></>
                            )}
                        </h1>

                        {/* Description */}
                        <p style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.25rem)", color: "var(--text-muted)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
                            {description}
                        </p>

                        {/* CTA Buttons */}
                        <div style={{ display: "flex", gap: "1rem", justifyContent: visualElement ? "flex-start" : "center", flexWrap: "wrap" }}>
                            <Link href={primaryButtonLink} style={{
                                padding: "1rem 2.5rem",
                                background: "var(--primary)",
                                color: "white",
                                fontWeight: 700,
                                fontSize: "1rem",
                                borderRadius: "12px",
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                transition: "all 0.2s ease"
                            }}>
                                {primaryButtonText} <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Dashboard / Visual Element */}
                    {visualElement && (
                        <div style={{ perspective: "1000px", width: "100%" }}>
                            <div
                                style={{
                                    background: "rgba(255, 255, 255, 0.02)",
                                    backdropFilter: "blur(20px)",
                                    borderRadius: "24px",
                                    padding: "1rem",
                                    boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                                    border: "1px solid var(--border)",
                                    transform: "rotateY(-10deg) rotateX(5deg)",
                                    transformOrigin: "center right",
                                    width: "100%",
                                    transition: "transform 0.5s ease"
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = "rotateY(-10deg) rotateX(5deg)"; }}
                            >
                                {visualElement}
                            </div>
                        </div>
                    )}
                </div>

                {/* Stats Strip */}
                {stats && stats.length > 0 && (
                    <div style={{ 
                        marginTop: "6rem", 
                        padding: "3rem", 
                        background: "var(--card-bg)", 
                        borderRadius: "24px", 
                        border: "1px solid var(--border)",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "2rem",
                        textAlign: "center"
                    }}>
                        {stats.map((s, idx) => (
                            <div key={idx}>
                                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>{s.number}</div>
                                <div style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: 500 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
