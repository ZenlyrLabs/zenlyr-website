import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-page page-transition">
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="section-label">Contact</div>
          <h1>Let's start a conversation</h1>
          <p>
            Have a question about our products or want to explore a partnership?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-main-inner">
          <div className="contact-info">
            <div className="info-card">
              <h3>Email</h3>
              <p>hello@zenlyrlabs.com</p>
            </div>
            <div className="info-card">
              <h3>Location</h3>
              <p>Remote-first company<br />Global team</p>
            </div>
            <div className="info-card">
              <h3>Response Time</h3>
              <p>We typically respond within 24 hours on business days.</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="success-message">
                <span className="success-icon">✓</span>
                <h3>Message sent</h3>
                <p>Thank you for reaching out. We'll get back to you shortly.</p>
                <button className="btn-secondary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us more..."
                  />
                </div>
                <button type="submit" className="btn-primary large">
                  Send Message <span className="btn-arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
