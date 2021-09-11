
const ProventoService = require('../services/ProventoService');
const proventoModel = require('../models/provento');
const { validaData, FormataStringData } = require('../utils/validacoes');



module.exports = {

    saveEmLote: async (req, res) => {
        let json = { error: '', qtd_registro: 0, result: [] };
        let proventos = await (req.body.itens);
        // console.log(proventos);

        proventos.forEach(async function (provento) {

            let dt_com, dt_pag = null;
            if (validaData(provento.dt_com)) {
                dt_com = FormataStringData(provento.dt_com);
                dt_com = new Date(dt_com);
            }

            if (validaData(provento.dt_pag)) {
                dt_pag = FormataStringData(provento.dt_pag);
                dt_pag = new Date(dt_pag);
            }

            await ProventoService.save(provento.id_ativo, provento.tipo, dt_com, dt_pag, provento.valor);
        });

        res.json(json);
    },



}