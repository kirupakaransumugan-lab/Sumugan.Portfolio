import { useState } from 'react';
import { designProjects, devProjects } from '../data.js';
import ProjectFolder from './ProjectFolder.jsx';

// Each group is packed in its own folder until clicked.
const GROUPS = [
    { id: 'design', title: 'GRAPHIC DESIGN', projects: designProjects },
    { id: 'dev', title: 'DEVELOPMENT', projects: devProjects },
];

function ProjectBody({ project, icon, children }) {
    return (
        <>
            <div className="project-img">
                <span className="project-tag">{project.tag}</span>
                <span className="project-link" aria-hidden="true"><i className={icon}></i></span>
                <img src={project.images[0]} alt={project.title} />
            </div>
            <div className="project-info">
                <h3>{project.title}</h3>
                {project.builtWith && (
                    <span className="built-with">
                        <img src={project.builtWith.logo} alt="" />
                        Built with {project.builtWith.name}
                    </span>
                )}
                <p>{project.description}</p>
                <div className="project-tools">
                    {project.tools.map(tool => <span key={tool}>{tool}</span>)}
                </div>
                {children}
            </div>
        </>
    );
}

// Dev cards hold two links, and <a> can't nest, so the card is an <article> whose
// first link "stretches" over the whole card (see .stretched-link in CSS). That link
// is the live demo when there is one, otherwise the GitHub repo.
function DevCard({ project, style }) {
    const { title, demo, href } = project;

    return (
        <article className="project-card project-card-dev" style={style}>
            <ProjectBody project={project} icon={demo ? 'fa-solid fa-arrow-up-right-from-square' : 'fa-brands fa-github'}>
                <div className="project-actions">
                    {demo && (
                        <a href={demo} target="_blank" rel="noreferrer" className="project-action is-primary stretched-link"
                           aria-label={`${title} live demo`}>
                            Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    )}
                    <a href={href} target="_blank" rel="noreferrer" className={`project-action${demo ? '' : ' stretched-link'}`}
                       aria-label={`${title} source code on GitHub`}>
                        <i className="fa-brands fa-github"></i> Code
                    </a>
                </div>
            </ProjectBody>
        </article>
    );
}

// Dev projects (with an href) link out; design projects open the gallery modal.
function ProjectCard({ project, index, onOpenDesign }) {
    const style = { '--i': index };

    if (project.href) return <DevCard project={project} style={style} />;

    return (
        <div className="project-card" style={style} onClick={() => onOpenDesign(project)}>
            <ProjectBody project={project} icon="fa-solid fa-expand" />
        </div>
    );
}

export default function Projects({ onOpenDesign }) {
    // Per folder: 'closed' → 'opening' (folder animation plays) → 'open' (cards dealt out)
    const [stages, setStages] = useState({ design: 'closed', dev: 'closed' });
    const setStage = (id, stage) => setStages(prev => ({ ...prev, [id]: stage }));

    const closedGroups = GROUPS.filter(g => stages[g.id] !== 'open');
    const openGroups = GROUPS.filter(g => stages[g.id] === 'open');

    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="projects-header">
                    <div>
                        <div className="hero-tag mb-3">
                            <span></span>
                            <p>PORTFOLIO</p>
                        </div>
                        <h2 className="projects-title">Selected Work</h2>
                    </div>

                    <a href="https://github.com/kirupakaransumugan-lab" target="_blank" rel="noreferrer" className="all-projects-link">
                        ALL PROJECTS <i className="fa-solid fa-arrow-up-right"></i>
                    </a>
                </div>

                {/* Closed folders sit side by side */}
                {closedGroups.length > 0 && (
                    <div className="folder-stage">
                        {closedGroups.map(group => (
                            <ProjectFolder
                                key={group.id}
                                title={group.title}
                                projects={group.projects}
                                opening={stages[group.id] === 'opening'}
                                onOpen={() => setStage(group.id, 'opening')}
                                onOpened={() => setStage(group.id, 'open')}
                            />
                        ))}
                    </div>
                )}

                {/* Opened folders deal their cards out below */}
                {openGroups.map(group => (
                    <div className="folder-group" key={group.id}>
                        <h3 className="folder-group-title">
                            <i className="fa-solid fa-folder-open"></i> {group.title}
                        </h3>

                        <div className="projects-grid folder-cards">
                            {group.projects.map((project, i) => (
                                <ProjectCard key={project.title} project={project} index={i} onOpenDesign={onOpenDesign} />
                            ))}
                        </div>

                        <button type="button" className="folder-close" onClick={() => setStage(group.id, 'closed')}>
                            <i className="fa-solid fa-folder-closed"></i> Close folder
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
