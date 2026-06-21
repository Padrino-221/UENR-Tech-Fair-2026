import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import { IMAGES } from '../data/content';
import './Gallery.css';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const [loaded, setLoaded] = useState(8);

  const years = ['all', '2025', '2024'];

  const images = IMAGES.gallery;
  const visible = images.slice(0, loaded);

  useEffect(() => {
    const handleKey = (e) => {
      if (!lightbox) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox(p => (p + 1) % images.length);
      if (e.key === 'ArrowLeft') setLightbox(p => (p - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox, images.length]);

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <h1>Event Gallery</h1>
          <p>Relive the moments from UENR Tech Fair</p>
        </div>
      </section>

      <section className="gallery-page">
        <div className="container">
          <ScrollReveal>
            <div className="gallery-filters">
              <span className="filter-label">Browse by Year</span>
              <div className="filter-buttons">
                {years.map(y => (
                  <button key={y} className={`filter-btn ${filter === y ? 'active' : ''}`} onClick={() => setFilter(y)}>
                    {y === 'all' ? 'All' : y}
                  </button>
                ))}
              </div>
              <span className="filter-count">{visible.length} photos</span>
            </div>
          </ScrollReveal>

          <div className="gallery-masonry">
            {visible.map((src, i) => (
              <ScrollReveal key={i} delay={(i % 8) * 0.05}>
                <div className="gallery-item" onClick={() => setLightbox(i)}>
                  <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" onError={e => { e.target.src = 'https://via.placeholder.com/400x300?text=Gallery'; }} />
                  <div className="gallery-item-overlay">
                    <i className="fas fa-search-plus"></i>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {loaded < images.length && (
            <div className="text-center">
              <button className="btn btn-secondary" onClick={() => setLoaded(p => p + 8)}>
                Load More <i className="fas fa-arrow-down"></i>
              </button>
            </div>
          )}

          {visible.length === 0 && (
            <div className="gallery-empty">
              <i className="fas fa-images"></i>
              <h3>No images found</h3>
              <p>No photos available for this year yet.</p>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button className="lightbox-close" onClick={() => setLightbox(null)}>&times;</button>
            <button className="lightbox-nav lightbox-prev" onClick={e => { e.stopPropagation(); setLightbox(p => (p - 1 + images.length) % images.length); }}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <motion.img
              key={lightbox}
              src={images[lightbox]}
              alt={`Gallery ${lightbox + 1}`}
              className="lightbox-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={e => e.stopPropagation()}
              onError={e => { e.target.src = 'https://via.placeholder.com/800x600?text=Gallery+Image'; }}
            />
            <button className="lightbox-nav lightbox-next" onClick={e => { e.stopPropagation(); setLightbox(p => (p + 1) % images.length); }}>
              <i className="fas fa-chevron-right"></i>
            </button>
            <div className="lightbox-counter">{lightbox + 1} / {images.length}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
