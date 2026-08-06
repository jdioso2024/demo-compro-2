'use client';
import { useState } from 'react';
import ComplianceBadge from '@/components/ComplianceBadge';
import { MapPin, Phone, Mail, Diamond } from 'lucide-react';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', company: '', service: 'Civil Construction', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <>
            {/* ═══════════════════════════ HERO ═══ */}
            <section style={{ minHeight: '60vh', background: '#0d0603', display: 'flex', alignItems: 'center', paddingTop: '64px', position: 'relative', overflow: 'hidden' }}>
                {/* Video Background */}
                <video autoPlay muted loop playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
                    <source src="/hero.webm" type="video/webm" />
                </video>
                {/* Dark Overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,4,2,0.72) 0%, rgba(20,8,4,0.55) 100%)', zIndex: 1 }} />

                <div aria-hidden style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '60vw', lineHeight: 1, color: '#a93200', opacity: 0.06, pointerEvents: 'none', userSelect: 'none', zIndex: 2 }}>D</div>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 64px', position: 'relative', zIndex: 3 }} className="section-pad">
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#e84a1a', marginBottom: '24px' }}>— Partner with Experts</p>
                    <h1 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 6vw, 64px)', lineHeight: 1.05, textTransform: 'none', color: '#ffffff', maxWidth: '700px', marginBottom: '24px', textShadow: '0 2px 24px rgba(0,0,0,0.4)' }}>
                        Ready to Discuss Your{' '}
                        <span style={{ color: '#e84a1a' }}>Next Project?</span>
                    </h1>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, maxWidth: '520px' }}>
                        Whether you&apos;re planning a large-scale civil development or seeking specialized energy infrastructure support, our team is ready to deliver precision-engineered solutions.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════ CONTACT SECTION ═══ */}
            <section style={{ background: '#f6f3f2', padding: 'var(--py-section-md) 0 var(--py-section)' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }} className="section-pad">
                    <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '80px', alignItems: 'start' }} className="contact-grid">
                        {/* Left: Info */}
                        <div>
                            {/* Office */}
                            <div style={{ marginBottom: '40px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <div style={{ width: '36px', height: '36px', border: '1px solid #a93200', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.25rem' }}>
                                        <MapPin size={16} color="#a93200" />
                                    </div>
                                    <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#1c1b1b' }}>Office Address</p>
                                </div>
                                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '15px', color: '#5a4139', lineHeight: 1.7, paddingLeft: '48px' }}>
                                    Jl. Kemang Saya No. 45C, Mampang Prapatan,<br />
                                    Jakarta Selatan, DKI Jakarta 12790,<br />
                                    Indonesia
                                </p>
                            </div>

                            {/* Phone */}
                            <div style={{ marginBottom: '40px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <div style={{ width: '36px', height: '36px', border: '1px solid #a93200', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.25rem' }}>
                                        <Phone size={16} color="#a93200" />
                                    </div>
                                    <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#1c1b1b' }}>Direct Phone</p>
                                </div>
                                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '18px', color: '#1c1b1b', paddingLeft: '48px' }}>+62 813 9404 5068</p>
                            </div>

                            {/* Email */}
                            <div style={{ marginBottom: '48px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <div style={{ width: '36px', height: '36px', border: '1px solid #a93200', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.25rem' }}>
                                        <Mail size={16} color="#a93200" />
                                    </div>
                                    <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#1c1b1b' }}>Email Inquiry</p>
                                </div>
                                <a href="mailto:contact@dayanaenergi.co.id" style={{ fontFamily: 'Sora, sans-serif', fontSize: '15px', color: '#a93200', paddingLeft: '48px', display: 'block', textDecoration: 'none' }}>
                                    contact@dayanaenergi.co.id
                                </a>
                            </div>

                            {/* ISO Badges */}
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                <ComplianceBadge code="ISO 9001:2015" label="Quality" />
                                <ComplianceBadge code="ISO 45001" label="Safety" />
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div style={{ border: '1px solid #e2bfb4', background: '#ffffff', padding: '40px', borderRadius: '0.5rem', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
                            <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1c1b1b', marginBottom: '32px' }}>Send an Inquiry</p>

                            {sent ? (
                                <div style={{ padding: '40px 0', textAlign: 'center' }}>
                                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                                    <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', color: '#1c1b1b', marginBottom: '8px' }}>Inquiry Sent!</p>
                                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', color: '#5a4139' }}>Our team will get back to you within 1 business day.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="form-row">
                                        {[
                                            { label: 'FULL NAME', field: 'name', placeholder: 'Your full name' },
                                            { label: 'COMPANY NAME', field: 'company', placeholder: 'Your company' },
                                        ].map(({ label, field, placeholder }) => (
                                            <div key={field}>
                                                <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', color: '#8e7067', display: 'block', marginBottom: '8px' }}>{label}</label>
                                                <input
                                                    required
                                                    placeholder={placeholder}
                                                    value={form[field as keyof typeof form]}
                                                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                                                    style={{
                                                        background: 'transparent',
                                                        border: 'none',
                                                        borderBottom: '1px solid #e2bfb4',
                                                        color: '#1c1b1b',
                                                        fontFamily: 'Sora, sans-serif',
                                                        fontSize: '15px',
                                                        padding: '10px 0',
                                                        width: '100%',
                                                        outline: 'none',
                                                    }}
                                                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#a93200')}
                                                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = '#e2bfb4')}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Service dropdown */}
                                    <div>
                                        <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', color: '#8e7067', display: 'block', marginBottom: '8px' }}>SERVICE INTEREST</label>
                                        <select
                                            value={form.service}
                                            onChange={(e) => setForm({ ...form, service: e.target.value })}
                                            style={{
                                                background: '#f6f3f2',
                                                border: 'none',
                                                borderBottom: '1px solid #e2bfb4',
                                                color: '#1c1b1b',
                                                fontFamily: 'Sora, sans-serif',
                                                fontSize: '15px',
                                                padding: '10px 0',
                                                width: '100%',
                                                outline: 'none',
                                                cursor: 'pointer',
                                                appearance: 'none',
                                            }}
                                        >
                                            {['Civil Construction', 'Energy Support', 'Mechanical & Piping', 'Procurement & Manpower', 'Geothermal Works', 'Other'].map((opt) => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.12em', color: '#8e7067', display: 'block', marginBottom: '8px' }}>YOUR MESSAGE</label>
                                        <textarea
                                            required
                                            rows={5}
                                            placeholder="Describe your project, requirements, or questions..."
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            style={{
                                                background: 'transparent',
                                                border: 'none',
                                                borderBottom: '1px solid #e2bfb4',
                                                color: '#1c1b1b',
                                                fontFamily: 'Sora, sans-serif',
                                                fontSize: '15px',
                                                padding: '10px 0',
                                                width: '100%',
                                                outline: 'none',
                                                resize: 'vertical',
                                            }}
                                            onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#a93200')}
                                            onBlur={(e) => (e.currentTarget.style.borderBottomColor = '#e2bfb4')}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        style={{
                                            background: '#a93200',
                                            color: '#ffffff',
                                            fontFamily: 'Sora, sans-serif',
                                            fontWeight: 700,
                                            fontSize: '13px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            border: 'none',
                                            padding: '18px 32px',
                                            cursor: 'pointer',
                                            width: '100%',
                                            transition: 'opacity 0.2s',
                                            borderRadius: '0.25rem',
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                                    >
                                        Send Inquiry →
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
                <style jsx>{`
          @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 600px) { .form-row { grid-template-columns: 1fr !important; } }
          @media (max-width: 768px) { .section-pad { padding: 0 16px !important; } }
        `}</style>
            </section>

            {/* ═══════════════════════════ MAP ═══ */}
            <section style={{ background: '#eae7e7', padding: '0', position: 'relative', height: '400px', overflow: 'hidden', borderTop: '1px solid #e2bfb4' }}>
                {/* Google Maps Embed */}
                <div style={{ position: 'absolute', inset: 0, background: '#eae7e7' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5826112825525!2d106.82012741086808!3d-6.186571393775111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f428a74c279b%3A0x3a906017d0fc8502!2sGedung%20JAYA!5e0!3m2!1sid!2sid!4v1786035529248!5m2!1sid!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* Card overlay */}
                <div style={{ position: 'absolute', bottom: '32px', left: '64px', background: 'rgba(252,249,248,0.95)', border: '1px solid #e2bfb4', padding: '24px 32px', maxWidth: '320px', borderRadius: '0.25rem' }} className="map-card">
                    <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase', color: '#1c1b1b', marginBottom: '8px' }}>Headquarters</h3>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', color: '#5a4139', lineHeight: 1.6, marginBottom: '16px' }}>
                        Strategic operations base serving major industrial hubs across Indonesia.
                    </p>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', color: '#a93200', textDecoration: 'none', textTransform: 'uppercase' }}>
                        Get Directions ↗
                    </a>
                </div>
            </section>

            {/* ═══════════════════════════ FORMAL QUOTE CTA ═══ */}
            <section style={{ background: '#f6f3f2', padding: 'var(--py-section-md) 0', borderTop: '1px solid #e2bfb4', position: 'relative', overflow: 'hidden' }}>
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                        <div style={{ border: '2px solid #a93200', padding: '12px 16px', transform: 'rotate(45deg)', width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Diamond size={20} color="#a93200" style={{ transform: 'rotate(-45deg)' }} />
                        </div>
                    </div>
                    <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 40px)', textTransform: 'uppercase', color: '#1c1b1b', letterSpacing: '-0.01em', marginBottom: '16px' }}>
                        Ready for a Formal Quote?
                    </h2>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', color: '#5a4139', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 40px' }}>
                        Download our company profile or request a comprehensive project estimation from our engineering department.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button style={{ background: '#a93200', color: '#ffffff', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', border: 'none', padding: '16px 32px', cursor: 'pointer', borderRadius: '0.25rem' }}>
                            Request Quote
                        </button>
                        <button style={{ border: '1px solid #8e7067', background: 'transparent', color: '#1c1b1b', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 32px', cursor: 'pointer', borderRadius: '0.25rem' }}>
                            Download Profile
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
