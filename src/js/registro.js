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
        
        await darDatos(listaInput);
    
        alert("Usuario registrado satisfactoriamente");
        window.location.href = "login.html";
    } catch (error) {
        
        console.error("Error al registrar el usuario:", error);
        alert("Hubo un problema al registrar el usuario. Inténtelo de nuevo.");
    }
});