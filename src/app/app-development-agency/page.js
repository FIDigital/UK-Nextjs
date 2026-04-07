import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

export default function AppDevelopmentAgencyPage() {
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
            src="/images1/software-development.jpg"
            alt="App Development Agency Background"
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
                App Development Agency
              </div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                App Development Agency Crafting Tailored Web & Mobile Solutions
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px"
              }}>
                Every business and app idea is unique, and so is our approach. At FI Digital, we pride ourselves on being a friendly, consultative app development agency that truly partners with you to bring your vision to life.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
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
        </div>
      </section>

      {/* Bespoke Solutions Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/ui-ux.jpg" alt="UX Design" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Bespoke Solutions with a Consultative Approach
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                One size does not fit all when it comes to digital products. Our agency’s process begins with getting to know your business inside and out. Through in-depth discovery sessions and interactive workshops, we collaborate closely with your stakeholders to uncover requirements, understand user needs, and even re-engineer business processes for better efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <p style={{ color: "var(--text-muted)", fontSize: "1.2rem", fontWeight: 600, lineHeight: 1.8 }}>
                Our team is passionate about user-centric design and innovation. We believe technology should solve real problems and make life easier for people. That’s why we place users at the heart of our design and development process. From mapping user journeys to iterative prototyping, we craft intuitive interfaces and seamless experiences shaped around your customers.
              </p>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <img src="/images1/Business Illustration 3.png" alt="Innovation" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Project Management Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
            Comprehensive Project Management, Start to Finish
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
            When you work with FI Digital, you gain a dedicated partner that guides you through every stage of app development. We provide comprehensive project management to keep your project on track from concept through to launch (and beyond).
          </p>
          <div style={{ padding: "2rem", background: "var(--card-bg)", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
            <p style={{ color: "var(--text)", fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.7 }}>
              Our project management approach is both agile and transparent. We adapt to changes swiftly and keep you in the loop with regular updates and demos. Budget and timeline are closely managed to meet your expectations; in fact, our team has a strong reputation for delivering projects on spec, on time, and on budget.
            </p>
          </div>
        </div>
      </section>

      {/* Full-Service Expertise Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center", marginBottom: "80px" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>
                Full-Service App Development Expertise
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                As an experienced app development agency, FI Digital offers a broad range of expertise under one roof. Our developers, designers, and strategists work together to deliver all aspects of your digital product.
              </p>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <img src="/images1/developer-coding.jpg" alt="Expertise" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          {[
            {
                title: "Flutter App Development",
                desc: "As a modern flutter app development agency, we leverage Google’s Flutter framework to create high-performance mobile apps quickly and cost-effectively. Flutter allows us to build beautiful, natively compiled applications for both iOS and Android from a single codebase.",
                img: "/images1/Flutter.png",
                reverse: true
            },
            {
                title: "React Native App Development",
                desc: "We are also a skilled react native app development company. Using Facebook’s popular React Native framework, we develop cross-platform mobile apps that feel truly native. Ideal for projects demanding a native user interface and performance.",
                img: "/images1/Service_testing.jpg",
                reverse: false
            },
            {
                title: "Web App Development",
                desc: "FI Digital excels as a web app development agency. We design and engineer powerful web applications – from responsive customer-facing web portals to complex enterprise web systems using modern frameworks like React.js, Angular, or Vue.js.",
                img: "/images1/Web Development.jpg",
                reverse: true
            }
          ].map((item, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center", marginBottom: "80px" }}>
                <div style={{ order: item.reverse ? { md: 2, base: 1 } : { md: 1, base: 1 } }}>
                    <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>{item.title}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>{item.desc}</p>
                </div>
                <div style={{ order: item.reverse ? { md: 1, base: 2 } : { md: 2, base: 2 }, position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                    <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
            </div>
          ))}

            {/* End-to-End Detail */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
                <div>
                    <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>End-to-End Development & Beyond</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                        No matter the platform, we cover the entire development lifecycle. Beyond just writing code, our full-service capabilities include UI/UX design, technical architecture, development, quality assurance, deployment, and even post-launch support and maintenance.
                    </p>
                </div>
                <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                    <img src="/images1/project timeline.jpg" alt="Project Timeline" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
            </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>
              Why Choose FI Digital as Your App Development Partner?
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              Choosing the right app development agency is a critical decision. Here are a few reasons why businesses trust FI Digital:
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Tailored, Bespoke Solutions", body: "We don’t do off-the-shelf. Every app we create is custom-made to fit your unique business needs and objectives." },
              { title: "Consultative Collaboration", body: "We work with you, not just for you – involving you in key decisions through workshops and progress meetings." },
              { title: "Experienced Multi-Disciplinary Team", body: "Access to developers, designers, project managers, and business analysts with years of experience." },
              { title: "Comprehensive Project Management", body: "Plan meticulously, manage risks, and keep you updated at every stage. Track record of projects on time and budget." },
              { title: "Focus on User Experience & Quality", body: "Fanatical about great UX and high-quality code. Crisp, modern UI and robust, scalable architecture." },
              { title: "Long-Term Support & Trust", body: "We aim for long-lasting relationships, providing continuous improvements and support after launch." }
            ].map((card, i) => (
              <div key={i} style={{ background: "var(--card-bg)", padding: "2rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>{card.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "100px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
            Ready to Start Your App Project?
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", opacity: 0.9 }}>
            Let’s work together to turn your vision into a successful digital product. Contact FI Digital today to discuss how we can bring your web or mobile app to life.
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
            Get Started Today! <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
