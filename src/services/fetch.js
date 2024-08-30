<<<<<<< HEAD
//Post
export async function darDatos(data) {
    try {
        const response = await fetch('http://localhost:3000/users', { // Cambia la URL si es necesario
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log('Datos guardados exitosamente:', result);
    } catch (error) {
        console.error('Error al guardar datos:', error);
    }
}
//GET
// ../services/fetch.js
 export async function getDatos() {
    try {
        const response = await fetch('http://localhost:3000/users'); // Ajusta la URL según sea necesario
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json(); // Asegúrate de que el JSON sea el formato correcto
    } catch (error) {
        console.error( error);
        return []; // Devuelve un array vacío en caso de error para evitar fallos
    }
}

// DELETE
async function eliminarLista(id) { // Asumiendo que se debe eliminar por ID
    try {
        const response = await fetch(`http://localhost:3002/users/${id}`, { // Utiliza el ID en la URL
=======
// POST
async function darDatosConsulta(obj) {
    try {
        const respuesta = await fetch("http://localhost:3003/consultas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(obj)
        });
        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud POST: ${respuesta.statusText}`);
        }
        const data = await respuesta.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error( error);
        return null;
    }
}
export { darDatosConsulta };

// GET
async function getDatos() {
    try {
        const response = await fetch('http://localhost:3003/users');
        if (!response.ok) {
            throw new Error(`Error fetching users: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}
export {getDatos};

// GET consultas
async function getDatosConsul() {
    try {
        const response = await fetch('http://localhost:3003/consultas');
        if (!response.ok) {
            throw new Error(`Error fetching users: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}
export { getDatosConsul };

// DELETE
async function eliminarLista(id) {
    try {
        const response = await fetch(`http://localhost:3003/consultas/${id}`, {
>>>>>>> 8e19124f550b9b6bc1187695caaef78fd1cbccc4
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!response.ok) {
            throw new Error(`Error en la solicitud DELETE: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en eliminarLista:", error);
        return null;
    }
}
<<<<<<< HEAD
export { eliminarLista };
=======
export { eliminarLista };


// PUT
async function actualizarLista(obj) {
    try {
        const response = await fetch('http://localhost:3003/users', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        });
        if (!response.ok) {
            throw new Error(`Error en la solicitud PUT: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en actualizarLista:", error);
        return null;
    }
}
export { actualizarLista };
>>>>>>> 8e19124f550b9b6bc1187695caaef78fd1cbccc4
