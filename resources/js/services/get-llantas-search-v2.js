'use strict'

import Get from "./get";
import { Domain } from "./store";


const ParseData = (data)=>{


    let  new_data = data.data;

   return new_data;
}



async function Get_llantas_for_AnchoPerfilRin(ancho,perfil,rin,page){

    const response = [];

    try {

        let data;

        if (page === undefined || page === null || page === ''){

            data = await Get(Domain + 'api/search/v2/llantas/'+ancho+'/'+perfil+'/'+rin);

        }else{

            data = await Get(Domain + 'api/search/v2/llantas/'+ancho+'/'+perfil+'/'+rin+page);
        }

        (data === undefined) ? response.push('Error can not get data') : response.push(ParseData(data));


    } catch (error) {

        console.log('Error method Get_llantas_for_AnchoPerfilRin   from services/get-llanta-marca-ancho-perfil-rin.js '.error);
        response.push(error);
    }


    return response;
}


export default Get_llantas_for_AnchoPerfilRin;
