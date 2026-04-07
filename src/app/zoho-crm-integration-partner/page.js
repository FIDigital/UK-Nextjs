import Link from "next/link";
import { ArrowRight, Server, Users, Layout, Database, Settings, Headphones, CheckCircle2, ChevronDown } from "lucide-react";
import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const services = [
  {
    title: "Integration Strategy & Consultation",
    description: "Our certified consultants start by understanding your existing technology stack, business objectives, and integration requirements. We develop a detailed integration strategy, identifying key systems, data flows, and automation opportunities.",
    icon: <Server size={24} />
  },
  {
    title: "Custom API Integrations",
    description: "For bespoke or legacy systems, we develop custom API integrations tailored to your unique business needs. Our developers ensure secure, reliable data exchange between Zoho CRM and your existing internal systems.",
    icon: <Users size={24} />
  },
  {
    title: "Zoho Suite Integration",
    description: "We integrate Zoho CRM with other Zoho applications such as Zoho Desk, Zoho Books, Zoho Analytics, Zoho Creator, Zoho People, and Zoho Marketing Automation. This creates a unified, fully integrated business platform.",
    icon: <Layout size={24} />
  },
  {
    title: "Data Migration & Integrity Assurance",
    description: "Our integration services include secure data migration from your existing systems into Zoho CRM. We ensure accurate, complete, and GDPR-compliant data transfer, preserving data integrity and minimising downtime.",
    icon: <Database size={24} />
  },
  {
    title: "Automation & Workflow Configuration",
    description: "We configure automated workflows across integrated systems to reduce manual tasks, eliminate duplication, and improve response times. From lead assignment and deal updates to automated billing and reporting.",
    icon: <Settings size={24} />
  },
  {
    title: "Ongoing Support & Maintenance",
    description: "FI Digital provides comprehensive post-integration support, ensuring your integrations remain secure, reliable, and up to date. Our UK-based support team handles ongoing maintenance, troubleshooting, and continuous optimisation.",
    icon: <Headphones size={24} />
  }
];

