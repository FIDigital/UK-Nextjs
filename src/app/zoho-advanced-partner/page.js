import Link from "next/link";
import { ArrowRight, BarChart3, ChevronDown, CheckCircle2, Layout, Settings, Users, Layers, Repeat, Shield, Monitor, Smartphone, Code, Briefcase, Mail, Zap, Headphones } from "lucide-react";
import { metadata as pageMetadata } from './meta';

export const metadata = pageMetadata;

const advancedServices = [
  {
    title: "Zoho CRM Advanced Consulting",
    content: "Leverage Zoho CRM to transform your sales processes. Our advanced-level consulting ensures your implementation is precisely customised, strategically integrated, and fully optimised for growth.",
    icon: <Users size={24} />
  },
  {
    title: "Zoho Creator Advanced Development",
    content: "Rapidly build powerful custom business applications tailored to your unique operational needs. We use Zoho Creator’s low-code platform to deliver custom apps quickly and cost-effectively.",
    icon: <Code size={24} />
  },
  {
    title: "Zoho Desk Advanced Implementation",
    content: "Deliver exceptional customer service with a strategically implemented Zoho Desk solution. We ensure seamless integration, efficient workflow automation, and optimal user productivity.",
    icon: <Headphones size={24} />
  },
  {
    title: "Zoho Marketing Automation Solutions",
    content: "Drive marketing success with Zoho Marketing Automation and Zoho Campaigns. Our advanced consultants expertly integrate and automate processes for personalised campaigns and actionable analytics.",
    icon: <Zap size={24} />
  },
  {
    title: "Zoho Analytics Advanced Consulting",
    content: "Harness advanced BI and predictive analytics with Zoho Analytics. We provide sophisticated data visualisation, real-time dashboards, and predictive insights tailored to your business.",
    icon: <BarChart3 size={24} />
  },
  {
    title: "Zoho One Advanced Implementation",
    content: "Transform your entire business with Zoho One’s integrated suite. We ensure structured strategic consultation, phased deployments, careful integration, and ongoing managed services.",
    icon: <Layers size={24} />
  },
  {
    title: "Zoho Integration Advanced Services",
    content: "Connect your Zoho applications seamlessly with third-party platforms, ERP systems, and e-commerce tools. We ensure reliable, secure, and automated data flow between your systems.",
    icon: <Repeat size={24} />
  },
  {
    title: "Advanced Managed Services & Support",
    content: "Benefit from proactive, dedicated managed services and UK-based support. We provide comprehensive administration, system optimisation, training, and priority issue resolution.",
    icon: <Shield size={24} />
  }
];

const advancedSuccessStories = [
  {
    title: "Financial Services Organisation",
    content: "Achieved a streamlined customer management system through advanced Zoho CRM integration.",
    result: "40% improved operational efficiency, significant cost savings, and enhanced retention."
  },
  {
    title: "Professional Services Firm",
    content: "Implemented Zoho One across multiple departments, consolidating software and improving collaboration.",
    result: "30% increase in productivity and significant cost reductions through software consolidation."
  },
  {
    title: "Retail & Distribution Company",
    content: "Delivered sophisticated Zoho Creator custom applications integrated with Zoho Analytics for real-time tracking.",
    result: "Enabled real-time inventory tracking, advanced forecasting, and reduced operational overheads."
  }
];

const faqs = [
  {
    q: "How does an Advanced Partner differ from other Zoho partnership levels?",
    a: "A Zoho Advanced Partner represents a higher partnership tier, demonstrating deeper expertise, consistent client success, priority Zoho support, and the ability to deliver complex implementations and strategic advice."
  },
  {
    q: "Is choosing an Advanced Partner more costly?",
    a: "Engaging an Advanced Partner like FI Digital ensures significantly higher quality, reduced risks, and strategic insight. Ultimately, these advantages ensure your Zoho investments deliver superior long-term value and accelerated ROI."
  },
  {
    q: "Can FI Digital handle complex multi-product Zoho deployments?",
    a: "Absolutely. As an Advanced Partner, FI Digital specialises in managing complex Zoho deployments, integrations, and extensive multi-application implementations, ensuring cohesive, effective solutions tailored to your needs."
  }
];

