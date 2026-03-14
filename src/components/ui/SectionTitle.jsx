export default function SectionTitle({ eyebrow, heading, subtext, align = 'center', light = false }) {
  const textAlign = align === 'center' ? 'center' : 'left'
  return (
    <div style={{ textAlign, marginBottom: '56px' }}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className={`section-heading ${light ? 'section-heading-white' : ''}`}>{heading}</h2>
      <div className={`section-underline ${align === 'left' ? 'section-underline-left' : ''}`} style={{ margin: align === 'center' ? '16px auto 0' : '16px 0 0' }} />
      {subtext && (
        <p className={`section-subtext ${light ? 'section-subtext-white' : ''}`} style={{ margin: align === 'center' ? '20px auto 0' : '20px 0 0' }}>
          {subtext}
        </p>
      )}
    </div>
  )
}
