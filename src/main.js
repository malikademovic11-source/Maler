document.addEventListener('DOMContentLoaded', () => {
    // Hamburger-Menü Funktionalität
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.getElementById('haupt-navigation');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Keine Animationen in dieser Version, daher ist der Observer-Code nicht mehr nötig.
});