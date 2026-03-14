// ── Company ────────────────────────────────────────────────────────────────
export const COMPANY = {
  name:         'MacSoft',
  tagline:      'Software a tu medida.',
  phone:        '933798089',
  phoneDisplay: '936 651 099',
  whatsapp:     'https://wa.me/51933798089',
  email:        'contacto@macsoft.pe',
  location:     'Chiclayo, Perú',
  legalName:    'MacSoft E.I.R.L.',
}

// ── Navigation ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Inicio',    href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proceso',   href: '/proceso' },
  { label: 'Sectores',  href: '/sectores' },
  { label: 'Clientes',  href: '/clientes' },
  { label: 'Contacto',  href: 'https://wa.me/51933798089', external: true },
]

// ── Hero (landing) ─────────────────────────────────────────────────────────
export const HERO = {
  eyebrow:       'Desarrollo de software personalizado',
  headline:      'Transformamos tu idea en software que funciona.',
  subheadline:   'No vendemos plantillas. Construimos exactamente lo que tu negocio necesita, en el sector que sea.',
  cta_primary:   'Cuéntanos tu proyecto',
  cta_secondary: 'Ver qué hacemos',
}

// ── Products ───────────────────────────────────────────────────────────────
export const PRODUCTS = [
  {
    id:          'gestvenin',
    name:        'GestVenin',
    tagline:     'Sistema de gestión para restaurantes',
    url:         'https://gestvenin.com',
    cta:         'Ver GestVenin',
    sector:      'Restaurantes & Gastronomía',
    description: 'Sistema POS y ERP diseñado para restaurantes y negocios gastronómicos. Control de mesas, pedidos, cocina, inventario, caja y reportes en tiempo real.',
    features: [
      { iconName: 'UtensilsCrossed', label: 'Gestión de mesas y pedidos' },
      { iconName: 'ChefHat',         label: 'Módulo de cocina en tiempo real' },
      { iconName: 'Package',         label: 'Control de inventario y mermas' },
      { iconName: 'Receipt',         label: 'Facturación electrónica SUNAT' },
      { iconName: 'BarChart2',       label: 'Reportes y cierre de caja' },
    ],
  },
  {
    id:          'tallerhub',
    name:        'TallerHub',
    tagline:     'Sistema de gestión para talleres técnicos',
    url:         'https://tallerhub.macsoftperu.com',
    cta:         'Ver TallerHub',
    sector:      'Talleres Técnicos',
    description: 'Plataforma integral para talleres mecánicos, electrónicos y de servicios técnicos. Gestiona órdenes de trabajo, técnicos, repuestos y clientes desde un solo lugar.',
    features: [
      { iconName: 'Wrench',    label: 'Órdenes de trabajo y seguimiento' },
      { iconName: 'Users',     label: 'Gestión de técnicos y asignaciones' },
      { iconName: 'Package',   label: 'Inventario de repuestos' },
      { iconName: 'Bell',      label: 'Notificaciones al cliente por WhatsApp' },
      { iconName: 'FileText',  label: 'Historial de servicios por vehículo/equipo' },
    ],
  },
  {
    id:          'facturamac',
    name:        'FacturaMac',
    tagline:     'Envío de comprobantes electrónicos SUNAT',
    url:         'https://facturamac.macsoftperu.com',
    cta:         'Ver FacturaMac',
    sector:      'Facturación Electrónica',
    description: 'Plataforma para emisión y envío automático de facturas y boletas electrónicas validadas por SUNAT. Integrable con cualquier sistema existente vía API.',
    features: [
      { iconName: 'FileCheck', label: 'Emisión de facturas y boletas electrónicas' },
      { iconName: 'Send',      label: 'Envío automático al cliente por correo y WhatsApp' },
      { iconName: 'ShieldCheck', label: 'Validación en tiempo real con SUNAT' },
      { iconName: 'FileText',  label: 'Notas de crédito y débito' },
      { iconName: 'BarChart2', label: 'Reportes de comprobantes emitidos' },
    ],
  },
  {
    id:          'ventorypos',
    name:        'VentoryPOS',
    tagline:     'Punto de venta para minimarkets y retail',
    url:         'https://ventorypos.macsoft.com',
    cta:         'Ver VentoryPOS',
    sector:      'Comercio Retail',
    description: 'Sistema de punto de venta diseñado para minimarkets, bodegas y negocios de retail. Ventas rápidas, control de stock, múltiples medios de pago y reportes al instante.',
    features: [
      { iconName: 'ShoppingCart', label: 'Punto de venta rápido y táctil' },
      { iconName: 'Package',      label: 'Control de stock en tiempo real' },
      { iconName: 'CreditCard',   label: 'Efectivo, Yape, Plin y tarjeta' },
      { iconName: 'Users',        label: 'Gestión de clientes y fidelización' },
      { iconName: 'BarChart2',    label: 'Reportes de ventas diarios y mensuales' },
    ],
  },
]

