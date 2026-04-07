import Link from "next/link";
import { ArrowRight, BarChart3, Database, PieChart, ShieldCheck, TrendingUp, ChevronDown, CheckCircle2, Layout, Settings, Users, Layers, Repeat, Shield, Monitor, Smartphone, Code } from "lucide-react";
import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const creatorServices = [
  {
    title: "Requirement Analysis & App Design",
    content: "We start by understanding your business challenges and defining exactly how your custom Zoho Creator application can address your unique needs.",
    icon: <Database size={24} />
  },
  {
    title: "Zoho Creator App Build",
    content: "Our certified developers utilise Zoho Creator’s intuitive drag-and-drop functionality, combined with advanced Deluge scripting, to build robust, scalable business apps rapidly.",
    icon: <Code size={24} />
  },
  {
    title: "Integration with Existing Systems",
    content: "We integrate your custom Zoho Creator apps seamlessly with other systems—including Zoho CRM, ERP software, accounting tools, or third-party applications—ensuring optimal data flow and user experience.",
    icon: <Repeat size={24} />
  },
  {
    title: "Testing & Deployment",
    content: "Every app undergoes thorough testing for usability, performance, and reliability before deployment, guaranteeing a smooth, trouble-free launch.",
    icon: <ShieldCheck size={24} />
  },
  {
    title: "User Training & Ongoing Support",
    content: "Post-deployment, we provide detailed user training sessions, documentation, and continuous support to ensure your teams are comfortable, productive, and confident with your new Zoho Creator app.",
    icon: <Users size={24} />
  }
];

const faqs = [
  {
    q: "Do I need coding knowledge to manage a Zoho Creator app after it’s built?",
    a: "No, Zoho Creator is user-friendly and designed for easy administration. FI Digital handles complex coding, allowing you to easily manage and update applications with minimal technical skills."
  },
  {
    q: "Can Zoho Creator apps integrate with other Zoho or third-party apps?",
    a: "Absolutely. Zoho Creator apps integrate seamlessly with the entire Zoho Suite (CRM, Books, Desk, etc.) and many third-party applications via APIs and connectors, ensuring comprehensive business automation."
  },
  {
    q: "How long does it take to develop a Zoho Creator app?",
    a: "Typically, Zoho Creator apps can be developed within 2-6 weeks, depending on complexity, integrations, and custom features. Our low-code approach ensures rapid deployment without sacrificing quality."
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
                Low-Code Solutions
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
              }}>
                Zoho Creator App Development
                <br />
                <span style={{ color: "var(--primary)" }}>& Low-Code Solutions</span>
              </h1>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                Looking for powerful, custom business apps built quickly and cost-effectively? FI Digital provides expert Zoho Creator app development in the UK, enabling your business to rapidly innovate, automate processes, and solve complex challenges with bespoke low-code solutions.
              </p>
              <p style={{
                fontSize: "clamp(1rem, 1.15vw, 1.2rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}>
                As certified Zoho Creator developers, we specialise in designing and delivering highly tailored business applications, fully integrated into your existing technology ecosystem and optimised for peak performance.
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
                <img src="/images1/saas/classic01.png" alt="Zoho Creator Development" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Apps Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <img src="/images1/saas/classic02.png" alt="Custom Zoho Creator Apps" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 800,
                marginBottom: "1.5rem",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}>
                Custom Applications Built on Zoho Creator
              </h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "1.1rem", lineHeight: 1.7 }}>
                Zoho Creator is a robust low-code application development platform that empowers businesses to quickly create custom software solutions without the complexity and expense of traditional development methods.
              </p>
              <p style={{ fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>
                At FI Digital, our Zoho Creator developers design and build applications such as:
              </p>
              <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  "Custom CRM extensions and enhancements",
                  "Bespoke inventory and order management systems",
                  "Employee onboarding and HR apps",
                  "Field service scheduling and management tools",
                  "Customer portals and custom forms applications"
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text)" }}>
                    <CheckCircle2 size={20} style={{ color: "var(--primary)" }} />
                    <span style={{ fontSize: "1.05rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "2rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                Each solution is tailored specifically to your requirements, ensuring seamless integration with Zoho CRM, Zoho Books, Zoho Desk, or third-party applications to create a streamlined, fully connected digital environment.
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
              FI Digital offers comprehensive Zoho Creator development services, guiding you through the entire app lifecycle—from concept to optimisation.
            </p>
          </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2.5rem"
          }}>
            {creatorServices.map((svc, i) => (
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

      {/* Benefits Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--text)" }}>Low-Code, High Impact</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "1.1rem" }}>
                Zoho Creator’s low-code platform provides substantial business benefits, particularly when implemented by experienced developers:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { t: "Rapid Development", d: "Apps are developed and deployed in weeks, not months, dramatically reducing project timelines and costs." },
                  { t: "Cost Efficiency", d: "Significantly lower development costs compared to traditional coding methods." },
                  { t: "Highly Customisable", d: "Easily adapt applications as your business evolves, without significant redevelopment efforts." },
                  { t: "Seamless Integration", d: "Effortlessly connect to your existing systems, streamlining data across your organisation." },
                  { t: "Enhanced Security & Scalability", d: "Built-in security and scalability ensure your apps reliably support your growth." }
                ].map((benefit, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ color: "var(--primary)", marginTop: "4px" }}><CheckCircle2 size={24} /></div>
                    <div>
                      <div style={{ fontWeight: 800, color: "var(--text)", fontSize: "1.1rem" }}>{benefit.t}</div>
                      <div style={{ color: "var(--text-muted)" }}>{benefit.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ background: "var(--card-bg)", padding: "3rem", borderRadius: "32px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "2rem" }}>Example Success Stories</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <div style={{ borderLeft: "4px solid var(--primary)", paddingLeft: "1.5rem" }}>
                        <h4 style={{ fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>Retail Order Management</h4>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Developed a custom order-tracking app integrated with Zoho Books and CRM for a UK retailer, significantly reducing errors and improving fulfilment speeds.</p>
                    </div>
                    <div style={{ borderLeft: "4px solid var(--primary)", paddingLeft: "1.5rem" }}>
                        <h4 style={{ fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>Field Service Scheduling</h4>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Built a robust scheduling and job-tracking application for a UK-based construction firm, increasing productivity by 30%.</p>
                    </div>
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
              FAQ – Zoho Creator Development
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
          boxShadow: "0 25px 50px -12px rgba(30, 58, 138, 0.5)",
          position: "relative",
          overflow: "hidden"
        }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 900,
            marginBottom: "1.5rem",
            color: "white",
            lineHeight: 1.2
          }}>
            Next Steps – Start Building Your Custom Zoho Creator App
          </h2>
          <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", marginBottom: "3.5rem", lineHeight: 1.7, maxWidth: "850px", margin: "0 auto 3.5rem" }}>
            Ready to streamline your business processes with powerful custom apps built on Zoho Creator? Get in touch with our expert UK-based development team today to discuss your requirements and see how quickly we can transform your business operations.
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
            Request Your Free Zoho Creator Consultation <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
}
