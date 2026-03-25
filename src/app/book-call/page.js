"use client";

import Link from "next/link";
import { Calendar, ArrowRight, MessageSquare } from "lucide-react";

export default function BookCallPage() {
  return (
    <div style={{ padding: "160px 1.5rem 100px", background: "var(--bg)", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ background: "var(--bg-secondary)", padding: "6rem 4rem", borderRadius: "48px", border: "1px solid var(--border)" }}>
           <Calendar className="text-primary" size={64} style={{ marginBottom: "2.5rem", margin: "0 auto" }} />
           <h1 style={{ fontSize: "3rem", fontWeight: 950, marginBottom: "1.5rem" }}>Book a Strategy Call</h1>
           <p style={{ color: "var(--text-muted)", fontSize: "1.2rem", marginBottom: "3.5rem", maxWidth: "600px", margin: "0 auto 3.5rem" }}>
             Schedule a 30-minute deep-dive with a UK AI Architect to discuss your enterprise workflows and ROI potential.
           </p>
           
           <div style={{ display: "grid", gap: "1.5rem", maxWidth: "400px", margin: "0 auto" }}>
              <Link href="/contact" className="btn-primary" style={{ width: "100%", padding: "1.25rem" }}>Confirm London Strategy Call <ArrowRight size={18} /></Link>
              <Link href="/contact" className="btn-secondary" style={{ width: "100%", padding: "1.25rem" }}>Request Callback <MessageSquare size={18} /></Link>
           </div>
           
           <p style={{ marginTop: "4rem", fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
             Trusted by UK Mid-Market & Enterprise Since 2016
           </p>
        </div>
      </div>
    </div>
  );
}
