import {
  UtensilsCrossed, Wrench, Scale, ArrowRight,
} from 'lucide-react'
import { CLIENTS, CLIENTS_SECTION } from '../../constants/content'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

const ICON_MAP = { UtensilsCrossed, Wrench, Scale }

export default function ClientsPreview() {
  return (
    <section style={{ background: 'var(--white)', padding: '96px 0' }}>
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            eyebrow={CLIENTS_SECTION.eyebrow}
            heading={CLIENTS_SECTION.heading}
            subtext={CLIENTS_SECTION.subtext}
          />
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '40px',
        }}>
          {CLIENTS.map((client, i) => {
            const Icon = ICON_MAP[client.iconName] || Scale
            return (
              <ScrollReveal key={client.name} delay={i * 100}>
                <div className="card" style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      width: '48px', height: '48px', flexShrink: 0,
                      background: 'var(--navy-10)',
                      borderRadius: '10px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--navy)',
                    }}>
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '4px' }}>
                        {client.sector}
                      </p>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
                        {client.name}
                      </h3>
                      <p style={{ fontSize: '0.82rem', color: 'var(--dark)', opacity: 0.65, lineHeight: 1.5 }}>
                        {client.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={300}>
          <div style={{ textAlign: 'center' }}>
            <a
              href="/clientes"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--blue)',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'gap 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.gap = '12px'}
              onMouseLeave={e => e.currentTarget.style.gap = '8px'}
            >
              Ver todos los clientes y proyectos
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
