export default function Showcase() {
    return (
        <section className="showcase">
            <div className="container">
                <div className="showcase-text">
                    <div className="hero-tag">
                        <span></span>
                        <p>THE PROCESS</p>
                    </div>

                    <h2>Ctrl + S,<br />on repeat.</h2>

                    <p>
                        Design. Code. Refine.<br />
                        Every keystroke is a chance for something new to grow.
                    </p>
                </div>
            </div>

            {/* Wrapper holds the angle; the image inside gently floats */}
            <div className="showcase-keyboard" aria-hidden="true">
                <img src="/Assets/keyboard.png" alt="" className="showcase-keyboard-img" />
            </div>
        </section>
    );
}
