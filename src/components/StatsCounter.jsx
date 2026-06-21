import { useState, useEffect } from 'react';
import './StatsCounter.css';

const TARGET = new Date('2026-06-26T08:00:00').getTime();

function pad(n) {
  return String(Math.floor(n)).padStart(2, '0');
}

export default function StatsCounter() {
  const [time, setTime] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const update = () => {
      const diff = TARGET - Date.now();
      if (diff <= 0) {
        setTime({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }
      setTime({
        days: pad(diff / 86400000),
        hours: pad((diff % 86400000) / 3600000),
        minutes: pad((diff % 3600000) / 60000),
        seconds: pad((diff % 60000) / 1000),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stats-section">
      <div className="container">
        <div className="countdown-hero">
          {Object.entries(time).map(([key, val]) => (
            <div key={key} className="countdown-hero-item">
              <div className="countdown-hero-value">{val}</div>
              <div className="countdown-hero-unit">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
