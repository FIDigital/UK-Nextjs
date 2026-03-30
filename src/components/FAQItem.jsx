"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Reusable FAQ Item component.
 * Supports local state for expansion.
 */
const FAQItem = ({ question, answer, isOpen: externalIsOpen, onClick }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isControlled = externalIsOpen !== undefined;
  const isOpen = isControlled ? externalIsOpen : internalIsOpen;
  
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
    
    // Recalculate on window resize in case text wraps differently
    const handleResize = () => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [answer, isOpen]);

  const handleToggle = () => {
    if (onClick) {
      onClick();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <div 
      className="faq-item" 
      style={{ 
        padding: 0, 
        overflow: "hidden", 
        marginBottom: "1rem",
        background: "var(--card-bg)",
        border: isOpen ? "1px solid var(--primary)" : "1px solid var(--border)",
        borderRadius: "16px",
        boxShadow: isOpen ? "0 10px 30px rgba(0,0,0,0.05)" : "none",
        transition: "all 0.3s ease"
      }}
    >
      <button 
        onClick={handleToggle} 
        aria-expanded={isOpen}
        style={{ 
          width: "100%", 
          background: "none", 
          border: "none", 
          cursor: "pointer", 
          padding: "1.5rem 1.75rem", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          gap: "1rem", 
          textAlign: "left" 
        }}
      >
        <span style={{ fontWeight: 700, fontSize: "1.05rem", color: isOpen ? "var(--primary)" : "var(--text)", transition: "color 0.2s ease" }}>
            {question}
        </span>
        <div style={{ 
          width: 32, 
          height: 32, 
          borderRadius: "50%", 
          background: isOpen ? "var(--primary)" : "var(--bg)", 
          border: isOpen ? "1px solid var(--primary)" : "1px solid var(--border)", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          flexShrink: 0, 
          transition: "all 0.3s ease",
          boxShadow: isOpen ? "0 4px 12px rgba(79, 70, 229, 0.3)" : "none"
        }}>
          <ChevronDown 
            size={16} 
            style={{ 
              color: isOpen ? "white" : "var(--text-muted)", 
              transform: isOpen ? "rotate(180deg)" : "rotate(0)", 
              transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)" 
            }} 
          />
        </div>
      </button>
      <div 
        style={{ 
          maxHeight: isOpen ? (height + 100) + "px" : 0, 
          opacity: isOpen ? 1 : 0,
          overflow: "hidden", 
          transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)" 
        }}
        aria-hidden={!isOpen}
      >
        <div 
          ref={contentRef}
          style={{ 
            padding: "0 1.75rem 1.5rem", 
            color: "var(--text-muted)", 
            lineHeight: 1.75, 
            fontSize: "1rem" 
          }}
        >
          {answer}
        </div>
      </div>
      <style jsx>{`
        .faq-item:hover {
          border-color: var(--primary) !important;
        }
      `}</style>
    </div>
  );
};

export default FAQItem;
