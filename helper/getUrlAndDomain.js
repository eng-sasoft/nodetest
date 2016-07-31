var formatingUrl=require('./formatingUrl.js');
function queryStrParser(qS){
    if(typeof(qS)=='string'){//checking for single url
            return formatingUrl.getDomainName(qS);
    }else{
       
        if(qS instanceof Array){
            var allAdresses=[];
            qS.forEach(function(add){
                allAdresses.push(formatingUrl.getDomainName(add));
            })
            
        }
        console.log(allAdresses)
        return allAdresses;
        
    }
    
    
    
}

module.exports = {
    queryStrParser:queryStrParser
}