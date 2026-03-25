"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Calculator } from "lucide-react";

export default function AssessmentPage() {
  const [complete, setComplete] = useState(false);

  return (
    <div style={{ padding: "160px 1.5rem 100px", background: "var(--bg)", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
        {!complete ? (
          <div style={{ background: "var(--bg-secondary)", padding: "4rem", borderRadius: "48px", border: "1px solid var(--border)" }}>
            <Calculator className="text-primary" size={48} style={{ marginBottom: "2rem" }} />
            <h1 style={{ fontSize: "2.5rem", fontWeight: 950, marginBottom: "1.5rem" }}>AI Readiness Assessment</h1>
            <p style={{ color: "var(--text-muted)", marginBottom: "3rem", fontSize: "1.1rem" }}>
              Answer 15 questions to determine your enterprise&apos;s readiness for autonomous digital workers. 
              Our team will analyze your results and provide a personalized roadmap.
            </p>
            
            <div style={{ display: "grid", gap: "2rem" }}>
              <div style={{ paddingBottom: "2rem", borderBottom: "1px solid var(--border)" }}>
                <p style={{ fontWeight: 800, marginBottom: "1rem" }}>1. Are your core business processes documented?</p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <button onClick={() => {}} style={{ padding: "0.75rem 1.5rem", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--bg)", fontWeight: 700 }}>Yes, fully</button>
                  <button onClick={() => {}} style={{ padding: "0.75rem 1.5rem", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--bg)", fontWeight: 700 }}>Partially</button>
                  <button onClick={() => {}} style={{ padding: "0.75rem 1.5rem", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--bg)", fontWeight: 700 }}>Not at all</button>
                </div>
              </div>
              {/* Simplified for demo: jump to complete */}
              <button onClick={() => setComplete(true)} className="btn-primary" style={{ marginTop: "2rem" }}>Analyze My Readiness <ArrowRight size={18} /></button>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center", background: "var(--bg-secondary)", padding: "6rem 4rem", borderRadius: "48px", border: "1px solid var(--border)" }}>
             <CheckCircle2 className="text-primary" size={64} style={{ marginBottom: "2rem", margin: "0 auto" }} />
             <h2 style={{ fontSize: "2.5rem", fontWeight: 950, marginBottom: "1.5rem" }}>Thank You</h2>
             <p style={{ color: "var(--text-muted)", fontSize: "1.2rem", marginBottom: "3rem" }}>
               Our UK Architecture team is reviewing your responses. We will email your custom score (0-100) and multi-page roadmap within 24 hours.
             </p>
             <Link href="/" className="btn-secondary">Return Home</Link>
          </div>
        )}
      </div>
    </div>
  );
}
