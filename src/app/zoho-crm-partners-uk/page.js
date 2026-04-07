import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
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

export default function ZohoCrmPartnersUkPage() {
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
            src="/images1/Partner1.jpg"
            alt="Zoho CRM Partners UK Background"
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
                Nurture & Convert
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Zoho CRM Partners <span style={{ color: "var(--primary)" }}>in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Looking to implement, optimise, or upgrade Zoho CRM? Choosing the right Zoho CRM Partner in the UK is critical to ensuring successful deployment and maximum ROI.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                FI Digital is a trusted, certified partner helping businesses tailored solutions precisely for sustainable sales operations and growth.
              </p>
              <Link href="/contact" style={{
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

      {/* Why Experts Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/Partner2.jpg" alt="CRM Experts" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Why Partner with Zoho CRM Experts?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Zoho CRM is a powerful platform, but achieving full benefits demands expert configuration and seamless integration.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 700, marginBottom: "1.5rem" }}>
                As a certified partner, FI Digital bridges the gap between software and strategy for UK companies:
              </p>
              <ul style={{ display: "grid", gap: "1rem" }}>
                {[
                  "Strategic CRM consulting tailored to your unique goals.",
                  "Custom CRM configuration for your specific industry.",
                  "Seamless integration with your existing technology stack.",
                  "Comprehensive user training to drive adoption.",
                  "Ongoing optimisation and managed CRM services."
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", fontSize: "1.05rem" }}>
                    <div style={{ marginTop: "6px" }}><CheckCircle2 size={18} className="text-primary" /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Our Zoho CRM Partner Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
              A complete range of Zoho CRM services designed to help UK businesses implement, optimise, and scale operations.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {services.map((svc, i) => (
              <div key={i} style={{ padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInUp">
                <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(79, 70, 229, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: "1.5rem" }}>
                   {svc.icon}
                </div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>{svc.title}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Block Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Benefits of Working with a Partner
              </h2>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  { t: "Certified CRM Experts", d: "Officially certified by Zoho for best-practice implementation and support." },
                  { t: "UK Support & Compliance", d: "Deeply familiar with UK business environments and GDPR requirements." },
                  { t: "Tailored CRM Solutions", d: "Deployment customized for your unique industry and growth objectives." },
                  { t: "Faster Implementation", d: "Rapid deployment and quick user adoption for immediate ROI and impact." }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ marginTop: "6px" }}><CheckCircle2 size={18} className="text-primary" /></div>
                    <div>
                      <strong style={{ color: "var(--text)" }}>{item.t}:</strong>
                      <span style={{ color: "var(--text-muted)", marginLeft: "0.5rem" }}>{item.d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <Image src="/images1/partner3.jpg" alt="Zoho Partner Benefits" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem" }}>
            <div style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
              <h3 style={{ fontSize: "1.5rem", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>Success Stories</h3>
              <div style={{ display: "grid", gap: "1.25rem" }}>
                {[
                  { t: "Professional Services", d: "40% improvement in lead conversion via automated workflows." },
                  { t: "Retail & E-commerce", d: "25% increase in repeat sales through integrated platforms." },
                  { t: "Financial Services", d: "Enhanced forecasting accuracy and streamlined lead management." }
                ].map((story, i) => (
                  <div key={i}>
                    <div style={{ color: "var(--primary)", fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.25rem" }}>{story.t}</div>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{story.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
              <h3 style={{ fontSize: "1.5rem", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>Industries We Serve</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  "Financial Services", "Mortgage Broking", "Professional Services", "Consulting",
                  "Retail & E-commerce", "Manufacturing", "Healthcare", "Education", "IT & SaaS"
                ].map((ind, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                    <CheckCircle2 size={16} className="text-primary" /> {ind}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "3rem", textAlign: "center" }}>
            FAQ – Zoho CRM Partner Services
          </h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ background: "var(--card-bg)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border)", cursor: "pointer" }}>
                <summary style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.q}
                  <ChevronDown size={20} className="text-primary" />
                </summary>
                <p style={{ marginTop: "1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.5rem)", fontWeight: 950, marginBottom: "2rem", lineHeight: 1.1 }}>
            Ready to Transform Your Sales Operations?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9, lineHeight: 1.7 }}>
            Maximise sales efficiency, improve engagement, and drive business growth with our trusted Zoho CRM experts in the UK.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "1.2rem 3.5rem",
            background: "white",
            color: "var(--primary)",
            fontWeight: 700,
            fontSize: "1.1rem",
            borderRadius: "16px",
            textDecoration: "none",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          }}>
            Schedule Your Free Consultation <ArrowRight size={20} />
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
