import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Users, Layers, Zap, Headphones, BarChart3, Repeat, Code, Briefcase, Mail, MapPin, Award, Link as LinkIcon, LifeBuoy } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const londonServices = [
  {
    title: "Zoho CRM Implementation",
    content: "We help you set up, customise, and optimise Zoho CRM to streamline your sales, lead management, and customer engagement processes.",
    icon: <Users size={24} />
  },
  {
    title: "Zoho One Rollout",
    content: "Strategically plan and implement Zoho One—an all-in-one suite of 50+ integrated apps—across your entire business operations.",
    icon: <Layers size={24} />
  },
  {
    title: "Zoho Creator App Development",
    content: "Digitise unique business workflows with custom situational apps built on Zoho Creator to automate and simplify complex operations.",
    icon: <Code size={24} />
  },
  {
    title: "Zoho Desk & Support Automation",
    content: "Improve customer service operations, reduce ticket resolution times, and enhance satisfaction with optimized Zoho Desk setups.",
    icon: <Headphones size={24} />
  },
  {
    title: "Zoho Analytics & BI",
    content: "Turn raw data into real business intelligence with custom dashboards and advanced reporting tailored to your specific London KPIs.",
    icon: <BarChart3 size={24} />
  },
  {
    title: "Zoho Integration Services",
    content: "Connect Zoho with ERP, accounting, e-commerce, and marketing tools for seamless data flow across your entire tech stack.",
    icon: <Repeat size={24} />
  }
];

const coverageAreas = [
  "City of London", "Westminster", "Shoreditch", "Canary Wharf", "Camden",
  "Islington", "Southwark", "Chelsea & Kensington", "Croydon", "Richmond"
];

const faqs = [
  {
    q: "What does a Zoho Partner in London do?",
    a: "A Zoho Partner helps London businesses implement, integrate, and optimise Zoho applications with localized technical expertise and strategic consultation."
  },
  {
    q: "How long does a Zoho implementation take?",
    a: "Typically, a Zoho implementation project takes 4–12 weeks, depending on complexity, data volume, and the number of departmental integrations."
  }
];

export default function ZohoPartnerLondonPage() {
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
            src="/images1/software.jpg"
            alt="Zoho Partner London Background"
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
                Premium London Partner
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Trusted Zoho <span style={{ color: "var(--primary)" }}>Partner in London</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                If you’re looking for a reliable, certified, and experienced Zoho Partner in London to implement and support Zoho’s powerful suite—you’re in the right place.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                FI Digital is a leading Zoho Partner serving businesses across London and the South East. We offer comprehensive tactical consulting tailored to the capital's unique market.
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

      {/* Why Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/Service_testing.jpg" alt="London Digital Hub" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                The London Competitive Edge
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                London is one of the world's most competitive business hubs. Implementing Zoho effectively is more than software—it's strategic mastery.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 700, marginBottom: "1.5rem" }}>
                Working with FI Digital ensures your London organization receives the tactical depth required for rapid scale:
              </p>
              <ul style={{ display: "grid", gap: "1rem" }}>
                {[
                  "Strategic London Consultation for dynamic global markets.",
                  "Certified consultants with precise departmental logic mapping.",
                  "Zero-friction integration with existing enterprise tech stacks.",
                  "GDPR & Data Security mastery at every local touchpoint.",
                  "Long-term tactical support to maintain your competitive edge."
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
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Our London Partner Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
              We build Zoho-powered business ecosystems designed for maximum operational efficiency.
            </p>
          </div>
          <div className="feature-grid">
            {londonServices.map((svc, i) => (
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

      {/* Combined Coverage & Success Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "start" }}>
            <div className="wow animate__animated animate__fadeInLeft" style={{ background: "var(--card-bg)", padding: "3rem", borderRadius: "30px", border: "1px solid var(--border)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                <MapPin size={32} style={{ color: "var(--primary)" }} />
                <h3 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--text)" }}>London Coverage</h3>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {coverageAreas.map((area, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 700, color: "var(--text)" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)" }} />
                        {area}
                    </div>
                ))}
              </div>
            </div>
            
            <div style={{ background: "rgba(30, 58, 138, 1)", padding: "3.5rem", borderRadius: "40px", color: "white", boxShadow: "0 25px 50px -12px rgba(30, 58, 138, 0.4)" }} className="wow animate__animated animate__fadeInRight">
                <h3 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "2.5rem" }}>London Success</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                    {[
                        { label: "Canary Wharf FinServ", val: "30% increase in lead conversion via CRM & Analytics dashboards." },
                        { label: "Oxford Street Retail", val: "Unified marketing & support under a single Zoho One hub." },
                        { label: "Shoreditch Creative", val: "Bespoke Creator app reduced administrative overhead by 50%." }
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
            FAQ – Partner London
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
             Ready to Transform Your London Business?
          </h2>
          <p style={{ 
            fontSize: "1.25rem", 
            color: "rgba(255,255,255,0.9)", 
            marginBottom: "4rem", 
            lineHeight: 1.7, 
            maxWidth: "850px", 
            margin: "0 auto 4rem" 
          }}>
             Partner with FI Digital—your premier Zoho Partner in London—and drive high-impact transformation today.
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
