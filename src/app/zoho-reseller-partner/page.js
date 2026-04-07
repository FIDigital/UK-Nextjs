import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2, Server, Users, Layers, Zap, Headphones, BarChart3, Repeat, Code, Briefcase, Mail, Shield, Book } from "lucide-react";
import { metadata as pageMetadata } from './meta';

export const metadata = pageMetadata;

const resellerServices = [
  {
    title: "Expert Zoho Licensing Consultation",
    content: "Our consultants understand your business needs to recommend the ideal Zoho products, licensing plans, and subscription models for maximum cost-efficiency.",
    icon: <Users size={24} />
  },
  {
    title: "Flexible Licensing & Subscription Management",
    content: "We handle all billing, renewal notifications, license management, and upgrades, allowing your teams to remain focused on core business activities.",
    icon: <Repeat size={24} />
  },
  {
    title: "Tailored Zoho Bundles & Packages",
    content: "We create customised Zoho bundles aligned specifically with your requirements, from standalone CRM to the comprehensive Zoho One suite.",
    icon: <Layers size={24} />
  },
  {
    title: "Seamless Zoho Procurement & Deployment",
    content: "Our services streamline your procurement process, ensuring smooth activation of your licenses with comprehensive onboarding assistance.",
    icon: <Zap size={24} />
  },
  {
    title: "Dedicated UK-Based Support & Training",
    content: "Direct access to local support teams offering priority response, comprehensive user training, and proactive issue resolution.",
    icon: <Shield size={24} />
  }
];

const popularSolutions = [
  { t: "Zoho CRM", d: "The world-leading CRM to streamline sales and enhance relationships." },
  { t: "Zoho Creator", d: "Low-code platform for rapid custom app development." },
  { t: "Zoho Desk", d: "Intuitive customer service software to improve satisfaction." },
  { t: "Zoho Books", d: "Accounting software fully compliant with UK financial regulations." },
  { t: "Zoho Marketing Automation", d: "Automate and personalise campaigns to drive more leads." },
  { t: "Zoho One", d: "Comprehensive suite of 50+ integrated Zoho applications." }
];

const successStories = [
  {
    title: "Retail & E-commerce Company",
    content: "Provided tailored Zoho CRM and Zoho Marketing Automation licenses.",
    benefit: "Achieving significant marketing ROI improvement and increased customer retention."
  },
  {
    title: "Manufacturing & Distribution",
    content: "Bundled Zoho One suite for multiple business units.",
    benefit: "Delivering comprehensive operational efficiency, cost savings, and enhanced productivity."
  },
  {
    title: "Financial & Professional Services Firm",
    content: "Procured customised Zoho Books and CRM packages.",
    benefit: "Enabling seamless integration with existing systems and improved client management."
  }
];

