import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Users, Layers, Zap, Headphones, BarChart3, Repeat, Code, Briefcase, Mail, Monitor, Smartphone, Settings } from "lucide-react";
import { metadata as pageMetadata } from './meta';

export const metadata = pageMetadata;

const coreOfferedServices = [
  {
    title: "Zoho Licence Procurement & Advisory",
    content: "As an authorised Zoho reseller, we help you select the right applications and licence plans tailored exactly to your business needs.",
    icon: <Briefcase size={24} />
  },
  {
    title: "Business Process Mapping",
    content: "Our consultants assess your current processes, identify efficiency gaps, and map them to the most relevant Zoho software applications.",
    icon: <Repeat size={24} />
  },
  {
    title: "Solution Architecture & Planning",
    content: "We design a scalable, secure, and efficient Zoho software ecosystem tailored to your operational and strategic goals.",
    icon: <Layers size={24} />
  },
  {
    title: "Zoho Software Implementation",
    content: "End-to-end configuration of Zoho CRM, One, Creator, Desk, Books, People, Campaigns, and Analytics for your business.",
    icon: <Settings size={24} />
  },
  {
    title: "System Integration",
    content: "We integrate Zoho with your existing ERP, accounting, e-commerce, telephony, and marketing platforms for a unified experience.",
    icon: <Repeat size={24} />
  },
  {
    title: "Data Migration & Validation",
    content: "We ensure secure, accurate, and GDPR-compliant data migration from your legacy systems to your new Zoho environment.",
    icon: <Shield size={24} />
  }
];

const faqs = [
  {
    q: "What is the role of a Zoho Software Partner?",
    a: "A Zoho Software Partner helps businesses select, implement, integrate, and manage Zoho applications efficiently and securely."
  },
  {
    q: "Can you help us choose the right Zoho software?",
    a: "Yes. We provide advisory sessions to assess your needs and recommend the best Zoho products and licence plans."
  },
  {
    q: "Do you provide Zoho software licences?",
    a: "Yes. We are an authorised Zoho reseller and can provide licences with local billing and invoicing."
  },
  {
    q: "How long does a typical Zoho software implementation take?",
    a: "Most implementations range from 4 to 12 weeks, depending on complexity and number of applications."
  },
  {
    q: "Do you offer long-term support?",
    a: "Yes. Our managed services include ongoing technical support, system maintenance, and feature enhancements."
  }
];

