import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, BarChart3, Database, PieChart, ShieldCheck, TrendingUp, ChevronDown, CheckCircle2, Layout, Settings, Activity } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const steps = [
  {
    title: "1. Data Strategy & Requirement Assessment",
    content: "Our certified consultants work with your leadership and operations teams to understand your business goals, data sources & existing systems, Key Performance Indicators (KPIs), reporting & dashboard requirements, and compliance & data governance needs. We then prepare a tailored data strategy and implementation roadmap.",
  },
  {
    title: "2. Data Integration & Preparation",
    content: "We connect Zoho Analytics to multiple data sources such as Zoho Apps (CRM, Books, Desk, Creator, People, Campaigns), ERP Platforms (SAP, Microsoft Dynamics, Oracle), Accounting Software (Xero, QuickBooks, Sage), E-commerce Platforms (Shopify, WooCommerce, Magento), Marketing Tools (Google Ads, Facebook Ads, HubSpot), Telephony & Communication Systems, Internal Databases (SQL, PostgreSQL, MySQL), and Cloud Storage (Google Drive, Dropbox, OneDrive). Our data preparation process includes cleansing, deduplication, and data integrity validation.",
  },
  {
    title: "3. Advanced Reporting & BI",
    content: "We develop advanced reports including Pivot Tables, Heatmaps, Cross-functional Reports, Cohort Analysis, Funnel Analysis, Anomaly Detection, and Forecasting & Trend Analysis.",
  },
  {
    title: "4. Custom Dashboard Development",
    content: "We design visually appealing, real-time dashboards tailored to your business needs, including Sales Performance Dashboards, Financial & P&L Dashboards, Marketing Campaign Dashboards, Customer Support Dashboards, and Operations & Inventory Dashboards.",
  },
  {
    title: "5. Data Governance & Security",
    content: "Our certified consultants ensure your data is secure & encrypted, GDPR-compliant, and accessible only to authorised users based on roles.",
  },
  {
    title: "6. User Training & Adoption Support",
    content: "We provide customised training sessions to empower your teams to use Zoho Analytics effectively.",
  },
  {
    title: "7. Ongoing Support & Dashboard Optimisation",
    content: "We offer long-term support, system audits, dashboard enhancements, and new report creation as your business evolves.",
  }
];

const industriesServe = [
  "Financial Services & Mortgage Broking",
  "Retail & E-commerce",
  "Manufacturing & Distribution",
  "Professional Services & Consulting",
  "Healthcare & Wellness",
  "Education & Training",
  "IT & SaaS Providers"
];

