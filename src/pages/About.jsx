import { Link } from 'react-router-dom'
import './About.css'

const values = [
  {
    title: 'Craftsmanship',
    desc: 'Every product we build reflects a deep commitment to quality. We sweat the details because the details are what separate good from extraordinary.',
    icon: '◈',
  },
  {
    title: 'Impact First',
    desc: 'We measure success by the tangible value we deliver. If it doesn\'t make a real difference for our users, we go back to the drawing board.',
    icon: '◇',
  },
  {
    title: 'Thoughtful AI',
    desc: 'We believe AI should augment human capability, not replace it. Our products are designed to make professionals more effective, not obsolete.',
    icon: '○',
  },
  {
    title: 'Transparency',
    desc: 'We build trust through openness. Our users always know how our AI works, what data it uses, and why it makes the recommendations it does.',
    icon: '△',
  },
]

export default function About() {
  return (
    <div className="about-page page-transition">
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="section-label">About Zenlyr Labs</div>
          <h1>Building AI that elevates</h1>
          <p>
            We're a team of engineers, designers, and thinkers building
            intelligent software that empowers professionals to do their
            best work.
          </p>
        </div>
      </section>

      <section className="vision-section">
        <div className="vision-inner">
          <div className="vision-block">
            <h2>Our Vision</h2>
            <p>
              A world where artificial intelligence seamlessly amplifies
              human expertise — where every professional has access to
              intelligent tools that unlock their full potential and let
              them focus on what truly matters.
            </p>
          </div>
          <div className="vision-block">
            <h2>Our Mission</h2>
            <p>
              To design and deliver premium AI software products that
              solve real problems for professionals and businesses. We
              bridge the gap between cutting-edge AI research and practical,
              everyday workflows — making powerful technology accessible,
              intuitive, and impactful.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="values-inner">
          <div className="section-label">What Drives Us</div>
          <h2 className="section-title">Our values</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="approach-inner">
          <div className="approach-content">
            <div className="section-label">Our Approach</div>
            <h2 className="section-title">Product-led innovation</h2>
            <p>
              At Zenlyr Labs, we don't build technology for technology's sake.
              Every product starts with a real problem faced by real
              professionals. We listen, we research, we prototype, and we
              iterate until we've built something that genuinely transforms
              how people work.
            </p>
            <p>
              Our portfolio spans content creation, brand protection, and
              customer experience — three domains where AI can deliver
              outsized impact. Each product operates independently but
              shares a common foundation of quality, intelligence, and
              thoughtful design.
            </p>
          </div>
          <div className="approach-visual">
            <div className="approach-card">
              <div className="approach-step">01</div>
              <h4>Identify</h4>
              <p>Find real problems worth solving</p>
            </div>
            <div className="approach-card">
              <div className="approach-step">02</div>
              <h4>Design</h4>
              <p>Craft elegant, intuitive solutions</p>
            </div>
            <div className="approach-card">
              <div className="approach-step">03</div>
              <h4>Build</h4>
              <p>Engineer with precision and care</p>
            </div>
            <div className="approach-card">
              <div className="approach-step">04</div>
              <h4>Refine</h4>
              <p>Iterate based on real feedback</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-inner">
          <h2>Let's build the future together</h2>
          <p>
            Interested in what we're building? We'd love to hear from you.
          </p>
          <Link to="/contact" className="btn-primary large">
            Get in Touch <span className="btn-arrow">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
