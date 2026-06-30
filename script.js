// Highlight active navbar link

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});




// about section 



document.addEventListener('DOMContentLoaded', () => {
 
    const infoCards = document.querySelectorAll('.about-info-card');
 
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger each card's reveal by 120ms
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 120);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
 
    infoCards.forEach(card => observer.observe(card));
 
});
//   skill section — ring animation + count-up

document.addEventListener('DOMContentLoaded', () => {

    const CIRCUMFERENCE = 314; // 2π × 50

    // Inject SVG gradient definition once
    const svgNS = 'http://www.w3.org/2000/svg';
    const defs  = document.createElementNS(svgNS, 'defs');
    defs.innerHTML = `
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stop-color="#ff004f"/>
            <stop offset="100%" stop-color="#ff8ab0"/>
        </linearGradient>`;
    const firstSVG = document.querySelector('.ring-svg');
    if (firstSVG) firstSVG.prepend(defs);

    function animateRing(item) {
        const fill = item.querySelector('.ring-fill');
        const pct  = item.querySelector('.ring-pct');
        const target = parseInt(fill.dataset.pct, 10);

        const offset = CIRCUMFERENCE - (target / 100) * CIRCUMFERENCE;
        fill.style.strokeDashoffset = offset;

        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
            current = Math.min(current + step, target);
            pct.textContent = Math.round(current) + '%';
            if (current >= target) clearInterval(timer);
        }, 22);
    }

    const ringItems = document.querySelectorAll('.skill-ring-item');

    const observer = new IntersectionObserver((entries) => {
        let delay = 0;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    animateRing(entry.target);
                }, delay);
                delay += 130;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    ringItems.forEach(item => observer.observe(item));

});


// ===== PROJECTS — Design Modal (lightweight, event delegation) =====

const modal   = document.getElementById('designModal');
const gallery = document.getElementById('designModalGallery');
const mTitle  = document.getElementById('designModalTitle');
const mDesc   = document.getElementById('designModalDesc');

document.querySelector('.projects-grid').addEventListener('click', e => {
    const card = e.target.closest('[data-design]');
    if (!card) return;

    const imgs = [...card.querySelectorAll('img')].map(img => img.src);
    gallery.innerHTML = imgs.map(src => `<img src="${src}">`).join('');
    mTitle.textContent = card.dataset.title;
    mDesc.textContent  = card.dataset.desc;

    modal.classList.add('open');
    document.body.classList.add('modal-open');
});

modal.addEventListener('click', e => {
    if (e.target.closest('#designModalClose') || e.target.classList.contains('design-modal-overlay')) {
        modal.classList.remove('open');
        document.body.classList.remove('modal-open');
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        modal.classList.remove('open');
        document.body.classList.remove('modal-open');
    }
});