'use client';
interface ProjectCardProps {
    category: string;
    title: string;
    description: string;
    location: string;
    contractValue: string;
    imageBg?: string;
    size?: 'large' | 'normal';
}

export default function ProjectCard({
    category,
    title,
    description,
    location,
    contractValue,
    imageBg,
    size = 'normal',
}: ProjectCardProps) {
    return (
        <div
            className="project-card"
            style={{
                position: 'relative',
                height: size === 'large' ? '400px' : '320px',
                overflow: 'hidden',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#e2bfb4',
                cursor: 'pointer',
            }}
        >
            {/* Background image */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: '#eae7e7',
                }}
            >
                <img
                    src={imageBg || "/construction(400x500).webp"}
                    alt={title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            {/* Overlay — darker at bottom for legibility */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(28,27,27,0.92) 0%, rgba(28,27,27,0.4) 55%, transparent 100%)',
                }}
            />

            {/* Contract value badge — top right */}
            <div
                style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'rgba(252,249,248,0.9)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid #e2bfb4',
                    padding: '6px 10px',
                    borderRadius: '0.25rem',
                }}
            >
                <span
                    style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.06em',
                        color: '#a93200',
                    }}
                >
                    Val. {contractValue}
                </span>
            </div>

            {/* Bottom content */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '24px',
                }}
            >
                <span
                    style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#e2bfb4',
                        display: 'block',
                        marginBottom: '6px',
                    }}
                >
                    {category}
                </span>
                <h3
                    style={{
                        fontFamily: 'Sora, sans-serif',
                        fontWeight: 700,
                        fontSize: size === 'large' ? '22px' : '18px',
                        color: '#ffffff',
                        lineHeight: 1.3,
                        marginBottom: '8px',
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        fontFamily: 'Sora, sans-serif',
                        fontSize: '13px',
                        color: '#dcd9d9',
                        lineHeight: 1.5,
                        marginBottom: '12px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    } as React.CSSProperties}
                >
                    {description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '12px' }}>📍</span>
                    <span
                        style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '11px',
                            color: '#e2bfb4',
                            letterSpacing: '0.04em',
                        }}
                    >
                        {location}
                    </span>
                </div>
            </div>
        </div>
    );
}
