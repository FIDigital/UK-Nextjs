import Link from "next/link";
import { ArrowRight, BarChart3, Database, PieChart, ShieldCheck, TrendingUp, ChevronDown, CheckCircle2, Layout, Settings, Users, Layers, Repeat, Shield, Monitor, Smartphone, Code, Briefcase } from "lucide-react";
import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const creatorPartnerServices = [
  {
    title: "Strategic Consultation & Requirements Analysis",
    content: "Our certified consultants begin by understanding your operational processes, business goals, and specific app requirements. We conduct detailed workshops, analyse pain points, and identify opportunities for automation and process improvement.",
    icon: <Briefcase size={24} />
  },
  {
    title: "Custom Dashboard & Report Development",
    content: "Our UK-based Zoho Creator experts rapidly build tailored applications, from simple forms and databases to complex, workflow-driven solutions. We utilise Zoho’s intuitive drag-and-drop interface combined with custom Deluge scripting.",
    icon: <Layout size={24} />
  },
  {
    title: "Integration with Existing Systems",
    content: "Seamlessly integrate Zoho Creator applications with your existing CRM, ERP, HR software, accounting tools (QuickBooks, Xero, Sage), or other business-critical platforms ensure smooth data flow and enhanced efficiency.",
    icon: <Repeat size={24} />
  },
  {
    title: "Advanced Workflow Automation",
    content: "Automate complex business processes using Zoho Creator’s advanced workflow engine. Our consultants design powerful workflows to automate tasks such as lead management, order processing, and inventory tracking.",
    icon: <Settings size={24} />
  },
  {
    title: "Testing, Deployment & User Training",
    content: "We perform comprehensive testing for reliability, performance, and security before deployment. Post-deployment, we provide customised training programmes for your team, guaranteeing smooth user adoption.",
    icon: <Users size={24} />
  }
];

const useCases = [
  {
    title: "Inventory Management",
    desc: "Custom-built inventory tracking and management apps integrated seamlessly with Zoho CRM and Zoho Books, significantly reducing manual tasks and inventory errors."
  },
  {
    title: "Field Service Management",
    desc: "Real-time mobile apps for service teams in industries like construction, engineering, and professional services, enabling efficient scheduling and task management."
  },
  {
    title: "Identifying Market Trends",
    desc: "Advanced analytics uncover valuable market and customer trends, helping you stay ahead of your competitors."
  },
  {
    title: "Customer & Vendor Portals",
    desc: "Secure, intuitive portals for customer self-service, vendor management, partner collaboration, or employee onboarding, providing secure and personalised interactions."
  },
  {
    title: "HR Automation",
    desc: "Employee onboarding, recruitment tracking, leave management, and performance evaluation apps integrated with existing HR systems, streamlining processes."
  }
];

