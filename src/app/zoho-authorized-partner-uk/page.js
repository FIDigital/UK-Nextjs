import Link from "next/link";
import { ArrowRight, BarChart3, ChevronDown, CheckCircle2, Layout, Settings, Users, Layers, Repeat, Shield, Monitor, Smartphone, Code, Briefcase, Mail, Zap, Headphones } from "lucide-react";
import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const authorizedUkServices = [
  {
    title: "Zoho CRM Implementation & Consulting",
    content: "We design and implement Zoho CRM solutions tailored to your sales processes, helping you improve lead management, customer engagement, and sales conversion rates.",
    icon: <Users size={24} />
  },
  {
    title: "Zoho One Implementation & Rollout",
    content: "Zoho One is a complete business operating system with over 50 integrated applications. We help you strategically implement Zoho One to streamline your operations and improve collaboration.",
    icon: <Layers size={24} />
  },
  {
    title: "Zoho Creator Custom App Development",
    content: "Need a bespoke business application? Our certified developers build low-code apps on Zoho Creator to automate your business workflows and improve efficiency.",
    icon: <Code size={24} />
  },
  {
    title: "Zoho Desk Implementation & Support",
    content: "We configure Zoho Desk to help you deliver better customer service, reduce ticket resolution times, and improve customer satisfaction.",
    icon: <Headphones size={24} />
  },
  {
    title: "Zoho Analytics Consulting",
    content: "Unlock powerful business insights with Zoho Analytics. We help you build real-time dashboards, advanced reports, and predictive analytics customised to your business needs.",
    icon: <BarChart3 size={24} />
  },
  {
    title: "Zoho Marketing Automation Implementation",
    content: "We help you automate your lead nurturing and marketing campaigns with Zoho Marketing Automation and Zoho Campaigns, fully integrated with your CRM.",
    icon: <Zap size={24} />
  },
  {
    title: "Zoho Integration Services",
    content: "We integrate Zoho applications with your existing systems, including ERP platforms, accounting software, e-commerce platforms, telephony solutions, and marketing tools.",
    icon: <Repeat size={24} />
  },
  {
    title: "Zoho Managed Services & Ongoing Support",
    content: "Our authorised partnership includes long-term support, training, system optimisation, and admin services to keep your Zoho environment aligned with your evolving business needs.",
    icon: <Shield size={24} />
  }
];

const successStories = [
  {
    title: "E-commerce Business – London",
    content: "We deployed Zoho One for a growing e-commerce brand, integrating sales, marketing, and finance operations under one platform.",
    result: "Increased operational efficiency and 30% faster order processing."
  },
  {
    title: "Professional Services Firm – Birmingham",
    content: "Implemented Zoho CRM integrated with Zoho Analytics and Microsoft Teams.",
    result: "Improved client management processes and sales pipeline visibility."
  },
  {
    title: "Healthcare Organisation – Manchester",
    content: "Built a custom patient management system on Zoho Creator integrated with Zoho Desk and Zoho Books.",
    result: "Reduced manual administration and improved patient service."
  }
];

