import ComplianceBadge from '@/components/ComplianceBadge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'HSE & Safety — PT Dayana Energi Nusantara',
    description: 'PT Dayana Energi Nusantara HSE commitment: zero accident, ISO 9001:2015, ISO 45001, and ISO 14001 certified operations across all project sites.',
};

const isoStandards = [
    { code: 'ISO 9001:2015', label: 'Quality Management System' },
    { code: 'ISO 45001', label: 'Occupational Health & Safety' },
    { code: 'ISO 14001', label: 'Environmental Management' },
    { code: 'CSMS', label: 'Contractor Safety Mgmt System' },
];

const safetyPrinciples = [
    { num: '01', color: '#16a34a', title: 'Zero Accident Target', desc: 'Our unwavering commitment to zero fatalities and zero Lost Time Incidents across all active project sites.' },
    { num: '02', color: '#e84a1a', title: 'Pre-Job Hazard Analysis', desc: 'Every task begins with a PHJA session to identify, assess, and mitigate risks before work commences.' },
    { num: '03', color: '#16a34a', title: 'Regular HSE Audits', desc: 'Monthly internal audits and quarterly external reviews ensure continuous HSE compliance.' },
    { num: '04', color: '#e84a1a', title: 'Continuous Training', desc: 'All personnel complete mandatory HSE certification programs and bi-annual safety refreshers.' },
    { num: '05', color: '#16a34a', title: 'Emergency Response', desc: 'Comprehensive emergency response plans active on every site, with dedicated medic on standby.' },
    { num: '06', color: '#e84a1a', title: 'Environmental Stewardship', desc: 'Minimizing ecological footprint through responsible waste management and erosion control.' },
];

export default function HSEPage() {
    return (
        <>
            {/* Hero */}
            <section style={{ minHeight: '60vh', background: '#0d0603', display: 'flex', alignItems: 'center', paddingTop: '64px', position: 'relative', overflow: 'hidden' }}>
                {/* Video Background */}
                <video autoPlay muted loop playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
                    <source src="/hero.webm" type="video/webm" />
                </video>
                {/* Dark Overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,4,2,0.72) 0%, rgba(20,8,4,0.55) 100%)', zIndex: 1 }} />

                <div aria-hidden style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '60vw', lineHeight: 1, color: '#a93200', opacity: 0.06, pointerEvents: 'none', userSelect: 'none', zIndex: 2 }}>D</div>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#a93200', zIndex: 3 }} />
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 64px', position: 'relative', zIndex: 3 }} className="section-pad">
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#e84a1a', marginBottom: '24px' }}>— Health, Safety &amp; Environment</p>
                    <h1 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 7vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#ffffff', maxWidth: '800px', marginBottom: '24px', textShadow: '0 2px 24px rgba(0,0,0,0.4)' }}>
                        Safety is{' '}
                        <span style={{ color: '#e84a1a' }}>Non-Negotiable</span>
                    </h1>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '18px', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, maxWidth: '540px' }}>
                        Every project site operates under a rigorous HSE framework. Our zero-accident record is not a coincidence — it is the result of disciplined systems, trained personnel, and an uncompromising safety culture.
                    </p>
                </div>
            </section>

            {/* ISO Certifications */}
            <section style={{ background: '#f6f3f2', padding: '80px 0', borderTop: '1px solid #e2bfb4' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }} className="section-pad">
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a93200', marginBottom: '40px' }}>— Active Certifications</p>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        {isoStandards.map((s) => (
                            <ComplianceBadge key={s.code} code={s.code} label={s.label} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Principles grid */}
            <section style={{ background: '#fcf9f8', padding: '80px 0 120px' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }} className="section-pad">
                    <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '36px', textTransform: 'uppercase', color: '#1c1b1b', marginBottom: '56px' }}>Our HSE Principles</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="hse-grid">
                        {safetyPrinciples.map((p) => (
                            <div
                                key={p.title}
                                style={{
                                    background: '#ffffff',
                                    border: '1px solid #e2bfb4',
                                    padding: '32px 24px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                                }}
                            >
                                <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '18px', color: '#1c1b1b', marginBottom: '16px' }}>{p.title}</h3>
                                <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#dcd9d9', letterSpacing: '0.1em' }}>{p.num}</span>
                                    <div style={{ height: '2px', width: '24px', background: p.color }} />
                                </div>
                                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', color: '#5a4139', lineHeight: 1.6 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
