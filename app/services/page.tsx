import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services — PT Dayana Energi Nusantara',
    description: 'Comprehensive industrial services: General Construction & Civil Works, Energy Support & Infrastructure, Procurement & Manpower.',
};

const civilServices = [
    {
        icon: '🛣️',
        title: 'Roads & Highways',
        items: ['Asphalt Paving', 'Road Improvement', 'Highway Maintenance'],
    },
    {
        icon: '🌊',
        title: 'Drainage & Irrigation',
        items: ['Culvert Installation', 'Canal Logistics', 'Reinforced Culverts'],
    },
    {
        icon: '⛰️',
        title: 'Earthworks & Land',
        items: ['Site Preparation', 'Pipeline Clearance', 'Soil Stabilization'],
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* ═══════════════════════════ HERO ═══ */}
            <section style={{ minHeight: '70vh', background: '#fcf9f8', display: 'flex', alignItems: 'center', paddingTop: '64px', position: 'relative', overflow: 'hidden', backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23a93200\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
                <div aria-hidden style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '60vw', lineHeight: 1, color: '#a93200', opacity: 0.04, pointerEvents: 'none', userSelect: 'none' }}>D</div>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#a93200' }} />
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 64px', position: 'relative', zIndex: 1 }} className="section-pad">
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a93200', marginBottom: '24px' }}>— Services & Capabilities</p>
                    <h1 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 7vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#1c1b1b', maxWidth: '800px', marginBottom: '24px' }}>
                        Engineering{' '}
                        <span style={{ color: '#a93200' }}>Industrial</span>
                        <br />Excellence.
                    </h1>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '18px', color: '#5a4139', lineHeight: 1.6, maxWidth: '540px' }}>
                        PT Dayana Energi Nusantara provides comprehensive service solutions for civil engineering, energy infrastructure, and strategic manpower. We combine high-precision technical skills with high reliability to complete large-scale projects.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════ SECTION 1 — CIVIL WORKS ═══ */}
            <section style={{ background: '#f6f3f2', padding: '120px 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#8e7067', border: '1px solid #e2bfb4', padding: '4px 10px', borderRadius: '0.25rem' }}>01</div>
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a4139' }}>Civil Sector</span>
                    </div>
                    <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)', textTransform: 'uppercase', color: '#1c1b1b', lineHeight: 1.2, marginBottom: '16px' }}>
                        General Construction<br />&amp; Civil Works
                    </h2>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', color: '#5a4139', lineHeight: 1.6, maxWidth: '540px', marginBottom: '64px' }}>
                        Building the foundation and infrastructure that powers growth. Our highly specialized teams deliver technical support for civil construction from civil foundation to infrastructure challenges systems.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#e2bfb4' }}>
                        {civilServices.map((s) => (
                            <div key={s.title} style={{ background: '#fcf9f8', padding: '0' }}>
                                {/* image placeholder */}
                                <div style={{ height: '180px', background: '#eae7e7', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                    <div style={{ color: '#8e7067', fontFamily: 'monospace', fontSize: '14px', fontWeight: 'bold' }}>400 x 180</div>
                                </div>
                                <div style={{ padding: '24px', borderTop: '1px solid #e2bfb4' }}>
                                    <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '16px', color: '#1c1b1b', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        {s.title}
                                        <ArrowRight size={14} color="#a93200" />
                                    </h3>
                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {s.items.map((item) => (
                                            <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#5a4139' }}>
                                                <ChevronRight size={12} color="#a93200" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════ SECTION 2 — ENERGY SUPPORT ═══ */}
            <section style={{ background: '#fcf9f8', padding: '120px 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#8e7067', border: '1px solid #e2bfb4', padding: '4px 10px', borderRadius: '0.25rem' }}>02</div>
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a4139' }}>Energy Sector</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '80px', alignItems: 'start' }}>
                        <div>
                            <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 40px)', textTransform: 'uppercase', color: '#1c1b1b', lineHeight: 1.2, marginBottom: '16px' }}>
                                Energy Support &amp;<br />Infrastructure
                            </h2>
                            <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', color: '#5a4139', lineHeight: 1.6, marginBottom: '40px' }}>
                                Supporting the pulse of the nation's power. We provide specialized engineers to piping systems, and technical teams to meet for geothermal and conventional energy plants.
                            </p>

                            {[
                                { title: 'Mechanical & Piping', desc: 'High-pressure pipelines installation and mechanical assembly with ISO-quality processes.' },
                                { title: 'Geothermal Maintenance', desc: 'Specialized support for assets, high-operation and long-time maintenance.' },
                            ].map((s) => (
                                <div key={s.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '24px' }}>
                                    <div style={{ width: '3px', background: '#a93200', alignSelf: 'stretch', flexShrink: 0 }} />
                                    <div>
                                        <h4 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '15px', color: '#1c1b1b', textTransform: 'uppercase', marginBottom: '6px' }}>{s.title}</h4>
                                        <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '13px', color: '#5a4139', lineHeight: 1.6 }}>{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Feature image */}
                        <div style={{ height: '400px', background: '#eae7e7', border: '1px solid #dcd9d9', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.25rem' }}>
                            <div style={{ color: '#8e7067', fontFamily: 'monospace', fontSize: '16px', fontWeight: 'bold' }}>500 x 400</div>
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: '#a93200', padding: '16px 24px', borderRadius: '0 0 0.25rem 0.25rem' }}>
                                <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '14px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CRITICAL PRESSURE SYSTEMS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════ SECTION 3 — PROCUREMENT ═══ */}
            <section style={{ background: '#f6f3f2', padding: '120px 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#8e7067', border: '1px solid #e2bfb4', padding: '4px 10px', borderRadius: '0.25rem' }}>03</div>
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a4139' }}>Resource Management</span>
                    </div>
                    <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)', textTransform: 'uppercase', color: '#1c1b1b', lineHeight: 1.2, marginBottom: '16px', textAlign: 'center' }}>
                        Procurement &amp; Manpower
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '24px', marginTop: '48px' }}>
                        {/* Heavy equipment card */}
                        <div style={{ height: '280px', background: '#eae7e7', border: '1px solid #dcd9d9', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.25rem' }}>
                            <div style={{ color: '#8e7067', fontFamily: 'monospace', fontSize: '16px', fontWeight: 'bold' }}>500 x 280</div>
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '20px 24px', background: 'rgba(28,27,27,0.75)', borderRadius: '0 0 0.25rem 0.25rem' }}>
                                <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '16px', color: '#ffffff', textTransform: 'uppercase', marginBottom: '8px' }}>Heavy Equipment Fleet</p>
                                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '13px', color: '#e2bfb4' }}>Comprehensive fleet of state-of-the-art heavy equipment. Encompassing more than 12 specialized units.</p>
                                <button style={{ background: 'none', border: '1px solid #a93200', color: '#a93200', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '8px 16px', marginTop: '12px', cursor: 'pointer', borderRadius: '0.25rem' }}>
                                    VIEW FLEET →
                                </button>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {/* Certified experts */}
                            <div style={{ flex: 1, border: '1px solid #e2bfb4', background: '#ffffff', padding: '24px', position: 'relative', borderRadius: '0.25rem' }}>
                                <div style={{ position: 'absolute', top: '16px', right: '16px', background: '#a93200', padding: '4px 10px', borderRadius: '0.25rem' }}>
                                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>3+</span>
                                </div>
                                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a93200', marginBottom: '12px' }}>Certified Experts</p>
                                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '13px', color: '#5a4139', lineHeight: 1.6 }}>Deployment of certified engineers, safety officers, and technical specialists for long-term contracts.</p>
                            </div>

                            {/* Project outsourcing */}
                            <div style={{ flex: 1, background: '#a93200', padding: '24px', borderRadius: '0.25rem' }}>
                                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>Project Outsourcing</p>
                                <p style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '18px', color: '#ffffff', textTransform: 'uppercase', marginBottom: '8px' }}>Project Outsourcing</p>
                                <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>End-to-end project management, in-time delivery, and engineering groups ready for project mobilization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════ CTA BANNER ═══ */}
            <section style={{ background: '#eae7e7', padding: '80px 0', borderTop: '1px solid #e2bfb4' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
                    <div>
                        <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 40px)', textTransform: 'uppercase', color: '#1c1b1b', lineHeight: 1.2, marginBottom: '12px' }}>
                            Partner With the<br />Industry Leaders
                        </h2>
                        <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', color: '#5a4139', lineHeight: 1.6, maxWidth: '480px' }}>
                            Ready to bring your vision in industrial oil or energy challenges up? Our technical consultants are standing by to provide detailed proposals.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <Link href="/contact" style={{ background: '#a93200', color: '#ffffff', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 32px', textDecoration: 'none', borderRadius: '0.25rem' }}>
                            START CONSULTATION →
                        </Link>
                        <Link href="/projects" style={{ border: '1px solid #8e7067', color: '#1c1b1b', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 32px', textDecoration: 'none', borderRadius: '0.25rem' }}>
                            VIEW PROJECTS
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
