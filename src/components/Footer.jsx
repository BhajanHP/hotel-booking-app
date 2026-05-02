import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__main">
        <div className="footer__brand">
          <div className="footer__logo">
            <svg viewBox="0 0 40 40" fill="none" width="36">
              <circle cx="20" cy="20" r="18" stroke="#c9a97a" strokeWidth="1.5"/>
              <path d="M12 28V18l8-8 8 8v10H24v-6h-8v6H12z" fill="#c9a97a"/>
              <circle cx="20" cy="9" r="2" fill="#c9a97a"/>
            </svg>
            <span className="footer-logo-text">
              <b>Hotel</b>lux
              <small>Hotel & Resort Booking</small>
            </span>
          </div>
          <p className="footer__tagline">
            Secure other greater pleasures, or else he endures pains to avoid worse pains selection.
          </p>
          <div className="footer__socials">
            {['facebook', 'twitter', 'instagram', 'pinterest'].map((s) => (
              <a key={s} href="#" className="social-link" aria-label={s}>
                {s === 'facebook' && <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>}
                {s === 'twitter' && <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>}
                {s === 'instagram' && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>}
                {s === 'pinterest' && <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {['About Us', 'Our Gallery', 'Help & FAQs', 'Blog', 'Contact'].map(link => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Our Services</h4>
          <ul>
            {['24/7 Front Desk', 'Parking', 'Room Service', 'Spa & Wellness', 'Concierge Service'].map(link => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Official Info</h4>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.25 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 013.16 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <p>(88) 574 7546 027</p>
                <p>(88) 574 7546 027</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <p>example@gmail.com</p>
                <p>example@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p>4517 Washington Ave.</p>
                <p>Manchester, 95</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© Copyright 2025 by <a href="#">Dreamlayout</a>. All Rights Reserved.</p>
        <div className="footer__bottom-links">
          <a href="#">Support</a>
          <a href="#">Terms and Condition</a>
          <a href="#">Privacy and Policy</a>
        </div>
      </div>

      {/* Decorative circle */}
      <div className="footer-deco" />
    </footer>
  );
};

export default Footer;
