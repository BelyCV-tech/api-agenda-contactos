// Simulación de una base de datos con un arreglo
let usuarios = [
    { id: 1, nombre: 'Ana García', email: 'ana.g@example.com' },
    { id: 2, nombre: 'Luis Pérez', email: 'luis.p@example.com' },
    { id: 3, nombre: 'María López', email: 'maria.l@example.com' },
];

// Función para obtener todos los usuarios
function listarUsuarios() {
    return usuarios;
}

// Función para obtener un usuario por ID
function obtenerUsuarioPorId(id) {
    // Convierte el ID a número y busca
    return usuarios.find(u => u.id === parseInt(id));
}

// Función para crear un nuevo usuario
function crearUsuario(nuevoUsuario) {
    // Asigna un ID (simulado) y agrega el nuevo usuario
    const nuevoId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
    nuevoUsuario.id = nuevoId;
    usuarios.push(nuevoUsuario);
    return nuevoUsuario;
}

// Función para actualizar un usuario
function actualizarUsuario(id, datosActualizados) {
    const usuario = obtenerUsuarioPorId(id);
    if (!usuario) {
        return null; // El usuario no se encontró
    }
    Object.assign(usuario, datosActualizados);
    return usuario;
}

// Función para eliminar un usuario
function eliminarUsuario(id) {
    const index = usuarios.findIndex(u => u.id === parseInt(id));
    if (index === -1) {
        return false; // El usuario no se encontró
    }
    usuarios.splice(index, 1);
    return true; // Eliminación exitosa
}

// Exporta las funciones para que puedan ser usadas en otros archivos
module.exports = {
    listarUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};