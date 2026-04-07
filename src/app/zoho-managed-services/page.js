import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Users, Layers, Zap, Headphones, BarChart3, Repeat, Code, Server, Heart } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const serviceFeatures = [
  {
    title: "User Management",
    content: "We take care of all administrative tasks in Zoho, including managing users, roles, permissions, and licenses for maximum tactical compliance.",
    icon: <Users size={24} />
  },
  {
    title: "Technical Support",
    content: "Our responsive support team is always ready to troubleshoot and resolve issues quickly. We act as your direct liaison with Zoho Corp.",
    icon: <Headphones size={24} />
  },
  {
    title: "System Maintenance",
    content: "FI Digital proactively maintains your Zoho environment, handling all security enhancements, configurations, and core platform audits.",
    icon: <Server size={24} />
  },
  {
    title: "Continuous Optimisation",
    content: "We continuously assess your Zoho apps for improvement, providing enhancements—such as new dashboards and workflow automations—to scale operations.",
    icon: <Zap size={24} />
  },
  {
    title: "Training & Adoption",
    content: "We provide regular training sessions and tactical documentation, ensuring both new and existing team members remain confident and productive.",
    icon: <Layers size={24} />
  }
];

const managedBenefits = [
  "Expert Guidance: Immediate access to certified experts ensures issues are resolved promptly.",
  "Cost Efficiency: Outsourcing management eliminates the need for internal admins.",
  "Proactive Support: We identify and address potential issues before they impact your business.",
  "Continuous Improvement: Regular optimisations ensure your applications deliver maximum value.",
  "Improved Productivity: Free your internal teams to focus on core strategic projects."
];

const faqItems = [
  {
    q: "Do I need a managed service if Zoho is cloud-based?",
    a: "While Zoho is reliable, expert management ensures your systems remain optimally configured and efficient—avoiding potential friction that could disrupt growth."
  },
  {
    q: "Can managed services cover the entire Zoho ecosystem?",
    a: "Absolutely. Our Zoho Managed Services cover CRM, Desk, Creator, Marketing Automation, Books, and more. You benefit from comprehensive, seamless support."
  }
];

export default function ZohoManagedServicesPage() {
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
        .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; }
        .bullet-list { list-style: disc; padding-left: 1.5rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 1rem; }
        @media (max-width: 1024px) {
          .bullet-list { text-align: left; }
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
            alt="Zoho Managed Services UK Background"
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
                Premium Managed Support
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Zoho Managed Services <span style={{ color: "var(--primary)" }}>& Support in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Are you looking for reliable, ongoing support to manage your Zoho applications and keep your business running smoothly without departmental friction?
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                FI Digital offers comprehensive Zoho Managed Services tailored for UK enterprises. We handle administration, technical troubleshooting, and continuous tactical optimisation.
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

      {/* Services Grid Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
                What’s Included in Our Managed Services?
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
                Comprehensive support to ensure your Zoho applications perform at high-fidelity levels.
            </p>
          </div>
          <div className="feature-grid">
            {serviceFeatures.map((svc, i) => (
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

      {/* Benefits Content Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/6 - Business meeting.jpg" alt="Managed Service Success" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                The Managed Service Advantage
              </h2>
              <ul style={{ display: "grid", gap: "1.25rem" }}>
                {managedBenefits.map((benefit, i) => (
                    <li key={i} style={{ display: "flex", gap: "1.25rem", background: "var(--bg-secondary)", padding: "1.25rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
                        <div style={{ marginTop: "4px" }}><CheckCircle2 size={18} className="text-primary" /></div>
                        <span style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>
                          <b>{benefit.split(':')[0]}:</b>{benefit.split(':')[1]}
                        </span>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Commitment Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "start" }}>
            <div className="wow animate__animated animate__fadeInLeft" style={{ background: "var(--card-bg)", padding: "3rem", borderRadius: "30px", border: "1px solid var(--border)" }}>
              <h3 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Flexible Support Packages</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>We understand that every UK business has unique needs and budget considerations:</p>
              <ul style={{ display: "grid", gap: "1.25rem" }}>
                {[
                  "Monthly Retainer Plans: Scalable options with predictable costs.",
                  "Hourly Support Bundles: Pay-as-you-go expert assistance.",
                  "24/7 Priority Emergency Support for critical operations."
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", fontWeight: 700, color: "var(--text)" }}>
                    <CheckCircle2 size={18} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "3rem", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border)" }}>
                 <Image src="/images1/Business3.jpg" alt="Flexible Packages Advantage" width={500} height={300} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
              </div>
            </div>
            
            <div style={{ background: "rgba(30, 58, 138, 1)", padding: "3.5rem", borderRadius: "40px", color: "white", boxShadow: "0 25px 50px -12px rgba(30, 58, 138, 0.4)" }} className="wow animate__animated animate__fadeInRight">
                <h3 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "2.5rem" }}>Why FI Digital?</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                    {[
                        { label: "Certified Expertise", val: "UK-based specialists with official certifications and regional trust." },
                        { label: "Rapid Response", val: "Urgent issues addressed quickly, typically within hours for UK timezones." },
                        { label: "Comprehensive Coverage", val: "Zero-friction support across CRM, Desk, One, Creator, and Books." }
                    ].map((stat, i) => (
                        <div key={i} style={{ borderLeft: "4px solid var(--primary)", paddingLeft: "1.5rem" }}>
                            <div style={{ fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.5rem" }}>{stat.label}</div>
                            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.5 }}>{stat.val}</div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "4rem", textAlign: "center" }}>
            FAQ – Managed Services
          </h2>
          <div style={{ display: "grid", gap: "1.25rem" }}>
            {faqItems.map((faq, i) => (
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
             Ready to Simplify Your Zoho Management?
          </h2>
          <p style={{ 
            fontSize: "1.25rem", 
            color: "rgba(255,255,255,0.9)", 
            marginBottom: "4rem", 
            lineHeight: 1.7, 
            maxWidth: "850px", 
            margin: "0 auto 4rem" 
          }}>
             Ensure your Zoho applications always deliver maximum value, performance, and reliability. Speak to our experts today.
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
