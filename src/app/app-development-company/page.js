import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Smartphone, Globe, Briefcase } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

export default function AppDevelopmentCompanyPage() {
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
            src="/images1/App_devep.jpg"
            alt="App Development Company Background"
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
                Your Partner in Innovation
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Leading Business App Development Company
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Welcome to FI Digital – a leading business app development company that brings your ideas to life through innovative web and mobile app development. We combine technical excellence with a consultative approach to drive real business results.
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

      {/* Intro Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/App_dev_service.jpg" alt="Comprehensive App Development" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Comprehensive App Development Services
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                At FI Digital, we offer end-to-end app development services tailored to your needs. Whether you need a powerful mobile app or a robust web application, our experienced team ensures each product is scalable, secure, and aligned with your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Grid */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
            
            <div style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <Smartphone className="text-primary mb-4" size={32} />
                <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.2rem" }}>Mobile App Development (iOS, Android & Flutter)</h4>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                    We build high-quality mobile applications that delight users. As a modern Flutter app development company, we specialize in cross-platform frameworks to save you time and costs without compromising on performance.
                </p>
            </div>

            <div style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <Globe className="text-primary mb-4" size={32} />
                <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.2rem" }}>Web App Development</h4>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                    FI Digital creates responsive, high-performance web applications accessible from any browser. Our platforms handle traffic securely and provide intuitive interfaces for e-commerce, portals, or bespoke business tools.
                </p>
            </div>

            <div style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <Briefcase className="text-primary mb-4" size={32} />
                <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.2rem" }}>Business & Enterprise Solutions</h4>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                    Our expertise in business app development means we design solutions that streamline operations and support digital transformation for industries like finance, healthcare, and retail.
                </p>
            </div>

          </div>
        </div>
      </section>

      {/* Consultative Approach Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center", marginBottom: "80px" }}>
            <div className="wow animate__animated animate__fadeInLeft">
                <h4 style={{ fontSize: "2rem", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>A Consultative Approach to App Development</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                    What makes FI Digital stand out is our deeply consultative approach. We believe successful apps are built on a foundation of understanding your business inside-out.
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                    Our functional consultants act as bridges between your business vision and our technical team, ensuring nothing is lost in translation and the product aligns with your strategic objectives.
                </p>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <img src="/images1/App_Consult.jpg" alt="Consultative Approach" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/Development_team.jpg" alt="Collaboration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
                <h4 style={{ fontSize: "2rem", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>Emphasis on Collaboration and Transparency</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                    Throughout the project, we maintain open communication. Using agile methodologies, you see your app taking shape in real-time and can give feedback early and often.
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                    Our team works with you, not just for you – we’re here to provide professional guidance and advisory throughout the partnership.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Success Stories Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h4 style={{ fontSize: "2rem", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>Our Expertise & Success Stories</h4>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
                With years of experience, FI Digital has built a rich portfolio of successful projects spanning UI/UX design, cloud integration, and ongoing support.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "3rem", marginBottom: "80px" }}>
              <div style={{ background: "var(--card-bg)", padding: "3rem", borderRadius: "30px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <h5 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Case Study 1: Retail Operations</h5>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7 }}>
                    A retail chain needed a custom mobile and web app to streamline inventory management. Leveraging our Flutter expertise, we delivered a cross-platform solution that increased operational efficiency by 30% within months.
                </p>
              </div>

              <div style={{ background: "var(--card-bg)", padding: "3rem", borderRadius: "30px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <h5 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Case Study 2: FinTech Platform</h5>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7 }}>
                    We developed a secure investment platform for a fintech startup. Our focus on encryption and sleek UI design helped the platform gain thousands of users within its first quarter.
                </p>
              </div>
          </div>

          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
             <h4 style={{ fontSize: "2rem", fontWeight: 850, color: "var(--text)", marginBottom: "3rem" }}>Why Choose FI Digital?</h4>
             <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", listStyle: "none", textAlign: "left" }}>
                {[
                    { t: "Consultative approach", b: "We start by understanding your business and users properly." },
                    { t: "Technical Expertise", b: "Skilled in Flutter, React, and Node.js for top performance." },
                    { t: "Proven Track Record", b: "Successful projects for startups, SMEs and Enterprises alike." },
                    { t: "Full Lifecycle Support", b: "From concept to post-launch maintenance, we are with you." },
                    { t: "Transparent Process", b: "Regular demos and sprint reviews keep you in full control." },
                    { t: "Friendly Team", b: "We genuinely care about your success. Approachable experts." }
                ].map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "1rem" }}>
                        <div style={{ minWidth: "12px", height: "12px", borderRadius: "50%", background: "var(--primary)", marginTop: "6px" }} />
                        <div>
                            <strong style={{ display: "block", color: "var(--text)", marginBottom: "0.25rem" }}>{item.t}</strong>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{item.b}</p>
                        </div>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "100px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
            Let’s Build Your Next App Together
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9, lineHeight: 1.7 }}>
            If you’re looking for a company that combines technical skill with a truly consultative touch, FI Digital is your partner for success.
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
    </div>
  );
}
