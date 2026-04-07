import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, Server, Users, ImageIcon, Layout, BarChart3, ShieldCheck, HelpCircle } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

export default function CustomerExperienceConsultingPage() {
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
            src="/images1/consultant.jpg"
            alt="Customer Experience CX Consulting Background"
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
                Customer Experience (CX) Consulting with <span style={{ color: "var(--primary)" }}>Zoho in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                In today&apos;s competitive UK market, exceptional customer experience is a vital differentiator. At FI Digital, we provide specialised CX consulting, harnessing the power of Zoho&apos;s comprehensive suite to identify, map, and enhance every interaction.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                From journey mapping to implementing powerful Zoho solutions, our expert consultants help UK businesses transform their CX, driving loyalty, retention, and profitability.
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

      {/* Why CX Matters Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <Image src="/images1/customer matters.png" alt="Why CX Matters" width={600} height={400} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Why Customer Experience Matters
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Customer experience is more than just service; it’s a strategic advantage. Companies excelling at CX consistently outperform competitors, generating higher revenues and greater loyalty.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 700, marginBottom: "1.5rem" }}>
                FI Digital specialises in expertly deploying and configuring Zoho solutions to ensure your UK business can swiftly access valuable insights to drive strategic growth.
              </p>
              <ul style={{ display: "grid", gap: "1rem" }}>
                {[
                  "Identify pain points and opportunities in existing customer interactions.",
                  "Leverage Zoho’s integrated suite (CRM, Desk, Marketing Automation) for personalized engagement.",
                  "Achieve measurable improvements in satisfaction, loyalty, and overall performance."
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", fontSize: "1.05rem" }}>
                    <div style={{ marginTop: "6px" }}><ArrowRight size={18} className="text-primary" /></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CX consulting services grid */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Our CX Consulting Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
              Comprehensive, structured CX consulting services built around your business needs, combining strategic insight with technical expertise.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {[
              { icon: <Layout size={24} />, title: "Customer Journey Mapping", body: "Identify every interaction your customers have with your business. We highlight opportunities and uncover friction points causing dissatisfaction." },
              { icon: <Server size={24} />, title: "Zoho CRM Plus & Zoho One Implementation", body: "Strategic implementation of Zoho’s powerful suite to address every stage of your customer journey. We optimize every interaction across sales, support, and marketing." },
              { icon: <Users size={24} />, title: "Training Teams in CX Best Practices", body: "Comprehensive training for your staff to ensure they understand CX principles and effectively use Zoho’s tools for meaningful engagements." },
              { icon: <BarChart3 size={24} />, title: "Ongoing CX Metrics & Optimisation", body: "Establish systems using Zoho Analytics and Survey to regularly measure CX performance and identify continuous improvements." },
              { icon: <HelpCircle size={24} />, title: "End-to-End Customer Journey Tailoring", body: "Streamline the journey from marketing via Zoho Campaigns to support via Zoho Desk, collecting feedback along the way via Zoho Survey." },
              { icon: <ShieldCheck size={24} />, title: "UK CX Insights & Compliance", body: "Ensure your customer interactions comply with UK-specific regulations like GDPR, building trust and transparency in the local market." }
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

      {/* Results Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/results improved costomer exprience.webp" alt="CX Results" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Results of Improved Customer Experience
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Partnering with FI Digital for CX consulting and Zoho implementation delivers clear, measurable improvements:
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  { t: "Enhanced Customer Loyalty", d: "Improved interactions build stronger relationships and boost long-term retention." },
                  { t: "Higher Satisfaction Scores", d: "Streamlined processes lead to significantly improved NPS and CSAT ratings." },
                  { t: "Increased Revenue", d: "Positive experiences drive repeat business, higher spend per customer, and referrals." },
                  { t: "Reduced Service Costs", d: "Efficient processes and automation lead to reduced operating costs for support." }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ marginTop: "6px" }}><ArrowRight size={18} className="text-primary" /></div>
                    <div>
                      <strong style={{ color: "var(--text)" }}>{item.t}:</strong>
                      <span style={{ color: "var(--text-muted)", marginLeft: "0.5rem" }}>{item.d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why FI Digital Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ order: { md: 2, base: 1 } }} className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Why FI Digital for CX Consulting?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                FI Digital uniquely combines extensive business experience, proven Zoho expertise, and a dedicated focus on UK customer experience strategies.
              </p>
              <ul style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  "Deeply familiar with UK consumer expectations, regulatory environments (GDPR), and market trends.",
                  "Strategically leverage Zoho’s powerful applications to enhance interactions across your entire business.",
                  "Proven track record delivering tangible CX improvements across financial, retail, and healthcare industries."
                ].map((benefit, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", fontSize: "1.05rem" }}>
                    <div style={{ marginTop: "6px" }}><ArrowRight size={18} className="text-primary" /></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ order: { md: 1, base: 2 }, position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <img src="/images1/why4.jpg" alt="Why Choose FI Digital" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "3rem", textAlign: "center" }}>
            FAQ – Customer Experience Consulting
          </h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              { q: "Is Customer Experience Consulting only about software?", a: "No, CX consulting involves improving people, processes, and strategies. Software platforms like Zoho serve as enablers, supporting streamlined interactions and providing insights." },
              { q: "How do you measure CX improvement?", a: "We use metrics such as Net Promoter Score (NPS), Customer Satisfaction Scores (CSAT), retention rates, and response times, tracked via Zoho Analytics dashboards." },
              { q: "Can you help if we don't use Zoho yet?", a: "Yes, we provide CX strategy and consulting independent of your software. If Zoho can enhance your CX, we will recommend and implement tailored solutions." },
              { q: "Ready to Transform Your Customer Experience?", a: "Talk to our expert team today about crafting a customer experience strategy powered by Zoho solutions. Discover how we elevate UK businesses." }
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
      </section>

      {/* Final CTA Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2.1rem, 4.5vw, 3.5rem)", fontWeight: 950, marginBottom: "2rem", lineHeight: 1.1 }}>
            Ready to Transform Your Customer Experience?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9, lineHeight: 1.7 }}>
            Discover how FI Digital&apos;s CX consulting elevate your UK business, enhance customer loyalty, and boost profitability. Schedule your free consultation today.
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
            Download Success Roadmap <ArrowRight size={20} />
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
