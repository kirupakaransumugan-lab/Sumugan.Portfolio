import { skillStats, skillGroups } from '../data.js';

// A tool logo: Font Awesome icon, or a short text mark for brands FA doesn't have
function ToolLogo({ tool }) {
    if (tool.icon) {
        return <i className={`tool-logo ${tool.icon}`} style={{ color: tool.color }}></i>;
    }

    return (
        <span
            className={`tool-logo tool-mark${tool.round ? ' is-round' : ''}${tool.bg ? ' has-bg' : ''}`}
            style={{ color: tool.color, background: tool.bg }}
        >
            {tool.mark}
        </span>
    );
}

export default function Skills() {
    return (
        <section className="skills-section" id="skills">
            <div className="container">
                {/* Heading + stat chips */}
                <div className="skills-head">
                    <div className="skills-intro">
                        <div className="hero-tag">
                            <span></span>
                            <p>MY SKILLS &amp; TOOLS</p>
                        </div>

                        <h2 className="skills-title">
                            Tools I Use<br />
                            <span>to Create</span>
                        </h2>

                        <p className="skills-text">
                            A combination of design tools, development technologies, and AI tools
                            that help me turn ideas into real products.
                        </p>
                    </div>

                    <div className="skill-stats">
                        {skillStats.map(stat => (
                            <div className="skill-stat" key={stat.label} style={{ '--c': stat.color }}>
                                <span className="skill-stat-icon"><i className={stat.icon}></i></span>
                                <div>
                                    <strong>{stat.value}</strong>
                                    <small>{stat.label}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Category cards */}
                <div className="skill-groups">
                    {skillGroups.map(group => (
                        <article className="skill-group" key={group.title} style={{ '--c': group.color }}>
                            <header className="skill-group-head">
                                <span className="skill-group-icon"><i className={group.icon}></i></span>
                                <div className="skill-group-titles">
                                    <h3>{group.title}</h3>
                                    <p>{group.subtitle}</p>
                                </div>
                                <span className="skill-group-arrow" aria-hidden="true">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </span>
                            </header>

                            <ul className="skill-tools">
                                {group.tools.map(tool => (
                                    <li className="skill-tool" key={tool.name}>
                                        <ToolLogo tool={tool} />
                                        <span className="skill-tool-name">{tool.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
