import lscache from "lscache";

export const checkAuth = () => {
    let token = lscache.get('token');
    //console.log("Busco valor JWT =>" + token);

   if(token == null || token == undefined){
       lscache.flush();
       //console.log("=====> Vai DESLOGAR!");
       return false;
   }

   return true;
}
