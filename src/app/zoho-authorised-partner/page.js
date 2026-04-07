import Link from "next/link";
import { ArrowRight, BarChart3, Database, PieChart, ShieldCheck, TrendingUp, ChevronDown, CheckCircle2, Layout, Settings, Users, Layers, Repeat, Shield, Monitor, Smartphone, Code, Briefcase, Mail, Zap, Headphones } from "lucide-react";
import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const authorisedServices = [
  {
    title: "Zoho CRM Consulting & Implementation",
    content: "Optimise your sales processes and enhance customer relationships. Our consultants tailor Zoho CRM precisely to your business needs, ensuring streamlined sales processes and measurable growth in revenues.",
    icon: <Users size={24} />
  },
  {
    title: "Zoho Creator App Development",
    content: "We deliver powerful low-code applications using Zoho Creator, enabling rapid custom app development tailored to your specific business requirements. Automate workflows and eliminate operational bottlenecks.",
    icon: <Code size={24} />
  },
  {
    title: "Zoho Desk Implementation & Support",
    content: "Enhance your customer service experience with Zoho Desk. FI Digital configures and integrates Zoho Desk to match your support workflow, delivering exceptional CX and improved satisfaction scores.",
    icon: <Headphones size={24} />
  },
  {
    title: "Zoho Marketing Automation",
    content: "Leverage Zoho Marketing Automation and Zoho Campaigns to automate and personalise your marketing efforts. Our strategic guidance empowers your team to generate more leads and higher conversion rates.",
    icon: <Zap size={24} />
  },
  {
    title: "Zoho Analytics & BI",
    content: "Gain powerful, actionable insights into your business operations. Our experts configure Zoho Analytics dashboards, providing real-time visibility and predictive capabilities to drive informed decision-making.",
    icon: <BarChart3 size={24} />
  },
  {
    title: "Zoho One Implementation",
    content: "Transform your entire business with the Zoho One suite. FI Digital delivers strategic consultation and phased implementation tailored specifically to your UK organisation’s needs.",
    icon: <Layers size={24} />
  },
  {
    title: "Zoho Integration Services",
    content: "Connect Zoho applications seamlessly with your existing software, such as Xero, QuickBooks, SAP, ERP systems, and e-commerce platforms. We ensure data integrity and streamlined processes.",
    icon: <Repeat size={24} />
  },
  {
    title: "Zoho Managed Services & Support",
    content: "We offer comprehensive Zoho Managed Services, providing ongoing administration, technical support, and user training. Our UK-based support ensures your environment remains secure and optimised.",
    icon: <Shield size={24} />
  }
];

const successStories = [
  {
    title: "Financial Services Firm",
    desc: "Deployed Zoho CRM and Zoho Desk integration, improving customer service response times by 40%.",
    impact: "Increased customer satisfaction and enhanced sales conversions by 30%."
  },
  {
    title: "Retail & E-commerce Company",
    desc: "Implemented Zoho Marketing Automation and CRM integration, increasing email open rates and improving lead quality.",
    impact: "Drove substantial revenue growth within three months."
  },
  {
    title: "Professional Services Consultancy",
    desc: "Migrated legacy systems to Zoho One, streamlining business operations and achieving significant cost savings.",
    impact: "Boosted overall productivity by nearly 35%."
  }
];

const faqs = [
  {
    q: "Why choose an authorised Zoho Partner instead of implementing Zoho myself?",
    a: "An authorised Zoho Partner ensures expert configuration, seamless integration, comprehensive training, and ongoing support, significantly reducing risks and ensuring rapid ROI."
  },
  {
    q: "Does FI Digital handle Zoho support directly?",
    a: "Yes. FI Digital provides comprehensive, UK-based managed services and technical support for all Zoho applications, ensuring prompt issue resolution and continuous optimisation."
  },
  {
    q: "How quickly can an authorised partner implement Zoho solutions?",
    a: "Implementation timelines vary based on complexity. However, FI Digital typically completes implementations within 2–8 weeks, ensuring minimal disruption."
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
                Officially Accredited
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Zoho Authorised
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
                Are you looking for a trusted and authorised Zoho Partner in the UK to help you leverage Zoho’s suite of applications for your business success? FI Digital is your reliable, experienced Zoho Authorised Partner.
              </p>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                As an officially authorised partner, we empower your business to unlock Zoho’s potential, streamline operations, increase productivity, and drive substantial business growth.
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
                <img src="/images1/saas/classic01.png" alt="Zoho Authorised Partner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* What it means Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic02.png" alt="Accredited Zoho Partner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                What Does It Mean to Be Authorised?
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                An authorised Zoho Partner has been officially accredited by Zoho Corporation to provide expert consulting, implementation, integration, training, and support services. FI Digital, as an authorised partner, has demonstrated excellence in deploying and managing Zoho’s extensive suite of business applications.
              </p>
              <p style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem", lineHeight: 1.6 }}>
                Our partnership status ensures your organisation receives exceptional service, professional advice, and expert support, tailored specifically to your business needs in the UK.
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
              Our Comprehensive Zoho Services
            </h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
              FI Digital offers extensive Zoho services covering all major applications to ensure optimal efficiency and productivity.
            </p>
          </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2.5rem"
          }}>
            {authorisedServices.map((svc, i) => (
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

      {/* Why Choose Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "4rem", alignItems: "flex-start" }}>
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Why Choose an Authorised Partner?</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
                Partnering with FI Digital provides your organisation with substantial, tangible advantages for your digital transformation:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { t: "Expertise & Knowledge", d: "Certified experts ensuring configuration and optimisation excellence." },
                  { t: "Tailored UK Solutions", d: "Understanding localised compliance requirements including GDPR." },
                  { t: "Direct Zoho Support", d: "Direct collaboration with Zoho Corp for priority issue resolution." },
                  { t: "Reduced Risk & Faster ROI", d: "Professional deployments that ensure minimal disruption." },
                  { t: "Continuous Improvement", d: "Proactive managed services and ongoing optimisations." }
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
            
            <div style={{ background: "var(--card-bg)", padding: "3.5rem", borderRadius: "40px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <h3 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--text)", marginBottom: "2.5rem" }}>Success Stories</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                    {successStories.map((story, i) => (
                        <div key={i} style={{ borderLeft: "4px solid var(--primary)", paddingLeft: "1.5rem" }}>
                            <div style={{ fontWeight: 900, fontSize: "1.2rem", color: "var(--text)", marginBottom: "0.5rem" }}>{story.title}</div>
                            <div style={{ color: "var(--text-muted)", marginBottom: "0.75rem", fontSize: "0.95rem" }}>{story.desc}</div>
                            <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.95rem" }}>{story.impact}</div>
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
              FAQ – Zoho Authorised Partner
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
            Ready to Transform Your Business?
          </h2>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", marginBottom: "3.5rem", lineHeight: 1.7, maxWidth: "850px", margin: "0 auto 3.5rem" }}>
            Experience the full potential of Zoho’s powerful applications with FI Digital, your trusted Zoho Authorised Partner in the UK. Talk to our expert team today and discover exactly how Zoho can help your business thrive.
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
            Schedule Your Free Consultation Now <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
}
