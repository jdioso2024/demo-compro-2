import Link from 'next/link';
import ComplianceBadge from '@/components/ComplianceBadge';
import MetricBadge from '@/components/MetricBadge';
import { Eye, Target } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us — PT Dayana Energi Nusantara',
    description: 'Learn about PT Dayana Energi Nusantara, our history, vision, mission, leadership team, and core values driving industrial excellence.',
};

const leaders = [
    { name: 'Budi Kusuma', title: 'Direktur Utama', role: 'As founder, his vision to develop high-quality infrastructure and energy solutions in East Kalimantan.', initials: 'BK' },
    { name: 'Santi Wijaya', title: 'Direktur Operasi', role: 'Skills, Leadership, and Economy, Financial capabilities are high standard to meet the energy sector.', initials: 'SW' },
    { name: 'Adityo Pratama', title: 'Direktur Teknik', role: 'Technical engineering capabilities in heavy civil construction and mechanical engineering services.', initials: 'AP' },
];

const values = [
    { num: '01', label: 'Integrity', color: '#16a34a', desc: 'Unyielding ethical standards in every contract, project, and partnership.' },
    { num: '02', label: 'Precision', color: '#e84a1a', desc: 'Engineering to the exact millimeter, ensuring flawless operational longevity.' },
    { num: '03', label: 'Safety', color: '#16a34a', desc: 'Zero-compromise approach to HSE standards to protect our most valuable asset: people.' },
    { num: '04', label: 'Excellence', color: '#e84a1a', desc: 'Continuously evolving technical capabilities to outpace industry demands.' },
];

