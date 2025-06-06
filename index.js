// Mensaje de bienvenida
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("welcome-button");
    if (button) {
        button.addEventListener("click", () => {
            alert("¡Bienvenido a Exotic Cars! Explora nuestros modelos exclusivos.");
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (!toggleButton || !menu) return; // Evita errores si los elementos no existen

    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("active"); // Activa/desactiva animación con clase CSS
    });
});