'use strict';
const mongoose = require('mongoose');

// ---------------- Crear el MODELO de datos ---------------
const alumnoSchema = new mongoose.Schema({
    numControl : String,
    nombre : String,
    primerAp : String,
    segundoAp : String,
    fechaNac : String,
    semestre : { type: Number, min: 1, max: 15 },
    carrera : String
});

module.exports = mongoose.model('Alumno', alumnoSchema);