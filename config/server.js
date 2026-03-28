'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://eduardobr:miss2258@ac-vu6l6ic-shard-00-00.lgyznu6.mongodb.net:27017,ac-vu6l6ic-shard-00-01.lgyznu6.mongodb.net:27017,ac-vu6l6ic-shard-00-02.lgyznu6.mongodb.net:27017/?ssl=true&replicaSet=atlas-x2kkak-shard-0&authSource=admin&appName=Cluster0');

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'Erro de conexion a MongoDB'));
connection.once('open', ()=>{
    console.log('Conexion EXITOSA a MongoDB');
});