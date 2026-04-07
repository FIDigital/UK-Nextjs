import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2, Server, Users, Image as ImageIcon, Shield, MessageSquare, Zap, Headphones, BarChart3, Repeat, Code, Briefcase, Mail } from "lucide-react";
import { metadata as pageMetadata } from './meta';

export const metadata = pageMetadata;

const certifiedServices = [
  {
    title: "Zoho CRM Implementation & Customisation",
    content: "We help you implement and customise Zoho CRM to streamline lead management, sales pipelines, and customer engagement.",
    icon: <Users size={24} />
  },
  {
    title: "Zoho One Implementation",
    content: "We deploy Zoho One—the all-in-one business operating system—to unify your sales, marketing, finance, HR, and customer service processes.",
    icon: <Zap size={24} />
  },
  {
    title: "Zoho Creator App Development",
    content: "We design and build low-code applications using Zoho Creator to automate your unique business processes.",
    icon: <Code size={24} />
  },
  {
    title: "Zoho Desk Implementation & Support",
    content: "Streamline your customer support and ticketing system with our certified Zoho Desk implementation experts.",
    icon: <Headphones size={24} />
  },
  {
    title: "Zoho Analytics Implementation",
    content: "We build real-time dashboards and BI solutions using Zoho Analytics, empowering data-driven decision-making.",
    icon: <BarChart3 size={24} />
  },
  {
    title: "Zoho Marketing Automation",
    content: "We help you implement Zoho Campaigns and Zoho Marketing Automation to drive better marketing results.",
    icon: <Zap size={24} />
  }
];