// ── Landing — Services grid ────────────────────────────────────────────────
export const SERVICES_SECTION = {
  eyebrow: 'Lo que hacemos',
  heading: 'Software que resuelve problemas reales',
}

export const SERVICES = [
  {
    iconName: 'LayoutDashboard',
    title: 'Sistemas de gestión',
    description: 'ERP, POS, inventarios y facturación electrónica. Automatizamos el núcleo de tu operación.',
  },
  {
    iconName: 'Globe',
    title: 'Plataformas web',
    description: 'Aplicaciones web, portales corporativos e intranets diseñados a la medida de tu negocio.',
  },
  {
    iconName: 'Smartphone',
    title: 'Apps móviles',
    description: 'Aplicaciones iOS y Android construidas con React Native para llegar a tus clientes donde estén.',
  },
  {
    iconName: 'Plug',
    title: 'Integraciones y APIs',
    description: 'Conectamos tu sistema con SUNAT, pasarelas de pago y cualquier servicio externo que necesites.',
  },
  {
    iconName: 'Workflow',
    title: 'Automatización de procesos',
    description: 'Diseñamos flujos digitales que eliminan el papel, reducen errores y liberan el tiempo de tu equipo.',
  },
  {
    iconName: 'Lightbulb',
    title: 'Consultoría tecnológica',
    description: 'Te ayudamos a elegir la arquitectura y el stack correcto antes de invertir en desarrollo.',
  },
]

// ── Detailed services (for /servicios inner page) ─────────────────────────
export const SERVICES_DETAIL = [
  {
    iconName:    'LayoutDashboard',
    title:       'Sistemas de Gestión Empresarial',
    paragraphs:  [
      'Diseñamos ERP personalizados que se adaptan al flujo de trabajo real de tu empresa, no al revés. Módulos de inventario, RRHH, contabilidad integrada y reportes a medida.',
      'Integramos facturación electrónica con SUNAT: comprobantes de pago, notas de crédito, guías de remisión y todo lo que exige la normativa peruana.',
      'Cada módulo se construye con tus nombres, tus procesos y tu lógica de negocio. Sin traducciones, sin adaptaciones forzadas.',
    ],
    useCases:    ['Distribuidoras y comercializadoras', 'Empresas manufactureras', 'Servicios con control de inventario', 'Negocios con múltiples sedes o almacenes'],
  },
  {
    iconName:    'Globe',
    title:       'Plataformas Web a Medida',
    paragraphs:  [
      'Desarrollamos aplicaciones web progresivas (PWA), dashboards administrativos complejos y portales de clientes con autenticación, roles y permisos.',
      'Implementamos workflows de aprobación, reportería avanzada con exportación a Excel/PDF, y paneles con datos en tiempo real.',
      'Desde una simple web corporativa hasta una plataforma con decenas de usuarios concurrentes y procesos críticos de negocio.',
    ],
    useCases:    ['Empresas de servicios con portal de clientes', 'Cooperativas con múltiples socios', 'Instituciones con gestión de expedientes', 'Negocios con procesos de aprobación internos'],
  },
  {
    iconName:    'Smartphone',
    title:       'Aplicaciones Móviles',
    paragraphs:  [
      'Construimos apps iOS y Android con React Native: un solo código fuente, dos plataformas, sin comprometer la experiencia de usuario.',
      'Integramos notificaciones push, modo offline para zonas sin cobertura, y conexión con APIs externas o sistemas existentes del cliente.',
      'Publicamos en App Store y Google Play, y capacitamos a tu equipo para administrar el contenido.',
    ],
    useCases:    ['Apps de delivery para restaurantes', 'Apps de campo para técnicos o distribuidores', 'Apps de cobranza y visitas comerciales', 'Apps de atención al cliente'],
  },
  {
    iconName:    'Plug',
    title:       'Integraciones y APIs',
    paragraphs:  [
      'Conectamos tu sistema con SUNAT (facturación electrónica), Yape, Plin, Culqi e Izipay para pagos online, y cualquier servicio externo vía API REST.',
      'Si ya tienes un sistema funcionando y necesitas conectarlo con otro, diseñamos la capa de integración sin afectar tus operaciones actuales.',
      'También desarrollamos APIs propias para que terceros puedan conectarse a tu plataforma de forma segura y controlada.',
    ],
    useCases:    ['E-commerce con pasarela de pagos peruana', 'Sistemas legados que requieren modernización', 'Conexión entre ERP y tienda online', 'Marketplaces con múltiples vendedores'],
  },
  {
    iconName:    'Workflow',
    title:       'Automatización de Procesos',
    paragraphs:  [
      'Digitalizamos procesos que hoy viven en papel, hojas de cálculo o mensajes de WhatsApp. Cada paso queda registrado, trazado y auditable.',
      'Diseñamos flujos de trabajo con notificaciones automáticas: alertas por correo, WhatsApp o dentro del mismo sistema cuando una tarea requiere acción.',
      'El resultado: menos errores humanos, menos tiempo en tareas repetitivas, y datos reales para tomar decisiones.',
    ],
    useCases:    ['Estudios legales y arbitraje', 'Clínicas y consultorios médicos', 'Empresas de logística y distribución', 'Cualquier proceso con múltiples responsables y etapas'],
  },
]

