'use client';
import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import MetricBadge from '@/components/MetricBadge';
import { ArrowRight } from 'lucide-react';

const allProjects = [
    {
        id: 1,
        category: 'MECHANICAL & PIPING',
        filter: 'mechanical',
        title: 'Main Pipeline Interconnectivity Project',
        description: 'High-integrity installation of 24-inch diameter natural gas pipelines, including pressure testing, cathodic protection, and free commissioning for regional energy hub connectivity.',
        location: 'Kalimantan, East',
        contractValue: 'Rp 12.400.000.000',
        size: 'large' as const,
    },
    {
        id: 2,
        category: 'CIVIL ENGINEERING',
        filter: 'civil',
        title: 'Drilling Location Prep (LPT)',
        description: 'Land clearing, cut-fill grading, and haul road construction for remote wellpad access. On-site platform prep finalized for remote field operations.',
        location: 'Barat, Paser, Kira',
        contractValue: 'Rp 3.800.000.000',
        size: 'large' as const,
    },
    {
        id: 3,
        category: 'INFRASTRUCTURE',
        filter: 'infrastructure',
        title: 'Industrial Access Road Improvements',
        description: 'Reinforcement and surfacing of 12km logistical route to support heavy machinery transport for new energy plant construction.',
        location: 'Kutai, East Kalimantan',
        contractValue: 'Rp 7.900.000.000',
        size: 'large' as const,
    },
    {
        id: 4,
        category: 'HEAVY CIVIL',
        filter: 'civil',
        title: 'River Crossing Structural Support',
        description: 'Reinforced concrete foundation and steel structure for full-use industrial river crossing.',
        location: 'Samarinda, East Kalimantan',
        contractValue: 'Rp 5.200.000.000',
        size: 'large' as const,
    },
];

const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'mechanical', label: 'Mechanical & Piping' },
    { key: 'civil', label: 'Civil Works' },
    { key: 'infrastructure', label: 'Infrastructure' },
];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filtered = activeFilter === 'all' ? allProjects : allProjects.filter((p) => p.filter === activeFilter);

    return (
        <>
            {/* ═══════════════════════════ HERO ═══ */}
            <section style={{ minHeight: '70vh', background: '#0d0603', display: 'flex', alignItems: 'center', paddingTop: '64px', position: 'relative', overflow: 'hidden' }}>
                {/* Video Background */}
                <video autoPlay muted loop playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
                    <source src="/hero.webm" type="video/webm" />
                </video>
                {/* Dark Overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,4,2,0.72) 0%, rgba(20,8,4,0.55) 100%)', zIndex: 1 }} />

                <div aria-hidden style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '60vw', lineHeight: 1, color: '#a93200', opacity: 0.06, pointerEvents: 'none', userSelect: 'none', zIndex: 2 }}>D</div>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 64px', position: 'relative', zIndex: 3 }} className="section-pad">
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#e84a1a', marginBottom: '24px' }}>— Portfolio Projects</p>
                    <h1 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 7vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#ffffff', maxWidth: '800px', marginBottom: '24px', textShadow: '0 2px 24px rgba(0,0,0,0.4)' }}>
                        Engineering the{' '}
                        <span style={{ color: '#e84a1a' }}>Energy Landscape.</span>
                    </h1>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '18px', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, maxWidth: '560px' }}>
                        Our portfolio spans complex industrial infrastructure across Indonesia, from high-pressure piping systems to strategic drilling logistics and civil ground works.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════ PROJECTS GRID ═══ */}
            <section style={{ background: '#f6f3f2', padding: '80px 0 120px' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }} className="section-pad">
                    {/* Filter tabs + sort */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
                        <div style={{ display: 'flex', gap: '2px', flexWrap: 'wrap' }}>
                            {filters.map((f) => (
                                <button
                                    key={f.key}
                                    onClick={() => setActiveFilter(f.key)}
                                    style={{
                                        background: activeFilter === f.key ? '#a93200' : 'transparent',
                                        border: '1px solid',
                                        borderColor: activeFilter === f.key ? 'transparent' : '#e2bfb4',
                                        color: activeFilter === f.key ? '#ffffff' : '#5a4139',
                                        fontFamily: 'JetBrains Mono, monospace',
                                        fontSize: '11px',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        padding: '10px 18px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        borderRadius: '0.25rem',
                                    }}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#8e7067', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            ⇅ Sort by Newest
                        </div>
                    </div>

                    {/* Projects — mixed size grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#e2bfb4' }} className="projects-grid">
                        {filtered.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', color: '#8e7067', textAlign: 'center', padding: '64px 0' }}>
                            No projects found for this category.
                        </p>
                    )}
                </div>
                <style jsx>{`
          @media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr !important; } .section-pad { padding: 0 16px !important; } }
        `}</style>
            </section>

            {/* ═══════════════════════════ METRICS STRIP ═══ */}
            <section style={{ background: '#eae7e7', padding: '80px 0', borderTop: '1px solid #e2bfb4' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', borderBottom: '1px solid #e2bfb4', paddingBottom: '80px' }} className="metrics-grid">
                    <MetricBadge value="150+" label="Projects Completed" sublabel="Nationwide" />
                    <MetricBadge value="10M" label="Sqm Work Area" sublabel="Across sites" />
                    <MetricBadge value="32" label="Heavy Units" sublabel="Equipment fleet" />
                    <MetricBadge value="ISO" label="Certified Quality" sublabel="3 Standards" />
                </div>
                <style jsx>{`
          @media (max-width: 768px) { .metrics-grid { grid-template-columns: 1fr 1fr !important; padding: 0 16px 40px !important; } }
        `}</style>
            </section>

            {/* ═══════════════════════════ RECENT ACHIEVEMENTS ═══ */}
            <section style={{ background: '#f6f3f2', padding: '80px 0' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 64px' }} className="section-pad">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: '24px', textTransform: 'uppercase', color: '#1c1b1b' }}>Recent Achievements</h2>
                        <a href="#" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a93200', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            View Full Gallery <ArrowRight size={12} />
                        </a>
                    </div>
                    <p style={{ fontFamily: 'Sora, sans-serif', fontSize: '14px', color: '#8e7067', marginBottom: '32px' }}>On-site progress from our current operations across the archipelago.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#e2bfb4' }} className="gallery-grid">
                        {[
                            { label: 'Industrial Access Site — Kutai' },
                            { label: 'Land Clearing Operations — Paser' },
                        ].map((item) => (
                            <div key={item.label} style={{ height: '280px', background: '#eae7e7', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                                <img src="/construction(640x280).webp" alt={item.label} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
                                <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(28,27,27,0.75)', padding: '6px 12px', borderRadius: '0.25rem', zIndex: 1 }}>
                                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#e2bfb4', letterSpacing: '0.06em' }}>{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <style jsx>{`
          @media (max-width: 768px) { .gallery-grid { grid-template-columns: 1fr !important; } .section-pad { padding: 0 16px !important; } }
        `}</style>
            </section>
        </>
    );
}
