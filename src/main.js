document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.5 // Die Animation startet, wenn 50% der Sektion sichtbar ist
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});