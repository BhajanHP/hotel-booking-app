import React, { useEffect, useRef, useState } from 'react';
import './Facilities.css';

const facilities = [
  {
    title: 'Taxi Service',
    desc: 'Enjoy safe, reliable, and hassle-free travel with our convenient local taxi services.',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
    tag: 'Transport',
    color: '#e8b86d',
  },
  {
    title: 'Tourist Guide',
    desc: 'Discover hidden gems and iconic attractions with experienced local guides by your side.',
    img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80',
    tag: 'Experience',
    color: '#8de8a0',
  },
  {
    title: 'Bike Rental',
    desc: 'Explore the beauty of Chikmagaluru with comfortable and well-maintained bikes for every adventure.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    tag: 'Adventure',
    color: '#e88d6d',
  },
];

const FacilityCard = ({ f, index, visible }) => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={cardRef}
      className={`fac-card ${visible ? 'fac-card--visible' : ''} ${hovered ? 'fac-card--hovered' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div
        className="fac-card__spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${f.color}18 0%, transparent 65%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="fac-card__img-wrap">
        <img src={f.img} alt={f.title} className="fac-card__img" />
        <div className="fac-card__img-overlay" />
        <div className="fac-card__tag" style={{ borderColor: f.color, color: f.color }}>
          {f.tag}
        </div>
      </div>

      <div className="fac-card__body">
        <h3 className="fac-card__title">{f.title}</h3>
        <p className="fac-card__desc">{f.desc}</p>
      </div>

      <div className="fac-card__line" style={{ background: f.color }} />
    </div>
  );
};

const Facilities = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`facilities ${visible ? 'facilities--visible' : ''}`} id="facilities" ref={sectionRef}>
      <div className="fac-grid-bg" />
      <div className="fac-orb fac-orb--1" />
      <div className="fac-orb fac-orb--2" />

      <div className="fac-header">
        <div className="fac-header__eyebrow">
          <div className="fac-header__line" />
          <span>Facilities</span>
          <div className="fac-header__line" />
        </div>
        <h2 className="fac-header__title">
          Our Residency <em>Facilities</em>
        </h2>
        <p className="fac-header__sub">
          Everything you need for the perfect stay, curated with care.
        </p>
      </div>

      <div className="fac-grid">
        {facilities.map((f, i) => (
          <FacilityCard key={f.title} f={f} index={i} visible={visible} />
        ))}
      </div>

      <div className="fac-deco fac-deco--tl" />
      <div className="fac-deco fac-deco--br" />
    </section>
  );
};

export default Facilities;