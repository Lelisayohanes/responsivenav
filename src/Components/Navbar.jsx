// Navbar.js
import { useState } from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-section">Logo</div>
      <div>
        <ul className={`link-section ${isMobileMenuOpen ? 'open' : ''}`}>
          <li>
            <a href="/" className={window.location.pathname === '/' ? 'active' : ''}>Home</a>
          </li>
          <li>
            <a href="/about" className={window.location.pathname === '/about' ? 'active' : ''}>About</a>
          </li>
          <li>
            <a href="/services" className={window.location.pathname === '/services' ? 'active' : ''}>Services</a>
          </li>
          <li>
            <a href="/contact" className={window.location.pathname === '/contact' ? 'active' : ''}>Contact</a>
          </li>
        </ul>
      </div>
      <div className='btn-section'>login</div>
      {!isMobileMenuOpen && (
        <button className="menu-button" onClick={handleMenuToggle}>
          <span className="menu-icon"></span>
        </button>
      )}
    </nav>
  );
};

export default Navbar;

