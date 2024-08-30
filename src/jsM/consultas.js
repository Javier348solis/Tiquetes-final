import { darDatosConsulta } from "../services/fetch";
const estadisticas = document.getElementById("estadisticas");
let guardarConsultas = document.getElementById("guardarconsultas");
let consultasContainer = document.getElementById("consultas-container");
let listaConsultas = JSON.parse(localStorage.getItem("ListaConsultas")) || [];

// Función para mostrar las consultas
function mostrarConsultas() {
    // Limpiar el contenedor
    consultasContainer.innerHTML = '';

    // Obtener la plantilla
    let template = document.getElementById("consulta-template");

    // Recorrer la lista de consultas y crear elementos para cada una
    listaConsultas.forEach(consulta => {
        // Clonar el contenido de la plantilla
        let consultaElement = document.importNode(template.content, true);

        // Rellenar el contenido de la plantilla
        consultaElement.querySelector(".nombre").textContent = consulta.nombre;
        consultaElement.querySelector(".tipoconsulta").textContent = consulta.tipoConsulta;
        consultaElement.querySelector(".consulta").textContent = consulta.consultas;
        consultaElement.querySelector(".fecha").textContent = consulta.fecha;
        consultaElement.querySelector(".time").textContent = consulta.time

        // Añadir el elemento al contenedor
        consultasContainer.appendChild(consultaElement);
    });
}

// Manejar el evento de clic en el botón
guardarConsultas.addEventListener("click", async() => {
    let inputNombre = document.getElementById("inputnombre").value;
    let select = document.getElementById("select").value;
    let inputConsultas = document.getElementById("inputconsulta").value;
    let inputFecha = document.getElementById("inputfecha").value;
    let inputTime = document.getElementById("inputtime").value;

    if (inputNombre === '' || inputConsultas === '' || inputFecha === '' || inputTime === '' || select === '') {
        alert("Rellene todos los espacios");
        return; // Termina la función si algún campo está vacío
    }

    // 
    let nuevaConsulta = { 
        nombre: inputNombre,
        tipoConsulta: select,
        consultas: inputConsultas,
        fecha: inputFecha,
        time: inputTime
    };
    listaConsultas.push(nuevaConsulta);
    localStorage.setItem("ListaConsultas", JSON.stringify(listaConsultas));
    await darDatosConsulta(nuevaConsulta)
    // Limpiar los inputs
    document.getElementById("inputnombre").value = '';
    document.getElementById("select").value = '';
    document.getElementById("inputconsulta").value = '';
    document.getElementById("inputfecha").value = '';
    document.getElementById("inputtime").value = '';

});

// Mostrar las consultas al cargar la página
mostrarConsultas();

estadisticas.addEventListener("click", function () {
    window.location.href= "estadisticas.html"
})













// let inputNombre = document.getElementById("inputnombre").value;
// let inputConsultas = document.getElementById("inputconsulta").value;
// let inputFecha = document.getElementById("inputfecha").valuinpute;

// if (inputNombre === '' || inputConsultas === '' || inputFecha === '') {
//     alert("Rellene todos los espacios");
//     return; // Termina la función si algún campo está vacío
// }

// let nuevaConsulta = { 
//     nombre: inputNombre,
//      consultas: inputConsultas,
//      fecha: inputFecha,
//     };

//     listaConsultas.push(nuevaConsulta);
// localStorage.setItem("ListaConsultas", JSON.stringify(listaConsultas));
// document.getElementById("inputnombre").value = ''; // Limpiar input
// document.getElementById("inputconsulta").value = ''; // Limpiar input
// document.getElementById("inputfecha").value = ''; // Limpiar input