const faqs = [
  {
    q: "How quickly can a Zoho Creator app be developed?",
    a: "Most Zoho Creator applications can be developed and deployed within 2–6 weeks, depending on complexity, integration requirements, and workflow specifics."
  },
  {
    q: "Does Zoho Creator support mobile devices?",
    a: "Yes. Zoho Creator apps are fully responsive and accessible on all mobile devices, ensuring real-time access and productivity for remote or field-based teams."
  },
  {
    q: "Can we integrate Zoho Creator apps with our existing CRM or ERP systems?",
    a: "Absolutely. Zoho Creator provides robust API integrations, enabling seamless connectivity with popular CRM, ERP, accounting systems, and more—enhancing efficiency across your entire business."
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
                Certified Partner
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Certified Zoho
                <br />
                <span style={{ color: "var(--primary)" }}>Creator Partner in the UK</span>
              </h1>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                Are you looking to rapidly develop tailored business apps that streamline operations, boost efficiency, and deliver significant business impact? FI Digital, a certified Zoho Creator Partner in the UK, specialises in expertly building powerful, custom low-code applications using Zoho Creator.
              </p>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                From sales automation and inventory management to customer portals and employee engagement apps, our Zoho Creator team designs and deploys tailored solutions, precisely aligned with your unique business requirements.
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
                <img src="/images1/saas/classic01.png" alt="Zoho Creator Partner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* What is Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic02.png" alt="What is Zoho Creator" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                What is Zoho Creator?
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                Zoho Creator is a powerful low-code platform that allows businesses to build custom apps quickly, efficiently, and cost-effectively. It enables organisations of all sizes and sectors to automate processes, streamline workflows, and enhance collaboration without extensive coding or costly traditional development methods.
              </p>
              <p style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem", lineHeight: 1.6 }}>
                As a Certified Zoho Creator Partner, FI Digital ensures your business fully leverages Zoho Creator’s potential, providing tailored, integrated, and secure solutions designed specifically for your UK organisation.
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
              Our Zoho Creator Development Services
            </h2>
            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
              At FI Digital, we offer end-to-end Zoho Creator development and consulting services, tailored specifically for UK businesses.
            </p>
          </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2.5rem"
          }}>
            {creatorPartnerServices.map((svc, i) => (
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

      {/* Use Cases Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Powerful Use Cases</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
                FI Digital’s certified Zoho Creator developers have successfully built powerful solutions for various UK businesses:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {useCases.map((useCase, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ color: "var(--primary)", marginTop: "4px" }}><CheckCircle2 size={24} /></div>
                    <div>
                      <div style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem" }}>{useCase.title}</div>
                      <div style={{ color: "var(--text-muted)" }}>{useCase.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ background: "rgba(30, 58, 138, 1)", padding: "3.5rem", borderRadius: "40px", color: "white", boxShadow: "0 25px 50px -12px rgba(30, 58, 138, 0.4)" }}>
                <h3 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "2rem" }}>Why Choose FI Digital?</h3>
                <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {[
                        { t: "Certified Zoho Experts", d: "Consultants and developers holding official Zoho Creator certifications." },
                        { t: "UK Market Understanding", d: "Localised business requirements and GDPR compliance." },
                        { t: "Comprehensive Approach", d: "From initial consultation to ongoing managed support." },
                        { t: "Proven Results", d: "Successful implementations across finance, retail, and healthcare." }
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: "1.25rem" }}>
                            <div style={{ color: "var(--primary)", background: "white", borderRadius: "50%", padding: "4px", alignSelf: "flex-start" }}>
                                <CheckCircle2 size={20} />
                            </div>
                            <div>
                                <div style={{ fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.25rem" }}>{item.t}</div>
                                <div style={{ color: "rgba(255,255,255,0.8)" }}>{item.d}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
          </div>

          <div style={{ marginTop: "6rem", background: "var(--card-bg)", padding: "4rem", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
                    <div>
                        <h3 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>Zoho Creator Case Study</h3>
                        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7 }}>
                            A UK-based retail company partnered with FI Digital to solve their inventory and order management challenges. Our tailored app automated tracking and integrated with CRM and Books.
                        </p>
                    </div>
                    <div style={{ display: "grid", gap: "1.5rem" }}>
                        {[
                            { label: "Inventory errors reduced", value: "40%+" },
                            { label: "Processing time decreased", value: "30%" },
                            { label: "Customer satisfaction", value: "Increased" }
                        ].map((stat, i) => (
                            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem", background: "var(--bg-secondary)", borderRadius: "16px", border: "1px solid var(--border)" }}>
                                <span style={{ fontWeight: 600, color: "var(--text)" }}>{stat.label}</span>
                                <span style={{ fontWeight: 900, color: "var(--primary)", fontSize: "1.2rem" }}>{stat.value}</span>
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
              FAQ – Zoho Creator Partner Services
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
            Ready to Build Your Custom Business App?
          </h2>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", marginBottom: "3.5rem", lineHeight: 1.7, maxWidth: "850px", margin: "0 auto 3.5rem" }}>
            Discover how quickly and cost-effectively your business can benefit from custom Zoho Creator applications. Connect with FI Digital’s certified Zoho Creator consultants in the UK and transform your operational processes today.
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
            Request Your Free Consultation Today <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
}