const faqs = [
  {
    q: "What is the benefit of working with a Zoho Certified Partner?",
    a: "Certified partners have verified technical expertise, official recognition from Zoho, and proven project delivery capability."
  },
  {
    q: "Can you help us migrate from another system to Zoho?",
    a: "Yes. We offer secure, accurate, and GDPR-compliant data migration services."
  },
  {
    q: "Do you provide training and long-term support?",
    a: "Absolutely. We offer user training, onboarding, and ongoing technical support."
  },
  {
    q: "Are your services GDPR-compliant?",
    a: "Yes. As a UK-based certified partner, we follow strict data protection regulations and GDPR standards."
  },
  {
    q: "Do you provide system integration services?",
    a: "Yes. We provide end-to-end system integration services with accounting, ERP, telephony, and marketing platforms."
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
                Certified & Official Partner
              </div>
              <h1 className="hero-title" style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Zoho Certified
                <br />
                <span style={{ color: "#1d4ed8" }}>Partner in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.2vw, 1.3rem)",
                color: "var(--text)",
                fontWeight: 700,
                marginBottom: "1rem",
                lineHeight: 1.4,
              }}>
                Trusted Experts, Proven Results
              </p>
              <p style={{
                fontSize: "1.1rem",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                Looking for a reliable and officially certified Zoho partner in the UK? FI Digital is a recognised Zoho Certified Partner in the UK, helping businesses design, implement, and optimise Zoho applications tailored to their unique needs.
              </p>
              <p style={{
                fontSize: "1.1rem",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                Our certified partner status is your assurance that we have the skills, experience, and official backing to deliver Zoho solutions effectively and securely—helping your business grow.
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
                <img src="/images1/saas/desk1.jpeg" alt="Zoho Certified Partner UK" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="hero-grid" style={{ direction: "rtl" }}>
            <div style={{ direction: "ltr", position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/desk started.jpg" alt="What is a Zoho Certified Partner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ direction: "ltr" }} className="hero-content">
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                What Does Zoho Certified Partner Status Mean?
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                A Zoho Certified Partner is a company officially recognised by Zoho Corporation for their technical expertise, successful project delivery, and commitment to client success.
              </p>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                To achieve certification, a partner must:
              </p>
              <ul className="bullet-list" style={{ marginBottom: "1.5rem" }}>
                <li>Complete Zoho’s official certification exams</li>
                <li>Demonstrate proven implementation success across Zoho apps</li>
                <li>Follow Zoho’s service quality and delivery standards</li>
                <li>Maintain a team of certified consultants and developers</li>
                <li>Commit to ongoing training and upskilling</li>
              </ul>
              <p style={{ color: "var(--text)", fontWeight: 800, fontSize: "1.1rem" }}>
                FI Digital proudly holds this certification, which means we bring you not just knowledge—but a verified track record of delivering Zoho projects successfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text)" }}>
                Why Work with a Zoho Certified Partner in the UK?
            </h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "1rem auto" }}>
                Choosing a certified partner is critical when adopting Zoho’s business applications. Here’s why UK businesses trust us:
            </p>
          </div>
          
          <div className="feature-grid">
            {[
                { t: "1. Certified & Skilled Experts", d: "Our team has passed official Zoho certification exams across applications like CRM, Creator, Analytics, Desk, and Zoho One.", i: <CheckCircle2 /> },
                { t: "2. Proven Implementation Methodology", d: "Our projects follow Zoho’s best practices and structured methodologies to ensure smooth, efficient implementation.", i: <Server /> },
                { t: "3. Local UK Presence", d: "We understand the business environment, regulations, and customer needs specific to the UK market.", i: <ImageIcon /> },
                { t: "4. Direct Collaboration with Zoho", d: "As a certified partner, we have priority access to Zoho’s product, technical, and partner teams.", i: <ImageIcon /> },
                { t: "5. GDPR & Data Compliance", d: "We deliver fully GDPR-compliant solutions with secure data handling.", i: <ImageIcon /> },
                { t: "6. Long-Term Partnership", d: "We offer ongoing support, system optimisation, and continuous improvement.", i: <ImageIcon /> }
            ].map((item, idx) => (
                <div key={idx} style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "2rem", transition: "all 0.3s ease" }}>
                    <div style={{ color: "#1d4ed8", marginBottom: "1rem" }}>{item.i}</div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>{item.t}</h4>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>{item.d}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text)" }}>
                Our Zoho Certified Partner Services
            </h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "1rem auto" }}>
                As a certified partner, we provide end-to-end services across the entire Zoho product suite
            </p>
          </div>
          
          <div className="feature-grid">
            {certifiedServices.map((svc, idx) => (
                <div key={idx} style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "2.5rem", boxShadow: "var(--card-shadow)" }}>
                    <div style={{ color: "#1d4ed8", marginBottom: "1.5rem" }}>{svc.icon}</div>
                    <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.25rem" }}>{svc.title}</h4>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>{svc.content}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Integration Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="hero-grid">
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/desk4.jpg" alt="Zoho Integrations" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="hero-content">
              <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>7. System Integration</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>We integrate Zoho with your existing systems, including:</p>
              <ul className="bullet-list" style={{ marginBottom: "2rem" }}>
                <li><b>ERP platforms (SAP, Oracle, Microsoft Dynamics)</b></li>
                <li><b>Accounting software (Xero, QuickBooks, Sage)</b></li>
                <li><b>Telephony systems (Twilio, RingCentral)</b></li>
                <li><b>E-commerce platforms (Shopify, WooCommerce)</b></li>
                <li><b>Marketing tools (Google Ads, Mailchimp, HubSpot)</b></li>
              </ul>
              <ul className="bullet-list">
                <li><b>Data Migration & Validation:</b> We securely migrate data from legacy systems to Zoho, ensuring accuracy and compliance.</li>
                <li><b>User Training & Adoption Support:</b> We provide structured training sessions to help your team effectively use Zoho applications.</li>
                <li><b>Managed Services & Ongoing Support:</b> We offer long-term technical support, system optimisation, and feature enhancements.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="hero-grid" style={{ direction: "rtl" }}>
            <div style={{ direction: "ltr", position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/corporate2.jpg" alt="Certified Success Stories" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ direction: "ltr" }} className="hero-content">
              <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Zoho Certified Partner – Success Stories</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div>
                    <h5 style={{ fontWeight: 800, color: "#1d4ed8", fontSize: "1.1rem" }}>Retail Chain – London</h5>
                    <p style={{ color: "var(--text-muted)" }}>Implemented Zoho One, integrating sales, finance, and operations. Outcome: Increased efficiency and improved business visibility.</p>
                </div>
                <div>
                    <h5 style={{ fontWeight: 800, color: "#1d4ed8", fontSize: "1.1rem" }}>Professional Services Firm – Manchester</h5>
                    <p style={{ color: "var(--text-muted)" }}>Deployed Zoho CRM, Zoho Desk, and Zoho Analytics, streamlining client onboarding. Result: 30% improvement in client retention rate.</p>
                </div>
                <div>
                    <h5 style={{ fontWeight: 800, color: "#1d4ed8", fontSize: "1.1rem" }}>Healthcare Provider – Midlands</h5>
                    <p style={{ color: "var(--text-muted)" }}>Built custom Zoho Creator apps for patient management. Impact: Reduced administrative overhead and improved patient service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "80px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text)" }}>FAQ – Zoho Certified Partner UK</h2>
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
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, marginBottom: "1.5rem", lineHeight: 1.2 }}>
            Ready to Work with a Zoho Certified Partner in the UK?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", marginBottom: "3rem", maxWidth: "850px", margin: "0 auto 3rem" }}>
            Partner with FI Digital—your officially recognised Zoho Certified Partner in the UK—and transform the way you work. Request Your Free Zoho Consultation Today.
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
            Request Your Free Zoho Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
