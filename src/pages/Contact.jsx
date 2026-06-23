import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import { CONTACT_INFO, OFFICE_HOURS, FAQ } from '../data/content';
import './Contact.css';

const FORMSPREE_ID = 'REPLACE_AT_FORMSREE'; // go to https://formspree.io, create a form, paste its ID here

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSent(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Reach out to the UENR Tech Fair team.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <ScrollReveal>
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you shortly</p>
              </ScrollReveal>

              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.form key="form" className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="form-row-2col">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name *</label>
                        <input type="text" id="firstName" required value={form.firstName} onChange={e => setForm(p => ({ ...p, firstName: e.target.value }))} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name *</label>
                        <input type="text" id="lastName" required value={form.lastName} onChange={e => setForm(p => ({ ...p, lastName: e.target.value }))} />
                      </div>
                    </div>
                    <div className="form-row-2col">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input type="email" id="email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <select id="subject" required value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}>
                        <option value="">Select a subject</option>
                        <option>General Inquiry</option>
                        <option>Registration Help</option>
                        <option>Sponsorship Opportunities</option>
                        <option>Partnership</option>
                        <option>Speaker Application</option>
                        <option>Exhibition Booking</option>
                        <option>Volunteer Interest</option>
                        <option>Media & Press</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea id="message" rows="5" required value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}></textarea>
                    </div>
                    {error && <p className="form-error">{error}</p>}
                    <button type="submit" className="btn btn-primary" disabled={sending}>{sending ? 'Sending...' : 'Send Message'} <i className="fas fa-paper-plane"></i></button>
                  </motion.form>
                ) : (
                  <motion.div key="success" className="contact-success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="contact-success-icon"><i className="fas fa-check-circle"></i></div>
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
                    <button className="btn btn-secondary" onClick={() => { setSent(false); setForm({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' }); }}>
                      Send Another Message <i className="fas fa-redo"></i>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="contact-info-section">
              {CONTACT_INFO.map((info, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="contact-info-card">
                    <div className="cic-icon"><i className={info.icon}></i></div>
                    <div>
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link}>{info.content.split('\n').map((l, j) => <span key={j}>{l}<br /></span>)}</a>
                      ) : (
                        <p>{info.content.split('\n').map((l, j) => <span key={j}>{l}<br /></span>)}</p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              <ScrollReveal delay={0.3}>
                <div className="contact-info-card">
                  <div className="cic-icon"><i className="fas fa-clock"></i></div>
                  <div>
                    <h4>Office Hours</h4>
                    {OFFICE_HOURS.map((oh, i) => (
                      <div key={i} className="office-hour">
                        <span>{oh.day}</span>
                        <span>{oh.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="contact-social">
                  <h4>Follow Us</h4>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-x-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us on Campus */}
      <section className="campus-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">Find Us on Campus</h2>
              <p className="section-subtitle">Location of the Department of IT & Decision Sciences</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="campus-map">
              <iframe
                title="UENR Campus Location"
                src="https://maps.google.com/maps?q=University+of+Energy+and+Natural+Resources+Fiapre+Sunyani+Ghana&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="campus-iframe"
              ></iframe>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="campus-info-card">
              <i className="fas fa-map-pin"></i>
              <div>
                <p>Department of IT & Decision Sciences</p>
                <p>University of Energy and Natural Resources</p>
                <p>Fiapre, Sunyani, Bono Region, Ghana</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Quick answers to common questions</p>
            </div>
          </ScrollReveal>
          <div className="faq-list">
            {FAQ.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{item.q}</span>
                    <i className={`fas fa-chevron-down ${openFaq === i ? 'rotated' : ''}`}></i>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
