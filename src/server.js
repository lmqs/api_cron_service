require('dotenv').config();
const fs = require('fs')

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./router');


const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use('/api_service', routes);
server.use('/api_service', express.static(__dirname + './../public'));

server.use( (req,res) => {
    res.status(404).send('Página não encontrada');
});



server.listen(process.env.PORT || 5002, () => {
    console.log(`servidor rodando em http://localhost:${process.env.PORT}`)
});