import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import { COMMITTEES } from '../data/content';
import './Committees.css';

function getInitials(name) {
  return name.split(' ').filter(Boolean).map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

export default function Committees() {
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb"><a href="/">Home</a> / Committees & Teams</div>
          <h1>Committees & Teams</h1>
          <p>Meet the Team — The dedicated individuals behind the UENR Tech Fair who work tirelessly to bring this vision to life</p>
        </div>
      </section>

      <section className="org-committee">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">Organizing Committee</h2>
              <p className="section-subtitle">The leadership team steering the vision and execution of the Tech Fair</p>
            </div>
          </ScrollReveal>
          <div className="org-grid">
            {COMMITTEES.organizing.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="org-card">
                  <div className="org-avatar">
                    {member.image ? (
                      <img src={member.image} alt={member.name} />
                    ) : (
                      <div className="avatar-initials">{getInitials(member.name)}</div>
                    )}
                  </div>
                  <h3>{member.name}</h3>
                  <div className="org-role">{member.role}</div>
                  <p>{member.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sub-committees">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">Sub-Committees & Teams</h2>
              <p className="section-subtitle">Specialized teams working together to create an exceptional experience</p>
            </div>
          </ScrollReveal>
          <div className="sub-grid">
            {COMMITTEES.subCommittees.map((sub, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="sub-card">
                  <div className="sub-header">
                    <h3>{sub.name}</h3>
                    <p>{sub.desc}</p>
                  </div>
                  <div className="sub-members">
                    {sub.members.map((m, j) => (
                      <div key={j} className="sub-member">
                        <div className="sub-avatar">
                          {m.image ? (
                            <img src={m.image} alt={m.name} />
                          ) : (
                            <div className="avatar-initials initials-sm">{getInitials(m.name)}</div>
                          )}
                        </div>
                        <div className="sub-member-info">
                          <span className="sub-member-name">{m.name}</span>
                          <span className="sub-member-role">{m.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
