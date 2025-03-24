// Escucha el evento de scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.fixed-nav');
    const socialIconWrappers = document.querySelectorAll('.social-icon-wrapper');
    
    // Si se ha hecho scroll hacia abajo
    if (window.scrollY > 50) {
        // Fija la barra de navegación y cambia su estilo
        nav.classList.add('fixed');
        
        // Cambia los iconos a tamaño pequeño y agrega el fondo negro a los contenedores
        socialIconWrappers.forEach(wrapper => {
            wrapper.classList.add('shrink');
        });
    } else {
        // Si el scroll está en la parte superior, elimina los estilos
        nav.classList.remove('fixed');
        socialIconWrappers.forEach(wrapper => {
            wrapper.classList.remove('shrink');
        });
    }
});
