import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from "../images/logo.png";

const navLinks = [
  { label: 'Home',       href: '#hero' },
  { label: 'About Us',   href: '#about' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Rooms',      href: '#rooms' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Contact',    href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const linksRef = useRef([]);

  // 🔹 Scroll effect (navbar background)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 🔹 Section observer (active link)
  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const found = navLinks.find(
              l => l.href === '#' + entry.target.id
            );
            if (found) setActive(found.label);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach(section => section && observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // 🔹 Indicator movement
  useEffect(() => {
    const idx = navLinks.findIndex(l => l.label === active);
    const el = linksRef.current[idx];

    if (el) {
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [active]);

  // 🔹 Handle click navigation
  const handleNav = (e, link) => {
    e.preventDefault();
    setActive(link.label);
    setMenuOpen(false);

    const target = document.querySelector(link.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-is-open' : ''}`}>
      
      {/* 🔹 Logo */}
      <div className="navbar__logo">
        <img src={logo} alt="MGM Residency" className="logo-img" />
      </div>

      {/* 🔹 Nav Links */}
      <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <li key={link.label}>
            <a
              href={link.href}
              ref={el => (linksRef.current[i] = el)}
              className={active === link.label ? 'active' : ''}
              onClick={(e) => handleNav(e, link)}
            >
              {link.label}
            </a>
          </li>
        ))}

        {/* 🔹 Sliding Indicator */}
        <div
          className="nav-indicator"
          style={{
            transform: `translateX(${indicatorStyle.left}px)`,
            width: `${indicatorStyle.width}px`,
          }}
        />
      </ul>

      {/* 🔹 Hamburger Menu */}
      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
};

export default Navbar;