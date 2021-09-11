const PROVENTO = require('../models/provento');

const Sequelize = require('sequelize');

module.exports = {

    save: async (cd_ativo, in_tipo_provento, dt_com, dt_pagamento, nr_valor) => {
        const resultadoCreate = await PROVENTO.create({
            cd_ativo,
            in_tipo_provento,
            dt_com,
            dt_pagamento,
            nr_valor
        });
    },




}




