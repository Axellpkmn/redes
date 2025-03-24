// Escucha el evento de scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.fixed-nav');
    const socialIcons = document.querySelectorAll('.social-icon');
    
    // Si se ha hecho scroll hacia abajo
    if (window.scrollY > 550) {
        // Fija la barra de navegación y cambia su estilo
        nav.classList.add('fixed');
        nav.classList.remove('hidden');
        nav.classList.add('fondo-scroll');
        
        // Cambia los iconos a tamaño pequeño
        socialIcons.forEach(icon => {
            icon.classList.add('shrink');
        });
    } else {
        // Si el scroll está en la parte superior, elimina los estilos
        nav.classList.remove('fixed');
        nav.classList.add('hidden');
        nav.classList.remove('fondo-scroll');
        socialIcons.forEach(icon => {
            icon.classList.remove('shrink');
        });
    }
});
