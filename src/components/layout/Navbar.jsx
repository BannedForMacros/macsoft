import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '../../constants/content'

export default function Navbar({ activePath = '/' }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}
      >
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/macsoft-logotipo-white.svg" alt="MacSoft" height="36" style={{ height: '73px', width: 'auto' }} />
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="desktop-nav">
          {NAV_LINKS.map((link) => {
            const isActive = activePath === link.href
            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'var(--accent)',
                    color: 'var(--navy)',
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#93c5fd'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  {link.label}
                </a>
              )
            }
            return (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{ position: 'relative', ...(isActive ? { color: 'var(--white)' } : {}) }}
              >
                {link.label}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-2px', left: 0,
                    width: '100%', height: '2px',
                    background: 'var(--accent)',
                    borderRadius: '9999px',
                  }} />
                )}
              </a>
            )
          })}
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              background: 'transparent',
              color: 'rgba(255,255,255,0.7)',
              padding: '8px 0',
              fontWeight: 500,
              fontSize: '0.88rem',
              transition: 'color 0.2s',
              borderLeft: '1px solid rgba(255,255,255,0.15)',
              paddingLeft: '20px',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
          >
            <Phone size={14} strokeWidth={2} />
            {COMPANY.phoneDisplay}
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-burger"
          aria-label="Menú"
          style={{ color: 'var(--white)', padding: '6px' }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
        <div style={{ padding: '16px 24px' }}>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', paddingTop: '8px',
            }}
          >
            <Phone size={14} strokeWidth={2} />
            {COMPANY.phoneDisplay}
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 769px) { .mobile-burger { display: none; } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  )
}
