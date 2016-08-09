function getDomainAndTitle(qs){
    var urlWithHttp=qs.indexOf("http://");
    var urlWithWWW=qs.indexOf('www');
    var isUrl=qs.indexOf('.com');
    var title="";
        if(isUrl>0 ){
            
            if(urlWithWWW==-1 && urlWithHttp==-1){//google.com
                
                    return {
                        url:qs,
                        domain:qs.split('.')[0],
                        title:qs.substring(0,qs.indexOf('.com'))
                    }
                }
            else if(urlWithHttp>-1 && urlWithWWW==-1){//http://yahoo.com
                title=qs.substring(urlWithHttp+7,isUrl);
                
                var isEvent=getEvent(qs)
               
                if(isEvent){//http://yahoo.com/event
                    isEvent.title=title;
                   return isEvent;
                }else{
                    return {
                    url:qs,
                    domain:qs.substring(qs.indexOf('//')+2,qs.indexOf('.')),
                    title:title
                }
                }
                
            }else if(urlWithHttp==-1 && urlWithWWW>-1 ){//www.dome.com
                title=qs.substring(qs.indexOf('.')+1,qs.indexOf('.com'))
                var isEvent=getEvent(qs)
                if(isEvent){
                    isEvent.title=title;
                   return isEvent;
                }else{
                    return{
                    url:qs,
                    domain:qs.substring(qs.indexOf('.')+1,qs.indexOf('.com')),
                    title:title
                }
                }
                
            }else if(urlWithHttp>-1 && urlWithWWW>-1){//http://www.google.com
                title=qs.substring(qs.indexOf('.')+1,qs.indexOf('.com'));
                var isEvent=getEvent(qs)
                if(isEvent){
                    isEvent.title=title;
                   return isEvent;
                }
                else{
                    return{
                    url:qs,
                    domain:qs.substring(qs.indexOf('ww.')+3,qs.indexOf('.com')),
                        title:title
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
    if(isDotCom>-1 && (isDotCom+4)<lastForwordSlash){//check for /event
                    
                    var event=qs.substring(qs.indexOf('.com/')+5,qs.lastIndexOf('/'))
                    if(qs.indexOf('.')<qs.indexOf('.com')){
                        domain=qs.substring(qs.indexOf('.')+1,qs.indexOf('.com')+4);
                    }else if(qs.indexOf('http://')>-1){
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
    getDomainAndTitle:getDomainAndTitle
}