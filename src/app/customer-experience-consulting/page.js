import Link from "next/link";
import { ArrowRight, Map, Settings, GraduationCap, BarChart3, LineChart, ShieldCheck } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

export default function CustomerExperienceConsultingPage() {
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
              <h1 style={{
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Customer Experience (CX) Consulting with Zoho in the UK
              </h1>
              <p style={{
                fontSize: "1.15rem",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "750px"
              }}>
                In today’s competitive UK market, exceptional customer experience is a vital differentiator for businesses seeking long-term success. At FI Digital, we provide specialised Customer Experience (CX) consulting, harnessing the power of Zoho’s comprehensive suite of applications. Our CX consulting team helps you identify, map, and enhance every customer interaction, ensuring your business delivers consistently outstanding experiences at every stage of the customer journey.
              </p>
              <p style={{
                fontSize: "1.15rem",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "750px"
              }}>
                From detailed customer journey mapping to implementing powerful Zoho solutions, our expert consultants help UK businesses transform their CX, driving increased loyalty, retention, and profitability.
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
                <img src="/images1/saas/home.jpg" alt="Customer CX" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why CX Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/saas/classic01.png" alt="Customer Matters" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Why Customer Experience Matters
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Customer experience has become more than just customer service; it’s a strategic advantage in a crowded marketplace. Companies excelling at customer experience consistently outperform competitors, generating higher revenues, greater loyalty, and more referrals. At FI Digital, we understand the critical importance of delivering exceptional experiences in the UK market. Our tailored approach helps your business:
              </p>
              <p style={{ fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>
                FI Digital specialises in expertly deploying and configuring Zoho Analytics, ensuring your UK business can swiftly access valuable insights to drive strategic growth.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1rem" }}>
                {[
                  "Clearly identify pain points and improvement opportunities in your existing customer interactions.",
                  "Leverage Zoho’s integrated suite (CRM, Desk, Marketing Automation, SalesIQ, and more) to provide personalised and timely customer engagements.",
                  "Achieve measurable improvements in customer satisfaction, loyalty, and overall business performance."
                ].map((li, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                    <ArrowRight size={18} className="text-primary" style={{ flexShrink: 0, marginTop: "4px" }} />
                    {li}
                  </li>
                ))}
              </ul>
              <p style={{ color: "var(--text-muted)", marginTop: "1.5rem", lineHeight: 1.8 }}>
                By strategically implementing Zoho’s powerful customer engagement tools, we ensure your business stands out for the right reasons.
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
              Our CX Consulting Services
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
              FI Digital offers comprehensive, structured CX consulting services built specifically around your business needs, combining strategic insight with technical expertise.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem" }}>
             {[
               { icon: <Map size={24} />, title: "Customer Journey Mapping", body: "Our detailed customer journey mapping service identifies every interaction your customers have with your business. We highlight key moments of opportunity and uncover friction points that may be causing customer dissatisfaction. Through visualisation and in-depth analysis, we ensure your customer journeys become smooth, intuitive, and consistently rewarding." },
               { icon: <Settings size={24} />, title: "Zoho CRM Plus & Zoho One Implementation", body: "FI Digital specialises in the strategic implementation of Zoho’s powerful suite—such as Zoho CRM Plus and Zoho One—to address and enhance every stage of your customer journey. Whether it's sales, customer support, marketing, or analytics, we implement the perfect blend of Zoho tools to optimise every interaction." },
               { icon: <GraduationCap size={24} />, title: "Training Teams in CX Best Practices", body: "Our CX consultants provide comprehensive training for your staff, ensuring they fully understand customer experience principles and effectively use Zoho’s tools. This equips your team with the skills and confidence necessary to consistently deliver exceptional service and meaningful engagements." },
               { icon: <BarChart3 size={24} />, title: "Ongoing CX Metrics & Optimisation", body: "We establish effective systems using Zoho Analytics, Zoho Survey, and custom dashboards to regularly measure CX performance. Through ongoing analysis, we identify continuous improvements, fine-tuning strategies for maximum customer satisfaction and loyalty." },
               { icon: <ArrowRight size={24} />, title: "Tailoring Zoho for End-to-End Journey", body: "Imagine a streamlined customer journey—starting with targeted email marketing campaigns via Zoho Campaigns, seamlessly moving leads into your Zoho CRM, supported by real-time personalised engagements through Zoho SalesIQ, efficiently managed customer queries via Zoho Desk, and collecting valuable customer feedback through Zoho Survey." },
               { icon: <ShieldCheck size={24} />, title: "UK CX Insights & Compliance", body: "FI Digital deeply understands the unique expectations and regulatory landscape of UK customers, including the importance of GDPR compliance and data privacy. Our CX consulting solutions ensure your customer interactions not only delight and engage but also comply fully with UK-specific regulations and best practices." }
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

      {/* Results Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/saas/classic04.png" alt="Results" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Results of Improved Customer Experience
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                When partnering with FI Digital for customer experience consulting and Zoho solutions implementation, your business can expect clear, measurable improvements, including:
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1rem" }}>
                {[
                  "Enhanced Customer Loyalty: Improved interactions build stronger customer relationships and boost long-term retention.",
                  "Higher Satisfaction Scores: Streamlined processes and responsive service lead to significantly improved NPS and customer satisfaction ratings.",
                  "Increased Revenue: Positive customer experiences directly drive repeat business, higher spend per customer, and increased referrals.",
                  "Reduced Customer Service Costs: More efficient processes, proactive communication, and automation lead to reduced operating costs."
                ].map((li, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                    <ArrowRight size={18} className="text-primary" style={{ flexShrink: 0, marginTop: "4px" }} />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
             <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Why FI Digital for CX Consulting?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                 FI Digital uniquely combines extensive business experience, proven Zoho expertise, and a dedicated focus on UK customer experience strategies. Our clients choose us because we:
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1rem" }}>
                {[
                  "Understand UK Market Dynamics: We’re deeply familiar with UK consumer expectations, regulatory environments, and market trends, ensuring relevance and effectiveness.",
                  "Offer Integrated Zoho Expertise: We leverage Zoho’s powerful applications strategically to support and enhance customer interactions across your business.",
                  "Provide Proven Results: We have delivered tangible customer experience improvements for clients across diverse UK industries."
                ].map((li, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                    <ArrowRight size={18} className="text-primary" style={{ flexShrink: 0, marginTop: "4px" }} />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <img src="/images1/team.jpg" alt="Why us" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
          <div style={{ display: "grid", gap: "1.5rem" }}>
            {[
              { q: "Is Customer Experience Consulting only about software?", a: "No, CX consulting involves improving your people, processes, and strategies. Software platforms like Zoho serve as enablers, supporting streamlined interactions and providing measurable insights for continuous improvement." },
              { q: "How do you measure CX improvement?", a: "We use metrics such as Net Promoter Score (NPS), Customer Satisfaction Scores (CSAT), customer retention rates, and response times. We configure Zoho Analytics dashboards to regularly track and measure these important CX metrics." },
              { q: "Our company doesn’t use Zoho yet—can you still help with CX?", a: "Yes, FI Digital provides CX strategy and consulting services independent of the software you currently use. If Zoho applications can help enhance your CX, we can recommend and implement solutions tailored specifically to your requirements." },
              { q: "Ready to Transform Your Customer Experience?", a: "Discover how FI Digital’s customer experience consulting services can elevate your UK business, enhance customer loyalty, and significantly boost profitability. Talk to our expert team today about crafting a customer experience strategy powered by Zoho solutions. Schedule Your Free CX Consultation Today" }
            ].map((faq, i) => (
              <details key={i} style={{ background: "var(--card-bg)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border)", cursor: "pointer" }}>
                <summary style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.q}
                  <ArrowRight size={20} className="text-primary transform transition-transform duration-300" style={{ transform: "rotate(90deg)" }} />
                </summary>
                <div style={{ marginTop: "1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Verbatim Zoho Creator CTA Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, marginBottom: "2rem" }}>
            Next Steps – Start Building Your Custom Zoho Creator App
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9, lineHeight: 1.7 }}>
            Ready to streamline your business processes with powerful custom apps built on Zoho Creator? Get in touch with our expert UK-based development team today to discuss your requirements and see how quickly we can transform your business operations.
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
            Request Your Free Zoho Creator Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
