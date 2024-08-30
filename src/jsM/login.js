import { getDatos } from "../services/fetch";

document.getElementById("ingresar").addEventListener("click", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const clave = document.getElementById("clave").value.trim();
    const codigo = document.getElementById("codigo").value.trim();

    if (!nombre || !correo || !clave || !codigo) {
        Swal.fire({
            title: "Exito",
            text: "Rellene los espacios vacios",
            icon: "success"
          });
        return; 
    }

    try {
        const usuarios = await getDatos();

        const usuarioValido = usuarios.find(usuario =>
            usuario.inputNombre === nombre && 
            usuario.inputCorreo === correo &&
            usuario.inputContra === clave &&
            usuario.inputID === codigo
        );

        if (usuarioValido) {
            Swal.fire({
                title: "Exito",
                text: "Bienvenido",
                icon: "success"
              });
            window.location.href= "consultas.html"
        } else {
            Swal.fire({
                title: "Datos incorrectos",
                text: "Usuario no encontrado",
                icon: "error"
              });
        }
    } catch (error) {
        console.error('Error durante el inicio de sesión:', error);
        alert('Hubo un problema al procesar el inicio de sesión. Inténtelo de nuevo.');
    }
});