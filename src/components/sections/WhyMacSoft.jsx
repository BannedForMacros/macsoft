import { Fingerprint, MessageCircle, TrendingUp } from 'lucide-react'
import { WHY_MACSOFT, WHY_SECTION } from '../../constants/content'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

const ICONS = { Fingerprint, MessageCircle, TrendingUp }

export default function WhyMacSoft() {
  return (
    <section id="porque" className="section-pad" style={{ background: 'var(--navy)' }}>
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            eyebrow={WHY_SECTION.eyebrow}
            heading={WHY_SECTION.heading}
            subtext={WHY_SECTION.subtext}
            light
          />
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {WHY_MACSOFT.map((item, i) => {
            const Icon = ICONS[item.iconName] || Fingerprint
            return (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="why-card">
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    background: 'rgba(96, 165, 250, 0.15)',
                    color: 'var(--accent)',
                    marginBottom: '20px',
                  }}>
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '12px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
