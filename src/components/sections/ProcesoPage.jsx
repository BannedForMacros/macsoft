import { PenTool, Code2, Rocket, MessageCircle, CheckCircle2, Clock } from 'lucide-react'
import { Ear } from '@phosphor-icons/react'
import { PROCESS_STAGES, TECH_STACK, COMPANY } from '../../constants/content'
import ScrollReveal from '../ui/ScrollReveal'
import SectionTitle from '../ui/SectionTitle'

const LUCIDE_ICONS = { PenTool, Code2, Rocket }
const PHOSPHOR_ICONS = { Ear }

function StageIcon({ name, lib, size = 28 }) {
  if (lib === 'phosphor') {
    const Icon = PHOSPHOR_ICONS[name]
    return Icon ? <Icon size={size} weight="duotone" /> : null
  }
  const Icon = LUCIDE_ICONS[name]
  return Icon ? <Icon size={size} strokeWidth={1.8} /> : null
}

export default function ProcesoPage() {
  return (
    <>
      {/* ── Section 1: Filosofía ── */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: '720px' }}>
              <span className="section-eyebrow">Nuestra filosofía</span>
              <h2 className="section-heading" style={{ textAlign: 'left' }}>
                No vendemos software. Resolvemos problemas.
              </h2>
              <div className="section-underline section-underline-left" style={{ marginBottom: '28px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ fontSize: '1.05rem', color: 'var(--dark)', opacity: 0.8, lineHeight: 1.75 }}>
                  MacSoft no tiene un catálogo de precios fijo ni soluciones empaquetadas. Cada proyecto empieza con una conversación real donde el CEO trabaja directamente con el cliente — sin capas de intermediarios ni gestores de cuenta que no entienden el problema.
                </p>
                <p style={{ fontSize: '1.05rem', color: 'var(--dark)', opacity: 0.8, lineHeight: 1.75 }}>
                  Esto significa que quien te atiende en la primera reunión es la misma persona que diseña la arquitectura, escribe el código y despliega el sistema. Transparencia total, responsabilidad total.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 2: 4 stages detailed ── */}
      <section style={{ background: 'var(--light)', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Etapas del proyecto"
              heading="De la idea al sistema funcionando"
            />
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {PROCESS_STAGES.map((stage, i) => (
              <ScrollReveal key={stage.number} delay={i * 80}>
                <div style={{
                  background: 'var(--white)',
                  border: '1px solid var(--mid)',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-card)',
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: '88px 1fr',
                }}>
                  {/* Stage sidebar */}
                  <div style={{
                    background: 'var(--navy)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: '32px 16px',
                    gap: '16px',
                  }}>
                    <span style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>
                      {stage.number}
                    </span>
                    <div style={{ color: 'rgba(255,255,255,0.7)' }}>
                      <StageIcon name={stage.iconName} lib={stage.iconLib} size={26} />
                    </div>
                  </div>

                  {/* Stage content */}
                  <div style={{ padding: '36px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '20px' }}>
                      {stage.title}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                      {stage.paragraphs.map((p, pi) => (
                        <p key={pi} style={{ fontSize: '0.93rem', color: 'var(--dark)', opacity: 0.75, lineHeight: 1.75 }}>{p}</p>
                      ))}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <CheckCircle2 size={16} color="var(--accent)" strokeWidth={2} style={{ marginTop: '2px', flexShrink: 0 }} />
                        <div>
                          <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '2px' }}>
                            Entregable
                          </p>
                          <p style={{ fontSize: '0.88rem', color: 'var(--navy)', fontWeight: 600 }}>{stage.deliverable}</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <Clock size={16} color="var(--accent)" strokeWidth={2} style={{ marginTop: '2px', flexShrink: 0 }} />
                        <div>
                          <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '2px' }}>
                            Tiempo estimado
                          </p>
                          <p style={{ fontSize: '0.88rem', color: 'var(--navy)', fontWeight: 600 }}>{stage.timeline}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Tech stack ── */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Stack tecnológico"
              heading="Tecnologías que usamos"
              subtext="Elegimos las herramientas más adecuadas para cada proyecto, no las que están de moda. Estas son nuestras tecnologías de referencia."
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
            }}>
              {TECH_STACK.map((group) => (
                <div key={group.category} style={{
                  background: 'var(--light)',
                  border: '1px solid var(--mid)',
                  borderRadius: 'var(--radius)',
                  padding: '24px',
                }}>
                  <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
                    {group.category}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {group.items.map((item) => (
                      <span key={item} style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--navy)' }}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 4: CTA ── */}
      <section style={{ background: 'var(--light)', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '16px' }}>
                ¿Cuánto cuesta mi proyecto?
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--dark)', opacity: 0.7, marginBottom: '32px', lineHeight: 1.7 }}>
                Cuéntanos lo que necesitas y te damos una propuesta detallada sin compromiso. La primera consulta es completamente gratis.
              </p>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '1rem', padding: '15px 36px' }}
              >
                <MessageCircle size={18} strokeWidth={2} />
                Solicitar propuesta gratis
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
