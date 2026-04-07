import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Filter, Users, DollarSign, FileText, CheckCircle2, BarChart3 } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

export default function SalesPage() {
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
            src="/images1/services.jpg"
            alt="Zoho CRM Sales Solutions Background"
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
                Sales CRM Solutions
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Streamline Your Sales Process with <span style={{ color: "var(--primary)" }}>Zoho CRM</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Effortlessly manage your leads, deals, and revenue. Close more business with our comprehensive, easy-to-use CRM solutions tailored for high-growth teams.
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

      {/* Key Features Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Key Features
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
              Comprehensive functionalities built on best practices for high-performance sales environments.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {[
              { icon: <Filter size={24} />, title: "Lead Management" },
              { icon: <Users size={24} />, title: "Account Overview" },
              { icon: <DollarSign size={24} />, title: "Opportunity Management" },
              { icon: <FileText size={24} />, title: "Quotation Management" },
              { icon: <CheckCircle2 size={24} />, title: "Activity Tracking" },
              { icon: <BarChart3 size={24} />, title: "Sales Analytics" }
            ].map((card, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "1.5rem", background: "var(--card-bg)", padding: "2rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <div style={{ minWidth: "56px", height: "56px", borderRadius: "14px", background: "rgba(79, 70, 229, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                   {card.icon}
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)", margin: 0 }}>{card.title}</h3>
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
              title: "Convert Leads to Customers with Ease",
              body: "Zoho CRM's intuitive interface is built for sales teams to close deals quicker. Features like tasks, reminders, and activity tracking ensure no opportunities are missed, delivering a better experience for both agents and customers.",
              img: "/images1/saas/classic02.png",
              reverse: false
            },
            {
              title: "Sales Flow Automation",
              body: "Leverage powerful automation like blueprints, client scripts, and workflows. Free your sales team from mundane tasks so they can focus on building meaningful relationships and closing more deals.",
              img: "/images1/team.jpg",
              reverse: true
            },
            {
              title: "Rich Sales Insights, Better Decisions",
              body: "Capture class-leading Business Intelligence and Analytics. Find the right trends, monitor pipeline conversion rates, and understand drop-off reasons with the click of a button.",
              img: "/images1/service1.jpg",
              reverse: false
            }
          ].map((detail, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center", marginBottom: "100px" }}>
              <div style={{ order: detail.reverse ? { md: 2, base: 1 } : { md: 1, base: 1 } }}>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                  {detail.title}
                </h2>
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

      {/* Final CTA Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 950, marginBottom: "2rem", lineHeight: 1.1 }}>
            Digitize, Automate & Transform Your Sales Process
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9, lineHeight: 1.7 }}>
            Ready to explore how the world's favorite CRM can help your business grow? Contact our Zoho experts for a specialized strategy session today.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "1.2rem 3.5rem",
            background: "white",
            color: "var(--primary)",
            fontWeight: 700,
            fontSize: "1.1rem",
            borderRadius: "16px",
            textDecoration: "none",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          }}>
            Book Free Demo <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
