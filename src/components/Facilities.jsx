import React from 'react';
import './Facilities.css';

const facilities = [
  {
    icon: '🚕',
    title: 'Taxi Service',
    desc: 'Enjoy safe, reliable, and hassle-free travel with our convenient local taxi services.',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=70',
  },
  {
    icon: '🏊',
    title: 'Swimming Pool',
    desc: 'Refresh and unwind in our pristine pool surrounded by lush garden views.',
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=70',
  },
  {
    icon: '🗺️',
    title: 'Tourist Guide',
    desc: 'Discover hidden gems and iconic attractions with experienced local guides by your side.',
    img: null,
  },
  {
    icon: '🚲',
    title: 'Bike Rental',
    desc: 'Explore the beauty of Chikmagaluru with comfortable and well-maintained bikes for every adventure.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70',
  },
];

const Facilities = () => {
  return (
    <section className="facilities" id="facilities">
      <div className="facilities__header">
        <p className="section-label">Facilities</p>
        <h2 className="section-title">
          Our Residency <span>Facilities</span>
        </h2>
      </div>

      <div className="facilities__grid">
        {facilities.map((f) => (
          <div className="facility-card" key={f.title}>
            {f.img ? (
              <div className="facility-card__img">
                <img src={f.img} alt={f.title} />
              </div>
            ) : (
              <div className="facility-card__no-img" />
            )}
            <div className="facility-card__icon">
              <span>{f.icon}</span>
            </div>
            <h3 className="facility-card__title">{f.title}</h3>
            <p className="facility-card__desc">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Decorative circles */}
      <div className="deco-circle lg" />
      <div className="deco-circle sm" />
    </section>
  );
};

export default Facilities;
