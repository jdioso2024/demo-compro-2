'use client';
interface ComplianceBadgeProps {
    code: string;
    label: string;
}

export default function ComplianceBadge({ code, label }: ComplianceBadgeProps) {
    return (
        <div
            style={{
                border: '1px solid #e2bfb4',
                padding: '12px 16px',
                display: 'inline-flex',
                flexDirection: 'column',
                gap: '4px',
                background: '#ffffff',
                borderRadius: '0.25rem',
            }}
        >
            <span
                style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#8e7067',
                }}
            >
                ISO CERTIFIED
            </span>
            <span
                style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#1c1b1b',
                    letterSpacing: '0.04em',
                }}
            >
                {code}
            </span>
            <span
                style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: '11px',
                    color: '#5a4139',
                }}
            >
                {label}
            </span>
        </div>
    );
}
