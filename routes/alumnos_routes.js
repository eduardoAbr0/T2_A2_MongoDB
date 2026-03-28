'use strict'
const express = require('express');
const router = express.Router();
const alumno_controller = require('../controllers/alumno_controller');

//Ruta para mostrar TODOS los alumnos
router.get('/', alumno_controller.findAll);

//altas
router.post('/', alumno_controller.create);

//consultar alumno
router.get('/buscar/:numControl', alumno_controller.findByNumControl);
router.get('/:id', alumno_controller.findById);

//modificar alumno
router.put('/:id', alumno_controller.update);

//eliminar
router.delete('/:id', alumno_controller.delete);

module.exports = router;