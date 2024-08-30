import { getDatos, darDatos } from '../services/fetch';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

const boton1 = document.getElementById("botoncito");

boton1.addEventListener("click", async function (e) {
    e.preventDefault();
    
    // Función para obtener datos del formulario
    const obtenerDatosFormulario = () => {
        return {
            inputNombre: document.getElementById("espacio-nombre").value.trim(),
            inputCorreo: document.getElementById("espacio-correo").value.trim(),
            inputContra: document.getElementById("espacio-contraseña").value.trim(),
            inputID: document.getElementById("espacio-ID").value.trim()
        };
    };

    const { inputNombre, inputCorreo, inputContra, inputID } = obtenerDatosFormulario();
   
    // Validar que todos los campos requeridos están completos
    if (!inputNombre || !inputCorreo || !inputContra) {
        await Swal.fire({
            title: "Error",
            text: "Por favor, llene todos los espacios!!",
            icon: "error"
        });
        return; 
    }

    const listaInput = { inputNombre, inputCorreo, inputContra, inputID };

    try {
        // Enviar datos al backend
        await darDatos(listaInput);

        // Mostrar mensaje de éxito y redirigir al usuario
        await Swal.fire({
            title: "Éxito",
            text: "Usuario registrado satisfactoriamente",
            icon: "success"
        });
        window.location.href = "login.html";
    } catch (error) {
        // Mostrar mensaje de error en caso de fallo
        console.error("Error al registrar el usuario:", error);
        await Swal.fire({
            title: "Problema",
            text: "Hubo un problema al registrar el usuario. Inténtelo de nuevo.",
            icon: "error"
        });
    }
});
