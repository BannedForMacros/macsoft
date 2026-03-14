import {
  LayoutDashboard, Globe, Smartphone, Plug, Workflow, Lightbulb,
  Fingerprint, MessageCircle, TrendingUp, PenTool, Code2, Rocket,
} from 'lucide-react'

const ICONS = {
  LayoutDashboard, Globe, Smartphone, Plug, Workflow, Lightbulb,
  Fingerprint, MessageCircle, TrendingUp, PenTool, Code2, Rocket,
}

export default function ServiceCard({ iconName, title, description }) {
  const Icon = ICONS[iconName] || LayoutDashboard
  return (
    <div className="card" style={{ padding: '32px' }}>
      <div className="service-icon-wrap">
        <Icon size={26} strokeWidth={1.8} />
      </div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px', color: 'var(--navy)' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.92rem', color: 'var(--dark)', opacity: 0.75, lineHeight: 1.65 }}>
        {description}
      </p>
    </div>
  )
}
