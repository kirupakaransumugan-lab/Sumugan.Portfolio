import { useEffect, useRef } from 'react';
import { aboutInfo } from '../data.js';

export default function About() {
    const gridRef = useRef(null);

    // Reveal the info cards with a staggered fade when they scroll into view
    useEffect(() => {
        const cards = gridRef.current.querySelectorAll('.about-info-card');

        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('visible'), i * 120);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        cards.forEach(card => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* LEFT — Image Card */}
                    <div className="col-lg-5">
                        <div className="about-card-wrap">
                            <div className="about-blob"></div>
                            <div className="about-img-card">
                                <img
                                    src="/Assets/Dual-Monitor-Setup-Ideas-Boost-Productivity-Efficiency9.webp"
                                    alt="Workspace"
                                    className="img-fluid"
                                />
                                <div className="about-quote">
                                    <p>“Everything is designed. Few things are designed well.”</p>
                                    <span>Brian Reed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Content */}
                    <div className="col-lg-7">
                        <div className="hero-tag mb-3">
                            <span></span>
                            <p>ABOUT ME</p>
                        </div>

                        <h2 className="about-heading">
                            Crafting Visual Language<br />
                            <span className="about-heading-muted">&amp; Digital Experiences</span>
                        </h2>

                        <p className="about-text">
                            I'm Sumugan, a graphic designer and front-end developer based in Jaffna.
                            With over 6 Months of experience, I bridge the gap between pixel-perfect
                            design and production-ready code.
                        </p>

                        <p className="about-text">
                            My work spans brand identity, digital product design, and web development —
                            always with an emphasis on systems thinking, typographic craft, and
                            meaningful interaction.
                        </p>

                        <div className="about-info-grid" ref={gridRef}>
                            {aboutInfo.map(info => (
                                <div className="about-info-card" key={info.label}>
                                    <span className="info-label">{info.label}</span>
                                    <strong>{info.value}</strong>
                                </div>
                            ))}
                        </div>

                        <a href="/Assets/cv.pdf" download className="btn-work mt-4 d-inline-flex align-items-center gap-2">
                            Download CV <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
