import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Settings, Database, Users, Headphones, BarChart3, Search, Layout, Code2, ShieldCheck, Rocket } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

export default function SmallBusinessAppDevelopmentPage() {
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
            src="/images1/dev_team.jpg"
            alt="Small Business App Development Agency Background"
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
                Empowering SMEs
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Small Business App Development
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Empower your small business with custom app solutions. If you’re looking for an app developer for your small business, you’ve come to the right place. We specialize in bespoke applications that fit your unique needs.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Our consultative approach helps SMEs leverage technology to work smarter, not harder. As leading Zoho partners, we assist organizations in connecting and analyzing their data for faster, data-driven decision-making.
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

      {/* SME Custom solutions Section 1 */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/Business Illustration 3.png" alt="SME Solutions" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Custom App Solutions Tailored for SMEs
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Off-the-shelf software often forces your business to adapt to the tool. We design and develop apps tailored specifically to your business processes, so you get exactly what you need without unnecessary complexity.
              </p>
              <div style={{ display: "grid", gap: "2rem" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Settings className="text-primary" size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontWeight: 800, color: "var(--text)", marginBottom: "0.25rem" }}>Automate Routine Tasks</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Free your team from repetitive tasks and data entry errors. Save time every day with intelligent automation.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Database className="text-primary" size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontWeight: 800, color: "var(--text)", marginBottom: "0.25rem" }}>Centralize Information</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Create a single source of truth for inventory, customer data, and project status across your entire SME.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Users className="text-primary" size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontWeight: 800, color: "var(--text)", marginBottom: "0.25rem" }}>Improve Team Collaboration</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Coordinate in real-time whether your team is in the office or remote with powerful task sharing.</p>
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
              <div style={{ display: "grid", gap: "2rem", marginBottom: "3rem" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Headphones className="text-primary" size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontWeight: 800, color: "var(--text)", marginBottom: "0.25rem" }}>Enhance Customer Service</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Offer appointment booking and order tracking directly within your app to increase satisfaction and response speed.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <BarChart3 className="text-primary" size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontWeight: 800, color: "var(--text)", marginBottom: "0.25rem" }}>Real-Time Insights</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Dashboards show key metrics at a glance, helping you identify opportunities and issues faster.</p>
                  </div>
                </div>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                In short, a well-built app boosts productivity by streamlining your day-to-day workflows. Investing in a custom app pays off through efficiency gains – allowing your team to focus on growth instead of tedious administration.
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
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Our Consultative Development Process
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
              Developing an app is a journey – and we guide you through it with a consultative, hands-on approach designed to make the process transparent and effective.
            </p>
          </div>

          <div style={{ display: "grid", gap: "6rem" }}>
            {[
              { 
                title: "1. Discovery & Workshops", 
                body: "We begin with in-depth discovery workshops. You'll meet our functional consultants who map your current workflows and identify the best opportunities for automation and improvement.",
                img: "/images1/App_Solu.jpg",
                reverse: false
              },
              { 
                title: "2. Planning & Solution Design", 
                body: "We translate your needs into a solid roadmap. We'll recommend the optimal solution for your small business, including wireframes to visualize exactly how your app will function.",
                img: "/images1/Business Team Planning Innovation.jpg",
                reverse: true
              },
              { 
                title: "3. Custom Development & Integration", 
                body: "Our developers build your application using modern technologies and agile methodologies. We ensure it integrates perfectly with your existing CRM, accounting, and database systems.",
                img: "/images1/Code 3.jpg",
                reverse: false
              },
              { 
                title: "4. Testing & Refinement", 
                body: "Quality is non-negotiable. We conduct thorough testing and invite you to try beta versions, refining the experience until you have full confidence in your new tool.",
                img: "/images1/Service_testing.jpg",
                reverse: true
              },
              { 
                title: "5. Deployment & Support", 
                body: "We handle everything from secure cloud deployment to team training. Our ongoing support plans ensure your app evolves along with your business growing long-term.",
                img: "/images1/customersupport_1.jpg",
                reverse: false
              }
            ].map((step, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
                <div style={{ order: step.reverse ? { md: 2, base: 1 } : { md: 1, base: 1 }, position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                    <img src={step.img} alt={step.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ order: step.reverse ? { md: 1, base: 2 } : { md: 2, base: 2 } }} className="wow animate__animated animate__fadeInRight">
                    <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>{step.title}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Why Partner with Us for Your Small Business App?
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {[
              { icon: <Search size={24} />, title: "Focused on SME Success", body: "We solve real-world SME problems with high-ROI features that make a practical difference from day one." },
              { icon: <Users size={24} />, title: "Consultative Service", body: "No complex tech jargon, just honest conversation and expert guidance throughout the entire process." },
              { icon: <Layout size={24} />, title: "End-to-End Expertise", body: "Design, development, and maintenance – everything handled under one roof for complete peace of mind." },
              { icon: <Code2 size={24} />, title: "Affordable & Scalable", body: "We build grow-ready solutions that remain long-term assets for your small business as you expand." },
              { icon: <ShieldCheck size={24} />, title: "Proven Results", body: "Our SME clients save hours of manual work and increase revenue through tailored digital transformation." },
              { icon: <Rocket size={24} />, title: "We Genuinely Care", body: "We bring the technical skill and business insight needed to create tools that empower your local growth." }
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
          <h2 style={{ fontSize: "clamp(2.1rem, 4vw, 3.5rem)", fontWeight: 950, marginBottom: "2rem", lineHeight: 1.1 }}>
            Ready to Transform Your Business with a Custom App?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9, lineHeight: 1.7 }}>
            Small business app development isn’t just about the technology – it’s about empowering you to run your business more effectively every single day.
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
