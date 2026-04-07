import Link from "next/link";
import { ArrowRight, BarChart3, Database, PieChart, ShieldCheck, TrendingUp, ChevronDown, CheckCircle2, Layout, Settings, Users, Layers, Repeat, Shield } from "lucide-react";
import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const services = [
  {
    title: "Discovery & Business Process Assessment",
    content: "We begin by understanding your business objectives, existing processes, software stack, and challenges. Our consultants conduct workshops with key stakeholders to define an implementation roadmap.",
  },
  {
    title: "Solution Architecture",
    content: "We design a scalable, efficient, and GDPR-compliant solution tailored to your business requirements. Whether it's a single Zoho app or the full Zoho One suite, we ensure the architecture supports your growth plans.",
  },
  {
    title: "Zoho CRM Implementation",
    content: "We configure Zoho CRM modules, fields, workflows, roles, and automation rules to streamline lead management, sales pipeline tracking, and customer engagement.",
  },
  {
    title: "Zoho One Implementation",
    content: "We help you implement the entire Zoho One suite across departments—Sales, Marketing, Finance, Operations, Support, and HR—ensuring seamless collaboration and data flow.",
  },
  {
    title: "Zoho Creator Implementation",
    content: "We offer comprehensive user training to ensure your team fully understands and effectively utilises Zoho Analytics. Our ongoing managed support ensures that your data environment remains optimised, reliable, and ready to meet evolving business demands.",
  },
  {
    title: "Data Migration & Validation",
    content: "We securely migrate data from legacy systems or CRMs, ensuring accuracy, integrity, and compliance with data protection regulations.",
  },
  {
    title: "System Integration",
    content: "We integrate Zoho apps with third-party platforms, including ERP, accounting software, telephony systems, e-commerce platforms, and more.",
  },
  {
    title: "User Training & Change Management",
    content: "We provide comprehensive user training sessions, onboarding assistance, and adoption support to ensure your teams use Zoho efficiently from day one.",
  },
  {
    title: "Post-Implementation Support",
    content: "Our support team remains available for any technical issues, system enhancements, or additional training requirements after implementation.",
  }
];

const successStories = [
  {
    title: "Professional Services Firm – Manchester",
    desc: "Implemented Zoho CRM and integrated it with Microsoft Teams and QuickBooks.",
    result: "Result: Reduced manual processes by 40% and improved client onboarding experience."
  },
  {
    title: "Retail Chain – London",
    desc: "Deployed Zoho One for a multi-location retail brand, integrating sales, marketing, and support functions under a single platform.",
    result: "Outcome: Increased efficiency and reduced software licensing costs by 30%."
  },
  {
    title: "Healthcare Provider – Birmingham",
    desc: "Built custom Zoho Creator applications for patient record management, integrated with Zoho Books and Zoho Desk.",
    result: "Impact: Reduced operational overhead and improved patient service delivery."
  }
];

const faqs = [
  {
    q: "How long does a typical Zoho implementation project take?",
    a: "Most implementation projects take between 4 to 12 weeks depending on the number of Zoho applications, integrations, and complexity."
  },
  {
    q: "Can you migrate our existing CRM data to Zoho?",
    a: "Yes. We offer full data migration services, including data mapping, cleansing, migration, and validation."
  },
  {
    q: "Do you provide post-implementation support?",
    a: "Absolutely. Our managed services include ongoing technical support, admin assistance, and system optimisation."
  },
  {
    q: "Can you integrate Zoho with our existing systems?",
    a: "Yes. We offer end-to-end integration services with ERP platforms, accounting software, e-commerce platforms, telephony systems, and more."
  },
  {
    q: "Is your Zoho implementation GDPR-compliant?",
    a: "Yes. Being a UK-based partner, we ensure GDPR compliance in all our Zoho implementations, including data storage, access, and security protocols."
  }
];

