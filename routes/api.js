var express = require('express');
var router = express.Router();
const kittensCtrl = require('../controllers/api/kittens')

router.get('/kittens', kittensCtrl.index);
router.get('/kittens/:id', kittensCtrl.show)
router.post('/kittens', kittensCtrl.create);
router.put('/kittens/:id', kittensCtrl.update);
router.delete('/kittens/:id', kittensCtrl.delete);

module.exports = router;