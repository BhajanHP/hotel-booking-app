import React from 'react';
import './Hero.css';
import landingPage from '../images/landing-page.jpeg';

const Hero = () => {
  return (
    <section className="hero" id="hero">

      {/* Background */}
      <div className="hero__bg">
        <img src={landingPage} alt="Luxury hotel Chikmagaluru" />
        <div className="hero__overlay" />
      </div>

      {/* Scan line effect */}
      <div className="hero__scanline" />

      {/* Ambient orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      {/* Diagonal deco lines */}
      <div className="hero__deco-lines" />

      {/* Floating particles */}
      <div className="hero__particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Main content */}
      <div className="hero__content">

        {/* Label */}
        <div className="hero__label">
          <div className="label-line" />
          <div className="label-badge">
            <div className="label-dot" />
            <span>Stay In Style · Chikmagaluru</span>
          </div>
        </div>

        {/* Title */}
        <div className="hero__title-wrap">
          <h1 className="hero__title">
            <span className="line">Elegant Stays,</span>
            <span className="line">
              <span className="gold-text">Misty Coffee Hills</span>
            </span>
            <span className="line">& Unforgettable</span>
            <span className="line">Experiences</span>
          </h1>
        </div>

        {/* Ornament */}
        <div className="hero__ornament">
          <div className="hero__ornament-line" />
          <div className="hero__ornament-diamond" />
          <div className="hero__ornament-line hero__ornament-line--r" />
        </div>

        {/* Description */}
        <p className="hero__desc">
          Wake up to misty mornings, breathtaking mountain landscapes, and luxurious
          comfort in the heart of Chikmagaluru — where nature meets refined elegance.
        </p>

        {/* Rating */}
        <div className="hero__rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 24 24" fill="#c9a97a" width="16" height="16">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <div className="hero__rating-divider" />
          <span>1,000+ Happy Guests</span>
        </div>

        {/* Actions */}
        <div className="hero__actions">
          <button className="hero__btn">
            <span>Watch Video</span>
            <span className="hero__btn-arrow">→</span>
          </button>

          <button className="hero__play">
            <div className="play-circle">
              <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            {/* <span>Watch Video</span> */}
          </button>
        </div>
      </div>

      {/* Vertical dots nav */}
      <div className="hero__dots">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`dot ${i === 2 ? 'active' : ''}`} />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>

      {/* Rotating badge */}
      <div className="hero__badge">
        <div className="hero__badge-ring">
          <svg viewBox="0 0 100 100">
            <defs>
              <path id="circle-text" d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"/>
            </defs>
            <text fontSize="8.5" fill="rgba(201,169,122,0.7)" letterSpacing="3.2">
              <textPath href="#circle-text">LUXURY STAY · CHIKMAGALURU ·</textPath>
            </text>
          </svg>
        </div>
        <div className="hero__badge-center">
          <strong>★</strong>
          <small>Luxury<br/>Stay</small>
        </div>
      </div>

    </section>
  );
};

export default Hero;