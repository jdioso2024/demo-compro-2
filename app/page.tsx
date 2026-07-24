import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import { ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';

export default function HomePage() {
    return (
        <>
            {/* ═══════════════════════════════════════ 1. HERO SECTION ═══ */}
            <section
                style={{
                    minHeight: '100vh',
                    background: '#0d0603',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    paddingTop: '64px',
                }}
            >
                {/* Video Background */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0,
                    }}
                >
                    <source src="/hero.webm" type="video/webm" />
                </video>

                {/* Dark Overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(10,4,2,0.72) 0%, rgba(20,8,4,0.55) 100%)',
                        zIndex: 1,
                    }}
                />

                {/* DEN Watermark */}
                <div
                    aria-hidden
                    style={{
                        position: 'absolute',
                        right: '-5%',
                        top: '40%',
                        transform: 'translateY(-50%)',
                        fontFamily: 'Sora, sans-serif',
                        fontWeight: 800,
                        fontSize: '55vw',
                        lineHeight: 1,
                        color: '#a93200',
                        opacity: 0.06,
                        pointerEvents: 'none',
                        userSelect: 'none',
                        zIndex: 2,
                    }}
                >
                    DEN
                </div>

                <div
                    className="section-pad-hero"
                    style={{
                        maxWidth: '1280px',
                        margin: '0 auto',
                        padding: '80px 64px 0 64px',
                        position: 'relative',
                        zIndex: 3,
                        width: '100%',
                    }}
                >
                    {/* Overline */}
                    <div
                        style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '10px',
                            fontWeight: 500,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.75)',
                            marginBottom: '24px',
                            border: '1px solid rgba(255,255,255,0.18)',
                            padding: '6px 12px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(255,255,255,0.07)',
                            borderRadius: '0.25rem',
                            backdropFilter: 'blur(4px)',
                        }}
                    >
                        <div style={{ width: '4px', height: '4px', background: '#e84a1a', borderRadius: '50%' }} />
                        CIVIL | INFRASTRUCTURE | ENERGY
                    </div>

                    {/* Headline */}
                    <h1
                        style={{
                            fontFamily: 'Sora, sans-serif',
                            fontWeight: 800,
                            fontSize: 'clamp(48px, 6vw, 72px)',
                            lineHeight: 1.05,
                            letterSpacing: '-0.02em',
                            color: '#ffffff',
                            maxWidth: '900px',
                            marginBottom: '32px',
                            textShadow: '0 2px 24px rgba(0,0,0,0.4)',
                        }}
                    >
                        MENJADI MITRA<br />
                        <span style={{ color: '#e84a1a' }}>
                            TANGGUH
                        </span><br />
                        ANDA DI LAPANGAN
                    </h1>

                    <p
                        style={{
                            fontFamily: 'Sora, sans-serif',
                            fontSize: '18px',
                            color: 'rgba(255,255,255,0.78)',
                            lineHeight: 1.6,
                            maxWidth: '600px',
                            marginBottom: '48px',
                        }}
                    >
                        Solusi eksekusi infrastruktur sipil, pendukung energi (Oil, Gas &amp; Geothermal), dan pengadaan alat berat dengan standar kepatuhan serta presisi tinggi.
                    </p>

                    {/* CTAs */}
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '80px' }}>
                        <Link
                            href="/services"
                            style={{
                                background: '#a93200',
                                color: '#ffffff',
                                fontFamily: 'Sora, sans-serif',
                                fontWeight: 700,
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                padding: '16px 32px',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                borderRadius: '0.25rem',
                            }}
                        >
                            EKSPLORASI LAYANAN KAMI <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/projects"
                            style={{
                                border: '1px solid rgba(255,255,255,0.4)',
                                color: '#ffffff',
                                background: 'rgba(255,255,255,0.07)',
                                fontFamily: 'Sora, sans-serif',
                                fontWeight: 700,
                                fontSize: '13px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                padding: '16px 32px',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                backdropFilter: 'blur(4px)',
                                borderRadius: '0.25rem',
                            }}
                        >
                            LIHAT PROYEK KAMI
                        </Link>
                    </div>

                    {/* ═══════════════════════════════════════ 2. STATS STRIP ═══ */}
                    <div style={{
                        borderTop: '1px solid rgba(255,255,255,0.15)',
                        paddingTop: '40px',
                        paddingBottom: '40px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '24px'
                    }}>
                        {/* Stat 1 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderLeft: '2px solid #a93200', paddingLeft: '16px', paddingRight: '32px', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <ShieldCheck color="#e84a1a" size={28} />
                            <div>
                                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '18px', color: '#ffffff', lineHeight: 1.2 }}>ZERO<br />ACCIDENT</div>
                                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>Safety &amp; Health<br />Compliance</div>
                            </div>
                        </div>
                        {/* Stat 2 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderLeft: '2px solid #a93200', paddingLeft: '16px', paddingRight: '32px', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
                            <Clock color="#e84a1a" size={28} />
                            <div>
                                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '18px', color: '#ffffff', lineHeight: 1.2 }}>100% ON-<br />TIME</div>
                                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>Quality &amp; Schedule<br />Guarantees</div>
                            </div>
                        </div>
                        {/* Stat 3 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderLeft: '2px solid #a93200', paddingLeft: '16px' }}>
                            <Award color="#e84a1a" size={28} />
                            <div>
                                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '18px', color: '#ffffff', lineHeight: 1.2 }}>CSMS<br />CERTIFIED</div>
                                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>High level compliance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════ 3. SERVICES SECTION ═══ */}
            <section style={{ background: '#f6f3f2', padding: '120px 0' }}>
                <div className="section-pad" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }}>

                    <div style={{ marginBottom: '64px' }}>
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', color: '#a93200', textTransform: 'uppercase' }}>
                            OUR EXPERTISE
                        </span>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '16px' }}>
                            <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 48px)', color: '#1c1b1b', lineHeight: 1.2, maxWidth: '600px' }}>
                                LAYANAN ENGINEERING &amp;<br />KONSTRUKSI<br />TERINTEGRASI
                            </h2>
                            <div style={{ height: '3px', width: '100px', background: '#a93200', marginBottom: '16px' }} />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="grid-3col">
                        <ServiceCard
                            icon=""
                            category="EARTHWORKS &amp; CIVIL"
                            title="GENERAL CONSTRUCTION &amp; CIVIL WORKS"
                            description="Pengerjaan infrastruktur jalan, drainase industri, pematangan lahan (earthworks), dan renovasi struktur komersial berskala besar."
                            tags={['ROADS', 'BRIDGES', 'EARTHWORKS']}
                        />
                        <ServiceCard
                            icon=""
                            category="MECHANICAL &amp; PIPING"
                            title="ENERGY SUPPORT &amp; SPECIALIST WORKS"
                            description="Dukungan teknis untuk sektor migas dan geothermal termasuk instalasi mekanikal &amp; piping, pengecatan statis/tinggi, dan pemeliharaan sumur."
                            tags={['PIPING', 'GEOTHERMAL', 'MECHANICAL']}
                        />
                        <ServiceCard
                            icon=""
                            category="SUPPLY CHAIN"
                            title="PROCUREMENT &amp; MANPOWER"
                            description="Penyediaan alat berat performa tinggi, material konstruksi tersertifikasi, dan tenaga ahli lapangan dengan sertifikasi kompetensi nasional."
                            tags={['HEAVY EQUIPMENT', 'CERTIFIED MANPOWER', 'SUPPLY']}
                        />
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════ 4. PROJECTS SECTION ═══ */}
            <section style={{ background: '#eae7e7', padding: '120px 0' }}>
                <div className="section-pad" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
                        <div>
                            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', color: '#a93200', textTransform: 'uppercase' }}>
                                FEATURED PROJECTS
                            </span>
                            <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 48px)', color: '#1c1b1b', lineHeight: 1.2, marginTop: '16px' }}>
                                REKAM JEJAK EKSEKUSI<br />PRESISI
                            </h2>
                        </div>
                        <Link
                            href="/projects"
                            style={{
                                color: '#1c1b1b',
                                fontFamily: 'Sora, sans-serif',
                                fontWeight: 700,
                                fontSize: '12px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                paddingBottom: '8px',
                                borderBottom: '1px solid #a93200',
                            }}
                        >
                            LIHAT SEMUA PROYEK <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="grid-3col">
                        <ProjectCard
                            size="large"
                            category="EPCC &amp; M"
                            title="Mechanical &amp; Piping Pipelines (Cluster TLG-3 &amp; KRH-6)"
                            description=""
                            location="ENERGY INFRASTRUCTURE"
                            contractValue="-"
                        />
                        <ProjectCard
                            size="large"
                            category="CIVIL"
                            title="Road Improvement 25 km (Jayanegara-Parungkuda)"
                            description=""
                            location="CIVIL WORKS"
                            contractValue="-"
                        />
                        <ProjectCard
                            size="large"
                            category="CIVIL"
                            title="Drilling Location Preparation (Salak 7 Development)"
                            description=""
                            location="HEAVY CIVIL WORKS"
                            contractValue="-"
                        />
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════ 5. HSE SECTION ═══ */}
            <section style={{ background: '#fcf9f8', padding: '120px 0', borderTop: '1px solid #e2bfb4' }}>
                <div className="section-pad" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                        <div>
                            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', color: '#a93200', textTransform: 'uppercase' }}>
                                HSE &amp; COMPLIANCE
                            </span>
                            <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 42px)', color: '#1c1b1b', lineHeight: 1.2, marginTop: '16px', marginBottom: '24px' }}>
                                KESELAMATAN<br />ADALAH <span style={{ color: '#a93200' }}>PRIORITAS MUTLAK</span>
                            </h2>
                            <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', color: '#5a4139', lineHeight: 1.6, marginBottom: '48px', maxWidth: '500px' }}>
                                Perlindungan mutlak terhadap personel dan aset mitra kerja melalui kepatuhan tanpa kompromi pada K3L (Kesehatan, Keselamatan Kerja &amp; Lingkungan). Kami menerapkan standar internasional dalam setiap langkah operasional lapangan.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', maxWidth: '400px' }}>
                                <div style={{ border: '1px solid #e2bfb4', background: '#f6f3f2', padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px', borderRadius: '0.25rem' }}>
                                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#a93200', letterSpacing: '0.1em' }}>QUALITY</span>
                                    <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', color: '#1c1b1b' }}>ISO 9001:2015</span>
                                </div>
                                <div style={{ border: '1px solid #e2bfb4', background: '#f6f3f2', padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px', borderRadius: '0.25rem' }}>
                                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#a93200', letterSpacing: '0.1em' }}>SAFETY</span>
                                    <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', color: '#1c1b1b' }}>ISO 45001</span>
                                </div>
                                <div style={{ border: '1px solid #e2bfb4', background: '#f6f3f2', padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px', borderRadius: '0.25rem' }}>
                                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#a93200', letterSpacing: '0.1em' }}>ENVIRONMENT</span>
                                    <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', color: '#1c1b1b' }}>ISO 14001</span>
                                </div>
                            </div>
                        </div>

                        {/* HSE Image */}
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-16px', right: '-16px', bottom: '16px', left: '16px', border: '1px solid #e2bfb4', zIndex: 0 }} />
                            <div
                                style={{
                                    background: '#eae7e7',
                                    height: '400px',
                                    width: '100%',
                                    position: 'relative',
                                    zIndex: 1,
                                    border: '1px solid #dcd9d9',
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src="/construction(600x400).webp"
                                    alt="HSE Compliance"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}
