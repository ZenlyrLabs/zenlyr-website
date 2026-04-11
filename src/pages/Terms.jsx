import { Link } from 'react-router-dom'
import './Terms.css'

export default function Terms() {
  return (
    <div className="terms-page page-transition">
      <section className="privacy-hero">
        <div className="privacy-hero-inner">
          <div className="section-label">Legal</div>
          <h1>Terms of Service</h1>
          <p className="privacy-meta">
            Effective date: April 10, 2026 &nbsp;&middot;&nbsp; Zenlyr Labs
          </p>
          <div className="privacy-divider" />
          <div className="highlight-box">
            <p>
              By using any Zenlyr Labs product or service, you agree to these
              Terms of Service. Please read them carefully. If you do not agree,
              do not use our services.
            </p>
          </div>
        </div>
      </section>

      <section className="privacy-content">
        <div className="privacy-content-inner">
          <div className="policy-section">
            <h2>1. About Zenlyr Labs</h2>
            <p>
              Zenlyr Labs is a software company based in Dallas-Fort Worth,
              Texas, USA. We build AI-powered productivity tools for
              professionals and businesses, including Podium, BrandGuard, and
              SmartAgentPro. For questions, contact us at{' '}
              <a href="mailto:hello@zenlyr.com">hello@zenlyr.com</a>.
            </p>
          </div>

          <div className="policy-section">
            <h2>2. Acceptance of Terms</h2>
            <p>
              By accessing or using any Zenlyr Labs product — including Podium,
              the Podium MCP Server, BrandGuard, SmartAgentPro, or zenlyr.com —
              you agree to be bound by these Terms of Service and our{' '}
              <Link to="/privacy">Privacy Policy</Link>.
            </p>
          </div>

          <div className="policy-section">
            <h2>3. Use of Our Services</h2>
            <p>You may use our services for lawful purposes only. You agree not to:</p>
            <ul>
              <li>
                Use our services to generate content that is misleading,
                defamatory, harassing, or illegal
              </li>
              <li>
                Attempt to reverse engineer, scrape, or overload our
                infrastructure
              </li>
              <li>
                Use our services to spam, phish, or engage in any form of fraud
              </li>
              <li>
                Resell or sublicense access to our services without written
                permission
              </li>
              <li>
                Use our services in any way that violates applicable laws or
                regulations
              </li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. AI-Generated Content</h2>
            <p>
              Our products use AI to generate content based on your inputs. You
              are solely responsible for reviewing, editing, and publishing any
              AI-generated content. Zenlyr Labs makes no guarantees about the
              accuracy, originality, or suitability of AI-generated output.
            </p>
            <p>
              You retain ownership of content you create using our tools. By
              using our services, you grant Zenlyr Labs a limited license to
              process your inputs solely for the purpose of delivering the
              service.
            </p>
          </div>

          <div className="policy-section">
            <h2>5. Third-Party Services</h2>
            <p>
              Our products integrate with third-party services including the
              Anthropic Claude API and GNews. Your use of these integrations is
              also subject to the respective third-party terms of service. We
              are not responsible for the availability or conduct of third-party
              services.
            </p>
          </div>

          <div className="policy-section">
            <h2>6. Intellectual Property</h2>
            <p>
              All Zenlyr Labs software, branding, and website content is the
              intellectual property of Zenlyr Labs. You may not copy, reproduce,
              or distribute our materials without prior written consent.
            </p>
          </div>

          <div className="policy-section">
            <h2>7. Disclaimers</h2>
            <p>
              Our services are provided "as is" without warranties of any kind,
              express or implied. We do not guarantee uninterrupted or error-free
              service. We are not liable for any indirect, incidental, or
              consequential damages arising from your use of our services.
            </p>
          </div>

          <div className="policy-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Zenlyr Labs' total
              liability to you for any claims arising from your use of our
              services shall not exceed the amount you paid to us in the 12
              months preceding the claim, or $100, whichever is greater.
            </p>
          </div>

          <div className="policy-section">
            <h2>9. Changes to These Terms</h2>
            <p>
              We may update these Terms of Service from time to time. We will
              update the effective date at the top of this page. Continued use
              of our services after changes constitutes acceptance of the
              updated terms.
            </p>
          </div>

          <div className="policy-section">
            <h2>10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Texas, USA,
              without regard to conflict of law principles.
            </p>
          </div>

          <div className="policy-section">
            <h2>11. Contact</h2>
            <p>For any questions about these Terms, contact us at:</p>
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
