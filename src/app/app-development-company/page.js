import Link from "next/link";
import { ArrowRight, Smartphone, Globe, Briefcase } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

export default function AppDevelopmentCompanyPage() {
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
                Your Partner in Innovation
              </div>
              <h1 style={{
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Leading Business App Development Company – Your Partner in Web & Mobile Innovation
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "750px"
              }}>
                Welcome to FI Digital – a leading business app development company that brings your ideas to life through innovative web and mobile app development. We combine technical excellence with a consultative approach to deliver apps that not only look great but also drive real business results. Our friendly, professional team has helped startups and enterprises across the UK turn complex challenges into user-friendly digital solutions.
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
                <img src="/images1/saas/home.jpg" alt="App Development Company" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/services.jpg" alt="Comprehensive App Development" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Comprehensive App Development Services
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                At FI Digital, we offer end-to-end app development services tailored to your needs. Whether you need a powerful mobile app or a robust web application (or both!), our experienced developers and designers are ready to help. We ensure each product is scalable, secure, and aligned with your business goals. Our key service areas include:
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
                    We build high-quality mobile applications for iOS and Android that delight users and accelerate your business. As a modern Flutter app development company, we also specialize in Flutter – Google’s powerful cross-platform framework. This means we can develop a single app that runs smoothly on both Android and iOS, saving you time and development costs without compromising on performance or user experience.
                </p>
            </div>

            <div style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <Globe className="text-primary mb-4" size={32} />
                <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.2rem" }}>Web App Development</h4>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                    As an expert web app development company, FI Digital creates responsive, high-performance web applications accessible from any browser. Our team crafts web apps with intuitive user interfaces and robust back-ends, ensuring your platform can handle growing traffic and data securely. Whether it’s a customer portal, an e-commerce system, or a bespoke business software tool, we use the latest web technologies to build solutions that drive efficiency and engage your users.
                </p>
            </div>

            <div style={{ background: "var(--card-bg)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <Briefcase className="text-primary mb-4" size={32} />
                <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.2rem" }}>Business & Enterprise Solutions</h4>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                    We understand the unique needs of businesses when it comes to software. Our expertise in business app development means we design and build apps that streamline operations, improve customer experiences, and support your digital transformation. From internal productivity tools to customer-facing apps, we focus on creating value for your company at every step. We’ve delivered enterprise-grade solutions for industries such as finance, healthcare, retail, and more.
                </p>
            </div>

          </div>
        </div>
      </section>

      {/* Consultative Approach Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          
          {/* Consultative Approach Title & Content */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center", marginBottom: "80px" }}>
            <div className="wow animate__animated animate__fadeInLeft">
                <h4 style={{ fontSize: "2rem", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>A Consultative Approach to App Development</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                    What makes FI Digital stand out among business app development companies is our deeply consultative approach. We believe successful apps are built on a foundation of understanding your business inside-out. That’s why our process starts with workshops and consultations led by our experienced functional consultants.
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                    Our functional consultants act as bridges between your business vision and our technical team. They speak both the language of business and tech, ensuring nothing is lost in translation. This approach saves time during development and results in a product that truly aligns with your strategic objectives.
                </p>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <img src="/images1/saas/cta.jpg" alt="Consultative Approach" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          {/* Collaboration & Transparency Section */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)", order: { md: 1, base: 2 } }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/developer-coding.jpg" alt="Collaboration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ order: { md: 2, base: 1 } }} className="wow animate__animated animate__fadeInRight">
                <h4 style={{ fontSize: "2rem", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>Emphasis on Collaboration and Transparency</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                    Throughout the project, we maintain open communication and transparency. You’ll be involved at every major step, from design prototypes to iterative development sprints. We use agile methodologies, so you see your app taking shape in real-time and can give feedback early and often.
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                    Our team works with you, not just for you, ensuring a partnership-style relationship. Many of our clients tell us they appreciate how friendly and consultative our developers are – we’re here to advise and guide, not just to execute orders.
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
                With years of experience in web and mobile development, FI Digital has built a rich portfolio of successful projects. Our expertise spans UI/UX design, front-end and back-end development, cloud integration, and ongoing support. We stay up-to-date with the latest technologies so our clients get modern, future-proof solutions.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "3rem", marginBottom: "80px" }}>
              <div style={{ background: "var(--card-bg)", padding: "3rem", borderRadius: "30px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <h5 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Case Study 1: Transforming Retail Operations</h5>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7 }}>
                    A UK-based retail chain needed a custom mobile and web app to streamline inventory management across dozens of stores. Through our workshops, we identified pain points in their existing process and proposed a tailored solution. The result was a Flutter-based mobile app for store managers and a web dashboard for headquarters. Within months of launch, the client reported a 30% increase in operational efficiency and significantly reduced stock waste.
                </p>
              </div>

              <div style={{ background: "var(--card-bg)", padding: "3rem", borderRadius: "30px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <h5 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>Case Study 2: FinTech Mobile Platform</h5>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.7 }}>
                    A fintech startup partnered with FI Digital to develop a secure mobile platform for online investments. Through multiple discovery workshops, we refined the app’s concept. Leveraging our Flutter expertise, we delivered iOS and Android apps with a sleek UI and strong encryption. The platform gained thousands of users within the first quarter, and the client praised our ability to adapt to regulatory requirements.
                </p>
              </div>
          </div>

          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
             <h4 style={{ fontSize: "2rem", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem" }}>Client Testimonials</h4>
             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2rem" }}>
                 <blockquote style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "24px", fontStyle: "italic", textAlign: "left" }}>
                    <p style={{ color: "var(--text)", fontSize: "1.1rem", marginBottom: "1rem" }}>“FI Digital didn’t just build us an app – they helped us rethink our business process. The level of care and consultative guidance we received was beyond our expectations. The end product exceeded what we thought possible.”</p>
                    <p style={{ fontWeight: 800, color: "var(--primary)" }}>– Jane Smith, Operations Director at RetailCo</p>
                 </blockquote>
                 <blockquote style={{ padding: "2rem", background: "var(--bg-secondary)", borderRadius: "24px", fontStyle: "italic", textAlign: "left" }}>
                    <p style={{ color: "var(--text)", fontSize: "1.1rem", marginBottom: "1rem" }}>“The team at FI Digital is friendly, professional, and incredibly skilled. Their agile approach and clear communication made everything smooth. We felt involved at each step and are thrilled with the results.”</p>
                    <p style={{ fontWeight: 800, color: "var(--primary)" }}>– John Doe, CEO of FinTech Innovators</p>
                 </blockquote>
             </div>
          </div>

          {/* Why Choose Section */}
          <div style={{ background: "var(--card-bg)", padding: "4rem", borderRadius: "30px", border: "1px solid var(--border)" }}>
            <h4 style={{ fontSize: "2rem", fontWeight: 850, color: "var(--text)", marginBottom: "2rem", textAlign: "center" }}>Why Choose FI Digital for App Development?</h4>
            <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", listStyle: "none" }}>
                {[
                    { t: "Consultative approach", b: "We start by understanding your business and users properly." },
                    { t: "Technical Expertise", b: "Skilled in Flutter, React, Node.js and more for top performance." },
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
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9, lineHeight: 1.7 }}>
            If you’re looking for a business app development company that combines technical skill with a truly consultative touch, FI Digital is here to help. Whether you have a fully fleshed-out concept or just an idea and some business challenges to solve, we’d love to hear from you.
          </p>
          <p style={{ fontSize: "1.1rem", marginBottom: "3rem", opacity: 0.8, lineHeight: 1.7 }}>
            Ready to transform your vision into a successful app? Get in touch with our team today for a friendly, no-obligation chat about your needs. We&apos;re happy to answer your questions and guide you on the path to a great app.
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
