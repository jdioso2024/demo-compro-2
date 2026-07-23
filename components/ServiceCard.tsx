'use client';
interface ServiceCardProps {
    icon: string;
    category: string;
    title: string;
    description: string;
    tags: string[];
    imageBg?: string;
}

export default function ServiceCard({ icon, category, title, description, tags, imageBg }: ServiceCardProps) {
    return (
        <div
            style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#e2bfb4',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'border-color 0.2s',
                background: '#ffffff',
                borderRadius: '0.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
        >
            {/* Image placeholder area */}
            <div
                style={{
                    height: '180px',
                    background: '#eae7e7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div style={{ color: '#8e7067', fontFamily: 'monospace', fontSize: '14px', fontWeight: 'bold' }}>
                    400 x 250
                </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: '#e2bfb4' }} />

            {/* Content */}
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span
                    style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#a93200',
                    }}
                >
                    {category}
                </span>
                <h3
                    style={{
                        fontFamily: 'Sora, sans-serif',
                        fontWeight: 700,
                        fontSize: '18px',
                        color: '#1c1b1b',
                        lineHeight: 1.3,
                        textTransform: 'uppercase',
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        fontFamily: 'Sora, sans-serif',
                        fontSize: '14px',
                        color: '#5a4139',
                        lineHeight: 1.6,
                        flex: 1,
                    }}
                >
                    {description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            style={{
                                fontFamily: 'JetBrains Mono, monospace',
                                fontSize: '10px',
                                letterSpacing: '0.08em',
                                color: '#8e7067',
                                border: '1px solid #e2bfb4',
                                padding: '3px 8px',
                                borderRadius: '0.25rem',
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
