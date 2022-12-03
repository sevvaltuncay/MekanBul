var express = require('express');
var router = express.Router();
var ctrlmekanlar = require("../controllers/mekanlar");
var ctrldigeri = require("../controllers/digeri")

router.get('/',ctrlmekanlar.anaSayfa);
router.get('/mekan/:mekanid', ctrlmekanlar.mekanBilgisi);
router.get('/mekan/yorum/yeni', ctrlmekanlar.yorumEkle);
router.get('/hakkinda', ctrldigeri.hakkinda);

module.exports = router; 
