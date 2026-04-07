import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Users, Layers, Zap, Headphones, BarChart3, Repeat, Code, Briefcase, Mail, MapPin } from "lucide-react";
import { metadata as pageMetadata } from './meta';

export const metadata = pageMetadata;

const localServices = [
  {
    title: "Zoho CRM Consulting & Implementation",
    content: "Our certified consultants implement and configure Zoho CRM to streamline your sales processes and improve lead management.",
    icon: <Users size={24} />
  },
  {
    title: "Zoho One Implementation & Rollout",
    content: "Complete business operating system with 50+ apps. We help you strategically plan, configure, and deploy for maximum efficiency.",
    icon: <Layers size={24} />
  },
  {
    title: "Zoho Creator Custom App Development",
    content: "Our low-code developers build bespoke applications to automate unique workflows and reduce manual processes.",
    icon: <Code size={24} />
  },
  {
    title: "Zoho Desk & Support Automation",
    content: "Transform customer service with ticketing systems and automated workflows to significantly improve satisfaction.",
    icon: <Headphones size={24} />
  },
  {
    title: "Zoho Analytics Consulting",
    content: "Turn your business data into actionable insights through custom dashboards and reports tailored to your KPIs.",
    icon: <BarChart3 size={24} />
  },
  {
    title: "Zoho Integration Services",
    content: "Seamless integration with ERP, accounting, e-commerce, and telephony solutions to unify your business tech stack.",
    icon: <Repeat size={24} />
  }
];

const coverageAreas = [
  "Reading", "Slough", "Bracknell", "Maidenhead", "Windsor",
  "Wokingham", "Newbury", "Thatcham", "Ascot", "Crowthorne"
];

const successStories = [
  {
    location: "Reading",
    title: "Professional Services Firm",
    content: "Implemented Zoho CRM integrated with Microsoft Teams & Zoho Books to enhance client onboarding and invoicing."
  },
  {
    location: "Windsor",
    title: "Retail Business",
    content: "Deployed Zoho One across departments, reducing operational costs by 20% through unified processes."
  },
  {
    location: "Slough",
    title: "Healthcare Provider",
    content: "Developed a custom patient management system on Zoho Creator with integrated billing and support via Zoho Desk & Books."
  }
];

const faqs = [
  {
    q: "Why should I work with a Zoho Partner in Berkshire?",
    a: "A local partner like FI Digital understands the regional business environment and regulatory landscape, ensuring effective, GDPR-compliant implementation."
  },
  {
    q: "How long does a Zoho implementation project take?",
    a: "Most projects range between 4 to 12 weeks depending on complexity and scope."
  },
  {
    q: "Can you migrate us from another CRM to Zoho?",
    a: "Yes. We offer secure, accurate, and GDPR-compliant data migration services."
  },
  {
    q: "Do you provide training and long-term support?",
    a: "Absolutely. We offer user training, onboarding assistance, and continuous technical support."
  },
  {
    q: "Can you integrate Zoho with our existing systems?",
    a: "Yes. We provide end-to-end integration services with ERP, accounting, telephony, marketing, and e-commerce platforms."
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
                Your Local Berkshire Partner
              </div>
              <h1 className="hero-title" style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Trusted Zoho
                <br />
                <span style={{ color: "#1d4ed8" }}>Partner in Berkshire</span>
              </h1>
              <p style={{
                fontSize: "1.2rem",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "650px",
              }}>
                Are you looking for a professional, certified, and experienced Zoho Partner in Berkshire to help you implement, optimise, and manage Zoho’s powerful business applications?
              </p>
              <p style={{
                fontSize: "1.1rem",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "650px",
              }}>
                FI Digital provides comprehensive Zoho consulting, implementation, and ongoing support for businesses across Berkshire and the Thames Valley region.
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
                 <img src="/images1/saas/corporate.jpg" alt="Zoho Partner Berkshire" style={{ width: "100%", height: "auto", borderRadius: "30px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Local Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="hero-grid" style={{ direction: "rtl" }}>
            <div style={{ direction: "ltr", position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic02.png" alt="Local Advantage" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ direction: "ltr" }} className="hero-content">
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                Why Choose a Zoho Partner in Berkshire?
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                The success of your Zoho implementation depends heavily on the partner you choose. Working with FI Digital ensures a smooth, strategic, and sustainable adoption.
              </p>
              <ul className="bullet-list">
                <li><b>Certified Zoho Professionals</b> with official backing.</li>
                <li><b>Local presence</b> understanding the Berkshire ecosystem.</li>
                <li><b>End-to-end consulting</b>, implementation, and support.</li>
                <li><b>Industry-specific expertise</b> across diverse sectors.</li>
                <li><b>GDPR-compliant</b> implementations following UK regulations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text)" }}>
                Our Services in Berkshire
            </h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "1rem auto" }}>
                Complete range of Zoho services tailored for local business transformation.
            </p>
          </div>
          
          <div className="feature-grid">
            {localServices.map((svc, i) => (
                <div key={i} style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "2.5rem", boxShadow: "var(--card-shadow)" }}>
                    <div style={{ color: "#1d4ed8", marginBottom: "1.5rem" }}>{svc.icon}</div>
                    <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.25rem" }}>{svc.title}</h4>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>{svc.content}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leading Partner Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="hero-grid">
            <div style={{ position: "relative" }}>
                 <img src="/images1/saas/corporate2.jpg" alt="Reading Experts" style={{ width: "100%", borderRadius: "30px", boxShadow: "var(--card-shadow)" }} />
            </div>
            <div className="hero-content">
              <h3 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Why FI Digital leads in Berkshire</h3>
              <ul className="bullet-list">
                <li><b>Certified Experts:</b> Holding official certifications across CRM, Creator, Analytics, Desk, and Zoho One.</li>
                <li><b>Local Knowledge:</b> Understanding the regional business environment and regulatory landscape.</li>
                <li><b>Sector Mastery:</b> Proven success in Financial Services, Retail, Manufacturing, Professional Services, Healthcare, and IT.</li>
                <li><b>Managed Support:</b> Strategic advice and ongoing technical partnership after go-live.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage & Success Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="advantage-grid">
            {/* Coverage */}
            <div style={{ background: "var(--bg-secondary)", padding: "3rem", borderRadius: "30px", border: "1px solid var(--border)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                <MapPin size={32} style={{ color: "#1d4ed8" }} />
                <h3 style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--text)" }}>Coverage Area</h3>
              </div>
              <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Supporting businesses across the entire Berkshire region:</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {coverageAreas.map((area, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 700, color: "var(--text)" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1d4ed8" }} />
                        {area}
                    </div>
                ))}
              </div>
            </div>

            {/* Stories */}
            <div>
              <h3 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "2.5rem" }}>Local Success Stories</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {successStories.map((story, i) => (
                    <div key={i} style={{ borderLeft: "4px solid #1d4ed8", paddingLeft: "1.5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                            <span style={{ background: "#1d4ed8", color: "white", padding: "0.2rem 0.6rem", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 900 }}>{story.location}</span>
                            <span style={{ fontWeight: 800, color: "var(--text)" }}>{story.title}</span>
                        </div>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{story.content}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: 800, marginBottom: "4rem" }}>FAQ – Zoho Partner Berkshire</h2>
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
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Ready to Transform Your Berkshire Business?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", marginBottom: "3rem", maxWidth: "850px", margin: "0 auto 3rem" }}>
            Take the next step in your digital transformation journey with FI Digital. Our local consultants are ready to help you implement and optimises Zoho solutions tailored to your needs.
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
