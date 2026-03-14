import { UtensilsCrossed, Wrench, Scale, MessageCircle, ShieldCheck } from 'lucide-react'
import { CLIENTS, COMPANY } from '../../constants/content'
import ScrollReveal from '../ui/ScrollReveal'
import SectionTitle from '../ui/SectionTitle'

const ICON_MAP = { UtensilsCrossed, Wrench, Scale }

export default function ClientesPage() {
  return (
    <>
      {/* ── Section 1: Intro ── */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: '680px' }}>
              <span className="section-eyebrow">Proyectos reales</span>
              <h2 className="section-heading" style={{ textAlign: 'left' }}>
                Empresas que transformaron sus procesos
              </h2>
              <div className="section-underline section-underline-left" style={{ marginBottom: '28px' }} />
              <p style={{ fontSize: '1.05rem', color: 'var(--dark)', opacity: 0.8, lineHeight: 1.75 }}>
                MacSoft trabaja con empresas reales en Perú. Cada proyecto es diferente porque cada negocio es diferente. Lo que tienen en común: todos empezaron con un problema concreto que necesitaba una solución construida específicamente para ellos.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 2: Client cards ── */}
      <section style={{ background: 'var(--light)', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Nuestros clientes"
              heading="Quiénes confían en MacSoft"
            />
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {CLIENTS.map((client, i) => {
              const Icon = ICON_MAP[client.iconName] || Scale
              return (
                <ScrollReveal key={client.name} delay={i * 100}>
                  <div style={{
                    background: 'var(--white)',
                    border: '1px solid var(--mid)',
                    borderLeft: '4px solid var(--accent)',
                    borderRadius: 'var(--radius)',
                    padding: '40px',
                    boxShadow: 'var(--shadow-card)',
                    display: 'grid',
                    gridTemplateColumns: '72px 1fr',
                    gap: '28px',
                    alignItems: 'start',
                  }}>
                    {/* Icon */}
                    <div style={{
                      width: '72px', height: '72px',
                      background: 'var(--navy-10)',
                      borderRadius: '14px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--navy)',
                    }}>
                      <Icon size={30} strokeWidth={1.6} />
                    </div>

                    {/* Content */}
                    <div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy)' }}>{client.name}</h3>
                        <span style={{
                          display: 'inline-block',
                          background: 'rgba(96,165,250,0.12)',
                          color: 'var(--blue)',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          padding: '3px 10px',
                          borderRadius: '9999px',
                        }}>
                          {client.sector}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '12px' }}>
                        {client.solution}
                      </p>
                      <p style={{ fontSize: '0.93rem', color: 'var(--dark)', opacity: 0.75, lineHeight: 1.7 }}>
                        {client.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Section 3: Disclaimer ── */}
      <section style={{ background: 'var(--white)', padding: '48px 0 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '24px', background: 'var(--light)', borderRadius: 'var(--radius)', border: '1px solid var(--mid)' }}>
              <ShieldCheck size={20} color="var(--accent)" strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '0.88rem', color: 'var(--dark)', opacity: 0.65, fontStyle: 'italic', lineHeight: 1.6 }}>
                MacSoft mantiene la confidencialidad de cada proyecto. Los clientes listados aquí han autorizado expresamente su mención.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 4: CTA ── */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '16px' }}>
                ¿Tu empresa podría ser el próximo?
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--dark)', opacity: 0.7, marginBottom: '32px', lineHeight: 1.7 }}>
                Cuéntanos tu proyecto. La primera consulta es completamente gratis y sin compromiso.
              </p>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '1rem', padding: '15px 36px' }}
              >
                <MessageCircle size={18} strokeWidth={2} />
                Quiero ser el siguiente
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
