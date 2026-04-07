import Link from "next/link";
import { ArrowRight, Server, Users, Layout, Database, Headphones, BarChart, CheckCircle2, ChevronDown } from "lucide-react";
import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const services = [
  {
    title: "Strategic CRM Consultation & Planning",
    description: "Our CRM consultants start with a thorough understanding of your business processes, customer interactions, sales cycles, and strategic objectives. We create a detailed CRM strategy outlining precisely how Zoho CRM can achieve your desired outcomes.",
    icon: <Server size={24} />
  },
  {
    title: "Customisation & Configuration of Zoho CRM",
    description: "Every organisation has unique processes, and our consultants ensure Zoho CRM matches your specific requirements. We carefully configure modules, custom fields, workflows, sales pipelines, and automation rules.",
    icon: <Layout size={24} />
  },
  {
    title: "Zoho CRM Integration",
    description: "We expertly integrate Zoho CRM with your existing technology stack—including ERP systems, accounting software (QuickBooks, Xero, SAP), marketing automation platforms, and email services.",
    icon: <Users size={24} />
  },
  {
    title: "Data Migration & Integrity Assurance",
    description: "Data migration is critical to any CRM project. Our specialists ensure a smooth, secure transfer of customer data from your previous CRM or spreadsheets into Zoho CRM with GDPR compliance and accuracy.",
    icon: <Database size={24} />
  },
  {
    title: "CRM User Training & Change Management",
    description: "User adoption is vital for CRM success. Our tailored training programmes ensure your sales, marketing, and support teams understand how to fully utilise Zoho CRM, building confidence and boosting productivity.",
    icon: <Headphones size={24} />
  },
  {
    title: "Analytics, Dashboards & Reporting",
    description: "FI Digital creates customised dashboards, reporting templates, and analytics views, leveraging Zoho CRM's powerful analytics capabilities for real-time visibility into sales performance and customer insights.",
    icon: <BarChart size={24} />
  }
];

