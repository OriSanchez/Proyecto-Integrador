// script.js
document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.getElementById('title');
    const titleText = titleElement.textContent; // Guarda el texto original
    titleElement.textContent = ''; // Limpia el contenido del h2

    function typeWriter(element, text, delay) {
        let index = 0;

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index); // Añade la letra
                index++;
                setTimeout(type, delay); // Espera antes de escribir la siguiente letra
            } else {
                element.style.opacity = 1; // Muestra el texto al final
            }
        }

        type(); // Llama a la función para comenzar a escribir
    }

    typeWriter(titleElement, titleText, 250); // Muestra el título letra por letra
});







