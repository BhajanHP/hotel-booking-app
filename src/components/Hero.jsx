import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Background overlay */}
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80"
          alt="Luxury hotel room"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <div className="hero__label">
          <div className="label-circle" />
          <span>Stay In Style</span>
        </div>

        <h1 className="hero__title">
          Elegant Stays, <span>Misty<br />Coffee Hills,</span> &<br />
          Unforgettable Chikmagaluru Experiences
        </h1>

        <p className="hero__desc">
          Wake up to misty mornings, breathtaking mountain landscapes, and luxurious comfort
          in the heart of Chikmagaluru. Enjoy peaceful nature retreats, cozy stays, and
          unforgettable moments surrounded by scenic beauty.
        </p>

        <div className="hero__rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 24 24" fill="#c9a97a" width="18" height="18">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <span>1,000 k+ Happy Guests</span>
        </div>

        <div className="hero__actions">
          <a href="#rooms" className="btn-primary">Book Now</a>
          <button className="hero__play">
            <div className="play-circle">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <span>Watch Video</span>
          </button>
        </div>
      </div>

      {/* Decorative vertical dots */}
      <div className="hero__dots">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`dot ${i === 2 ? 'active' : ''}`} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
