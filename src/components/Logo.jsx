import React from 'react';

export default function Logo({ variant = "theme", width = "200px", height = "60px" }) {
    const isWhite = variant === "white";
    
    return (
        <div style={{ width, height, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="40" height="40" rx="8" fill={isWhite ? "white" : "var(--primary)"} />
                <path
                    d="M12 28V12H28"
                    stroke={isWhite ? "var(--primary)" : "white"}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M20 20L28 28"
                    stroke={isWhite ? "var(--primary)" : "white"}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span style={{
                fontSize: '1.5rem',
                fontWeight: 950,
                color: isWhite ? 'white' : 'var(--text)',
                fontFamily: 'system-ui',
                letterSpacing: '-0.02em'
            }}>
                FI <span style={{ color: isWhite ? 'rgba(255,255,255,0.8)' : 'var(--primary)' }}>Digital</span>
            </span>
        </div>
    );
}
