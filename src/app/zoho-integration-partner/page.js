import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Users, Layers, Zap, Headphones, BarChart3, Repeat, Code, Server, Heart } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const integrationServices = [
  {
    title: "Integration Strategy",
    content: "Our UK-based consultants begin by thoroughly assessing your current systems, processes, and integration requirements for a cohesive digital strategy.",
    icon: <Server size={24} />
  },
  {
    title: "Zoho CRM Integration",
    content: "Integrate Zoho CRM with marketing automation, accounting/ERP, e-commerce, and telephony for a unified, 360-degree view of your customers.",
    icon: <Users size={24} />
  },
  {
    title: "Zoho Books & Finance",
    content: "Expertly integrate Zoho Books with UK accounting solutions like Xero, QuickBooks, or SAP to reduce manual entry and provide real-time insights.",
    icon: <BarChart3 size={24} />
  },
  {
    title: "Zoho Desk & Support",
    content: "Integrate Zoho Desk with CRM and telephony. Seamless integration ensures customer support teams have immediate access to vital customer history.",
    icon: <Headphones size={24} />
  },
  {
    title: "Zoho Creator Ecosystem",
    content: "Leverage Zoho Creator to integrate custom-built apps with existing databases or legacy APIs. We ensure all applications communicate effortlessly.",
    icon: <Code size={24} />
  },
  {
    title: "Zoho Analytics & BI",
    content: "Connect Zoho Analytics with your CRM and ERP. We create a unified BI environment enabling powerful visualisation and informed decision-making.",
    icon: <BarChart3 size={24} />
  }
];

const integrationBenefits = [
  "Enhanced Data Accuracy: Automated data flows eliminate manual entry errors across all systems.",
  "Significant Time Savings: Automated workflows substantially reduce time spent on repetitive tasks.",
  "Improved Operational Efficiency: Integrations streamline complex processes and reduce bottlenecks.",
  "Greater Visibility & Collaboration: Real-time data sharing enhances communication between teams.",
  "Reduced Costs: Automating routine tasks reduces operational costs and resource requirements."
];

const useCases = [
  {
    title: "E-commerce & CRM",
    content: "Integrated Zoho CRM with Shopify and Magento for automated order management and enhanced marketing efforts."
  },
  {
    title: "Financial Integration",
    content: "Connected Zoho Books with Xero and Sage, automating financial processes and providing real-time business health insights."
  },
  {
    title: "Telephony & Support",
    content: "Connected Zoho Desk with Twilio, empowering teams with instant customer histories and automated ticket creation."
  },
  {
    title: "Marketing Automation",
    content: "Connected Zoho Marketing Automation with Google Ads and HubSpot, automating lead nurturing and ROI tracking."
  }
];

const faqItems = [
  {
    q: "How long does Zoho integration typically take?",
    a: "Typical integration projects range from 2–6 weeks, depending on complexity and specific data requirements."
  },
  {
    q: "Can Zoho integrate with legacy systems?",
    a: "Absolutely. Zoho's versatile API capabilities enable effective integration with legacy applications and bespoke software."
  }
];

