var formatingUrl=require('./formatingUrl.js');
function queryStrParser(qS){
    if(typeof(qS)=='string'){//checking for single url
            return formatingUrl.getDomainAndTitle(qS);
    }else{
       
        if(qS instanceof Array){
            var allAdresses=[];
            qS.forEach(function(add){
                allAdresses.push(formatingUrl.getDomainAndTitle(add));
            })
            
        }
        allAdresses.title="";
        allAdresses.forEach(function(address){
            allAdresses.title+=address.title+" "
        })
        return allAdresses;
        
    }
    
    
    
}

module.exports = {
    queryStrParser:queryStrParser
}