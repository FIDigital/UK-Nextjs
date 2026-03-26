import AIAgentDevelopmentClient from "./AIAgentDevelopmentClient";

export const metadata = {
  title: "Custom AI Agent Development with LangChain | FI Digital UK",
  description: "Enterprise AI agents built with LangChain, Claude, and GPT-4o. Production-grade autonomous systems for financial services, legal, and logistics.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom AI Agent Development",
  "description": "Production-grade AI agent development using LangChain, Python, and enterprise LLMs like Claude 3.5 and GPT-4o.",
  "provider": {
    "@type": "Organization",
    "name": "FI Digital UK",
    "url": "https://fidigital.co.uk"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "serviceType": "AI Software Engineering",
  "offers": {
    "@type": "Offer",
    "description": "Custom autonomous AI agent solutions"
  }
};

export default function CustomAIAgentDevPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIAgentDevelopmentClient />
    </>
  );
}
