import { PenTool, Code2, Rocket } from 'lucide-react'
import { Ear } from '@phosphor-icons/react'
import { HOW_WE_WORK, HOW_SECTION } from '../../constants/content'
import SectionTitle from '../ui/SectionTitle'
import ScrollReveal from '../ui/ScrollReveal'

const LUCIDE_ICONS = { PenTool, Code2, Rocket }
const PHOSPHOR_ICONS = { Ear }

function StepIcon({ name, lib, size = 28 }) {
  if (lib === 'phosphor') {
    const Icon = PHOSPHOR_ICONS[name]
    return Icon ? <Icon size={size} weight="duotone" /> : null
  }
  const Icon = LUCIDE_ICONS[name]
  return Icon ? <Icon size={size} strokeWidth={1.8} /> : null
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

        {/* ════════════════════════════════════════
            DESKTOP: 3 filas de grid (número / icono+línea / texto)
            Oculto en mobile con CSS.
            ════════════════════════════════════════ */}
        <div className="hw-desktop">

          {/* Fila 1 — números */}
          <div className="hw-row hw-row-numbers">
            {HOW_WE_WORK.map((step) => (
              <div key={`dn-${step.number}`} className="hw-cell" style={{ textAlign: 'center', paddingBottom: '8px' }}>
                <span className="step-number">{step.number}</span>
              </div>
            ))}
          </div>

          {/* Fila 2 — iconos + línea conectora */}
          <div className="hw-row hw-row-icons">
            <div className="hw-connector-line" />
            {HOW_WE_WORK.map((step, i) => (
              <ScrollReveal key={`di-${step.number}`} delay={i * 120}>
                <div className="hw-cell hw-icon-cell">
                  <div className="hw-icon-circle">
                    <StepIcon name={step.iconName} lib={step.iconLib} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Fila 3 — títulos y descripciones */}
          <div className="hw-row hw-row-texts">
            {HOW_WE_WORK.map((step, i) => (
              <ScrollReveal key={`dt-${step.number}`} delay={i * 120 + 60}>
                <div className="hw-cell" style={{ textAlign: 'center', padding: '20px 16px 0' }}>
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

        {/* ════════════════════════════════════════
            MOBILE: Timeline vertical — cada paso es
            una tarjeta completa (número + icono + título + descripción).
            Oculto en desktop con CSS.
            ════════════════════════════════════════ */}
        <div className="hw-mobile">
          {HOW_WE_WORK.map((step, i) => (
            <ScrollReveal key={`m-${step.number}`} delay={i * 100}>
              <div className="hw-mobile-step">

                {/* Columna izquierda: número + línea vertical */}
                <div className="hw-mobile-left">
                  <span className="hw-mobile-num">{step.number}</span>
                  {i < HOW_WE_WORK.length - 1 && (
                    <div className="hw-mobile-vline" />
                  )}
                </div>

                {/* Columna derecha: icono + texto */}
                <div className="hw-mobile-right">
                  <div className="hw-icon-circle" style={{ marginBottom: '14px' }}>
                    <StepIcon name={step.iconName} lib={step.iconLib} size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--dark)', opacity: 0.7, lineHeight: 1.65 }}>
                    {step.description}
                  </p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Compartido ────────────────────────────── */
        .hw-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--white);
          border: 2px solid rgba(96, 165, 250, 0.4);
          box-shadow: 0 0 0 5px var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          transition: border-color 0.25s;
          flex-shrink: 0;
        }
        .hw-icon-circle:hover {
          border-color: var(--accent);
          box-shadow: 0 0 0 5px var(--white), 0 4px 14px rgba(96,165,250,0.25);
        }

        /* ── DESKTOP layout ────────────────────────── */
        .hw-desktop { display: flex; flex-direction: column; }
        .hw-mobile  { display: none; }

        .hw-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .hw-cell { width: 100%; }

        .hw-row-icons {
          position: relative;
          padding: 12px 0;
        }
        .hw-connector-line {
          position: absolute;
          top: 50%;
          left: calc(100% / 8);
          right: calc(100% / 8);
          border-top: 2px dashed var(--mid);
          z-index: 0;
          transform: translateY(-50%);
        }
        .hw-icon-cell {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* ── MOBILE layout ─────────────────────────── */
        @media (max-width: 768px) {
          .hw-desktop { display: none; }
          .hw-mobile  { display: flex; flex-direction: column; gap: 0; }

          .hw-mobile-step {
            display: flex;
            gap: 20px;
            align-items: flex-start;
          }

          /* Columna izquierda: número grande + línea que baja */
          .hw-mobile-left {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-shrink: 0;
            width: 44px;
          }
          .hw-mobile-num {
            font-size: 1.6rem;
            font-weight: 900;
            color: var(--accent);
            line-height: 1;
            /* Alinea con el tope del contenido derecho */
            padding-top: 2px;
            margin-bottom: 10px;
          }
          .hw-mobile-vline {
            flex: 1;
            width: 2px;
            background: linear-gradient(to bottom, var(--accent), var(--mid));
            border-radius: 2px;
            min-height: 40px;
            margin-bottom: 0;
            opacity: 0.45;
          }

          /* Columna derecha: icono + título + descripción */
          .hw-mobile-right {
            flex: 1;
            padding-bottom: 36px;
          }

          /* El último paso no necesita espacio extra abajo */
          .hw-mobile .reveal-wrapper:last-child .hw-mobile-right {
            padding-bottom: 0;
          }
          .hw-mobile .reveal-wrapper:last-child .hw-mobile-vline {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
