import { ChevronsDown } from 'lucide-react'
import { HERO, COMPANY } from '../../constants/content'

export default function Hero() {
  const scrollToServices = () => {
    const el = document.querySelector('#servicios-preview')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      style={{
        position: 'relative',
        /* 100vh - 68px (altura navbar fija) = exactamente el área visible sin scroll */
        minHeight: 'calc(100vh - 68px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundImage: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay semi-transparente — permite ver la imagen pero garantiza legibilidad del texto */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 20, 45, 0.80)' }} />
      {/* Gradiente adicional centrado en el área del texto para reforzar contraste local */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(10,20,45,0.35) 0%, transparent 100%)' }} />
      {/* Gradiente inferior para el indicador scroll */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 65%, rgba(10,20,45,0.45) 100%)' }} />

      {/* Content */}
      <div
        className="container"
        style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}
      >
        {/* Eyebrow */}
        <div style={{ marginBottom: '28px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(96, 165, 250, 0.18)',
            color: 'var(--accent)',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '7px 18px',
            borderRadius: '9999px',
            border: '1px solid rgba(96, 165, 250, 0.4)',
          }}>
            {HERO.eyebrow}
          </span>
        </div>

        {/* Animated accent line */}
        <div className="hero-line" />

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 6vw, 5rem)',
          fontWeight: 800,
          color: '#FFFFFF',
          lineHeight: 1.1,
          marginBottom: '24px',
          textShadow: '0 2px 32px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.9)',
          letterSpacing: '-0.01em',
        }}>
          {HERO.headline}
        </h1>

        {/* Subheadline — text block with semi-transparent bg for extra contrast */}
        <div style={{
          display: 'inline-block',
          background: 'rgba(0,0,0,0.35)',
          backdropFilter: 'blur(6px)',
          borderRadius: '12px',
          padding: '16px 28px',
          marginBottom: '40px',
          maxWidth: '640px',
        }}>
          <p style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
            color: 'rgba(255,255,255,0.92)',
            lineHeight: 1.7,
            margin: 0,
          }}>
            {HERO.subheadline}
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ fontSize: '1rem', padding: '15px 32px' }}
          >
            {HERO.cta_primary}
          </a>
          <a
            href="/servicios"
            className="btn btn-outline"
            style={{ fontSize: '1rem', padding: '15px 32px' }}
          >
            {HERO.cta_secondary}
          </a>
        </div>
      </div>

      {/* Scroll indicator — siempre visible dentro del viewport */}
      <div
        className="bounce"
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.85)',
          cursor: 'pointer',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
        }}
        onClick={scrollToServices}
        role="button"
        aria-label="Desplázate hacia abajo"
      >
        <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
          scroll
        </span>
        <ChevronsDown size={28} strokeWidth={2} />
      </div>
    </section>
  )
}