// ── Sectors (landing badges) ────────────────────────────────────────────────
export const SECTORS_SECTION = {
  eyebrow:    'Industrias',
  heading:    'Cualquier industria. Cualquier proceso.',
  subtext:    'No nos especializamos en un solo rubro. Nos especializamos en entender el tuyo.',
  footerText: 'Si tu sector no está aquí, igual podemos ayudarte',
}

export const SECTORS = [
  'Restaurantes & Gastronomía',
  'Salud & Clínicas',
  'Legal & Arbitraje',
  'Educación',
  'Logística & Distribución',
  'Comercio Retail',
  'Cooperativas Financieras',
  'Hotelería & Turismo',
  'Construcción',
  'Manufactura',
  'Servicios Profesionales',
  'Y más...',
]

// ── Sector cards (for /sectores inner page) ────────────────────────────────
export const SECTOR_CARDS = [
  {
    iconName: 'UtensilsCrossed',
    name:     'Restaurantes & Gastronomía',
    problems: 'Control de mesas, comandas, inventario y cierre de caja en tiempo real.',
  },
  {
    iconName: 'Stethoscope',
    name:     'Salud & Clínicas',
    problems: 'Historial de pacientes, citas, laboratorio y farmacia en una sola plataforma.',
  },
  {
    iconName: 'Scale',
    name:     'Legal & Arbitraje',
    problems: 'Gestión de expedientes, plazos, documentos y notificaciones automáticas.',
  },
  {
    iconName: 'GraduationCap',
    name:     'Educación',
    problems: 'Matrículas, notas, asistencia y comunicación con padres digitalizados.',
  },
  {
    iconName: 'Truck',
    name:     'Logística & Distribución',
    problems: 'Rutas, guías de remisión, tracking y control de almacén integrados.',
  },
  {
    iconName: 'ShoppingCart',
    name:     'Comercio Retail',
    problems: 'POS, stock, proveedores y fidelización de clientes en un solo sistema.',
  },
  {
    iconName: 'PiggyBank',
    name:     'Cooperativas Financieras',
    problems: 'Gestión de socios, préstamos, ahorros y reportes regulatorios.',
  },
  {
    iconName: 'Hotel',
    name:     'Hotelería & Turismo',
    problems: 'Reservas, housekeeping, facturación y conexión con OTAs.',
  },
  {
    iconName: 'HardHat',
    name:     'Construcción',
    problems: 'Proyectos, presupuestos, avance de obra y control de materiales.',
  },
  {
    iconName: 'Wrench',
    name:     'Talleres Técnicos',
    problems: 'Órdenes de servicio, repuestos, técnicos y seguimiento al cliente.',
  },
  {
    iconName: 'Briefcase',
    name:     'Servicios Profesionales',
    problems: 'CRM, propuestas comerciales, contratos y facturación integrados.',
  },
  {
    iconName: 'Factory',
    name:     'Manufactura',
    problems: 'Producción, calidad, insumos y órdenes de fabricación controlados.',
  },
]

