import Link from "next/link";
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
  },
  {
    q: "Ready to Transform Your Business with Zoho One?",
    a: "Join countless successful UK businesses that have streamlined their operations and boosted productivity with Zoho One. FI Digital’s certified consultants are ready to help your business unlock Zoho One’s full potential, driving efficiency, collaboration, and growth. Book Your Free Zoho One Consultation Today"
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
                Zoho One Implementation Partner
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Zoho One Implementation
                <br />
                <span style={{ color: "var(--primary)" }}>Partner in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                Are you considering adopting Zoho One—the comprehensive suite of integrated applications known as the "operating system for business"? FI Digital is your trusted Zoho One implementation partner in the UK, expertly guiding you through a seamless digital transformation. Our certified Zoho consultants tailor your Zoho One solution precisely to your business, ensuring it’s configured to deliver maximum productivity, collaboration, and growth across your entire organisation.
              </p>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                From sales and marketing to customer service, finance, and HR, we help UK businesses fully harness Zoho One’s potential, significantly reducing operational complexity and enhancing efficiency.
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
                <img src="/images1/saas/classic01.png" alt="Zoho One Implementation Partner UK" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* What is Zoho One Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic02.png" alt="What is Zoho One?" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                What is Zoho One?
              </h2>
              <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                <p style={{ marginBottom: "1.5rem" }}>
                  Zoho One is a revolutionary suite offering more than 50 integrated applications within one unified platform, designed specifically to streamline business operations across every department. It eliminates the need for multiple disparate software solutions, significantly lowering overall costs and complexity. Zoho One includes powerful applications such as Zoho CRM, Zoho Books, Zoho Desk, Zoho Creator, Zoho Analytics, Zoho Marketing Automation, Zoho People, Zoho Projects, and many more.
                </p>
                <p style={{ fontWeight: 600, color: "var(--text)" }}>
                  Over 60% of Zoho customers use more than 20 apps from the Zoho suite, reflecting its incredible popularity and versatility. FI Digital ensures your Zoho One implementation leverages these powerful tools effectively, creating a cohesive digital environment optimised specifically for your UK-based business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach Grid */}
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
              Our Zoho One Implementation Approach
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
              FI Digital follows a structured yet adaptable implementation approach, carefully designed to suit the complexity of Zoho One. This ensures your business transitions smoothly, efficiently, and effectively:
            </p>
          </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem"
          }}>
            {approach.map((step, i) => (
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
                  {step.icon}
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>
                  {step.title}
                </h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
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
                Advantages of Zoho One for Your Business
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "1.1rem" }}>
                Zoho One implementation, when expertly handled, delivers transformative business advantages, including:
              </p>
              <div style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "1.1rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {[
                    { title: "Unified Business Platform", desc: "All your key business functions integrated into one seamless ecosystem, significantly improving efficiency, visibility, and collaboration." },
                    { title: "Cost Savings", desc: "Eliminate multiple software subscriptions by consolidating onto one affordable and comprehensive platform, substantially lowering your total cost of ownership." },
                    { title: "Improved Cross-Departmental Visibility", desc: "A fully integrated data model allows sales, support, finance, HR, and marketing teams to work collaboratively, with real-time data access." },
                    { title: "Enhanced Scalability", desc: "Zoho One effortlessly scales with your business, providing the flexibility to add new applications, features, and users as your needs evolve." },
                    { title: "Consistent Updates & Innovation", desc: "Zoho continuously innovates its suite, with regular updates and new features to keep your business ahead of industry trends." }
                  ].map((adv, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.75rem" }}>
                      <div style={{ color: "var(--primary)", marginTop: "4px", flexShrink: 0 }}><CheckCircle2 size={20} /></div>
                      <div><strong style={{ color: "var(--text)" }}>{adv.title}:</strong> {adv.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic03.png" alt="Advantages of Zoho One" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Transition */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "3rem" }}>
          
          <div style={{ background: "var(--card-bg)", padding: "3rem", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>FI Digital’s Zoho One Expertise</h3>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              FI Digital stands out as a leading Zoho Premium Partner in the UK, deeply experienced in successfully deploying complex Zoho One implementations across diverse industries.
            </p>
            <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { title: "Proven Experience", desc: "Multiple successful Zoho One implementations for UK-based businesses of various sizes and sectors." },
                  { title: "Zoho Certified Consultants", desc: "Our expert team holds official Zoho certifications, ensuring the highest standards of implementation and configuration." },
                  { title: "Close Zoho Collaboration", desc: "We maintain strong connections with Zoho’s development teams, ensuring rapid responses and early access to new features." }
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)" }}>
                    <div style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }}><CheckCircle2 size={24} /></div>
                    <span><strong>{item.title}:</strong> {item.desc}</span>
                  </li>
                ))}
            </ul>
          </div>

          <div style={{ background: "var(--card-bg)", padding: "3rem", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Transitioning to Zoho One</h3>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Many UK businesses adopt Zoho One to replace costly or fragmented systems like Salesforce, Microsoft Dynamics, HubSpot, or legacy ERP systems.
            </p>
            <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  "Detailed migration planning, ensuring minimum disruption.",
                  "Data cleansing, validation, and secure transfer processes.",
                  "Training sessions tailored for users transitioning from familiar software.",
                  "Rapid adoption and clear, measurable benefits quickly realised."
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", color: "var(--text-muted)" }}>
                    <div style={{ color: "var(--primary)", flexShrink: 0, marginTop: "4px" }}><CheckCircle2 size={24} /></div>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
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
              FAQ – Zoho One Implementation
            </h2>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease"
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
                  fontSize: "1.05rem"
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
          background: "linear-gradient(135deg, rgba(30, 58, 138, 1) 0%, rgba(30, 64, 175, 1) 100%)",
          borderRadius: "40px",
          padding: "5rem 3rem",
          textAlign: "center",
          color: "white",
          boxShadow: "0 25px 50px -12px rgba(30, 58, 138, 0.5)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Decorative circles */}
          <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
          <div style={{ position: "absolute", bottom: "-30px", left: "-30px", width: "150px", height: "150px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

          <h2 style={{
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
            fontWeight: 900,
            marginBottom: "1.5rem",
            lineHeight: 1.2,
            color: "white",
            letterSpacing: "-0.02em"
          }}>
            Next Steps – Start Building Your
            <br />
            Custom Zoho Creator App
          </h2>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", marginBottom: "3.5rem", lineHeight: 1.7, maxWidth: "850px", margin: "0 auto 3.5rem" }}>
            Ready to streamline your business processes with powerful custom apps built on Zoho Creator? Get in touch with our expert UK-based development team today to discuss your requirements and see how quickly we can transform your business operations.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1.2rem 3rem",
            background: "white",
            color: "rgba(30, 58, 138, 1)",
            fontWeight: 800,
            fontSize: "1.1rem",
            borderRadius: "16px",
            textDecoration: "none",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease",
          }}>
            Request Your Free Zoho Creator Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
