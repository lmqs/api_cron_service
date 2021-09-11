
const express = require('express');
const router = express.Router();
const IPOController = require('./controllers/IPOController');
const LOGController = require('./controllers/LogController');
const ComunicadoController = require('./controllers/ComunicadoController');
const AtivoController = require('./controllers/AtivoController');
const ProventoController = require('./controllers/ProventoController');



router.get('/ping', AtivoController.ping);
// router.post('/save_ipos/', IPOController.save);
// router.post('/log_save/', LOGController.save);
// router.get('/get_ipo/:descricao', IPOController.getIPO);
// router.get('/get_ativos/:tipo', AtivoController.getAtivosPorItem);
// router.get('/get_ativos_offset/:tipo/:itensPorPagina/:page', AtivoController.getAtivosPorItemOffSet);
// router.get('/get_qtd_ativos/:tipo', AtivoController.getQtd);
// router.post('/save_proventos/', ProventoController.saveEmLote);

 

// router.get('/proventos/:tipo/:itensPagina/:page' , ApiController.proventos);
// router.get('/relatorios/:tipo/:itensPagina/:page' , ApiController.relatorios);
// router.get('/todos/:itensPagina/:page' , ApiController.verTodos);






module.exports = router;