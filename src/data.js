// All repeated portfolio content lives here so components can just .map() over it.

export const socials = [
    { href: 'https://www.linkedin.com/in/kirupakaran-sumugan-94b541244/', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
    { href: 'https://github.com/kirupakaransumugan-lab', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'https://www.instagram.com/ks_sanga27/', icon: 'fab fa-instagram', label: 'Instagram' },
];

export const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];

export const heroStats = [
    { value: '10+', label: 'PROJECTS DONE', icon: 'fa-regular fa-folder' },
    { value: '6+', label: 'MONTHS EXP.', icon: 'fa-regular fa-clock' },
    { value: '5+', label: 'HAPPY CLIENTS', icon: 'fa-solid fa-user-group' },
];

export const tickerItems = ['GRAPHIC DESIGN', 'UI - UX DESIGN', 'WEB DEVELOPMENT', 'CREATIVE DIRECTION'];

export const aboutInfo = [
    { label: 'NAME', value: 'Kirupakaran Sumugan' },
    { label: 'LOCATION', value: 'Jaffna, Sri Lanka.' },
    { label: 'AVAILABILITY', value: 'Freelance / Full-time' },
    { label: 'EXPERIENCE', value: '6+ Months' },
];

// Skills section — stat chips + grouped tool cards.
// A tool shows either a Font Awesome `icon` or a short text `mark` (for brands FA doesn't include).
export const skillStats = [
    { value: '10+', label: 'Technologies', icon: 'fa-solid fa-code', color: '#3b8bff' },
    { value: '5+', label: 'Core Skills', icon: 'fa-solid fa-layer-group', color: '#22c55e' },
    { value: '100%', label: 'Always Learning', icon: 'fa-regular fa-heart', color: '#ec4899' },
];

