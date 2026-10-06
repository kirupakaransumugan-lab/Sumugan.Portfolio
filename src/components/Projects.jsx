import { useState } from 'react';
import { designProjects, devProjects } from '../data.js';
import ProjectFolder from './ProjectFolder.jsx';

// Each group is packed in its own folder until clicked.
const GROUPS = [
    { id: 'design', title: 'GRAPHIC DESIGN', projects: designProjects },
    { id: 'dev', title: 'DEVELOPMENT', projects: devProjects },
];

function ProjectBody({ project, icon }) {
    return (
        <>
            <div className="project-img">
                <span className="project-tag">{project.tag}</span>
                <span className="project-link"><i className={icon}></i></span>
                <img src={project.images[0]} alt={project.title} />
            </div>
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tools">
                    {project.tools.map(tool => <span key={tool}>{tool}</span>)}
                </div>
            </div>
        </>
    );
}

// Dev projects (with an href) link to GitHub; design projects open the gallery modal.
function ProjectCard({ project, index, onOpenDesign }) {
    const style = { '--i': index };

    if (project.href) {
        return (
            <a href={project.href} target="_blank" rel="noreferrer" className="project-card project-card-dev" style={style}>
                <ProjectBody project={project} icon="fa-brands fa-github" />
            </a>
        );
    }

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
