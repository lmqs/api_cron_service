const Sequelize = require('sequelize');

const database = require('../instances/db');


const ATIVO = database.define('ativo', {

    id_ativo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ds_descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ds_classe: Sequelize.STRING(10),
    ds_path: Sequelize.STRING(400),
    ds_ativo: Sequelize.STRING(11),
    in_tipo_ativo: Sequelize.CHAR(1),
    ds_setor_bovespa: Sequelize.STRING(100),
    ds_pais: Sequelize.STRING(10),
    in_periodo: Sequelize.CHAR(2)


},
    { timestamps: false }
);



module.exports = ATIVO;
