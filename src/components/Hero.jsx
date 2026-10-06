import { heroStats, socials } from '../data.js';

export default function Hero() {
    return (
        <section id="home" className="hero">
            {/* Decorative "+" markers */}
            <span className="hero-plus" style={{ top: '22%', left: '47%' }} aria-hidden="true">+</span>
            <span className="hero-plus" style={{ top: '60%', left: '47%' }} aria-hidden="true">+</span>
            <span className="hero-plus" style={{ bottom: '6%', right: '6%' }} aria-hidden="true">+</span>

            <div className="container">
                <div className="row align-items-center">
                    {/* Left */}
                    <div className="col-lg-7">
                        <div className="hero-tag">
                            <span></span>
                            <p>GRAPHIC DESIGNER &amp; DEVELOPER</p>
                        </div>

                        <h1>Hi, I'm<br /><span>Sumugan</span><b className="hero-dot">.</b></h1>

                        <p className="hero-text">
                            I craft purposeful brands, intuitive digital experiences,
                            and performant web products. Where design meets code
                            and craft meets clarity.
                        </p>

                        <div className="hero-buttons">
                            <a href="#projects" className="btn-work">
                                View Work <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                            <a href="#contact" className="btn-contact">
                                <i className="fa-regular fa-envelope"></i> Get in Touch
                            </a>
                        </div>

                        <div className="hero-stats">
                            {heroStats.map(stat => (
                                <div className="hero-stat" key={stat.label}>
                                    <span className="hero-stat-icon"><i className={stat.icon}></i></span>
                                    <div>
                                        <h2>{stat.value}</h2>
                                        <p>{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div className="col-lg-5">
                        <div className="hero-image">
                            <span className="hero-arc" aria-hidden="true"></span>

                            {/* Handwritten note + curly arrow */}
                            <div className="hero-note" aria-hidden="true">
                                <span>Design</span>
                                <span>Develop</span>
                                <span>Create</span>
                                <svg className="hero-note-arrow" viewBox="0 0 90 80" fill="none">
                                    <path d="M28 6 C 8 30, 10 62, 38 66 C 58 69, 66 52, 52 46 C 40 41, 34 60, 52 72 C 62 78, 78 76, 86 72"
                                          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                    <path d="M20 14 L 28 5 L 33 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <img src="/Assets/profile.jpg?v=3" className="img-fluid hero-photo" alt="Sumugan" />

                            <div className="available">
                                AVAILABLE FOR WORK
                                <span className="dot dot-green"></span>
                            </div>

                            <div className="social-icons">
                                {socials.map(s => (
                                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                                        <i className={s.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
