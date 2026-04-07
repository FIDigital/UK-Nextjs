import Link from "next/link";
import { ArrowRight, Settings, Database, Users, Headphones, BarChart3, Search, Layout, Code2, ShieldCheck, Rocket } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

export default function SmallBusinessAppDevelopmentPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section style={{
        position: "relative",
        minHeight: "80vh",
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
                Empowering SMEs
              </div>
              <h1 style={{
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Small Business App Development
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "750px"
              }}>
                Empower your small business with custom app solutions. If you’re looking for an app developer for your small business, you’ve come to the right place. We specialize in small business app development, creating bespoke applications that fit your unique needs.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "750px"
              }}>
                Our friendly, professional team takes a consultative approach – working closely with you to build an app that enhances productivity and streamlines your operations. In short, we help SMEs leverage technology to work smarter, not harder. As one of the leading Zoho Analytics partners, we assist organisations across the UK in connecting, visualising, and analysing their data—enabling smarter, faster, and data-driven decision-making.
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
                <img src="/images1/Web Development.jpg" alt="Small Business App Development" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* SME Custom solutions Section 1 */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/saas/classic02.png" alt="SME Solutions" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Custom App Solutions Tailored for SMEs
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Off-the-shelf software often forces your business to adapt to the tool, rather than the other way around. That’s why custom app solutions are so powerful for small and medium-sized enterprises (SMEs). We design and develop apps tailored specifically to your business processes, so you get exactly what you need without unnecessary complexity.
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Settings className="text-primary" size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontWeight: 800, color: "var(--text)" }}>Automate Routine Tasks</h4>
                    <p style={{ color: "var(--text-muted)" }}>Free your team from repetitive tasks like data entry, scheduling, or paperwork. A custom app can automate these processes, reducing errors and saving time every day.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Database className="text-primary" size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontWeight: 800, color: "var(--text)" }}>Centralize Information</h4>
                    <p style={{ color: "var(--text-muted)" }}>Instead of juggling spreadsheets and various software, your custom app can serve as a single source of truth for your business – managing inventory, customer data, project status, etc.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Users className="text-primary" size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontWeight: 800, color: "var(--text)" }}>Improve Team Collaboration</h4>
                    <p style={{ color: "var(--text-muted)" }}>Give your team a tool to communicate and coordinate in real time. Assign tasks, share updates, and track progress through an app accessible to everyone, whether in the office or remote.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SME Custom solutions Section 2 */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <div style={{ display: "grid", gap: "1.5rem", marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Headphones className="text-primary" size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontWeight: 800, color: "var(--text)" }}>Enhance Customer Service</h4>
                    <p style={{ color: "var(--text-muted)" }}>Serve your customers better with features like appointment booking, order tracking, or a client portal right within your app. Faster responses and self-service options increase satisfaction.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <BarChart3 className="text-primary" size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontWeight: 800, color: "var(--text)" }}>Real-Time Insights</h4>
                    <p style={{ color: "var(--text-muted)" }}>Dashboards and reports built into your app can show key metrics at a glance. This helps you make informed decisions quickly and identify opportunities or issues faster.</p>
                  </div>
                </div>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                In short, a well-built app can boost productivity by streamlining your day-to-day workflows. Many small businesses discover that investing in a custom app pays off through efficiency gains – your team can focus on growth and innovation instead of tedious admin work. Why copy-paste data between systems or struggle with one-size-fits-all software when you can have a solution designed for how you do business?
              </p>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <img src="/images1/ui-ux.jpg" alt="UX UI Design" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Consultative Process Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Our Consultative Development Process
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
              Developing an app is a journey – and we guide you through it with a consultative, hands-on approach. Our goal is to be your technology partner. Here’s how we work with you:
            </p>
          </div>

          <div style={{ display: "grid", gap: "6rem" }}>
            {/* Step 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
               <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                  <img src="/images1/services.jpg" alt="Discovery" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
               </div>
               <div className="wow animate__animated animate__fadeInRight">
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>
                    1. Discovery & Workshops – Understanding Your Needs
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                    We begin with an in-depth discovery phase, including workshops and consultations with your team. You’ll meet our friendly functional consultants who are experts in both technology and business processes. We map out your current workflows, discuss challenges, and identify opportunities for improvement. This consultative approach ensures we’re building the right solution from the start.
                  </p>
               </div>
            </div>

            {/* Step 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
               <div style={{ order: { md: 2, base: 1 } }} className="wow animate__animated animate__fadeInLeft">
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>
                    2. Planning & Solution Design
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                    After gathering requirements, we translate your needs into a solid plan. We’ll recommend the optimal solution for your small business, whether it’s an employee-facing app, a customer portal, or an internal web application. You’ll see wireframes or sketches so you can visualize how the app will look and feel before development begins.
                  </p>
               </div>
               <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)", order: { md: 1, base: 2 } }} className="wow animate__animated animate__fadeInRight">
                  <img src="/images1/saas/cta.jpg" alt="Planning" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
               </div>
            </div>

            {/* Step 3 */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
               <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                  <img src="/images1/software-development.jpg" alt="Development" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
               </div>
               <div className="wow animate__animated animate__fadeInRight">
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>
                    3. Custom Development & Integration
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                    Our small business app developers get to work building your application using modern, reliable technologies. Throughout development, we practice agile methodologies, providing incremental updates so you can test features as we go.
                  </p>
                  <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                    We also ensure your new app plays nicely with your existing tools like CRM, accounting software, or databases. Integration is key to streamlining operations, and we handle the technical heavy lifting.
                  </p>
               </div>
            </div>

             {/* Step 4 */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
               <div style={{ order: { md: 2, base: 1 } }} className="wow animate__animated animate__fadeInLeft">
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>
                    4. Testing, Feedback, and Refinement
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                    Quality is non-negotiable. We conduct thorough testing at each step and invite you to try beta versions. If something isn’t quite right, we refine it. This collaborative testing phase ensures that by the time we launch, you have full confidence in your new tool.
                  </p>
               </div>
               <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)", order: { md: 1, base: 2 } }} className="wow animate__animated animate__fadeInRight">
                  <img src="/images1/utility.jpg" alt="Testing" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
               </div>
            </div>

            {/* Step 5 */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
               <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                  <img src="/images1/project timeline.jpg" alt="Deployment" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
               </div>
               <div className="wow animate__animated animate__fadeInRight">
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>
                    5. Deployment & Ongoing Support
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                    We handle everything from publishing on app stores to secure cloud deployment. Our job isn’t done until the app is live and integrated. We can even train your team on how to use the new system effectively.
                  </p>
                  <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                    We deliver and don't disappear. Ongoing support is part of our service. As your business evolves, your app can too. We offer maintenance plans to keep your app running smoothly long-term.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Why Partner with Us for Your Small Business App?
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
            {[
              { icon: <Search size={24} />, title: "Focused on SME Success", body: "We don’t just develop apps – we solve business problems. We know common SME pain points and tailor solutions that make a real difference." },
              { icon: <Users size={24} />, title: "Consultative & Friendly Service", body: "We listen first, speak your language, and involve you at every step. No complex tech jargon, just honest conversation and expert guidance." },
              { icon: <Layout size={24} />, title: "End-to-End Expertise", body: "Design, development, testing, deployment, and maintenance – it’s all under one roof. No juggling multiple vendors or worrying over details." },
              { icon: <Code2 size={24} />, title: "Affordable & Scalable", body: "We work with your budget and prioritize high-ROI features. Our solutions grow with your business, so the app remains a long-term asset." },
              { icon: <ShieldCheck size={24} />, title: "Proven Results", body: "Our portfolio of SMEs includes companies that have saved hours of manual work and increased revenue through custom digital transformation." },
              { icon: <Rocket size={24} />, title: "We Genuinely Care", body: "Our approachable experts bring the technical skill and business insight needed to create apps that are practical tools for your growth." }
            ].map((card, i) => (
              <div key={i} style={{ padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", background: "var(--card-bg)", boxShadow: "var(--card-shadow)" }}>
                <div style={{ color: "var(--primary)", marginBottom: "1.5rem" }}>{card.icon}</div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>{card.title}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, marginBottom: "2rem" }}>
            Ready to Transform Your Business with a Custom App?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9, lineHeight: 1.7 }}>
            Small business app development isn’t just about building an app – it’s about empowering you to run your business more efficiently and effectively. Imagine a day where time-consuming tasks are handled seamlessly by your own custom software.
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
            Request Your Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