const faqs = [
  {
    q: "Can we buy Zoho directly, or should we buy through a reseller?",
    a: "Buying through a UK reseller partner like FI Digital provides flexible terms, discounted pricing, expert advice, simplified subscription management, and responsive local support."
  },
  {
    q: "Do you offer discounts or special packages for larger Zoho implementations?",
    a: "Yes, FI Digital offers customised bundles, flexible licensing terms, and volume discounts, providing significant cost savings for larger implementations."
  },
  {
    q: "How quickly can we activate Zoho licenses after purchasing through FI Digital?",
    a: "Typically, your Zoho licenses can be activated within 24–48 hours following purchase, ensuring rapid deployment and minimal disruption."
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
            <div className="hero-content text-left">
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.75rem",
                padding: "0.6rem 1.2rem", background: "rgba(29, 78, 216, 0.1)",
                borderRadius: "100px", border: "1px solid rgba(29, 78, 216, 0.2)",
                marginBottom: "2rem", color: "#1d4ed8", fontSize: "0.85rem",
                fontWeight: 700, letterSpacing: "0.01em", textTransform: "uppercase"
              }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1d4ed8", boxShadow: "0 0 10px #1d4ed8" }} />
                Official UK Reseller
              </div>
              <h1 className="hero-title" style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Zoho Reseller
                <br />
                <span style={{ color: "#1d4ed8" }}>Partner in the UK</span>
              </h1>
              <p style={{
                fontSize: "1.2rem",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "650px",
              }}>
                Are you looking for a trusted UK-based Zoho Reseller Partner who can guide your business through selecting, purchasing, and successfully implementing Zoho software? FI Digital is your ideal partner, helping businesses purchase solutions efficiently and cost-effectively.
              </p>
              <p style={{
                fontSize: "1.1rem",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "650px",
              }}>
                As an authorised Zoho Reseller, we provide expert advice, flexible licensing options, and dedicated UK-based support, ensuring your business achieves maximum value and productivity from every deployment.
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
            <div style={{ position: "relative" }}>
                 <img src="/images1/saas/classic01.png" alt="Zoho Reseller" style={{ width: "100%", height: "auto", borderRadius: "30px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="hero-grid" style={{ direction: "rtl" }}>
            <div style={{ direction: "ltr", position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic02.png" alt="Partner Definition" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ direction: "ltr" }} className="hero-content">
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                What is a Zoho Reseller Partner?
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                A Zoho Reseller Partner is authorised by Zoho Corporation to sell licenses for Zoho’s powerful business software, providing businesses with tailored licensing options, strategic advice, and direct localised support.
              </p>
              <p style={{ color: "var(--text)", fontWeight: 800, fontSize: "1.1rem", lineHeight: 1.7 }}>
                FI Digital’s Zoho Reseller Partner status ensures your UK organisation receives expert guidance and optimal value when purchasing products, from Zoho CRM and Zoho One to Zoho Creator, Desk, Books, and more. We simplify the process and ensure cost-efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text)" }}>
                Our Zoho Reseller Services in the UK
            </h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "1rem auto" }}>
                FI Digital provides comprehensive reseller services, ensuring your business purchases the ideal Zoho solutions at optimal pricing, with outstanding support.
            </p>
          </div>
          
          <div className="feature-grid">
            {resellerServices.map((svc, i) => (
                <div key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "2.5rem", boxShadow: "var(--card-shadow)" }}>
                    <div style={{ color: "#1d4ed8", marginBottom: "1.5rem" }}>{svc.icon}</div>
                    <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.25rem" }}>{svc.title}</h4>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>{svc.content}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="advantage-grid">
            <div>
              <h3 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "2rem" }}>Benefits of Buying Through a UK Reseller</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { t: "Optimised Costs & Savings", d: "Tailored subscription plans and discounts maximise your ROI." },
                  { t: "Localised UK Support", d: "Dedicated UK-based teams for quick resolution and training." },
                  { t: "Expert Advice & Guidance", d: "Certified consultants helping you choose products tailored to your needs." },
                  { t: "Simplified Procurement", d: "Reduced administrative complexity through streamlined billing." },
                  { t: "Seamless Deployment", d: "Onboarding support ensuring minimal disruption and immediate value." }
                ].map((benefit, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    <CheckCircle2 style={{ color: "#1d4ed8", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontWeight: 800, color: "var(--text)" }}>{benefit.t}</div>
                      <div style={{ color: "var(--text-muted)" }}>{benefit.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative" }}>
                 <img src="/images1/saas/corporate2.jpg" alt="Benefits" style={{ width: "100%", borderRadius: "30px", boxShadow: "var(--card-shadow)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Solutions */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="hero-grid" style={{ direction: "rtl" }}>
            <div style={{ direction: "ltr" }}>
                <img src="/images1/saas/classic01.png" alt="Solutions" style={{ width: "100%", borderRadius: "30px", boxShadow: "var(--card-shadow)" }} />
            </div>
            <div style={{ direction: "ltr" }} className="hero-content">
              <h3 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "2rem" }}>Popular Zoho Solutions</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
                {popularSolutions.map((sol, i) => (
                    <div key={i} style={{ padding: "1.5rem", background: "var(--card-bg)", borderRadius: "20px", border: "1px solid var(--border)" }}>
                        <div style={{ fontWeight: 800, color: "#1d4ed8", fontSize: "1.1rem" }}>{sol.t}</div>
                        <div style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{sol.d}</div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--text)" }}>Success Stories</h2>
          </div>
          <div className="feature-grid">
            {successStories.map((story, i) => (
                <div key={i} style={{ background: "#1d4ed8", color: "white", padding: "2.5rem", borderRadius: "30px", boxShadow: "0 20px 40px rgba(29, 78, 216, 0.2)" }}>
                    <h5 style={{ fontSize: "1.25rem", fontWeight: 900, marginBottom: "1rem" }}>{story.title}</h5>
                    <p style={{ opacity: 0.9, marginBottom: "1rem" }}>{story.content}</p>
                    <div style={{ fontWeight: 700, borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "1rem" }}>{story.benefit}</div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: 800, marginBottom: "4rem" }}>FAQ – Zoho Reseller</h2>
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

      {/* CTA */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)", display: "flex", justifyContent: "center" }}>
        <div className="cta-container" style={{ maxWidth: "1100px", width: "100%", background: "#1d4ed8", textAlign: "center", color: "white", boxShadow: "0 25px 50px -12px rgba(29, 78, 216, 0.5)" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Ready to Purchase Zoho with Expert Support?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", marginBottom: "3rem", maxWidth: "850px", margin: "0 auto 3rem" }}>
            Simplify your Zoho purchasing process and maximise the value of your software investment with FI Digital. Contact our expert consultants today.
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
            Request Your Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
