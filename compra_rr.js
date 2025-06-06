document.addEventListener("DOMContentLoaded", () => {
    const comprarButton = document.getElementById("comprar-button");
    const formularioCompra = document.getElementById("formulario-compra");
    const calcularFinanciamiento = document.getElementById("calcular-financiamiento");
    const resultadoFinanciamiento = document.getElementById("resultado-financiamiento");
    const plazoSelect = document.getElementById("plazo");
    const formularioCompraForm = document.querySelector("#formulario-compra form");

    // Datos fijos del Rolls-Royce Phantom
    const precioAuto = 460000;
    const interesAnual = 5;
    let cuotaMensual = 0;
    let plazoSeleccionado = 0;

    // Mostrar/ocultar el formulario de compra
    if (comprarButton && formularioCompra) {
        comprarButton.addEventListener("click", () => {
            formularioCompra.style.display = (formularioCompra.style.display === "none" || formularioCompra.style.display === "") ? "block" : "none";
        });
    }

    // Cálculo de financiamiento dinámico según el plazo seleccionado
    if (calcularFinanciamiento && plazoSelect) {
        calcularFinanciamiento.addEventListener("click", () => {
            plazoSeleccionado = parseInt(plazoSelect.value);
            let interesMensual = (interesAnual / 100) / 12;
            cuotaMensual = (precioAuto * interesMensual) / (1 - Math.pow(1 + interesMensual, -plazoSeleccionado));

            resultadoFinanciamiento.innerText = `Pago mensual estimado: $${cuotaMensual.toFixed(2)} | Plazo: ${plazoSeleccionado} meses | Tasa de interés: ${interesAnual}%`;
        });
    }

    // Generar PDF con dirección y detalles de financiamiento
    if (formularioCompraForm) {
        formularioCompraForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let nombre = document.getElementById("nombre-comprador").value.trim();
            let email = document.getElementById("email-comprador").value.trim();
            let metodoPago = document.querySelector('input[name="pago"]:checked') ? document.querySelector('input[name="pago"]:checked').value : "No especificado";

            // Recuperar dirección desde almacenamiento local
            let direccion = JSON.parse(localStorage.getItem("direccionCompra"));

            if (!nombre || !email || !direccion || plazoSeleccionado === 0) {
                alert("Por favor, completa todos los campos antes de generar el PDF.");
                return;
            }

            // Importar jsPDF y generar PDF
            const { jsPDF } = window.jspdf;
            let doc = new jsPDF();

            doc.setFont("helvetica", "bold");
            doc.text("CONFIRMACIÓN DE COMPRA - EXOTIC CARS", 20, 20);
            doc.setFont("helvetica", "normal");
            doc.line(20, 25, 190, 25);
            doc.text("Detalles de compra:", 20, 40);
            doc.text(`Nombre: ${nombre}`, 20, 60);
            doc.text(`Correo: ${email}`, 20, 70);
            doc.text("Dirección de entrega:", 20, 80);
            doc.text(`Calle: ${direccion.calle}, No. ${direccion.numero}`, 20, 90);
            doc.text(`Ciudad: ${direccion.ciudad}, Estado: ${direccion.estado}`, 20, 100);
            doc.text(`Código Postal: ${direccion.codigoPostal}`, 20, 110);
            doc.text(`País: ${direccion.pais}`, 20, 120);
            doc.text(`Método de pago: ${metodoPago}`, 20, 130);

            // Sección financiamiento
            doc.setFont("helvetica", "bold");
            doc.text("DETALLES DEL FINANCIAMIENTO", 20, 150);
            doc.setFont("helvetica", "normal");
            doc.line(20, 155, 190, 155);
            doc.text(`Precio del auto: $${precioAuto}`, 20, 170);
            doc.text(`Plazo seleccionado: ${plazoSeleccionado} meses`, 20, 180);
            doc.text(`Tasa de interés anual: ${interesAnual}%`, 20, 190);
            doc.text(`Pago mensual estimado: $${cuotaMensual.toFixed(2)}`, 20, 200);

            doc.line(20, 210, 190, 210);
            doc.text("IMPORTANTE: Revisa los detalles antes de procesar el pago.", 20, 220);

            // Guardar PDF con los datos correctos
            doc.save(`confirmacion_compra_${nombre}_Rolls_Royce_Phantom.pdf`);

            alert("¡Compra confirmada! Tu PDF con detalles de financiamiento se ha generado correctamente.");
        });
    }
});