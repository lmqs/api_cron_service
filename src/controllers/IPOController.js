
const IPOService = require('../services/IPOService');
const ipoModel = require('../models/ipo');
const {download} = require('../utils/download');

Date.prototype.isValid = function () {

    // If the date object is invalid it will return 'NaN' on getTime()  and NaN is never equal to itself.
    return this.getTime() === this.getTime();
};


module.exports = {

    save: async (req, res) => {
        let json = { error: '', qtd_registro: 0, result: [] };
        // let itens = await JSON.parse(req.body.itens);
        let itens = await (req.body.itens);
        let ipos = itens;

        // console.log(ipos);
        let contJaExiste = 0;
        ipos.forEach(async function (ipo) {

            // console.log(ipo);
            let ds_descricao = ipo.descricao;
            let ds_ativo = ipo.ticket;
            let in_status = ipo.status;
            let in_tipo_ativo = ipo.in_tipo_ativo;
            let ds_pais = ipo.pais;
            let data = null;

            let ds_path = null;

            if (ipo.link) {
                let arquivo = ds_ativo ? ds_ativo : ds_descricao.split(' ')[0];
                arquivo = arquivo.toLowerCase();

                let caminho = 'public/imagem/ipo/' + arquivo + '.jpg';

                console.log(`caminhoooo: ${caminho}   link : ${ipo.link}`);
                const dataImg = await download(ipo.link, `./${caminho}`);

                
                ds_path = caminho;

            }

            data = new Date(ipo.data);
            /**se a data for inválida, passe null */
            if (!data.isValid()) {
                data = null;
            }

            let valor = 0;
            valor = (Math.round(ipo.valor * 100) / 100).toFixed(2);
            if (isNaN(valor)) {
                valor = 0;
            }


            let ipoPesquisa = await IPOService.getIPO(ds_descricao);




            if (ipoPesquisa) {

                contJaExiste++;
                const resultadoUp = await ipoModel.update({
                    ds_descricao,
                    dt_inicio: data,
                    nr_valor_inicio: valor,
                    ds_ativo,
                    in_status,
                    ds_path,
                    in_tipo_ativo,
                    ds_pais
                }, {
                    where: {
                        id_ipo: ipoPesquisa.id_ipo
                    }
                }

                );
                console.log('ATUALIZOU:' + resultadoUp);
            } else {
                //inserir no banco
                const resultadoCreate = await ipoModel.create({
                    ds_descricao,
                    dt_inicio: data,
                    nr_valor_inicio: valor,
                    ds_ativo,
                    in_status,
                    ds_path
                });
                console.log('INSERIU:');
            }
        });







        res.json(json);
    },

    getIPO: async (req, res) => {
        let json = { error: '', result: [] };
        let descricao = req.params.descricao;

        let ipos = await IPOService.getIPO(descricao);
        if (ipos) {
            json.result = ipos;
        }
        res.json(json);
    }

}