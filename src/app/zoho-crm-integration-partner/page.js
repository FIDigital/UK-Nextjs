import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, Server, Users, ImageIcon, Layout, BarChart3, ShieldCheck, HelpCircle } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

export default function ZohoCrmIntegrationPartnerPage() {
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
            src="/images1/Business2.jpg"
            alt="Zoho CRM Integration Background"
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
                Zoho CRM Integration <span style={{ color: "var(--primary)" }}>Partner in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Is your business looking to connect Zoho CRM seamlessly with your existing systems to achieve a 360-degree customer view and operational efficiency? FI Digital is a trusted Zoho CRM Integration Partner in the UK.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Our certified consultants ensure smooth, secure, and strategic integration, ensuring data flows effortlessly across your systems, improving productivity, and reducing manual tasks.
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

      {/* Why Essential Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/Business1.jpg" alt="Why Integration is Essential" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Why Zoho CRM Integration is Essential for UK Businesses
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                In today&apos;s fast-paced environment, data often resides in silos—CRM, ERP, accounting, and more. Without integration, this leads to inefficient processes and duplicated entry.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 700, marginBottom: "1.5rem" }}>
                Zoho CRM integration ensures all your critical systems work together seamlessly, providing a unified platform for managing customer relationships and operations.
              </p>
              <ul style={{ display: "grid", gap: "1rem" }}>
                {[
                  "Eliminate inefficient manual processes.",
                  "Remove redundant or duplicated data entry.",
                  "Gain real-time visibility across all departments.",
                  "Capture every sales opportunity with consolidated data.",
                  "Deliver a superior, unified customer experience."
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", fontSize: "1.05rem" }}>
                    <div style={{ marginTop: "6px" }}><ArrowRight size={18} className="text-primary" /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Services Grid */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Our Zoho CRM Integration Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
              Comprehensive, end-to-end integration services tailored specifically for the unique needs of UK businesses.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {[
              { icon: <Layout size={24} />, title: "Integration Strategy & Consultation", body: "We understand your technology stack and business objectives to develop a detailed strategy for maximum value." },
              { icon: <Server size={24} />, title: "Custom API Integrations", body: "For bespoke or legacy systems, our developers create secure, reliable data exchange between Zoho CRM and internal systems." },
              { icon: <Users size={24} />, title: "Zoho Suite Integration", body: "Unify Zoho CRM with Desk, Books, Analytics, Creator, and Marketing Automation for a fully integrated business platform." },
              { icon: <ShieldCheck size={24} />, title: "Data Migration & Integrity", body: "Secure, GDPR-compliant data migration ensuring accurate transfer and minimal downtime during the transition." },
              { icon: <ArrowRight size={24} />, title: "Automation & Workflow Configuration", body: "Configure automated workflows across systems to reduce manual tasks, eliminate duplication, and improve response times." },
              { icon: <HelpCircle size={24} />, title: "Ongoing Support & Maintenance", body: "UK-based support handling ongoing maintenance and continuous optimisation to ensure reliability." }
            ].map((card, i) => (
              <div key={i} style={{ padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInUp">
                <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(79, 70, 229, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: "1.5rem" }}>
                   {card.icon}
                </div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>{card.title}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party Apps Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/Business3.jpg" alt="Third Party Apps" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Third-Party Application Integration
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                We integrate Zoho CRM with a wide range of third-party applications commonly used by UK businesses:
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  { t: "Accounting & Finance", d: "QuickBooks, Xero, Sage, SAP, Oracle Financials" },
                  { t: "Marketing Platforms", d: "Mailchimp, HubSpot, Google Ads, Zoho Marketing Automation" },
                  { t: "Communication", d: "Twilio, RingCentral, Microsoft Teams, Zoom" },
                  { t: "E-commerce", d: "Shopify, WooCommerce, Magento, Amazon Marketplace" },
                  { t: "ERP & Projects", d: "SAP, Microsoft Dynamics, Zoho Projects, Trello" }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ marginTop: "6px" }}><ArrowRight size={18} className="text-primary" /></div>
                    <div>
                      <strong style={{ color: "var(--text)" }}>{item.t}:</strong>
                      <span style={{ color: "var(--text-muted)", marginLeft: "0.5rem" }}>{item.d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Content */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "start" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Benefits of Working with a Partner
              </h2>
              <ul style={{ display: "grid", gap: "1.2rem" }}>
                {[
                  { t: "Unified Customer Data", d: "Achieve a single source of truth for all interactions and decision-making." },
                  { t: "Operational Efficiency", d: "Automate repetitive tasks and streamline workflows across departments." },
                  { t: "Real-Time Insights", d: "Access real-time data across integrated systems for proactive decisions." },
                  { t: "Reduced Errors", d: "Eliminate manual data entry and duplication errors, saving valuable time." }
                ].map((benefit, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)" }}>
                    <div style={{ marginTop: "6px" }}><ArrowRight size={18} className="text-primary" /></div>
                    <div><strong className="text-text">{benefit.t}:</strong> {benefit.d}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Why Choose FI Digital?
              </h2>
              <ul style={{ display: "grid", gap: "1.2rem" }}>
                {[
                  { t: "Certified Experts", d: "Officially certified by Zoho for best-practice implementation." },
                  { t: "UK Market Experience", d: "Deeply familiar with local regulations like GDPR and market dynamics." },
                  { t: "Customised Solutions", d: "Tailored to your specific workflows and existing internal systems." },
                  { t: "Comprehensive Support", d: "Ongoing managed services and UK-based support for optimization." }
                ].map((why, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)" }}>
                    <div style={{ marginTop: "6px" }}><ArrowRight size={18} className="text-primary" /></div>
                    <div><strong className="text-text">{why.t}:</strong> {why.d}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/corporate2.jpg" alt="Success Stories" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Real-World Success Stories
              </h2>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  { t: "Financial Services", d: "Integrated CRM with legacy ERP/accounting, improving lead-to-cash cycle by 35%." },
                  { t: "E-commerce Growth", d: "Connected Shopify & Google Ads, resulting in automated order processing and high retention." },
                  { t: "Professional Services", d: "Implemented Teams & Outlook integration, boosting client satisfaction and response times." }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ marginTop: "6px" }}><ArrowRight size={18} className="text-primary" /></div>
                    <div>
                      <strong style={{ color: "var(--text)" }}>{item.t}:</strong>
                      <p style={{ color: "var(--text-muted)", marginTop: "0.2rem" }}>{item.d}</p>
                    </div>
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
            FAQ – Integration Partner Services
          </h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              { q: "How long does an integration project take?", a: "Depending on complexity, most projects are completed within 4 to 12 weeks, including planning, development, testing, and deployment." },
              { q: "Can you integrate with custom-built systems?", a: "Yes. Our developers specialise in custom API integrations, connecting Zoho CRM with bespoke or legacy systems used by your organisation." },
              { q: "Will we receive training on the integrated systems?", a: "Absolutely. FI Digital provides comprehensive user training and documentation to ensure your teams fully benefit from the integrated environment." },
              { q: "Do you offer post-integration support?", a: "Yes. We offer managed support packages to maintain, monitor, and optimise your integrations, ensuring continuous performance and security." }
            ].map((faq, i) => (
              <details key={i} style={{ background: "var(--card-bg)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border)", cursor: "pointer" }}>
                <summary style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.q}
                  <ArrowRight size={20} className="text-primary" style={{ transform: "rotate(90deg)" }} />
                </summary>
                <p style={{ marginTop: "1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.5rem)", fontWeight: 950, marginBottom: "2rem", lineHeight: 1.1 }}>
            Ready for Seamless Zoho CRM Integration?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9, lineHeight: 1.7 }}>
            Unlock the full potential of your business systems and enhance operational efficiency with our expert consultants. Talk to FI Digital today.
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
            Request Free Consultation <ArrowRight size={20} />
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
