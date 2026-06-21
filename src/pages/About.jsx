import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import { ABOUT_CONTENT } from '../data/content';
import './About.css';

export default function About() {
  const { journey, milestones, vision, mission, goal, goalItems, founder, itds, pastEditions } = ABOUT_CONTENT;

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a> / About Us</div>
          <h1>About Us</h1>
          <p>Empowering the next generation of tech leaders through innovation, collaboration, and industry engagement</p>
        </div>
      </section>

      <section className="about-journey">
        <div className="container">
          <ScrollReveal>
            <div className="journey-header">
              <h2 className="section-title">Our Journey</h2>
              <p className="section-subtitle">From a small student exhibition to Ghana's premier tech event</p>
            </div>
          </ScrollReveal>
          <div className="journey-content">
            <ScrollReveal delay={0.1}>
              <div className="journey-text">
                {journey.split('\n').map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </ScrollReveal>
            <div className="milestones">
              {milestones.map((m, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="milestone-card">
                    <div className="milestone-year">{m.year}</div>
                    <div className="milestone-title">{m.title}</div>
                    <div className="milestone-desc">{m.desc}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="vision-mission">
        <div className="container">
          <div className="vm-grid">
            <ScrollReveal className="vm-card" delay={0}>
              <div className="vm-icon"><i className="fas fa-eye"></i></div>
              <h3>Our Vision</h3>
              {vision.split('\n').map((p, i) => <p key={i}>{p}</p>)}
            </ScrollReveal>
            <ScrollReveal className="vm-card" delay={0.15}>
              <div className="vm-icon"><i className="fas fa-bullseye"></i></div>
              <h3>Our Mission</h3>
              {mission.split('\n').map((p, i) => <p key={i}>{p}</p>)}
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="goal-section">
        <div className="container">
          <ScrollReveal>
            <div className="goal-content">
              <div className="goal-text">
                <h2>The Overreaching Goal</h2>
                <p>{goal}</p>
                <ul className="goal-list">
                  {goalItems.map((item, i) => <li key={i}><i className="fas fa-check-circle"></i> {item}</li>)}
                </ul>
              </div>
              <div className="goal-image">
                <img src="/about/goal-image.jpg" alt="Students collaborating at UENR Tech Fair" loading="lazy" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="founder-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">The Visionary Behind the Fair</h2>
              <p className="section-subtitle">Meet the founder who turned a vision into reality</p>
            </div>
          </ScrollReveal>
          <div className="founder-content">
            <ScrollReveal delay={0.1}>
              <div className="founder-image">
                <img src="/about/convener.jpg" alt={founder.name} />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="founder-info">
                <h3>{founder.name}</h3>
                <div className="founder-title">{founder.title}</div>
                <div className="founder-quote">{founder.quote}</div>
                <p>{founder.bio}</p>
                <div className="founder-stats">
                  {founder.stats.map((s, i) => (
                    <div key={i} className="founder-stat">
                      <div className="fs-value">{s.value}</div>
                      <div className="fs-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="itds-section">
        <div className="container">
          <ScrollReveal>
            <div className="itds-header">
              <h2>{itds.title}</h2>
              <p>{itds.desc}</p>
            </div>
          </ScrollReveal>
          <div className="itds-features">
            {itds.features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="itds-feature-card">
                  <div className="itds-feature-icon"><i className={f.icon}></i></div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="itds-stats">
            {itds.stats.map((s, i) => (
              <div key={i} className="itds-stat">
                <div className="itds-stat-value">{s.value}</div>
                <div className="itds-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="past-editions">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">Past Editions</h2>
              <p className="section-subtitle">A legacy of growth and impact</p>
            </div>
          </ScrollReveal>
          <div className="editions-grid">
            {pastEditions.map((ed, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="edition-card">
                  <div className="edition-year">{ed.year}</div>
                  <div className="edition-theme">{ed.theme}</div>
                  <div className="edition-stats">
                    <span>{ed.attendees}</span>
                    <span>{ed.speakers}</span>
                    <span>{ed.projects}</span>
                  </div>
                  <p>{ed.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Chart */}
      <section className="growth-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">Growth in Attendance</h2>
              <p className="section-subtitle">+1,600% since 2021</p>
            </div>
          </ScrollReveal>
          <div className="growth-chart">
            {[...pastEditions].reverse().map((ed, i) => {
              const count = parseInt(ed.attendees.replace(/[^0-9]/g, ''));
              const maxCount = 8500;
              const pct = (count / maxCount) * 100;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="growth-bar-item">
                    <div className="growth-bar-year">{ed.year}</div>
                    <div className="growth-bar-track">
                      <div className="growth-bar-fill" style={{ width: `${pct}%` }}>
                        <span className="growth-bar-label">{ed.attendees.split(' ')[0]}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="growth-summary">
              <span className="growth-summary-value">+1,600%</span>
              <span className="growth-summary-label">Growth in Attendance Since 2021</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
