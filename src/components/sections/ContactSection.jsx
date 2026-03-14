import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import { COMPANY } from '../../constants/content'
import ScrollReveal from '../ui/ScrollReveal'

const INFO_ITEMS = [
  {
    icon: Phone,
    label: 'WhatsApp / Teléfono',
    value: COMPANY.phone,
    href: COMPANY.whatsapp,
  },
  {
    icon: Mail,
    label: 'Correo electrónico',
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: COMPANY.location,
    href: null,
  },
  {
    icon: Clock,
    label: 'Horario de atención',
    value: 'Lunes a Sábado, 9:00 – 18:00',
    href: null,
  },
]

export default function ContactSection() {
  return (
    <section className="section-pad" style={{ background: 'var(--light)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px',
          alignItems: 'start',
        }}>
          {/* Left — info */}
          <ScrollReveal>
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '8px' }}>
                Ponte en contacto
              </h2>
              <p style={{ color: 'var(--dark)', opacity: 0.7, marginBottom: '36px', lineHeight: 1.7 }}>
                Cuéntanos tu idea o problema. Nos comprometemos a responderte el mismo día.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {INFO_ITEMS.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '44px', height: '44px', flexShrink: 0,
                      background: 'rgba(96,165,250,0.1)',
                      borderRadius: '10px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--accent)',
                    }}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '2px' }}>
                        {label}
                      </p>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                          style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.95rem', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.color = 'var(--blue)'}
                          onMouseLeave={e => e.currentTarget.style.color = 'var(--navy)'}
                        >
                          {value}
                        </a>
                      ) : (
                        <p style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.95rem' }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — CTA card */}
          <ScrollReveal delay={120}>
            <div className="card" style={{ padding: '40px', textAlign: 'center' }}>
              <div style={{
                width: '64px', height: '64px',
                background: 'rgba(96,165,250,0.1)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)',
                margin: '0 auto 24px',
              }}>
                <MessageCircle size={30} strokeWidth={1.6} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '12px' }}>
                La forma más rápida
              </h3>
              <p style={{ color: 'var(--dark)', opacity: 0.7, marginBottom: '28px', lineHeight: 1.65, fontSize: '0.92rem' }}>
                Escríbenos directamente por WhatsApp. Te respondemos en minutos y agendamos una llamada si lo necesitas.
              </p>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '15px' }}
              >
                <MessageCircle size={18} strokeWidth={2} />
                Escríbenos por WhatsApp
              </a>
              <p style={{ marginTop: '16px', fontSize: '0.82rem', color: 'var(--dark)', opacity: 0.5 }}>
                Primera consulta 100% gratis
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
