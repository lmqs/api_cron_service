const ATIVO = require('../models/ativo');

const Sequelize = require('sequelize');

module.exports = {

    save: async (ds_descricao, ds_classe, ds_ativo, in_tipo_ativo, in_periodo, ds_path, ds_setor_bovespa, ds_pais) => {
        const resultadoCreate = await ATIVO.create({
            ds_descricao,
            ds_classe,
            ds_ativo,
            in_tipo_ativo,
            in_periodo,
            ds_path,
            ds_setor_bovespa,
            ds_pais
        });
    },
    getAtivosPorItem: async (pin_tipo_ativo) => {
        const ativos = await ATIVO.findAll({
            where: { in_tipo_ativo: pin_tipo_ativo }, limit: 3

        });
        return ativos;

    },
    getAtivosPorItemOffset: async (pin_tipo_ativo, pitensPorPagina, ppage) => {
        let total = pitensPorPagina * ppage;
        const ativos = await ATIVO.findAll({
            where: { in_tipo_ativo: pin_tipo_ativo }, offset: total, limit: pitensPorPagina

        });




        return ativos;

    },





    getTotal: async (pin_tipo_ativo) => {
        const total = await ATIVO.count({
            where: { in_tipo_ativo: pin_tipo_ativo }
        });
        return total;

    },


}




