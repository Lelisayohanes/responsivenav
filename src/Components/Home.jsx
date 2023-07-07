import '../Styles/Home.css'; // Import the CSS file
import { toggleNavbar } from '../assets/Action/ToggleAction'; // Import the toggleNavbar function

const Home = () => {
  const handleNavbarClick = () => {
    toggleNavbar();
  };

  return (
    <div>
      <header className="header ">
        <img
          src="../../src/assets/images/logo 1.png"
          className="logo"
          alt="Logo"
        />
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <a className="navbar-link" href="">
                Home
              </a>
            </li>
            <li>
              <a className="navbar-link" href="">
                About
              </a>
            </li>
            <li>
              <a className="navbar-link" href="">
                Contact
              </a>
            </li>
            <li>
              <a className="navbar-link" href="">
                Services
              </a>
            </li>
          </ul>
        </nav>
        <div className="mobile-navbar-btn" onClick={handleNavbarClick}>
          <i className="mobile-nav-icon menu-open">
            <img
              src="../../src/assets/images/menu_FILL0_wght400_GRAD0_opsz48.png"
              className="mobile-nav-icon"
              alt="menu"
            />
          </i>
          <i>
            <img
              className="mobile-nav-icon menu-close"
              src="../../src/assets/images/close_FILL0_wght400_GRAD0_opsz48.png"
              alt="menu"
            />
          </i>
        </div>
      </header>
    </div>
  );
};

export default Home;
