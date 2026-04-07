import Link from "next/link";
import { ArrowRight, Server, Users, Image as ImageIcon, BarChart3, ShieldCheck, HelpCircle } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

export default function ZohoMarketingAutomationPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeIn">
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.75rem",
                padding: "0.6rem 1.2rem", background: "rgba(79, 70, 229, 0.1)",
                borderRadius: "100px", border: "1px solid rgba(79, 70, 229, 0.2)",
                marginBottom: "2.5rem", color: "var(--primary)", fontSize: "0.85rem",
                fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase"
              }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                Nurture & Convert
              </div>
              <h1 style={{
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Zoho Marketing Automation & Campaigns Services
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "750px"
              }}>
                Are you looking to automate your marketing processes, nurture leads effectively, and achieve higher ROI from your marketing activities? FI Digital provides specialist Zoho Marketing Automation and Zoho Campaigns implementation services tailored specifically for UK businesses.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "750px"
              }}>
                Our expert team delivers comprehensive solutions—from setup and integration to strategic consulting—enabling you to deliver personalised, timely, and effective campaigns.
              </p>
              <Link href="/contact" style={{
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
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <img src="/images1/saas/home.jpg" alt="Zoho Automation" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* What is Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/saas/classic01.png" alt="What is Zoho Marketing Automation" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                What is Zoho Marketing Automation?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                Zoho Marketing Automation is a robust, integrated platform designed to streamline your digital marketing campaigns, enhance customer engagement, and boost conversion rates.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                With Zoho Marketing Automation, you can create sophisticated customer journeys, automate lead nurturing, and deliver personalised content across multiple channels including email, SMS, social media, and your website. FI Digital helps you maximise these powerful features to turn prospects into engaged customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Our Zoho Marketing Automation Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
              Our Zoho-certified team supports you at every stage, ensuring optimal performance and measurable results:
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem" }}>
            {[
              { icon: <Server size={24} />, title: "Platform Setup & Configuration", body: "We configure your Zoho Marketing Automation environment, including domain setup, email authentication (SPF/DKIM), list management, and GDPR compliance." },
              { icon: <Users size={24} />, title: "Lead Journey Design & Automation", body: "Our consultants craft personalised customer journeys using Journey Builder, automating lead nurturing and follow-ups to deliver the right message at the right time." },
              { icon: <ImageIcon size={24} />, title: "CRM Integration", body: "Seamlessly integrate with Zoho CRM for a unified view of your customers. This enables smooth data transfer, precise targeting, and sales/marketing alignment." },
              { icon: <BarChart3 size={24} />, title: "Analytics & Campaign Optimisation", body: "Measure campaign performance and fine-tune strategy. Our team regularly reviews and optimises your campaigns to maximise ROI and continuous improvement." },
              { icon: <HelpCircle size={24} />, title: "Strategic Marketing Consultation", body: "Beyond technical implementation, we offer strategic guidance on content strategy, campaign design, and audience targeting to ensure business impact." }
            ].map((card, i) => (
              <div key={i} style={{ padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInUp">
                <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: "rgba(79, 70, 229, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: "1.5rem" }}>
                   {card.icon}
                </div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>{card.title}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Channel Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Multi-Channel Marketing with Zoho
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Zoho’s marketing automation solutions provide an integrated approach to your multi-channel marketing strategy. We ensure seamless connectivity across:
              </p>
              <div style={{ display: "grid", gap: "1.2rem" }}>
                 {[
                   { t: "Zoho Campaigns", d: "Email marketing automation and targeted campaigns." },
                   { t: "Zoho Social", d: "Management and automation of your social media presence." },
                   { t: "Zoho SalesIQ", d: "Real-time website visitor tracking and engagement." },
                   { t: "Zoho Survey & Zoho Forms", d: "Integrated data collection for customer insights." }
                 ].map((item, index) => (
                   <div key={index} style={{ display: "flex", gap: "1rem" }}>
                      <div style={{ marginTop: "6px" }}><ArrowRight size={18} className="text-primary" /></div>
                      <div>
                        <strong style={{ color: "var(--text)" }}>{item.t}:</strong>
                        <span style={{ color: "var(--text-muted)", marginLeft: "0.5rem" }}>{item.d}</span>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <img src="/images1/saas/classic04.png" alt="Multi-Channel Marketing" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/saas/classic03.png" alt="Benefits" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Benefits of Proper Implementation
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Partnering with FI Digital for your Zoho Marketing Automation ensures tangible benefits:
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  "Improved Lead Nurturing: Personalised automation significantly boosts engagement and conversions.",
                  "Higher Campaign ROI: Accurate targeting and automation enhance campaign effectiveness.",
                  "Time Savings: Automated workflows reduce manual effort, freeing space for strategy.",
                  "Enhanced Customer Insight: Advanced analytics provide deep insights into behavior.",
                  "Better Alignment with Sales: CRM integration ensures smooth lead hand-off to sales."
                ].map((benefit, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ padding: "4px", borderRadius: "50%", background: "rgba(79, 70, 229, 0.1)", color: "var(--primary)" }}>
                      <ArrowRight size={16} />
                    </div>
                    <p style={{ color: "var(--text-muted)", margin: 0 }}>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <ShieldCheck size={48} className="text-primary" style={{ marginBottom: "1.5rem" }} />
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                UK-Focused Compliance & GDPR
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                At FI Digital, we understand the specific challenges UK businesses face, particularly around GDPR compliance. Our consultants ensure your Zoho Marketing Automation and Campaigns implementations fully comply with all current UK data protection regulations, protecting your business and building trust with your customers.
              </p>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <img src="/images1/saas/classic02.png" alt="GDPR Compliance" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "3rem", textAlign: "center" }}>
            FAQ – Zoho Marketing Automation
          </h2>
          <div style={{ display: "grid", gap: "1.5rem" }}>
            {[
              { q: "Is Zoho Marketing Automation part of Zoho CRM or separate?", a: "Zoho Marketing Automation is a dedicated platform separate from CRM, specifically designed for comprehensive marketing. However, it integrates seamlessly for a unified ecosystem." },
              { q: "Can Zoho's marketing tools integrate with our existing website or CRM?", a: "Yes, Zoho Marketing Automation easily integrates with existing websites and other CRMs through robust APIs and webhooks, providing a unified data experience." }
            ].map((faq, i) => (
              <details key={i} style={{ background: "var(--card-bg)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border)", cursor: "pointer" }}>
                <summary style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.q}
                  <ArrowRight size={20} className="text-primary transform transition-transform duration-300" style={{ transform: "rotate(90deg)" }} />
                </summary>
                <p style={{ marginTop: "1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, marginBottom: "2rem" }}>
            Next Steps – Start Automating Today
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9, lineHeight: 1.7 }}>
            Ready to transform your marketing with powerful, integrated automation? Contact FI Digital’s expert Zoho consultants in the UK today to discuss how we can help you drive higher growth.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "1.2rem 3.5rem",
            background: "white",
            color: "var(--primary)",
            fontWeight: 700,
            fontSize: "1.1rem",
            borderRadius: "16px",
            textDecoration: "none",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          }}>
            Book Your Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
