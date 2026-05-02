import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Pages', dropdown: ['About Us', 'Gallery', 'Blog', 'FAQ'] },
    { label: 'Services', dropdown: ['Taxi Service', 'Tourist Guide', 'Bike Rental', 'Spa & Wellness'] },
    { label: 'Room', dropdown: ['Deluxe Room', 'King Room', 'Suite Room', 'Family Room'] },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__logo">
        <div className="navbar__logo-icon">
          <svg viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="#c9a97a" strokeWidth="1.5"/>
            <path d="M12 28V18l8-8 8 8v10H24v-6h-8v6H12z" fill="#c9a97a"/>
            <path d="M20 10l-2 2M20 10l2 2" stroke="#c9a97a" strokeWidth="1.5"/>
            <circle cx="20" cy="9" r="2" fill="#c9a97a"/>
          </svg>
        </div>
        <div className="navbar__logo-text">
          <span className="logo-hotel">Hotel</span><span className="logo-lux">lux</span>
          <small>Hotel & Resort Booking</small>
        </div>
      </div>

      <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <li
            key={link.label}
            className={link.dropdown ? 'has-dropdown' : ''}
            onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a href={link.href || '#'} className={link.label === 'Home' ? 'active' : ''}>
              {link.label}
              {link.dropdown && <span className="chevron">›</span>}
            </a>
            {link.dropdown && openDropdown === link.label && (
              <ul className="dropdown">
                {link.dropdown.map((item) => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="navbar__actions">
        <button className="icon-btn" aria-label="Search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
        </button>
        <button className="icon-btn cart-btn" aria-label="Cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <span className="cart-badge">02</span>
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
