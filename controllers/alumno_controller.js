'use strict'
const Alumno = require('../models/alumno');

//----REGISTROS----
exports.create = async (req, res) => {
    console.log('Datos entrantes registro:', req.body);
    try {
        const alumno = new Alumno({
            numControl : req.body.numControl,
            nombre: req.body.nombre,
            primerAp : req.body.primerAp,
            segundoAp : req.body.segundoAp,
            fechaNac : req.body.fechaNac,
            semestre : req.body.semestre,
            carrera: req.body.carrera
        });
        await alumno.save();
        res.status(201).json({ exito: true, alumno });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//----ELIMINACIONES----
exports.delete = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id);
        if (!alumno) return res.status(404).json({ message: 'Alumno no encontrado' });
        await alumno.deleteOne();
        res.status(200).json({ message: 'Alumno eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//----MODIFICACIONES----
exports.update = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id);
        if (!alumno) return res.status(404).json({ message: 'Alumno no encontrado' });

        alumno.nombre = req.body.nombre;
        alumno.primerAp = req.body.primerAp;
        alumno.segundoAp = req.body.segundoAp;
        alumno.fechaNac = req.body.fechaNac;
        alumno.semestre = req.body.semestre;
        alumno.carrera = req.body.carrera;

        await alumno.save();
        res.status(200).json({ exito: true, alumno });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


//----CONSULTAS----
exports.findById = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id);
        if (!alumno) return res.status(404).json({ message: 'Alumno no encontrado' });
        res.status(200).json(alumno);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        res.status(200).json(alumnos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.findByNumControl = async (req, res) => {
    try {
        const alumno = await Alumno.findOne({ numControl: req.params.numControl });
        //console.log("Alumno encontrado: "+ alumno);
        res.status(200).json(alumno);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};