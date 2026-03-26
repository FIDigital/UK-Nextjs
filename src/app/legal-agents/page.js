import LegalAgentsClient from "./LegalAgentsClient";

export const metadata = {
  title: "Legal AI Agents | FI Digital UK",
  description: "Claude-powered contract review, due diligence, compliance monitoring. SRA-compliant solutions for UK legal firms & in-house teams.",
  openGraph: {
    title: "Legal AI Agents | Operations Automation",
    description: "Your Legal Team Now Reviews Contracts in Minutes, Not Days. AI-assisted due diligence and compliance.",
    type: "website",
  },
};

export default function LegalAgentsPage() {
  return <LegalAgentsClient />;
}