const faqs = [
  {
    q: "How long does a Zoho CRM consulting engagement typically last?",
    a: "Most Zoho CRM consulting engagements typically range from 3 to 8 weeks, depending on your requirements, complexity, data migration needs, and customisation specifics."
  },
  {
    q: "Can you integrate Zoho CRM with our existing accounting or ERP systems?",
    a: "Yes. Zoho CRM integrates seamlessly with major UK accounting and ERP systems, including SAP, QuickBooks, Xero, Sage, and more, enhancing your data accuracy and business efficiency."
  },
  {
    q: "We already use Zoho CRM but aren't seeing results. Can FI Digital help?",
    a: "Absolutely. FI Digital specialises in optimising existing Zoho CRM setups, providing strategic advice, system audits, optimisation plans, and training programmes to ensure you realise the full value."
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
                Zoho CRM Consulting Partner
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Zoho CRM Consulting
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
                Are you ready to transform your sales processes, streamline customer interactions, and accelerate business growth with Zoho CRM? FI Digital is your trusted Zoho CRM Consulting Partner in the UK, delivering expert CRM consulting, strategic guidance, and bespoke CRM solutions tailored precisely to your business needs.
              </p>
              <p style={{
                fontSize: "clamp(1rem, 1.1vw, 1.1rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                With years of CRM implementation and consulting expertise, we empower UK businesses to harness the full potential of Zoho CRM, driving sales efficiency, enhancing customer relationships, and unlocking substantial growth opportunities.
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
                <img src="/images1/saas/classic03.png" alt="Zoho CRM Consulting" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 1: What Makes Essential... */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic02.png" alt="Business Growth" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                What Makes Zoho CRM Essential for UK Businesses?
              </h2>
              <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                <p style={{ marginBottom: "1rem" }}>
                  Zoho CRM is an industry-leading customer relationship management solution trusted by thousands of UK companies across sectors. It provides powerful automation, intuitive interface design, advanced analytics, and seamless integrations.
                </p>
                <p style={{ fontWeight: 600, color: "var(--text)", marginTop: "1.5rem" }}>
                  However, unlocking Zoho CRM's full potential requires expert knowledge and strategic implementation. As a certified Zoho CRM consulting partner, FI Digital ensures your CRM deployment perfectly aligns with your sales processes, business objectives, and market context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services Grid Section */}
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
              Our Zoho CRM Consulting Services
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "700px", margin: "0 auto", lineHeight: 1.6 }}>
              FI Digital offers comprehensive Zoho CRM consulting services, tailored specifically to UK business needs. Our strategic approach delivers measurable outcomes:
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

      {/* Key Benefits Section */}
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
                Key Benefits of Expert Zoho CRM Consulting
              </h2>
              <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                <p style={{ marginBottom: "1.5rem" }}>
                  CRM automation and custom workflows drastically reduce manual tasks, allowing your sales teams to focus more on closing deals.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { title: "Enhanced Customer Relationships", desc: "Gain deep insights into customer interactions and preferences." },
                    { title: "Strategic Decision-making", desc: "Instantly spot opportunities and risks with dynamic visualisations." },
                    { title: "Streamlined Sales Processes", desc: "Optimise your sales pipeline management for faster cycles." },
                    { title: "Increased Revenue Growth", desc: "Better conversion rates and increased deal sizes lead to higher revenues." },
                    { title: "Reduced Operational Costs", desc: "Eliminate manual errors and streamline processes across departments." }
                  ].map((benefit, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.75rem" }}>
                      <div style={{ color: "var(--primary)", marginTop: "3px" }}><CheckCircle2 size={20} /></div>
                      <div><strong style={{ color: "var(--text)" }}>{benefit.title}:</strong> {benefit.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic03.png" alt="CRM Consulting Benefits" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Block */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <div style={{ 
            background: "var(--card-bg)", 
            padding: "3rem", 
            borderRadius: "30px", 
            border: "1px solid var(--border)",
            boxShadow: "var(--card-shadow)"
          }}>
            <h2 style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 800,
              marginBottom: "1.5rem",
              color: "var(--text)",
            }}>
              Zoho CRM Consulting Case Study
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem", marginBottom: "1.5rem" }}>
              For a UK-based financial services firm, FI Digital's CRM consulting and implementation expertise led to tangible business improvements:
            </p>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Sales pipeline efficiency improved by 35%.",
                  "Conversion rates increased by 30%.",
                  "Significant reduction in manual administrative tasks.",
                  "Enhanced customer satisfaction scores due to better engagement."
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                    <CheckCircle2 size={20} style={{ color: "var(--primary)", marginTop: "4px", flexShrink: 0 }} />
                    <span style={{ color: "var(--text)" }}>{item}</span>
                  </li>
                ))}
            </ul>
            <p style={{ marginTop: "1.5rem", color: "var(--text-muted)", fontStyle: "italic" }}>
              Our strategic CRM deployment made Zoho CRM a pivotal component of their sustained growth strategy.
            </p>
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
            }}>
              FAQ – Zoho CRM Consulting
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

      {/* Final CTA Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)", display: "flex", justifyContent: "center" }}>
        <div style={{ 
          maxWidth: "1000px", 
          width: "100%", 
          background: "linear-gradient(135deg, rgba(79, 70, 229, 1) 0%, rgba(30, 64, 175, 1) 100%)",
          borderRadius: "30px",
          padding: "4rem 2rem",
          textAlign: "center",
          color: "white",
          boxShadow: "0 20px 40px rgba(30, 64, 175, 0.3)"
        }}>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 800,
            marginBottom: "1rem",
            color: "white",
          }}>
            Ready to Maximise Your CRM Potential?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", marginBottom: "2.5rem", lineHeight: 1.6, maxWidth: "700px", margin: "0 auto 2.5rem" }}>
            Discover how FI Digital, your expert Zoho CRM consulting partner in the UK, can help transform your sales and customer management processes, driving measurable growth and efficiency gains.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "1rem 2.5rem",
            background: "white",
            color: "#1e40af",
            fontWeight: 700,
            fontSize: "1rem",
            borderRadius: "14px",
            textDecoration: "none",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          }}>
            Schedule Your Free Zoho CRM Consultation Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
