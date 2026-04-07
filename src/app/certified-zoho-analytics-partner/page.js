import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, BarChart3, Database, PieChart, ShieldCheck, TrendingUp, ChevronDown, CheckCircle2, Layout, Monitor, Headphones } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const services = [
  {
    title: "1. Data Strategy & Requirement Assessment",
    content: "Our certified consultants work with your leadership and operations teams to understand your business goals, data sources, Key Performance Indicators (KPIs), reporting requirements, and compliance needs. We then prepare a tailored data strategy and implementation roadmap.",
  },
  {
    title: "2. Data Integration & Preparation",
    content: "We connect Zoho Analytics to multiple sources including Zoho Apps (CRM, Books, Desk, Creator, People, Campaigns), ERP Platforms (SAP, Microsoft Dynamics, Oracle), Accounting (Xero, QuickBooks, Sage), E-commerce (Shopify, WooCommerce, Magento), Marketing Tools, and internal databases. Our process includes cleansing, deduplication, and data integrity validation.",
  },
  {
    title: "3. Custom Dashboard Development",
    content: "We design visually appealing, real-time dashboards tailored to your needs, including Sales Performance, Financial & P&L, Marketing Campaign, Customer Support, and Operations & Inventory Dashboards.",
  },
  {
    title: "4. Advanced Reporting & BI",
    content: "We develop advanced reports including Pivot Tables, Heatmaps, Cross-functional Reports, Cohort Analysis, Funnel Analysis, Anomaly Detection, and Forecasting & Trend Analysis.",
  },
  {
    title: "5. Data Governance & Security",
    content: "Our certified consultants ensure your data is secure, encrypted, and GDPR-compliant, with role-based access based on organisational roles.",
  },
  {
    title: "6. User Training & Adoption Support",
    content: "We provide customised training sessions to empower your teams to use Zoho Analytics effectively.",
  }
];

const faqs = [
  {
    q: "What is the role of a Zoho Analytics Partner?",
    a: "A Zoho Analytics Partner helps businesses implement, integrate, and optimise Zoho Analytics for their unique reporting and BI requirements."
  },
  {
    q: "Can Zoho Analytics connect to non-Zoho systems?",
    a: "Yes. Zoho Analytics supports connections to a wide range of external systems including ERP, accounting, e-commerce, marketing, and internal databases."
  },
  {
    q: "Do you provide training on Zoho Analytics?",
    a: "Yes. We offer customised user training sessions to ensure your teams can use dashboards and reports effectively."
  },
  {
    q: "Is Zoho Analytics GDPR-compliant?",
    a: "Yes. We configure Zoho Analytics with GDPR-compliant data governance policies."
  },
  {
    q: "Can you provide ongoing support?",
    a: "Yes. Our managed services include ongoing support, system audits, dashboard enhancements, and new report creation."
  }
];

