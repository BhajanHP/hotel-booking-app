import React from 'react';
import './Rooms.css';

const rooms = [
  {
    title: 'Deluxe Room',
    price: 220,
    size: '35 Sqm',
    adults: 3,
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    amenities: ['wifi', 'tv', 'breakfast'],
  },
  {
    title: 'Single Room',
    price: 90,
    size: '33 Sqm',
    adults: 3,
    img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
    amenities: ['wifi', 'tv', 'breakfast'],
    featured: true,
  },
  {
    title: 'King Room',
    price: 250,
    size: '35 Sqm',
    adults: 5,
    img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80',
    amenities: ['wifi', 'tv', 'breakfast'],
  },
];

const amenityIcons = {
  wifi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
      <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/>
    </svg>
  ),
  tv: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
      <rect x="2" y="7" width="20" height="15" rx="2"/><path d="M17 2l-5 5-5-5"/>
    </svg>
  ),
  breakfast: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
      <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  ),
};

const Rooms = () => {
  return (
    <section className="rooms" id="rooms">
      <div className="rooms__header">
        <div>
          <p className="section-label">Our Favorite Rooms</p>
          <h2 className="section-title">Our Rooms & <span>Suites</span></h2>
        </div>
        <a href="#" className="btn-outline">View All Rooms</a>
      </div>

      <div className="rooms__grid">
        {rooms.map((room) => (
          <div className={`room-card ${room.featured ? 'featured' : ''}`} key={room.title}>
            <div className="room-card__img">
              <img src={room.img} alt={room.title} />
              <div className="room-card__price">${room.price}.0 / night</div>
              <div className="room-card__amenities">
                {room.amenities.map((a) => (
                  <div className="amenity-icon" key={a} title={a}>
                    {amenityIcons[a]}
                  </div>
                ))}
              </div>
            </div>
            <div className="room-card__info">
              <h3>{room.title}</h3>
              <div className="room-card__meta">
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M13.8 12H3"/>
                  </svg>
                  Size: {room.size}
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                  Adult: {room.adults}
                </span>
              </div>
              <a href="#" className="btn-primary room-btn">Book Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
