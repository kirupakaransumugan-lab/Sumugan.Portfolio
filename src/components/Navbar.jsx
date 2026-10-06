import { useState } from 'react';
import { navLinks } from '../data.js';

export default function Navbar() {
    const [active, setActive] = useState('home');

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
                                    onClick={() => setActive(id)}
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
