import { useEffect, useState } from 'react';
import { navLinks } from '../data.js';

export default function Navbar() {
    const [active, setActive] = useState('home');

    // Scroll-spy: highlight whichever section crosses a line ~40% down the viewport.
    // The rootMargin shrinks the observer's box to that single line, so exactly one
    // section intersects at a time.
    useEffect(() => {
        // Sections without a nav link (ticker, showcase) belong to the nav item above them
        const owner = new Map();
        let current = navLinks[0];
        document.querySelectorAll('section').forEach(section => {
            if (navLinks.includes(section.id)) current = section.id;
            owner.set(section, current);
        });

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) setActive(owner.get(entry.target));
            });
        }, { rootMargin: '-40% 0px -60% 0px' });

        owner.forEach((_, section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <nav className="navbar navbar-expand-lg py-4" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand logo" href="#home">
                    SUMUGAN<span>.</span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navMenu">
                    <ul className="navbar-nav">
                        {navLinks.map(id => (
                            <li className="nav-item" key={id}>
                                <a
                                    href={`#${id}`}
                                    className={`nav-link${active === id ? ' active' : ''}`}
                                    aria-current={active === id ? 'location' : undefined}
                                >
                                    {id.toUpperCase()}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <a href="#contact" className="hire-btn">
                    Hire Me <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </nav>
    );
}
