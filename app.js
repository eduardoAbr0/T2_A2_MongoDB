'use strict'

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connection = require('./config/server');
const flash = require('express-flash');

const app = express();
const PORT = 3005;

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(PORT, () => {
    console.log(`Servidor ejecutando en el PUERTO:${PORT}`);
});

app.get('/', (req, res)=>{
    res.render('index')
});

const rutas_alumnos = require('./routes/alumnos_routes');
app.use('/alumnos', rutas_alumnos);