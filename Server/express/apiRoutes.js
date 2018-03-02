const controller = require('./Controllers/index');
const router = require('express').Router();

router.get('/getAllPlayers', controller.player.getAllPlayers);
router.get('/getAllKickers', controller.player.getAllKickers);
router.get('/getAllDst', controller.player.getAllDst);

module.exports = router;