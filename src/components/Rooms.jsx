import React, { useEffect, useRef } from 'react';
import './Rooms.css';
import delux from "../images/delux_room.jpeg";
import exe from "../images/exe_room.jpeg";
import suit from "../images/suit_room.jpeg";

const rooms = [
  {
    title: 'Deluxe Room',
    Total_Rooms: '4',
    adults: 2,
    child:1,
    img: delux,
    amenities: ['wifi', 'tv', 'ac'],
    tag: 'Popular',
  },
  {
    title: 'Suite Room',
    Total_Rooms: '2',
    adults: 2,
    child:1,
    img: suit,
    amenities: ['wifi', 'tv', 'ac'],
    featured: true,
    tag: 'Premium',
  },
  {
    title: 'Executive Room',
    Total_Rooms: '2',
    adults: 2,
    img: exe,
    amenities: ['wifi', 'tv', 'ac'],
    tag: 'Business',
  },
];

const amenityIcons = {
  wifi: {
    label: 'Free WiFi',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
        <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/>
      </svg>
    ),
  },
  tv: {
    label: 'Smart TV',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
        <rect x="2" y="7" width="20" height="15" rx="2"/><path d="M17 2l-5 5-5-5"/>
      </svg>
    ),
  },
  ac: {
    label: 'Air Conditioning',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
        <path d="M12 3v18M3 9l9-6 9 6M3 15l9 6 9-6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
};

const Rooms = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    cardsRef.current.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="rooms" id="rooms" ref={sectionRef}>

      {/* Background decoration */}
      <div className="rooms__bg-deco">
        <div className="rooms__bg-orb rooms__bg-orb--1" />
        <div className="rooms__bg-orb rooms__bg-orb--2" />
        <div className="rooms__bg-grid" />
      </div>

      {/* Header */}
      <div className="rooms__header">
        <div className="rooms__header-left">
          <div className="rooms__label-row">
            <div className="rooms__label-line" />
            <p className="section-label">Our Favorite Rooms</p>
          </div>
          <h2 className="section-title">
            Our Rooms &amp; <span className="title-gold">Suites</span>
          </h2>
          <p className="rooms__subtitle">
            Every room is a sanctuary — designed for comfort, crafted for memories.
          </p>
        </div>

        <div className="rooms__header-stat">
          <div className="stat-item">
            <strong>8+</strong>
            <span>Room Types</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <strong>1k+</strong>
            <span>Happy Guests</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="rooms__grid">
        {rooms.map((room, i) => (
          <div
            className={`room-card ${room.featured ? 'featured' : ''}`}
            key={room.title}
            ref={(el) => (cardsRef.current[i] = el)}
            style={{ '--card-delay': `${i * 0.15}s` }}
          >
            {/* Tag */}
            <div className="room-card__tag">{room.tag}</div>

            {/* Image */}
            <div className="room-card__img">
              <img src={room.img} alt={room.title} />
              <div className="room-card__img-overlay" />

              {/* Amenity pills on image */}
              <div className="room-card__amenities">
                {room.amenities.map((a) => (
                  <div className="amenity-pill" key={a}>
                    {amenityIcons[a].icon}
                    <span>{amenityIcons[a].label}</span>
                  </div>
                ))}
              </div>

              {/* Featured crown indicator */}
              {room.featured && (
                <div className="room-card__crown">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d="M2 19h20v2H2zM2 5l5 8 5-8 5 8 5-8v12H2z"/>
                  </svg>
                  Best Choice
                </div>
              )}
            </div>

            {/* Info */}
            <div className="room-card__info">
              <div className="room-card__info-top">
                <h3>{room.title}</h3>
                <div className="room-card__shimmer-line" />
              </div>

              <div className="room-card__meta">
                <div className="meta-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                    <path d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  {room.Total_Rooms} Rooms
                </div>
                <div className="meta-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
             </svg>

             {room.adults} Adults

              {room.child && (
               <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>

      {room.child} Child
    </>
  )}
</div>
              </div>
              <div className="room-card__footer">
                <button className="room-card__btn">
                  <span>Stay with us</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                <div className="room-card__stars">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} viewBox="0 0 24 24" fill="#c9a97a" width="11" height="11">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover glow border */}
            <div className="room-card__glow" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;