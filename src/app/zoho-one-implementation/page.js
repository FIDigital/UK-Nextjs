import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, Server, Users, Database, Headphones, CheckCircle2, ChevronDown, Layout } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const approach = [
  {
    title: "Assessment & Strategic Planning",
    description: "Our UK-based Zoho consultants start by thoroughly analysing your business processes, identifying opportunities to streamline operations, and mapping these to appropriate Zoho One applications. This comprehensive planning stage ensures a smooth transition and optimal use of the Zoho suite.",
    icon: <Server size={24} />
  },
  {
    title: "Phased Rollout & Implementation",
    description: "Recognising the complexity and scope of Zoho One, we manage the implementation through a carefully structured, phased approach. Typically, we start by deploying essential applications such as Zoho CRM and Zoho Desk, followed by Zoho Books for finance, Zoho People for HR, and additional modules as needed. This controlled rollout minimises disruption and maximises user adoption across your teams.",
    icon: <Layout size={24} />
  },
  {
    title: "Data Migration & System Integration",
    description: "We expertly handle the migration of your existing data from legacy systems into Zoho One, ensuring accuracy, security, and compliance. Our consultants seamlessly integrate Zoho One applications with any existing third-party systems (e.g., SAP, Xero, QuickBooks, Office365, etc.) to ensure optimal data flow and cross-departmental visibility.",
    icon: <Database size={24} />
  },
  {
    title: "Comprehensive User Training",
    description: "Successful Zoho One implementation relies heavily on user adoption and understanding. FI Digital delivers customised training sessions for each application, tailored specifically for your various departments. Our training programmes empower your teams to utilise Zoho One confidently and productively.",
    icon: <Headphones size={24} />
  },
  {
    title: "Go-Live & Change Management Support",
    description: "We provide robust go-live support, carefully monitoring the transition, addressing any immediate issues swiftly, and offering ongoing advice on change management. Our proactive support ensures minimal disruption, maximising the effectiveness of your Zoho One deployment.",
    icon: <Users size={24} />
  }
];

const faqs = [
  {
    q: "How long does a full Zoho One implementation take?",
    a: "Zoho One implementation typically ranges from 1-3 months, depending on the number of applications deployed, complexity of customisation, data migration requirements, and integration needs."
  },
  {
    q: "Can we start with just a few Zoho One apps and add more later?",
    a: "Yes, Zoho One is highly flexible. FI Digital recommends starting with key applications and strategically deploying additional apps as your business needs evolve. This phased approach ensures smooth adoption and manageable change."
  },
  {
    q: "What size businesses is Zoho One suitable for?",
    a: "Zoho One is exceptionally scalable and suitable for businesses of all sizes, from SMEs to larger enterprises. FI Digital has successfully deployed Zoho One implementations for various UK companies across multiple industries, proving its versatility."
  }
];

