var Promises=require('bluebird');
var formatingUrl=require('./formatingUrl.js');
function queryStrParser(qS){
    
   return new Promise(function(resolve,reject){
       if(typeof(qS)=='string'){//checking for single url
         resolve(formatingUrl.getDomainName(qS))
    }else{//incase of multiple 
       
        if(qS instanceof Array){
            var allAdresses=[];
            qS.forEach(function(add){
                allAdresses.push(formatingUrl.getDomainName(add));
            })
            
        }
        resolve (allAdresses);
        
    }
   }) 
}

module.exports = {
    queryStrParser:queryStrParser
}