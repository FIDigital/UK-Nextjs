import React from "react";
import AiNativeProductClient from "./AiNativeProductClient";

export const metadata = {
  title: "AI-Native Product Development | Build Products That Wouldn't Exist Without AI",
  description: "AI-native web apps, mobile apps, and API platforms built from the ground up. Full-stack engineering with Claude, GPT-4o, and Gemini. 200+ engineers, £10M+ projects delivered.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI-Native Product Development",
  "description": "Full-stack development of AI-native web and mobile applications using React, Python, and integrated LLM architectures.",
  "provider": {
    "@type": "Organization",
    "name": "FI Digital UK",
    "url": "https://fidigital.co.uk"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "serviceType": "SaaS Product Engineering",
  "offers": {
    "@type": "Offer",
    "description": "Custom AI-native product engineering"
  }
};

export default function AiNativeProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AiNativeProductClient />
    </>
  );
}
