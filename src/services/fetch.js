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
export { eliminarLista };