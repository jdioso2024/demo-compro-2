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
            <section style={{ minHeight: '60vh', background: '#fcf9f8', display: 'flex', alignItems: 'center', paddingTop: '64px', position: 'relative', overflow: 'hidden', backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23a93200\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
                <div aria-hidden style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '60vw', lineHeight: 1, color: '#a93200', opacity: 0.04, pointerEvents: 'none', userSelect: 'none' }}>D</div>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 64px', position: 'relative', zIndex: 1 }} className="section-pad">
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a93200', marginBottom: '24px' }}>— Partner with Experts</p>
                    <h1 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 6vw, 64px)', lineHeight: 1.05, textTransform: 'none', color: '#1c1b1b', maxWidth: '700px', marginBottom: '24px' }}>
                        Ready to Discuss Your{' '}
                        <span style={{ color: '#a93200' }}>Next Project?</span>
                    </h1>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', color: '#5a4139', lineHeight: 1.6, maxWidth: '520px' }}>
                        Whether you&apos;re planning a large-scale civil development or seeking specialized energy infrastructure support, our team is ready to deliver precision-engineered solutions.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════ CONTACT SECTION ═══ */}
            <section style={{ background: '#f6f3f2', padding: '80px 0 120px' }}>
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
                {/* Stylized Jakarta map */}
                <div style={{ position: 'absolute', inset: 0, background: '#eae7e7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 800 400" style={{ width: '100%', height: '100%', opacity: 0.2 }}>
                        {/* Grid lines */}
                        {Array.from({ length: 20 }).map((_, i) => (
                            <line key={`v${i}`} x1={i * 42} y1={0} x2={i * 42} y2={400} stroke="#a93200" strokeWidth="0.5" />
                        ))}
                        {Array.from({ length: 10 }).map((_, i) => (
                            <line key={`h${i}`} x1={0} y1={i * 44} x2={800} y2={i * 44} stroke="#a93200" strokeWidth="0.5" />
                        ))}
                        {/* Roads */}
                        <path d="M 100 200 L 700 200" stroke="#a93200" strokeWidth="2" />
                        <path d="M 400 50 L 400 350" stroke="#a93200" strokeWidth="2" />
                        <path d="M 150 100 L 650 300" stroke="#a93200" strokeWidth="1" strokeDasharray="10 5" />
                    </svg>
                </div>

                {/* Location pin overlay */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#a93200', border: '3px solid rgba(169,50,0,0.3)', animation: 'pulse 2s infinite' }} />
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
                <style jsx>{`
          @media (max-width: 768px) { .map-card { left: 16px !important; right: 16px !important; } }
          @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(169,50,0,0.4); } 50% { box-shadow: 0 0 0 12px rgba(169,50,0,0); } }
        `}</style>
            </section>

            {/* ═══════════════════════════ FORMAL QUOTE CTA ═══ */}
            <section style={{ background: '#f6f3f2', padding: '80px 0', borderTop: '1px solid #e2bfb4', position: 'relative', overflow: 'hidden' }}>
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