export default function ZohoIntegrationPartnerPage() {
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
            src="/images1/Partner1.jpg"
            alt="Zoho Integration Partner UK Background"
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
                Certified Integration Partner
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Certified Zoho <span style={{ color: "var(--primary)" }}>Integration Partner</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Unlock the full potential of your business applications by seamlessly integrating Zoho with your existing high-fidelity technology stack.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                FI Digital specialises in connecting Zoho with your current systems, delivering enhanced productivity, real-time visibility, and tactical growth.
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

      {/* Integration Definition */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/zoho-products.png" alt="What is Zoho Integration" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                What is Zoho Integration?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Zoho integration refers to the seamless connection of Zoho’s suite—including CRM, Books, Desk, and Analytics—with external business systems and third-party legacy applications.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                At FI Digital, our certified consultants ensure that Zoho solutions interact flawlessly with your existing software environment, maximising regional ROI and operational productivity.
              </p>
              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary)", borderLeft: "4px solid var(--primary)", paddingLeft: "1.5rem" }}>
                Proper integration ensures data flows automatically and securely, reducing manual departmental friction and eliminating errors.
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
                Our Zoho Integration Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
                FI Digital provides comprehensive integration services designed specifically around your unique technology environment.
            </p>
          </div>
          <div className="feature-grid">
            {integrationServices.map((svc, i) => (
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

      {/* Benefits Section (Re-designed layout, image removed) */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Benefits of Effective Zoho Integration
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
              Achieve measurable operational gains through our high-fidelity integration frameworks.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem" }}>
            {integrationBenefits.map((benefit, i) => (
              <div key={i} style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(79, 70, 229, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CheckCircle2 className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>{benefit.split(':')[0]}</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>{benefit.split(':')[1]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Re-designed layout, image removed) */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ background: "rgba(30, 58, 138, 1)", padding: "5rem 4rem", borderRadius: "45px", color: "white", boxShadow: "0 25px 50px -12px rgba(30, 58, 138, 0.4)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "center" }}>
              <div>
                <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900, marginBottom: "2rem", color: "white" }}>
                  Why Choose FI Digital?
                </h2>
                <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: "3rem" }}>
                  As an officially recognised Zoho Partner, we deliver tactical expertise and regional trust that sets your integration apart.
                </p>
                <div style={{ display: "grid", gap: "1.5rem" }}>
                  {[
                    "Certified Zoho Experts ensuring high-fidelity standards.",
                    "UK-based support with full GDPR & regional compliance.",
                    "Customised solutions tailored to your unique scaling needs.",
                    "Proven track record across leading UK industries."
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--primary)" }} />
                      <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                 <div style={{ background: "rgba(255,255,255,0.05)", padding: "2.5rem", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
                    <div style={{ fontSize: "2.5rem", fontWeight: 950, marginBottom: "0.5rem" }}>150+</div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", fontWeight: 700, textTransform: "uppercase" }}>Integrations</div>
                 </div>
                 <div style={{ background: "rgba(255,255,255,0.05)", padding: "2.5rem", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
                    <div style={{ fontSize: "2.5rem", fontWeight: 950, marginBottom: "0.5rem" }}>100%</div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", fontWeight: 700, textTransform: "uppercase" }}>Compliance</div>
                 </div>
                 <div style={{ background: "rgba(255,255,255,0.05)", padding: "2.5rem", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)", textAlign: "center", gridColumn: "span 2" }}>
                    <div style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.5rem" }}>Premium Support</div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", fontWeight: 700, textTransform: "uppercase" }}>24/7 Global Delivery</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "4rem" }}>
              Examples & Use Cases
            </h2>
          </div>
          <div className="feature-grid">
            {useCases.map((story, i) => (
              <div key={i} style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInUp">
                <h5 style={{ fontSize: "1.2rem", fontWeight: 900, color: "var(--primary)", marginBottom: "1rem" }}>{story.title}</h5>
                <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>{story.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "4rem", textAlign: "center" }}>
            FAQ – Integration Services
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

      {/* Improved Final CTA Section (Matching Home Page Style) */}
      <section style={{ padding: "120px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <h2 style={{ 
            fontSize: "clamp(2.1rem, 5vw, 4rem)", 
            fontWeight: 950, 
            marginBottom: "2.5rem", 
            lineHeight: 1.1,
            color: "white"
          }}>
             Achieve Seamless Integration Today
          </h2>
          <p style={{ 
            fontSize: "1.35rem", 
            color: "rgba(255,255,255,0.9)", 
            marginBottom: "4rem", 
            lineHeight: 1.7, 
            maxWidth: "850px", 
            margin: "0 auto 4rem" 
          }}>
             Experience enhanced productivity and data accuracy with tailored high-fidelity integrations. Speak to our expert consultants today.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1.2rem 4rem",
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
