const { Router } = require('express');
const battleController = require('./controllers/battleController')
const clansController = require('./controllers/clansController')

const routes = Router();

routes.get('/battlesPlayer', battleController.battles);
routes.get('/playerInfo', battleController.playerInfo);

routes.get('/war', clansController.warlog);
routes.get('/clanInfo', clansController.clanInfo);
routes.get('/currentWar', clansController.currentWar);

module.exports = routes;