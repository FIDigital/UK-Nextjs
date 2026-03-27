import LLMIntegrationClient from "./LLMIntegrationClient";

export const metadata = {
  title: "LLM Integration & RAG Architecture | Claude, GPT-4o, Gemini | FI Digital UK",
  description: "Multi-model LLM integration and RAG systems. Deploy Claude, GPT-4o, Gemini, or open-source models. Retrieval-augmented generation for document-heavy enterprises.",
  alternates: {
    canonical: "https://fidigital.co.uk/llm-integration-rag",
  },
};

export default function LlmIntegrationRAGPage() {
  return <LLMIntegrationClient />;
}
