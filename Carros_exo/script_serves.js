document.addEventListener("DOMContentLoaded", () => {
    const jsPDF = window.jspdf.jsPDF;
    const formulario = document.querySelector("#formulario-cita form");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let servicio = document.getElementById("servicio").value;
        let fecha = document.getElementById("fecha").value;
        let hora = document.getElementById("hora").value;
        let comentarios = document.getElementById("comentarios").value.trim();

        // 📌 1. Validación del número de teléfono (solo números y entre 10 y 15 dígitos)
        let telefonoRegex = /^[0-9]{10}$/;
        if (!telefonoRegex.test(telefono)) {
            alert("El número de teléfono debe contener solo números y tener 10 dígitos.");
            return;
        }

        // 📌 2. Validación de la fecha (no permitir fechas pasadas)
        let fechaSeleccionada = new Date(fecha);
        let fechaActual = new Date();
        fechaActual.setHours(0, 0, 0, 0); // Eliminar horas para comparación correcta

        if (fechaSeleccionada < fechaActual) {
            alert("La fecha seleccionada no puede ser anterior a la actual.");
            return;
        }

        // 📌 3. Validación del correo electrónico (formato correcto)
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, introduce un correo electrónico válido.");
            return;
        }

        // 🚀 Si todas las validaciones pasan, generar PDF
        let numeroCita = "CITA-" + new Date().getTime();
        let doc = new jsPDF();

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

        let pdfBlob = doc.output("blob");
        let pdfURL = URL.createObjectURL(pdfBlob);
        window.open(pdfURL);
        
        doc.save(`Cita_${numeroCita}_${nombre.replace(" ", "_")}.pdf`);

        console.log("Cita generada con éxito:", { nombre, email, telefono, servicio, fecha, hora, comentarios });
    });
});