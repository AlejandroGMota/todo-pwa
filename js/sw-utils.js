
function actualizaCacheDinamico(dynamicCahe, req, res){

    if(res.ok){

        return caches.open(dynamicCahe).then(cache=>{
            cache.put(req, res.clone());
            return res.clone();
        });//cierre them 
    }//cierre if 
    else{
        return res;
    }

}//cierre funcion
