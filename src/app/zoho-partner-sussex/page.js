import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const whyCards = [
  { title: "Certified Zoho Partner", body: "Official Zoho partner with proven certifications across the entire Zoho ecosystem." },
  { title: "10+ Years Experience", body: "A decade of successful implementations across the UK, Australia, and globally." },
  { title: "200+ Engineers", body: "Deep technical bench with specialists for every Zoho module and integration." },
  { title: "UK-Based Account Management", body: "Local team who understands the UK market and regulatory landscape." },
  { title: "End-to-End Support", body: "From initial discovery through go-live and beyond, we are with you every step." },
  { title: "ROI-Focused", body: "Every engagement is designed to deliver measurable return on your investment." },
];

export default function Page() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{
        position: "relative",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(120px, 15vh, 140px) 1.5rem 80px",
        background: "var(--bg)",
        overflow: "hidden",
      }}>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1250px", margin: "0 auto", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.75rem",
                padding: "0.6rem 1.2rem", background: "rgba(79, 70, 229, 0.1)",
                borderRadius: "100px", border: "1px solid rgba(79, 70, 229, 0.2)",
                marginBottom: "2rem", color: "var(--primary)", fontSize: "0.85rem",
                fontWeight: 700, letterSpacing: "0.01em", textTransform: "uppercase"
              }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                Sussex
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Your Local Zoho Partner
                <br />
                <span style={{ color: "var(--primary)" }}>in Sussex</span>
              </h1>
              <p style={{
                fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                FI Digital brings certified Zoho expertise to businesses across Sussex, delivering CRM, marketing automation, and custom app solutions.
              </p>
              <Link href="/contact" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2.5rem",
                background: "var(--primary)",
                color: "white",
                fontWeight: 700,
                fontSize: "1rem",
                borderRadius: "14px",
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(79, 70, 229, 0.3)",
              }}>
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic03.png" alt="Your Local Zoho Partner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 800,
            marginBottom: "1.5rem",
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}>
            How FI Digital Can Help
          </h2>
          <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
            <p style={{ marginBottom: "1rem" }}>
              FI Digital brings certified Zoho expertise to businesses across Sussex, delivering CRM, marketing automation, and custom app solutions.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              As an official Zoho partner with a decade of hands-on experience, FI Digital brings deep technical expertise and a proven methodology to every engagement. Whether you are looking to implement a new solution or optimise an existing one, our certified team ensures a seamless, efficient, and results-driven process.
            </p>
            <p>
              Our consultants work closely with your team to understand your unique requirements, align the solution to your business processes, and deliver measurable outcomes on time and on budget.
            </p>
          </div>
        </div>
      </section>

      {/* Why FI Digital */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 800,
            marginBottom: "3rem",
            color: "var(--text)",
            letterSpacing: "-0.02em",
            textAlign: "center",
          }}>
            Why Choose FI Digital?
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}>
            {whyCards.map((card, i) => (
              <div
                key={i}
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                }}
              >
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 800,
            marginBottom: "1rem",
            color: "var(--text)",
          }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
            Speak with our specialists and discover how we can transform your Zoho environment.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2.5rem",
              background: "var(--primary)",
              color: "white",
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: "14px",
              textDecoration: "none",
              boxShadow: "0 10px 30px rgba(79, 70, 229, 0.3)",
            }}>
              Book a Free Consultation <ArrowRight size={18} />
            </Link>
            <Link href="/service" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2.5rem",
              background: "transparent",
              color: "var(--text)",
              border: "1px solid var(--border)",
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: "14px",
              textDecoration: "none",
            }}>
              Explore Zoho Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
