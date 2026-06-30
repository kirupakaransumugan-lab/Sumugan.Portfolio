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


// ===== CONTACT FORM — Basic submit handling (no backend) =====
// Paste into script.js

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const btn = contactForm.querySelector('.form-submit-btn');
        const originalText = btn.textContent;

        btn.textContent = 'Message Sent ✓';
        btn.style.opacity = '0.8';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.opacity = '1';
            contactForm.reset();
        }, 2200);

        // TODO: replace this with an actual fetch() call to your
        // backend / email service (e.g. Formspree, EmailJS) when ready.
    });
}