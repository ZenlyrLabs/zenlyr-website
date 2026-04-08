import { Link } from 'react-router-dom'
import './Home.css'

const products = [
  {
    name: 'Podium',
    desc: 'AI-powered LinkedIn content creation tool. Generate professional posts, carousels, and thought leadership content that resonates with your audience.',
    tag: 'Content Creation',
    url: 'https://getpodium.netlify.app',
    icon: '✦',
  },
  {
    name: 'BrandGuard',
    desc: 'Intelligent brand protection platform. Monitor, detect, and respond to brand threats across the digital landscape in real time.',
    tag: 'Brand Protection',
    icon: '◆',
  },
  {
    name: 'SmartAgentPro.ai',
    desc: 'AI-driven contact center solution. Transform customer interactions with intelligent agents that understand, learn, and deliver results.',
    tag: 'Contact Center AI',
    icon: '●',
  },
]

export default function Home() {
  return (
    <div className="home page-transition">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">Introducing Zenlyr Labs</div>
          <h1 className="hero-title">
            AI software that powers
            <span className="hero-accent"> professionals</span> and
            <span className="hero-accent"> businesses</span>
          </h1>
          <p className="hero-subtitle">
            We build intelligent tools that help professionals work smarter,
            protect brands, and transform customer experiences through the
            power of artificial intelligence.
          </p>
          <div className="hero-actions">
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

      {/* Products Showcase */}
      <section className="showcase">
        <div className="showcase-inner">
          <div className="section-label">Our Products</div>
          <h2 className="section-title">
            Built for the future of work
          </h2>
          <p className="section-subtitle">
            Three powerful AI products, each designed to solve a specific
            challenge that professionals and businesses face every day.
          </p>

          <div className="product-grid">
            {products.map((p) => (
              <div key={p.name} className="product-card">
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
          <div className="about-content">
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
              <div className="v-block v1">
                <span className="v-number">3</span>
                <span className="v-label">AI Products</span>
              </div>
              <div className="v-block v2">
                <span className="v-number">∞</span>
                <span className="v-label">Possibilities</span>
              </div>
              <div className="v-block v3">
                <span className="v-number">1</span>
                <span className="v-label">Mission</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
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
