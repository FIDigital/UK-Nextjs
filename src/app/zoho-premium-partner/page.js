import Link from "next/link";
import { ArrowRight, BarChart3, ChevronDown, CheckCircle2, Layout, Settings, Users, Layers, Repeat, Shield, Monitor, Smartphone, Code, Briefcase, Mail, Zap, Headphones } from "lucide-react";
import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const premiumServices = [
  {
    title: "Zoho CRM Premium Consulting",
    content: "Leverage Zoho CRM’s full potential through our expert consulting and implementation services. We design and implement customised CRM solutions to boost your sales efficiency, automate sales processes, and enhance customer relationships.",
    icon: <Users size={24} />
  },
  {
    title: "Zoho Creator Premium Development",
    content: "Rapidly develop powerful low-code business apps tailored precisely to your requirements. Our certified Zoho Creator developers deliver highly customised applications to transform your operational capabilities.",
    icon: <Code size={24} />
  },
  {
    title: "Zoho Desk Premium Implementation",
    content: "Optimise your customer service experience with Zoho Desk, expertly configured and integrated by our certified consultants. Enable your team to efficiently manage enquiries and significantly improve satisfaction.",
    icon: <Headphones size={24} />
  },
  {
    title: "Zoho Marketing Automation Services",
    content: "Automate your marketing efforts seamlessly using Zoho Marketing Automation and Zoho Campaigns. Our strategic experts guide your UK-based teams through campaign automation and personalisation strategies.",
    icon: <Zap size={24} />
  },
  {
    title: "Zoho Analytics Premium Partner",
    content: "Empower your decision-making through advanced business intelligence and analytics. FI Digital implements tailored Zoho Analytics solutions with powerful, real-time dashboards and predictive insights.",
    icon: <BarChart3 size={24} />
  },
  {
    title: "Zoho One Premium Implementation",
    content: "Transition seamlessly to Zoho One—the integrated suite of over 50 applications. Our structured approach includes strategic planning, phased implementation, and ongoing managed services.",
    icon: <Layers size={24} />
  },
  {
    title: "Zoho Integration Premium Services",
    content: "Expertly connect Zoho applications with your existing software stack, including accounting platforms, ERP systems, and e-commerce solutions, ensuring seamless data flows and improved collaboration.",
    icon: <Repeat size={24} />
  },
  {
    title: "Premium Managed Services & Support",
    content: "Benefit from comprehensive, UK-based managed services and dedicated support for all Zoho products. Our Premium Partner status ensures you receive rapid responses and proactive optimisation.",
    icon: <Shield size={24} />
  }
];

const premiumSuccessStories = [
  {
    title: "Financial Services Provider",
    content: "Leveraged Zoho CRM and Desk integration to streamline customer service.",
    result: "Reduced response times by 50% and significantly increased client retention rates."
  },
  {
    title: "Manufacturing Business",
    content: "Implemented Zoho Creator and Analytics for real-time inventory management and operational dashboards.",
    result: "Reduced production downtime by 30% and improved stock accuracy."
  },
  {
    title: "Professional Services Consultancy",
    content: "Migrated legacy systems to Zoho One, enabling rapid, informed decision-making through integrated data analytics.",
    result: "Achieved significant cost savings and productivity improvements."
  }
];

const faqs = [
  {
    q: "What differentiates a Zoho Premium Partner from other Zoho Partners?",
    a: "A Premium Partner represents Zoho’s highest tier, reflecting exceptional expertise, extensive experience, priority support, deeper access to resources, and a proven track record of client success."
  },
  {
    q: "Is choosing a Premium Partner more expensive than standard implementation services?",
    a: "Choosing a Premium Partner like FI Digital delivers significantly greater long-term value, productivity improvements, risk mitigation, and rapid ROI, ultimately making it a cost-effective investment for your business."
  },
  {
    q: "Can FI Digital manage all our Zoho products as a Premium Partner?",
    a: "Absolutely. FI Digital’s Premium Partner status allows us to comprehensively manage and support every Zoho application your business uses, providing a seamless, integrated Zoho ecosystem tailored specifically to your needs."
  }
];

