import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
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
    content: "Zoho One is a complete business operating system with over 50 integrated applications. We help you strategically implement Zoho One to improve cross-functional collaboration.",
    icon: <Layers size={24} />
  },
  {
    title: "Zoho Creator Custom App Development",
    content: "Need a bespoke application? Our certified developers build low-code apps on Zoho Creator to automate your business workflows and improve efficiency.",
    icon: <Code size={24} />
  },
  {
    title: "Zoho Desk Implementation & Support",
    content: "We configure Zoho Desk to help you deliver better customer service, reduce ticket resolution times, and improve overall customer satisfaction.",
    icon: <Headphones size={24} />
  },
  {
    title: "Zoho Analytics Consulting",
    content: "Unlock powerful business insights with Zoho Analytics. We help you build real-time dashboards and advanced reports customised to your exact requirements.",
    icon: <BarChart3 size={24} />
  },
  {
    title: "Zoho Marketing Automation Implementation",
    content: "We help you automate your lead nurturing and marketing campaigns with Zoho Marketing Automation and Zoho Campaigns, fully integrated with your CRM.",
    icon: <Zap size={24} />
  },
  {
    title: "Zoho Integration Services",
    content: "We integrate Zoho with your existing systems (ERP, accounting, e-commerce, telephony). We ensure secure data integrity and streamlined processes.",
    icon: <Repeat size={24} />
  },
  {
    title: "Zoho Managed Services & Ongoing Support",
    content: "Our authorised partnership includes long-term support, training, and system optimisation to keep your environment aligned with your evolving needs.",
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
    q: "What is the difference between an authorised partner and other Zoho providers?",
    a: "An authorised partner is officially recognised by Zoho Corporation, has certified consultants, and direct access to Zoho’s technical teams for priority support."
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
  }
];

export default function ZohoAuthorizedPartnerUkPage() {
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
            src="/images1/Partner1.jpg"
            alt="Zoho Authorized Partner UK Background"
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
                Authorized Partner UK
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Zoho Authorized <span style={{ color: "var(--primary)" }}>Partner in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Looking for an officially recognised Zoho Partner in the UK to help you maximise your software investment? FI Digital ensures professional delivery and customer success.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                As an officially authorised team, we provide technical excellence and strategic rollout plans to streamline your operations and improve cross-departmental collaboration.
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

      {/* What it is Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/Business1.jpg" alt="What is a Zoho Authorized Partner" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                What is a Zoho Authorized Partner?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                A Zoho Authorized Partner is a service provider formally certified by Zoho Corporation to deliver high-quality consulting, implementation, and long-term support.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 700, marginBottom: "1.5rem" }}>
                FI Digital serves as your official UK-based bridge to technical excellence through specialized accreditation:
              </p>
              <ul style={{ display: "grid", gap: "1rem" }}>
                {[
                  "Official direct collaboration with Zoho's technical engineering teams.",
                  "Certified expertise across the entire 50+ Zoho application suite.",
                  "Adherence to strict quality, security, and data privacy guidelines.",
                  "Proven track record of successful multi-departmental deployments.",
                  "Long-term customer success commitment beyond the go-live phase."
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
              Our Official Partner Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
              As your Zoho Authorized Partner in the UK, we offer a full spectrum of consultancy and technical services.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {authorizedUkServices.map((svc, i) => (
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

      {/* Why Work Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "flex-start" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Value of Official Partnership</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                Ensuring technical excellence and long-term business value through certified, UK-based Zoho Authorised expertise:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { t: "Technical Excellence", d: "Consultants officially trained on Zoho's best practices and security frameworks." },
                  { t: "GDPR Compliant", d: "UK-based data handling and residency strategies tailored for your business." },
                  { t: "Priority Support", d: "Accelerated path to Zoho's senior engineering teams for critical resolutions." },
                  { t: "Continuous Growth", d: "Proactive account management and ongoing system audits/optimisations." }
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
            
            <div style={{ background: "rgba(30, 58, 138, 1)", padding: "3.5rem", borderRadius: "40px", color: "white", boxShadow: "0 25px 50px -12px rgba(30, 58, 138, 0.4)" }} className="wow animate__animated animate__fadeInRight">
                <h3 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "2rem" }}>Industries We Serve</h3>
                <ul style={{ display: "grid", gap: "1rem" }}>
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
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--text)" }}>Success Stories</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginTop: "1rem" }}>Proven business impact across various UK sectors.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
                {successStories.map((story, i) => (
                    <div key={i} style={{ background: "var(--card-bg)", padding: "3rem", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInUp">
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
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "4rem", textAlign: "center" }}>
            FAQ – Authorized Partner UK
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
             Ready to Work with an Official Partner?
          </h2>
          <p style={{ 
            fontSize: "1.25rem", 
            color: "rgba(255,255,255,0.9)", 
            marginBottom: "4rem", 
            lineHeight: 1.7, 
            maxWidth: "850px", 
            margin: "0 auto 4rem" 
          }}>
             Make the most of your software investment with FI Digital—your certified UK Zoho Authorized Partner. Whether you need implementation or support, we're ready.
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
