'use client';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
    quickLinks: [
        { label: 'About Us', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Projects', href: '/projects' },
        { label: 'Contact Us', href: '/contact' },
    ],
    compliance: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'ISO Certifications', href: '/hse' },
        { label: 'Careers', href: '/careers' },
    ],
};

export default function Footer() {
    return (
        <footer style={{ background: '#f0eded', borderTop: '1px solid #e2bfb4', paddingTop: '64px', paddingBottom: '32px' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }} className="footer-inner">
                {/* Main grid */}
                <div
                    style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}
                    className="footer-grid"
                >
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
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
                            <span style={{ color: '#1c1b1b', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px' }}>DEN</span>
                        </div>
                        <p style={{ color: '#a98a80', fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.6', maxWidth: '280px' }}>
                            PT Dayana Energi Nusantara adalah perusahaan konstruksi sipil dan mechanical engineering terkemuka di Indonesia yang memberikan solusi presisi tinggi untuk sektor energi.
                        </p>
                        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                            {[Phone, Mail, MapPin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        border: '1px solid #e2bfb4',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#8e7067',
                                        transition: 'border-color 0.2s, color 0.2s',
                                        borderRadius: '0.25rem',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#a93200';
                                        e.currentTarget.style.color = '#a93200';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '#e2bfb4';
                                        e.currentTarget.style.color = '#8e7067';
                                    }}
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <p style={{ color: '#1c1b1b', fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Quick Links</p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} style={{ color: '#5a4139', fontFamily: 'Inter, sans-serif', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = '#a93200')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = '#5a4139')}
                                    >{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Compliance */}
                    <div>
                        <p style={{ color: '#1c1b1b', fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Compliance</p>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {footerLinks.compliance.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} style={{ color: '#5a4139', fontFamily: 'Inter, sans-serif', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = '#a93200')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = '#5a4139')}
                                    >{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Headquarters */}
                    <div>
                        <p style={{ color: '#1c1b1b', fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Headquarters</p>
                        <p style={{ color: '#5a4139', fontFamily: 'Inter, sans-serif', fontSize: '13px', lineHeight: '1.6', marginBottom: '16px' }}>
                            Gedung Jaya Lt. 5<br />
                            Jl. M.H. Thamrin Kav. 12<br />
                            Jakarta Pusat, Indonesia
                        </p>
                        <p style={{ color: '#1c1b1b', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>General Inquiries</p>
                        <p style={{ color: '#a93200', fontFamily: 'Inter, sans-serif', fontSize: '13px' }}>info@dayanaenergi.co.id</p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{ borderTop: '1px solid #e2bfb4', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="footer-bottom">
                    <p style={{ color: '#8e7067', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px' }}>
                        © 2025 PT DAYANA ENERGI NUSANTARA. ALL RIGHTS RESERVED.
                    </p>
                    <p style={{ color: '#8e7067', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px' }}>
                        RELIABILITY · PRECISION
                    </p>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .footer-inner { padding: 0 16px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .footer-bottom { flex-direction: column !important; gap: 8px !important; text-align: center !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </footer>
    );
}
