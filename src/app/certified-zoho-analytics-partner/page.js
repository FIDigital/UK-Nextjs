import Link from "next/link";
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
  },
  {
    q: "Ready to Unlock the Power of Your Data?",
    a: "Transform your business with actionable insights powered by Zoho Analytics. Partner with FI Digital—your certified, trusted Zoho Analytics Partner in the UK—and start making data-driven decisions today."
  }
];

export default function Page() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero Section */}
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
                Zoho Authorized Partner UK
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Certified Zoho Analytics
                <br />
                <span style={{ color: "var(--primary)" }}>Partners in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                Is your business struggling to make sense of the data scattered across multiple systems? FI Digital is a trusted and certified Zoho Analytics Partner in the UK, helping businesses transform raw data into clear, actionable insights.
              </p>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                As one of the leading Zoho Analytics partners, we assist organisations across the UK in connecting, visualising, and analysing their data—enabling smarter, faster, and data-driven decision-making.
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
                Get Started Today! <ArrowRight size={18} />
              </Link>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic01.png" alt="Zoho Analytics Partner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic02.png" alt="Why Partner with Zoho" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                Why Partner with Zoho Analytics Experts?
              </h2>
              <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                <p style={{ marginBottom: "1.5rem" }}>
                  Zoho Analytics is a powerful, self-service Business Intelligence (BI) and analytics platform that enables businesses to:
                </p>
                <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: "1rem" }}>
                  Being an authorised partner means:
                </p>
                <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    "Consolidate data from multiple sources",
                    "Create insightful dashboards & reports",
                    "Automate data analysis",
                    "Forecast trends & identify anomalies",
                    "Empower teams with real-time visibility"
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)" }}>
                      <CheckCircle2 size={20} style={{ color: "var(--primary)" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: "2rem", fontWeight: 600, color: "var(--text)" }}>
                  However, implementing Zoho Analytics to its full potential requires technical expertise, data strategy, and industry experience. That’s where FI Digital, your trusted Zoho Analytics Partner in the UK, comes in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              marginBottom: "1rem",
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}>
              What We Do as Your Zoho Analytics Partner
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
              We help UK businesses at every step of their data analytics journey with certified expertise and comprehensive solutions:
            </p>
          </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem"
          }}>
            {services.map((svc, i) => (
              <div key={i} style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "24px",
                padding: "2.5rem",
                transition: "all 0.3s ease",
                boxShadow: "var(--card-shadow)",
              }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.25rem" }}>
                  {svc.title}
                </h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                  {svc.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FI Digital & Industries */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "4rem" }}>
            
            <div style={{ background: "var(--card-bg)", padding: "3rem", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Why FI Digital is the Leading Partner</h3>
                <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {[
                      "Officially certified Zoho Analytics Partner",
                      "UK-based team with local market expertise",
                      "Strong data strategy & BI consulting capabilities",
                      "Proven track record of successful analytics projects",
                      "GDPR-compliant data handling",
                      "Custom dashboard development expertise",
                      "End-to-end data integration & support services",
                      "Long-term strategic relationship approach"
                    ].map((item, i) => (
                      <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text)", fontWeight: 600 }}>
                        <div style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }}><CheckCircle2 size={24} /></div>
                        <span>{item}</span>
                      </li>
                    ))}
                </ul>
                <p style={{ marginTop: "2rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                    We don’t just implement Zoho Analytics—we help you build a data-driven business culture.
                </p>
            </div>

            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--text)" }}>Industries We Serve</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>We have delivered Zoho Analytics solutions across sectors such as:</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  "Financial Services & Mortgage Broking",
                  "Retail & E-commerce",
                  "Manufacturing & Distribution",
                  "Professional Services & Consulting",
                  "Healthcare & Wellness",
                  "Education & Training",
                  "IT & SaaS Providers"
                ].map((ind, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontWeight: 500 }}>
                    <div style={{ width: "6px", height: "6px", background: "var(--primary)", borderRadius: "50%" }} />
                    {ind}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "3rem" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--text)" }}>Real Success Stories</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {[
                      { t: "E-commerce Retailer – London", c: "Integrated Zoho Analytics with Shopify, Zoho CRM, and Google Ads. Impact: Increased visibility into campaign ROI." },
                      { t: "Professional Services – Manchester", c: "Implemented across sales, finance, and operations. Result: Real-time reporting and improved decision-making." },
                      { t: "Healthcare Group – Midlands", c: "Patient service quality dashboards via Zoho Desk & CRM. Outcome: Enhanced patient experience monitoring." }
                    ].map((story, i) => (
                      <div key={i} style={{ borderLeft: "4px solid var(--primary)", paddingLeft: "1.5rem" }}>
                        <h4 style={{ fontWeight: 700, color: "var(--text)" }}>{story.t}</h4>
                        <p style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>{story.c}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text)" }}>Key Benefits of Zoho Analytics</h2>
            <p style={{ color: "var(--text-muted)", marginTop: "1rem" }}>By partnering with us, you can unlock the following benefits:</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {[
              { t: "Unified BI", d: "One platform for all your data needs" },
              { t: "Real-Time Insights", d: "No more waiting for manual reports" },
              { t: "Role-Based Access", d: "Secure, GDPR-compliant data visibility" },
              { t: "Actionable Dashboards", d: "Visuals that drive better business decisions" },
              { t: "Reduced Reporting Time", d: "Automation saves hours of manual effort" }
            ].map((benefit, i) => (
              <div key={i} style={{ background: "var(--card-bg)", padding: "2rem", borderRadius: "20px", border: "1px solid var(--border)", textAlign: "center" }}>
                <CheckCircle2 size={32} style={{ color: "var(--primary)", margin: "0 auto 1.5rem" }} />
                <h4 style={{ fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>{benefit.t}</h4>
                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>{benefit.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}>
              FAQ – Zoho Analytics Partners UK
            </h2>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer"
              }}>
                <summary style={{
                  padding: "1.75rem",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "var(--text)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  listStyle: "none"
                }}>
                  {faq.q}
                  <ChevronDown size={22} style={{ color: "var(--primary)" }} />
                </summary>
                <div style={{
                  padding: "0 1.75rem 1.75rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  fontSize: "1.1rem"
                }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)", display: "flex", justifyContent: "center" }}>
        <div style={{ 
          maxWidth: "1100px", 
          width: "100%", 
          background: "rgba(30, 58, 138, 1)",
          borderRadius: "40px",
          padding: "5rem 3rem",
          textAlign: "center",
          color: "white",
          boxShadow: "0 25px 50px -12px rgba(30, 58, 138, 0.5)",
          position: "relative",
          overflow: "hidden"
        }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            marginBottom: "1.5rem",
            color: "white",
          }}>
            Ready to Work with an Official Zoho Authorized Partner in the UK?
          </h2>
          <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.9)", marginBottom: "3rem", lineHeight: 1.7, maxWidth: "850px", margin: "0 auto 3.5rem" }}>
            Make the most of your Zoho investment with FI Digital—your certified and trusted Zoho Authorized Partner in the UK. Whether you need implementation, optimisation, or long-term support, our team is ready to help you succeed.
          </p>
          <Link href="/zoho-crm-implementation" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1.2rem 3.5rem",
            background: "var(--primary)",
            color: "white",
            fontWeight: 800,
            fontSize: "1.1rem",
            borderRadius: "16px",
            textDecoration: "none",
            boxShadow: "0 10px 30px rgba(79, 70, 229, 0.4)",
          }}>
            Get Started Today! <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
