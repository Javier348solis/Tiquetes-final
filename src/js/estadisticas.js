import { getDatosConsul } from "../services/fetch";
import { eliminarLista } from "../services/fetch";
import { actualizarLista } from "../services/fetch";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
document.addEventListener('DOMContentLoaded', () => {
    const consultasBody = document.getElementById('consultasBody');
    const editModal = document.getElementById('editModal');
    const modalInput = document.getElementById('modalInput');
    const saveBtn = document.getElementById('saveBtn');
    const closeBtn = document.querySelector('.close');
    let currentEditIndex = null;

    // Obtener las consultas del localStorage
    function getConsultas() {
        return JSON.parse(localStorage.getItem('ListaConsultas')) || [];
    }

    // Guardar las consultas en el localStorage
    function saveConsultas(consultas) {
        localStorage.setItem('ListaConsultas', JSON.stringify(consultas));
    }

    function renderTable() { 
        consultasBody.innerHTML = '';

        const consultas = getDatosConsul(); // Obtener las consultas actualizadas

        consultas.forEach((consulta, index) => {
            const row = document.createElement('tr');

            const actionsCell = document.createElement('td');
            actionsCell.innerHTML = `
                <button class="edit" onclick="editRow(${index})">Editar</button>
                <button class="delete" onclick="deleteRow(${index})">Eliminar</button>
                <button class="done" onclick="markAsDone(${index})">Listo</button>
            `;

            const nombreCell = document.createElement('td');
            nombreCell.textContent = consulta.nombre;

            const tipoConsultaCell = document.createElement('td');
            tipoConsultaCell.textContent = consulta.tipoConsulta;

            const consultasCell = document.createElement('td');
            consultasCell.textContent = consulta.consultas;

            const fechaCell = document.createElement('td');
            fechaCell.textContent = consulta.fecha;

            const timeCell = document.createElement('td');
            timeCell.textContent = consulta.time;

            row.appendChild(actionsCell);
            row.appendChild(nombreCell);
            row.appendChild(tipoConsultaCell);
            row.appendChild(consultasCell);
            row.appendChild(fechaCell);
            row.appendChild(timeCell);

            consultasBody.appendChild(row);
          
        });
       
    }
  

    window.editRow = (index) => {
        const consultas = getConsultas();
        currentEditIndex = index;
        modalInput.value = consultas[index].consultas;
        editModal.style.display = 'block';
    };

    closeBtn.onclick = () => {
        editModal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == editModal) {
            editModal.style.display = 'none';
        }
    };

    saveBtn.onclick = () => {
        if (currentEditIndex !== null) {
            const consultas = getConsultas();
            consultas[currentEditIndex].consultas = modalInput.value;
            saveConsultas(consultas);
            renderTable();
            editModal.style.display = 'none';
            currentEditIndex = null;
        }
    };

    window.deleteRow = async (index) => {
        if (confirm('¿Está seguro de que desea eliminar esta consulta?')) {
           await eliminarLista(index);
        }
    };
    

    window.markAsDone = (index) => {
        alert('Consulta marcada como lista');
    };

    renderTable();
});