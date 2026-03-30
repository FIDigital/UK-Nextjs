"use client";

import React from "react";
import { Server, Shield, Activity, GitCommit, Database, Cloud, Lock, Cpu, Network, Zap, Settings, RefreshCw, Brain, Eye } from "lucide-react";

// Common Dashboard Window Wrapper
const WindowWrapper = ({ children, title = "System Overview" }) => (
    <div style={{ background: "var(--card-bg)", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}>
        {/* Toolbar */}
        <div style={{ padding: "0.75rem 1.5rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "1rem", background: "rgba(0,0,0,0.02)" }}>
            <div style={{ display: "flex", gap: "6px" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }} />
            </div>
            <div style={{ flex: 1, textAlign: "center", fontSize: "0.75rem", fontFamily: "var(--font-geist-mono)", color: "var(--text-muted)", letterSpacing: "1px" }}>
                {title}
            </div>
            <div style={{ width: "42px" }} /> {/* Spacer */}
        </div>
        <div style={{ padding: "2rem" }}>
            {children}
        </div>
    </div>
);

// Hero Visual: Enterprise AI Router
export const HeroArchitectureVisual = () => (
    <WindowWrapper title="AI-Orchestration-Gateway.ts">
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Header Stats */}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "var(--bg)", borderRadius: "12px", border: "1px solid var(--border)" }}>
                <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>Active Inferences</span>
                    <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--primary)" }}>1,248/s</span>
                </div>
                <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>Latency Average</span>
                    <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "#10b981" }}>142ms</span>
                </div>
                <div>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block" }}>Router Status</span>
                    <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text)" }}>Healthy</span>
                </div>
            </div>

            {/* Router Diagram */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem" }}>
                {/* User Input */}
                <div style={{ padding: "1rem", borderRadius: "50%", background: "var(--bg)", border: "2px dashed var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Activity size={24} color="var(--primary)" />
                </div>

                {/* Arrow */}
                <div style={{ flex: 1, height: "2px", background: "var(--border)", position: "relative" }}>
                    <div style={{ position: "absolute", right: 0, top: "-4px", border: "solid var(--border)", borderWidth: "0 2px 2px 0", display: "inline-block", padding: "3px", transform: "rotate(-45deg)" }} />
                </div>

                {/* Gateway */}
                <div style={{ padding: "1.5rem 2rem", background: "var(--primary)", color: "white", borderRadius: "16px", fontWeight: 600, textAlign: "center", boxShadow: "0 10px 30px rgba(79, 70, 229, 0.3)" }}>
                    <Network size={32} style={{ marginBottom: "0.5rem" }} />
                    <br />Semantic Router
                </div>

                {/* Lines splitting */}
                <div style={{ flex: 1, position: "relative", height: "120px" }}>
                    <div style={{ position: "absolute", left: 0, top: "20px", width: "100%", height: "2px", background: "var(--border)" }} />
                    <div style={{ position: "absolute", left: 0, top: "60px", width: "100%", height: "2px", background: "var(--border)" }} />
                    <div style={{ position: "absolute", left: 0, top: "100px", width: "100%", height: "2px", background: "var(--border)" }} />
                </div>

                {/* Models */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {["Claude 3.5 Sonnet", "GPT-4 Omni", "Gemini 1.5 Pro"].map((model, i) => (
                        <div key={model} style={{ padding: "0.75rem 1rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <Cpu size={16} color={i === 0 ? "#10b981" : i === 1 ? "#f59e0b" : "var(--primary)"} />
                            {model}
                        </div>
                    ))}
                </div>
            </div>

            {/* Activity Chart */}
            <div style={{ height: "60px", background: "var(--bg)", borderRadius: "12px", border: "1px solid var(--border)", display: "flex", alignItems: "flex-end", padding: "0.5rem", gap: "4px" }}>
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} style={{ flex: 1, background: "var(--primary)", opacity: Math.random() * 0.5 + 0.2, height: `${Math.random() * 80 + 20}%`, borderRadius: "2px" }} />
                ))}
            </div>
        </div>
    </WindowWrapper>
);

// Section 1: Model-Agnostic
export const ModelAgnosticVisual = () => (
    <div style={{ padding: "2rem", background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
            {[
                { name: "Claude 3.5", useCase: "Complex Legal Reasoning", color: "#6366f1", icon: <Brain size={24} color="#6366f1" /> },
                { name: "GPT-4o", useCase: "Spatial & Vision Tasks", color: "#10b981", icon: <Eye size={24} color="#10b981" /> },
                { name: "Gemini 1.5 Pro", useCase: "Real-time Ops", color: "#f59e0b", icon: <Zap size={24} color="#f59e0b" /> },
                { name: "Llama 3", useCase: "High-volume Local", color: "#ec4899", icon: <Database size={24} color="#ec4899" /> }
            ].map(m => (
                <div key={m.name} style={{ flex: "1 1 200px", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.5rem" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${m.color}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                        {m.icon || <Cpu size={24} color={m.color} />}
                    </div>
                    <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>{m.name}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{m.useCase}</div>
                </div>
            ))}
        </div>
    </div>
);

// Section 2: Dual Cloud
export const DualCloudVisual = () => (
    <WindowWrapper title="cloud-architecture-uk.tf">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {/* AWS */}
            <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "16px", background: "var(--bg)", position: "relative" }}>
                <Cloud size={32} color="#f59e0b" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>AWS Bedrock</h3>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>Region: eu-west-2 (London)<br/>Data Residency: Guaranteed</div>
                <div style={{ height: "40px", background: "#f59e0b20", borderRadius: "8px", display: "flex", alignItems: "center", padding: "0 1rem", fontSize: "0.85rem", fontWeight: 600, color: "#f59e0b" }}>
                    <Lock size={14} style={{ marginRight: "8px" }} /> SoC 2 Compliant
                </div>
            </div>
            
            {/* Azure */}
            <div style={{ padding: "2rem", border: "1px solid var(--border)", borderRadius: "16px", background: "var(--bg)", position: "relative" }}>
                <Server size={32} color="#3b82f6" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Azure OpenAI</h3>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>Region: UK South (London)<br/>Data Residency: Guaranteed</div>
                <div style={{ height: "40px", background: "#3b82f620", borderRadius: "8px", display: "flex", alignItems: "center", padding: "0 1rem", fontSize: "0.85rem", fontWeight: 600, color: "#3b82f6" }}>
                    <Shield size={14} style={{ marginRight: "8px" }} /> ISO 27001 Certified
                </div>
            </div>
        </div>
    </WindowWrapper>
);

// Section 3: CI/CD
export const CICDPipelineVisual = () => (
    <div style={{ padding: "3rem", background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "2rem" }}>
        {[
            { step: "1. Code Commit", icon: <GitCommit />, desc: "IaC & Prompt Updates in Git", status: "passed" },
            { step: "2. Automated Tests", icon: <Settings />, desc: "Unit & Regression Testing", status: "passed" },
            { step: "3. Staging Env", icon: <RefreshCw />, desc: "Human-in-loop Validation", status: "running" },
            { step: "4. Production", icon: <Server />, desc: "Automated Deployment", status: "pending" }
        ].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ 
                    width: "48px", height: "48px", borderRadius: "50%", 
                    background: s.status === "passed" ? "#10b98120" : s.status === "running" ? "var(--primary-light, #6366f120)" : "var(--bg)", 
                    border: `2px solid ${s.status === "passed" ? "#10b981" : s.status === "running" ? "var(--primary)" : "var(--border)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: s.status === "passed" ? "#10b981" : s.status === "running" ? "var(--primary)" : "var(--text-muted)"
                }}>
                    {s.icon}
                </div>
                <div>
                    <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>{s.step}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{s.desc}</div>
                </div>
            </div>
        ))}
    </div>
);

// Section 4: Observability
export const ObservabilityVisual = () => (
    <WindowWrapper title="grafana.dev.fidigital.local">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div style={{ gridColumn: "1 / -1", padding: "1.5rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Accuracy Trend</div>
                    <div style={{ fontSize: "0.85rem", color: "#10b981", fontWeight: 700 }}>+2.4%</div>
                </div>
                <div style={{ height: "80px", display: "flex", alignItems: "flex-end", gap: "4px" }}>
                    {[80, 82, 81, 85, 87, 85, 89, 92, 91, 94, 95, 96].map((h, i) => (
                        <div key={i} style={{ flex: 1, background: "linear-gradient(to top, var(--primary), transparent)", height: `${h}%`, borderRadius: "4px 4px 0 0", opacity: 0.8 }} />
                    ))}
                </div>
            </div>
            
            <div style={{ padding: "1.5rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Avg Confidence</div>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--primary)" }}>94.2%</div>
            </div>
            
            <div style={{ padding: "1.5rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Human Overrides</div>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#f59e0b" }}>1.4%</div>
            </div>
        </div>
    </WindowWrapper>
);

// Section 5: Security
export const SecurityVisual = () => (
    <div style={{ padding: "2rem", background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
        
        {/* Background circuit lines */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }}>
            {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} style={{ position: "absolute", top: `${i * 10}%`, width: "100%", height: "1px", background: "var(--text)" }} />
            ))}
        </div>

        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ padding: "1rem 1.5rem", background: "var(--bg)", borderRadius: "12px", border: "1px solid #10b981", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <Shield color="#10b981" />
                    <span style={{ fontWeight: 600 }}>TLS 1.3 Encryption</span>
                </div>
                <span style={{ fontSize: "0.75rem", background: "#10b98120", color: "#10b981", padding: "4px 8px", borderRadius: "100px", fontWeight: 700 }}>IN TRANSIT</span>
            </div>
            
            <div style={{ padding: "1rem 1.5rem", background: "var(--bg)", borderRadius: "12px", border: "1px solid var(--primary)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <Lock color="var(--primary)" />
                    <span style={{ fontWeight: 600 }}>AES-256 Encryption</span>
                </div>
                <span style={{ fontSize: "0.75rem", background: "var(--primary-light, rgba(79, 70, 229, 0.2))", color: "var(--primary)", padding: "4px 8px", borderRadius: "100px", fontWeight: 700 }}>AT REST</span>
            </div>
            
            <div style={{ padding: "1rem 1.5rem", background: "var(--bg)", borderRadius: "12px", border: "1px solid #f59e0b", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <Database color="#f59e0b" />
                    <span style={{ fontWeight: 600 }}>Secrets Vault</span>
                </div>
                <span style={{ fontSize: "0.75rem", background: "#f59e0b20", color: "#f59e0b", padding: "4px 8px", borderRadius: "100px", fontWeight: 700 }}>MANAGED</span>
            </div>
            
            <div style={{ marginTop: "1rem", padding: "1rem", background: "#000", color: "#00ff00", fontFamily: "var(--font-geist-mono)", fontSize: "0.8rem", borderRadius: "8px" }}>
                $ auditctl -l<br/>
                [INFO] User auth: SUCCESS<br/>
                [INFO] Token mint: SUCCESS<br/>
                [INFO] PII Masking: Applied
            </div>
        </div>
    </div>
);
