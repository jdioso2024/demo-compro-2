'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'HSE & Safety', href: '/hse' },
    { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                background: 'rgba(252,249,248,0.96)',
                backdropFilter: 'blur(8px)',
                borderBottom: '1px solid #e2bfb4',
            }}
        >
            <div
                style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '0 64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '64px',
                }}
                className="nav-inner"
            >
                {/* Logo */}
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <div
                        style={{
                            width: '32px',
                            height: '32px',
                            background: '#a93200',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span style={{ color: '#fff', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '16px' }}>O</span>
                    </div>
                    <span style={{ color: '#1c1b1b', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '0.02em' }}>
                        DEN
                    </span>
                </Link>

                {/* Desktop Nav Links */}
                <ul
                    className="desktop-nav"
                    style={{ display: 'flex', gap: '32px', listStyle: 'none', alignItems: 'center' }}
                >
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                style={{
                                    color: '#1c1b1b',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    letterSpacing: '0.01em',
                                    transition: 'color 0.2s',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#a93200')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#1c1b1b')}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <Link
                    href="/contact"
                    className="desktop-nav"
                    style={{
                        background: '#a93200',
                        color: '#ffffff',
                        fontFamily: 'Sora, sans-serif',
                        fontWeight: 700,
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '10px 20px',
                        textDecoration: 'none',
                        display: 'inline-block',
                        borderRadius: '0.25rem',
                    }}
                >
                    MINTA PENAWARAN
                </Link>

                {/* Hamburger */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setOpen(!open)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: '#1c1b1b',
                        cursor: 'pointer',
                        padding: '4px',
                    }}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div
                    style={{
                        background: '#fcf9f8',
                        borderTop: '1px solid #e2bfb4',
                        padding: '24px 24px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            style={{
                                color: '#1c1b1b',
                                fontFamily: 'Sora, sans-serif',
                                fontWeight: 600,
                                fontSize: '16px',
                                textDecoration: 'none',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        style={{
                            background: '#a93200',
                            color: '#ffffff',
                            fontFamily: 'Sora, sans-serif',
                            fontWeight: 700,
                            fontSize: '12px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            padding: '12px 20px',
                            textDecoration: 'none',
                            textAlign: 'center',
                            display: 'block',
                            borderRadius: '0.25rem',
                        }}
                    >
                        MINTA PENAWARAN
                    </Link>
                </div>
            )}

            <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .nav-inner { padding: 0 16px !important; }
        }
      `}</style>
        </nav>
    );
}
