import { useState } from 'react';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Ticker from './components/Ticker.jsx';
import Showcase from './components/Showcase.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import DesignModal from './components/DesignModal.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
    // The design project currently shown in the modal (null = closed)
    const [activeProject, setActiveProject] = useState(null);

    return (
        <>
            <Navbar />
            <Hero />
            <Ticker />
            <Showcase />
            <About />
            <Skills />
            <Projects onOpenDesign={setActiveProject} />
            <DesignModal project={activeProject} onClose={() => setActiveProject(null)} />
            <Contact />
            <Footer />
        </>
    );
}
