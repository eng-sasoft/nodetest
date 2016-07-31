var express = require('express');
var router = express.Router();
var getUrlCtrl=require('../controllers/title.controller.js');

router.get('/',getUrlCtrl.getUrl);//callback
//router.get('/',getUrlCtrl.getUrlwithPromise);
//router.get('/',getUrlCtrl.getUrlwithAsyn);

module.exports = router;