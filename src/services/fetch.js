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