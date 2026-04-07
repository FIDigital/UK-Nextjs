import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

export default function CustomAppDevelopmentPage() {
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
                Custom Solutions
              </div>
              <h1 style={{
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)"
              }}>
                Custom Business App Development
              </h1>
              <p style={{
                fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "750px"
              }}>
                Bespoke solutions for unique needs: Off-the-shelf software can&apos;t always address the specific challenges your business faces. FI Digital specializes in custom business app development that is entirely bespoke – we design and build applications around your unique processes, goals, and ideas. Our friendly, professional team of developers takes a consultative approach, working closely with you to ensure the final product truly fits your business.
              </p>
              <p style={{
                fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                lineHeight: 1.7,
                maxWidth: "750px"
              }}>
                Tailored web and mobile apps: Whether you need a powerful web application to optimize internal operations or a mobile app to engage customers, we can help. We build bespoke business applications that streamline workflows, integrate with your existing systems, and adapt as your business grows. The result? A custom-designed app that solves your challenges head-on and gives you a competitive edge.
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
                <img src="/images1/saas/cta.jpg" alt="Custom App Development" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Solutions Section */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/saas/classic02.png" alt="Business App" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Bespoke Solutions for Unique Business Challenges
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Every business is different, and a one-size-fits-all software package often falls short. Our bespoke app development services focus on solving your specific business problems. We start by understanding exactly what you need and then craft a solution to match – nothing more, nothing less.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                By investing in a custom solution, you benefit from software that works the way you need it to, rather than forcing you to change your processes. Some key advantages of choosing a custom-built app for your business include:
              </p>
              <ul style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, listStyleType: "disc", paddingLeft: "1.5rem", marginTop: "1.5rem" }}>
                <li><b>Perfect fit for your processes:</b> The app is built around your workflows and requirements, ensuring a perfect alignment with how your business operates.</li>
                <li><b>Seamless integration:</b> Custom apps can be designed to integrate with your current software (CRM, ERP, databases, etc.), so all your systems work in harmony.</li>
                <li><b>Scalability and flexibility:</b> As your business grows or changes, your app can be expanded and updated easily – it evolves with you, without the limitations of off-the-shelf products.</li>
                <li><b>Competitive advantage:</b> A bespoke app can give you unique capabilities that set you apart from competitors. You also retain full ownership of your custom software, with no recurring license fees.</li>
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
            Developing a successful custom application isn’t just about coding – it’s about collaboration and understanding your business. At FI Digital, we pride ourselves on our friendly, consultative approach. From day one, we work alongside you as partners, making sure we’re building the right solution for your needs.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", textAlign: "left" }}>
            {[
              { title: "Discovery & Workshops", body: "We begin with in-depth discussions and workshops with your team to identify your challenges, goals, and requirements. Our functional consultants will map out your existing business processes and uncover pain points or inefficiencies." },
              { title: "Business Process Re-engineering", body: "Before development, we often help refine and re-engineer your processes. By leveraging our business analysis expertise, we ensure that the workflow in the new application is optimized for maximum efficiency and productivity." },
              { title: "User-Centric Design", body: "Next, our designers create wireframes and prototypes, focusing on an intuitive user experience. We incorporate your feedback at this stage, so the app’s look and feel align with your vision and are easy for your staff or customers to use." },
              { title: "Agile Development", body: "Our team of bespoke business app developers then builds the application iteratively. We use agile development methods, which means you’ll see tangible progress in regular increments. Collaborative development style keeps you in the loop." },
              { title: "Quality Assurance & Launch", body: "Before launch, we perform thorough testing – checking functionality, performance, and security – to make sure the app is robust and reliable. We handle deployment of your new software to the cloud or your servers." }
            ].map((card, i) => (
              <div key={i} style={{ background: "var(--card-bg)", padding: "2rem", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>{card.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>{card.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "3rem" }}>
            <p style={{ color: "var(--text)", fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.7, maxWidth: "800px", margin: "0 auto" }}>
              Throughout this process, communication is key. You’ll have a dedicated project manager and a team that’s always happy to answer questions or discuss ideas. We speak in plain language, not technical jargon, so you always know what’s happening.
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
                Custom Web App Development Expertise
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                As specialists in custom web app development, we build secure, scalable web applications tailored for businesses like yours. Web apps can power everything from internal management systems to customer-facing portals.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                Our developers choose the best technology stack (whether it&apos;s a Microsoft, Java, or JavaScript-based solution) for each project, ensuring your custom app is secure, high-performing, and reliable for your critical operations.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginTop: "1rem" }}>
                Many businesses need solutions across both web and mobile, and we’ve got you covered. Every web application we develop is mobile-responsive, and we can also create complementary native mobile apps or progressive web apps as needed. This means your team and clients can access the new system anytime, anywhere – whether on a desktop in the office or on a smartphone in the field.
              </p>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <img src="/images1/developer-coding.jpg" alt="Web Development" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          {/* Integration & Flexibility */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center", marginBottom: "80px" }}>
             <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInLeft">
                <img src="/images1/saas/classic01.png" alt="Integration" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="wow animate__animated animate__fadeInRight">
              <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>
                Integration and flexibility
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                Our custom apps don’t operate in a silo. We design them to play nicely with your existing IT ecosystem. Need your new web app to pull data from your inventory database or send updates to your CRM? Done. Want to integrate a third-party API or a payment gateway? No problem. Our goal is to build a seamless digital environment for your business where all your tools work together efficiently.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                Thanks to our experience across industries like finance, professional services, manufacturing, and logistics, we can quickly adapt to your sector’s unique requirements. Our broad expertise means we understand the nuances of your business environment and can build a solution that truly supports your goals.
              </p>
            </div>
          </div>

          {/* Experienced Developers */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "5rem", alignItems: "center" }}>
            <div className="wow animate__animated animate__fadeInLeft">
              <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem" }}>
                Experienced Bespoke Business App Developers
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                When you partner with FI Digital, you gain access to a passionate team of skilled professionals. Our bespoke business app developers have decades of combined experience in software development and a proven track record of delivering successful projects.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                What sets our team apart is not just technical ability, but our commitment to understanding the business side of every project. We take the time to learn about your industry and objectives. This means we can suggest features or improvements you might not have considered and ensure the app genuinely helps your business thrive.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, marginTop: "1rem" }}>
                Working with FI Digital feels like adding expert developers to your own staff. We pride ourselves on being approachable and transparent. You’ll find our team communicates clearly, sticks to agreed timelines, and goes the extra mile to get things right.
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
                Our relationship with you doesn’t end at launch. In fact, that’s just the beginning of our long-term partnership. We stand by the solutions we develop and are committed to your ongoing success. After your custom app is live, FI Digital offers comprehensive support to ensure you get the maximum value from your investment.
              </p>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                <div style={{ background: "var(--card-bg)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>Post-launch support</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>If you encounter any issues or have questions, our team is here to help. We offer maintenance and support packages that can be tailored to your needs, whether you require occasional check-ups or dedicated ongoing assistance. You’ll have direct access to our developers and support engineers when you need them.</p>
                </div>
                <div style={{ background: "var(--card-bg)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>Continuous improvement</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>As your business evolves, you might discover new features or enhancements that would make the app even more useful. We’re available to discuss and implement updates or additional modules whenever you’re ready. Think of us as an extension of your team – your go-to bespoke app developers for any future development needs.</p>
                </div>
                <div style={{ background: "var(--card-bg)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>Hosting & monitoring</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Our experts can set up your app in a reliable cloud environment or on your servers, with proper security measures and monitoring in place. This way, you can rest assured that your system is stable, secure, and performing well.</p>
                </div>
                <div style={{ background: "var(--card-bg)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border)" }}>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>You own the code</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Importantly, when we build a custom app for you, it’s yours. You retain full ownership of the source code and intellectual property. There are no licensing strings attached. This gives you complete freedom – whether you continue to work with us for enhancements or even bring the solution in-house down the line.</p>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }} className="wow animate__animated animate__fadeInRight">
                <img src="/images1/saas/cta.jpg" alt="Partnership" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div style={{ marginTop: "3rem" }}>
            <p style={{ color: "var(--text)", fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.7, maxWidth: "800px" }}>
                Our aim is to be your trusted technology partner for the long haul. Many of our clients continue working with us for years, relying on our expertise as their businesses grow and change. We’re proud to see the apps we develop making a real difference for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "100px 1.5rem", background: "var(--primary)", textAlign: "center", color: "white" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
            Let&apos;s Discuss Your Custom App Project
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9, lineHeight: 1.7 }}>
            Ready to explore how a bespoke application could solve your business challenges? Let&apos;s talk. Contact FI Digital today for a friendly, no-obligation consultation. Whether you have a concrete project in mind or just want to brainstorm possibilities, our team is here to listen and provide guidance.
          </p>
          <p style={{ fontSize: "1.1rem", marginBottom: "3rem", opacity: 0.8, lineHeight: 1.7 }}>
            We can schedule a free initial call or even set up a discovery workshop to dive into your ideas. You’ll come away with valuable insights and a clearer vision – even if you decide not to proceed immediately. Let&apos;s work together to create a bespoke software solution that empowers your business and sets you up for success.
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
            Request Your Free Custom Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
