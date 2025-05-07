// Mensaje de bienvenida
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('welcome-button');
    button.addEventListener('click', () => {
        alert('¡Bienvenido a Exotic Cars! Explora nuestros modelos exclusivos.');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('catalogo-button');
    button.addEventListener('click', () => {
        window.location.href = 'catalogo.html';
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const agendarButton = document.getElementById("agendar-button");
    const formulario = document.getElementById("formulario-cita");

    agendarButton.addEventListener("click", () => {
        formulario.style.display = formulario.style.display === "none" ? "block" : "none";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const formularioContacto = document.getElementById("formulario-contacto");
    const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");

    formularioContacto.addEventListener("submit", (event) => {
        event.preventDefault(); 
       
        
        mensajeConfirmacion.style.display = "block"; 
        formularioContacto.reset(); 
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const comprarButton = document.getElementById("comprar-button");
    const formularioCompra = document.getElementById("formulario-compra");

    comprarButton.addEventListener("click", () => {
        formularioCompra.style.display = formularioCompra.style.display === "none" ? "block" : "none";
    });
});
