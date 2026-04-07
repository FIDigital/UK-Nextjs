import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, Server, Users, Database, Headphones, CheckCircle2, ChevronDown, Monitor } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const services = [
  {
    title: "Setup & Configuration",
    description: "We configure Zoho Desk to align precisely with your customer support processes—setting up departments, ticket management systems, automated workflows, and customised dashboards.",
    icon: <Monitor size={24} />
  },
  {
    title: "Workflow Automation",
    description: "Our Zoho Desk consultants create automated workflows to simplify ticket handling, escalations, and SLA management, significantly enhancing your team’s productivity and customer satisfaction.",
    icon: <Users size={24} />
  },
  {
    title: "Zoho Desk & CRM Integration",
    description: "FI Digital expertly integrates Zoho Desk with Zoho CRM, enabling your support and sales teams to collaborate efficiently, ensuring a 360-degree view of your customers at all times.",
    icon: <Database size={24} />
  },
  {
    title: "Agent Training",
    description: "We offer comprehensive training sessions to ensure your support agents understand every feature of Zoho Desk, boosting confidence and accelerating adoption within your organisation.",
    icon: <Headphones size={24} />
  }
];

const faqs = [
  {
    q: "What size of support team is Zoho Desk suitable for?",
    a: "Zoho Desk is highly scalable, making it ideal for businesses of all sizes—from small support teams to large enterprise customer service departments."
  },
  {
    q: "Can Zoho Desk integrate with our website chat or phone system?",
    a: "Yes, Zoho Desk integrates seamlessly with various systems, including website chat (Zoho SalesIQ), telephony systems, and numerous third-party platforms, enhancing the efficiency of your support teams."
  },
  {
    q: "How long does it take to implement Zoho Desk?",
    a: "Typically, Zoho Desk implementation takes approximately 4-8 weeks, depending on customisation requirements, integration complexity, and your internal processes."
  }
];

export default function ZohoDeskImplementationPage() {
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
            src="/images1/desk1.jpeg"
            alt="Zoho Desk Implementation Background"
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
                Empower Support Teams
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Zoho Desk <span style={{ color: "var(--primary)" }}>Implementation Services</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Want to elevate your customer support and streamline operations? FI Digital specialises in Zoho Desk implementation for UK businesses, delivering exceptional helpdesk experiences.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Our certified consultants expertly configure, integrate, and customise your solution to align perfectly with your unique requirements, ensuring maximum impact from day one.
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

      {/* Getting Started Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/desk started.jpg" alt="Getting Started" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Getting Started with Zoho Desk
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Zoho Desk is a robust helpdesk solution designed to enhance multi-channel support—email, phone, live chat, social media, and self-service portals.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 700, marginBottom: "1.5rem" }}>
                Successful implementation requires careful planning—precisely what FI Digital offers to help you deliver professional service at scale:
              </p>
              <ul style={{ display: "grid", gap: "1rem" }}>
                {[
                  "Streamline customer interactions with organized ticketing.",
                  "Automate routine tasks to improve response times.",
                  "Empower customers with comprehensive self-service portals.",
                  "Integrate with Zoho CRM, SalesIQ, and telephony systems.",
                  "Customized dashboards for real-time support visibility."
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

      {/* Services Grid Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Our Implementation Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
              A structured, comprehensive approach to implementing Zoho Desk, ensuring clarity, efficiency, and optimal results for your teams.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {services.map((svc, i) => (
              <div key={i} style={{ padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInUp">
                <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(79, 70, 229, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: "1.5rem" }}>
                   {svc.icon}
                </div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>{svc.title}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Improving Customer Experience
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                A professionally implemented Zoho Desk platform directly contributes to an outstanding customer experience (CX) and long-term brand loyalty:
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  { title: "Faster Support Responses", desc: "Ticketing automation reduces customer wait times, increasing satisfaction." },
                  { title: "Personalised Interactions", desc: "Detailed customer histories from CRM integration allow meaningful experiences." },
                  { title: "Efficient Multi-Channel", desc: "Seamless handling of enquiries across email, phone, social, and chat." },
                  { title: "SLA Management", desc: "Keep track of deadlines and ensure critical issues are prioritized." }
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
                <Image src="/images1/desk4.jpg" alt="Customer Experience" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
             <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
               Why Partner with FI Digital?
             </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Certified Consultants", desc: "Our UK-based experts hold official Zoho certifications and extensive practical experience." },
              { title: "Tailored Support Solutions", desc: "Every implementation is custom-tailored to your precise internal workflows and SLA needs." },
              { title: "Ongoing Managed Services", desc: "Continuous support and training ensure your helpdesk investment delivers value long-term." }
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInUp">
                <h3 style={{ color: "var(--primary)", fontWeight: 800, fontSize: "1.25rem", marginBottom: "1rem" }}>{item.title}</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "3rem", textAlign: "center" }}>
            FAQ – Zoho Desk Implementation
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
             Elevate Your Customer Experience Today
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9, lineHeight: 1.7 }}>
             Connect with our Zoho-certified UK consultants to discover how a tailored Zoho Desk implementation can revolutionize your customer support.
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
            Request Your Free Consultation <ArrowRight size={20} />
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
