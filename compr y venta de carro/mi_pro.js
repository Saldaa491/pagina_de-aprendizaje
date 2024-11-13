// script.js

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const botonEstilos = document.querySelector('.boton-ver-estilos');

    // Agregar un evento de clic al botón
    botonEstilos.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        alert('¡Explora los mejores estilos que tenemos para ti!');
    });
});
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const botonMenu = document.getElementById('botonMenu');
    const cintaOpciones = document.getElementById('cintaOpciones');

    // Agregar un evento de clic al botón
    botonMenu.addEventListener('click', function() {
        // Alternar la visibilidad del menú
        if (cintaOpciones.style.display === 'none' || cintaOpciones.style.display === '') {
            cintaOpciones.style.display = 'block'; // Mostrar el menú
        } else {
            cintaOpciones.style.display = 'none'; // Ocultar el menú
        }
    });

    // Cerrar el menú si se hace clic en una opción
    cintaOpciones.addEventListener('click', function() {
        cintaOpciones.style.display = 'none'; // Ocultar el menú
    });
});

