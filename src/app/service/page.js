import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Box, Book, DollarSign, FileText, Check, BarChart2 } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const keyFeatures = [
  { title: "Multi Channel Support", icon: <Box size={24} /> },
  { title: "Track Agent Productivity", icon: <Book size={24} /> },
  { title: "Customer Satisfaction Surveys", icon: <DollarSign size={24} /> },
  { title: "Customer Ticket Management", icon: <FileText size={24} /> },
  { title: "Self-Service Portal", icon: <Check size={24} /> },
  { title: "Service Insights & Reports", icon: <BarChart2 size={24} /> },
];

export default function ZohoServicesPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-background-wrapper {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.8;
          pointer-events: none;
        }
        @media (min-width: 900px) {
          .hero-background-wrapper {
            width: 65%;
          }
        }
      `}} />

      {/* Hero Section */}
      <section style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(120px, 15vh, 160px) 1.5rem 60px",
        background: "var(--bg)",
        overflow: "hidden",
      }}>
        {/* Right-aligned Faded Hero Image Background (Home Page Match) */}
        <div className="hero-background-wrapper">
          <Image
            src="/images1/Service Section Image.png"
            alt="Zoho Desk Services Background"
            fill
            style={{ 
              objectFit: "cover", 
              objectPosition: "left center", 
              maskImage: "radial-gradient(circle at right, black, transparent 80%)", 
              WebkitMaskImage: "radial-gradient(circle at right, black, transparent 80%)" 
            }}
            priority
          />
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1250px", margin: "0 auto", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeIn">
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.75rem",
                padding: "0.6rem 1.2rem", background: "rgba(79, 70, 229, 0.1)",
                borderRadius: "100px", border: "1px solid rgba(79, 70, 229, 0.2)",
                marginBottom: "2.5rem", color: "var(--primary)", fontSize: "0.85rem",
                fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase"
              }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                Zoho Desk
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Streamline your customer service using <span style={{ color: "var(--primary)" }}>Zoho Desk.</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Manage your multi-channel customer support and deliver the highest customer satisfaction with an intuitive layout and automations designed for service excellence.
              </p>
              <Link href="/contact" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1.2rem 3rem",
                background: "var(--primary)",
                color: "white",
                fontWeight: 700,
                fontSize: "1.1rem",
                borderRadius: "16px",
                textDecoration: "none",
                boxShadow: "0 10px 40px rgba(79, 70, 229, 0.4)",
              }}>
                Get Started Today! <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1rem" }}>
              Key Features
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              All important functionalities built on best practices for industry-leading service teams.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem"
          }}>
            {keyFeatures.map((feature, i) => (
              <div key={i} style={{
                background: "var(--card-bg)",
                padding: "2.5rem",
                borderRadius: "24px",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                boxShadow: "var(--card-shadow)",
              }}>
                <div style={{
                    minWidth: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: "rgba(79, 70, 229, 0.1)",
                    color: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    {feature.icon}
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)", margin: 0 }}>
                    {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
            
            {[
              {
                title: "Optimize Your Scheduling and Dispatch",
                body: "Zoho Desk's intelligent ticket routing features enable you to assign the right ticket to the right customer support agent, providing them with the context needed to solve queries faster. Collaborative features allow multiple departments to work on a single ticket seamlessly.",
                img: "/images1/saas/classic02.png",
                reverse: false
              },
              {
                title: "Automate repetitive service tasks",
                body: "Let your customer support team work on solving problems instead of manual records. Zoho automations prompts agents with next-best options, handles inter-department assignments, and triggers satisfaction surveys automatically.",
                img: "/images1/saas/classic03.png",
                reverse: true
              },
              {
                title: "Get customer and agent insights",
                body: "Managers can track CSAT scores and agent productivity through rich, interactive dashboards. Monitor first response times, customer sentiments, and time to resolution at every organizational level to refine your strategy.",
                img: "/images1/saas/classic02.png",
                reverse: false
              }
            ].map((detail, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center", marginBottom: "100px" }}>
                <div style={{ order: detail.reverse ? { md: 2, base: 1 } : { md: 1, base: 1 } }}>
                    <h3 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                        {detail.title}
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                        {detail.body}
                    </p>
                </div>
                <div style={{ order: detail.reverse ? { md: 1, base: 2 } : { md: 2, base: 2 }, position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                    <img src={detail.img} alt={detail.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            ))}

        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)", textAlign: "center" }}>
          <div style={{ maxWidth: "850px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2.52rem, 4vw, 3.5rem)", fontWeight: 950, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.1 }}>
                Deliver Exceptional <span style={{ color: "var(--primary)" }}>Service.</span>
              </h2>
              <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", opacity: 0.9 }}>
                Ready to transform your customer support environment? Partner with FI Digital today for expert Zoho Desk implementation.
              </p>
              <Link href="/contact" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1.2rem 3.5rem",
                background: "var(--primary)",
                color: "white",
                fontWeight: 700,
                fontSize: "1.1rem",
                borderRadius: "16px",
                textDecoration: "none",
                boxShadow: "0 10px 40px rgba(79, 70, 229, 0.4)",
            }}>
                Talk to an Expert <ArrowRight size={20} />
            </Link>
          </div>
      </section>
    </div>
  );
}