// ── How We Work (landing) ──────────────────────────────────────────────────
export const HOW_SECTION = {
  eyebrow: 'Nuestra metodología',
  heading: '¿Cómo trabajamos?',
}

export const HOW_WE_WORK = [
  {
    number:  '01',
    iconName: 'Ear',
    iconLib: 'phosphor',
    title:   'Escuchamos',
    description: 'Entendemos tu negocio, tu problema y tu visión antes de escribir una sola línea de código.',
  },
  {
    number:  '02',
    iconName: 'PenTool',
    iconLib: 'lucide',
    title:   'Diseñamos',
    description: 'Creamos la arquitectura, los flujos de trabajo y el prototipo visual de tu solución.',
  },
  {
    number:  '03',
    iconName: 'Code2',
    iconLib: 'lucide',
    title:   'Construimos',
    description: 'Desarrollo iterativo con feedback constante. Ves el progreso en tiempo real.',
  },
  {
    number:  '04',
    iconName: 'Rocket',
    iconLib: 'lucide',
    title:   'Lanzamos',
    description: 'Despliegue completo, capacitación a tu equipo y soporte continuo post-lanzamiento.',
  },
]

// ── Proceso page — detailed stages ─────────────────────────────────────────
export const PROCESS_STAGES = [
  {
    number:     '01',
    iconName:   'Ear',
    iconLib:    'phosphor',
    title:      'Escucha y Diagnóstico',
    paragraphs: [
      'Todo empieza con una conversación real, no con un formulario. Nos reunimos contigo — de forma virtual o presencial en Chiclayo — para entender tu negocio, tus procesos actuales y el problema concreto que quieres resolver.',
      'Realizamos un levantamiento completo de requerimientos funcionales y no funcionales. Analizamos cómo trabaja hoy tu equipo y dónde están los cuellos de botella.',
      'Sin compromisos apresurados ni soluciones predefinidas. Escuchamos primero, proponemos después.',
    ],
    deliverable: 'Documento de requerimientos + propuesta económica sin compromiso',
    timeline:    '3 – 5 días hábiles',
  },
  {
    number:     '02',
    iconName:   'PenTool',
    iconLib:    'lucide',
    title:      'Diseño y Arquitectura',
    paragraphs: [
      'Con los requerimientos claros, diseñamos la base de datos, la arquitectura del sistema y los flujos de navegación. Elegimos el stack tecnológico más adecuado para tu caso específico.',
      'Construimos un prototipo visual (wireframes o mockups interactivos) que tú puedes revisar y aprobar antes de que escribamos una sola línea de código de producción.',
      'Este paso elimina sorpresas costosas más adelante. Lo que apruebas es lo que se construye.',
    ],
    deliverable: 'Prototipo aprobado + plan de desarrollo con hitos',
    timeline:    '1 – 2 semanas',
  },
  {
    number:     '03',
    iconName:   'Code2',
    iconLib:    'lucide',
    title:      'Desarrollo Iterativo',
    paragraphs: [
      'Desarrollamos por módulos con entregas parciales. Cada sprint termina con algo funcional que puedes ver, usar y comentar. No esperamos al final para mostrarte el trabajo.',
      'Mantenemos comunicación constante: avances por WhatsApp, acceso al entorno de pruebas, y reuniones de revisión cuando las necesites.',
      'Realizamos pruebas de calidad continuas en cada módulo antes de avanzar al siguiente. Los bugs se detectan temprano, no en producción.',
    ],
    deliverable: 'Módulos funcionales con acceso a entorno de pruebas',
    timeline:    'Variable según complejidad del proyecto',
  },
  {
    number:     '04',
    iconName:   'Rocket',
    iconLib:    'lucide',
    title:      'Lanzamiento y Soporte',
    paragraphs: [
      'Desplegamos el sistema en el servidor de producción, configuramos dominios, SSL, backups automáticos y todo lo necesario para que funcione de forma segura y estable.',
      'Capacitamos a tu equipo para que usen el sistema con confianza desde el primer día. Entregamos manual de usuario y videos de capacitación si el proyecto lo requiere.',
      'El soporte post-lanzamiento está incluido por el período acordado en el contrato. Estamos disponibles para resolver cualquier inconveniente que surja.',
    ],
    deliverable: 'Sistema en producción + manual de usuario + soporte incluido',
    timeline:    '1 semana para despliegue y capacitación',
  },
]

