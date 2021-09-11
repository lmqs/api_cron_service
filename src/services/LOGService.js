const LOG = require('../models/log');

const Sequelize =  require('sequelize');

module.exports = {

    save: async (ds_descricao, dt_inicio, dt_fim, in_status) => {
        const resultadoCreate = await LOG.create({
            ds_descricao,
            dt_inicio,
            dt_fim,
            in_status
        });
    },



}

