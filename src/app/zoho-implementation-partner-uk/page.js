import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
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
    content: "Our certified developers build custom low-code applications that solve specific departmental roadblocks, ensuring your Zoho ecosystem perfectly matches your unique business logic.",
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

export default function ZohoImplementationPartnerUkPage() {
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
          .hero-cta-button {
             margin: 0 auto;
          }
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
            src="/images1/App_Solu.jpg"
            alt="Zoho Implementation Background"
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
                UK Certified Partner
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Certified Zoho <span style={{ color: "var(--primary)" }}>Implementation Partner in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Is your business ready to adopt Zoho&apos;s powerful suite but unsure where to start? FI Digital is a trusted, certified partner specialising in seamless and scalable Zoho implementation.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                From small business CRM setups to enterprise Zoho One rollouts, we ensure your implementation is done right the first time—optimised for maximum efficiency and growth.
              </p>
              <Link href="/contact" className="hero-cta-button" style={{
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
      </section>

      {/* What is Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/Partner3.jpg" alt="What is a Zoho Implementation Partner" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                What is a Zoho Implementation Partner?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                A Zoho Implementation Partner is a specialist officially recognised to provide technical setup, data migration, and deployment of the Zoho ecosystem.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 700, marginBottom: "1.5rem" }}>
                Unlike generic consultants, an authorised FI Digital partner provides expertise prescribing the exact frameworks for your success:
              </p>
              <ul style={{ display: "grid", gap: "1rem" }}>
                {[
                  "In-depth, hands-on expertise in the 50+ Zoho application ecosystem.",
                  "Proven methodologies prescribed by Zoho Corporation.",
                  "Authorisation to liaise directly with Zoho's senior engineering support.",
                  "Specialised user training and long-term digital transformation support.",
                  "Efficient system audits and post-deployment optimisations."
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "1.5rem", color: "var(--text-muted)", fontSize: "1.05rem" }}>
                    <div style={{ marginTop: "6px" }}><CheckCircle2 size={18} className="text-primary" /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Our Implementation Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
              Comprehensive services tailored for successful, efficient, and reliable Zoho deployments across the UK.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {services.map((svc, i) => (
              <div key={i} style={{ padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInUp">
                <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.25rem" }}>{svc.title}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7 }}>{svc.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Need Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "start" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "2.2rem", fontWeight: 850, marginBottom: "2rem", color: "var(--text)" }}>Business Needs a Partner</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                While Zoho is known for its user-friendly interface, the true challenge lies in aligning complex applications with your unique business logic and growth trajectory.
              </p>
              <ul style={{ display: "grid", gap: "1rem" }}>
                {[
                  "Avoid common misconfiguration and data loss issues.",
                  "Ensures smooth migration from legacy systems like Salesforce or Excel.",
                  "Build custom automated workflows specific to your operations.",
                  "Ensure full GDPR compliance and data security protocols.",
                  "Integrate Zoho with your existing ERP, telephony, or social tools."
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", fontSize: "1.05rem", color: "var(--text)" }}>
                    <div style={{ color: "var(--primary)", marginTop: "3px" }}><CheckCircle2 size={20} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ background: "var(--card-bg)", padding: "3.5rem", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <h3 style={{ fontSize: "1.8rem", fontWeight: 850, color: "var(--text)", marginBottom: "2rem" }}>Why Choose FI Digital?</h3>
                <ul style={{ display: "grid", gap: "1.5rem" }}>
                    {[
                        "Officially Certified UK Implementation Partner",
                        "Deep experience across 20+ diverse industries",
                        "Reliable methodologies that ensure faster ROI",
                        "Transparent, flat-rate project ownership",
                        "Expertise in custom Zoho Creator development",
                        "Scalable support that grows with your team"
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

      {/* Stories Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 950, color: "var(--text)", marginBottom: "1.5rem" }}>Success Stories</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
                Discover how our UK implementation projects delivered measurable efficiency gains for organisations of all sizes.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
            {successStories.map((story, i) => (
              <div key={`story-${i}`} style={{ padding: "3rem", borderRadius: "32px", border: "1px solid var(--border)", background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInUp">
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--primary)", marginBottom: "1.25rem" }}>{story.title}</h3>
                <p style={{ color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.7, fontSize: "1.05rem" }}>{story.desc}</p>
                <div style={{ background: "rgba(79, 70, 229, 0.05)", padding: "1.25rem", borderRadius: "16px", borderLeft: "4px solid var(--primary)" }}>
                  <p style={{ color: "var(--text)", fontWeight: 700, fontSize: "1rem" }}>{story.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "4rem", textAlign: "center" }}>
            FAQ – Implementation Support
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
          <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 950, marginBottom: "2.5rem", lineHeight: 1.2, color: "white" }}>
             Ready to Start Your Implementation Journey?
          </h2>
          <p style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.9)", marginBottom: "4rem", lineHeight: 1.7, maxWidth: "850px", margin: "0 auto 4rem" }}>
             Work with FI Digital—your certified UK Implementation Partner—to deploy Zoho correctly, efficiently, and with the strategic focus your business deserves.
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
            Request Your Free Consultation <ArrowRight size={22} />
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
