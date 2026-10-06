import { useState } from 'react';
import { contactInfo } from '../data.js';

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
    const [form, setForm] = useState(EMPTY_FORM);
    const [sent, setSent] = useState(false);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();

        // TODO(human): show the "Message Sent ✓" feedback and reset the form.
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="row g-5">
                    {/* LEFT — Info */}
                    <div className="col-lg-5">
                        <div className="hero-tag mb-3">
                            <span></span>
                            <p>GET IN TOUCH</p>
                        </div>

                        <h2 className="contact-heading">
                            Let's Build Something<br />
                            <span className="contact-heading-muted">Worth Remembering</span>
                        </h2>

                        <p className="contact-text">
                            Whether you have a project in mind, a brand to build, or just want to
                            explore possibilities, I'm always open to meaningful conversations.
                        </p>

                        <div className="contact-info-list">
                            {contactInfo.map(info => (
                                <div className="contact-info-card" key={info.label}>
                                    <span className="contact-icon"><i className={info.icon}></i></span>
                                    <div>
                                        <span className="info-label">{info.label}</span>
                                        <strong>{info.value}</strong>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — Form */}
                    <div className="col-lg-7">
                        <div className="contact-form-card">
                            <h3 className="form-title">Send a Message</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                                    <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
                                </div>

                                <input type="text" name="subject" placeholder="Subject" className="form-full" value={form.subject} onChange={handleChange} required />

                                <textarea name="message" placeholder="Tell me about your project..." rows="6" className="form-full" value={form.message} onChange={handleChange} required />

                                <button type="submit" className="form-submit-btn" style={{ opacity: sent ? 0.8 : 1 }}>
                                    {sent ? 'Message Sent ✓' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
