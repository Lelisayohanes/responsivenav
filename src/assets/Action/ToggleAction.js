const toggleNavbar = () => {
    const mobile_nav = document.querySelector('.mobile-navbar-btn');
    const nav_header = document.querySelector('.header');
  
    if (mobile_nav && nav_header) {
      nav_header.classList.toggle('active');
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const mobile_nav = document.querySelector('.mobile-navbar-btn');
    
    if (mobile_nav) {
      mobile_nav.addEventListener('click', toggleNavbar);
    }
  });
  
  export { toggleNavbar };
  