export default function Page() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{
        position: "relative",
        minHeight: "75vh",
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
                UK Certified Partner
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Certified Zoho
                <br />
                <span style={{ color: "var(--primary)" }}>Implementation Partner in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                Is your business ready to adopt Zoho’s powerful suite of applications but unsure how to implement them effectively? 
                FI Digital is a trusted and certified Zoho Implementation Partner in the UK, specialising in seamless, strategic, and scalable Zoho implementation services.
              </p>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                Whether you're a small business looking to deploy Zoho CRM or an enterprise rolling out Zoho One across departments, our certified consultants ensure that your Zoho implementation is done right the first time—on time and on budget.
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
                <img src="/images1/saas/classic01.png" alt="Zoho Implementation Services" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* What is Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic02.png" alt="What is a Zoho Implementation Partner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                What is a Zoho Implementation Partner?
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                A Zoho Implementation Partner is a specialist who is officially recognised and certified by Zoho Corporation to provide technical setup, configuration, data migration, system integration, and deployment of Zoho applications.
              </p>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.25rem", fontWeight: 700 }}>
                Unlike generic IT consultants, an authorised Zoho Implementation Partner:
              </p>
              <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  "Has in-depth, hands-on expertise in the Zoho ecosystem",
                  "Follows best practices, frameworks, and proven methodologies prescribed by Zoho",
                  "Is authorised to liaise directly with Zoho support teams",
                  "Provides post-implementation support, training, and optimisation"
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)" }}>
                    <CheckCircle2 size={20} style={{ color: "var(--primary)" }} />
                    <span style={{ fontSize: "1.05rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "2rem", fontWeight: 600, color: "var(--text)", fontSize: "1.1rem" }}>
                FI Digital is one of the leading Zoho Implementation Partners in the UK, committed to delivering measurable business outcomes through efficient, reliable, and secure Zoho deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{
              fontSize: "clamp(2.1rem, 4vw, 3rem)",
              fontWeight: 800,
              marginBottom: "1rem",
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}>
              Our Zoho Implementation Services
            </h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
              At FI Digital, our Zoho implementation services in the UK cover everything your business needs for a successful deployment:
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
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.25rem" }}>
                  {svc.title}
                </h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "1rem" }}>
                  {svc.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Need Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "flex-start" }}>
            <div>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--text)" }}>Why Your Business Needs a Partner</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.1rem" }}>
                While Zoho is known for its user-friendly interface, the real challenge lies in implementing Zoho applications in a way that aligns with your business processes and future growth plans.
              </p>
              <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Avoid misconfiguration and data loss",
                  "Ensure smooth data migration from legacy systems",
                  "Build custom workflows & automation to suit your operations",
                  "Integrate Zoho apps with third-party systems",
                  "Comply with GDPR and data security protocols",
                  "Save time, reduce internal IT workload, and lower costs",
                  "Gain access to ongoing expert support"
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", fontSize: "1.05rem", color: "var(--text)" }}>
                    <div style={{ color: "var(--primary)", marginTop: "3px" }}><CheckCircle2 size={20} /></div>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "2rem", color: "var(--text)", fontWeight: 700, fontSize: "1.1rem" }}>
                A poorly implemented Zoho system will result in low adoption, fragmented data, and wasted investment. We ensure this doesn't happen.
              </p>
            </div>
            
            <div style={{ background: "var(--card-bg)", padding: "3.5rem", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "2rem" }}>Why Choose FI Digital?</h3>
                <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {[
                        "Officially Certified Zoho Implementation Partner",
                        "UK-based team with local market expertise",
                        "Proven implementation methodology",
                        "Experience across industries and company sizes",
                        "Data security & GDPR compliance",
                        "End-to-end project ownership",
                        "Long-term strategic partner—not just an IT vendor"
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text)", fontWeight: 600, fontSize: "1.1rem" }}>
                            <CheckCircle2 size={24} style={{ color: "var(--primary)", flexShrink: 0 }} />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Zoho Implementation Success Stories</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
            {successStories.map((story, i) => (
              <div key={`story-${i}`} style={{ 
                background: "var(--card-bg)", 
                padding: "3rem", 
                borderRadius: "32px", 
                border: "1px solid var(--border)", 
                boxShadow: "var(--card-shadow)"
              }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--primary)", marginBottom: "1.25rem" }}>{story.title}</h3>
                <p style={{ color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.7, fontSize: "1.05rem" }}>{story.desc}</p>
                <div style={{ background: "rgba(79, 70, 229, 0.05)", padding: "1.25rem", borderRadius: "16px", borderLeft: "4px solid var(--primary)" }}>
                  <p style={{ color: "var(--text)", fontWeight: 700, fontSize: "1rem" }}>{story.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "6rem", textAlign: "center" }}>
            <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "2rem", color: "var(--text)" }}>Industries We Serve</h3>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", maxWidth: "800px", margin: "0 auto" }}>
                {[
                  "Financial Services & Mortgage Broking",
                  "Retail & E-commerce",
                  "Manufacturing & Distribution",
                  "Professional Services & Consulting",
                  "Healthcare & Wellness",
                  "Education & Training",
                  "IT & SaaS Providers"
                ].map((ind, i) => (
                  <div key={i} style={{ padding: "0.75rem 1.5rem", background: "var(--bg-secondary)", borderRadius: "100px", border: "1px solid var(--border)", color: "var(--text)", fontSize: "0.95rem", fontWeight: 600 }}>
                    {ind}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}>
              FAQ – Zoho Implementation Partner UK
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
          borderRadius: "45px",
          padding: "5rem 3rem",
          textAlign: "center",
          color: "white",
          boxShadow: "0 25px 50px -12px rgba(30, 58, 138, 0.5)"
        }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 900,
            marginBottom: "1.5rem",
            color: "white",
            lineHeight: 1.2
          }}>
            Ready to Start Your Zoho Implementation Journey?
          </h2>
          <p style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.9)", marginBottom: "1.5rem", maxWidth: "850px", margin: "0 auto 1.5rem" }}>
            Transform your business operations with FI Digital—your trusted, certified Zoho Implementation Partner in the UK.
          </p>
          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.8)", marginBottom: "3.5rem", maxWidth: "850px", margin: "0 auto 3.5rem" }}>
            We help you implement Zoho the right way, ensuring you achieve faster ROI, improved efficiency, and business growth.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1.2rem 3.5rem",
            background: "var(--primary)",
            color: "white",
            fontWeight: 800,
            fontSize: "1.2rem",
            borderRadius: "18px",
            textDecoration: "none",
            boxShadow: "0 15px 35px rgba(79, 70, 229, 0.4)",
          }}>
            Request Your Free Consultation <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
}
