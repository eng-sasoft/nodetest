var formatingUrl=require('./formatingUrl.js');
function queryStrParser(qS,cb){
    if(typeof(qS)=='string'){//checking for single url
            cb(null,formatingUrl.getDomainName(qS));
    }else{
        if(qS instanceof Array){
            var allAdresses=[];
            qS.forEach(function(add){
                allAdresses.push(formatingUrl.getDomainName(add));
            })
            
        }
        cb( null,allAdresses);
        
    }
    
    
    
}


module.exports = {
    queryStrParser:queryStrParser
}