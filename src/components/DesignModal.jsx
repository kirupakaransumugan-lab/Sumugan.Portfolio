import { useEffect } from 'react';

export default function DesignModal({ project, onClose }) {
    const isOpen = project !== null;

    // Lock page scroll + close on Escape while open
    useEffect(() => {
        if (!isOpen) return;

        document.body.classList.add('modal-open');
        const onKey = e => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', onKey);

        return () => {
            document.body.classList.remove('modal-open');
            document.removeEventListener('keydown', onKey);
        };
    }, [isOpen, onClose]);

    return (
        <div className={`design-modal${isOpen ? ' open' : ''}`}>
            <div className="design-modal-overlay" onClick={onClose}></div>

            <div className="design-modal-content">
                <button className="design-modal-close" onClick={onClose} aria-label="Close">
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <div className="design-modal-gallery">
                    {project?.images.map(src => <img key={src} src={src} alt={project.title} />)}
                </div>

                <div className="design-modal-info">
                    <h3>{project?.title}</h3>
                    <p>{project?.description}</p>
                </div>
            </div>
        </div>
    );
}
