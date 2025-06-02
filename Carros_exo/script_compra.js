document.addEventListener("DOMContentLoaded", () => {
    const comprarButton = document.getElementById("comprar-button");
    const formularioCompra = document.getElementById("formulario-compra");

    // Mostrar/ocultar el formulario de compra
    comprarButton.addEventListener("click", () => {
        formularioCompra.style.display = formularioCompra.style.display === "none" ? "block" : "none";
    });

    // Evento del botón "Confirmar compra"
    document.querySelector("#formulario-compra form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita la recarga de la página

        // Capturar los datos ingresados por el usuario
        let nombre = document.getElementById("nombre-comprador").value;
        let email = document.getElementById("email-comprador").value;
        let direccion = document.getElementById("direccion").value;


        // Verificar que los campos no estén vacíos
        if (!nombre || !email || !direccion ) {
            alert("Por favor, completa todos los campos antes de generar el PDF.");
            return;
        }

        // Importar jsPDF
        const { jsPDF } = window.jspdf;
        let doc = new jsPDF();

        // Agregar contenido al PDF
        doc.setFont("helvetica", "bold");
        doc.text("Confirmación de Compra - Exotic Cars", 20, 20);
        doc.setFont("helvetica", "normal");
        doc.text("Gracias por tu compra. Aquí están los detalles:", 20, 30);
        doc.text(`Nombre: ${nombre}`, 20, 50);
        doc.text(`Correo: ${email}`, 20, 60);
        doc.text(`Dirección de entrega: ${direccion}`, 20, 70);
        doc.text('No. De cuenta : 1234567890', 20, 80);
        doc.text("Fecha de compra: " + new Date().toLocaleDateString(), 20, 100);

        // Guardar PDF con el nombre del comprador
        doc.save(`confirmacion_compra_${nombre}.pdf`);
    });
});