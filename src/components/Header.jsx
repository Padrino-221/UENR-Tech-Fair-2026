import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, REGISTER_LINKS, IMAGES } from '../data/content';
import './Header.css';

export default function Header({ onOpenModal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={IMAGES.logo} alt="UENR Tech Fair Logo" />
          </Link>
        </div>

        <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {NAV_ITEMS.map(item => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a href="#">Register <i className="fas fa-chevron-down"></i></a>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.ul
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {REGISTER_LINKS.map(link => (
                      <li key={link.label}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>
          <button className="btn btn-primary btn-header" onClick={onOpenModal}>
            Repping Flyer <i className="fas fa-arrow-right"></i>
          </button>
        </nav>

        <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul className="mobile-nav-list">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="mobile-register-section">
                <span className="mobile-register-label">Register</span>
                {REGISTER_LINKS.map(link => (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                ))}
              </li>
              <li>
                <button className="btn btn-primary btn-full" onClick={() => { setMenuOpen(false); onOpenModal(); }}>
                  Repping Flyer <i className="fas fa-arrow-right"></i>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
