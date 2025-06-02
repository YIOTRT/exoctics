// Mensaje de bienvenida
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("welcome-button");
    if (button) {
        button.addEventListener("click", () => {
            alert("¡Bienvenido a Exotic Cars! Explora nuestros modelos exclusivos.");
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("catalogo-button");
    if (button) {
        button.addEventListener("click", () => {
            window.location.href = "catalogo.html";
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const agendarButton = document.getElementById("agendar-button");
    const formularioCita = document.getElementById("formulario-cita");

    if (agendarButton && formularioCita) {
        agendarButton.addEventListener("click", () => {
            formularioCita.style.display = formularioCita.style.display === "none" ? "block" : "none";
        });
    } else {
        console.error("Error: No se encontró el botón o el formulario de cita.");
    }

    // Capturar evento de confirmación y generar PDF
    document.querySelector("#formulario-cita form").addEventListener("submit", function(event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let telefono = document.getElementById("telefono").value;
        let servicio = document.getElementById("servicio").value;
        let fecha = document.getElementById("fecha").value;
        let hora = document.getElementById("hora").value;
        let comentarios = document.getElementById("comentarios").value;

        // Generar número de cita único basado en fecha y hora
        let numeroCita = "CITA-" + new Date().getTime(); // Código único usando timestamp

        if (!nombre || !email || !telefono || !servicio || !fecha || !hora) {
            alert("Por favor, completa todos los campos antes de generar el PDF.");
            return;
        }

        // Importar jsPDF
        const { jsPDF } = window.jspdf;
        let doc = new jsPDF();

        // Agregar contenido al PDF
        doc.setFont("helvetica", "bold");
        doc.text("Confirmación de Cita - Exotic Cars", 20, 20);
        doc.setFont("helvetica", "normal");
        doc.text(`Número de cita: ${numeroCita}`, 20, 40);
        doc.text(`Nombre: ${nombre}`, 20, 50);
        doc.text(`Correo: ${email}`, 20, 60);
        doc.text(`Teléfono: ${telefono}`, 20, 70);
        doc.text(`Servicio solicitado: ${servicio}`, 20, 80);
        doc.text(`Fecha y hora: ${fecha} a las ${hora}`, 20, 90);
        doc.text(`Comentarios: ${comentarios || "Sin comentarios"}`, 20, 100);

        // Guardar el PDF con el nombre del usuario y número de cita
        doc.save(`Cita_${numeroCita}_${nombre.replace(" ", "_")}.pdf`);
    });
    console.log("Datos de la cita:", { nombre, email, telefono, servicio, fecha, hora, comentarios });
});
document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault();

    let params = {
        nombre: document.getElementById("nombre-contacto").value,
        email: document.getElementById("email-contacto").value,
        mensaje: document.getElementById("mensaje").value
    };

    console.log("Datos enviados a EmailJS:", params); // Verificar en consola

    emailjs.send("Exoctic_Cars.Mx", "template_uyui1xq", params)
    .then(response => {
        console.log("Correo enviado correctamente", response);
        alert("¡Mensaje enviado! Pronto recibirás respuesta.");
        document.getElementById("formulario-contacto").reset();
    })
    .catch(error => {
        console.error("Error al enviar correo", error);
    });
});