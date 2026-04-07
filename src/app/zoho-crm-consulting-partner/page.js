import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
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

export default function ZohoCrmConsultingPartnerPage() {
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
            src="/images1/Business3.jpg"
            alt="Zoho CRM Consulting Background"
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
                Zoho CRM Consulting <span style={{ color: "var(--primary)" }}>Partner in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Are you ready to transform your sales processes, streamline customer interactions, and accelerate business growth with Zoho CRM? FI Digital is your trusted Zoho CRM Consulting Partner in the UK.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                With years of expertise, we empower UK businesses to harness the full potential of Zoho CRM, driving sales efficiency, enhancing relationships, and unlocking growth opportunities.
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

      {/* Why Essential Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/Business2.jpg" alt="Why Zoho CRM is Essential" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                What Makes Zoho CRM Essential for UK Businesses?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Zoho CRM is an industry-leading solution trusted by thousands of UK companies. It provides powerful automation, intuitive design, and advanced analytics for seamless growth.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 700, marginBottom: "1.5rem" }}>
                However, unlocking its full potential requires expert strategic implementation. As a certified partner, FI Digital ensures your deployment perfectly aligns with your unique business goals.
              </p>
              <ul style={{ display: "grid", gap: "1rem" }}>
                {[
                  "Industry-leading customer relationship management solution.",
                  "Powerful automation and intuitive interface design.",
                  "Advanced analytics and seamless third-party integrations.",
                  "Alignment with UK-specific sales processes and market context.",
                  "Scalable architecture to grow with your business needs."
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", fontSize: "1.05rem" }}>
                    <div style={{ marginTop: "6px" }}><ArrowRight size={18} className="text-primary" /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services Grid */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Our Zoho CRM Consulting Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
              FI Digital offers comprehensive Zoho CRM consulting services tailored specifically to UK business needs, delivering measurable strategic outcomes.
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

      {/* Key Benefits Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Key Benefits of Expert Zoho CRM Consulting
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                CRM automation and custom workflows drastically reduce manual tasks, allowing your sales teams to focus more on closing deals and building relationships.
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  { title: "Enhanced Relationships", desc: "Gain deep insights into customer interactions and preferences." },
                  { title: "Strategic Decision-making", desc: "Instantly spot opportunities and risks with dynamic visualisations." },
                  { title: "Faster Sales Cycles", desc: "Optimise your sales pipeline management for increased conversion." },
                  { title: "Reduced Operational Costs", desc: "Eliminate manual errors and streamline processes across departments." }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ marginTop: "6px" }}><CheckCircle2 size={18} className="text-primary" /></div>
                    <div>
                      <strong style={{ color: "var(--text)" }}>{item.title}:</strong>
                      <span style={{ color: "var(--text-muted)", marginLeft: "0.5rem" }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <Image src="/images1/Partner3.jpg" alt="CRM Consulting Benefits" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Block */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ padding: "4rem", borderRadius: "30px", border: "1px solid var(--border)", background: "var(--card-bg)", boxShadow: "var(--card-shadow)", textAlign: "center" }} className="wow animate__animated animate__zoomIn">
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Zoho CRM Consulting Case Study
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              For a UK-based financial services firm, FI Digital&apos;s CRM consulting and implementation expertise led to tangible business improvements:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
              {[
                { label: "Pipeline Efficiency", value: "+35%" },
                { label: "Conversion Rate", value: "+30%" },
                { label: "Manual Task Reduction", value: "Significant" },
                { label: "Customer Satisfaction", value: "Enhanced" }
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--primary)", marginBottom: "0.5rem" }}>{stat.value}</div>
                  <div style={{ color: "var(--text)", fontWeight: 700, fontSize: "0.9rem", textTransform: "uppercase" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "3rem", textAlign: "center" }}>
            FAQ – Zoho CRM Consulting
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

      {/* Final CTA Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.5rem)", fontWeight: 950, marginBottom: "2rem", lineHeight: 1.1 }}>
            Ready to Maximise Your CRM Potential?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9, lineHeight: 1.7 }}>
            Discover how FI Digital, your expert Zoho CRM consulting partner in the UK, can help transform your sales and customer management processes.
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
