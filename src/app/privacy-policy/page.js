import Link from "next/link";

import { metadata as pageMetadata } from './meta';
export const metadata = pageMetadata;

const sections = [
  {
    heading: "1. Who We Are",
    body: "Digital Synergy Ventures UK Limited, trading as FI Digital UK, is the data controller responsible for your personal data. We are registered in England and Wales. Our registered address is London, United Kingdom.\n\nContact us at: privacy@fidigital.co.uk",
  },
  {
    heading: "2. What Data We Collect",
    body: "We may collect the following categories of personal data:\n\n• Identity data: name, job title, company name\n• Contact data: email address, telephone number, postal address\n• Technical data: IP address, browser type, pages visited, time on site\n• Usage data: how you use our website and services\n• Communication data: any messages or enquiries you send us",
  },
  {
    heading: "3. How We Use Your Data",
    body: "We use your personal data for the following purposes:\n\n• To respond to your enquiries and provide our services\n• To send you relevant marketing communications (with your consent)\n• To improve our website and services\n• To comply with legal and regulatory obligations\n• To manage our business relationships",
  },
  {
    heading: "4. Data Sharing",
    body: "We do not sell your personal data. We may share your data with service providers who assist in delivering our services, professional advisors under confidentiality obligations, and regulatory authorities where required by law. All third-party processors are required to handle your data in compliance with UK GDPR.",
  },
  {
    heading: "5. International Transfers",
    body: "Where we transfer data outside the UK or EEA, we ensure appropriate safeguards are in place, including standard contractual clauses approved by the ICO.",
  },
  {
    heading: "6. Data Retention",
    body: "We retain personal data for as long as necessary to fulfil the purposes for which it was collected, and as required by applicable law. Typically, client data is retained for 7 years after project completion. Marketing data is retained until you withdraw consent.",
  },
  {
    heading: "7. Your Rights",
    body: "Under UK GDPR, you have the right to access your personal data, correct inaccurate data, request erasure, object to or restrict processing, data portability, and withdraw consent at any time. To exercise any of these rights, contact us at privacy@fidigital.co.uk. You also have the right to lodge a complaint with the ICO at ico.org.uk.",
  },
  {
    heading: "8. Cookies",
    body: "We use cookies to improve your experience on our website. We use essential cookies (required for the website to function), analytics cookies (to understand how visitors use our site), and marketing cookies (to deliver relevant advertisements, with your consent). You can control cookies through your browser settings.",
  },
  {
    heading: "9. Security",
    body: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction. These include encryption, access controls, and regular security reviews.",
  },
  {
    heading: "10. Contact Us",
    body: "If you have any questions about this Privacy Policy, please contact:\n\nDigital Synergy Ventures UK Limited\nEmail: privacy@fidigital.co.uk\nWebsite: https://fidigital.co.uk",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <section style={{ padding: "clamp(120px, 15vh, 140px) 1.5rem 60px", background: "var(--bg)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.75rem",
            padding: "0.6rem 1.2rem", background: "rgba(79, 70, 229, 0.1)",
            borderRadius: "100px", border: "1px solid rgba(79, 70, 229, 0.2)",
            marginBottom: "2rem", color: "var(--primary)", fontSize: "0.85rem",
            fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase",
          }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 10px var(--primary)" }} />
            Legal
          </div>
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 950, lineHeight: 1.1,
            marginBottom: "1rem", letterSpacing: "-0.03em", color: "var(--text)",
          }}>
            Privacy <span style={{ color: "var(--primary)" }}>Policy</span>
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Last updated: April 2025</p>
        </div>
      </section>

      <section style={{ padding: "60px 1.5rem 100px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", color: "var(--text-muted)", lineHeight: 1.9, fontSize: "1rem" }}>
          {sections.map((section, i) => (
            <div
              key={i}
              style={{
                marginBottom: "3rem",
                paddingBottom: "3rem",
                borderBottom: i < sections.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>
                {section.heading}
              </h2>
              <div style={{ whiteSpace: "pre-line" }}>{section.body}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
