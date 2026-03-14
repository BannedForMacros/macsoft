import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children, delay = 0 }) {
  const ref = useRef()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="reveal-wrapper" style={{ '--delay': `${delay}ms` }}>
      {children}
    </div>
  )
}