export default function ZohoOneImplementationPage() {
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
        @media (max-width: 899px) {
          .hero-background-wrapper {
            opacity: 0.4;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-text-content {
            margin: 0 auto;
          }
          .hero-cta-button {
             margin: 0 auto;
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
            src="/images1/Handshake.jpg"
            alt="Zoho One Implementation Background"
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
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeIn hero-text-content">
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
                Zoho One Implementation <span style={{ color: "var(--primary)" }}>Partner in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Considering adopting Zoho One—the "operating system for business"? FI Digital is your trusted partner in the UK, expertly guiding you through a seamless digital transformation. 
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                We help UK businesses fully harness Zoho One&apos;s potential, tailored specifically to deliver maximum productivity, collaboration, and growth across your entire organisation.
              </p>
              <Link href="/contact" className="hero-cta-button" style={{
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

      {/* What is Zoho One Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/zoho1.png" alt="What is Zoho One?" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                What is Zoho One?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Zoho One is a revolutionary suite offering more than 50 integrated applications within one unified platform, designed specifically to streamline operations across every department.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 700, marginBottom: "1.5rem" }}>
                It eliminates the need for multiple disparate solutions, significantly lowering overall costs and complexity for UK-based businesses.
              </p>
              <ul style={{ display: "grid", gap: "1rem" }}>
                {[
                  "One unified platform for 50+ integrated applications.",
                  "Includes CRM, Books, Desk, Creator, Analytics, and more.",
                  "Reduces overall software costs and operational complexity.",
                  "Cohesive digital environment optimized for business growth.",
                  "Used by over 60% of Zoho customers for multiple apps."
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", fontSize: "1.05rem" }}>
                    <div style={{ marginTop: "6px" }}><CheckCircle2 size={18} className="text-primary" /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach Grid */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Our Implementation Approach
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
               A structured yet adaptable implementation approach, carefully designed to suit the complexity of Zoho One for a smooth and efficient transition.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {approach.map((step, i) => (
              <div key={i} style={{ padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInUp">
                <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(79, 70, 229, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: "1.5rem" }}>
                   {step.icon}
                </div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>{step.title}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Advantages of Zoho One
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Zoho One implementation, when expertly handled, delivers transformative business advantages across your entire organisation:
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  { title: "Unified Business Platform", desc: "All key business functions integrated into one seamless ecosystem for maximum efficiency." },
                  { title: "Consolidated Cost Savings", desc: "Eliminate dozens of individual subscriptions with one affordable and comprehensive platform." },
                  { title: "Cross-Departmental Visibility", desc: "Sales, finance, HR, and marketing work collaboratively with shared, real-time data access." },
                  { title: "Scalable Growth Path", desc: "Zoho One effortlessly scales, allowing you to add features and users as your needs evolve." }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ marginTop: "6px" }}><CheckCircle2 size={18} className="text-primary" /></div>
                    <div>
                      <strong style={{ color: "var(--text)" }}>{item.title}:</strong>
                      <span style={{ color: "var(--text-muted)", marginLeft: "0.5rem" }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <Image src="/images1/zoho-one.png" alt="Advantages of Zoho One" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Transition Grid */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "3rem" }}>
            <div style={{ background: "var(--card-bg)", padding: "3rem", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>FI Digital Expertise</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
                 FI Digital stands out as a leading Zoho Premium Partner in the UK, deeply experienced in successful deployments across diverse industries.
              </p>
              <ul style={{ display: "grid", gap: "1.25rem" }}>
                {[
                  { t: "Proven Experience", d: "Successful Zoho One implementations for companies of various sizes and sectors across the UK." },
                  { t: "Certified Consultants", d: "Our expert team holds official Zoho certifications, ensuring the highest standards of configuration." },
                  { t: "Direct Collaboration", d: "Strong connections with Zoho's development teams for rapid responses and early access." }
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)" }}>
                    <div style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }}><CheckCircle2 size={24} /></div>
                    <div><strong className="text-text">{item.t}:</strong> {item.d}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "var(--card-bg)", padding: "3rem", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
              <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Transitioning to Zoho One</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
                Many UK businesses adopt Zoho One to replace costly or fragmented systems like Salesforce, Dynamics, HubSpot, or legacy ERPs.
              </p>
              <ul style={{ display: "grid", gap: "1.25rem" }}>
                {[
                  "Detailed migration planning to ensure minimum business disruption.",
                  "Comprehensive data cleansing, validation, and secure transfer processes.",
                  "User training sessions tailored specifically for groups shifting from legacy software.",
                  "Rapid adoption strategies to realize measurable business benefits quickly."
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)" }}>
                    <div style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }}><CheckCircle2 size={24} /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "3rem", textAlign: "center" }}>
            FAQ – Zoho One Implementation
          </h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ background: "var(--card-bg)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border)", cursor: "pointer" }}>
                <summary style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.q}
                  <ChevronDown size={22} style={{ color: "var(--primary)" }} />
                </summary>
                <p style={{ marginTop: "1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.5rem)", fontWeight: 950, marginBottom: "2rem", lineHeight: 1.1 }}>
             Ready to Transform Your Business with Zoho One?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9, lineHeight: 1.7 }}>
             Join countless successful UK businesses that have streamlined their operations and boosted productivity with Zoho One implementation from FI Digital.
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
            Book Your Free Consultation Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Zoho SalesIQ Integration */}
      <Script id="zoho-salesiq" strategy="afterInteractive">
        {`
          window.$zoho=window.$zoho || {};
          $zoho.salesiq=$zoho.salesiq||{ready:function(){}};
          var d=document;
          var s=d.createElement("script");
          s.id="zsiqscript";
          s.src="https://salesiq.zohopublic.com/widget?wc=siqd5554e2b4cb32464c280697bfa50a51cc07229c8920b4b9dc4247500c1733a43";
          s.defer=true;
          d.getElementsByTagName("head")[0].appendChild(s);
        `}
      </Script>
    </div>
  );
}
