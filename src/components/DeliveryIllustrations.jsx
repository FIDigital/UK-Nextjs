"use client";

import React, { useEffect } from "react";
import { Server, Users, Shield, Zap, Globe, Clock, Activity, ArrowRight, ArrowLeft } from "lucide-react";
import gsap from "gsap";

/**
 * 1. Global Map Visual showing interconnected hubs
 */
export const GlobalMapVisual = () => {
    return (
        <div style={{ width: "100%", height: "100%", background: "var(--card-bg)", borderRadius: "inherit", padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "radial-gradient(var(--text) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            
            <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div style={{ padding: "0.5rem", background: "rgba(79, 70, 229, 0.1)", borderRadius: "8px", color: "var(--primary)" }}>
                        <Globe size={20} />
                    </div>
                    <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Global Delivery Network</span>
                </div>
            </div>

            <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="100%" height="80%" viewBox="0 0 400 200" style={{ overflow: "visible" }}>
                    <path d="M 50 80 Q 150 20 250 100 T 350 140" fill="none" stroke="rgba(79, 70, 229, 0.3)" strokeWidth="2" strokeDasharray="6 6" className="path-anim" />
                    
                    {/* UK Node */}
                    <g transform="translate(50, 80)">
                        <circle cx="0" cy="0" r="16" fill="rgba(79, 70, 229, 0.2)" />
                        <circle cx="0" cy="0" r="6" fill="var(--primary)" />
                        <rect x="-30" y="25" width="60" height="24" rx="4" fill="var(--bg-secondary)" stroke="var(--border)" />
                        <text x="0" y="41" fontSize="10" fill="var(--text)" textAnchor="middle" fontWeight="bold">London</text>
                    </g>
                    
                    {/* India Node */}
                    <g transform="translate(250, 100)">
                        <circle cx="0" cy="0" r="20" fill="rgba(16, 185, 129, 0.2)" />
                        <circle cx="0" cy="0" r="8" fill="#10B981" />
                        <rect x="-40" y="-35" width="80" height="24" rx="4" fill="var(--bg-secondary)" stroke="var(--border)" />
                        <text x="0" y="-19" fontSize="10" fill="var(--text)" textAnchor="middle" fontWeight="bold">Bangalore</text>
                    </g>

                    {/* Australia Node */}
                    <g transform="translate(350, 140)">
                        <circle cx="0" cy="0" r="14" fill="rgba(245, 158, 11, 0.2)" />
                        <circle cx="0" cy="0" r="5" fill="#F59E0B" />
                        <rect x="-30" y="20" width="60" height="24" rx="4" fill="var(--bg-secondary)" stroke="var(--border)" />
                        <text x="0" y="36" fontSize="10" fill="var(--text)" textAnchor="middle" fontWeight="bold">Sydney</text>
                    </g>
                    
                    {/* Moving pulse */}
                    <circle cx="0" cy="0" r="3" fill="#fff">
                        <animateMotion dur="3s" repeatCount="indefinite" path="M 50 80 Q 150 20 250 100 T 350 140" />
                    </circle>
                </svg>
            </div>
            
            <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
                <div style={{ background: "var(--bg-secondary)", padding: "1rem", borderRadius: "12px", border: "1px solid var(--border)", textAlign: "center" }}>
                    <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)" }}>UK</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>HQ & Architecture</div>
                </div>
                <div style={{ background: "var(--bg-secondary)", padding: "1rem", borderRadius: "12px", border: "1px solid rgba(16, 185, 129, 0.3)", textAlign: "center" }}>
                    <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#10B981" }}>India</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>Engineering Hub</div>
                </div>
                <div style={{ background: "var(--bg-secondary)", padding: "1rem", borderRadius: "12px", border: "1px solid rgba(245, 158, 11, 0.3)", textAlign: "center" }}>
                    <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#F59E0B" }}>AUS</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>Innovation Center</div>
                </div>
            </div>
            <style jsx>{`
                @keyframes dash { to { stroke-dashoffset: -12; } }
                .path-anim { animation: dash 1s linear infinite; }
            `}</style>
        </div>
    );
};

/**
 * 2. Roles Chart Visual showing specialisation distribution
 */
export const RolesChartVisual = () => {
    const roles = [
        { name: "Generalist AI/ML", count: 60, color: "var(--primary)", percent: "100%" },
        { name: "Domain Specialists", count: 50, color: "#10B981", percent: "83%" },
        { name: "Platform Engineers", count: 40, color: "#F59E0B", percent: "66%" },
        { name: "QA Engineers", count: 30, color: "#8B5CF6", percent: "50%" },
        { name: "Integration", count: 20, color: "#EC4899", percent: "33%" },
        { name: "DevOps / SRE", count: 15, color: "#06B6D4", percent: "25%" },
    ];

    return (
        <div style={{ width: "100%", height: "100%", background: "var(--card-bg)", borderRadius: "inherit", padding: "2rem", display: "flex", flexDirection: "column", position: "relative" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ padding: "0.5rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "8px", color: "#10B981" }}>
                        <Users size={20} />
                    </div>
                    <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Specialisation Distribution</span>
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--text)" }}>215<span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 600 }}> FTE</span></div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", flex: 1, justifyContent: "center" }}>
                {roles.map((role, i) => (
                    <div key={i} style={{ width: "100%" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", fontSize: "0.85rem", fontWeight: 600 }}>
                            <span style={{ color: "var(--text)" }}>{role.name}</span>
                            <span style={{ color: "var(--text-muted)" }}>{role.count} FTE</span>
                        </div>
                        <div style={{ width: "100%", height: "12px", background: "var(--bg-secondary)", borderRadius: "6px", overflow: "hidden" }}>
                            <div className="bar-fill" style={{ width: role.percent, height: "100%", background: role.color, borderRadius: "6px" }} />
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .bar-fill { animation: inflate 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; transform-origin: left; }
                @keyframes inflate { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); } }
            `}</style>
        </div>
    );
};

/**
 * 3. Timeline Visual showing continuous development cycle
 */
export const TimelineVisual = () => {
    return (
        <div style={{ width: "100%", height: "100%", background: "var(--card-bg)", borderRadius: "inherit", padding: "2rem", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
                <div style={{ padding: "0.5rem", background: "rgba(245, 158, 11, 0.1)", borderRadius: "8px", color: "#F59E0B" }}>
                    <Clock size={20} />
                </div>
                <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.05em" }}>24-Hour Delivery Cycle</span>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", padding: "1rem 0" }}>
                {/* Loop Path */}
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}>
                     <path d="M 50 50 C 150 -10, 250 -10, 350 50 C 250 110, 150 110, 50 50" fill="none" stroke="var(--border)" strokeWidth="2" strokeDasharray="4 4" transform="translate(0, 30)" />
                     <circle cx="0" cy="0" r="4" fill="var(--primary)">
                        <animateMotion dur="4s" repeatCount="indefinite" path="M 50 50 C 150 -10, 250 -10, 350 50 C 250 110, 150 110, 50 50" />
                     </circle>
                </svg>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 1, width: "100%" }}>
                    
                    {/* UK Block */}
                    <div style={{ width: "42%", background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.25rem", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", position: "relative" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                            <div style={{ fontWeight: 800, color: "var(--text)" }}>UK Team</div>
                            <span style={{ fontSize: "0.7rem", padding: "2px 6px", background: "rgba(79, 70, 229, 0.1)", color: "var(--primary)", borderRadius: "4px" }}>DAY</span>
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                            Designs feature & documents requirements. Hands off EOD.
                        </div>
                    </div>

                    {/* India Block */}
                    <div style={{ width: "42%", background: "var(--bg-secondary)", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "16px", padding: "1.25rem", boxShadow: "0 10px 30px rgba(16, 185, 129, 0.1)", position: "relative", marginTop: "100px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                            <div style={{ fontWeight: 800, color: "var(--text)" }}>India Team</div>
                            <span style={{ fontSize: "0.7rem", padding: "2px 6px", background: "rgba(16, 185, 129, 0.1)", color: "#10B981", borderRadius: "4px" }}>DAY</span>
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                            Receives brief, implements code & tests. Hands back EOD.
                        </div>
                    </div>

                </div>
                
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "var(--card-bg)", padding: "0.5rem 1rem", borderRadius: "100px", border: "1px solid var(--border)", fontSize: "0.75rem", fontWeight: 700, color: "var(--text)", zIndex: 2, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Activity size={14} color="var(--primary)" /> Continuous Flow
                </div>
            </div>
        </div>
    );
};

/**
 * 4. Data Protection Visual showing UK cloud boundary
 */
export const DataProtectionVisual = () => {
    return (
        <div style={{ width: "100%", height: "100%", background: "var(--card-bg)", borderRadius: "inherit", padding: "2rem", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem", position: "relative", zIndex: 1 }}>
                <div style={{ padding: "0.5rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "8px", color: "#10B981" }}>
                    <Shield size={20} />
                </div>
                <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.05em" }}>UK Sovereign Data Boundary</span>
            </div>

            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <div style={{ position: "absolute", inset: "0 20%", border: "2px dashed rgba(16, 185, 129, 0.4)", borderRadius: "24px", background: "rgba(16, 185, 129, 0.05)", zIndex: 0 }} />
                <div style={{ position: "absolute", top: "-12px", background: "var(--bg-secondary)", padding: "0 1rem", color: "#10B981", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.05em", textTransform: "uppercase", border: "1px solid rgba(16, 185, 129, 0.3)", borderRadius: "100px" }}>
                    UK Cloud (AWS/Azure)
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", zIndex: 1, width: "100%" }}>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <div style={{ background: "var(--bg-secondary)", padding: "1rem", borderRadius: "12px", border: "1px solid var(--border)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", minWidth: "120px" }}>
                            <Server size={24} color="var(--text)" />
                            <span style={{ fontSize: "0.75rem", fontWeight: 700 }}>Production DB</span>
                        </div>
                        <div style={{ background: "var(--bg-secondary)", padding: "1rem", borderRadius: "12px", border: "1px solid var(--border)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", minWidth: "120px" }}>
                            <Shield size={24} color="var(--primary)" />
                            <span style={{ fontSize: "0.75rem", fontWeight: 700 }}>Client Data</span>
                        </div>
                    </div>
                </div>

                {/* External accesses */}
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}>
                    <path d="M 50 200 C 50 150, 150 150, 150 100" fill="none" stroke="var(--border)" strokeWidth="2" strokeDasharray="4 4" className="path-anim" />
                    <path d="M 350 200 C 350 150, 250 150, 250 100" fill="none" stroke="var(--border)" strokeWidth="2" strokeDasharray="4 4" className="path-anim" />
                    <circle cx="0" cy="0" r="4" fill="var(--text-muted)">
                         <animateMotion dur="3s" repeatCount="indefinite" path="M 50 200 C 50 150, 150 150, 150 100" />
                    </circle>
                    <circle cx="0" cy="0" r="4" fill="var(--text-muted)">
                         <animateMotion dur="3s" repeatCount="indefinite" path="M 350 200 C 350 150, 250 150, 250 100" />
                    </circle>
                </svg>

                <div style={{ position: "absolute", bottom: "-20px", width: "100%", display: "flex", justifyContent: "space-between", padding: "0 2rem", zIndex: 1 }}>
                    <div style={{ background: "var(--bg)", border: "1px solid var(--border)", padding: "0.5rem 1rem", borderRadius: "8px", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        <strong>India:</strong> Anonymised Code
                    </div>
                    <div style={{ background: "var(--bg)", border: "1px solid var(--border)", padding: "0.5rem 1rem", borderRadius: "8px", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        <strong>AUS:</strong> Architecture
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes dash { to { stroke-dashoffset: -12; } }
                .path-anim { animation: dash 1s linear infinite; }
            `}</style>
        </div>
    );
};

/**
 * 5. Zoho + AI Expertise Visual showing integration layer
 */
export const ZohoExpertiseVisual = () => {
    const modules = ["CRM", "Books", "Inventory", "Projects", "Desk"];
    return (
        <div style={{ width: "100%", height: "100%", background: "var(--card-bg)", borderRadius: "inherit", padding: "2rem", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem", position: "relative", zIndex: 1 }}>
                <div style={{ padding: "0.5rem", background: "rgba(79, 70, 229, 0.1)", borderRadius: "8px", color: "var(--primary)" }}>
                    <Zap size={20} />
                </div>
                <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Zoho Ecosystem + AI Layer</span>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem", justifyContent: "center" }}>
                
                {/* Custom AI Layer */}
                <div style={{ background: "linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(79, 70, 229, 0.02) 100%)", border: "1px solid var(--primary)", borderRadius: "16px", padding: "1.5rem", textAlign: "center", position: "relative" }}>
                    <div style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                        <Server size={18} /> FI Digital Custom AI Layer
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                        Predictive Maintenance • Intelligent Routing • Automation
                    </div>
                    
                    {/* Connecting lines downward */}
                    <div style={{ position: "absolute", bottom: "-24px", left: 0, width: "100%", display: "flex", justifyContent: "space-around" }}>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} style={{ width: "2px", height: "24px", background: "linear-gradient(to bottom, var(--primary), var(--border))" }} />
                        ))}
                    </div>
                </div>

                {/* Zoho Core Modules */}
                <div style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem" }}>
                    {modules.map(mod => (
                        <div key={mod} style={{ flex: 1, background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "12px", padding: "1rem 0", textAlign: "center", zIndex: 1 }}>
                            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text)" }}>Zoho</div>
                            <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-muted)", marginTop: "0.2rem" }}>{mod}</div>
                        </div>
                    ))}
                </div>
                
                <div style={{ textAlign: "center", fontSize: "0.8rem", color: "var(--text-muted)", padding: "0.5rem", borderTop: "1px dashed var(--border)", marginTop: "0.5rem", paddingTop: "1rem" }}>
                    Seamless workflow pipeline engineered cross-continent.
                </div>
            </div>
        </div>
    );
};
