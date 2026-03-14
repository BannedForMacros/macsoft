import { Phone, MessageCircle } from 'lucide-react'
import { FINAL_CTA, COMPANY } from '../../constants/content'
import ScrollReveal from '../ui/ScrollReveal'

export default function FinalCTA() {
  return (
    <section id="cta" style={{ background: 'var(--accent)', padding: '96px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(15,45,92,0.12)',
            color: 'var(--navy)',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '5px 14px',
            borderRadius: '9999px',
            marginBottom: '24px',
          }}>
            <MessageCircle size={14} strokeWidth={2.5} />
            Primera consulta gratis
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: 'var(--white)',
            marginBottom: '16px',
            lineHeight: 1.15,
          }}>
            {FINAL_CTA.heading}
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '40px',
          }}>
            {FINAL_CTA.subtext}
          </p>

          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-white-navy"
            style={{ fontSize: '1.05rem', padding: '16px 40px' }}
          >
            <Phone size={18} strokeWidth={2.5} />
            {FINAL_CTA.cta}
          </a>

          <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>
            <Phone size={15} strokeWidth={2} />
            <span>{COMPANY.phone}</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
