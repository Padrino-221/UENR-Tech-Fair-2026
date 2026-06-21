import { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import { SCHEDULE, TICKETS, COMPETITIONS, WHY_ATTEND, EVENT_STATS, FLYERS, EVENT_SPEAKERS, SPEAKER_CATEGORIES } from '../data/content';
import './Event.css';

function CountdownTimer() {
  const target = new Date('2026-06-26T08:00:00').getTime();
  const [time, setTime] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const update = () => {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setTime({
        days: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="countdown">
      <div className="countdown-label">Event Starts In</div>
      <div className="countdown-grid">
        {Object.entries(time).map(([key, val]) => (
          <div key={key} className="countdown-item">
            <div className="countdown-value">{val}</div>
            <div className="countdown-unit">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Event() {
  const [speakerFilter, setSpeakerFilter] = useState('All');
  const [loadedSpeakers, setLoadedSpeakers] = useState(6);
  const [flyerIndex, setFlyerIndex] = useState(0);

  const filteredSpeakers = speakerFilter === 'All'
    ? EVENT_SPEAKERS
    : EVENT_SPEAKERS.filter(s => s.category === speakerFilter);

  return (
    <PageTransition>
      <section className="page-hero event-hero">
        <div className="container">
          <h1>UENR Tech Fair 2026</h1>
          <p>Innovate. Connect. Transform.</p>
          <a href="#" className="btn btn-outline-light">Download Program Outline <i className="fas fa-download"></i></a>
        </div>
      </section>

      <section className="countdown-section">
        <div className="container">
          <ScrollReveal><CountdownTimer /></ScrollReveal>
        </div>
      </section>

      <section className="event-details-grid">
        <div className="container">
          <div className="details-grid-container">

            {/* LEFT COLUMN — Program Details + Schedule */}
            <div className="details-main">

              <ScrollReveal>
                <div className="section-header">
                  <h2 className="section-title">Program Details</h2>
                  <p className="section-subtitle">Join us for an extraordinary tech experience</p>
                </div>
              </ScrollReveal>

              <div className="info-card-large">
                <div className="info-row">
                  <div className="info-icon-wrapper"><i className="fas fa-calendar-check"></i></div>
                  <div className="info-text">
                    <h3>Date</h3>
                    <p>June 26, 2026</p>
                    <p className="info-sub">Friday</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-icon-wrapper"><i className="fas fa-map-marker-alt"></i></div>
                  <div className="info-text">
                    <h3>Venue</h3>
                    <p>UENR Main Auditorium</p>
                    <p className="info-sub">Fiapre, Sunyani, Ghana</p>
                  </div>
                </div>
                <div className="info-row">
                  <div className="info-icon-wrapper"><i className="fas fa-clock"></i></div>
                  <div className="info-text">
                    <h3>Time</h3>
                    <p>8:00 AM - 2:00 PM GMT</p>
                    <p className="info-sub">Full Day Event</p>
                  </div>
                </div>
              </div>

              <div className="program-schedule">
                <h3>Program Schedule</h3>
                <div className="schedule-timeline">
                  {SCHEDULE.map((session, si) => (
                    <ScrollReveal key={si} delay={si * 0.1}>
                      <div className="timeline-session-header">
                        <span className="session-badge">{session.session}</span>
                        <span className="session-time-range">{session.time}</span>
                      </div>
                      {session.items.map((item, ii) => (
                        <div key={ii} className="timeline-item">
                          <div className="timeline-time">{item.time}</div>
                          <div className="timeline-content">
                            <h4>{item.title}</h4>
                            {item.speaker && <p><strong>{item.speaker}</strong></p>}
                            <p>{item.desc}</p>
                            {item.tag && <span className="time-badge highlight">{item.tag}</span>}
                          </div>
                        </div>
                      ))}
                    </ScrollReveal>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN — Tickets / Stats / Competitions */}
            <aside className="details-sidebar">

              <div className="sidebar-card registration-card">
                <h3>Ready to Join?</h3>
                <p>Secure your spot at Ghana's biggest tech event</p>
                <button className="btn btn-primary btn-full">Get a Repping Flyer <i className="fas fa-ticket-alt"></i></button>
                <a href="https://forms.gle/y9K7fzXdBpVB9WWd7" target="_blank" className="btn btn-secondary btn-full">Register - UENR ITDS STUDENT <i className="fas fa-arrow-right"></i></a>
                <a href="https://forms.gle/QWuHC6288mQm34n7A" target="_blank" className="btn btn-secondary btn-full">Register - EXTERNAL PARTICIPANT <i className="fas fa-arrow-right"></i></a>
                <p className="spots-left"><i className="fas fa-users"></i> Limited spots available</p>
              </div>

              <div className="sidebar-card">
                <h3>Ticket Types</h3>
                {TICKETS.map((ticket, i) => (
                  <div key={i} className="ticket-item">
                    <h4>{ticket.name}</h4>
                    <p className="ticket-price">{ticket.price}</p>
                    {ticket.features.map((f, j) => <p key={j} className="ticket-desc">{f}</p>)}
                  </div>
                ))}
              </div>

              <div className="sidebar-card stats-mini">
                <h3>Event Stats</h3>
                {EVENT_STATS.map((s, i) => (
                  <div key={i} className="mini-stat">
                    <span className="mini-stat-number">{s.value}</span>
                    <span className="mini-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>

              {COMPETITIONS.map((comp, i) => (
                <div key={i} className="sidebar-card challenge-card">
                  <div className="challenge-badge">{comp.name.split(' ')[0]}</div>
                  <h3>{comp.name}</h3>
                  <div className="challenge-info">
                    <p><i className="far fa-calendar-alt"></i> {comp.date}</p>
                    <p><i className="far fa-clock"></i> {comp.time}</p>
                    <p><i className="far fa-building"></i> {comp.venue}</p>
                  </div>
                  <div className="challenge-prizes">
                    {comp.prizes.map((p, j) => (
                      <div key={j} className="prize-row">
                        <span className="prize-position">{p.label}</span>
                        <span className="prize-amount">{p.amount}</span>
                      </div>
                    ))}
                    <div className="prize-perks">
                      <span>{comp.extra}</span>
                    </div>
                  </div>
                  <div className="challenge-buttons">
                    <a href="#" className="btn btn-outline btn-sm"><i className="far fa-file-alt"></i> Read More</a>
                    <a href="#" className="btn btn-primary btn-sm"><i className="far fa-edit"></i> Register</a>
                  </div>
                </div>
              ))}

            </aside>

          </div>
        </div>
      </section>

      <section className="flyers-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">Event Flyers</h2>
              <p className="section-subtitle">Download and share our promotional materials</p>
            </div>
          </ScrollReveal>
          <div className="flyer-slider-container">
            <div className="flyer-slider" style={{ transform: `translateX(-${flyerIndex * 100}%)` }}>
              {FLYERS.map((flyer, i) => (
                <div key={i} className="flyer-slide">
                  <img src={flyer.image} alt={flyer.title} loading="lazy" onError={e => { e.target.onerror = null; e.target.style.display = 'none'; e.target.parentElement.classList.add('flyer-fallback'); }} />
                  <div className="flyer-overlay">
                    <a href={flyer.image} download className="btn btn-outline-light">Download <i className="fas fa-download"></i></a>
                  </div>
                </div>
              ))}
            </div>
            <button className="flyer-prev" onClick={() => setFlyerIndex(i => (i === 0 ? FLYERS.length - 1 : i - 1))}><i className="fas fa-chevron-left"></i></button>
            <button className="flyer-next" onClick={() => setFlyerIndex(i => (i === FLYERS.length - 1 ? 0 : i + 1))}><i className="fas fa-chevron-right"></i></button>
          </div>
          <div className="flyer-dots">
            {FLYERS.map((_, i) => (
              <div key={i} className={`flyer-dot${i === flyerIndex ? ' active' : ''}`} onClick={() => setFlyerIndex(i)}></div>
            ))}
          </div>
        </div>
      </section>

      <section className="speakers-gallery-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">Our Speakers</h2>
              <p className="section-subtitle">Meet the brilliant minds shaping the future of technology and innovation</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="speaker-gallery-filters">
              {SPEAKER_CATEGORIES.map(cat => (
                <button key={cat} className={`sg-filter-btn ${speakerFilter === cat ? 'active' : ''}`} onClick={() => { setSpeakerFilter(cat); setLoadedSpeakers(6); }}>
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="speaker-gallery-grid">
            {filteredSpeakers.slice(0, loadedSpeakers).map((sp, i) => (
              <ScrollReveal key={i} delay={(i % 6) * 0.06}>
                <div className="speaker-gallery-card">
                  <div className="sg-image-wrapper">
                    <img src={sp.image} alt={sp.name} loading="lazy" onError={e => { e.target.src = 'https://via.placeholder.com/300x360?text=' + encodeURIComponent(sp.name.split(' ')[1]); }} />
                    <div className="sg-category">{sp.category}</div>
                  </div>
                  <div className="sg-info">
                    <h3>{sp.name}</h3>
                    <p className="sg-title">{sp.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {loadedSpeakers < filteredSpeakers.length && (
            <div className="text-center">
              <button className="btn btn-secondary" onClick={() => setLoadedSpeakers(p => p + 6)}>
                Load More Speakers <i className="fas fa-arrow-down"></i>
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="why-attend">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">Why Attend?</h2>
              <p className="section-subtitle">Unlock opportunities at UENR Tech Fair 2026</p>
            </div>
          </ScrollReveal>
          <div className="why-grid">
            {WHY_ATTEND.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="why-card">
                  <div className="why-icon"><i className={item.icon}></i></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
