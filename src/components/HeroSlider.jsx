import { useState, useEffect, useCallback } from 'react';
import { HERO_SLIDES, IMAGES } from '../data/content';
import './HeroSlider.css';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const total = HERO_SLIDES.length;

  const next = useCallback(() => setCurrent(p => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(p => (p - 1 + total) % total), [total]);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="hero-slider">
      <div className="slider-container">
        {HERO_SLIDES.map((slide, i) => (
          <div key={i} className={`slide ${i === current ? 'active' : ''}`}>
            <div className="slide-bg" style={{ backgroundImage: `url(${IMAGES.hero[i]})` }} />
          </div>
        ))}

        <button className="slider-prev" onClick={prev}><i className="fas fa-chevron-left"></i></button>
        <button className="slider-next" onClick={next}><i className="fas fa-chevron-right"></i></button>

        <div className="slider-dots">
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
