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

        {/*
          ─── TIMELINE LAYOUT ───────────────────────────────────────────
          Estructura de 3 filas independientes usando CSS Grid:
          Fila 1 → números (01 02 03 04)
          Fila 2 → línea + círculos de iconos (line y z-index separados)
          Fila 3 → título + descripción
          Así la línea NUNCA puede tocar los números.
        */}
        <div className="timeline-outer">

          {/* ── Fila 1: Números ── */}
          <div className="timeline-numbers">
            {HOW_WE_WORK.map((step) => (
              <div key={`num-${step.number}`} className="timeline-num-cell">
                <span className="step-number">{step.number}</span>
              </div>
            ))}
          </div>

          {/* ── Fila 2: Iconos + línea conectora ── */}
          <div className="timeline-icons-row">
            {/* Línea continua detrás de los iconos — posición absoluta al 50% de esta fila */}
            <div className="timeline-connector-line" />

            {HOW_WE_WORK.map((step, i) => (
              <ScrollReveal key={`icon-${step.number}`} delay={i * 120}>
                <div className="timeline-icon-cell">
                  <div className="timeline-icon-circle">
                    <StepIcon name={step.iconName} lib={step.iconLib} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ── Fila 3: Texto ── */}
          <div className="timeline-texts">
            {HOW_WE_WORK.map((step, i) => (
              <ScrollReveal key={`txt-${step.number}`} delay={i * 120 + 60}>
                <div className="timeline-text-cell">
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
      </div>

      <style>{`
        /* ── Desktop: 4 columnas ── */
        .timeline-outer {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .timeline-numbers,
        .timeline-icons-row,
        .timeline-texts {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        /* Números */
        .timeline-num-cell {
          text-align: center;
          padding-bottom: 8px;
        }
        .timeline-num-cell .step-number {
          display: inline-block;
        }

        /* Fila de iconos — contiene la línea como fondo */
        .timeline-icons-row {
          position: relative;
          padding: 16px 0;
        }
        .timeline-connector-line {
          position: absolute;
          top: 50%;
          /* empieza y termina en el centro de la 1ª y 4ª columna respectivamente */
          left: calc(100% / 8);
          right: calc(100% / 8);
          height: 2px;
          border-top: 2px dashed var(--mid);
          z-index: 0;
          transform: translateY(-50%);
        }
        .timeline-icon-cell {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .timeline-icon-circle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: var(--white);
          border: 2px solid rgba(96, 165, 250, 0.4);
          box-shadow: 0 0 0 6px var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .timeline-icon-circle:hover {
          border-color: var(--accent);
          box-shadow: 0 0 0 6px var(--white), 0 4px 16px rgba(96,165,250,0.25);
        }

        /* Textos */
        .timeline-text-cell {
          text-align: center;
          padding: 20px 16px 0;
        }

        /* ── Mobile: 1 columna, sin línea horizontal ── */
        @media (max-width: 768px) {
          .timeline-numbers,
          .timeline-icons-row,
          .timeline-texts {
            grid-template-columns: 1fr;
          }
          .timeline-connector-line { display: none; }

          /* En mobile agrupamos num+icon+texto en un solo bloque visual */
          .timeline-num-cell,
          .timeline-icon-cell,
          .timeline-text-cell {
            padding-left: 0;
            padding-right: 0;
          }
          .timeline-outer {
            gap: 0;
          }
          /* Separador visual entre pasos en mobile */
          .timeline-text-cell {
            border-bottom: 1px solid var(--mid);
            margin-bottom: 32px;
            padding-bottom: 32px;
          }
          .timeline-texts .reveal-wrapper:last-child .timeline-text-cell {
            border-bottom: none;
            margin-bottom: 0;
          }
        }
      `}</style>
    </section>
  )
}
