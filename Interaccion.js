// Espera a que todo el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todas las secciones en el documento
    const sections = document.querySelectorAll("section");

    // Crea un nuevo IntersectionObserver para observar las secciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Comprueba si la sección está visible en la ventana
            if (entry.isIntersecting) {
                // Si es visible, añade la clase "visible"
                entry.target.classList.add("visible");
            } else {
                // Si no es visible, quita la clase "visible"
                entry.target.classList.remove("visible");
            }
        });
    }, {
        // Configura el umbral de visibilidad al 10%
        threshold: 0.1
    });

    // Observa cada sección
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Botón de ir arriba
    const goTopButton = document.getElementById("goTop");
    
    // Detecta el desplazamiento de la ventana
    window.onscroll = function() {
        // Muestra el botón si se ha desplazado más de 200px
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            goTopButton.style.display = "block";
        } else {
            goTopButton.style.display = "none";
        }
    };

    // Al hacer clic en el botón, desplázate hacia arriba suavemente
    goTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
