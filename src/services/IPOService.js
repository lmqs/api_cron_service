const IPO = require('./../models/ipo');

const Sequelize =  require('sequelize');

module.exports = {

    save: async (ds_descricao, ds_classe, ds_path, ds_ativo, in_tipo_ativo, ds_setor_bovespa, ds_pais, dt_inicio, nr_valor, in_status) => {

        const resultadoCreate = await IPO.create({
            ds_descricao,
            ds_classe,
            ds_path,
            ds_ativo,
            in_tipo_ativo,
            ds_setor_bovespa,
            ds_pais,
            dt_inicio,
            nr_valor,
            in_status
        });
    },

    getIPO: async(pds_descricao) => {
        const Op = Sequelize.Op;
        const query = `%${pds_descricao}%`;
        const ipo = await IPO.findOne({
            where: { ds_descricao: { [Op.like]: query} }
        });

        return ipo;

    },


}

