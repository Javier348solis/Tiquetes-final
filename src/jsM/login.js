import { getDatos } from "../services/fetch";

document.getElementById("ingresar").addEventListener("click", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const clave = document.getElementById("clave").value.trim();
    const codigo = document.getElementById("codigo").value.trim();

    if (!nombre || !correo || !clave || !codigo) {
        alert("Rellene todos los espacios");
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
            alert('Inicio de sesión exitoso!');
            window.location.href= "consultas.html"
        } else {
            alert('Nombre de usuario, correo o contraseña incorrectos.');
        }
    } catch (error) {
        console.error('Error durante el inicio de sesión:', error);
        alert('Hubo un problema al procesar el inicio de sesión. Inténtelo de nuevo.');
    }
});