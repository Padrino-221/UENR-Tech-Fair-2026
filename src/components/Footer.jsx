import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../data/content';
import ScrollReveal from './ScrollReveal';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <ScrollReveal className="footer-about" delay={0}>
            <h3>UENR Tech Fair</h3>
            <p>Empowering the next generation of tech leaders through innovation, collaboration, and industry engagement.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
            </div>
          </ScrollReveal>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {NAV_ITEMS.map(item => (
                <li key={item.path}><Link to={item.path}>{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p><i className="fas fa-envelope"></i> techfair@uenr.edu.gh</p>
            <p><i className="fas fa-globe"></i> <a href="https://www.uenr.edu.gh">www.uenr.edu.gh</a></p>
            <p><i className="fas fa-map-marker-alt"></i> UENR, Fiapre, Sunyani, Ghana</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 UENR Tech Fair. All Rights Reserved. Organized by the Department of Information Technology and Decision Sciences (ITDS).</p>
        </div>
      </div>
    </footer>
  );
}
