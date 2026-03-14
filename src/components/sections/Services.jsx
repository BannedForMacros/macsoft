import { SERVICES, SERVICES_SECTION } from '../../constants/content'
import SectionTitle from '../ui/SectionTitle'
import ServiceCard from '../ui/ServiceCard'
import ScrollReveal from '../ui/ScrollReveal'

export default function Services() {
  return (
    <section id="servicios" className="section-pad" style={{ background: 'var(--white)' }}>
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            eyebrow={SERVICES_SECTION.eyebrow}
            heading={SERVICES_SECTION.heading}
          />
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <ServiceCard
                iconName={service.iconName}
                title={service.title}
                description={service.description}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
