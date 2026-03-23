"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Logo({ variant = "theme", width = "200px", height = "60px" }) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div style={{ width, height }} />;
    }

    const currentTheme = variant === "theme" ? (resolvedTheme || theme) : (variant === "white" ? "dark" : "light");
    
    // logo-on-dark1.png is for dark backgrounds (light logo)
    // logo-on-light1.png is for light backgrounds (dark logo)
    const logoSrc = currentTheme === "dark" ? "/img/logo-on-dark1.png" : "/img/logo-on-light1.png";

    return (
        <div style={{ 
            position: 'relative', 
            width, 
            height, 
            display: 'flex', 
            alignItems: 'center' 
        }}>
            <Image
                src={logoSrc}
                alt="FI Digital"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left' }}
                priority
            />
        </div>
    );
}
