import Link from "next/link";
import { ArrowRight, Box, Book, DollarSign, FileText, Check, BarChart2 } from "lucide-react";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const keyFeatures = [
  { title: "Multi Channel Support", icon: <Box size={24} /> },
  { title: "Track Agent Productivity", icon: <Book size={24} /> },
  { title: "Customer Satisfaction Surveys", icon: <DollarSign size={24} /> },
  { title: "Customer Ticket Management", icon: <FileText size={24} /> },
  { title: "Self-Service Portal", icon: <Check size={24} /> },
  { title: "Service Insights & Reports", icon: <BarChart2 size={24} /> },
];

export default function ZohoServicesPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(120px, 15vh, 140px) 1.5rem 80px",
        background: "var(--bg)",
        overflow: "hidden",
      }}>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1250px", margin: "0 auto", width: "100%", textAlign: "center" }}>
            <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.75rem",
                padding: "0.6rem 1.2rem", background: "rgba(79, 70, 229, 0.1)",
                borderRadius: "100px", border: "1px solid rgba(79, 70, 229, 0.2)",
                marginBottom: "2.5rem", color: "var(--primary)", fontSize: "0.85rem",
                fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase"
            }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
                Zoho Desk
            </div>
            <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 950,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                color: "var(--text)",
                maxWidth: "1000px",
                margin: "0 auto 1.5rem"
            }}>
                Streamline your customer service using <span style={{ color: "var(--primary)" }}>Zoho Desk.</span>
            </h1>
            <p style={{
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                color: "var(--text-muted)",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "750px",
                margin: "0 auto 3rem"
            }}>
                Manage your multi channel customer support and deliver the highest customer satisfaction with an intuitive layout and automations which helps your service agents.
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
      </section>

      {/* Key Features */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 850, color: "var(--text)", marginBottom: "1rem" }}>
              Key Features
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              All important functionalities built on best practices for manufacturing industry.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem"
          }}>
            {keyFeatures.map((feature, i) => (
              <div key={i} style={{
                background: "var(--card-bg)",
                padding: "1.5rem",
                borderRadius: "20px",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                transition: "transform 0.3s ease",
              }}>
                <div style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "rgba(79, 70, 229, 0.1)",
                    color: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    {feature.icon}
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 750, color: "var(--text)", margin: 0 }}>
                    {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
            
            {/* Detail 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center", marginBottom: "100px" }}>
                <div>
                    <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                        Optimize Your Scheduling and Dispatch
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                        Zoho Desk's intelligent ticket routing features enable you to assign the right ticket to the right customer support agent, helping them with context in turn getting customer queries solved quicker. Combine it with collaborative features for multiple departments to work on a single ticket, giving customer single window to avail support.
                    </p>
                </div>
                <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                    <img src="/images1/saas/classic02.png" alt="Optimization" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
            </div>

            {/* Detail 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center", marginBottom: "100px" }}>
                <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)", order: { md: 1, base: 2 } }}>
                    <img src="/images1/saas/classic03.png" alt="Automation" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ order: { md: 2, base: 1 } }}>
                    <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                        Automate repetitive service tasks
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                        Let your customer support team work on solving customer problems and not updating unnecessary records. Zoho process automations prompts them with the next best options, does inter department assignments and sends customer satisfaction surveys all automatically.
                    </p>
                </div>
            </div>

            {/* Detail 3 */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
                <div>
                    <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, color: "var(--text)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                        Get customer and agent insights
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>
                        Zoho Desk helps managers get customer satisfaction scores and agent productivity metrics on rich reports and dashboards. Track metrics like first response times, customer sentiments, time to resolutions at agent, department and company level. Aid your customer strategy with rich insights and solid data points.
                    </p>
                </div>
                <div style={{ position: "relative", borderRadius: "30px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                    <img src="/images1/saas/classic01.png" alt="Insights" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
            </div>

        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "100px 1.5rem", background: "var(--bg-secondary)", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, color: "var(--text)", marginBottom: "1.5rem" }}>
                Deliver Exceptional <span style={{ color: "var(--primary)" }}>Service.</span>
              </h2>
              <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem" }}>
                Ready to transform your customer support environment? Get started with FI Digital today.
              </p>
              <Link href="/contact" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1.2rem 3.5rem",
                background: "var(--primary)",
                color: "white",
                fontWeight: 700,
                fontSize: "1.1rem",
                borderRadius: "16px",
                textDecoration: "none",
                boxShadow: "0 10px 40px rgba(79, 70, 229, 0.4)",
            }}>
                Talk to an Expert <ArrowRight size={20} />
            </Link>
          </div>
      </section>
    </div>
  );
}