export default function Page() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 4rem; align-items: center; }
        .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; }
        .advantage-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: flex-start; }
        .cta-container { padding: 4rem 2rem; border-radius: 40px; }
        .bullet-list { list-style: disc; padding-left: 1.5rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 1rem; }
        
        @media (max-width: 1024px) {
          .hero-grid, .advantage-grid { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
          .hero-content { display: flex; flex-direction: column; align-items: center; }
          .advantage-content { display: flex; flex-direction: column; align-items: center; }
          .bullet-list { text-align: left; }
        }
        
        @media (max-width: 640px) {
          .feature-grid { grid-template-columns: 1fr; }
          .cta-container { padding: 3rem 1.5rem; }
          .hero-title { font-size: 2.2rem !important; }
        }
      `}} />

      {/* Hero Section */}
      <section style={{
        position: "relative",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(120px, 15vh, 140px) 1.5rem 80px",
        background: "var(--bg)",
        overflow: "hidden",
      }}>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1250px", margin: "0 auto", width: "100%" }}>
          <div className="hero-grid">
            <div className="hero-content text-left">
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.75rem",
                padding: "0.6rem 1.2rem", background: "rgba(29, 78, 216, 0.1)",
                borderRadius: "100px", border: "1px solid rgba(29, 78, 216, 0.2)",
                marginBottom: "2rem", color: "#1d4ed8", fontSize: "0.85rem",
                fontWeight: 700, letterSpacing: "0.01em", textTransform: "uppercase"
              }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1d4ed8", boxShadow: "0 0 10px #1d4ed8" }} />
                End-to-End Solutions
              </div>
              <h1 className="hero-title" style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Zoho Software
                <br />
                <span style={{ color: "#1d4ed8" }}>Partners in the UK</span>
              </h1>
              <p style={{
                fontSize: "1.2rem",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "650px",
              }}>
                Are you looking for a reliable, experienced, and certified Zoho Software Partner in the UK who can help you adopt, implement, and manage the entire Zoho ecosystem?
              </p>
              <p style={{
                fontSize: "1.1rem",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "650px",
              }}>
                FI Digital provides complete Zoho solutions—from licensing and consulting to implementation, integration, and long-term support for businesses of all sizes.
              </p>
              <Link href="/contact" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2.5rem",
                background: "#1d4ed8",
                color: "white",
                fontWeight: 700,
                fontSize: "1rem",
                borderRadius: "14px",
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(29, 78, 216, 0.3)",
              }}>
                Get Started Today! <ArrowRight size={18} />
              </Link>
            </div>
            <div style={{ position: "relative" }}>
                 <img src="/images1/saas/classic01.png" alt="Zoho Software Partners" style={{ width: "100%", height: "auto", borderRadius: "30px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Work Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="hero-grid" style={{ direction: "rtl" }}>
            <div style={{ direction: "ltr", position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic02.png" alt="Ecosystem" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ direction: "ltr" }} className="hero-content">
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                Why Work with a Zoho Software Partner?
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                Zoho offers over 50+ integrated software applications covering Sales, Finance, HR, Marketing, Operations, and Analytics.
              </p>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                Implementing and managing such a vast ecosystem requires expertise and a structured approach. That’s where FI Digital adds value as a certified partner.
              </p>
              <ul className="bullet-list">
                <li><b>Sales & CRM</b> platforms for lead management.</li>
                <li><b>Finance & Accounting</b> fully compliant with UK regs.</li>
                <li><b>HR & People Management</b> for employee lifecycles.</li>
                <li><b>Marketing Automation</b> & Custom Low-Code Apps.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text)" }}>
                What We Offer
            </h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "1rem auto" }}>
                We provide end-to-end Zoho software services for UK businesses:
            </p>
          </div>
          
          <div className="feature-grid">
            {coreOfferedServices.map((svc, i) => (
                <div key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "2.5rem", boxShadow: "var(--card-shadow)" }}>
                    <div style={{ color: "#1d4ed8", marginBottom: "1.5rem" }}>{svc.icon}</div>
                    <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.25rem" }}>{svc.title}</h4>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>{svc.content}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FI Digital Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="hero-grid">
            <div style={{ position: "relative" }}>
                 <img src="/images1/saas/corporate2.jpg" alt="Leadership" style={{ width: "100%", borderRadius: "30px", boxShadow: "var(--card-shadow)" }} />
            </div>
            <div className="hero-content">
              <h3 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Why FI Digital?</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>UK businesses trust us for our local market knowledge and certified expertise:</p>
              <ul className="bullet-list">
                <li><b>Officially recognised</b> Zoho Software Partner status.</li>
                <li><b>Certified consultants</b> & developers in the UK.</li>
                <li><b>Industry-specific experience</b> across diverse sectors.</li>
                <li><b>Long-term strategic partnership</b> approach.</li>
                <li><b>Data security</b> & GDPR-compliant implementations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Industries */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="hero-grid" style={{ direction: "rtl" }}>
             <div style={{ direction: "ltr" }}>
                <div style={{ background: "#1d4ed8", padding: "3rem", borderRadius: "30px", color: "white" }}>
                    <h4 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "2rem" }}>Industries We Serve</h4>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {[ 
                            "Financial Services & Mortgage Broking",
                            "Retail & E-commerce",
                            "Manufacturing & Distribution",
                            "Professional Services & Consulting",
                            "Healthcare & Wellness",
                            "Education & Training",
                            "IT & SaaS Providers"
                        ].map((item, i) => (
                            <li key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", fontWeight: 600 }}>
                                <CheckCircle2 size={20} /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div style={{ direction: "ltr" }} className="hero-content">
              <h3 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Key Benefits</h3>
              <ul className="bullet-list">
                <li><b>Single-point-of-contact</b> for all software needs.</li>
                <li><b>Seamless implementation</b> & integration flows.</li>
                <li><b>Reduced operational costs</b> through consolidation.</li>
                <li><b>Future-ready</b>, scalable software ecosystem.</li>
                <li><b>Improved customer experience</b> & productivity.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: 800, marginBottom: "4rem" }}>Success Stories</h2>
          <div className="feature-grid">
            {[
                { t: "Retail Chain – London", c: "Implemented Zoho One for CRM, Finance, HR, and Support across locations.", r: "Impact: Reduced licensing costs by 35% and improved visibility." },
                { t: "Professional Services – Manchester", c: "Deployed CRM, Books, People, and Analytics in a single engagement.", r: "Result: Improved client onboarding and operational efficiency." },
                { t: "Healthcare Group – Midlands", c: "Built custom applications on Zoho Creator integrated with Desk and CRM.", r: "Outcome: Enhanced patient service delivery and reduced workload." }
            ].map((story, i) => (
                <div key={i} style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "30px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                    <h5 style={{ fontSize: "1.3rem", fontWeight: 900, color: "#1d4ed8", marginBottom: "1rem" }}>{story.t}</h5>
                    <p style={{ color: "var(--text)", marginBottom: "1rem", fontSize: "0.95rem" }}>{story.c}</p>
                    <div style={{ fontWeight: 800, color: "var(--text-muted)", fontSize: "0.9rem" }}>{story.r}</div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: 800, marginBottom: "4rem" }}>FAQ – Zoho Software Partners</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "20px", overflow: "hidden", cursor: "pointer" }}>
                <summary style={{ padding: "1.5rem", fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", display: "flex", justifyContent: "space-between", alignItems: "center", listStyle: "none" }}>
                  {faq.q}
                  <ChevronDown size={20} style={{ color: "#1d4ed8" }} />
                </summary>
                <div style={{ padding: "0 1.5rem 1.5rem", color: "var(--text-muted)", lineHeight: 1.8 }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)", display: "flex", justifyContent: "center" }}>
        <div className="cta-container" style={{ maxWidth: "1100px", width: "100%", background: "#1d4ed8", textAlign: "center", color: "white", boxShadow: "0 25px 50px -12px rgba(29, 78, 216, 0.5)" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Ready to Empower Your Business with Zoho Software?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", marginBottom: "3rem", maxWidth: "850px", margin: "0 auto 3rem" }}>
            Partner with FI Digital—your certified, trusted Zoho Software Partner in the UK—and streamline your operations with Zoho’s powerful suite of applications.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1.1rem 3rem",
            background: "white",
            color: "#1d4ed8",
            fontWeight: 800,
            fontSize: "1.1rem",
            borderRadius: "15px",
            textDecoration: "none",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
          }}>
            Request Your Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
