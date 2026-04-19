import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/navbar.css';

const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };
    
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      // Get actual navbar height dynamically
      const navbar = document.querySelector('#ftco-navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      // Add extra margin to prevent content from being hidden (20px extra)
      const offset = navbarHeight + 20;
      const targetPosition = target.offsetTop - offset;

      // Smooth scroll with CSS scroll-behavior
      document.documentElement.style.scrollBehavior = 'smooth';
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Reset scroll behavior after animation
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'auto';
      }, 1000);

      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: '#home-section', label: t('nav.home') },
    { href: '#about-section', label: t('nav.about') },
    { href: '#bases-section', label: t('nav.technologies') },
    { href: '#career-paths-section', label: t('nav.careers') },
    { href: '#skills-section', label: t('nav.roadmaps') },
    { href: '#events-section', label: t('nav.events') },
    { href: '#projects-section', label: t('nav.projects') },
    { href: '#contact-section', label: t('nav.contact') }
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg site-navbar-target ${isScrolled ? 'navbar-scrolled' : ''}`}
      id="ftco-navbar"
      style={{ background: '#000000' }}
    >
      <div className="container-navbar" style={{ justifyContent: 'center' }}>
        <button
          className={`navbar-toggler ${isMobileMenuOpen ? 'active' : ''}`}
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <div className="toggler-icons-group">
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
          </div>
          <span className="toggler-text">MENU</span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}
          id="ftco-nav"
          style={{ justifyContent: 'center', width: '100%' }}
        >
          {/* Background Video for Mobile Menu */}
          <div className="mobile-menu-bg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="mobile-bg-video"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="mobile-bg-overlay"></div>
          </div>

          <ul className="navbar-nav" style={{ margin: '0 auto' }}>
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;