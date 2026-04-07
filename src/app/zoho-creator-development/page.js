import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, BarChart3, Database, PieChart, ShieldCheck, TrendingUp, ChevronDown, CheckCircle2, Layout, Settings, Users, Layers, Repeat, Shield, Monitor, Smartphone, Code } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const creatorServices = [
  {
    title: "Requirement Analysis & App Design",
    content: "We start by understanding your business challenges and defining exactly how your custom Zoho Creator application can address your unique needs.",
    icon: <Database size={24} />
  },
  {
    title: "Zoho Creator App Build",
    content: "Our certified developers utilise Zoho Creator’s intuitive drag-and-drop functionality, combined with advanced Deluge scripting, to build robust, scalable business apps rapidly.",
    icon: <Code size={24} />
  },
  {
    title: "Integration with Existing Systems",
    content: "We integrate your custom Zoho Creator apps seamlessly with other systems—including Zoho CRM, ERP software, accounting tools, or third-party applications—ensuring optimal data flow and user experience.",
    icon: <Repeat size={24} />
  },
  {
    title: "Testing & Deployment",
    content: "Every app undergoes thorough testing for usability, performance, and reliability before deployment, guaranteeing a smooth, trouble-free launch.",
    icon: <ShieldCheck size={24} />
  },
  {
    title: "User Training & Ongoing Support",
    content: "Post-deployment, we provide detailed user training sessions, documentation, and continuous support to ensure your teams are comfortable, productive, and confident with your new Zoho Creator app.",
    icon: <Users size={24} />
  }
];

const faqs = [
  {
    q: "Do I need coding knowledge to manage a Zoho Creator app after it’s built?",
    a: "No, Zoho Creator is user-friendly and designed for easy administration. FI Digital handles complex coding, allowing you to easily manage and update applications with minimal technical skills."
  },
  {
    q: "Can Zoho Creator apps integrate with other Zoho or third-party apps?",
    a: "Absolutely. Zoho Creator apps integrate seamlessly with the entire Zoho Suite (CRM, Books, Desk, etc.) and many third-party applications via APIs and connectors, ensuring comprehensive business automation."
  },
  {
    q: "How long does it take to develop a Zoho Creator app?",
    a: "Typically, Zoho Creator apps can be developed within 2-6 weeks, depending on complexity, integrations, and custom features. Our low-code approach ensures rapid deployment without sacrificing quality."
  }
];

export default function ZohoCreatorDevelopmentPage() {
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
            src="/images1/software-development.jpg"
            alt="Zoho Creator Development Background"
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
                Low-Code Solutions
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Zoho Creator <span style={{ color: "var(--primary)" }}>Development Services</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Looking for powerful, custom business apps built quickly? FI Digital provide expert Zoho Creator development in the UK, enabling rapid innovation and bespoke automation.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                As certified developers, we specialise in designing tailored business applications, fully integrated into your existing technology ecosystem for peak performance.
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

      {/* Custom Apps Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/creator3.png" alt="Custom Zoho Creator Apps" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Custom Applications Built on Zoho Creator
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Zoho Creator is a robust low-code platform that empowers businesses to create custom software solutions without the complexity of traditional methods.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 700, marginBottom: "1.5rem" }}>
                At FI Digital, our low-code developers build tailored applications for every departmental need:
              </p>
              <ul style={{ display: "grid", gap: "1rem" }}>
                {[
                  "Custom CRM extensions and enhancements.",
                  "Bespoke inventory and order management systems.",
                  "Employee onboarding and automated HR apps.",
                  "Field service scheduling and technician management.",
                  "Internal operations dashboards and project portals."
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

      {/* Services Grid */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
               Our Creator Development Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
              Comprehensive Zoho Creator development services guiding you from initial concept to deployment and long-term optimisation.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {creatorServices.map((svc, i) => (
              <div key={i} style={{ padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInUp">
                <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(79, 70, 229, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: "1.5rem" }}>
                   {svc.icon}
                </div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>{svc.title}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>{svc.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Content */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Low-Code, High Impact
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { t: "Rapid Development", d: "Apps are developed in weeks, not months, dramatically reducing timelines." },
                  { t: "Cost Efficiency", d: "Significantly lower development costs compared to traditional coding methods." },
                  { t: "Highly Customisable", d: "Easily adapt applications as your business evolves and scales." },
                  { t: "Seamless Integration", d: "Connect effortlessly to CRM, Books, and third-party organizational tools." }
                ].map((benefit, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ color: "var(--primary)", marginTop: "4px" }}><CheckCircle2 size={24} /></div>
                    <div>
                      <div style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem" }}>{benefit.t}</div>
                      <div style={{ color: "var(--text-muted)" }}>{benefit.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "var(--card-bg)", padding: "3rem", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "2rem" }}>Success Roadmap</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <div style={{ borderLeft: "4px solid var(--primary)", paddingLeft: "1.5rem" }}>
                        <h4 style={{ fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>Retail Order Management</h4>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Integrated order-tracking with Zoho Books, reducing errors by 40% for UK retailers.</p>
                    </div>
                    <div style={{ borderLeft: "4px solid var(--primary)", paddingLeft: "1.5rem" }}>
                        <h4 style={{ fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>Field Service Scheduling</h4>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Built a robust job-tracking application increasing UK field team productivity by 30%.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "3rem", textAlign: "center" }}>
            FAQ – Creator Development
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

      {/* Improved Final CTA Section (Matching Integration Partner Style) */}
      <section style={{ padding: "120px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <h2 style={{ 
            fontSize: "clamp(2.1rem, 4.5vw, 3.5rem)", 
            fontWeight: 950, 
            marginBottom: "2.5rem", 
            lineHeight: 1.1,
            color: "white"
          }}>
             Next Steps – Start Building Your Custom Zoho Creator App
          </h2>
          <p style={{ 
            fontSize: "1.25rem", 
            color: "rgba(255,255,255,0.9)", 
            marginBottom: "4rem", 
            lineHeight: 1.7, 
            maxWidth: "850px", 
            margin: "0 auto 4rem" 
          }}>
             Ready to streamline your business with powerful custom apps? Get in touch with our expert UK development team today to discuss your requirements.
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
            Request Your Free Consultation <ArrowRight size={20} />
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
