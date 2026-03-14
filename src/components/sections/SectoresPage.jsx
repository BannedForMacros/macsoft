import {
  UtensilsCrossed, Stethoscope, Scale, GraduationCap, Truck,
  ShoppingCart, PiggyBank, Hotel, HardHat, Wrench, Briefcase, Factory,
  ArrowRight, MessageCircle,
} from 'lucide-react'
import { SECTOR_CARDS, COMPANY } from '../../constants/content'
import ScrollReveal from '../ui/ScrollReveal'
import SectionTitle from '../ui/SectionTitle'

const ICON_MAP = {
  UtensilsCrossed, Stethoscope, Scale, GraduationCap, Truck,
  ShoppingCart, PiggyBank, Hotel, HardHat, Wrench, Briefcase, Factory,
}

export default function SectoresPage() {
  return (
    <>
      {/* ── Section 1: Intro ── */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: '700px' }}>
              <span className="section-eyebrow">Por qué sin límites</span>
              <h2 className="section-heading" style={{ textAlign: 'left' }}>
                Nos especializamos en entender tu negocio
              </h2>
              <div className="section-underline section-underline-left" style={{ marginBottom: '28px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ fontSize: '1.05rem', color: 'var(--dark)', opacity: 0.8, lineHeight: 1.75 }}>
                  MacSoft no se limita a un único sector porque la tecnología no se limita. Lo que cambia de un proyecto al otro no es el software — es la lógica del negocio. Y eso es exactamente lo que aprendemos antes de escribir una sola línea de código.
                </p>
                <p style={{ fontSize: '1.05rem', color: 'var(--dark)', opacity: 0.8, lineHeight: 1.75 }}>
                  Cada proyecto empieza con una fase de diagnóstico donde entendemos tu proceso, tus términos, tus reglas del negocio. El software resultante habla tu idioma, no el de un template genérico.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Section 2: Sector cards ── */}
      <section style={{ background: 'var(--light)', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Sectores atendidos"
              heading="Industrias donde ya hemos trabajado"
            />
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}>
            {SECTOR_CARDS.map((sector, i) => {
              const Icon = ICON_MAP[sector.iconName] || Briefcase
              return (
                <ScrollReveal key={sector.name} delay={i * 60}>
                  <div className="card" style={{ padding: '28px' }}>
                    <div style={{
                      width: '52px', height: '52px',
                      background: 'var(--navy-10)',
                      borderRadius: '10px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--navy)',
                      marginBottom: '16px',
                    }}>
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>
                      {sector.name}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--dark)', opacity: 0.7, lineHeight: 1.6 }}>
                      {sector.problems}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Section 3: Callout ── */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{
              background: 'var(--navy)',
              borderRadius: 'var(--radius)',
              padding: '56px 48px',
              textAlign: 'center',
            }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 800, color: 'var(--white)', marginBottom: '16px' }}>
                ¿No ves tu sector en la lista?
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.7 }}>
                Estos son los sectores donde ya hemos trabajado. Si el tuyo no está aquí, escríbenos — si hay un proceso, hay una solución.
              </p>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white-navy"
                style={{ fontSize: '1rem', padding: '14px 32px' }}
              >
                <MessageCircle size={18} strokeWidth={2} />
                Consultanos sobre tu sector
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