export default function Page() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{
        position: "relative",
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(120px, 15vh, 140px) 1.5rem 80px",
        background: "var(--bg)",
        overflow: "hidden",
      }}>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1250px", margin: "0 auto", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.75rem",
                padding: "0.6rem 1.2rem", background: "rgba(79, 70, 229, 0.1)",
                borderRadius: "100px", border: "1px solid rgba(79, 70, 229, 0.2)",
                marginBottom: "2rem", color: "var(--primary)", fontSize: "0.85rem",
                fontWeight: 700, letterSpacing: "0.01em", textTransform: "uppercase"
              }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                Premium Tier Partner
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Zoho Premium
                <br />
                <span style={{ color: "var(--primary)" }}>Partner in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                If your UK business is seeking a trusted partner with proven expertise in maximising the value of your Zoho software investment, FI Digital is your ideal choice.
              </p>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                As an officially recognised Zoho Premium Partner in the UK, we specialise in expert consulting, seamless implementation, strategic integration, and managed support for the entire Zoho suite.
              </p>
              <Link href="/contact" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2.5rem",
                background: "var(--primary)",
                color: "white",
                fontWeight: 700,
                fontSize: "1rem",
                borderRadius: "14px",
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(79, 70, 229, 0.3)",
              }}>
                Get Started Today! <ArrowRight size={18} />
              </Link>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic01.png" alt="Zoho Premium Partner UK" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* What it is Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic02.png" alt="What is a Zoho Premium Partner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                What is a Zoho Premium Partner?
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                A Zoho Premium Partner represents the highest level of partnership recognised by Zoho Corporation, awarded only to partners demonstrating exceptional expertise, a proven track record, and outstanding client satisfaction.
              </p>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                FI Digital’s Premium Partner status in the UK signifies that we’ve met Zoho’s rigorous standards for knowledge, experience, customer success, and ongoing service excellence.
              </p>
              <p style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem", lineHeight: 1.6 }}>
                When choosing a Premium Partner like FI Digital, your organisation gains priority access to Zoho resources, dedicated support channels, early access to updates, and tailored strategic guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{
              fontSize: "clamp(2.1rem, 4vw, 3rem)",
              fontWeight: 800,
              marginBottom: "1rem",
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}>
              Our Zoho Premium Partner Services
            </h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
              FI Digital offers comprehensive services covering the full Zoho suite, specifically tailored to support UK businesses.
            </p>
          </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2.5rem"
          }}>
            {premiumServices.map((svc, i) => (
              <div key={i} style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "24px",
                padding: "2.5rem",
                transition: "all 0.3s ease",
                boxShadow: "var(--card-shadow)",
              }}>
                <div style={{ color: "var(--primary)", marginBottom: "1.5rem" }}>
                    {svc.icon}
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.25rem" }}>
                  {svc.title}
                </h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "1rem" }}>
                  {svc.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "flex-start" }}>
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>The Premium Advantage</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
                Selecting FI Digital as your Zoho Premium Partner brings substantial advantages to your business:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { t: "Priority Zoho Support", d: "Swift resolution of complex issues and deeper access to corporate resources." },
                  { t: "Strategic Partnership", d: "We proactively advise on enhancements tailored to your specific goals." },
                  { t: "Expert Knowledge", d: "Certified consultants with extensive industry experience across UK sectors." },
                  { t: "Enhanced Efficiency", d: "Tailored solutions that deliver substantial productivity improvements." },
                  { t: "Local UK Expertise", d: "Deep understanding of UK market dynamics and GDPR compliance." }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ color: "var(--primary)", marginTop: "4px" }}><CheckCircle2 size={24} /></div>
                    <div>
                      <div style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem" }}>{item.t}</div>
                      <div style={{ color: "var(--text-muted)" }}>{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ background: "rgba(30, 58, 138, 1)", padding: "3.5rem", borderRadius: "40px", color: "white", boxShadow: "0 25px 50px -12px rgba(30, 58, 138, 0.4)" }}>
                <h3 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "2.5rem" }}>Success Stories</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                    {premiumSuccessStories.map((story, i) => (
                        <div key={i} style={{ borderLeft: "4px solid var(--primary)", paddingLeft: "1.5rem" }}>
                            <div style={{ fontWeight: 900, fontSize: "1.2rem", marginBottom: "0.5rem" }}>{story.title}</div>
                            <div style={{ color: "rgba(255,255,255,0.8)", marginBottom: "0.75rem", fontSize: "0.95rem" }}>{story.content}</div>
                            <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.95rem" }}>{story.result}</div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}>
              FAQ – Zoho Premium Partner UK
            </h2>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer"
              }}>
                <summary style={{
                  padding: "1.75rem",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "var(--text)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  listStyle: "none"
                }}>
                  {faq.q}
                  <ChevronDown size={22} style={{ color: "var(--primary)" }} />
                </summary>
                <div style={{
                  padding: "0 1.75rem 1.75rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  fontSize: "1.1rem"
                }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)", display: "flex", justifyContent: "center" }}>
        <div style={{ 
          maxWidth: "1100px", 
          width: "100%", 
          background: "rgba(30, 58, 138, 1)",
          borderRadius: "45px",
          padding: "5rem 3rem",
          textAlign: "center",
          color: "white",
          boxShadow: "0 25px 50px -12px rgba(30, 58, 138, 0.5)"
        }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 900,
            marginBottom: "1.5rem",
            color: "white",
            lineHeight: 1.2
          }}>
            Ready to Partner with a Premium Expert?
          </h2>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", marginBottom: "3.5rem", lineHeight: 1.7, maxWidth: "850px", margin: "0 auto 3.5rem" }}>
            Experience maximum efficiency, enhanced productivity, and measurable business success by partnering with FI Digital, your trusted Zoho Premium Partner in the UK.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1.2rem 3.5rem",
            background: "var(--primary)",
            color: "white",
            fontWeight: 800,
            fontSize: "1.2rem",
            borderRadius: "18px",
            textDecoration: "none",
            boxShadow: "0 15px 35px rgba(79, 70, 229, 0.4)",
          }}>
            Schedule Your Free Consultation Today <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
}
