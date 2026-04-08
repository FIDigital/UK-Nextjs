"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Plus, Minus, Linkedin, Phone, Mail, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/siteData";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

// Separate core menus from "Other Services"
const topLevelMenus = [
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
        label: "AI Services",
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
        label: "Zoho Services",
        isMegaMenu: true,
        otherServices: [
            {
                label: "Zoho ERP Solutions",
                href: "/service",
                subLinks: [
                    { href: "/app-development-agency", label: "App Development Agency" },
                    { href: "/custom-app-development", label: "Custom App Development" },
                    { href: "/app-development-company", label: "App Development Company" },
                    { href: "/small-business-app-development", label: "Small Business App Development" },
                    { href: "/sales", label: "Sales" },
                    { href: "/marketing", label: "Marketing" },
                    { href: "/zoho-marketing-automation", label: "Zoho Marketing Automation" },
                    { href: "/customer-experience-consulting", label: "Customer Experience Consulting" },
                    { href: "/service", label: "Services" },
                ]
            },
            {
                label: "CRM Implementation",
                href: "/zoho-crm-implementation",
                subLinks: [
                    { href: "/zoho-crm-implementation", label: "Zoho CRM Implementation" },
                    { href: "/zoho-crm-integration-partner", label: "Zoho CRM Integration Partner" },
                    { href: "/zoho-crm-consulting-partner", label: "Zoho CRM Consulting Partner" },
                    { href: "/zoho-crm-partners-uk", label: "Zoho CRM Partners UK" },
                    { href: "/zoho-one-implementation", label: "Zoho One Implementation" },
                    { href: "/zoho-desk-implementation", label: "Zoho Desk Implementation" },
                    { href: "/zoho-analytics-partners-uk", label: "Zoho Analytics Partners UK" },
                    { href: "/certified-zoho-analytics-partner", label: "Certified Zoho Analytics Partner" },
                    { href: "/zoho-implementation-partner-uk", label: "Zoho Implementation Partner UK" },
                    { href: "/zoho-creator-development", label: "Zoho Creator Development" },
                    { href: "/zoho-creator-partner", label: "Zoho Creator Partner" },
                ]
            },
            {
                label: "Partnerships",
                subLinks: [
                    { href: "/zoho-authorised-partner", label: "Zoho Authorised Partner" },
                    { href: "/zoho-authorized-partner-uk", label: "Zoho Authorized Partner UK" },
                    { href: "/zoho-premium-partner", label: "Zoho Premium Partner" },
                    { href: "/zoho-advanced-partner", label: "Zoho Advanced Partner" },
                    { href: "/zoho-certified-partner-uk", label: "Zoho Certified Partner UK" },
                    { href: "/zoho-reseller-partner", label: "Zoho Reseller Partner" },
                    { href: "/zoho-software-partners-uk", label: "Zoho Software Partners UK" },
                    { href: "/zoho-partner-berkshire", label: "Zoho Partner Berkshire" },
                    { href: "/zoho-partner-buckinghamshire", label: "Zoho Partner Buckinghamshire" },
                    { href: "/zoho-partner-hampshire", label: "Zoho Partner Hampshire" },
                    { href: "/zoho-partner-london", label: "Zoho Partner London" },
                    { href: "/zoho-partner-oxfordshire", label: "Zoho Partner Oxfordshire" },
                    { href: "/zoho-partner-portsmouth", label: "Zoho Partner Portsmouth" },
                    { href: "/zoho-partner-surrey", label: "Zoho Partner Surrey" },
                    { href: "/zoho-partner-sussex", label: "Zoho Partner Sussex" },
                ]
            },
            {
                label: "Consulting & Support",
                subLinks: [
                    { href: "/zoho-consulting-partner-uk", label: "Zoho Consulting Partner UK" },
                    { href: "/zoho-consulting-services", label: "Zoho Consulting Services" },
                    { href: "/certified-zoho-consultant", label: "Certified Zoho Consultant" },
                    { href: "/zoho-managed-services", label: "Zoho Managed Services" },
                    { href: "/zoho-integration-partner", label: "Zoho Integration Partner" },
                    { href: "/privacy-policy", label: "Privacy Policy" },
                ]
            }
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
    const [activeMegaSub, setActiveMegaSub] = useState(null);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    // Function to check if a menu section is active
    const isSectionActive = (link) => {
        if (link.href && pathname === link.href) return true;
        
        if (link.subLinks) {
            if (link.subLinks.some(sub => pathname === sub.href)) return true;
        }
        
        if (link.isMegaMenu && link.otherServices) {
            return link.otherServices.some(cat => {
                if (cat.href && pathname === cat.href) return true;
                if (cat.subLinks && cat.subLinks.some(sub => pathname === sub.href)) return true;
                return false;
            });
        }
        
        return false;
    };

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
                        height: "auto",
                        minHeight: "100%",
                    }}
                >
                    <Link href="/" aria-label="FI Digital – Home" style={{ display: "flex", alignItems: "center", height: "100%", textDecoration: "none", minWidth: "180px" }}>
                        <Logo variant="theme" width="180px" height="55px" />
                    </Link>

                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1, justifyContent: "center", padding: "0.5rem 0" }}>
                        <nav
                            className="nav-desktop"
                            aria-label="Main navigation"
                            style={{ display: "flex", alignItems: "center", gap: "0.1rem", flexWrap: "wrap", justifyContent: "center" }}
                        >
                            {topLevelMenus.map((link) => (
                                <div key={link.label} className="nav-item-wrapper" style={{ position: "relative" }}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        {link.href ? (
                                            <Link
                                                href={link.href}
                                                className={`nav-link ${isSectionActive(link) ? "active" : ""}`}
                                                style={{
                                                    color: "var(--text)",
                                                    fontSize: "0.78rem",
                                                    fontWeight: 750,
                                                    letterSpacing: "0.01em",
                                                    textDecoration: "none",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.25rem",
                                                    padding: "0.6rem 0.65rem",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                {link.label}
                                            </Link>
                                        ) : (
                                            <span
                                                className={`nav-link ${isSectionActive(link) ? "active" : ""}`}
                                                style={{
                                                    color: "var(--text)",
                                                    fontSize: "0.78rem",
                                                    fontWeight: 750,
                                                    letterSpacing: "0.01em",
                                                    cursor: "pointer",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.25rem",
                                                    padding: "0.6rem 0.65rem",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >
                                                {link.label}
                                                <ChevronDown size={14} className="dropdown-chevron" opacity={0.6} />
                                            </span>
                                        )}
                                    </div>

                                    {/* Normal Dropdown */}
                                    {link.subLinks && !link.isMegaMenu && (
                                        <div className="dropdown-menu">
                                            {link.subLinks.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={sub.href}
                                                    style={{
                                                        display: "block",
                                                        padding: "0.7rem 1.25rem",
                                                        fontSize: "0.85rem",
                                                        fontWeight: 650,
                                                        color: pathname === sub.href ? "var(--primary)" : "var(--text)",
                                                        textDecoration: "none",
                                                        transition: "all 0.2s ease",
                                                    }}
                                                    className={`dropdown-item ${pathname === sub.href ? "active" : ""}`}
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}

                                    {/* Mega Menu Dropdown */}
                                    {link.isMegaMenu && (
                                        <div className="mega-menu-container">
                                            <div style={{ display: "flex", minHeight: "350px", background: "var(--card-bg)" }}>
                                                {/* Left Panel: Category List */}
                                                <div style={{ width: "240px", borderRight: "1px solid var(--border)", padding: "1rem" }}>
                                                    {link.otherServices.map((cat, idx) => (
                                                        <div 
                                                            key={cat.label}
                                                            onMouseEnter={() => setActiveMegaSub(idx)}
                                                            className={`mega-cat-item ${activeMegaSub === idx ? "active" : ""}`}
                                                            style={{
                                                                padding: "0.8rem 1rem",
                                                                borderRadius: "10px",
                                                                cursor: "pointer",
                                                                fontSize: "0.9rem",
                                                                fontWeight: 750,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "space-between",
                                                                marginBottom: "0.25rem",
                                                                color: activeMegaSub === idx ? "var(--primary)" : "var(--text)",
                                                                background: activeMegaSub === idx ? "rgba(79, 70, 229, 0.05)" : "transparent"
                                                            }}
                                                        >
                                                            {cat.label}
                                                            <ChevronRight size={14} opacity={activeMegaSub === idx ? 1 : 0.3} />
                                                        </div>
                                                    ))}
                                                </div>
                                                {/* Right Panel: Sub-links Grid */}
                                                <div style={{ flex: 1, padding: "1.5rem", overflowY: "auto" }}>
                                                    {activeMegaSub !== null && (
                                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                                                            {link.otherServices[activeMegaSub].subLinks.map((sub) => (
                                                                <Link
                                                                    key={sub.href}
                                                                    href={sub.href}
                                                                    style={{
                                                                        padding: "0.75rem 1rem",
                                                                        borderRadius: "8px",
                                                                        fontSize: "0.85rem",
                                                                        fontWeight: 600,
                                                                        color: pathname === sub.href ? "var(--primary)" : "var(--text-muted)",
                                                                        textDecoration: "none",
                                                                        transition: "all 0.2s ease",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        gap: "0.5rem"
                                                                    }}
                                                                    className="dropdown-item"
                                                                >
                                                                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--primary)", opacity: 0.4 }} />
                                                                    {sub.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                    {activeMegaSub === null && (
                                                        <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontSize: "0.9rem", opacity: 0.6 }}>
                                                            Hover over a category to see services
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <div className="header-actions-desktop" style={{ display: "flex", alignItems: "center", gap: "0.75rem", borderLeft: "1px solid var(--border)", paddingLeft: "1rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginRight: "0.25rem" }}>
                                <a href={`tel:${siteConfig.phone}`} title={siteConfig.phone} style={{ color: "var(--text)", opacity: 0.6, transition: "opacity 0.2s" }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.6}>
                                    <Phone size={15} />
                                </a>
                                <a href={`mailto:${siteConfig.email}`} title={siteConfig.email} style={{ color: "var(--text)", opacity: 0.6, transition: "opacity 0.2s" }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.6}>
                                    <Mail size={15} />
                                </a>
                                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: "var(--text)", opacity: 0.6, transition: "opacity 0.2s" }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.6}>
                                    <Linkedin size={15} />
                                </a>
                            </div>
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
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", padding: "0 0.5rem" }}>
                        <span style={{ fontSize: "0.8rem", fontWeight: 800, opacity: 0.6, textTransform: "uppercase" }}>Connectivity</span>
                        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                            <a href={`tel:${siteConfig.phone}`} style={{ color: "var(--text)" }}><Phone size={18} /></a>
                            <a href={`mailto:${siteConfig.email}`} style={{ color: "var(--text)" }}><Mail size={18} /></a>
                            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text)" }}><Linkedin size={18} /></a>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", padding: "0 0.5rem" }}>
                        <span style={{ fontSize: "0.8rem", fontWeight: 800, opacity: 0.6, textTransform: "uppercase" }}>Theme Swapping</span>
                        <ThemeToggle />
                    </div>

                    {topLevelMenus.map((link) => (
                        <div key={link.label} style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                {link.href ? (
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        style={{
                                            padding: "0.8rem 0.5rem",
                                            fontSize: "1.1rem",
                                            fontWeight: 850,
                                            color: isSectionActive(link) ? "var(--primary)" : "var(--text)",
                                            textDecoration: "none",
                                            flex: 1
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                ) : (
                                    <span
                                        style={{
                                            padding: "0.8rem 0.5rem",
                                            fontSize: "1.1rem",
                                            fontWeight: 850,
                                            color: isSectionActive(link) ? "var(--primary)" : "var(--text)",
                                            flex: 1,
                                            cursor: "pointer"
                                        }}
                                        onClick={() => toggleMobileSubmenu(link.label)}
                                    >
                                        {link.label}
                                    </span>
                                )}
                                {(link.subLinks || link.isMegaMenu) && (
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleMobileSubmenu(link.label);
                                        }}
                                        style={{
                                            background: "rgba(0,0,0,0.03)",
                                            border: "none",
                                            borderRadius: "8px",
                                            width: "36px",
                                            height: "36px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--text)"
                                        }}
                                    >
                                        {mobileSubmenu === link.label ? <Minus size={16} /> : <Plus size={16} />}
                                    </button>
                                )}
                            </div>

                            {/* Mobile Normal Sublinks */}
                            {link.subLinks && !link.isMegaMenu && mobileSubmenu === link.label && (
                                <div style={{
                                    paddingLeft: "1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    borderLeft: "2px solid var(--primary)",
                                    margin: "0.25rem 0 0.5rem 0.5rem"
                                }}>
                                    {link.subLinks.map((sub) => (
                                        <Link
                                            key={sub.href}
                                            href={sub.href}
                                            onClick={() => setMobileOpen(false)}
                                            style={{
                                                padding: "0.6rem 0.5rem",
                                                fontSize: "0.95rem",
                                                fontWeight: 650,
                                                color: pathname === sub.href ? "var(--primary)" : "var(--text-muted)",
                                                textDecoration: "none"
                                            }}
                                        >
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {/* Mobile Mega Menu Links */}
                            {link.isMegaMenu && mobileSubmenu === link.label && (
                                <div style={{
                                    paddingLeft: "1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    borderLeft: "2px solid var(--primary)",
                                    margin: "0.25rem 0 0.5rem 0.5rem"
                                }}>
                                    {link.otherServices.map((cat) => (
                                        <div key={cat.label} style={{ marginBottom: "1rem" }}>
                                            <div style={{ fontSize: "0.8rem", fontWeight: 850, color: "var(--primary)", textTransform: "uppercase", marginBottom: "0.5rem" }}>{cat.label}</div>
                                            <div style={{ display: "grid", gap: "0.5rem" }}>
                                                {cat.subLinks.map(sub => (
                                                    <Link
                                                        key={sub.href}
                                                        href={sub.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        style={{
                                                            padding: "0.4rem 0",
                                                            fontSize: "0.95rem",
                                                            fontWeight: 650,
                                                            color: pathname === sub.href ? "var(--primary)" : "var(--text-muted)",
                                                            textDecoration: "none"
                                                        }}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
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
                width: 24px;
                height: 20px;
              }
              .hamburger span {
                display: block;
                height: 2.5px;
                width: 100%;
                background: var(--text);
                border-radius: 4px;
                transition: all 0.32s cubic-bezier(0.16,1,0.3,1);
              }
              .hamburger.open span:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
              .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
              .hamburger.open span:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }

              .nav-link {
                transition: all 0.2s ease;
                border: 1px solid transparent;
                border-radius: 100px;
              }
              .nav-link:hover, .nav-link.active {
                background: rgba(79, 70, 229, 0.04);
                color: var(--primary) !important;
              }

              /* Standard Dropdown */
              .dropdown-menu {
                position: absolute;
                top: 90%;
                left: 0;
                transform: translateY(0);
                background: var(--card-bg);
                border: 1px solid var(--border);
                border-radius: 16px;
                min-width: 240px;
                padding: 0.75rem;
                box-shadow: 0 20px 50px rgba(0,0,0,0.1);
                opacity: 0;
                visibility: hidden;
                transition: all 0.2s ease-out;
                z-index: 1000;
              }
              .nav-item-wrapper:hover .dropdown-menu {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
              }
              .dropdown-item:hover {
                background: rgba(79, 70, 229, 0.05);
                color: var(--primary) !important;
                padding-left: 1.5rem !important;
              }

              /* Mega Menu Container */
              .mega-menu-container {
                position: fixed;
                top: 62px;
                left: 50%;
                transform: translateX(-50%) translateY(0);
                width: 850px;
                background: var(--card-bg);
                border: 1px solid var(--border);
                border-radius: 24px;
                box-shadow: 0 30px 60px rgba(0,0,0,0.15);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease-out;
                z-index: 1000;
                overflow: hidden;
              }
              .nav-item-wrapper:hover .mega-menu-container {
                opacity: 1;
                visibility: visible;
                transform: translateX(-50%) translateY(0);
              }
              .nav-item-wrapper:hover .dropdown-chevron {
                transform: rotate(180deg);
                color: var(--primary);
                opacity: 1;
              }

              .mobile-menu {
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                background: var(--bg);
                z-index: 999;
                transform: translateX(100%);
                transition: transform 0.38s cubic-bezier(0.16,1,0.3,1);
                overflow-y: auto;
              }
              .mobile-menu.open { transform: translateX(0); }

              @media (max-width: 1200px) {
                  .site-header nav { gap: 0rem !important; }
                  .nav-link { font-size: 0.75rem !important; padding: 0.5rem !important; }
                  .mega-menu-container { width: 95vw; }
              }

              @media (max-width: 1024px) {
                .nav-desktop { display: none !important; }
                .header-actions-desktop { display: none !important; }
                .nav-mobile-btn { display: flex !important; }
              }
            `}</style>
        </>
    );
}