export default function Page() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 4rem; align-items: center; }
        .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; }
        .advantage-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: flex-start; }
        .cta-container { padding: 4rem 2rem; border-radius: 40px; }
        .bullet-list { list-style: disc; padding-left: 1.5rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 1rem; }
        
        @media (max-width: 1024px) {
          .hero-grid, .advantage-grid { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
          .hero-content { display: flex; flex-direction: column; align-items: center; }
          .advantage-content { display: flex; flex-direction: column; align-items: center; }
          .bullet-list { text-align: left; }
        }
        
        @media (max-width: 640px) {
          .feature-grid { grid-template-columns: 1fr; }
          .cta-container { padding: 3rem 1.5rem; }
          .hero-title { font-size: 2.2rem !important; }
        }
      `}} />

      {/* Hero Section */}
      <section style={{
        position: "relative",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(120px, 15vh, 140px) 1.5rem 80px",
        background: "var(--bg)",
        overflow: "hidden",
      }}>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1250px", margin: "0 auto", width: "100%" }}>
          <div className="hero-grid">
            <div className="hero-content text-center md:text-left">
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.75rem",
                padding: "0.6rem 1.2rem", background: "rgba(29, 78, 216, 0.1)",
                borderRadius: "100px", border: "1px solid rgba(29, 78, 216, 0.2)",
                marginBottom: "2rem", color: "#1d4ed8", fontSize: "0.85rem",
                fontWeight: 700, letterSpacing: "0.01em", textTransform: "uppercase"
              }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1d4ed8", boxShadow: "0 0 10px #1d4ed8" }} />
                Advanced Tier Partner
              </div>
              <h1 className="hero-title" style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Zoho Advanced
                <br />
                <span style={{ color: "#1d4ed8" }}>Partner in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "800px",
                margin: "0 auto 1.5rem"
              }}>
                Are you searching for a trusted Zoho Advanced Partner in the UK to expertly guide your business through Zoho’s robust suite of applications? FI Digital, recognised as a Zoho Advanced Partner, provides UK businesses with expert consultation, seamless implementation, strategic integration, and ongoing support across Zoho's extensive ecosystem.
              </p>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "800px",
                margin: "0 auto 2.5rem"
              }}>
                Our advanced partnership status ensures your business benefits from deep Zoho expertise, prioritised support, and tailored solutions that significantly enhance productivity, efficiency, and growth across your organisation.
              </p>
              <Link href="/contact" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2.5rem",
                background: "#1d4ed8",
                color: "white",
                fontWeight: 700,
                fontSize: "1rem",
                borderRadius: "14px",
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(29, 78, 216, 0.3)",
              }}>
                Get Started Today! <ArrowRight size={18} />
              </Link>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/corporate2.jpg" alt="Zoho Advanced Partner UK" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* What it is Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="hero-grid" style={{ direction: "rtl" }}>
            <div style={{ direction: "ltr", position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic02.png" alt="What is a Zoho Advanced Partner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ direction: "ltr" }} className="hero-content">
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                What is a Zoho Advanced Partner?
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                Zoho Advanced Partner status represents an elevated tier of partnership awarded exclusively by Zoho Corporation to partners demonstrating exceptional expertise, substantial client success, and superior knowledge of Zoho solutions.
              </p>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: 1.7, fontWeight: 800 }}>
                As an Advanced Partner, FI Digital has proven our ability to deliver consistently successful implementations, strategic consulting, complex integrations, and exceptional customer satisfaction. Our partnership status ensures your organisation receives the highest quality Zoho services, expert guidance, and dedicated local support specifically designed for UK businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h3 style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 800,
              marginBottom: "1.5rem",
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}>
              Comprehensive Zoho Services from an Advanced Partner
            </h3>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem" }}>
               FI Digital offers a comprehensive range of expert Zoho services, leveraging our advanced partnership to deliver exceptional outcomes for UK-based businesses across diverse industries:
            </p>
          </div>
          
          <div className="feature-grid">
            {advancedServices.map((svc, i) => (
              <div key={i} style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "24px",
                padding: "2.5rem",
                transition: "all 0.3s ease",
                boxShadow: "var(--card-shadow)",
              }}>
                <div style={{ color: "#1d4ed8", marginBottom: "1.5rem" }}>
                    {svc.icon}
                </div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.25rem" }}>
                  {svc.title}
                </h4>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "1rem" }}>
                  {svc.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="hero-grid">
             <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic01.png" alt="Why Partner with FI Digital" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="hero-content">
              <h4 style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Why Partner with a Zoho Advanced Partner in the UK?</h4>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>Choosing FI Digital as your Zoho Advanced Partner delivers substantial, immediate, and ongoing business advantages:</p>
              <ul className="bullet-list">
                <li><b>Priority Zoho Support:</b> Advanced Partner status ensures priority access to Zoho resources, accelerated issue resolution, and dedicated expert support.</li>
                <li><b>Expert-Level Knowledge & Insight:</b> Our consultants bring deep product expertise and proven methodologies, ensuring your Zoho solutions fully align with your specific business goals and operational processes.</li>
                <li><b>Tailored UK-Focused Solutions:</b> With extensive experience and understanding of UK market dynamics, regulatory compliance (including GDPR), and sector-specific requirements, our solutions are highly relevant and effective for UK businesses.</li>
                <li><b>Strategic Business Guidance:</b> As an advanced partner, we provide strategic consultation beyond software implementation, actively advising on continuous improvements, new Zoho features, and evolving business opportunities.</li>
                <li><b>Reduced Risk & Accelerated ROI:</b> Our expert-led implementations and integrations significantly reduce deployment risks, accelerate adoption, and rapidly achieve tangible business outcomes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="hero-grid" style={{ direction: "rtl" }}>
             <div style={{ direction: "ltr", position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/corporate2.jpg" alt="Zoho Case Studies" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ direction: "ltr" }} className="hero-content">
               <h4 style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Zoho Advanced Partner Case Studies & Successes</h4>
               <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>FI Digital has consistently delivered successful Zoho implementations for diverse UK businesses, achieving measurable, impactful results:</p>
               <ul className="bullet-list">
                  <li><b>Financial Services Organisation:</b> Achieved a streamlined customer management system through advanced Zoho CRM integration, resulting in 40% improved operational efficiency, significant cost savings, and enhanced customer retention rates.</li>
                  <li><b>Professional Services Firm:</b> Implemented Zoho One across multiple departments, resulting in a 30% increase in productivity, significant cost reductions through software consolidation, and vastly improved cross-departmental collaboration.</li>
                  <li><b>Retail & Distribution Company:</b> Delivered sophisticated Zoho Creator custom applications integrated with Zoho Analytics, enabling real-time inventory tracking, advanced forecasting capabilities, and significantly reduced operational overheads.</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text)" }}>FAQ – Zoho Advanced Partner Services</h2>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "20px", overflow: "hidden", cursor: "pointer" }}>
                <summary style={{ padding: "1.5rem", fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", display: "flex", justifyContent: "space-between", alignItems: "center", listStyle: "none" }}>
                  {faq.q}
                  <ChevronDown size={20} style={{ color: "#1d4ed8" }} />
                </summary>
                <div style={{ padding: "0 1.5rem 1.5rem", color: "var(--text-muted)", lineHeight: 1.8 }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)", display: "flex", justifyContent: "center" }}>
        <div className="cta-container" style={{ maxWidth: "1100px", width: "100%", background: "#1d4ed8", textAlign: "center", color: "white", boxShadow: "0 25px 50px -12px rgba(29, 78, 216, 0.5)" }}>
          <h4 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Ready to Partner with an Advanced Zoho Expert?
          </h4>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", marginBottom: "3rem", maxWidth: "850px", margin: "0 auto 3rem" }}>
            Maximise your business growth, efficiency, and competitive advantage by partnering with FI Digital, your expert Zoho Advanced Partner in the UK. Contact us today and explore exactly how Zoho can empower your business.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1.1rem 3rem",
            background: "white",
            color: "#1d4ed8",
            fontWeight: 800,
            fontSize: "1.1rem",
            borderRadius: "15px",
            textDecoration: "none",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
          }}>
            Schedule Your Free Zoho Advanced Consultation Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