const successStories = [
  {
    title: "E-commerce Retailer – London",
    desc: "Integrated Zoho Analytics with Shopify, Zoho CRM, and Google Ads, creating unified sales and marketing dashboards.",
    impact: "Increased visibility into campaign ROI and sales pipeline performance."
  },
  {
    title: "Professional Services Firm – Manchester",
    desc: "Implemented Zoho Analytics across sales, finance, and operations teams.",
    impact: "Real-time reporting, reduced manual data preparation, and improved decision-making."
  },
  {
    title: "Healthcare Group – Midlands",
    desc: "Developed patient service quality dashboards by integrating Zoho Analytics with Zoho Desk and Zoho CRM.",
    impact: "Enhanced patient experience monitoring and service team performance."
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

export default function ZohoAnalyticsPartnersUkPage() {
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
          .hero-cta-group {
            justify-content: center !important;
          }
        }
        .benefit-card:hover {
          transform: translateY(-5px);
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
            src="/images1/Analytics2.jpg"
            alt="Zoho Analytics Background"
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
                Data-Driven Insights
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
                Struggling to make sense of scattered data? FI Digital is your trusted Zoho Analytics Partner, helping you transform raw data into clear, actionable insights for smarter decisions.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                We assist UK organisations in connecting and visualising their data across every department, providing a 360-degree view of your business performance.
              </p>
              <div className="hero-cta-group" style={{ display: "flex" }}>
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
        </div>
      </section>

      {/* Why Partner Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/Business1.jpg" alt="Why Partner with Analytics Experts" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Why Partner with Zoho Analytics Experts?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Zoho Analytics is a powerful, self-service BI platform that enables businesses to consolidate data from multiple sources and automate complex analysis.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 700, marginBottom: "1.5rem" }}>
                As your certified UK partner, FI Digital ensures you implement to its full potential, unlocking strategic visibility across your operations:
              </p>
              <ul style={{ display: "grid", gap: "1rem" }}>
                {[
                  "Consolidate data from Zoho, ERP, and internal databases.",
                  "Create insightful, real-time dashboards and reports.",
                  "Forecast trends and identify business anomalies with AI.",
                  "Empower teams with role-based, secure data visibility.",
                  "Eliminate manual data preparation and reporting errors."
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

      {/* What We Do Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
               Our Zoho Analytics Partner Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
              We help UK businesses at every step of their data analytics journey with a structured and comprehensive approach to BI transformation.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {steps.map((step, i) => (
              <div key={i} style={{ padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInUp">
                <div style={{ color: "var(--primary)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "1rem" }}>
                  {step.title}
                </div>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "1rem" }}>
                  {step.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Industries & Choose Us Section */}
       <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "start" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "2.2rem", fontWeight: 850, marginBottom: "2rem", color: "var(--text)" }}>Industries We Serve</h2>
               <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                We have delivered Zoho Analytics solutions across diverse sectors, preparing tailored data strategies for your industry context:
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {industriesServe.map((ind, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)", fontWeight: 600 }}>
                    <div style={{ width: "8px", height: "8px", background: "var(--primary)", borderRadius: "50%" }} />
                    {ind}
                  </div>
                ))}
              </div>
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "2.2rem", fontWeight: 850, marginBottom: "2rem", color: "var(--text)" }}>Why Choose FI Digital?</h2>
               <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                Here’s why organisations across the UK choose us as their leading Zoho Analytics Partner:
              </p>
              <ul style={{ display: "grid", gap: "1.25rem" }}>
                {[
                  "Officially certified Zoho Analytics Partner.",
                  "UK-based team with deep local market expertise.",
                  "GDPR-compliant data handling and governance.",
                  "Expertise in complex multi-system integrations.",
                  "Customised dashboard development for every role."
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem" }}>
                    <CheckCircle2 size={24} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "1.1rem", color: "var(--text)", fontWeight: 600 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Real Success Stories</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
              Our implementations delivered measurable strategic value for UK companies across various growth stages.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
            {successStories.map((story, i) => (
              <div key={`story-${i}`} style={{ padding: "3rem", borderRadius: "32px", border: "1px solid var(--border)", background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInUp">
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--primary)", marginBottom: "1.25rem" }}>{story.title}</h3>
                <p style={{ color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.7, fontSize: "1.05rem" }}>{story.desc}</p>
                <div style={{ background: "rgba(79, 70, 229, 0.05)", padding: "1.25rem", borderRadius: "16px", borderLeft: "4px solid var(--primary)" }}>
                  <p style={{ color: "var(--text)", fontWeight: 700, fontSize: "1rem" }}>{story.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "2.2rem", fontWeight: 850, marginBottom: "2rem", color: "var(--text)" }}>Key Benefits of Zoho Analytics</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                By partnering with us, you can unlock the following benefits that drive business intelligence forward:
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  { title: "Unified Business Intelligence", desc: "One platform for all your departmental data needs." },
                  { title: "Real-Time Visual Insights", desc: "No more waiting for manual report preparations." },
                  { title: "Advanced BI Capabilities", desc: "AI-powered forecasting and anomaly detection as standard." },
                  { title: "Actionable Dashboards", desc: "Intuitive visuals that drive better data-driven decisions." }
                ].map((benefit, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }} className="benefit-card">
                    <div style={{ color: "var(--primary)", marginTop: "4px" }}><CheckCircle2 size={24} /></div>
                    <div>
                      <div style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem" }}>{benefit.title}</div>
                      <div style={{ color: "var(--text-muted)" }}>{benefit.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <Image src="/images1/analytics 1.webp" alt="Benefits of Zoho Analytics" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "4rem", textAlign: "center" }}>
            FAQ – Zoho Analytics Partners UK
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

      {/* Final CTA Section */}
      <section style={{ padding: "120px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <h2 style={{ 
            fontSize: "clamp(2.1rem, 4.5vw, 3.5rem)", 
            fontWeight: 950, 
            marginBottom: "2.5rem", 
            lineHeight: 1.1,
            color: "white"
          }}>
             Ready to Unlock the Power of Your Data?
          </h2>
          <p style={{ 
            fontSize: "1.25rem", 
            color: "rgba(255,255,255,0.9)", 
            marginBottom: "4rem", 
            lineHeight: 1.7, 
            maxWidth: "850px", 
            margin: "0 auto 4rem" 
          }}>
             Transform your business with actionable insights powered by Zoho Analytics. Partner with FI Digital—your certified, trusted Zoho Analytics Partner in the UK.
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
