import { PenTool, Code2, Rocket } from 'lucide-react'
import { Ear } from '@phosphor-icons/react'
import { HOW_WE_WORK, HOW_SECTION } from '../../constants/content'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

const LUCIDE_ICONS = { PenTool, Code2, Rocket }
const PHOSPHOR_ICONS = { Ear }

function StepIcon({ name, lib }) {
  if (lib === 'phosphor') {
    const Icon = PHOSPHOR_ICONS[name]
    return Icon ? <Icon size={28} weight="duotone" /> : null
  }
  const Icon = LUCIDE_ICONS[name]
  return Icon ? <Icon size={28} strokeWidth={1.8} /> : null
}

export default function HowWeWork() {
  return (
    <section id="proceso" className="section-pad" style={{ background: 'var(--white)' }}>
      <div className="container">
        <ScrollReveal>
          <SectionTitle
            eyebrow={HOW_SECTION.eyebrow}
            heading={HOW_SECTION.heading}
          />
        </ScrollReveal>

        {/* Timeline grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '0',
          position: 'relative',
        }}>
          {HOW_WE_WORK.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 120}>
              <div style={{ position: 'relative', padding: '32px 24px', textAlign: 'center' }}>
                {/* Connecting line (desktop) */}
                {i < HOW_WE_WORK.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '64px',
                    right: '0',
                    width: '50%',
                    borderTop: '2px dashed var(--mid)',
                    zIndex: 0,
                  }} className="step-line" />
                )}
                {i > 0 && (
                  <div style={{
                    position: 'absolute',
                    top: '64px',
                    left: '0',
                    width: '50%',
                    borderTop: '2px dashed var(--mid)',
                    zIndex: 0,
                  }} className="step-line" />
                )}

                {/* Step number */}
                <div className="step-number">{step.number}</div>

                {/* Icon circle */}
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'rgba(96, 165, 250, 0.1)',
                  border: '2px solid rgba(96, 165, 250, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  margin: '0 auto 20px',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 0 0 6px var(--white)',
                }}>
                  <StepIcon name={step.iconName} lib={step.iconLib} />
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '10px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--dark)', opacity: 0.7, lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .step-line { display: none; } }
      `}</style>
    </section>
  )
}
