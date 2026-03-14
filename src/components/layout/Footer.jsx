import { Phone, Mail, MapPin } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '../../constants/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: 'var(--navy)', color: 'var(--white)', paddingTop: '64px', paddingBottom: '0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', paddingBottom: '48px' }}>
          {/* Brand */}
          <div>
            <img src="/macsoft-isotipo-white.svg" alt="MacSoft" height="40" style={{ height: '40px', width: 'auto', marginBottom: '16px' }} />
            <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '8px' }}>{COMPANY.legalName}</p>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
              Software 100% personalizado para cualquier sector, construido desde Chiclayo, Perú.
            </p>
          </div>

          {/* Quick nav */}
          <div>
            <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
              Navegación
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="footer-link">{link.label}</a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
              Contacto
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              >
                <Phone size={16} color="var(--accent)" strokeWidth={2} />
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
              >
                <Mail size={16} color="var(--accent)" strokeWidth={2} />
                {COMPANY.email}
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                <MapPin size={16} color="var(--accent)" strokeWidth={2} />
                {COMPANY.location}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '20px 0', display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>
            &copy; {year} {COMPANY.legalName} — Todos los derechos reservados
          </p>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>
            Chiclayo, Perú
          </p>
        </div>
      </div>
    </footer>
  )
}
