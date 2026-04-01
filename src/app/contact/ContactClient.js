"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  MessageCircle, Mail, Phone, ChevronDown, CheckCircle2,
  MapPin, Send, Rocket, Globe2, Building2,
  ExternalLink, ArrowUpRight, Zap, Target, BarChart
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TechMeshBackground = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      let animationFrameId;
      const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
      window.addEventListener("resize", resize);
      resize();
      const dots = [];
      const dotCount = 60;
      const maxDist = 250;
      for (let i = 0; i < dotCount; i++) {
          dots.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              vx: (Math.random() - 0.5) * 0.3,
              vy: (Math.random() - 0.5) * 0.3
          });
      }
      const animate = () => {
          if (!ctx) return;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = "rgba(79, 70, 229, 0.15)";
          ctx.strokeStyle = "rgba(79, 70, 229, 0.03)";
          dots.forEach((dot, i) => {
              dot.x += dot.vx; dot.y += dot.vy;
              if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
              if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
              ctx.beginPath(); ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2); ctx.fill();
              for (let j = i + 1; j < dots.length; j++) {
                  const d2 = dots[j];
                  const dist = Math.hypot(dot.x - d2.x, dot.y - d2.y);
                  if (dist < maxDist) {
                      ctx.beginPath(); ctx.moveTo(dot.x, dot.y); ctx.lineTo(d2.x, d2.y); ctx.stroke();
                  }
              }
          });
          animationFrameId = requestAnimationFrame(animate);
      };
      animate();
      return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animationFrameId); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.6, pointerEvents: "none" }} />;
};

function Counter({ to, suffix = "" }) {
  const el = useRef(null);
  useEffect(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: to, duration: 1.8, ease: "power2.out",
      scrollTrigger: { trigger: el.current, start: "top 92%" },
      onUpdate: () => { if (el.current) el.current.textContent = Math.round(obj.val) + suffix; }
    });
  }, [to, suffix]);
  return <span ref={el}>0{suffix}</span>;
}

