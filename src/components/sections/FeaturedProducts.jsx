import { Check, ExternalLink } from 'lucide-react'
import {
  UtensilsCrossed, ChefHat, Package, Receipt, BarChart2,
  Wrench, Users, Bell, FileText,
  FileCheck, Send, ShieldCheck, CreditCard, ShoppingCart,
} from 'lucide-react'
import { PRODUCTS } from '../../constants/content'
import ScrollReveal from '../ui/ScrollReveal'
import SectionTitle from '../ui/SectionTitle'

const ICON_MAP = {
  UtensilsCrossed, ChefHat, Package, Receipt, BarChart2,
  Wrench, Users, Bell, FileText,
  FileCheck, Send, ShieldCheck, CreditCard, ShoppingCart,
}

const PRODUCT_COLORS = {
  gestvenin:  { accent: '#f97316', light: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.25)' },
  tallerhub:  { accent: 'var(--blue)', light: 'rgba(27,74,158,0.07)', border: 'rgba(27,74,158,0.2)' },
  facturamac: { accent: '#0052a5', light: 'rgba(0,82,165,0.07)', border: 'rgba(0,82,165,0.25)' },
  ventorypos: { accent: '#16a34a', light: 'rgba(22,163,74,0.07)', border: 'rgba(22,163,74,0.25)' },
}

export default function FeaturedProducts() {
  return (
    <section style={{ background: 'var(--light)', padding: '96px 0' }}>
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Productos propios"
            heading="Software que ya está funcionando"
            subtext="Además de desarrollo a medida, MacSoft cuenta con productos propios listos para implementar en tu negocio."
          />
        </ScrollReveal>

        <div className="products-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '28px',
        }}>
          {PRODUCTS.map((product, i) => {
            const colors = PRODUCT_COLORS[product.id] || PRODUCT_COLORS.tallerhub
            return (
              <ScrollReveal key={product.id} delay={i * 120}>
                <div style={{
                  background: 'var(--white)',
                  border: `1.5px solid ${colors.border}`,
                  borderTop: `4px solid ${colors.accent}`,
                  borderRadius: 'var(--radius)',
                  padding: '36px',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  height: '100%',
                }}>
                  {/* Header */}
                  <div>
                    <div style={{
                      display: 'inline-block',
                      background: colors.light,
                      color: colors.accent,
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      marginBottom: '12px',
                    }}>
                      {product.sector}
                    </div>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1.1, marginBottom: '6px' }}>
                      {product.name}
                    </h3>
                    <p style={{ fontSize: '0.9rem', fontWeight: 600, color: colors.accent }}>
                      {product.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.92rem', color: 'var(--dark)', opacity: 0.75, lineHeight: 1.7 }}>
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                    {product.features.map((feat) => {
                      const Icon = ICON_MAP[feat.iconName] || Check
                      return (
                        <li key={feat.label} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--dark)' }}>
                          <span style={{ color: colors.accent, flexShrink: 0 }}>
                            <Icon size={16} strokeWidth={2} />
                          </span>
                          {feat.label}
                        </li>
                      )
                    })}
                  </ul>

                  {/* CTA */}
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: colors.accent,
                      color: product.id === 'gestvenin' ? '#fff' : '#fff',
                      padding: '12px 24px',
                      borderRadius: '9999px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      transition: 'all 0.2s',
                      alignSelf: 'flex-start',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    {product.cta}
                    <ExternalLink size={14} strokeWidth={2.5} />
                  </a>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
