import { ExternalLink, Check, MessageCircle, ArrowRight } from 'lucide-react'
import {
  UtensilsCrossed, ChefHat, Package, Receipt, BarChart2,
  Wrench, Users, Bell, FileText,
  FileCheck, Send, ShieldCheck, CreditCard, ShoppingCart,
  LayoutDashboard, Globe, Smartphone, Plug, Workflow,
} from 'lucide-react'
import { PRODUCTS, SERVICES_DETAIL, COMPANY } from '../../constants/content'
import ScrollReveal from '../ui/ScrollReveal'
import SectionTitle from '../ui/SectionTitle'

const ICON_MAP = {
  UtensilsCrossed, ChefHat, Package, Receipt, BarChart2,
  Wrench, Users, Bell, FileText,
  FileCheck, Send, ShieldCheck, CreditCard, ShoppingCart,
  LayoutDashboard, Globe, Smartphone, Plug, Workflow,
}

const PRODUCT_COLORS = {
  gestvenin:  { accent: '#f97316', light: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.25)' },
  tallerhub:  { accent: 'var(--blue)', light: 'rgba(27,74,158,0.07)', border: 'rgba(27,74,158,0.2)' },
  facturamac: { accent: '#0052a5', light: 'rgba(0,82,165,0.07)', border: 'rgba(0,82,165,0.25)' },
  ventorypos: { accent: '#16a34a', light: 'rgba(22,163,74,0.07)', border: 'rgba(22,163,74,0.25)' },
}

export default function ServiciosPage() {
  return (
    <>
      {/* ── Section 1: Products ── */}
      <section style={{ background: 'var(--light)', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Productos propios"
              heading="Software listo para implementar"
              subtext="Productos desarrollados por MacSoft que ya están funcionando en negocios reales."
              align="left"
            />
          </ScrollReveal>

          <div className="products-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '28px',
          }}>
            {PRODUCTS.map((product, i) => {
              const c = PRODUCT_COLORS[product.id] || PRODUCT_COLORS.tallerhub
              return (
                <ScrollReveal key={product.id} delay={i * 120}>
                  <div style={{
                    background: 'var(--white)',
                    border: `1.5px solid ${c.border}`,
                    borderTop: `4px solid ${c.accent}`,
                    borderRadius: 'var(--radius)',
                    padding: '36px',
                    boxShadow: 'var(--shadow-card)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                  }}>
                    <div>
                      <div style={{ display: 'inline-block', background: c.light, color: c.accent, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '9999px', marginBottom: '12px' }}>
                        {product.sector}
                      </div>
                      <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1.1, marginBottom: '6px' }}>
                        {product.name}
                      </h3>
                      <p style={{ fontSize: '0.92rem', fontWeight: 600, color: c.accent }}>{product.tagline}</p>
                    </div>

                    <p style={{ fontSize: '0.92rem', color: 'var(--dark)', opacity: 0.75, lineHeight: 1.7 }}>
                      {product.description}
                    </p>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                      {product.features.map((feat) => {
                        const Icon = ICON_MAP[feat.iconName] || Check
                        return (
                          <li key={feat.label} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--dark)' }}>
                            <span style={{ color: c.accent, flexShrink: 0 }}><Icon size={16} strokeWidth={2} /></span>
                            {feat.label}
                          </li>
                        )
                      })}
                    </ul>

                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: c.accent, color: '#fff', padding: '12px 24px', borderRadius: '9999px', fontWeight: 700, fontSize: '0.9rem', transition: 'all 0.2s', alignSelf: 'flex-start' }}
                      onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                      onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
                    >
                      {product.cta} <ExternalLink size={14} strokeWidth={2.5} />
                    </a>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Section 2: Custom dev services ── */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Desarrollo a medida"
              heading="Construimos lo que tu negocio necesita"
              subtext="Si los productos estándar no son suficientes, construimos tu solución desde cero. Sin límites de sector ni de funcionalidad."
            />
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {SERVICES_DETAIL.map((svc, i) => {
              const Icon = ICON_MAP[svc.iconName] || LayoutDashboard
              return (
                <ScrollReveal key={svc.title} delay={i * 80}>
                  <div className="card" style={{ padding: '40px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '0' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '24px', alignItems: 'start' }}>
                      <div className="service-icon-wrap" style={{ marginBottom: 0 }}>
                        <Icon size={26} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '16px' }}>
                          {svc.title}
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                          {svc.paragraphs.map((p, pi) => (
                            <p key={pi} style={{ fontSize: '0.92rem', color: 'var(--dark)', opacity: 0.75, lineHeight: 1.7 }}>{p}</p>
                          ))}
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '10px' }}>
                            Casos de uso
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {svc.useCases.map((uc) => (
                              <span key={uc} style={{ display: 'inline-block', background: 'var(--navy-10)', color: 'var(--navy)', fontSize: '0.8rem', fontWeight: 500, padding: '4px 12px', borderRadius: '9999px' }}>
                                {uc}
                              </span>
                            ))}
                          </div>
                        </div>
                        <a
                          href={COMPANY.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--blue)', fontWeight: 600, fontSize: '0.88rem', transition: 'gap 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                          onMouseLeave={e => e.currentTarget.style.gap = '6px'}
                        >
                          <MessageCircle size={15} strokeWidth={2} />
                          ¿Lo necesitas? Conversemos
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Section 3: CTA ── */}
      <section style={{ background: 'var(--light)', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 800, color: 'var(--navy)', marginBottom: '16px' }}>
                ¿No encuentras lo que necesitas?
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--dark)', opacity: 0.7, marginBottom: '32px', lineHeight: 1.7 }}>
                Lo construimos desde cero. Cuéntanos tu idea y te damos una propuesta sin compromiso.
              </p>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '1rem', padding: '15px 36px' }}
              >
                <MessageCircle size={18} strokeWidth={2} />
                Hablar con MacSoft
              </a>
            </div>
          </ScrollReveal>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .products-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  )
}
