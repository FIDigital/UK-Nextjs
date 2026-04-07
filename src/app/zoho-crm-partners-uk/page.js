import Link from "next/link";
import { ArrowRight, Server, Users, Database, Settings, Headphones, BarChart, CheckCircle2, ChevronDown, Globe } from "lucide-react";
import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const services = [
  {
    title: "CRM Strategy & Consultation",
    description: "We start by understanding your business objectives, sales processes, and operational workflows. Our consultants work closely with your team to define a clear CRM strategy that aligns with your growth goals.",
    icon: <Globe size={24} />
  },
  {
    title: "Zoho CRM Customisation & Implementation",
    description: "Every business is unique, which is why we customise Zoho CRM to fit your specific requirements. Our certified consultants configure modules, fields, workflows, and automation rules.",
    icon: <Settings size={24} />
  },
  {
    title: "Data Migration & Cleansing",
    description: "FI Digital handles secure, accurate, and GDPR-compliant data migration from your legacy systems to Zoho CRM, ensuring data integrity and business continuity during the transition.",
    icon: <Database size={24} />
  },
  {
    title: "Zoho CRM Integration Services",
    description: "We integrate Zoho CRM with the rest of your business systems, including accounting platforms (QuickBooks, Xero, Sage), marketing automation tools, e-commerce, and telephony.",
    icon: <Server size={24} />
  },
  {
    title: "Automation & Workflow Optimisation",
    description: "Our CRM experts help you automate repetitive tasks such as lead assignment, follow-ups, and deal updates. Well-designed workflows improve efficiency and accelerate your sales cycle.",
    icon: <Users size={24} />
  },
  {
    title: "Reporting & Analytics Setup",
    description: "We set up customised dashboards, KPIs, and real-time reporting in Zoho CRM, ensuring your leadership team has full visibility into sales performance and customer data.",
    icon: <BarChart size={24} />
  }
];

const faqs = [
  {
    q: "What does it mean to be a certified Zoho CRM Partner?",
    a: "A certified Zoho CRM Partner is officially recognised by Zoho Corporation for their expertise in implementing, customising, and supporting Zoho CRM. FI Digital’s consultants hold official Zoho certifications."
  },
  {
    q: "Can you integrate Zoho CRM with our existing systems?",
    a: "Yes. FI Digital specialises in integrating Zoho CRM with various business systems, including accounting software, ERP platforms, telephony systems, e-commerce platforms, and more."
  },
  {
    q: "Do you provide Zoho CRM training for our staff?",
    a: "Absolutely. Our consultants offer comprehensive, tailored training sessions to ensure your teams confidently use Zoho CRM and maximise its features."
  },
  {
    q: "How long does a Zoho CRM implementation project take?",
    a: "Implementation timelines vary based on complexity. A typical Zoho CRM implementation ranges from 2 to 8 weeks, depending on customisation, data migration, and integration requirements."
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
                Zoho CRM Partners UK
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Zoho CRM Partners
                <br />
                <span style={{ color: "var(--primary)" }}>in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1rem, 1.1vw, 1.1rem)",
                color: "var(--text-muted)",
                marginBottom: "1rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                Looking to implement, optimise, or upgrade Zoho CRM for your business? Choosing the right Zoho CRM Partner in the UK is critical to ensuring successful deployment and maximum ROI. FI Digital is a trusted, certified Zoho CRM Partner helping businesses unlock the full potential of Zoho CRM.
              </p>
              <p style={{
                fontSize: "clamp(1rem, 1.1vw, 1.1rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                Our team of Zoho-certified consultants ensures your CRM solution is tailored precisely to your business needs, ensuring streamlined sales operations and sustainable business growth.
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
                <img src="/images1/saas/classic01.png" alt="Zoho CRM Partners UK" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Experts Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic02.png" alt="CRM Experts" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                Why Partner with Zoho CRM Experts?
              </h2>
              <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                <p style={{ marginBottom: "1rem" }}>
                  Zoho CRM is a powerful, feature-rich platform that helps businesses manage customer relationships. However, achieving full benefits demands expert configuration, seamless integration, and continuous optimisation.
                </p>
                <p style={{ fontWeight: 600, color: "var(--text)", marginTop: "1rem" }}>
                  As a Zoho CRM Partner, FI Digital helps UK businesses bridge this gap:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1.5rem" }}>
                  {[
                    "Strategic CRM consulting tailored to your goals",
                    "Custom CRM configuration and implementation",
                    "Seamless system integration",
                    "Comprehensive user training and support",
                    "Ongoing optimisation and managed services"
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)" }}>
                      <CheckCircle2 size={20} style={{ color: "var(--primary)" }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
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
              Our Zoho CRM Partner Services
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "700px", margin: "0 auto", lineHeight: 1.6 }}>
              FI Digital offers a complete range of Zoho CRM services designed to help UK businesses implement, optimise, and scale:
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

      {/* Benefits Block */}
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
                Benefits of Working with a Certified Zoho CRM Partner
              </h2>
              <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1.5rem" }}>
                  {[
                    { title: "Certified Zoho CRM Experts", desc: "Officially certified by Zoho for best-practice implementation." },
                    { title: "Local UK Support & Compliance", desc: "We understand UK business environments and GDPR requirements." },
                    { title: "Tailored CRM Solutions", desc: "Customised deployment for your unique industry and objectives." },
                    { title: "Proven Track Record", desc: "Successful delivery across retail, finance, healthcare, and more." },
                    { title: "Faster Implementation & ROI", desc: "Rapid deployment and quick user adoption for immediate impact." }
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.75rem" }}>
                      <div style={{ color: "var(--primary)", marginTop: "4px", flexShrink: 0 }}><CheckCircle2 size={20} /></div>
                      <div><strong style={{ color: "var(--text)" }}>{item.title}:</strong> {item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic03.png" alt="Zoho Partner Benefits" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Industries */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
          
          {/* Success Stories */}
          <div style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Success Stories</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { title: "Professional Services", desc: "40% improvement in lead conversion rates via automated workflows." },
                  { title: "Retail & E-commerce", desc: "25% increase in repeat sales through integrated platforms." },
                  { title: "Financial Services", desc: "Streamlined lead management and enhanced forecasting accuracy." }
                ].map((story, i) => (
                  <div key={i}>
                    <h4 style={{ color: "var(--primary)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{story.title}</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{story.desc}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Industries */}
          <div style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Industries We Serve</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {[
                  "Financial Services", "Mortgage Broking", "Professional Services", "Consulting",
                  "Retail & E-commerce", "Manufacturing", "Healthcare", "Education", "IT & SaaS"
                ].map((ind, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--primary)" }} />
                    {ind}
                  </div>
                ))}
            </div>
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
              FAQ – Zoho CRM Partner Services
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
          background: "rgba(30, 41, 59, 1)",
          borderRadius: "30px",
          padding: "4rem 2rem",
          textAlign: "center",
          color: "white",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          border: "1px solid rgba(255,255,255,0.1)"
        }}>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 800,
            marginBottom: "1rem",
            color: "white",
          }}>
            Ready to Transform Your Sales Operations?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", marginBottom: "2.5rem", lineHeight: 1.6, maxWidth: "700px", margin: "0 auto 2.5rem" }}>
            Maximise your sales efficiency, improve customer engagement, and drive business growth with Zoho CRM solutions from FI Digital—your trusted Zoho CRM Partner in the UK.
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
            boxShadow: "0 10px 30px rgba(79, 70, 229, 0.4)",
          }}>
            Book Your Free Zoho CRM Consultation Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
