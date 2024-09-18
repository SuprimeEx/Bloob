
alert("El archivo JS se ha cargado correctamente");
// Animaciones para las Secciones de Desplazamiento
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.container');
    let screenSize = window.innerHeight;

    elements.forEach(element => {
        let elementPosition = element.getBoundingClientRect().top;
        if (elementPosition < screenSize) {
            element.classList.add('visible');
        }
    });
});


// Slider de Imágenes en la Sección del Proyecto (Placeholder)
function initSlider() {
    let images = document.querySelectorAll('.proyecto-imagenes img');
    let currentImageIndex = 0;

    function showNextImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000); // Cambia de imagen cada 3 segundos
}

// Botón "Volver al Inicio"
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) { 
        backToTopButton.style.display = "block";
    } else { 
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener("click", function() {
    window.scrollTo(0, 0);
});
