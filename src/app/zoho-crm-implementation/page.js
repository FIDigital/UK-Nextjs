import Link from "next/link";
import { ArrowRight, ClipboardCheck, Settings, Database, GraduationCap, LineChart, ShieldCheck } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

export default function ZohoCrmImplementationPage() {
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
                Zoho CRM Implementation Services in the UK
              </h1>
              <p style={{
                fontSize: "1.15rem",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "750px"
              }}>
                Are you exploring how Zoho’s powerful suite of applications can streamline your business processes, enhance productivity, and drive meaningful results? FI Digital is your trusted Zoho consultancy partner in the UK, providing expert guidance, tailored advice, and comprehensive business process mapping to ensure your Zoho implementation delivers maximum impact.
              </p>
              <p style={{
                fontSize: "1.15rem",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "750px"
              }}>
                From CRM and marketing automation to custom-built Creator apps, our certified consultants help you align your Zoho solution precisely with your business needs, ensuring seamless integration and rapid ROI.
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
                <img src="https://www.ribstechnologies.com/img/zoho/images/zoho-crm-plus-dubai-uae-bgplain.webp" alt="Zoho CRM Implementation" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/saas/classic01.png" alt="Why Partner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Why Implement Zoho CRM with a Certified Partner?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Zoho CRM is known globally for its ability to streamline sales processes, enhance customer interactions, and automate daily tasks. However, realising the full potential of Zoho CRM requires precise customisation, integration, and expert guidance—this is where FI Digital comes in.
              </p>
              <p style={{ fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>
                Our certified Zoho CRM consultants ensure:
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1.2rem" }}>
                {[
                  { t: "Tailored CRM Setup", d: "We adapt Zoho CRM to match your business processes perfectly." },
                  { t: "Seamless Integration", d: "Connect Zoho CRM effortlessly with existing systems such as email platforms, websites, accounting software, and other Zoho applications." },
                  { t: "Data Migration Support", d: "Smooth transition from your current CRM or spreadsheets, ensuring minimal disruption and data accuracy." }
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                    <ArrowRight size={18} className="text-primary" style={{ flexShrink: 0, marginTop: "4px" }} />
                    <div>
                        <strong style={{ color: "var(--text)" }}>{item.t}:</strong> {item.d}
                    </div>
                  </li>
                ))}
              </ul>
              <p style={{ color: "var(--text-muted)", marginTop: "1.5rem", lineHeight: 1.8 }}>
                Partnering with FI Digital ensures your CRM is configured for maximum impact, productivity, and long-term scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Our Zoho CRM Implementation Process
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                FI Digital follows a structured yet flexible approach for every CRM implementation project, ensuring clarity, efficiency, and high success rates:
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  { n: "1", t: "CRM Planning & Requirements Gathering", d: "We carefully understand your unique business processes and goals. Our consultants engage closely with your team to document requirements." },
                  { n: "2", t: "Configuration & Custom Fields Setup", d: "Every business is unique. We configure Zoho CRM meticulously, creating custom modules, workflows, and sales stages." },
                  { n: "3", t: "Integration with Other Systems", d: "Our team integrates Zoho CRM seamlessly with your technology stack, including Zoho Suite, SAP, QuickBooks, and more." },
                  { n: "4", t: "Data Migration", d: "We ensure your critical historical data is safely migrated, verified, and organised within Zoho CRM." },
                  { n: "5", t: "User Training & Go-Live Support", d: "We conduct sessions to ensure your team is confident and provide rapid support to resolve initial queries." }
                ].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "1.5rem" }}>
                    <div style={{ minWidth: "32px", height: "32px", borderRadius: "50%", background: "var(--primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", fontWeight: 700 }}>
                      {step.n}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.25rem" }}>{step.t}</h4>
                      <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.5 }}>{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
              <img src="/images1/saas/classic04.png" alt="Implementation Process" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/saas/classic02.png" alt="Optimization" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Optimising Zoho CRM for Your Business
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                When you partner with FI Digital for your Zoho consulting needs, your business enjoys immediate and lasting benefits:
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  { icon: <Settings size={20} />, t: "Sales Automation", d: "Streamline lead generation, nurturing, and conversion processes." },
                  { icon: <LineChart size={20} />, t: "Analytics & Reporting", d: "Custom dashboards and real-time insights to empower decision-making." },
                  { icon: <Database size={20} />, t: "Advanced Customisation", d: "Build specific modules, workflows, and automations unique to your needs." }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                    <div style={{ minWidth: "40px", height: "40px", borderRadius: "10px", background: "rgba(79, 70, 229, 0.1)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.2rem" }}>{item.t}</h4>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
             <div style={{ order: { md: 2, base: 1 } }} className="wow animate__animated animate__fadeInLeft">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Post-Implementation Support & Training
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                At FI Digital, we pride ourselves on providing ongoing support long after initial deployment. Our Zoho Managed Services ensure you always have a team of CRM experts on hand:
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1.2rem" }}>
                {[
                  "Quick response to technical queries.",
                  "Tailored UK expertise: Regular CRM optimisation & updates.",
                  "Proven success: Ongoing training for new and existing team members."
                ].map((li, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                    <ArrowRight size={18} className="text-primary" style={{ flexShrink: 0, marginTop: "4px" }} />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)", order: { md: 1, base: 2 } }} className="wow animate__animated animate__fadeInRight">
              <img src="/images1/team.jpg" alt="Support" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
              <img src="/images1/saas/classic03.png" alt="Results" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Results Achieved with Zoho CRM
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Success story: A UK financial services provider implemented Zoho CRM alongside Zoho Desk and Creator, delivering:
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  "Increased sales conversion rates by 25-40%.",
                  "Operational efficiency improved by 25%.",
                  "Up to 30% reduction in administrative workload."
                ].map((li, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ padding: "4px", borderRadius: "50%", background: "rgba(79, 70, 229, 0.1)", color: "var(--primary)" }}>
                      <ArrowRight size={16} />
                    </div>
                    <p style={{ color: "var(--text-muted)", margin: 0 }}>{li}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "3rem", textAlign: "center" }}>
            FAQ – Zoho CRM Implementation
          </h2>
          <div style={{ display: "grid", gap: "1.5rem" }}>
            {[
              { q: "How long does a Zoho CRM implementation typically take?", a: "A standard implementation usually takes between 2-6 weeks, depending on customisation, data migration complexity, and integration requirements." },
              { q: "Can Zoho CRM integrate with existing software (ERP, Email)?", a: "Absolutely. Zoho CRM offers seamless integration with numerous systems including ERP platforms, accounting software, email services (Outlook, Gmail), and more." },
              { q: "Do you offer Zoho CRM training for our staff?", a: "Yes, comprehensive user training sessions are part of every project we deliver, ensuring your team is fully prepared and confident." }
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

      {/* Final CTA Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, marginBottom: "2rem" }}>
            Start Your Zoho CRM Journey Today
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9, lineHeight: 1.7 }}>
            Ready to transform your customer relationship management with Zoho CRM? Our certified UK implementation team is here to guide you through every step.
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
            Contact Us for a Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
