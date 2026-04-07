import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Users, Layers, Zap, Headphones, BarChart3, Repeat, Code, Server, Image as ImageIcon, Briefcase } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const consultingServices = [
  {
    title: "Zoho CRM Consulting",
    content: "Zoho CRM is one of the world’s most popular CRM platforms. Our consultants provide strategic implementation, customising the system to match your specific sales processes and growth objectives.",
    icon: <Server size={24} />
  },
  {
    title: "Zoho Creator App Development",
    content: "Leverage the power of low-code development with Zoho Creator. We build bespoke business applications tailored precisely to your operational processes, from inventory to project tracking.",
    icon: <Users size={24} />
  },
  {
    title: "Zoho Desk Consulting",
    content: "Transform your customer support operations with Zoho Desk. We provide expert consulting ensure your support workflows are efficient, automated, and fully aligned with your strategy.",
    icon: <Headphones size={24} />
  },
  {
    title: "Zoho Marketing Automation",
    content: "Our team helps you unlock the full potential of Zoho Marketing Automation and Campaigns. From strategy and setup to automated nurturing, we ensure maximum performance and ROI.",
    icon: <Zap size={24} />
  },
  {
    title: "Zoho Analytics & BI",
    content: "Make data-driven decisions with Zoho Analytics. Our consultants design and optimise advanced business intelligence dashboards tailored to your real-time KPIs and business goals.",
    icon: <BarChart3 size={24} />
  },
  {
    title: "Zoho One Implementation",
    content: "Implementing Zoho One requires careful planning. Our consulting services ensure a smooth rollout, strategic alignment with your goals, and ongoing managed support.",
    icon: <Layers size={24} />
  },
  {
    title: "Zoho Integration Solutions",
    content: "Seamlessly integrate Zoho tools with your existing systems, including ERP platforms, accounting software, and telephony for streamlined and unified data flow.",
    icon: <Repeat size={24} />
  },
  {
    title: "Digital Transformation Mapping",
    content: "We reimagining and optimise your business processes. Our consultants conduct detailed mapping to identify high-impact areas for automation and operational improvement.",
    icon: <Briefcase size={24} />
  }
];

const benefits = [
  "Certified Zoho Expertise: Best-practice implementation, integration, and optimisation.",
  "Tailored Solutions: Bespoke systems aligned specifically to your business needs.",
  "Proven Track Record: Consistently achieving measurable results across diverse UK industries.",
  "UK Market Knowledge: Deep understanding of UK regulatory compliance (GDPR).",
  "End-to-End Services: Covering design, implementation, integration, and managed support.",
  "Faster Implementation & ROI: Methodologies ensuring rapid deployment and value realisation."
];

const caseStudies = [
  {
    title: "UK Financial Services Firm",
    content: "Implemented Zoho CRM, Desk, and Analytics, resulting in a 45% improvement in lead conversion rates and reduced response times."
  },
  {
    title: "Retail & E-commerce Group",
    content: "Delivered a fully integrated Zoho Marketing Automation and CRM solution, boosting revenue and email engagement by 60%."
  },
  {
    title: "Professional Services Org",
    content: "Migrated legacy systems to Zoho One, streamlining operations across departments and reducing software costs by 35%."
  }
];

const faqs = [
  {
    q: "Why do I need a Zoho Consulting Partner?",
    a: "A certified Zoho Consulting Partner ensures expert guidance, tailored solutions, and seamless implementation, significantly reducing risks and ensuring maximum value from your investment."
  },
  {
    q: "Can you help optimise an existing Zoho setup?",
    a: "Yes. FI Digital specialises in reviewing and auditing existing Zoho environments to identify improvement areas and implement strategic performance recommendations."
  }
];

export default function ZohoConsultingPartnerUkPage() {
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
            src="/images1/group-of-asian-businessman-and-businesswoman-worki-2026-03-24-15-42-08-utc.jpg"
            alt="Zoho Consulting UK Background"
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
                Official UK Consulting Partner
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Zoho Consulting <span style={{ color: "var(--primary)" }}>Partner in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                If your business is looking to implement, optimise, or expand Zoho applications, partnering with a trusted Zoho Consulting Partner in the UK can make all the difference.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                FI Digital is an officially recognised Zoho Partner, delivering strategic, technical, and operational expertise to help UK businesses fully leverage the Zoho stack.
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

      {/* Intro/Definition Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/1 - Business meeting.jpg" alt="Zoho Consulting UK Meeting" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                What is a Zoho Consulting Partner?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                A Zoho Consulting Partner is officially authorised by Zoho Corporation to provide tactical professional services covering the full product range.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                FI Digital has demonstrated advanced technical knowledge and successful project delivery, helping clients maximise their ROI through tailored digital solutions.
              </p>
              <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary)", borderLeft: "4px solid var(--primary)", paddingLeft: "1.5rem" }}>
                Our services bridge the tactical gap between Zoho's powerful tools and your unique UK business needs.
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
              Our UK Consulting & Implementation Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
               Complete range of tactical consulting designed to ensure maximum operational impact for your organisation.
            </p>
          </div>
          <div className="feature-grid">
            {consultingServices.map((svc, i) => (
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

      {/* Benefits Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Why Choose FI Digital?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Partnering with an officially recognised Zoho Consulting Partner delivers high-fidelity strategic and operational benefits:
              </p>
              <div style={{ display: "grid", gap: "1.25rem" }}>
                {benefits.map((benefit, i) => (
                    <div key={i} style={{ display: "flex", gap: "1.25rem", background: "var(--card-bg)", padding: "1.25rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
                        <div style={{ marginTop: "4px" }}><CheckCircle2 size={18} className="text-primary" /></div>
                        <span style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>
                          <b>{benefit.split(':')[0]}:</b>{benefit.split(':')[1]}
                        </span>
                    </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <Image src="/images1/Business2.jpg" alt="Partner Benefits Advantage" width={600} height={700} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section (Aligned Properly) */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              UK Success Stories
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "800px", margin: "0 auto" }}>
              Measurable digital transformations delivered for regional UK enterprises.
            </p>
          </div>
          <div className="feature-grid">
            {caseStudies.map((story, i) => (
              <div key={i} style={{ background: "rgba(30, 58, 138, 1)", padding: "3rem", borderRadius: "32px", color: "white", boxShadow: "0 25px 50px -12px rgba(30, 58, 138, 0.4)" }} className="wow animate__animated animate__fadeInUp">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", fontWeight: 800, textTransform: "uppercase" }}>
                  <ImageIcon size={18} /> UK CASE STUDY
                </div>
                <h4 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.25rem" }}>{story.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.7 }}>{story.content}</p>
                <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: "0.75rem", fontWeight: 700 }}>
                  Read full case study <ArrowRight size={18} />
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
            FAQ – Zoho Consulting Services
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
             Ready to Optimise Your Business?
          </h2>
          <p style={{ 
            fontSize: "1.25rem", 
            color: "rgba(255,255,255,0.9)", 
            marginBottom: "4rem", 
            lineHeight: 1.7, 
            maxWidth: "850px", 
            margin: "0 auto 4rem" 
          }}>
             Experience measurable transformation with FI Digital—your trusted Zoho Consulting Partner in the UK. Speak to our experts today.
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
            Book Your Free Consulting Session Today <ArrowRight size={20} />
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
