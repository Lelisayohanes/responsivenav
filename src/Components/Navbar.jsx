import { useState } from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-section">Logo</div>
      <div className={`link-list ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className={`link-section ${isMobileMenuOpen ? 'open' : ''}`}>
          <li>
            <a href="/" className={window.location.pathname === '/' ? 'active' : ''}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" className={window.location.pathname === '/about' ? 'active' : ''}>
              About
            </a>
          </li>
          <li>
            <a href="/services" className={window.location.pathname === '/services' ? 'active' : ''}>
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className={window.location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="btn-section">login</div>
      <button className={`menu-button ${isMobileMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <span className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}></span>
      </button>
      {isMobileMenuOpen && (
        <>
          <button className="close-button" onClick={handleMenuClose}>
            Close
          </button>
          <div className="menu-overlay" onClick={handleMenuClose}></div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
