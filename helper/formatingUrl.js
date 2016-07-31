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
                var isEvent=getEvent(qs)
                if(isEvent){
                   return isEvent;
                }else{
                    return {
                    url:qs,
                    domain:qs.substring(qs.indexOf('//')+2,qs.indexOf('.'))
                }
                }
                
            }else if(urlWithHttp==-1 && urlWithWWW>-1 ){//www.dome.come
                var isEvent=getEvent(qs)
                if(isEvent){
                   return isEvent;
                }else{
                    return{
                    url:qs,
                    domain:qs.substring(qs.indexOf('.')+1,qs.indexOf('.com'))
                }
                }
                
            }else if(urlWithHttp>-1 && urlWithWWW>-1){
                var isEvent=getEvent(qs)
                if(isEvent){
                   return isEvent;
                }
                else{
                    return{
                    url:qs,
                    domain:qs.substring(qs.indexOf('ww.')+3,qs.indexOf('.com'))
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
function getEvent(qs){//www.google.com/event/ get event 
    var isDotCom=qs.indexOf('.com/');
    var lastForwordSlash=qs.lastIndexOf('/');
    var domain="";
    if(isDotCom>-1 && isDotCom<lastForwordSlash){
                    
                    var event=qs.substring(qs.indexOf('.com/')+5,qs.lastIndexOf('/'))
                    if(qs.indexOf('.')<qs.indexOf('.com')){
                        domain=qs.substring(qs.indexOf('.')+1,qs.indexOf('.com')+4);
                    }else if(qs.indexOf('http://')){
                        domain=qs.substring(qs.indexOf('//')+2,qs.indexOf('.com')+4)
                    }
                    return{
                        url:qs,
                        domain:domain,
                        event:event
                    }
    }else{
         return false;
    }
   
}
module.exports={
    getDomainName:getDomainName
}