
var getUrlAndDomainHelper=require('../helper/getUrlAndDomain.js');//callback
var getUrlPromiseHelper=require('../helper/getUrlWithPromises.js');//promises
var getUrlWithAsync=require('../helper/getUrlWithAsync.js');//async
var async=require('async');
function getUrl(req, res, next) {//callback
    var allAddresses=getUrlAndDomainHelper.queryStrParser(req.query.address)
    res.render('home',{allAddresses:allAddresses});
}
function getUrlwithPromise(req, res, next) {//promises
    getUrlPromiseHelper.queryStrParser(req.query.address).then(function(data){
       
        res.render('home',{allAddresses:data});
    }).catch(function(err){
            res.send(err);
    })
    
}
function getUrlwithAsyn(req,res,next){//async
   
    async.series([function(callback){
        getUrlWithAsync.queryStrParser(req.query.address,callback);
    }],function(err,data){
        
        if(err){
                res.send(err);
                return;
            }
        res.render('home',{allAddresses:data[0]});
    })
}
module.exports={
    getUrl:getUrl,
    getUrlwithPromise:getUrlwithPromise,
    getUrlwithAsyn:getUrlwithAsyn
}