import { useRef } from 'react';
import { IMAGES, imgFallback } from '../data/content';
import ScrollReveal from './ScrollReveal';
import './GallerySlider.css';

export default function GallerySlider() {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    const amount = sliderRef.current.querySelector('.gallery-slide')?.offsetWidth + 20 || 320;
    sliderRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="gallery-slider-section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Event Highlights</h2>
            <p className="section-subtitle">Moments captured from past editions</p>
          </div>
        </ScrollReveal>

        <div className="gallery-slider-container">
          <div className="gallery-slider" ref={sliderRef}>
            {IMAGES.gallery.map((src, i) => (
              <div key={i} className="gallery-slide">
                <img src={src} alt={`Event Highlight ${i + 1}`} loading="lazy" onError={e => imgFallback(e, 'Gallery')} />
                <div className="gallery-overlay">
                  <span>Ghana's Biggest Tech Fair</span>
                </div>
              </div>
            ))}
          </div>
          <button className="gallery-prev" onClick={() => scroll(-1)}><i className="fas fa-chevron-left"></i></button>
          <button className="gallery-next" onClick={() => scroll(1)}><i className="fas fa-chevron-right"></i></button>
        </div>

        <div className="text-center">
          <a href="/gallery" className="btn btn-secondary">View Full Gallery <i className="fas fa-images"></i></a>
        </div>
      </div>
    </section>
  );
}
