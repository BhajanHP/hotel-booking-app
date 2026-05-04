import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Pramod C V',
    location: 'Bengaluru',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    text: 'The stay at MGM Residency was absolutely amazing with world-class service made it a trip we will never forget.',
  },
  {
    name: 'Shruthi',
    location: 'Mysuru',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
    text: 'Exceptional hospitality, beautiful room, and a room that felt like home. The staff went above and beyond to ensure every moment of our trip was perfect.',
  },
  {
    name: 'Rahul Sharma',
    location: 'Mumbai',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    text: 'The perfect escape from city life. Coffee plantation views, fresh air, and impeccable service. This hotel truly lives up to its five-star reputation.',
  },
  {
    name: 'Suhas Y C',
    location: 'Bengaluru',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    text: 'Loved the bike rental and tourist guide services. Explored Chikmagaluru in the most authentic way possible. Will definitely be back next season.',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const pairs = [];
  for (let i = 0; i < testimonials.length; i += 2) pairs.push(testimonials.slice(i, i + 2));

  const prev = () => setCurrent((c) => (c - 1 + pairs.length) % pairs.length);
  const next = () => setCurrent((c) => (c + 1) % pairs.length);

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__header">
        <div>
          <p className="section-label">Our Client</p>
          <h2 className="section-title">
            What Our Guests Are Saying<br />About <span>Our Hotel</span>
          </h2>
        </div>
        <div className="testimonials__nav">
          <button onClick={prev} className="nav-arrow" aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button onClick={next} className="nav-arrow" aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative dot */}
      <div className="testi-dot" />

      <div className="testimonials__grid">
        {pairs[current].map((t) => (
          <div className="testi-card" key={t.name}>
            <div className="testi-card__top">
              <div className="testi-card__author">
                <div className="testi-avatar">
                  <img src={t.avatar} alt={t.name} />
                </div>
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.location}</span>
                  <div className="testi-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="#c9a97a" width="14" height="14">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="quote-mark">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
            </div>
            <p className="testi-text">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
