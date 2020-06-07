const express = require('express');
const usuariosController = require('../controllers/userControllers');
const router = express.Router();

router.post('/', 
    usuariosController.crearUsuario
)

module.exports = router;