export default function ContactClient() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-reveal", { y: 40, autoAlpha: 0, duration: 1, stagger: 0.15, ease: "power3.out" });
    gsap.from(".gsap-img-reveal", { scale: 0.9, autoAlpha: 0, duration: 1.5, ease: "power3.out", delay: 0.3 });
    gsap.from(".hub-main-reveal", { x: -30, autoAlpha: 0, duration: 1.2, delay: 0.5, ease: "power3.out" });
    gsap.from(".sidebar-reveal", { x: 30, autoAlpha: 0, duration: 1, delay: 0.7, stagger: 0.2, ease: "power3.out" });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
      <style jsx global>{`
        .contact-hub-wrapper {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 450px;
          gap: 4rem;
          padding: 0 1.5rem;
          position: relative;
        }

        .contact-main-hub {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 48px;
          padding: clamp(2rem, 5vw, 5rem);
          box-shadow: 0 50px 100px -20px rgba(0,0,0,0.1);
          margin-top: -300px;
          position: relative;
          z-index: 10;
        }

        [data-theme='dark'] .contact-main-hub {
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(40px);
          border-color: rgba(255,255,255,0.05);
        }

        .sticky-sidebar {
          position: sticky;
          top: 120px;
          height: fit-content;
          margin-top: -300px;
          z-index: 10;
        }

        .sidebar-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 32px;
          padding: 2rem;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .sidebar-card:hover {
          transform: translateX(-10px);
          border-color: var(--primary);
        }

        .hub-label {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--primary);
          margin-bottom: 1rem;
          display: block;
        }

        .zoho-frame {
          width: 100%;
          min-height: 850px;
          border: none;
          margin-top: 2rem;
        }

        .contact-method-pill {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: var(--card-bg);
          border-radius: 20px;
          border: 1px solid var(--border);
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          margin-bottom: 1rem;
        }

        .contact-method-pill:hover {
          background: var(--hover-bg);
          border-color: var(--primary);
          transform: scale(1.02);
        }

        .method-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }

        @media (max-width: 1200px) {
          .contact-hub-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .contact-main-hub, .sticky-sidebar {
            margin-top: 0;
          }
          .sticky-sidebar {
            position: relative;
            top: 0;
          }
        }


        @media (max-width: 768px) {
          .contact-main-hub { padding: 1.5rem; border-radius: 24px; }
          .zoho-frame { min-height: 950px; }
        }
      `}</style>

      {/* ── HERO SECTION ─────────────────────────────────────────────── */}
      <section style={{ position: "relative", display: "flex", alignItems: "center", padding: "160px 1.5rem 340px", background: "var(--hero-bg)", overflow: "hidden" }}>
        <TechMeshBackground />
        
        <div className="hero-background gsap-img-reveal" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom, rgba(4, 5, 12, 0.4) 0%, rgba(4, 5, 12, 1) 100%)", zIndex: 1 }} />
          <Image 
            src="/images/client-success-real.jpg" 
            alt="FI Digital Strategic Consultation" 
            fill
            style={{ objectFit: "cover", objectPosition: "center 20%", opacity: 0.3 }} 
            priority
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "1440px" }}>
       
        </div>
      </section>

      {/* ── INTERACTIVE HUB ──────────────────────────────────────────── */}
      <div className="contact-hub-wrapper">
        
        {/* Main Content Area: Form */}
        <main className="contact-main-hub hub-main-reveal">
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 900, lineHeight: 1.1, marginBottom: "0.75rem" }}>Get in Touch</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "500px", lineHeight: 1.6 }}>
              Fill out the form below and our strategic team will reach out to discuss your requirements.
            </p>
          </div>

          <iframe 
            src="/zoho-form.html" 
            className="zoho-frame" 
            title="Lead Capture Hub" 
            scrolling="no"
          ></iframe>
        </main>

        {/* Sticky Sidebar: Human Connections */}
        <aside className="sticky-sidebar">
          <div className="sidebar-reveal">
            <span className="hub-label">Direct Connect</span>
            <a href="https://wa.me/447405649223" target="_blank" className="contact-method-pill">
              <div className="method-icon-box" style={{ color: "#25D366" }}>
                <MessageCircle size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--text-muted)", textTransform: "uppercase" }}>WhatsApp</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 850 }}>+44 7405 649223</div>
              </div>
              <ArrowUpRight size={18} opacity={0.3} />
            </a>

            <a href="mailto:info@fidigital.ae" className="contact-method-pill">
              <div className="method-icon-box">
                <Mail size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--text-muted)", textTransform: "uppercase" }}>Strategic Desk</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 850 }}>info@fidigital.ae</div>
              </div>
              <ArrowUpRight size={18} opacity={0.3} />
            </a>

            <div className="sidebar-card" style={{ background: "var(--primary)", border: "none", color: "white", marginTop: "2rem" }}>
              <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                <Building2 size={24} />
                <h4 style={{ fontSize: "1.4rem", fontWeight: 900 }}>London Office</h4>
              </div>
              <p style={{ fontSize: "0.95rem", opacity: 0.9, lineHeight: 1.6, fontWeight: 500 }}>
                71-75 Shelton Street, Covent Garden,<br />
                London, WC2H 9JQ
              </p>
              <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.2)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 800, textTransform: "uppercase" }}>Response SLA</span>
                <span style={{ fontSize: "0.8rem", fontWeight: 900, background: "rgba(255,255,255,0.2)", padding: "0.3rem 0.8rem", borderRadius: "100px" }}>2 Hours</span>
              </div>
            </div>

            <div className="sidebar-card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "1rem" }}>Global Delivery Model</div>
              <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
                {[
                  { city: "LDN", flag: "🇬🇧" },
                  { city: "DXB", flag: "🇦🇪" },
                  { city: "SYD", flag: "🇦🇺" }
                ].map(c => (
                  <div key={c.city} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <span style={{ fontSize: "1.5rem" }}>{c.flag}</span>
                    <span style={{ fontSize: "0.7rem", fontWeight: 900, opacity: 0.6 }}>{c.city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

      </div>

      {/* ── FOOTER MARK ────────────────────────────────────────── */}
      <section style={{ padding: "120px 1.5rem", textAlign: "center", opacity: 0.4 }}>
      
      </section>

    </div>
  );
}
