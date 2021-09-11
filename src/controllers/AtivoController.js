const sequelize = require('./../instances/db');
const AtivoService = require('../services/AtivoService');


module.exports = {

    ping: (req, res) => {
        res.json({ pong: true });

    },
    getAtivosPorItem: async (req, res) => {
        let json = { error: '', result: [] };
        let tipo_ativo = await req.params.tipo;
        // console.log(tipo_ativo);
        // console.log(await AtivoService.getTotal(tipo_ativo));
        if (!tipo_ativo) {
            json.error = 'Parâmetro tipo do ativo não foi preenchido';
        } else {
            let ativos = await AtivoService.getAtivosPorItem(tipo_ativo);
            if (ativos) {
                json.result = ativos;
            }
        }

        res.json(json);
    },


    getAtivosPorItemOffSet: async (req, res) => {
        let json = { error: '', result: [] };
        let tipo_ativo = await req.params.tipo;
        let itensPorPagina = await req.params.itensPorPagina;
        let page = await req.params.page;

        console.log(`itens por pagina: ${itensPorPagina} pagina: ${page}`)

        if (!tipo_ativo) {
            json.error = 'Parâmetro tipo do ativo não foi preenchido';
        } else {
            let ativos = await AtivoService.getAtivosPorItemOffset(tipo_ativo, parseInt(itensPorPagina), parseInt(page));
            if (ativos) {
                json.result = ativos;
            }
        }

        res.json(json);
    },



    

    getQtd: async (req, res) => {
        let json = { error: '', quantidade: 0 };
        let tipo_ativo = await req.params.tipo;
        if (!tipo_ativo) {
            json.error = 'Parâmetro tipo do ativo não foi preenchido';
        } else {
            json.quantidade = await AtivoService.getTotal(tipo_ativo);
        }

        res.json(json);
    },

    

}