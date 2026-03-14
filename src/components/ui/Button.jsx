export default function Button({ children, variant = 'primary', href, onClick, className = '' }) {
  const cls = `btn btn-${variant} ${className}`
  if (href) {
    return (
      <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
