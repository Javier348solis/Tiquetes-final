import { getDatos } from "../services/fetch";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

document.getElementById("ingresar").addEventListener("click", async (e) => {
    e.preventDefault();

    // Obtener y limpiar datos del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const clave = document.getElementById("clave").value.trim();
    const codigo = document.getElementById("codigo").value.trim();

    // Verificar si todos los campos están llenos
    if (!nombre || !correo || !clave || !codigo) {
        await Swal.fire({
            title: "Error",
            text: "Rellene todos los campos vacíos",
            icon: "warning"
        });
        return; 
    }

    try {
        // Obtener los datos de usuarios desde el backend
        const usuarios = await getDatos();

        // Validar si el usuario existe
        const usuarioValido = usuarios.find(usuario =>
            usuario.inputNombre === nombre &&
            usuario.inputCorreo === correo &&
            usuario.inputContra === clave &&
            usuario.inputID === codigo
        );

        // Mostrar mensaje dependiendo del resultado de la validación
        if (usuarioValido) {
            await Swal.fire({
                title: "Éxito",
                text: "Bienvenido",
                icon: "success"
            });
            window.location.href = "consultas.html";
        } else {
            await Swal.fire({
                title: "Datos incorrectos",
                text: "Usuario no encontrado",
                icon: "error"
            });
        }
    } catch (error) {
        console.error("Error al verificar usuario:", error);
        await Swal.fire({
            title: "Error",
            text: "Hubo un problema al verificar el usuario. Inténtelo de nuevo.",
            icon: "error"
        });
    }
});
