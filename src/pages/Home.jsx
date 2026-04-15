import { useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const products = [
  {
    name: 'Podium',
    desc: 'AI-powered LinkedIn content creation tool. Generate professional posts, carousels, and thought leadership content that resonates with your audience.',
    tag: 'Content Creation',
    url: 'https://getpodium.netlify.app',
    icon: '✦',
    gradient: 'linear-gradient(135deg, rgba(200,168,75,0.15) 0%, rgba(200,168,75,0.03) 60%, transparent 100%)',
  },
  {
    name: 'BrandGuard',
    desc: 'Intelligent brand protection platform. Monitor, detect, and respond to brand threats across the digital landscape in real time.',
    tag: 'Brand Protection',
    icon: '◆',
    gradient: 'linear-gradient(135deg, rgba(100,140,200,0.12) 0%, rgba(200,168,75,0.05) 60%, transparent 100%)',
  },
  {
    name: 'SmartAgentPro.ai',
    desc: 'AI-driven contact center solution. Transform customer interactions with intelligent agents that understand, learn, and deliver results.',
    tag: 'Contact Center AI',
    url: 'https://smartagentpro.ai',
    icon: '●',
    gradient: 'linear-gradient(135deg, rgba(160,120,200,0.12) 0%, rgba(200,168,75,0.05) 60%, transparent 100%)',
  },
]

const marqueeItems = [
  'Podium', 'BrandGuard', 'SmartAgentPro', 'AI-Powered',
  'Built for Professionals', 'Zenlyr Labs',
]

const stats = [
  { end: 3, label: 'AI Products', suffix: '' },
  { end: 1, label: 'MCP Connector', suffix: '' },
  { end: null, label: 'Possibilities', display: '∞' },
]

/* ── Count-up hook ─────────────────────────────── */
function useCountUp(ref, end, duration = 1600) {
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || end === null) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            el.textContent = Math.round(eased * end)
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, end, duration])
}

function StatBlock({ stat, className }) {
  const numRef = useRef(null)
  useCountUp(numRef, stat.end)

  return (
    <div className={`v-block ${className} reveal`}>
      <span className="v-number" ref={numRef}>
        {stat.display || '0'}
      </span>
      <span className="v-label">{stat.label}</span>
    </div>
  )
}

/* ── Scroll reveal ─────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ── Particles ─────────────────────────────────── */
function HeroParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const W = () => canvas.offsetWidth
    const H = () => canvas.offsetHeight

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * W(),
        y: Math.random() * H(),
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.2 - 0.1,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, W(), H())
      for (const p of particles) {
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0) p.x = W()
        if (p.x > W()) p.x = 0
        if (p.y < 0) p.y = H()
        if (p.y > H()) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,168,75,${p.opacity})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-particles" />
}

/* ── Marquee ───────────────────────────────────── */
function Marquee() {
  const row = marqueeItems.map((item, i) => (
    <span key={i} className="marquee-item">
      {item} <span className="marquee-dot">·</span>
    </span>
  ))

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {row}{row}{row}{row}
      </div>
    </div>
  )
}

/* ── Main ──────────────────────────────────────── */
export default function Home() {
  useScrollReveal()

  return (
    <div className="home page-transition">
      {/* Hero */}
      <section className="hero">
        <HeroParticles />
        <div className="hero-gradient-mesh" />
        <div className="hero-inner">
          <div className="hero-badge hero-stagger s1">Introducing Zenlyr Labs</div>
          <h1 className="hero-title hero-stagger s2">
            AI software that powers
            <span className="hero-accent"> professionals</span> and
            <span className="hero-accent"> businesses</span>
          </h1>
          <p className="hero-subtitle hero-stagger s3">
            We build intelligent tools that help professionals work smarter,
            protect brands, and transform customer experiences through the
            power of artificial intelligence.
          </p>
          <div className="hero-actions hero-stagger s4">
            <Link to="/products" className="btn-primary">
              Explore Products
              <span className="btn-arrow">→</span>
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-glow" />
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Products Showcase */}
      <section className="showcase">
        <div className="showcase-inner">
          <div className="section-label reveal">Our Products</div>
          <h2 className="section-title reveal">
            Built for the future of work
          </h2>
          <p className="section-subtitle reveal">
            Three powerful AI products, each designed to solve a specific
            challenge that professionals and businesses face every day.
          </p>

          <div className="product-grid">
            {products.map((p, i) => (
              <div key={p.name} className={`product-card reveal reveal-d${i + 1}`}>
                <div className="card-gradient-visual" style={{ background: p.gradient }}>
                  <div className="card-visual-icon">{p.icon}</div>
                  <div className="card-visual-ring" />
                </div>
                <div className="card-icon">{p.icon}</div>
                <span className="card-tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="card-link">
                    Visit {p.name} <span>→</span>
                  </a>
                ) : (
                  <span className="card-link muted">Coming Soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="about-preview-inner">
          <div className="about-content reveal">
            <div className="section-label">About Us</div>
            <h2 className="section-title">
              Where intelligence meets craft
            </h2>
            <p>
              At Zenlyr Labs, we believe artificial intelligence should amplify
              human potential, not replace it. We craft premium AI software that
              integrates seamlessly into professional workflows, delivering
              measurable impact from day one.
            </p>
            <Link to="/about" className="text-link">
              Read our story <span>→</span>
            </Link>
          </div>
          <div className="about-visual">
            <div className="visual-grid">
              {stats.map((s, i) => (
                <StatBlock key={s.label} stat={s} className={`v${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner reveal">
          <h2>Ready to transform your workflow?</h2>
          <p>
            Discover how Zenlyr Labs' AI products can elevate your business.
          </p>
          <Link to="/contact" className="btn-primary large">
            Get in Touch
            <span className="btn-arrow">→</span>
          </Link>
        </div>
        <div className="cta-glow" />
      </section>
    </div>
  )
}