export default function AboutPage() {
    return (
        <>
            {/* ═══════════════════════════ HERO ═══ */}
            <section
                style={{
                    minHeight: '70vh',
                    background: '#0d0603',
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '64px',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Video Background */}
                <video autoPlay muted loop playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
                    <source src="/hero.webm" type="video/webm" />
                </video>
                {/* Dark Overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,4,2,0.72) 0%, rgba(20,8,4,0.55) 100%)', zIndex: 1 }} />

                <div aria-hidden style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '60vw', lineHeight: 1, color: '#a93200', opacity: 0.06, pointerEvents: 'none', userSelect: 'none', zIndex: 2 }}>D</div>

                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 64px', position: 'relative', zIndex: 3 }} className="section-pad">
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#e84a1a', marginBottom: '24px' }}>— About Us</p>
                    <h1
                        style={{
                            fontFamily: 'Sora, sans-serif',
                            fontWeight: 800,
                            fontSize: 'clamp(36px, 7vw, 72px)',
                            lineHeight: 1.05,
                            letterSpacing: '-0.02em',
                            textTransform: 'uppercase',
                            color: '#ffffff',
                            maxWidth: '800px',
                            marginBottom: '24px',
                            textShadow: '0 2px 24px rgba(0,0,0,0.4)',
                        }}
                    >
                        Building the{' '}
                        <span style={{ color: '#e84a1a' }}>Future</span>
                        <br />of Infrastructure
                    </h1>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '18px', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, maxWidth: '580px' }}>
                        PT Dayana Energi Nusantara berdiri di garis terdepan infrastruktur industri Indonesia — memberikan solusi presisi penuh untuk sektor energi, konstruksi, dan teknik mekanik.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════ BLUEPRINT OF EXCELLENCE ═══ */}
            <section style={{ background: '#f6f3f2', padding: 'var(--py-section) 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }} className="section-pad">
                    <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '80px', alignItems: 'stretch' }} className="blueprint-grid">
                        {/* Text */}
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                    <div style={{ width: '32px', height: '1px', background: '#a93200' }} />
                                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a93200' }}>Profile Perusahaan</span>
                                </div>
                                <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '36px', textTransform: 'uppercase', color: '#1c1b1b', lineHeight: 1.2, marginBottom: '24px' }}>
                                    The Blueprint of Excellence
                                </h2>
                                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', color: '#5a4139', lineHeight: 1.7, marginBottom: '24px' }}>
                                    Berdiri di atas fondasi rekam teknis yang kuat, PT Dayana Energi Nusantara telah membuktikan komitmennya, membangun, mengelola, dan menyelesaikan proyek-proyek berdampak tinggi di lingkungan industri paling menantang.
                                </p>
                                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', color: '#5a4139', lineHeight: 1.7, marginBottom: '40px' }}>
                                    Kami percaya bahwa setiap proyek infrastruktur adalah warisan — struktur yang bertahan puluhan tahun, yang digunakan tidak hanya untuk bisnis energi tetapi untuk bangsa.
                                </p>
                            </div>

                            {/* Stats */}
                            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                                <MetricBadge value="25+" label="Years Active" />
                                <MetricBadge value="150+" label="Projects Done" />
                            </div>
                        </div>

                        {/* Image cards */}
                        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '16px', height: '100%' }}>
                            <div style={{ minHeight: '200px', height: '100%', background: '#eae7e7', border: '1px solid #dcd9d9', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.25rem', overflow: 'hidden' }}>
                                <img src="/construction(700x200).webp" alt="Proyek Konstruksi" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
                                <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(28,27,27,0.7)', padding: '6px 12px', borderRadius: '0.25rem', zIndex: 1 }}>
                                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#a93200', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Proyek Konstruksi</p>
                                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', color: '#fff', fontWeight: 600 }}>Pembangunan Infrastruktur Industri</p>
                                </div>
                            </div>
                            <div style={{ minHeight: '200px', height: '100%', background: '#eae7e7', border: '1px solid #dcd9d9', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.25rem', overflow: 'hidden' }}>
                                <img src="/construction(700x200).webp" alt="Energy Systems" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
                                <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(28,27,27,0.7)', padding: '6px 12px', borderRadius: '0.25rem', zIndex: 1 }}>
                                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#a93200', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Energy Systems</p>
                                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', color: '#fff', fontWeight: 600 }}>Critical Energy Infrastructure</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════ VISION & MISSION ═══ */}
            <section style={{ background: '#fcf9f8', padding: 'var(--py-section) 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }} className="section-pad">
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a93200', marginBottom: '16px' }}>Our Direction</p>
                        <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '36px', textTransform: 'uppercase', color: '#1c1b1b' }}>Vision &amp; Mission</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="vm-grid">
                        {/* Vision */}
                        <div style={{ border: '1px solid #e2bfb4', background: '#f6f3f2', padding: '40px', borderRadius: '0.5rem' }}>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                <div style={{ width: '48px', height: '48px', border: '1px solid #a93200', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, borderRadius: '0.25rem' }}>
                                    <Eye size={20} color="#a93200" />
                                </div>
                                <div>
                                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a93200', marginBottom: '12px' }}>01 · Vision</p>
                                    <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '20px', color: '#1c1b1b', marginBottom: '16px' }}>Our Vision</h3>
                                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '15px', color: '#5a4139', lineHeight: 1.7 }}>
                                        To be for an truly catalyst for technological progress in the Southeast Asia, recognized for setting the benchmark for infrastructure, engineering integrity, and sustainable industrial development.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mission */}
                        <div style={{ border: '1px solid #e2bfb4', background: '#f6f3f2', padding: '40px', borderRadius: '0.5rem' }}>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                <div style={{ width: '48px', height: '48px', border: '1px solid #a93200', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, borderRadius: '0.25rem' }}>
                                    <Target size={20} color="#a93200" />
                                </div>
                                <div>
                                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a93200', marginBottom: '12px' }}>02 · Mission</p>
                                    <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '20px', color: '#1c1b1b', marginBottom: '16px' }}>Our Mission</h3>
                                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '15px', color: '#5a4139', lineHeight: 1.7 }}>
                                        We deliver a focused and well-running support to high-intense industry solutions, technical excellence, and commitment to long-time client service to ensure the quality for every client.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════ LEADERSHIP ═══ */}
            <section style={{ background: '#f6f3f2', padding: 'var(--py-section) 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }} className="section-pad">
                    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a93200', marginBottom: '16px' }}>Our Team</p>
                        <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '36px', textTransform: 'uppercase', color: '#1c1b1b' }}>Commanding Authority</h2>
                        <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', color: '#5a4139', marginTop: '16px' }}>We naturally assemble top-quality domain specialists experienced in heavy industry and project management.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="leaders-grid">
                        {leaders.map((l) => (
                            <div key={l.name} style={{ border: '1px solid #e2bfb4', background: '#ffffff', overflow: 'hidden', borderRadius: '0.5rem', boxShadow: '0px 2px 4px rgba(0,0,0,0.05)' }}>
                                {/* Photo */}
                                <div
                                    style={{
                                        height: '240px',
                                        background: '#eae7e7',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <img src="/construction(400x250).webp" alt={l.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '24px' }}>
                                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a93200', marginBottom: '8px' }}>
                                        {l.title}
                                    </p>
                                    <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', color: '#1c1b1b', marginBottom: '12px' }}>{l.name}</h3>
                                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '13px', color: '#5a4139', lineHeight: 1.6 }}>{l.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════ VALUES ═══ */}
            <section style={{ background: '#fcf9f8', padding: 'var(--py-section) 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }} className="section-pad">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
                        <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 42px)', color: '#1c1b1b', lineHeight: 1.2, maxWidth: '500px' }}>
                            The Principles that<br />Drive Every<br />Connection
                        </h2>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, justifyContent: 'flex-end', paddingTop: '32px' }}>
                            <div style={{ height: '1px', background: '#dcd9d9', width: '100%', maxWidth: '240px' }} />
                            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5a4139', whiteSpace: 'nowrap' }}>Core Values</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="values-grid">
                        {values.map((v) => (
                            <div key={v.label} style={{ background: '#ffffff', border: '1px solid #e2bfb4', padding: '32px 24px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                                <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 600, fontSize: '20px', color: '#1c1b1b', marginBottom: '16px' }}>{v.label}</h3>
                                <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#dcd9d9', letterSpacing: '0.1em' }}>{v.num}</span>
                                    <div style={{ height: '2px', width: '24px', background: v.color }} />
                                </div>
                                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', color: '#5a4139', lineHeight: 1.6 }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
