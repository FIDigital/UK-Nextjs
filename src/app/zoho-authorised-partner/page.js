import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, BarChart3, Database, PieChart, ShieldCheck, TrendingUp, ChevronDown, CheckCircle2, Layout, Settings, Users, Layers, Repeat, Shield, Monitor, Smartphone, Code, Briefcase, Mail, Zap, Headphones } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const authorisedServices = [
  {
    title: "Zoho CRM Consulting & Implementation",
    content: "Optimise your sales processes and enhance customer relationships. Our consultants tailor Zoho CRM precisely to your business needs, ensuring streamlined sales processes and measurable growth.",
    icon: <Users size={24} />
  },
  {
    title: "Zoho Creator App Development",
    content: "We deliver powerful low-code applications using Zoho Creator, enabling rapid custom app development tailored to your specific requirements. Automate workflows and eliminate operational bottlenecks.",
    icon: <Code size={24} />
  },
  {
    title: "Zoho Desk Implementation & Support",
    content: "Enhance your customer service experience with Zoho Desk. FI Digital configures and integrates Zoho Desk to match your support workflow, delivering exceptional CX and improved satisfaction.",
    icon: <Headphones size={24} />
  },
  {
    title: "Zoho Marketing Automation",
    content: "Leverage Zoho Marketing Automation and Zoho Campaigns to personalise your marketing efforts. Our strategy empowers your team to generate more leads and higher conversion rates.",
    icon: <Zap size={24} />
  },
  {
    title: "Zoho Analytics & BI",
    content: "Gain powerful, actionable insights with Zoho Analytics. Our experts configure dashboards that provide real-time visibility and predictive capabilities for informed decision-making.",
    icon: <BarChart3 size={24} />
  },
  {
    title: "Zoho One Implementation",
    content: "Transform your entire business with the Zoho One suite. FI Digital delivers strategic consultation and phased implementation tailored specifically to your UK organisation’s needs.",
    icon: <Layers size={24} />
  },
  {
    title: "Zoho Integration Services",
    content: "Connect Zoho apps seamlessly with your existing software (Xero, QuickBooks, SAP, ERP). We ensure data integrity and streamlined cross-functional processes.",
    icon: <Repeat size={24} />
  },
  {
    title: "Zoho Managed Services & Support",
    content: "We offer comprehensive Zoho Managed Services, providing administration, technical support, and user training. Our UK-based team keeps your environment secure and optimised.",
    icon: <Shield size={24} />
  }
];

const successStories = [
  {
    title: "Financial Services Firm",
    desc: "Deployed Zoho CRM and Zoho Desk integration, improving customer service response times by 40%.",
    impact: "Increased customer satisfaction and enhanced sales conversions by 30%."
  },
  {
    title: "Retail & E-commerce Company",
    desc: "Implemented Zoho Marketing Automation and CRM integration, increasing email open rates and improving lead quality.",
    impact: "Drove substantial revenue growth within three months."
  },
  {
    title: "Professional Services Consultancy",
    desc: "Migrated legacy systems to Zoho One, streamlining business operations and achieving significant cost savings.",
    impact: "Boosted overall productivity by nearly 35%."
  }
];

const faqs = [
  {
    q: "Why choose an authorised Zoho Partner instead of implementing Zoho myself?",
    a: "An authorised Zoho Partner ensures expert configuration, seamless integration, comprehensive training, and ongoing support, significantly reducing risks and ensuring rapid ROI."
  },
  {
    q: "Does FI Digital handle Zoho support directly?",
    a: "Yes. FI Digital provides comprehensive, UK-based managed services and technical support for all Zoho applications, ensuring prompt issue resolution and continuous optimisation."
  },
  {
    q: "How quickly can an authorised partner implement Zoho solutions?",
    a: "Implementation timelines vary based on complexity. However, FI Digital typically completes implementations within 2–8 weeks, ensuring minimal disruption."
  }
];

export default function ZohoAuthorisedPartnerPage() {
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
            src="/images1/Handshake.jpg"
            alt="Zoho Authorised Partner Background"
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
                Officially Accredited
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Zoho Authorised <span style={{ color: "var(--primary)" }}>Partner in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Are you looking for a trusted and authorised Zoho Partner in the UK to help you leverage your digital ecosystem? FI Digital is your reliable, experienced partner for success.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                As an officially accredited partner, we empower your business to unlock Zoho’s full potential—streamlining operations, increasing productivity, and driving scalable growth.
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

      {/* What it means Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/1 - Business meeting.jpg" alt="Accredited Zoho Partner" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                What Does It Mean to Be Authorised?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                An authorised Zoho Partner has been officially accredited to provide expert consulting, implementation, integration, training, and 24/7 managed support services.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 700, marginBottom: "1.5rem" }}>
                FI Digital has demonstrated excellence in deploying and Managing Zoho’s extensive suite of 50+ business applications:
              </p>
              <ul style={{ display: "grid", gap: "1rem" }}>
                {[
                  "Deep technical expertise verified by Zoho Corporation.",
                  "Direct access to Zoho’s priority product engineering teams.",
                  "Compliance-first approach including GDPR and data security.",
                  "Experience across multiple industries and UK market sectors.",
                  "Long-term strategic partnership focus beyond implementation."
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
              Our Accredited Zoho Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
              Comprehensive support covering the entire lifecycle of your Zoho ecosystem—integrated, optimized, and secure.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {authorisedServices.map((svc, i) => (
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

      {/* Why Choose Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "start" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Value of a Certified Partner</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                Partnering with FI Digital provides substantial, tangible advantages for your digital transformation and long-term technical health:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { t: "Verified Expertise", d: "Certified experts ensuring configuration and optimisation excellence." },
                  { t: "GDPR Compliant", d: "UK market expertise focusing on data residency and compliance." },
                  { t: "Priority Support", d: "Escalated path to Zoho engineering for rapid issue resolution." },
                  { t: "Strategic Vision", d: "Broad visibility across 50+ apps to deliver the best possible ROI." }
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
            
            <div style={{ background: "var(--card-bg)", padding: "3.5rem", borderRadius: "40px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <h3 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--text)", marginBottom: "2.5rem" }}>Success Stories</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                    {successStories.map((story, i) => (
                        <div key={i} style={{ borderLeft: "4px solid var(--primary)", paddingLeft: "1.5rem" }}>
                            <div style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--text)", marginBottom: "0.5rem" }}>{story.title}</div>
                            <div style={{ color: "var(--text-muted)", marginBottom: "0.75rem", fontSize: "0.95rem", lineHeight: 1.5 }}>{story.desc}</div>
                            <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.95rem" }}>{story.impact}</div>
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
            FAQ – Zoho Authorised Partner
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
             Ready to Transform Your Business?
          </h2>
          <p style={{ 
            fontSize: "1.25rem", 
            color: "rgba(255,255,255,0.9)", 
            marginBottom: "4rem", 
            lineHeight: 1.7, 
            maxWidth: "850px", 
            margin: "0 auto 4rem" 
          }}>
             Experience the full potential of Zoho with FI Digital—your trusted Zoho Authorised Partner in the UK. Talk to our expert team today and thrive.
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
