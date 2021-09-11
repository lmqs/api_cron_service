const Sequelize = require('sequelize');

const database = require('../instances/db');


const PROVENTOS = database.define('provento', {

    id_provento: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cd_ativo: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    in_tipo_provento: Sequelize.CHAR(1),
    dt_com: Sequelize.DATE,
    dt_pagamento: Sequelize.DATE,
    nr_valor: Sequelize.DECIMAL(10, 3),

},
    { timestamps: false }
);



module.exports = PROVENTOS;
