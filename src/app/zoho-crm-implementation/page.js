import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ClipboardCheck, Settings, Database, GraduationCap, LineChart, ShieldCheck } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

export default function ZohoCrmImplementationPage() {
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
            src="/images1/Home.jpg"
            alt="Zoho CRM Implementation Background"
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
                Nurture & Convert
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Zoho CRM Implementation <span style={{ color: "var(--primary)" }}>Services in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Are you exploring how Zoho’s powerful suite can streamline your business processes and drive results? FI Digital is your trusted consultancy partner in the UK, providing expert guidance and process mapping for maximum impact.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                From CRM and marketing automation to custom-built Creator apps, our certified consultants help you align your Zoho solution with your business goals for rapid ROI.
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

      {/* Why Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/second.jpg" alt="Why Partner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Why Implement Zoho CRM with a Certified Partner?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Zoho CRM is known globally for streamlining sales processes and automating tasks. Realizing its full potential requires precise customization and expert integration—where FI Digital excels.
              </p>
              <p style={{ fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>
                Our certified Zoho CRM consultants ensure:
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1.2rem" }}>
                {[
                  { t: "Tailored CRM Setup", d: "We adapt Zoho CRM to match your unique business processes perfectly." },
                  { t: "Seamless Integration", d: "Connect effortlessly with existing systems like email, accounting software, and Zoho Suite." },
                  { t: "Data Migration Support", d: "Smooth transition from current systems, ensuring minimal disruption and data accuracy." }
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                    <ArrowRight size={18} className="text-primary" style={{ flexShrink: 0, marginTop: "4px" }} />
                    <div>
                        <strong style={{ color: "var(--text)" }}>{item.t}:</strong> {item.d}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Our Zoho CRM Implementation Process
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                FI Digital follows a structured yet flexible approach for every CRM implementation project:
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  { n: "1", t: "CRM Planning & Requirements", d: "We document your unique business goals and document exact requirements." },
                  { n: "2", t: "Configuration & Custom Fields", d: "We meticulously configure modules, workflows, and sales stages for your needs." },
                  { n: "3", t: "System Integration", d: "We integrate CRM with your technology stack, including Zoho Suite, SAP, and QuickBooks." },
                  { n: "4", t: "Data Migration", d: "Critical historical data is safely migrated, verified, and organized within Zoho." },
                  { n: "5", t: "User Training & Support", d: "Confidential sessions for your team followed by rapid go-live support." }
                ].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "1.5rem" }}>
                    <div style={{ minWidth: "32px", height: "32px", borderRadius: "50%", background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", fontWeight: 700 }}>
                      {step.n}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.25rem" }}>{step.t}</h4>
                      <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.5 }}>{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
              <img src="/images1/three.png" alt="Implementation Process" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/four.webp" alt="Optimization" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Optimising Zoho CRM for Your Business
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                 Partnering with FI Digital for your Zoho consulting needs ensures immediate and lasting benefits for your growth:
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  { icon: <Settings size={20} />, t: "Sales Automation", d: "Streamline lead generation, nurturing, and conversion processes." },
                  { icon: <LineChart size={20} />, t: "Analytics & Reporting", d: "Custom dashboards and real-time insights to empower decision-making." },
                  { icon: <Database size={20} />, t: "Advanced Customisation", d: "Build specific modules, workflows, and automations unique to your needs." }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                    <div style={{ minWidth: "40px", height: "40px", borderRadius: "10px", background: "rgba(79, 70, 229, 0.1)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.2rem" }}>{item.t}</h4>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
             <div style={{ order: { md: 2, base: 1 } }} className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Post-Implementation Support & Training
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                We provide ongoing support long after initial deployment. Our Managed Services ensure you always have a team of CRM experts on hand:
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1.2rem" }}>
                {[
                  "Quick response to technical queries and updates.",
                  "Tailored UK expertise: Regular CRM optimisation.",
                  "Ongoing training for new and existing team members."
                ].map((li, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                    <ArrowRight size={18} className="text-primary" style={{ flexShrink: 0, marginTop: "4px" }} />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)", order: { md: 1, base: 2 } }} className="wow animate__animated animate__fadeInRight">
              <img src="/images1/five.png" alt="Support" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
              <img src="/images1/result_zoho_crm.png" alt="Results" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Results Achieved with Zoho CRM
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Success story: A UK financial services provider implemented Zoho CRM alongside Zoho Desk and Creator, delivering:
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  "Increased sales conversion rates by 25-40%.",
                  "Operational efficiency improved by 25%.",
                  "Up to 30% reduction in administrative workload."
                ].map((li, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ padding: "4px", borderRadius: "50%", background: "rgba(79, 70, 229, 0.1)", color: "var(--primary)" }}>
                      <ArrowRight size={16} />
                    </div>
                    <p style={{ color: "var(--text-muted)", margin: 0 }}>{li}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "3rem", textAlign: "center" }}>
            FAQ – Zoho CRM Implementation
          </h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              { q: "How long does a Zoho CRM implementation typically take?", a: "A standard implementation usually takes between 2-6 weeks, depending on customisation and data complexity." },
              { q: "Can Zoho CRM integrate with ERP and Email?", a: "Absolutely. Zoho CRM offers seamless integration with ERP platforms, QuickBooks, Outlook, Gmail, and more." },
              { q: "Do you offer Zoho CRM training for staff?", a: "Yes, comprehensive user training sessions are part of every project we deliver to ensure confidence." }
            ].map((faq, i) => (
              <details key={i} style={{ background: "var(--card-bg)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border)", cursor: "pointer" }}>
                <summary style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.q}
                  <ArrowRight size={20} className="text-primary" style={{ transform: "rotate(90deg)" }} />
                </summary>
                <div style={{ marginTop: "1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.5rem)", fontWeight: 950, marginBottom: "2rem", lineHeight: 1.1 }}>
            Start Your Zoho CRM Journey Today
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9, lineHeight: 1.7 }}>
            Ready to transform your customer relationship management? Our certified UK implementation team is here to guide you through every step.
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
            Download Success Roadmap <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
