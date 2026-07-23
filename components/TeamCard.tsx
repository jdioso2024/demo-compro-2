'use client';
import React from 'react';

interface TeamCardProps {
    name: string;
    title: string;
    subTitle: string;
    imageBg?: string;
}

export default function TeamCard({ name, title, subTitle, imageBg }: TeamCardProps) {
    return (
        <div
            style={{
                border: '1px solid #e2bfb4',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'border-color 0.2s',
                borderRadius: '0.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#a93200')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e2bfb4')}
        >
            <div
                style={{
                    height: '260px',
                    background: imageBg || '#eae7e7',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '24px',
                    position: 'relative'
                }}
            >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,27,27,0.7), transparent)' }} />
            </div>

            <div style={{ padding: '24px', borderTop: '1px solid #e2bfb4', background: '#fcf9f8' }}>
                <span
                    style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#a93200',
                        display: 'block',
                        marginBottom: '6px'
                    }}
                >
                    {title}
                </span>
                <h3
                    style={{
                        fontFamily: 'Sora, sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        color: '#1c1b1b',
                        marginBottom: '8px'
                    }}
                >
                    {name}
                </h3>
                <p style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '12px',
                    color: '#5a4139',
                }}>
                    {subTitle}
                </p>
            </div>
        </div>
    );
}
