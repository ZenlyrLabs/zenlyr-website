import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

const products = [
  {
    name: 'Podium',
    tagline: 'Your AI-powered LinkedIn content partner',
    description:
      'Podium helps professionals create compelling LinkedIn content effortlessly. From thought leadership posts to engaging carousels, Podium understands your voice and crafts content that builds your personal brand and drives meaningful engagement.',
    features: [
      'AI-generated posts tailored to your voice',
      'Carousel and document creation',
      'Content calendar and scheduling',
      'Performance analytics and insights',
    ],
    tag: 'Content Creation',
    status: 'Live',
    url: 'https://getpodium.netlify.app',
    icon: '✦',
    image: 'https://source.unsplash.com/800x500/?linkedin,professional,laptop,writing',
  },
  {
    name: 'BrandGuard',
    tagline: 'Intelligent brand protection, always on',
    description:
      'BrandGuard monitors the digital landscape to protect your brand reputation. Using advanced AI, it detects potential threats, trademark infringements, and unauthorized use of your brand assets before they become problems.',
    features: [
      'Real-time brand monitoring',
      'AI-powered threat detection',
      'Automated takedown workflows',
      'Comprehensive reporting dashboard',
    ],
    tag: 'Brand Protection',
    status: 'Coming Soon',
    icon: '◆',
    image: 'https://source.unsplash.com/800x500/?security,shield,protection,digital',
  },
  {
    name: 'SmartAgentPro.ai',
    tagline: 'AI agents that transform customer experience',
    description:
      'SmartAgentPro.ai brings the power of AI to contact centers. Deploy intelligent virtual agents that handle customer inquiries with human-like understanding, reducing wait times and improving satisfaction scores across every channel.',
    features: [
      'Intelligent virtual agents',
      'Omnichannel support integration',
      'Real-time sentiment analysis',
      'Seamless human handoff',
    ],
    tag: 'Contact Center AI',
    status: 'Live',
    url: 'https://smartagentpro.ai',
    icon: '●',
    image: 'https://source.unsplash.com/800x500/?customer-service,contact-center,headset,AI',
  },
]

function ProductMockup({ product }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className="product-mockup">
      <div className="mockup-header">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
      <div className="mockup-body">
        {!imgFailed ? (
          <>
            <img
              src={product.image}
              alt={`${product.name} preview`}
              className="mockup-image"
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
            <div className="mockup-overlay" />
          </>
        ) : (
          <div className="mockup-fallback">
            <div className="mockup-icon">{product.icon}</div>
            <div className="mockup-name">{product.name}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <div className="products-page page-transition">
      <section className="products-hero">
        <div className="products-hero-inner">
          <div className="section-label">Products</div>
          <h1>AI products built with purpose</h1>
          <p>
            Each product in the Zenlyr Labs suite is designed to solve a specific,
            meaningful problem — delivering real value through intelligent automation.
          </p>
        </div>
      </section>

      <section className="products-list">
        <div className="products-list-inner">
          {products.map((product, i) => (
            <div key={product.name} className="product-detail">
              <div className="product-detail-content">
                <div className="product-detail-meta">
                  <span className="product-detail-icon">{product.icon}</span>
                  <span className="card-tag">{product.tag}</span>
                  <span className={`status-badge ${product.status === 'Live' ? 'live' : ''}`}>
                    {product.status}
                  </span>
                </div>
                <h2>{product.name}</h2>
                <p className="product-tagline">{product.tagline}</p>
                <p className="product-desc">{product.description}</p>
                <ul className="feature-list">
                  {product.features.map((f) => (
                    <li key={f}>
                      <span className="check">✓</span> {f}
                    </li>
                  ))}
                </ul>
                {product.url ? (
                  <a href={product.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Visit {product.name} <span className="btn-arrow">→</span>
                  </a>
                ) : (
                  <span className="btn-secondary disabled">Coming Soon</span>
                )}
              </div>
              <div className="product-detail-visual">
                <ProductMockup product={product} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="products-cta">
        <div className="products-cta-inner">
          <h2>Interested in our products?</h2>
          <p>Get in touch to learn more about how Zenlyr Labs can help your business.</p>
          <Link to="/contact" className="btn-primary large">
            Contact Us <span className="btn-arrow">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
