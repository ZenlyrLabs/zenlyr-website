import './Privacy.css'

export default function Privacy() {
  return (
    <div className="privacy-page page-transition">
      <section className="privacy-hero">
        <div className="privacy-hero-inner">
          <div className="section-label">Legal</div>
          <h1>Privacy Policy</h1>
          <p className="privacy-meta">
            Effective date: April 10, 2026 &nbsp;&middot;&nbsp; Zenlyr Labs
          </p>
          <div className="privacy-divider" />
          <div className="highlight-box">
            <p>
              Zenlyr Labs builds AI software for professionals. We are committed
              to being transparent about how our products handle your data. The
              short version: we do not sell your data, we do not store your
              content, and we collect only what is necessary to operate our
              services.
            </p>
          </div>
        </div>
      </section>

      <section className="privacy-content">
        <div className="privacy-content-inner">
          <div className="policy-section">
            <h2>1. Who We Are</h2>
            <p>
              Zenlyr Labs is a software company based in Dallas-Fort Worth,
              Texas, USA. We build AI-powered productivity tools for
              professionals and businesses. Our products include Podium (AI
              LinkedIn content creation), BrandGuard (brand protection), and
              SmartAgentPro (AI contact center solutions).
            </p>
            <p>
              For privacy inquiries, contact us at:{' '}
              <a href="mailto:hello@zenlyr.com">hello@zenlyr.com</a>
            </p>
          </div>

          <div className="policy-section">
            <h2>2. Information We Collect</h2>
            <p>We collect only what is necessary to provide our services:</p>
            <ul>
              <li>
                <strong>Content you provide:</strong> Topics, writing prompts,
                and LinkedIn profile information you submit to generate content.
                This is processed in real time and not stored on our servers.
              </li>
              <li>
                <strong>Usage data:</strong> Anonymous analytics such as page
                views and feature usage, collected via Google Analytics 4. No
                personally identifiable information is associated with these
                events.
              </li>
              <li>
                <strong>Contact information:</strong> If you contact us or
                submit a lead form, we collect your name and email address to
                respond to your inquiry.
              </li>
              <li>
                <strong>Technical data:</strong> Standard server logs including
                IP addresses and request metadata, retained for up to 30 days
                for security and debugging purposes.
              </li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>
                To generate AI-powered content on your behalf using the
                Anthropic Claude API
              </li>
              <li>To respond to inquiries and provide customer support</li>
              <li>
                To understand how our products are used and improve them
              </li>
              <li>
                To maintain the security and reliability of our services
              </li>
            </ul>
            <p>
              We do not use your content to train AI models. Content submitted
              to our tools is passed to the Anthropic Claude API for processing
              and is subject to{' '}
              <a
                href="https://www.anthropic.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anthropic's Privacy Policy
              </a>
              .
            </p>
          </div>

          <div className="policy-section">
            <h2>4. The Podium MCP Server</h2>
            <p>
              The Podium MCP (Model Context Protocol) server is a connector that
              allows Claude AI to call Podium's content generation tools. When
              you use Podium via the Claude connector:
            </p>
            <ul>
              <li>
                Requests are routed through Anthropic's infrastructure to our
                server
              </li>
              <li>
                Content inputs (topics, profiles, post text) are processed in
                memory and not stored
              </li>
              <li>
                No user authentication is required — the server does not collect
                or store user identifiers
              </li>
              <li>Standard server logs are retained for up to 30 days</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>5. Data Sharing</h2>
            <p>
              We do not sell your personal data. We share data only with the
              following service providers, strictly to operate our products:
            </p>
            <ul>
              <li>
                <strong>Anthropic:</strong> AI content generation via the Claude
                API
              </li>
              <li>
                <strong>GNews:</strong> Trending news article retrieval
              </li>
              <li>
                <strong>Google Analytics:</strong> Anonymous usage analytics
              </li>
              <li>
                <strong>Railway:</strong> Cloud infrastructure and hosting
              </li>
              <li>
                <strong>Netlify:</strong> Frontend hosting
              </li>
              <li>
                <strong>Supabase:</strong> Backend database and authentication
                (where applicable)
              </li>
              <li>
                <strong>Resend:</strong> Transactional email delivery
              </li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>6. Data Retention</h2>
            <p>We retain data only as long as necessary:</p>
            <ul>
              <li>
                Content submitted for AI processing: not stored — processed and
                discarded immediately
              </li>
              <li>Server logs: up to 30 days</li>
              <li>
                Contact and lead form submissions: retained until you request
                deletion
              </li>
              <li>
                Analytics data: retained per Google Analytics default settings
                (up to 14 months)
              </li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>7. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access,
              correct, or delete personal data we hold about you. To exercise
              any of these rights, contact us at{' '}
              <a href="mailto:hello@zenlyr.com">hello@zenlyr.com</a> and we
              will respond within 30 days.
            </p>
          </div>

          <div className="policy-section">
            <h2>8. Cookies</h2>
            <p>
              Our website uses cookies for analytics (Google Analytics 4) and to
              remember your preferences. You may disable cookies in your browser
              settings at any time. We do not use advertising cookies or
              third-party tracking cookies.
            </p>
          </div>

          <div className="policy-section">
            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not directed at children under the age of 13. We
              do not knowingly collect personal data from children. If you
              believe we have inadvertently collected such data, please contact
              us immediately at{' '}
              <a href="mailto:hello@zenlyr.com">hello@zenlyr.com</a>.
            </p>
          </div>

          <div className="policy-section">
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do,
              we will update the effective date at the top of this page.
              Continued use of our services after any changes constitutes
              acceptance of the updated policy.
            </p>
          </div>

          <div className="policy-section">
            <h2>11. Contact</h2>
            <p>
              For any privacy-related questions or requests, contact us at:
            </p>
            <ul>
              <li>
                Email:{' '}
                <a href="mailto:hello@zenlyr.com">hello@zenlyr.com</a>
              </li>
              <li>
                Website: <a href="https://zenlyr.com">zenlyr.com</a>
              </li>
              <li>
                Mailing address: Zenlyr Labs, Dallas-Fort Worth, Texas, USA
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
