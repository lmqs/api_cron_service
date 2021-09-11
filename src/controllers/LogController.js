
const LOGService = require('../services/LOGService');
const logModel = require('../models/log');

Date.prototype.isValid = function () {
    // If the date object is invalid it will return 'NaN' on getTime()  and NaN is never equal to itself.
    return this.getTime() === this.getTime();
};
module.exports = {

    save: async (req, res) => {
        let json = { error: '', qtd_registro: 0, result: [] };
        let log = await (req.body);


        let ds_descricao = log.descricao;
        let in_status = log.status;
        let data_inicio, data_fim = null;

        data_inicio = new Date(log.dataAtual);

        if (!data_inicio.isValid()) {
            data_inicio = null;
        }

        data_fim = new Date(log.dataFIM);
        if (!data_fim.isValid()) {
            data_fim = null;
        }

        await LOGService.save(ds_descricao, data_inicio, data_fim, in_status);

        res.json(json);
    },



}