// ── Proceso page — tech stack ──────────────────────────────────────────────
export const TECH_STACK = [
  { category: 'Frontend',        items: ['React', 'Next.js', 'Inertia.js', 'React Native'] },
  { category: 'Backend',         items: ['Laravel', 'NestJS', 'Spring Boot'] },
  { category: 'Base de Datos',   items: ['PostgreSQL', 'MySQL'] },
  { category: 'Hosting',         items: ['Hetzner', 'VPS Linux'] },
  { category: 'Integraciones',   items: ['SUNAT', 'Yape/Plin', 'Culqi', 'Izipay'] },
]

// ── Why MacSoft (landing) ──────────────────────────────────────────────────
export const WHY_SECTION = {
  eyebrow: '¿Por qué elegirnos?',
  heading: '¿Por qué MacSoft?',
  subtext: 'Tres razones concretas por las que nuestros clientes nos eligen sobre cualquier otra opción.',
}

export const WHY_MACSOFT = [
  {
    iconName:    'Fingerprint',
    title:       '100% personalizado',
    description: 'No usamos plantillas ni soluciones genéricas. Cada línea de código está pensada y escrita para tu negocio.',
  },
  {
    iconName:    'MessageCircle',
    title:       'Comunicación directa',
    description: 'Hablas directamente con quien construye tu software. Sin intermediarios, sin malentendidos, sin sorpresas.',
  },
  {
    iconName:    'TrendingUp',
    title:       'Escalable desde el día 1',
    description: 'Arquitectura que crece con tu negocio. Lo que construimos hoy soporta tu visión de mañana.',
  },
]

// ── Clients ────────────────────────────────────────────────────────────────
export const CLIENTS_SECTION = {
  eyebrow: 'Clientes',
  heading: 'Empresas que confiaron en MacSoft',
  subtext: 'Proyectos reales, soluciones reales, resultados reales.',
}

export const CLIENTS = [
  {
    name:        'Pollería Pollo Loco',
    sector:      'Restaurantes & Gastronomía',
    iconName:    'UtensilsCrossed',
    solution:    'Sistema POS y gestión de pedidos con GestVenin',
    description: 'Implementación de sistema de punto de venta con control de mesas, caja y reportes de ventas diarios.',
  },
  {
    name:        'Somavap Group E.I.R.L.',
    sector:      'Servicios Profesionales',
    iconName:    'Wrench',
    solution:    'Sistema de gestión con TallerHub',
    description: 'Digitalización de órdenes de servicio y control de inventario de repuestos para sus operaciones técnicas.',
  },
  {
    name:        'Centro de Arbitraje Galilea E.I.R.L.',
    sector:      'Legal & Arbitraje',
    iconName:    'Scale',
    solution:    'Sistema CARD ANKAWA — gestión de casos arbitrales',
    description: 'Plataforma web para gestión de expedientes arbitrales con flujos de trabajo por etapas, mesa de partes virtual y notificaciones automáticas a las partes.',
  },
]

// ── Final CTA ──────────────────────────────────────────────────────────────
export const FINAL_CTA = {
  heading: '¿Listo para digitalizar tu negocio?',
  subtext: 'Cuéntanos tu idea. La primera consulta es gratis.',
  cta:     'Escríbenos por WhatsApp',
}
