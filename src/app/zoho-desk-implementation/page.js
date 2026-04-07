import Link from "next/link";
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
                Zoho Desk Implementation
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Zoho Desk Implementation
                <br />
                <span style={{ color: "var(--primary)" }}>for Customer Support</span>
              </h1>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                Want to elevate your customer support and streamline your service operations? FI Digital specialises in Zoho Desk implementation services for UK businesses, enabling you to deliver exceptional customer experiences, improve operational efficiency, and empower your support teams with Zoho’s industry-leading helpdesk software.
              </p>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                Our certified Zoho Desk consultants will expertly configure, integrate, and customise your Zoho Desk solution to perfectly align with your unique business requirements, ensuring maximum impact from day one.
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
                <img src="/images1/saas/classic01.png" alt="Zoho Desk Implementation" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic02.png" alt="Getting Started" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                Getting Started with Zoho Desk
              </h2>
              <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                <p style={{ marginBottom: "1.5rem" }}>
                  Zoho Desk is a robust helpdesk solution designed to enhance your customer support across multiple channels—email, phone, live chat, social media, and self-service portals. However, successful implementation requires careful planning, customisation, and integration—precisely what FI Digital offers.
                </p>
                <p style={{ fontWeight: 600, color: "var(--text)" }}>
                  With FI Digital’s professional Zoho Desk implementation, your organisation can:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1.5rem" }}>
                  {[
                    "Streamline customer interactions with organised ticket management.",
                    "Automate routine tasks, improving support response times significantly.",
                    "Empower customers with comprehensive self-service portals.",
                    "Integrate seamlessly with Zoho CRM, SalesIQ, and telephony systems."
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
              Our Zoho Desk Implementation Services
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
              At FI Digital, we follow a structured, comprehensive approach to implementing Zoho Desk, ensuring clarity, efficiency, and optimal results:
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

      {/* Experience & Why Section */}
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
                Improving Customer Experience with Zoho Desk
              </h2>
              <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                <p style={{ marginBottom: "1.5rem" }}>
                  A professionally implemented Zoho Desk platform directly contributes to an outstanding customer experience (CX):
                </p>
                <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {[
                    { title: "Faster Support Responses", desc: "Automation and organised ticketing reduce customer wait times, increasing satisfaction." },
                    { title: "Personalised Customer Interactions", desc: "Detailed customer histories from CRM integration allow tailored and meaningful support experiences." },
                    { title: "Efficient Multi-Channel Support", desc: "Seamless handling of customer enquiries across email, phone, chat, social media, and self-service channels." }
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "1rem" }}>
                      <div style={{ color: "var(--primary)", marginTop: "4px", flexShrink: 0 }}><CheckCircle2 size={24} /></div>
                      <span><strong style={{ color: "var(--text)" }}>{item.title}:</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: "2rem" }}>
                  By implementing Zoho Desk effectively, FI Digital helps you deliver a consistent, superior customer experience, directly impacting your brand reputation and customer loyalty.
                </p>
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic03.png" alt="Customer Experience" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FI Digital */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            marginBottom: "1.5rem",
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}>
            Why Choose FI Digital for Zoho Desk?
          </h2>
          <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "900px", margin: "0 auto 3.5rem", lineHeight: 1.7 }}>
            FI Digital is a trusted UK-based Zoho Partner with deep expertise in customer support systems and CX strategy. We combine technical excellence with practical business knowledge, ensuring your Zoho Desk solution exceeds expectations:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Certified Zoho Desk Consultants", desc: "Our UK-based experts hold official Zoho certifications and extensive practical experience." },
              { title: "Tailored Solutions", desc: "We understand every business has unique requirements; our implementation is always custom-tailored to your precise needs." },
              { title: "Comprehensive Support", desc: "Ongoing managed services and training ensure your investment continues to deliver value long-term." }
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", textAlign: "left" }}>
                <h3 style={{ color: "var(--primary)", fontWeight: 800, fontSize: "1.25rem", marginBottom: "1rem" }}>{item.title}</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}>
              FAQ – Zoho Desk Implementation
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
          background: "rgba(30, 58, 138, 1)",
          borderRadius: "30px",
          padding: "4rem 2rem",
          textAlign: "center",
          color: "white",
          boxShadow: "0 20px 40px rgba(30, 58, 138, 0.3)"
        }}>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 800,
            marginBottom: "1rem",
            color: "white",
          }}>
            Next Steps – Transform Your Customer Support Today
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", marginBottom: "2.5rem", lineHeight: 1.6, maxWidth: "750px", margin: "0 auto 2.5rem" }}>
            Ready to significantly enhance your customer service experience with Zoho Desk? Connect with FI Digital’s Zoho-certified UK consultants to discover exactly how our tailored implementation can revolutionise your operations.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "1.2rem 3rem",
            background: "var(--primary)",
            color: "white",
            fontWeight: 800,
            fontSize: "1.1rem",
            borderRadius: "16px",
            textDecoration: "none",
            boxShadow: "0 10px 30px rgba(79, 70, 229, 0.4)",
          }}>
            Request Your Free Zoho Desk Consultation Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
