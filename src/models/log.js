const Sequelize = require('sequelize');

const database = require('../instances/db');


const LOG = database.define('log', {

    id_log: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ds_descricao: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    dt_inicio: Sequelize.DATE,
    dt_fim: Sequelize.DATE,
    in_status: Sequelize.CHAR(1)


},
    { timestamps: false }
);



module.exports = LOG;
