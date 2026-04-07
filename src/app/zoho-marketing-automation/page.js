import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Server, Users, Image as ImageIcon, BarChart3, ShieldCheck, HelpCircle } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

export default function ZohoMarketingAutomationPage() {
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
            src="/images1/woman-presenting-marketing-strategy-to-colleagues-2026-01-08-07-14-43-utc.jpg"
            alt="Zoho Marketing Automation Background"
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
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "center" }}>
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
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Zoho Marketing Automation & <span style={{ color: "var(--primary)" }}>Campaigns Services</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Automate your marketing processes, nurture leads effectively, and achieve higher ROI. FI Digital provides specialist Zoho Marketing implementation services tailored for high-growth UK businesses.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Our expert team delivers comprehensive solutions—from setup and integration to strategic consulting—enabling you to deliver personalized, timely, and effective campaigns.
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
          </div>
        </div>
      </section>

      {/* What is Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/marketing_automation2.png" alt="What is Zoho Marketing Automation" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                What is Zoho Marketing Automation?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Zoho Marketing Automation is an integrated platform designed to handle your digital marketing campaigns, enhance customer engagement, and boost conversion rates.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                With Zoho, you can create sophisticated customer journeys, automate lead nurturing, and deliver content across email, SMS, and social media. FI Digital helps you maximize these features to turn prospects into loyal customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Our Zoho Marketing Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
              Our Zoho-certified team supports you at every stage, ensuring optimal performance and measurable results:
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {[
              { icon: <Server size={24} />, title: "Platform Setup & Configuration", body: "We configure your Zoho environment, including domain setup, email authentication (SPF/DKIM), list management, and GDPR compliance." },
              { icon: <Users size={24} />, title: "Lead Journey Design & Automation", body: "Our consultants craft personalized customer journeys using Journey Builder, automating follow-ups to deliver messages at the perfect moment." },
              { icon: <ImageIcon size={24} />, title: "CRM Integration", body: "Seamlessly integrate with Zoho CRM for a unified customer view. This enables smooth data transfer, precise targeting, and sales/marketing alignment." },
              { icon: <BarChart3 size={24} />, title: "Analytics & Optimization", body: "Measure campaign performance and fine-tune your strategy. Our team regularly reviews and optimizes campaigns to maximize your ROI." },
              { icon: <HelpCircle size={24} />, title: "Strategic Consultation", body: "Beyond technical setup, we offer expert guidance on content strategy, campaign design, and audience targeting for maximum impact." }
            ].map((card, i) => (
              <div key={i} style={{ padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInUp">
                <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(79, 70, 229, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: "1.5rem" }}>
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
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Multi-Channel Marketing with Zoho
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                Zoho’s marketing automation provide an integrated approach to your multi-channel strategy. We ensure seamless connectivity across:
              </p>
              <div style={{ display: "grid", gap: "1.2rem" }}>
                 {[
                   { t: "Zoho Campaigns", d: "Email marketing automation and targeted campaigns." },
                   { t: "Zoho Social", d: "Management and automation of your social media presence." },
                   { t: "Zoho SalesIQ", d: "Real-time website visitor tracking and engagement." },
                   { t: "Zoho Survey & Forms", d: "Integrated data collection for customer insights." }
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
                <img src="/images1/mu-chanells.png" alt="Multi-Channel Marketing" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/marketing1.jpg" alt="Benefits" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Benefits of Proper Implementation
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Partnering with FI Digital for your Zoho Marketing Automation ensures tangible benefits for your business:
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  "Improved Lead Nurturing: Personalized automation significantly boosts engagement.",
                  "Higher Campaign ROI: Precise targeting and automation enhance effectiveness.",
                  "Time Savings: Automated workflows reduce manual effort, freeing space for strategy.",
                  "Enhanced Insights: Advanced analytics provide deep behavior insights.",
                  "Sales Alignment: CRM integration ensures smooth lead hand-off to sales."
                ].map((benefit, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ padding: "4px", borderRadius: "50%", background: "rgba(79, 70, 229, 0.1)", color: "var(--primary)" }}>
                      <ArrowRight size={16} />
                    </div>
                    <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "1rem" }}>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center", marginBottom: "80px" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <ShieldCheck size={48} className="text-primary" style={{ marginBottom: "1.5rem" }} />
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                UK-Focused Compliance & GDPR
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                We understand the specific challenges UK businesses face around GDPR. Our consultants ensure your Zoho implementations fully comply with current data protection regulations, building trust with your customers.
              </p>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <img src="/images1/marketing.png" alt="GDPR Compliance" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "3rem", textAlign: "center" }}>
              FAQ – Zoho Marketing
            </h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                { q: "Is Zoho Marketing Automation part of Zoho CRM?", a: "It is a dedicated platform designed for comprehensive marketing that integrates seamlessly for a unified ecosystem." },
                { q: "Can Zoho's marketing tools integrate with our website?", a: "Yes, Zoho Marketing Automation easily integrates with existing websites through robust APIs and webhooks." }
              ].map((faq, i) => (
                <details key={i} style={{ background: "var(--card-bg)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border)", cursor: "pointer" }}>
                  <summary style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {faq.q}
                    <ArrowRight size={20} className="text-primary" style={{ transform: "rotate(90deg)" }} />
                  </summary>
                  <p style={{ marginTop: "1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, marginBottom: "2rem", lineHeight: 1.1 }}>
            Next Steps – Start Automating Today
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9, lineHeight: 1.7 }}>
            Ready to transform your marketing with powerful, integrated automation? Contact our expert consultants in the UK today to discuss how we can help you drive higher growth.
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
