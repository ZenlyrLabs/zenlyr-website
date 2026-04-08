import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-icon">Z</span>
              <span className="logo-text">Zenlyr Labs</span>
            </Link>
            <p className="footer-tagline">
              AI software that powers professionals and businesses.
            </p>
          </div>

          <div className="footer-columns">
            <div className="footer-col">
              <h4>Products</h4>
              <Link to="/products">Podium</Link>
              <Link to="/products">BrandGuard</Link>
              <Link to="/products">SmartAgentPro.ai</Link>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Zenlyr Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
