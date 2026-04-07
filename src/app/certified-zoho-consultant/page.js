import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Users, Layers, Zap, Headphones, BarChart3, Repeat, Code, Server, Heart, Image as ImageIcon } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const consultantServices = [
  {
    title: "Zoho CRM Consulting",
    content: "Optimise your customer relationships and sales processes with tailored Zoho CRM consulting. Our certified consultants expertly configure CRM to your precise business needs.",
    icon: <Server size={24} />
  },
  {
    title: "Zoho Creator App Development",
    content: "Leverage powerful custom applications developed using Zoho Creator’s low-code platform. We design, build, and deploy custom business apps for any unique operational need.",
    icon: <Code size={24} />
  },
  {
    title: "Zoho Desk Implementation",
    content: "Transform your customer service operations with expert Zoho Desk consulting. Our consultants strategically implement Desk, ensuring optimal workflow automation and response times.",
    icon: <Headphones size={24} />
  },
  {
    title: "Zoho Marketing Automation",
    content: "Maximise your marketing ROI with tailored Zoho Marketing Automation and Zoho Campaigns consulting. Our expert consultants guide you through strategic campaign design.",
    icon: <Zap size={24} />
  },
  {
    title: "Zoho Analytics & BI",
    content: "Harness powerful business intelligence and analytics solutions with Zoho Analytics. We deploy customised analytics solutions and data visualisation dashboards for smarter decisions.",
    icon: <BarChart3 size={24} />
  },
  {
    title: "Zoho One Strategic Consulting",
    content: "Streamline your entire business operations with expert Zoho One consulting. We deliver structured, phased implementations, integrating over 50 Zoho applications seamlessly.",
    icon: <Layers size={24} />
  },
  {
    title: "Zoho Integration Consulting",
    content: "Our consultants connect Zoho products with existing third-party systems, ERP platforms, and accounting software. We ensure seamless data flow and enhanced collaboration.",
    icon: <Repeat size={24} />
  },
  {
    title: "Zoho Managed Services",
    content: "Receive dedicated ongoing support from our certified Zoho consultants. Our proactive approach ensures your Zoho environment remains secure, optimised, and reliable.",
    icon: <Heart size={24} />
  }
];

const reasonsToTrust = [
  "Proven Zoho Expertise: Officially certified by Zoho, ensuring high-quality, strategic implementation and optimisation.",
  "Local UK Focus & Compliance: Deep understanding of UK business dynamics and regulatory compliance (GDPR).",
  "Customised Business Solutions: Every solution is strategically designed around your specific operational processes.",
  "Comprehensive Service: From initial consultation to implementation, training, and ongoing technical support.",
  "Rapid Immediate Value: Proven methodologies ensure quick adoption and immediate tactical productivity gains."
];

const successStories = [
  {
    title: "UK Financial Org",
    content: "Implemented advanced Zoho CRM and Analytics, leading to 40% improvement in sales efficiency and more accurate forecasting."
  },
  {
    title: "Regional Retail Group",
    content: "Delivered Zoho Marketing Automation integrated with CRM, doubling lead generation and boosting conversion rates significantly."
  },
  {
    title: "Professional Services Firm",
    content: "Implemented Zoho One, streamlining processes across finance, HR, and sales, achieving substantial operational cost savings."
  }
];

const faqItems = [
  {
    q: "How quickly can a Certified Zoho Consultant implement our solution?",
    a: "Implementation timelines typically range from 2–8 weeks, depending on complexity, data migration needs, and integration requirements."
  },
  {
    q: "Can you help us optimise an existing Zoho implementation?",
    a: "Yes. Our consultants specialise in optimising existing Zoho environments, conducting thorough audits, and providing strategic performance recommendations."
  }
];

export default function CertifiedZohoConsultantPage() {
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
            src="/images1/talking-about-business-2026-03-09-03-22-27-utc.jpg"
            alt="Certified Zoho Consultant Background"
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
                Certified Zoho Expert UK
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Certified Zoho <span style={{ color: "var(--primary)" }}>Consultant in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Looking for an expert Certified Zoho Consultant in the UK to guide your business through successful software adoption and strategic implementation?
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                FI Digital is your trusted UK-based Zoho Consultant, offering deep expertise and comprehensive implementation services across Zoho’s powerful suite.
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

      {/* Definition Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/Business2.jpg" alt="Certified Expert Advantage" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                What is a Certified Zoho Consultant?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                A Certified Zoho Consultant is officially recognised by Zoho Corporation for demonstrating tactical expertise in implementing, integrating, and optimising Zoho’s applications.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                FI Digital’s consultants have completed rigorous technical audits and real-world projects, enabling us to deliver outstanding results for complex UK enterprises.
              </p>
              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary)", borderLeft: "4px solid var(--primary)", paddingLeft: "1.5rem" }}>
                Our certified status ensures you receive proven methodologies and strategic advice tailored to your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
                Comprehensive Consulting Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
                Extensive services covering all major Zoho products for tactical UK growth.
            </p>
          </div>
          <div className="feature-grid">
            {consultantServices.map((svc, i) => (
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

      {/* Trust Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Why Trust Our Certified Experts?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                We provide high-fidelity business advantages for accelerated operational ROI:
              </p>
              <div style={{ display: "grid", gap: "1.25rem" }}>
                {reasonsToTrust.map((reason, i) => (
                    <div key={i} style={{ display: "flex", gap: "1.25rem", background: "var(--card-bg)", padding: "1.25rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
                        <div style={{ marginTop: "4px" }}><CheckCircle2 size={18} className="text-primary" /></div>
                        <span style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>
                          <b>{reason.split(':')[0]}:</b>{reason.split(':')[1]}
                        </span>
                    </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <Image src="/images1/1 - Business meeting.jpg" alt="Partner Tactical Meeting" width={600} height={700} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section (Aligned Properly) */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Consultant Success Stories
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
              High-impact digital transformations delivered for leading UK enterprises.
            </p>
          </div>
          <div className="feature-grid">
            {successStories.map((story, i) => (
              <div key={i} style={{ background: "rgba(30, 58, 138, 1)", padding: "3rem", borderRadius: "32px", color: "white", boxShadow: "0 25px 50px -12px rgba(30, 58, 138, 0.4)" }} className="wow animate__animated animate__fadeInUp">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", fontWeight: 800, textTransform: "uppercase" }}>
                  <ImageIcon size={18} /> UK SUCCESS STORY
                </div>
                <h4 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.25rem" }}>{story.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.7 }}>{story.content}</p>
                <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: "0.75rem", fontWeight: 700 }}>
                  Case study details <ArrowRight size={18} />
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
            FAQ – Consultant Services
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
             Ready to Work with a Certified Zoho Expert?
          </h2>
          <p style={{ 
            fontSize: "1.25rem", 
            color: "rgba(255,255,255,0.9)", 
            marginBottom: "4rem", 
            lineHeight: 1.7, 
            maxWidth: "850px", 
            margin: "0 auto 4rem" 
          }}>
             Maximise your business efficiency, productivity, and profitability with strategic guidance from FI Digital’s certified team.
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
            Request Your Free Consultation Today <ArrowRight size={20} />
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
