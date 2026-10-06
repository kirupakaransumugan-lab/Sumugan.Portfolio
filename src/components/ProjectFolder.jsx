// Glass folder that "holds" the design projects. Their cover images peek out
// of the top like papers; clicking plays the open animation (see CSS).

// Fanned-out offsets for the peeking papers: x, y, rotation
const PAPER_POSES = [
    { x: '-14%', y: '6%', r: '-8deg' },
    { x: '14%', y: '4%', r: '7deg' },
    { x: '0%', y: '0%', r: '-1deg' },
];

export default function ProjectFolder({ title, projects, opening, onOpen, onOpened }) {
    const handleAnimationEnd = e => {
        // Only the folder's own exit animation finishes the sequence
        if (e.target === e.currentTarget && e.animationName === 'folderOut') onOpened();
    };

    return (
        <button
            type="button"
            className={`folder${opening ? ' is-opening' : ''}`}
            onClick={onOpen}
            onAnimationEnd={handleAnimationEnd}
            aria-label={`Open ${title} folder`}
            aria-expanded={opening}
            disabled={opening}
        >
            <span className="folder-back"></span>

            <span className="folder-papers">
                {projects.map((project, i) => {
                    const pose = PAPER_POSES[i % PAPER_POSES.length];
                    return (
                        <span
                            key={project.title}
                            className="folder-paper"
                            style={{ '--x': pose.x, '--y': pose.y, '--r': pose.r, '--i': i }}
                        >
                            <img src={project.images[0]} alt="" />
                        </span>
                    );
                })}
            </span>

            <span className="folder-front">
                <span className="folder-count">{String(projects.length).padStart(2, '0')}</span>
                <span className="folder-title">{title}</span>
                <span className="folder-hint">
                    Click to open <i className="fa-solid fa-arrow-up-right"></i>
                </span>
            </span>
        </button>
    );
}
