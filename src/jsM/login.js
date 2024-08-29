
let ingresar = document.getElementById("ingresar");

ingresar.addEventListener("click", async (e) => {
    e.preventDefault();
    
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;


    if (nombre === '' || correo === '' || clave === '') {
        alert("Rellene todos los espacios");
        return; // Termina la función si algún campo está vacío
    }

    // Obtiene los datos de los usuarios
    const usuarios = await getDatos();

    // Verifica si el usuario ingresado coincide
    // find o some
    const usuarioValido = usuarios.find(usuario =>
        usuario.nombre === nombre &&
        usuario.correo === correo &&
        usuario.clave === clave
    );
        
        
        if (usuarioValido) {
            alert('Inicio de sesión exitoso!');
            // window.location.href = 'src/html/consultas.html'
        } else {
            // console.log('izquierda.......usuario '+usuarios.nombre+' correo '+usuarios.clave+" clave ");
            console.log('izquierda.......usuario '+nombre+' clave '+clave+" correo "+ correo);
            alert('Nombre de usuario, correo o contraseña incorrectos.');
        }

});