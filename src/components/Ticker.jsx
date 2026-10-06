import { Fragment } from 'react';
import { tickerItems } from '../data.js';

// The list is repeated 3x so the CSS marquee loops seamlessly.
const REPEAT = 3;

export default function Ticker() {
    const items = Array.from({ length: REPEAT }, () => tickerItems).flat();

    return (
        <section className="ticker">
            <div className="ticker-track">
                {items.map((item, i) => (
                    <Fragment key={i}>
                        <span>{item}</span>
                        <span>◆</span>
                    </Fragment>
                ))}
            </div>
        </section>
    );
}
