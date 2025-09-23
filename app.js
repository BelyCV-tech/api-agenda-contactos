const express = require('express');
const app = express();
const port = 3000;

// Importa el módulo de usuarios que acabas de crear
const usuariosModelo = require('./modelos/usuario');

// Middleware para procesar solicitudes con JSON
app.use(express.json());

// Endpoint 1: Listar todos los usuarios (GET)
app.get('/api/usuarios', (req, res) => {
    // Llama a la función del modelo en lugar de usar el arreglo directamente
    res.json(usuariosModelo.listarUsuarios());
});

// Endpoint 2: Crear un nuevo usuario (POST)
app.post('/api/usuarios', (req, res) => {
    const nuevoUsuario = usuariosModelo.crearUsuario(req.body);
    res.status(201).json(nuevoUsuario);
});

// Endpoint 3: Obtener un usuario por su ID (GET)
app.get('/api/usuarios/:id', (req, res) => {
    const usuario = usuariosModelo.obtenerUsuarioPorId(req.params.id);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
});

// Endpoint 4: Actualizar un usuario por su ID (PUT)
app.put('/api/usuarios/:id', (req, res) => {
    const usuarioActualizado = usuariosModelo.actualizarUsuario(req.params.id, req.body);
    if (usuarioActualizado) {
        res.json(usuarioActualizado);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
});

// Endpoint 5: Eliminar un usuario por su ID (DELETE)
app.delete('/api/usuarios/:id', (req, res) => {
    const fueEliminado = usuariosModelo.eliminarUsuario(req.params.id);
    if (fueEliminado) {
        res.status(204).send();
    } else {
        res.status(404).send('Usuario no encontrado');
    }
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});// models/usuario.js

