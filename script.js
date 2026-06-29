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
//   skill section


const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {

    const progress = circle.querySelector(".progress");

    const radius = 58;
    const circumference = 2 * Math.PI * radius;

    const percent = circle.dataset.percent;

    progress.style.strokeDasharray = circumference;

    const offset = circumference - (percent / 100) * circumference;

    setTimeout(() => {
        progress.style.strokeDashoffset = offset;
    }, 300);

});