import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import HeroSlider from '../components/HeroSlider';
import StatsCounter from '../components/StatsCounter';
import GallerySlider from '../components/GallerySlider';
import { HIGHLIGHTS, SPEAKERS, NEWS, IMAGES } from '../data/content';
import './Home.css';

export default function Home() {
  return (
    <PageTransition>
      <HomeContent />
    </PageTransition>
  );
}

function HomeContent() {
  return (
    <>
      <HeroSlider />

      <StatsCounter />

      {/* About Brief - 2/3 + 1/3 split */}
      <section className="alt-section">
        <div className="container">
          <ScrollReveal>
            <div className="alt-grid">
              <div className="alt-text">
                <h2>Where Innovation Meets Impact</h2>
                <p>The UENR Tech Fair is a dynamic platform to showcase student-led technological innovations, foster critical policy dialogue, and facilitate strong engagement between academia and industry. It is a key driver in positioning UENR as a leader in digital innovation.</p>
                <ul>
                  <li><i className="fas fa-check"></i> Student-led technological innovations on a national stage</li>
                  <li><i className="fas fa-check"></i> Critical policy dialogue between academia, industry, and government</li>
                  <li><i className="fas fa-check"></i> Strong industry engagement and career pathways</li>
                </ul>
                <div className="btn-wrapper">
                  <a href="/about" className="btn btn-primary">Learn More <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="alt-media">
                <img src={IMAGES.aboutPreview} alt="UENR Tech Fair Highlights" loading="lazy" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Highlights - Grid with structural lines */}
      <section className="highlights">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">What to Expect</h2>
              <p className="section-subtitle">Experience the best of technology and innovation</p>
            </div>
          </ScrollReveal>
          <div className="highlights-grid">
            {HIGHLIGHTS.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="highlight-card">
                  <div className="highlight-icon"><i className={item.icon}></i></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="speakers">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">Headline Speakers</h2>
              <p className="section-subtitle">Meet the visionaries shaping the future of tech</p>
            </div>
          </ScrollReveal>
          <div className="speakers-grid">
            {SPEAKERS.map((speaker, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="speaker-card">
                  <div className="speaker-image-wrapper">
                    <img src={speaker.image} alt={speaker.name} className="speaker-image" loading="lazy" onError={e => { e.target.src = 'https://via.placeholder.com/300x360?text=' + encodeURIComponent(speaker.name.split(' ')[1]); }} />
                  </div>
                  <div className="speaker-info">
                    <h3>{speaker.name}</h3>
                    <p className="speaker-title">{speaker.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center">
            <a href="/event" className="btn btn-secondary">View All Speakers <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </section>

      {/* Sponsors - 2/3 + 1/3 split (reversed) */}
      <section className="alt-section">
        <div className="container">
          <ScrollReveal>
            <div className="alt-grid reverse">
              <div className="alt-text">
                <h2>Our Sponsors & Partners</h2>
                <p>We are proud to partner with organizations that share our vision and support our initiatives. Our sponsors play a vital role in making our events and programs possible.</p>
                <ul>
                  <li><i className="fas fa-check"></i> Industry-leading organizations powering innovation</li>
                  <li><i className="fas fa-check"></i> Sustainable partnerships driving Ghana's digital agenda</li>
                  <li><i className="fas fa-check"></i> Collaborative ecosystem for student and startup success</li>
                </ul>
                <div className="btn-wrapper">
                  <a href="/about" className="btn btn-primary">Learn More <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
              <div className="alt-media">
                <img src={IMAGES.sponsorsAll} alt="UENR Tech Fair Sponsors" loading="lazy" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* News */}
      <section className="news">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">Latest News & Updates</h2>
              <p className="section-subtitle">Stay informed about the fair</p>
            </div>
          </ScrollReveal>
          <div className="news-grid">
            {NEWS.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="news-card">
                  <div className="news-date">{item.date}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href={item.link} className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GallerySlider />
    </>
  );
}
