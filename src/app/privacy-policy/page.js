import { metadata as pageMetadata } from './meta';

export const metadata = pageMetadata;

export default function Page() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-MCLC47PW" 
          height="0" 
          width="0" 
          style={{ display: "none", visibility: "hidden" }} 
        />
      </noscript>

      {/* Zoho SalesIQ Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}};
            var d=document;s=d.createElement("script");s.id="zsiqscript";
            s.src="https://salesiq.zohopublic.com/widget?wc=siqd5554e2b4cb32464c280697bfa50a51cc07229c8920b4b9dc4247500c1733a43";
            s.defer=true;d.getElementsByTagName("head")[0].appendChild(s);
          `,
        }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .policy-container { 
          max-width: 1000px; 
          margin: 0 auto; 
          padding: clamp(120px, 15vh, 140px) 1.5rem 80px;
          color: var(--text);
          line-height: 1.8;
        }
        .policy-section { margin-bottom: 3rem; }
        .policy-title { font-size: 2.5rem; fontWeight: 800; margin-bottom: 1rem; letter-spacing: -0.02em; }
        .policy-subtitle { font-size: 1.25rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; color: var(--text); }
        .policy-text { color: var(--text-muted); margin-bottom: 1.25rem; text-align: justify; }
        .policy-list { list-style: disc; padding-left: 1.5rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem; }
        .policy-link { color: #1d4ed8; text-decoration: none; font-weight: 600; }
        .policy-link:hover { text-decoration: underline; }
      `}} />

      <div className="policy-container">
        <h1 className="policy-title">Privacy Policy</h1>
        <p style={{ fontWeight: 700, marginBottom: "2rem" }}>Effective Date: 17/11/2023</p>

        <section className="policy-section">
          <p className="policy-text">
            DSV Information Technology LLC is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-subtitle">1. Information We Collect</h2>
          <ul className="policy-list">
            <li><span style={{ fontWeight: 700, color: "var(--text)" }}>Personal Information:</span> We may collect personal information such as your name, email address, phone number, and other relevant details when you use our services or interact with our website.</li>
            <li><span style={{ fontWeight: 700, color: "var(--text)" }}>Usage Information:</span> We may collect information about your usage of our website and services, including IP addresses, browser information, and other data related to your interactions with us.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="policy-subtitle">2. How We Use Your Information</h2>
          <p className="policy-text" style={{ fontWeight: 600 }}>We use the collected information for the following purposes:</p>
          <ul className="policy-list">
            <li>Providing and improving our services.</li>
            <li>Responding to your inquiries and requests.</li>
            <li>Sending you important information, updates, or promotional materials.</li>
            <li>Analyzing website and service usage to enhance user experience.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="policy-subtitle">3. Disclosure of Your Information</h2>
          <p className="policy-text" style={{ fontWeight: 600 }}>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described below:</p>
          <ul className="policy-list">
            <li><span style={{ fontWeight: 700, color: "var(--text)" }}>Service Providers:</span> We may share your information with third-party service providers who assist us in providing and improving our services.</li>
            <li><span style={{ fontWeight: 700, color: "var(--text)" }}>Legal Compliance:</span> We may disclose your information if required by law or in response to a legal request.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2 className="policy-subtitle">4. Cookies and Tracking Technologies</h2>
          <p className="policy-text">
            We use cookies and similar tracking technologies to analyze website traffic, personalize content, and provide a better user experience. You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-subtitle">5. Security</h2>
          <p className="policy-text">
            We take reasonable measures to protect the confidentiality and security of your personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-subtitle">6. Your Rights</h2>
          <p className="policy-text">
            You have the right to access, correct, or delete your personal information. If you have any questions or requests regarding your information, please contact us at <a href="mailto:info@fidigital.co.uk" className="policy-link">info@fidigital.co.uk</a>.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-subtitle">7. Changes to This Privacy Policy</h2>
          <p className="policy-text">
            We reserve the right to update or modify this Privacy Policy at any time. The most current version will be posted on our website with the effective date.
          </p>
        </section>

        <section className="policy-section">
          <h2 className="policy-subtitle">8. Contact Us</h2>
          <p className="policy-text">If you have any questions or concerns about our Privacy Policy, please contact us at:</p>
          <div style={{ fontWeight: 700, marginTop: "1rem" }}>
            <p>DSV Information Technology LLC</p>
            <p>Pratik Modi</p>
            <p><a href="mailto:info@fidigital.co.uk" className="policy-link">info@fidigital.co.uk</a></p>
            <p><a href="https://www.fidigital.co.uk" className="policy-link">www.fidigital.co.uk</a></p>
            <p><a href="tel:+447405649223" className="policy-link">+44 7405 649223</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
