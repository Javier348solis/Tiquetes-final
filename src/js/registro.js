<<<<<<< HEAD
=======
import { darDatosConsulta } from "../services/fetch";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
>>>>>>> 04d42c08288ceb55093a00cd55b1e6cb044338d3
const boton1 = document.getElementById("botoncito");

boton1.addEventListener("click", async function (e) {
    e.preventDefault();

    
    const obtenerDatosFormulario = () => {
        return {
            inputNombre: document.getElementById("espacio-nombre").value,
            inputCorreo: document.getElementById("espacio-correo").value,
            inputContra: document.getElementById("espacio-contraseña").value,
            inputID: document.getElementById("espacio-ID").value
        };
    };

    const { inputNombre, inputCorreo, inputContra, inputID } = obtenerDatosFormulario();

   
    if (!inputNombre || !inputCorreo || !inputContra) {
        alert("Llene todos los espacios");
        return; 
    }


    const listaInput = { inputNombre, inputCorreo, inputContra, inputID };

    try {
        
<<<<<<< HEAD
        await darDatos(listaInput);
=======
        await darDatosConsulta (listaInput);
>>>>>>> 04d42c08288ceb55093a00cd55b1e6cb044338d3
    
        alert("Usuario registrado satisfactoriamente");
        window.location.href = "login.html";
    } catch (error) {
        
        console.error("Error al registrar el usuario:", error);
        alert("Hubo un problema al registrar el usuario. Inténtelo de nuevo.");
    }
});