const faqs = [
  {
    q: "How long does a Zoho CRM integration project take?",
    a: "The duration depends on project complexity and the number of systems involved. Most integration projects are completed within 4 to 12 weeks, including planning, development, testing, and deployment."
  },
  {
    q: "Can you integrate Zoho CRM with custom-built systems?",
    a: "Yes. Our developers specialise in custom API integrations, allowing us to connect Zoho CRM with bespoke or legacy systems used by your organisation."
  },
  {
    q: "Will we receive training on how to use the integrated systems?",
    a: "Absolutely. FI Digital provides comprehensive user training and documentation to ensure your teams fully understand and benefit from the integrated environment."
  },
  {
    q: "Do you provide ongoing support after the integration is completed?",
    a: "Yes. We offer managed support packages to maintain, monitor, and optimise your integrations, ensuring continuous performance and security."
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
                Zoho CRM Integration Partner
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Zoho CRM Integration
                <br />
                <span style={{ color: "var(--primary)" }}>Partner in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1rem, 1.1vw, 1.1rem)",
                color: "var(--text-muted)",
                marginBottom: "1rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                Is your business looking to connect Zoho CRM seamlessly with your existing systems to achieve a 360-degree customer view and operational efficiency? FI Digital is a trusted Zoho CRM Integration Partner in the UK, helping businesses integrate Zoho CRM with third-party systems, ERP platforms, accounting software, marketing tools, and internal databases.
              </p>
              <p style={{
                fontSize: "clamp(1rem, 1.1vw, 1.1rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                Our certified consultants ensure smooth, secure, and strategic integration of Zoho CRM, ensuring data flows effortlessly across your systems, improving productivity, reducing manual tasks, and empowering your sales and service teams with real-time, accurate information.
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
                <img src="/images1/saas/classic01.png" alt="Zoho CRM Integration Dashboard" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 1: Why Essential... */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic02.png" alt="Business Solutions" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                Why Zoho CRM Integration is Essential for UK Businesses
              </h2>
              <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                <p style={{ marginBottom: "1rem" }}>
                  In today’s fast-paced business environment, data often resides in multiple systems—CRM, ERP, accounting, marketing automation, customer support, and more. Without proper integration, these systems operate in silos, leading to:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: "1.5rem 0" }}>
                  {["Inefficient processes", "Duplicated data entry", "Lack of real-time visibility", "Missed sales opportunities", "Poor customer experience"].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)" }}>
                      <CheckCircle2 size={20} style={{ color: "var(--primary)" }} />
                      <span style={{ fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontWeight: 600, color: "var(--text)" }}>
                  Zoho CRM integration solves these challenges by ensuring all your critical business systems work together seamlessly, providing a unified platform for managing customer relationships, sales, marketing, and support operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
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
              Our Zoho CRM Integration Services
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "700px", margin: "0 auto", lineHeight: 1.6 }}>
              FI Digital provides comprehensive, end-to-end Zoho CRM integration services tailored specifically for UK businesses:
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
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  background: "rgba(79, 70, 229, 0.1)",
                  color: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem"
                }}>
                  {svc.icon}
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>
                  {svc.title}
                </h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party Integration Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                Third-Party Application Integration
              </h2>
              <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                <p style={{ marginBottom: "1.5rem" }}>
                  We integrate Zoho CRM with a wide range of third-party applications commonly used by UK businesses, including:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <div style={{ color: "var(--primary)", marginTop: "3px" }}><CheckCircle2 size={20} /></div>
                    <div><strong style={{ color: "var(--text)" }}>Accounting & Finance:</strong> QuickBooks, Xero, Sage, SAP, Oracle Financials</div>
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <div style={{ color: "var(--primary)", marginTop: "3px" }}><CheckCircle2 size={20} /></div>
                    <div><strong style={{ color: "var(--text)" }}>Marketing Platforms:</strong> Mailchimp, HubSpot, Google Ads, Zoho Marketing Automation</div>
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <div style={{ color: "var(--primary)", marginTop: "3px" }}><CheckCircle2 size={20} /></div>
                    <div><strong style={{ color: "var(--text)" }}>Communication & Telephony:</strong> Twilio, RingCentral, Microsoft Teams, Zoom</div>
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <div style={{ color: "var(--primary)", marginTop: "3px" }}><CheckCircle2 size={20} /></div>
                    <div><strong style={{ color: "var(--text)" }}>E-commerce:</strong> Shopify, WooCommerce, Magento, Amazon Marketplace</div>
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <div style={{ color: "var(--primary)", marginTop: "3px" }}><CheckCircle2 size={20} /></div>
                    <div><strong style={{ color: "var(--text)" }}>ERP & Project Management:</strong> SAP, Microsoft Dynamics, Zoho Projects, Trello</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic03.png" alt="Third-Party Integrations" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Blocks (Benefits, Choose Us, Stories) */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "4rem" }}>
          
          {/* Benefits Block */}
          <div>
            <h2 style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
              fontWeight: 800,
              marginBottom: "1.5rem",
              color: "var(--text)",
            }}>
              Benefits of Working with a Zoho CRM Integration Partner
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", marginBottom: "1.5rem" }}>
              Partnering with FI Digital for Zoho CRM integration delivers substantial business benefits:
            </p>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { title: "Unified Customer Data", desc: "Achieve a single source of truth for all customer interactions, improving decision-making and customer engagement." },
                  { title: "Operational Efficiency", desc: "Automate repetitive tasks and streamline workflows across departments." },
                  { title: "Real-Time Insights", desc: "Access real-time data across integrated systems, enabling proactive business decisions." },
                  { title: "Reduced Errors & Manual Work", desc: "Eliminate manual data entry and data duplication, reducing errors and saving valuable time." },
                  { title: "Enhanced Customer Experience", desc: "Deliver personalised, consistent, and timely customer communications across all channels." },
                  { title: "Cost Savings", desc: "Reduced administrative overhead, faster sales cycles, and improved team collaboration result in significant cost efficiencies." }
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                    <CheckCircle2 size={20} style={{ color: "var(--primary)", marginTop: "4px" }} />
                    <div><strong style={{ color: "var(--text)" }}>{item.title}:</strong> {item.desc}</div>
                  </li>
                ))}
            </ul>
          </div>

          {/* Why Choose Block */}
          <div>
            <h2 style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
              fontWeight: 800,
              marginBottom: "1.5rem",
              color: "var(--text)",
            }}>
              Why Choose FI Digital as Your Zoho CRM Integration Partner?
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", marginBottom: "1.5rem" }}>
              FI Digital is a trusted Zoho CRM Integration Partner in the UK with a proven track record of delivering seamless, strategic integrations for businesses across sectors:
            </p>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { title: "Certified Zoho CRM Experts", desc: "Our consultants are officially certified by Zoho, ensuring best-practice implementation and integration." },
                  { title: "Extensive UK Market Experience", desc: "We understand the unique regulatory requirements (including GDPR), operational challenges, and market dynamics of UK businesses." },
                  { title: "Customised Solutions", desc: "Every integration project is tailored to your specific business needs, workflows, and existing systems." },
                  { title: "Proven Integration Methodology", desc: "Our structured, phased approach ensures seamless integration, minimal disruption, and rapid value realisation." },
                  { title: "Comprehensive Support", desc: "We provide ongoing managed services and UK-based support, ensuring your Zoho CRM integrations remain secure, reliable, and optimised." }
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                    <CheckCircle2 size={20} style={{ color: "var(--primary)", marginTop: "4px" }} />
                    <div><strong style={{ color: "var(--text)" }}>{item.title}:</strong> {item.desc}</div>
                  </li>
                ))}
            </ul>
          </div>

          {/* Success Stories Block */}
          <div>
            <h2 style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
              fontWeight: 800,
              marginBottom: "1.5rem",
              color: "var(--text)",
            }}>
              Real-World Success Stories
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", marginBottom: "1.5rem" }}>
              FI Digital has successfully delivered Zoho CRM integration services to numerous UK businesses, driving measurable business outcomes:
            </p>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { title: "Financial Services Organisation", desc: "Integrated Zoho CRM with their legacy ERP and accounting systems, achieving a 360-degree customer view, improving lead-to-cash cycle time by 35%, and significantly enhancing data accuracy." },
                  { title: "E-commerce Company", desc: "Seamlessly connected Zoho CRM with their Shopify store, Google Ads, and QuickBooks systems, resulting in automated order processing, improved campaign performance tracking, and increased customer retention." },
                  { title: "Reliable Support & Training", desc: "Comprehensive training ensures effective user adoption, and ongoing support guarantees continued success and optimal system performance." },
                  { title: "Professional Services Firm", desc: "Implemented Zoho CRM and integrated it with Microsoft Teams, Outlook, and Zoho Desk, streamlining internal communications and client interactions, reducing response times, and boosting customer satisfaction." }
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                    <CheckCircle2 size={20} style={{ color: "var(--primary)", marginTop: "4px" }} />
                    <div><strong style={{ color: "var(--text)" }}>{item.title}:</strong> {item.desc}</div>
                  </li>
                ))}
            </ul>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--text)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2
            }}>
              FAQ – Zoho CRM Integration
              <br /> Partner Services
            </h2>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer"
              }}>
                <summary style={{
                  padding: "1.5rem",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "var(--text)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  listStyle: "none"
                }}>
                  {faq.q}
                  <ChevronDown size={20} style={{ color: "var(--primary)" }} />
                </summary>
                <div style={{
                  padding: "0 1.5rem 1.5rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7
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
          maxWidth: "1000px", 
          width: "100%", 
          background: "linear-gradient(135deg, rgba(79, 70, 229, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%)",
          borderRadius: "30px",
          padding: "4rem 2rem",
          textAlign: "center",
          color: "white",
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
        }}>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 800,
            marginBottom: "1rem",
            color: "white",
          }}>
            Ready to Connect Your Business with Seamless Zoho CRM Integration?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", marginBottom: "2.5rem", lineHeight: 1.6, maxWidth: "700px", margin: "0 auto 2.5rem" }}>
            Unlock the full potential of your business systems and enhance your operational efficiency with seamless, strategic Zoho CRM integration services from FI Digital. Contact our certified UK-based consultants today to discuss your integration needs.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "1rem 2.5rem",
            background: "white",
            color: "rgba(79, 70, 229, 1)",
            fontWeight: 700,
            fontSize: "1rem",
            borderRadius: "14px",
            textDecoration: "none",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s"
          }}>
            Request Your Free Zoho CRM Integration Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
