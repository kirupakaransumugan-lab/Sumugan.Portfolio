import { socials } from '../data.js';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-row">
                    <a href="#home" className="logo footer-logo">
                        SUMUGAN<span>.</span>
                    </a>

                    <p className="footer-copy">© {new Date().getFullYear()} Sumugan. Crafted with intent.</p>

                    <div className="footer-socials">
                        {socials.map(s => (
                            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                                <i className={s.icon}></i>
                            </a>
                        ))}
                        <a href="mailto:kirupakaransumugan@gmail.com" aria-label="Email">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
