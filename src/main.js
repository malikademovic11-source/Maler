document.addEventListener('DOMContentLoaded', () => {
    // Dieser Teil beobachtet die Hauptsektionen und ist bereits in deinem Code
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // NEUER CODE: Dieser Teil beobachtet die ki-boxen
    const kiBoxes = document.querySelectorAll('.ki-box');
    const kiBoxObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.5
    });

    kiBoxes.forEach(box => {
        kiBoxObserver.observe(box);
    });
});
