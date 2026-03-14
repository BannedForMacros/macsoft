import { ChevronRight } from 'lucide-react'

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--navy) 0%, #1a3a7a 100%)',
      padding: '80px 0 72px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative circle */}
      <div style={{
        position: 'absolute',
        top: '-80px', right: '-80px',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'rgba(96,165,250,0.06)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-40px', left: '-60px',
        width: '260px', height: '260px',
        borderRadius: '50%',
        background: 'rgba(96,165,250,0.04)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >Inicio</a>
          <ChevronRight size={13} strokeWidth={2} />
          <span style={{ color: 'var(--accent)' }}>{title}</span>
        </div>

        {eyebrow && (
          <span style={{
            display: 'inline-block',
            background: 'rgba(96,165,250,0.15)',
            color: 'var(--accent)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '5px 14px',
            borderRadius: '9999px',
            border: '1px solid rgba(96,165,250,0.3)',
            marginBottom: '16px',
          }}>
            {eyebrow}
          </span>
        )}

        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: 800,
          color: 'var(--white)',
          lineHeight: 1.15,
          marginBottom: subtitle ? '16px' : 0,
          textShadow: '0 2px 16px rgba(0,0,0,0.3)',
        }}>
          {title}
        </h1>

        {subtitle && (
          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'rgba(255,255,255,0.72)',
            maxWidth: '560px',
            lineHeight: 1.65,
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