export default function CertifiedZohoAnalyticsPartnerPage() {
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
            src="/images1/analytics1.jpg"
            alt="Zoho Analytics Partner Background"
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
                Authorized Partner UK
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Certified Zoho Analytics <span style={{ color: "var(--primary)" }}>Partners in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Is your business struggling to make sense of scattered data? FI Digital is a trusted Zoho Analytics Partner, helping you transform raw data into actionable insights for smarter decisions.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                We assists UK organisations in connecting, visualising, and analysing data across all departments—enabling faster and data-driven business growth.
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

      {/* Why Partner Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/Partner2.jpg" alt="Why Partner with Zoho" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Why Partner with Zoho Analytics Experts?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Zoho Analytics is a powerful, self-service BI platform that allows you to consolidate data from multiple sources and create real-time visibility across your business.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 700, marginBottom: "1.5rem" }}>
                Being a certified partner means we ensure your implementation delivers maximum ROI through industry-leading data strategy:
              </p>
              <ul style={{ display: "grid", gap: "1rem" }}>
                {[
                  "Consolidate data from Zoho, ERP, and accounting platforms.",
                  "Create insightful, multi-functional dashboards and reports.",
                  "Automate data analysis and complex trend forecasting.",
                  "Empower teams with role-based, secure data visibility.",
                  "Cleanse and validate data for cross-departmental accuracy."
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", fontSize: "1.1rem" }}>
                    <div style={{ marginTop: "6px" }}><CheckCircle2 size={18} className="text-primary" /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Our Expert Analytics Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
              Helping UK businesses at every stage of their data journey with certified expertise and end-to-end reporting solutions.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {services.map((svc, i) => (
              <div key={i} style={{ padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInUp">
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.25rem" }}>{svc.title}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7 }}>{svc.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FI Digital & Industries */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "start" }}>
            <div style={{ padding: "3rem", borderRadius: "32px", border: "1px solid var(--border)", background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <h3 style={{ fontSize: "1.75rem", fontWeight: 850, color: "var(--text)", marginBottom: "2rem" }}>Why Choose FI Digital?</h3>
                <ul style={{ display: "grid", gap: "1.5rem" }}>
                    {[
                      "Officially certified Zoho Analytics Partner.",
                      "UK-based team with local market expertise.",
                      "Strong data strategy & BI consulting capabilities.",
                      "GDPR-compliant and secure data handling.",
                      "Custom dashboard development for every role.",
                      "End-to-end integration with third-party apps."
                    ].map((item, i) => (
                      <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text)", fontWeight: 600 }}>
                        <div style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }}><CheckCircle2 size={24} /></div>
                        <span>{item}</span>
                      </li>
                    ))}
                </ul>
                <p style={{ marginTop: "2.5rem", color: "var(--text-muted)", fontStyle: "italic", lineHeight: 1.6 }}>
                    We don’t just implement software—we help you build a data-driven business culture that thrives on actionable insights.
                </p>
            </div>

            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "2.2rem", fontWeight: 850, marginBottom: "2rem", color: "var(--text)" }}>Industries We Serve</h2>
               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "3rem" }}>
                {[
                  "Financial Services",
                  "E-commerce",
                  "Manufacturing",
                  "Professional Services",
                  "Healthcare",
                  "Education",
                  "IT & SaaS Providers"
                ].map((ind, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)", fontWeight: 600 }}>
                    <div style={{ width: "8px", height: "8px", background: "var(--primary)", borderRadius: "50%" }} />
                    {ind}
                  </div>
                ))}
              </div>

               <h3 style={{ fontSize: "1.5rem", fontWeight: 850, marginBottom: "1.5rem", color: "var(--text)" }}>Success Stories</h3>
               <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {[
                      { t: "E-commerce – London", c: "Integrated Analytics with Shopify & Zoho CRM. Result: 30% increase in campaign ROI." },
                      { t: "Professional Services – Manchester", c: "Real-time reporting across finance and operations. Result: Data-driven strategic growth." },
                      { t: "Healthcare – Midlands", c: "Patient quality dashboards via Desk & CRM. Outcome: Enhanced patient experience monitoring." }
                    ].map((story, i) => (
                      <div key={i} style={{ borderLeft: "4px solid var(--primary)", paddingLeft: "1.5rem" }}>
                        <h4 style={{ fontWeight: 800, color: "var(--text)", marginBottom: "0.25rem" }}>{story.t}</h4>
                        <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{story.c}</p>
                      </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "4rem", textAlign: "center" }}>
            FAQ – Certified Analytics Partners
          </h2>
          <div style={{ display: "grid", gap: "1.25rem" }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ background: "var(--card-bg)", padding: "1.75rem", borderRadius: "20px", border: "1px solid var(--border)", cursor: "pointer" }}>
                <summary style={{ fontWeight: 750, fontSize: "1.15rem", color: "var(--text)", display: "flex", justifyContent: "space-between", alignItems: "center", listStyle: "none" }}>
                  {faq.q}
                  <ChevronDown size={22} style={{ color: "var(--primary)" }} />
                </summary>
                <div style={{ padding: "1.5rem 0 0", color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed CTA Section */}
      <section style={{ padding: "120px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.5rem)", fontWeight: 950, marginBottom: "2.5rem", lineHeight: 1.2, color: "white" }}>
             Ready to Work with a Certified Zoho Partner?
          </h2>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", marginBottom: "4rem", lineHeight: 1.7, maxWidth: "850px", margin: "0 auto 4rem" }}>
             Make the most of your investment with FI Digital—your trusted Zoho Authorized Partner in the UK. Start transforming your business data into strategic growth today.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1.2rem 3.5rem",
            background: "white",
            color: "var(--primary)",
            fontWeight: 800,
            fontSize: "1.2rem",
            borderRadius: "16px",
            textDecoration: "none",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease",
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
