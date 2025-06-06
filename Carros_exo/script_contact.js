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