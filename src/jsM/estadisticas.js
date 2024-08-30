import { eliminarLista, actualizarLista } from "../services/fetch";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

document.addEventListener('DOMContentLoaded', () => {
    const consultasBody = document.getElementById('consultasBody');
    const editModal = document.getElementById('editModal');
    const modalInput = document.getElementById('modalInput');
    const saveBtn = document.getElementById('saveBtn');
    const closeBtn = document.querySelector('.close');
    let currentEditIndex = null;

    function getConsultas() {
        return JSON.parse(localStorage.getItem('ListaConsultas')) || [];
    }

    function saveConsultas(consultas) {
        localStorage.setItem('ListaConsultas', JSON.stringify(consultas));
    }

    function renderTable() {
        consultasBody.innerHTML = '';

        const consultas = getConsultas();

        consultas.forEach((consulta, index) => {
            const row = document.createElement('tr');

            const actionsCell = document.createElement('td');
            actionsCell.innerHTML = `
                <button class="edit" data-index="${index}">Editar</button>
                <button class="delete" data-index="${index}">Eliminar</button>
                <button class="done" data-index="${index}">Listo</button>
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

        setupEventListeners();
    }

    function setupEventListeners() {
        consultasBody.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            if (event.target.classList.contains('edit')) {
                editRow(index);
            } else if (event.target.classList.contains('delete')) {
                deleteRow(index);
            } else if (event.target.classList.contains('done')) {
                markAsDone(index);
            }
        });
    }

    function editRow(index) {
        const consultas = getConsultas();
        currentEditIndex = index;
        modalInput.value = consultas[index].consultas;
        editModal.style.display = 'block';
    }

    closeBtn.onclick = () => {
        editModal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == editModal) {
            editModal.style.display = 'none';
        }
    };

    saveBtn.onclick = async () => {
        if (currentEditIndex !== null) {
            const consultas = getConsultas();
            const updatedConsulta = { ...consultas[currentEditIndex], consultas: modalInput.value };

            try {
                await actualizarLista(currentEditIndex, updatedConsulta); // Actualiza en el backend
                consultas[currentEditIndex] = updatedConsulta; // Actualiza la consulta localmente
                saveConsultas(consultas); // Guarda los cambios en el localStorage
                renderTable(); // Vuelve a renderizar la tabla
                editModal.style.display = 'none';
                currentEditIndex = null;
            } catch (error) {
                Swal.fire('Error', 'No se pudo actualizar la consulta.', 'error');
            }
        }
    };

    async function deleteRow(index) {
        try {
            const result = await Swal.fire({
                title: '¿Está seguro?',
                text: "¡No podrás revertir esta acción!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            });

            if (result.isConfirmed) {
                await eliminarLista(index); // Llama a eliminarLista para eliminar el elemento en el backend
                const consultas = getConsultas();
                consultas.splice(index, 1); // Elimina el elemento de la lista local
                saveConsultas(consultas); // Guarda los cambios en el localStorage
                renderTable(); // Vuelve a renderizar la tabla para reflejar los cambios
                Swal.fire('Eliminado!', 'La consulta ha sido eliminada.', 'success');
            }
        } catch (error) {
            Swal.fire('Error', 'No se pudo eliminar la consulta.', 'error');
        }
    }

    function markAsDone(index) {
        Swal.fire({
            title: 'Consulta marcada como lista',
            icon: 'success'
        });
        // Aquí podrías actualizar el estado de la consulta como "hecho" si es necesario
    }

    renderTable();
});
