import React from 'react';
import './About.css';

const features = [
  { icon: '⭐', label: '350 Best Rooms 5 Star' },
  { icon: '☕', label: 'Breakfast each morning' },
  { icon: '🛁', label: 'Double Whirlpool Jacuzzi Tub' },
  { icon: '🍾', label: 'Wet Bar with Refrigerator' },
];

const roomTypes = [
  { label: 'King Room', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=70' },
  { label: 'Suits Room', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=70' },
  { label: 'City View', img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=70' },
  { label: 'Family Room', img: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=400&q=70' },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__grid">
        {/* Image side */}
        <div className="about__images">
          <div className="about__main-img">
            <img
              src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=700&q=80"
              alt="MGM Residency lobby"
            />
            <div className="about__img-accent" />
          </div>
          <div className="about__thumb-row">
            {roomTypes.map((r) => (
              <div className="about__thumb" key={r.label}>
                <img src={r.img} alt={r.label} />
                <span>{r.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content side */}
        <div className="about__content">
          <p className="section-label">About Us</p>
          <h2 className="section-title">
            Welcome To Our Best luxury<br />stay in <span>the city.</span>
          </h2>
          <p className="about__desc">
            Welcome to MGM Residency, where luxury meets comfort in the heart of
            Chikkamagaluru. We have been dedicated to providing an exceptional stay
            for our guests, blending modern amenities with timeless elegance.
          </p>

          <div className="about__features">
            {features.map((f) => (
              <div className="about__feature" key={f.label}>
                <div className="feature-icon">
                  <span>{f.icon}</span>
                </div>
                <span className="feature-label">{f.label}</span>
              </div>
            ))}
          </div>

          <a href="#rooms" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Explore Rooms
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
