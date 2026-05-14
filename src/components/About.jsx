import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import room1 from '../images/room1.jpeg';
import room2 from '../images/room2.jpeg';
import room3 from '../images/room3.jpeg';
import room4 from '../images/room4.jpeg';

const features = [
  { icon: '⭐', label: 'Best Rooms', sub: '5-Star Rated' },
  { icon: '✨', label: 'Luxury Stay', sub: 'Premium Comfort' },
];

const roomTypes = [
  { label: 'Delux Room', img: room1 },
  { label: 'Suite Room', img: room2 },
  { label: 'Executive Room', img: room3},
  { label: 'Delux Room', img: room4 },
];

const About = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveThumb((prev) => (prev + 1) % roomTypes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
    });
  };

  return (
    <section
      className={`about ${visible ? 'about--visible' : ''}`}
      id="about"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      {/* Ambient orbs */}
      <div className="about__orb about__orb--1" />
      <div className="about__orb about__orb--2" />

      <div className="about__grid">
        {/* ── Image Column ── */}
        <div className="about__images">
          {/* Main image with parallax tilt */}
          <div
            className="about__main-wrap"
            style={{ transform: `perspective(1000px) rotateY(${mousePos.x * 0.3}deg) rotateX(${-mousePos.y * 0.3}deg)` }}
          >
            <div className="about__main-img">
              <img
                src={roomTypes[activeThumb].img}
                alt="MGM Residency"
                key={activeThumb}
                className="about__main-fade"
              />
              <div className="about__main-overlay" />
              {/* Floating badge */}
              <div className="about__badge">
                <span className="about__badge-num">1+</span>
                <span className="about__badge-text">Years of<br />Excellence</span>
              </div>
              {/* Gold corner accents */}
              <div className="about__corner about__corner--tl" />
              <div className="about__corner about__corner--br" />
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="about__thumbs">
            {roomTypes.map((r, i) => (
              <button
                key={r.label}
                className={`about__thumb ${i === activeThumb ? 'about__thumb--active' : ''}`}
                onClick={() => setActiveThumb(i)}
              >
                <img src={r.img} alt={r.label} />
                <div className="about__thumb-overlay" />
                <span className="about__thumb-label">{r.label}</span>
                <div className="about__thumb-bar" />
              </button>
            ))}
          </div>
        </div>

        {/* ── Content Column ── */}
        <div className="about__content">
          <div className="about__eyebrow">
            <span className="about__line" />
            <span>About Us</span>
            <span className="about__line" />
          </div>

          <h2 className="about__title">
            <span className="about__title-line">Welcome To Our</span>
            <span className="about__title-line">Best <em>Luxury</em></span>
            <span className="about__title-line about__title-gold">Stay In The City.</span>
          </h2>

          <p className="about__desc">
            Welcome to <strong>MGM Residency</strong>, where luxury meets comfort in the heart of
            Chikkamagaluru. We have been dedicated to providing an exceptional stay for our guests,
            blending modern amenities with timeless elegance.
          </p>

          {/* Divider */}
          <div className="about__divider">
            <div className="about__divider-line" />
            <div className="about__divider-diamond" />
            <div className="about__divider-line" />
          </div>

          {/* Feature cards */}
          <div className="about__features">
            {features.map((f, i) => (
              <div
                className="about__feature"
                key={f.label}
                style={{ animationDelay: `${0.6 + i * 0.1}s` }}
              >
                <div className="about__feature-icon">{f.icon}</div>
                <div className="about__feature-text">
                  <span className="about__feature-label">{f.label}</span>
                  <span className="about__feature-sub">{f.sub}</span>
                </div>
                <div className="about__feature-glow" />
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="about__stats">
            {[['24/7', 'Customer Support'], ['5', 'Guest Rating'], ['1K+', 'Happy Guests']].map(([num, lbl]) => (
              <div className="about__stat" key={lbl}>
                <span className="about__stat-num">{num}</span>
                <span className="about__stat-lbl">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;