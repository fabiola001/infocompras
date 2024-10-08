const express = require('express');
const router = express.Router();
const clienteController= require('../controller/clienteController');

// Ruta para iniciar sesión

// Ruta para registrar un nuevo usuario 
router.post('/register', clienteController.register)

module.exports = router;