export const skillGroups = [
    {
        title: 'Frontend Development',
        subtitle: 'Building responsive and modern web interfaces',
        icon: 'fa-solid fa-code',
        color: '#3b8bff',
        tools: [
            { name: 'HTML', icon: 'fa-brands fa-html5', color: '#e34f26' },
            { name: 'CSS', icon: 'fa-brands fa-css3-alt', color: '#3b82f6' },
            { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#8b5cf6' },
            { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' },
            { name: 'React', icon: 'fa-brands fa-react', color: '#61dafb' },
        ],
    },
    {
        title: 'Backend Development',
        subtitle: 'APIs, databases and server-side logic',
        icon: 'fa-solid fa-layer-group',
        color: '#22c55e',
        tools: [
            { name: 'Python', icon: 'fa-brands fa-python', color: '#ffd43b' },
            { name: 'FastAPI', icon: 'fa-solid fa-bolt', color: '#14b8a6' },
            { name: 'MySQL', icon: 'fa-solid fa-database', color: '#5ea1d8' },
            { name: 'MongoDB', icon: 'fa-solid fa-leaf', color: '#47a248' },
        ],
    },
    {
        title: 'Design & UI/UX',
        subtitle: 'Designing clean and user-friendly experiences',
        icon: 'fa-solid fa-paintbrush',
        color: '#ec4899',
        tools: [
            { name: 'Figma', icon: 'fa-brands fa-figma', color: '#f24e1e' },
            { name: 'Photoshop', mark: 'Ps', color: '#31a8ff', bg: '#001e36' },
            { name: 'Illustrator', mark: 'Ai', color: '#ff9a00', bg: '#330000' },
            { name: 'Canva', mark: 'C', color: '#fff', bg: 'linear-gradient(135deg,#00c4cc,#7d2ae8)', round: true },
        ],
    },
    {
        title: 'Development Tools',
        subtitle: 'Tools that make development faster',
        icon: 'fa-solid fa-gear',
        color: '#94a3b8',
        tools: [
            { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#f05032' },
            { name: 'GitHub', icon: 'fa-brands fa-github', color: '#fff' },
            { name: 'VS Code', icon: 'fa-solid fa-code', color: '#3b8bff' },
            { name: 'Postman', icon: 'fa-solid fa-paper-plane', color: '#ff6c37' },
            { name: 'Trello', icon: 'fa-brands fa-trello', color: '#3b82f6' },
        ],
    },
    {
        title: 'AI & Productivity',
        subtitle: 'AI tools for learning, coding and creativity',
        icon: 'fa-solid fa-wand-magic-sparkles',
        color: '#8b5cf6',
        tools: [
            { name: 'ChatGPT', icon: 'fa-solid fa-brain', color: '#10a37f' },
            { name: 'Claude', icon: 'fa-solid fa-asterisk', color: '#d97757' },
            { name: 'Gemini', mark: '✦', color: '#7b9cff' },
            { name: 'Perplexity', icon: 'fa-solid fa-compass', color: '#20b8cd' },
            { name: 'Cursor', icon: 'fa-solid fa-terminal', color: '#fff' },
        ],
    },
    {
        title: 'Other Tools',
        subtitle: 'Additional tools I work with',
        icon: 'fa-solid fa-table-cells-large',
        color: '#64748b',
        tools: [
            { name: 'MySQL', icon: 'fa-solid fa-database', color: '#5ea1d8' },
            { name: 'Google Products', icon: 'fa-brands fa-google', color: '#4285f4' },
            { name: 'Notion', mark: 'N', color: '#111', bg: '#fff' },
            { name: 'Docker', icon: 'fa-brands fa-docker', color: '#2496ed' },
            { name: 'Vercel', mark: '▲', color: '#fff' },
        ],
    },
];

// Design projects open a gallery modal; `images[0]` is the card cover.
export const designProjects = [
    {
        title: 'Scribble Arts',
        tag: 'Scribble Art',
        description: 'Creative doodle-style artwork designed using Adobe Photoshop, combining freehand sketches with digital editing to create unique and expressive illustrations.',
        tools: ['Artwork'],
        images: ['/Assets/vj.jpg', '/Assets/vjs.jpg', '/Assets/vaadivaasal2d.jpg', '/Assets/TVK Vijay poster copy.jpg'],
    },
    {
        title: 'Creative Flyers',
        tag: 'CREATIVE POSTERS',
        description: 'Modern flyers designs created using Adobe Photoshop with a focus on creativity, branding, and visual communication.',
        tools: ['Flyers'],
        images: ['/Assets/poster 4 astro.jpg', '/Assets/popster 3.jpg', '/Assets/poster 2.jpg'],
    },
    {
        title: 'Posters',
        tag: 'POSTERS',
        description: 'Modern poster designs created using Adobe Photoshop with a focus on creativity, branding, and visual communication.',
        tools: ['Type Design'],
        images: ['/Assets/quric cnc light.jpg', '/Assets/qurix cnc cut.jpg', '/Assets/Dramatic Background.jpg'],
    },
];

// Dev projects link straight to GitHub.
export const devProjects = [
    {
        title: 'NallaBid',
        tag: 'TEAM PROJECT',
        description: 'A smart procurement platform that connects Buyers and Suppliers in one transparent network. Suppliers manage a product catalogue with CSV import, while a React frontend talks to a FastAPI + MySQL backend secured with JWT authentication and Argon2 password hashing.',
        tools: ['React', 'FastAPI', 'MySQL', 'Bootstrap'],
        images: ['/Assets/nallabid.jpg'],
        href: 'https://github.com/kirupakaransumugan-lab/NallaBid_team_lethimcook.git',
    },
    {
        title: 'Lucky Companion',
        tag: 'DESKTOP APP',
        description: 'A tiny animated charm that hangs on your Windows desktop. Pick a charm on the website, press "Put it on my desktop", and a custom luckycompanion:// link launches a transparent, always-on-top Electron app where the charm sways and can be flicked.',
        tools: ['Electron', 'React', 'Vite'],
        images: ['/Assets/lucky-companion.jpg'],
        href: 'https://github.com/kirupakaransumugan-lab/LuckyCompanion_V1.git',
        builtWith: { name: 'Claude', logo: '/Assets/claude-logo.png' },
    },
    {
        title: 'Namma Kitchen',
        tag: 'FULL-STACK',
        description: 'A single-restaurant food ordering platform with separate Admin, Restaurant Owner and Customer roles. React + Vite frontend, FastAPI backend with a MySQL database, secured with JWT login, Argon2 password hashing and role-based access.',
        tools: ['React', 'FastAPI', 'MySQL', 'JWT'],
        images: ['/Assets/namma-kitchen.jpg'],
        href: 'https://github.com/kirupakaransumugan-lab/nammakitchen_foodordering.git',
    },
    {
        title: 'Spotify Clone UI',
        tag: 'UI/UX DESIGN',
        description: 'Energy song paly page  with a dark-mode design system and complex data visualisation components.',
        tools: ['UI Design', 'HTML CSS', 'JS'],
        images: ['/Assets/spotify.png'],
        href: 'https://github.com/kirupakaransumugan-lab/spotifyclone_UKI_GR4.git',
    },
    {
        title: 'Construction Portfolio',
        tag: 'Company Portfolio',
        description: 'A modern and responsive portfolio website for a construction company, designed to showcase services, projects, and company expertise.',
        tools: ['HTML', 'CSS & JS'],
        images: ['/Assets/Screenshot 2026-06-30 104506.png'],
        href: 'https://github.com/kirupakaransumugan-lab/BuildX_portfolio.git',
    },
    {
        title: 'Hand MOUSE',
        tag: 'DEVELOPMENT',
        description: 'Responsive Hand Gesture Mouse Controller is a Python-based computer vision project that lets users control the mouse cursor using hand gestures captured through a webcam. The system uses OpenCV for camera input, MediaPipe for hand tracking, and PyAutoGUI for mouse control. The index finger moves the cursor, while a thumb-index pinch performs a click. This project demonstrates real-time hand tracking, gesture recognition, and human-computer interaction.',
        tools: ['Python', 'Open CV', 'Media Pipe', 'PyAutoGUI'],
        images: ['/Assets/hand-mouse.jpg'],
        href: 'https://github.com/kirupakaransumugan-lab/Sumugan.Portfolio.git',
    },
];

export const contactInfo = [
    { label: 'EMAIL', value: 'kirupakaransumugan@gmail.com', icon: 'fa-solid fa-envelope' },
    { label: 'PHONE', value: '+94 75 012 8963', icon: 'fa-solid fa-phone' },
    { label: 'LOCATION', value: 'Uduvil, Jaffna, Sri Lanka.', icon: 'fa-solid fa-location-dot' },
];
