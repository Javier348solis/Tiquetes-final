
// let inputNombre = document.getElementById("inputnombre")
let guardarConsultas = document.getElementById("guardarconsultas")

let listaConsultas = JSON.parse(localStorage.getItem("ListaConsultas")) || [];

guardarConsultas.addEventListener("click", async() => {
    let inputNombre = document.getElementById("inputnombre").value;
    let inputConsultas = document.getElementById("inputconsulta").value;
    let inputFecha = document.getElementById("inputfecha").valuinpute;

    if (inputNombre === '' || inputConsultas === '' || inputFecha === '') {
        alert("Rellene todos los espacios");
        return; // Termina la función si algún campo está vacío
    }

    let nuevaConsulta = { 
        nombre: inputNombre,
         consultas: inputConsultas,
         fecha: inputFecha,
        };

        listaConsultas.push(nuevaConsulta);
    localStorage.setItem("ListaConsultas", JSON.stringify(listaConsultas));
    document.getElementById("inputnombre").value = ''; // Limpiar input
    document.getElementById("inputconsulta").value = ''; // Limpiar input
    document.getElementById("inputfecha").value = ''; // Limpiar input
});