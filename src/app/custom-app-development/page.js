import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

export default function CustomAppDevelopmentPage() {
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
            alt="Custom App Development Agency Background"
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
                Custom Solutions
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Custom Business App Development
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Bespoke solutions for unique needs: Off-the-shelf software can&apos;t always address the specific challenges your business faces. FI Digital specializes in custom business app development designed around your unique processes, goals, and ideas.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Tailored web and mobile apps: Whether you need powerful web applications or scalable mobile solutions, we build bespoke applications that streamline workflows and adapt as your business grows.
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

      {/* Bespoke Solutions Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/business_app.JPG" alt="Business App" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Bespoke Solutions for Unique Business Challenges
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Every business is different, and a one-size-fits-all software package often falls short. Our bespoke app development services focus on solving your specific business problems. We start by understanding exactly what you need and then craft a solution to match – nothing more, nothing less.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                By investing in a custom solution, you benefit from software that works the way you need it to, rather than forcing you to change your processes. Some key advantages include:
              </p>
              <ul style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, listStyleType: "disc", paddingLeft: "1.5rem", marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <li><b>Perfect fit for your processes:</b> Built around your specific workflows.</li>
                <li><b>Seamless integration:</b> Designed to work with CRM, ERP, and databases.</li>
                <li><b>Scalability and flexibility:</b> Evolves with your business growth.</li>
                <li><b>Competitive advantage:</b> Unique capabilities and full ownership of code.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consultative Process Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)", textAlign: "center" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
            Our Consultative Development Process
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "4rem" }}>
            Developing a successful application isn’t just about coding – it’s about collaboration. At FI Digital, we work alongside you as partners to build the right solution.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", textAlign: "left" }}>
            {[
              { title: "Discovery & Workshops", body: "We begin with in-depth discussions to identify your challenges, goals, and map your existing business processes." },
              { title: "Business Process Re-engineering", body: "We refine and optimize your workflows before development to ensure maximum efficiency." },
              { title: "User-Centric Design", body: "Our designers create wireframes and prototypes, focusing on an intuitive user experience aligned with your vision." },
              { title: "Agile Development", body: "We build the application iteratively using agile methods, keeping you in the loop with regular progress increments." },
              { title: "Quality Assurance & Launch", body: "Thorough testing for functionality, performance, and security before robust deployment." }
            ].map((card, i) => (
              <div key={i} style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>{card.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "3rem" }}>
            <p style={{ color: "var(--text)", fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.7, maxWidth: "800px", margin: "0 auto" }}>
              Throughout this process, communication is key. You’ll have a dedicated project manager and a team that’s always happy to discuss ideas in plain language.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Sections */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          
          {/* Web App Expertise */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center", marginBottom: "80px" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>
                Web App Development Expertise
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                As specialists in custom web app development, we build secure, scalable applications tailored for everything from internal systems to customer-facing portals.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                Every web application we develop is mobile-responsive, allowing your team and clients to access the new system anytime, anywhere.
              </p>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <img src="/images1/dev_team.jpg" alt="Web Development" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          {/* Integration & Flexibility */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center", marginBottom: "80px" }}>
             <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/Code 3.jpg" alt="Integration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>
                Integration and Flexibility
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                Our custom apps don’t operate in a silo. We design them to play nicely with your existing IT ecosystem – whether it&apos;s a CRM, inventory database, or third-party API.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                Thanks to our experience across industries like finance and manufacturing, we can quickly adapt to your sector’s unique compliance and operational requirements.
              </p>
            </div>
          </div>

          {/* Experienced Developers */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>
                Experienced Custom App Developers
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                When you partner with FI Digital, you gain access to a passionate team with decades of combined experience in software engineering and strategic business analysis.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                We pride ourselves on being approachable and transparent, sticking to agreed timelines, and going the extra mile to ensure your app genuinely help your business thrive.
              </p>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <img src="/images1/services.jpg" alt="Experienced Team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Support & Partnership Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>
                End-to-End Support & Long-Term Partnership
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Our relationship doesn’t end at launch. We offer comprehensive support to ensure you get the maximum value from your investment.
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                <div style={{ background: "var(--card-bg)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>Maintenance & Ownership</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>We provide tailored maintenance packages and full source code ownership. You retain full intellectual property with no recurring licensing fees.</p>
                </div>
                <div style={{ background: "var(--card-bg)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>Hosting & Scalability</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Our experts handle cloud setup, monitoring, and continuous scaling as your business discovers new features or modules to be implemented.</p>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <img src="/images1/Handshake.jpg" alt="Partnership" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "100px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
            Let&apos;s Discuss Your Custom App Project
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9, lineHeight: 1.7 }}>
            Ready to explore how a bespoke application could solve your business challenges? Contact FI Digital today for a friendly, no-obligation consultation.
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
