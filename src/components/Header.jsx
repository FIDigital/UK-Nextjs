"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Plus, Minus } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { href: "/", label: "Home" },
    {
        label: "AI Agents",
        subLinks: [
            { href: "/finance-agents", label: "Finance & Billing Agents" },
            { href: "/sales-agents", label: "Sales & Outreach Agents" },
            { href: "/operations-agents", label: "Operations & Dispatch Agents" },
            { href: "/legal-agents", label: "Legal & Compliance Agents" },
        ]
    },
    {
        label: "Services",
        subLinks: [
            { href: "/ai-agent-development", label: "Custom AI Agent Development" },
            { href: "/enterprise-workflow-automation", label: "Enterprise Workflow Automation" },
            { href: "/llm-integration-rag", label: "LLM Integration & RAG" },
            { href: "/legacy-system-modernisation", label: "Legacy System Modernisation" },
            { href: "/discovery-audit", label: "4-Week AI Discovery Audit" },
            { href: "/ai-native-product-development", label: "AI-Native Product Development" },
        ]
    },
    {
        label: "Industries",
        subLinks: [
            { href: "/industries/financial-services", label: "Enterprise AI for Financial Services" },
            { href: "/industries/legal-professional-services", label: "Enterprise AI for Legal & Professional Services" },
            { href: "/industries/logistics-manufacturing", label: "Enterprise AI for Logistics & Manufacturing" },
        ]
    },
    {
        label: "Why FI Digital",
        subLinks: [
            { href: "/why-fi-digital/approach-architecture", label: "Our Approach & Architecture" },
            { href: "/why-fi-digital/global-delivery-model", label: "Global Delivery Model" },
            { href: "/why-fi-digital/partnerships", label: "Partnerships & Certifications" },
            { href: "/why-fi-digital/uk-compliance", label: "UK Compliance & Data Residency" },
            { href: "/why-fi-digital/our-team", label: "Our Team" },
        ]
    },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState(null);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const currentY = window.scrollY;
                    setScrolled(currentY > 20);
                    if (currentY > lastScrollY.current && currentY > 80) {
                        setVisible(false);
                        setMobileOpen(false);
                    } else {
                        setVisible(true);
                    }
                    lastScrollY.current = currentY;
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setMobileSubmenu(null);
    }, [pathname]);

    const toggleMobileSubmenu = (label) => {
        setMobileSubmenu(mobileSubmenu === label ? null : label);
    };

    return (
        <>
            <header
                className={[
                    "site-header",
                    scrolled ? "scrolled" : "",
                    visible ? "visible" : "hidden",
                ].join(" ")}
                role="banner"
            >
                <div
                    style={{
                        maxWidth: "1440px",
                        margin: "0 auto",
                        padding: "0 1.5rem",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "100%",
                    }}
                >
                    <Link href="/" aria-label="FI Digital – Home" style={{ display: "flex", alignItems: "center", height: "100%", textDecoration: "none", minWidth: "200px" }}>
                        <Logo variant="theme" width="200px" height="60px" />
                    </Link>

                    <div style={{ display: "flex", alignItems: "center", gap: "2rem", height: "100%" }}>
                        <nav
                            className="nav-desktop"
                            aria-label="Main navigation"
                            style={{ display: "flex", alignItems: "center", gap: "0.5rem", height: "100%" }}
                        >
                            {navLinks.map((link) => (
                                <div key={link.label} className="nav-item-wrapper" style={{ height: "100%", position: "relative" }}>
                                    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                                        {link.href ? (
                                            <Link
                                                href={link.href}
                                                className={`nav-link ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) ? "active" : ""}`}
                                                style={{
                                                    color: "var(--text)",
                                                    fontSize: "0.85rem",
                                                    fontWeight: 700,
                                                    letterSpacing: "0.01em",
                                                    textDecoration: "none",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.4rem",
                                                    height: "100%",
                                                    padding: "0 1rem",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                {link.label}
                                                {link.subLinks && <ChevronDown size={14} className="dropdown-chevron" opacity={0.5} />}
                                            </Link>
                                        ) : (
                                            <span
                                                className={`nav-link ${link.subLinks?.some(sub => pathname === sub.href) ? "active" : ""}`}
                                                style={{
                                                    color: "var(--text)",
                                                    fontSize: "0.85rem",
                                                    fontWeight: 700,
                                                    letterSpacing: "0.01em",
                                                    cursor: "default",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.4rem",
                                                    height: "100%",
                                                    padding: "0 1rem",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                {link.label}
                                                {link.subLinks && <ChevronDown size={14} className="dropdown-chevron" opacity={0.5} />}
                                            </span>
                                        )}
                                    </div>

                                    {link.subLinks && (
                                        <div className="dropdown-menu">
                                            {link.subLinks.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={sub.href}
                                                    style={{
                                                        display: "block",
                                                        padding: "0.75rem 1.25rem",
                                                        fontSize: "0.85rem",
                                                        fontWeight: 600,
                                                        color: pathname === sub.href ? "var(--primary)" : "var(--text)",
                                                        textDecoration: "none",
                                                        transition: "all 0.2s ease",
                                                        borderBottom: pathname === sub.href ? "2px solid var(--primary)" : "2px solid transparent",
                                                    }}
                                                    className={`dropdown-item${pathname === sub.href ? " active" : ""}`}
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <div className="header-actions-desktop" style={{ display: "flex", alignItems: "center", gap: "1.25rem", borderLeft: "1px solid var(--border)", paddingLeft: "1.25rem", height: "30px" }}>
                            <ThemeToggle />
                        </div>

                        <button
                            className="nav-mobile-btn"
                            onClick={() => setMobileOpen((o) => !o)}
                            aria-expanded={mobileOpen}
                            aria-label="Toggle mobile menu"
                            style={{
                                display: "none",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: "0.5rem",
                                color: "var(--text)",
                                position: "relative",
                                zIndex: 1001
                            }}
                        >
                            <div className={`hamburger ${mobileOpen ? "open" : ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
                <nav style={{ padding: "80px 1.5rem 2.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", padding: "0 0.5rem" }}>
                        <span style={{ fontSize: "0.9rem", fontWeight: 700, opacity: 0.6, textTransform: "uppercase" }}>Theme</span>
                        <ThemeToggle />
                    </div>

                    {navLinks.map((link) => (
                        <div key={link.label} style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                {link.href ? (
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        style={{
                                            padding: "1rem 0.5rem",
                                            fontSize: "1.25rem",
                                            fontWeight: 800,
                                            color: "var(--text)",
                                            textDecoration: "none",
                                            flex: 1
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                ) : (
                                    <span
                                        style={{
                                            padding: "1rem 0.5rem",
                                            fontSize: "1.25rem",
                                            fontWeight: 800,
                                            color: "var(--text)",
                                            flex: 1,
                                            cursor: "default"
                                        }}
                                        onClick={() => toggleMobileSubmenu(link.label)}
                                    >
                                        {link.label}
                                    </span>
                                )}
                                {link.subLinks && (
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleMobileSubmenu(link.label);
                                        }}
                                        style={{
                                            background: "rgba(0,0,0,0.05)",
                                            border: "none",
                                            borderRadius: "8px",
                                            width: "40px",
                                            height: "40px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--text)"
                                        }}
                                    >
                                        {mobileSubmenu === link.label ? <Minus size={18} /> : <Plus size={18} />}
                                    </button>
                                )}
                            </div>

                            {link.subLinks && mobileSubmenu === link.label && (
                                <div style={{
                                    paddingLeft: "1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    borderLeft: "2px solid var(--primary)",
                                    margin: "0.5rem 0 0.5rem 0.5rem"
                                }}>
                                    {link.subLinks.map((sub) => (
                                        <Link
                                            key={sub.href}
                                            href={sub.href}
                                            onClick={() => setMobileOpen(false)}
                                            style={{
                                                padding: "0.75rem 0.5rem",
                                                fontSize: "1rem",
                                                fontWeight: 600,
                                                color: "var(--text-muted)",
                                                textDecoration: "none"
                                            }}
                                        >
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            <style>{`
              .nav-desktop { display: flex; }
              .header-actions-desktop { display: flex; }
              .nav-mobile-btn { display: none; }

              .hamburger {
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 5px;
                width: 26px;
                height: 22px;
              }
              .hamburger span {
                display: block;
                height: 2.5px;
                width: 100%;
                background: var(--text);
                border-radius: 4px;
                transition: all 0.32s cubic-bezier(0.16,1,0.3,1);
                transform-origin: center;
              }
              .hamburger.open span:nth-child(1) {
                transform: translateY(7.5px) rotate(45deg);
              }
              .hamburger.open span:nth-child(2) {
                opacity: 0;
                transform: scaleX(0);
              }
              .hamburger.open span:nth-child(3) {
                transform: translateY(-7.5px) rotate(-45deg);
              }

              .nav-link {
                transition: all 0.2s ease;
                border-bottom: 2px solid transparent;
              }
              .nav-link:hover, .nav-link.active {
                color: var(--primary) !important;
              }

               .dropdown-menu {
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%) translateY(10px);
                background: var(--card-bg);
                border: 1px solid var(--border);
                border-radius: 16px;
                min-width: 260px;
                padding: 1rem;
                box-shadow: 0 20px 40px rgba(0,0,0,0.12);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
                z-index: 1000;
              }
              .nav-item-wrapper:hover .dropdown-menu {
                opacity: 1;
                visibility: visible;
                transform: translateX(-50%) translateY(0);
              }
              .nav-item-wrapper:hover .dropdown-chevron {
                transform: rotate(180deg);
                color: var(--primary);
                opacity: 1;
              }
              .dropdown-item:hover {
                background: var(--hover-bg);
                color: var(--primary) !important;
                padding-left: 1.5rem !important;
              }

              .mobile-menu {
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                background: var(--bg);
                z-index: 999;
                transform: translateX(100%);
                transition: transform 0.38s cubic-bezier(0.16,1,0.3,1);
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
              }
              .mobile-menu.open {
                transform: translateX(0);
              }

              @media (max-width: 1024px) {
                .nav-desktop          { display: none !important; }
                .header-actions-desktop { display: none !important; }
                .nav-mobile-btn       { display: flex !important; align-items: center; justify-content: center; }
              }

              @media (max-width: 480px) {
                .site-header .logo-container { min-width: auto !important; }
              }
            `}</style>
        </>
    );
}
