import React, { useState, useEffect, useRef } from 'react';
import './Galary.css';
import room1 from '../images/1.jpeg';
import room2 from '../images/2.jpeg';
import room3 from '../images/3.jpeg';
import room4 from '../images/4.jpeg';
import room5 from '../images/5.jpeg';
import room6 from '../images/6.jpeg';
import room7 from '../images/7.jpeg';
import room8 from '../images/8.jpeg';
import room9 from '../images/9.jpeg';

const images = [
  { id: 1, src: room1,    orientation: 'landscape' },
  { id: 2, src: room2,    orientation: 'portrait'  },
  { id: 3, src: room3,   orientation: 'landscape' },
  { id: 4, src: room4,   orientation: 'landscape' },
  { id: 5, src: room5,    orientation: 'landscape' },
  { id: 6, src: room6,    orientation: 'landscape' },
  { id: 7, src: room7,    orientation: 'portrait'  },
  { id: 8, src: room8,  orientation: 'landscape' },
  { id: 9, src: room9,   orientation: 'landscape' },
];

export default function Gallery() {
  const [active,   setActive]   = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [visible,  setVisible]  = useState(false);
  const stripRef  = useRef(null);
  const sectionRef = useRef(null);
  const thumbRefs = useRef([]);

  // Reveal section on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Scroll active thumb into view
  useEffect(() => {
    const el = thumbRefs.current[active];
    if (el && stripRef.current) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [active]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (lightbox !== null) {
        if (e.key === 'Escape')     setLightbox(null);
        if (e.key === 'ArrowLeft')  setLightbox((i) => (i - 1 + images.length) % images.length);
        if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % images.length);
      } else {
        if (e.key === 'ArrowLeft')  setActive((i) => (i - 1 + images.length) % images.length);
        if (e.key === 'ArrowRight') setActive((i) => (i + 1) % images.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  const lbPrev = () => setLightbox((i) => (i - 1 + images.length) % images.length);
  const lbNext = () => setLightbox((i) => (i + 1) % images.length);

  return (
    <section className="gallery" id="gallery" ref={sectionRef}>

      {/* Header */}
      <div className={`gallery__header ${visible ? 'gallery__header--visible' : ''}`}>
        <p className="section-label">Our Property</p>
        <h2 className="section-title">Captured <span>Moments</span></h2>
        <p className="gallery__subtitle">
          A glimpse into the world of timeless comfort and natural splendour.
        </p>
      </div>

      {/* Hero Stage */}
      <div className={`gallery__stage ${visible ? 'gallery__stage--visible' : ''}`}>

        {/* Prev / Next */}
        <button className="gallery__arrow gallery__arrow--prev" onClick={prev}>&#8592;</button>
        <button className="gallery__arrow gallery__arrow--next" onClick={next}>&#8594;</button>

        {/* Hero Image */}
        <div className="gallery__hero" onClick={() => setLightbox(active)}>
          {images.map((img, idx) => (
            <div
              key={img.id}
              className={`gallery__hero-slide ${idx === active ? 'gallery__hero-slide--active' : ''}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className={img.orientation === 'portrait' ? 'img--portrait' : ''}
              />
            </div>
          ))}

          {/* Hero info bar */}
          <div className="gallery__hero-info">
            <span className="gallery__hero-label">{images[active].label}</span>
            <span className="gallery__hero-count">
              {String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            <span className="gallery__expand-hint">Click to expand</span>
          </div>
        </div>

        {/* Progress dots */}
        <div className="gallery__dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`gallery__dot ${idx === active ? 'gallery__dot--active' : ''}`}
              onClick={() => setActive(idx)}
            />
          ))}
        </div>
      </div>

      {/* Film Strip */}
      <div className={`gallery__strip-wrap ${visible ? 'gallery__strip-wrap--visible' : ''}`}>
        <div className="gallery__strip" ref={stripRef}>
          {images.map((img, idx) => (
            <div
              key={img.id}
              ref={(el) => (thumbRefs.current[idx] = el)}
              className={`gallery__thumb ${idx === active ? 'gallery__thumb--active' : ''}`}
              onClick={() => setActive(idx)}
            >
              <img src={img.src} alt={img.label} loading="lazy" />
              <div className="gallery__thumb-overlay" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox__box" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
            <button className="lightbox__nav lightbox__nav--prev" onClick={lbPrev}>&#8592;</button>
            <img
              key={lightbox}
              src={images[lightbox].src}
              alt={images[lightbox].label}
              className={`lightbox__img${images[lightbox].orientation === 'portrait' ? ' lightbox__img--portrait' : ''}`}
            />
            <button className="lightbox__nav lightbox__nav--next" onClick={lbNext}>&#8594;</button>
            <div className="lightbox__footer">
              <p className="lightbox__caption">{images[lightbox].label}</p>
              <span className="lightbox__counter">{lightbox + 1} / {images.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}