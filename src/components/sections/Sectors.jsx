import { ArrowRight } from 'lucide-react'
import { SECTORS, SECTORS_SECTION, COMPANY } from '../../constants/content'
import SectionTitle from '../ui/SectionTitle'
import SectorBadge from '../ui/SectorBadge'
import ScrollReveal from '../ui/ScrollReveal'

export default function Sectors() {
  return (
    <section id="sectores" className="section-pad" style={{ background: 'var(--light)' }}>
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            eyebrow={SECTORS_SECTION.eyebrow}
            heading={SECTORS_SECTION.heading}
            subtext={SECTORS_SECTION.subtext}
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '48px' }}>
            {SECTORS.map((sector) => (
              <SectorBadge key={sector} label={sector} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div style={{ textAlign: 'center' }}>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--blue)',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'gap 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.gap = '12px' }}
              onMouseLeave={e => { e.currentTarget.style.gap = '8px' }}
            >
              {SECTORS_SECTION.footerText}
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
