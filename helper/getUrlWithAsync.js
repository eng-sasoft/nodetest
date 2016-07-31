var formatingUrl=require('./formatingUrl.js');
function queryStrParser(qS,cb){
    //console.log(qS instanceof 'string')
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

function getDomainName(qs){
    var urlWithHttp=qs.indexOf("http://");
    var urlWithWWW=qs.indexOf('www');
    var isUrl=qs.indexOf('.com');
        if(isUrl>-1){
            if(urlWithWWW==-1 && urlWithHttp==-1)//google.com
                {
                    return {
                        url:qs,
                        domain:qs.split('.')[0]
                    }
                }
            else if(urlWithHttp>-1 && urlWithWWW==-1){//http://yahoo.com
                return {
                    url:qs,
                    domain:qs.substring(qs.indexOf('//')+2,qs.indexOf('.'))
                }
            }else if(urlWithHttp==-1 && urlWithWWW>-1 ){//www.dome.come
                var event=qs.substring(qs.indexOf('.com/')+5,qs.lastIndexOf('/'))
                if(event !==''&& event!=='www.'){
                    console.log('event',event)
                    return{
                        url:qs,
                        domain:qs.substring(qs.indexOf('.')+1,qs.indexOf('.com')+4),
                        event:event
                    }
                }else{
                    return{
                    url:qs,
                    domain:qs.substring(qs.indexOf('.')+1,qs.indexOf('.com'))
                }
                }
                
            }
        }else{
            return{
                url:qs,
                domain:'NO RESPONSE'
        }
    }
}
module.exports = {
    queryStrParser:queryStrParser
}