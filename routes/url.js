var express = require('express');
var router = express.Router();
var getUrlCtrl=require('../controllers/url.controller.js');

router.get('/',getUrlCtrl.getUrl);//callback
//router.get('/',getUrlCtrl.getUrlwithPromise);
//router.get('/',getUrlCtrl.getUrlwithAsyn);

module.exports = router;