const faqs = [
  {
    q: "What is the difference between an authorised partner and other Zoho service providers?",
    a: "An authorised partner is officially recognised by Zoho Corporation, has certified consultants, and adheres to Zoho’s service standards. They have direct access to Zoho’s technical teams and receive priority support."
  },
  {
    q: "Can you help us migrate from our existing systems to Zoho?",
    a: "Yes. We provide end-to-end data migration services, ensuring accuracy, integrity, and GDPR compliance."
  },
  {
    q: "How long does a Zoho implementation take?",
    a: "Most projects range from 4 to 12 weeks depending on complexity, number of applications, and integrations."
  },
  {
    q: "Do you provide training and long-term support?",
    a: "Absolutely. As an authorised partner, we provide comprehensive user training, onboarding assistance, and ongoing support services."
  },
  {
    q: "Can you integrate Zoho with our current systems?",
    a: "Yes. We offer complete Zoho integration services with ERP, accounting, e-commerce, telephony, and marketing platforms."
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
                UK Authorized Partner
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Zoho Authorized
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
                Looking for a dependable and officially recognised Zoho Authorized Partner in the UK to help you maximise your Zoho investment?
              </p>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                FI Digital is an officially authorised Zoho partner, recognised for our expertise, successful project delivery, and unwavering commitment to customer success.
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
                <img src="/images1/saas/classic01.png" alt="Zoho Authorized Partner UK" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* What it is Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic02.png" alt="What is a Zoho Authorized Partner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                What is a Zoho Authorized Partner?
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                A Zoho Authorized Partner is a service provider formally approved and certified by Zoho Corporation to deliver high-quality Zoho consulting, implementation, integration, and support services.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                {[
                    "Direct collaboration with Zoho Corp",
                    "Adherence to quality guidelines",
                    "Certified expertise",
                    "Proven track record",
                    "Customer success commitment"
                ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)" }}>
                        <CheckCircle2 size={18} style={{ color: "var(--primary)" }} />
                        {item}
                    </div>
                ))}
              </div>
              <p style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem", lineHeight: 1.6 }}>
                FI Digital is a Zoho Authorized Partner serving businesses across the UK. Our official partner status assures you that your Zoho project is in capable and trusted hands.
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
              Our Authorized Partner Services
            </h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
              As your official Zoho Authorized Partner in the UK, FI Digital offers a full spectrum of Zoho services.
            </p>
          </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2.5rem"
          }}>
            {authorizedUkServices.map((svc, i) => (
              <div key={i} style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "24px",
                padding: "2.5rem",
                transition: "all 0.3s ease",
                boxShadow: "var(--card-shadow)",
              }}>
                <div style={{ color: "var(--primary)", marginBottom: "1.5rem" }}>
                    {svc.icon}
                </div>
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

      {/* Why Work Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "flex-start" }}>
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Why Work with an Authorized Partner?</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
                Partnering with a certified Zoho Authorized Partner in the UK ensures technical excellence and long-term value:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { t: "Certified Zoho Expertise", d: "Officially trained and certified consultants handle your implementation." },
                  { t: "Data Security & Compliance", d: "GDPR-compliant solutions with strict data protection measures." },
                  { t: "Direct Access to Support", d: "Priority access to Zoho's corporate technical teams." },
                  { t: "End-to-End Service", d: "From strategy and implementation to training and managed support." },
                  { t: "Long-Term Partnership", d: "Ongoing investment in your success beyond initial implementation." }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ color: "var(--primary)", marginTop: "4px" }}><CheckCircle2 size={24} /></div>
                    <div>
                      <div style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem" }}>{item.t}</div>
                      <div style={{ color: "var(--text-muted)" }}>{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ background: "rgba(30, 58, 138, 1)", padding: "3.5rem", borderRadius: "40px", color: "white", boxShadow: "0 25px 50px -12px rgba(30, 58, 138, 0.4)" }}>
                <h3 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "2rem" }}>Industries We Serve</h3>
                <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {[
                        "Financial Services & Mortgage Broking",
                        "Retail & E-commerce",
                        "Manufacturing & Distribution",
                        "Professional Services & Consulting",
                        "Healthcare & Wellness",
                        "Education & Training",
                        "IT & SaaS Providers"
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "center", fontSize: "1.1rem", fontWeight: 600 }}>
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)" }} />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--text)" }}>Success Stories</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
                {successStories.map((story, i) => (
                    <div key={i} style={{ background: "var(--card-bg)", padding: "3rem", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                        <h4 style={{ fontWeight: 900, fontSize: "1.3rem", color: "var(--text)", marginBottom: "1rem" }}>{story.title}</h4>
                        <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1rem", lineHeight: 1.6 }}>{story.content}</p>
                        <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "1.1rem" }}>{story.result}</div>
                    </div>
                ))}
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
              FAQ – Zoho Authorized Partner UK
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
            Ready to Work with an Official Partner?
          </h2>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", marginBottom: "3.5rem", lineHeight: 1.7, maxWidth: "850px", margin: "0 auto 3.5rem" }}>
            Make the most of your Zoho investment with FI Digital—your certified and trusted Zoho Authorized Partner in the UK. Whether you need implementation, optimisation, or support, we are ready to help.
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
            Request Your Free Consultation Today <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
}
