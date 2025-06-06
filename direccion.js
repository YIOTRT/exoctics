document.addEventListener("DOMContentLoaded", () => {
    const formularioDireccion = document.getElementById("formulario-direccion");

    if (formularioDireccion) {
        formularioDireccion.addEventListener("submit", function(event) {
            event.preventDefault();

            let calle = document.getElementById("calle").value.trim();
            let numero = document.getElementById("numero").value.trim();
            let ciudad = document.getElementById("ciudad").value.trim();
            let estado = document.getElementById("estado").value.trim();
            let codigoPostal = document.getElementById("codigo-postal").value.trim();
            let pais = document.getElementById("pais").value.trim();

            if (!calle || !numero || !ciudad || !estado || !codigoPostal || !pais) {
                alert("Por favor, completa todos los campos antes de guardar la dirección.");
                return;
            }

            // Guardar la dirección en el almacenamiento local
            let direccion = { calle, numero, ciudad, estado, codigoPostal, pais };
            localStorage.setItem("direccionCompra", JSON.stringify(direccion));

            alert("¡Dirección guardada correctamente!");

            // Redirigir a la pestaña anterior
            window.history.back();
        });
    }
});