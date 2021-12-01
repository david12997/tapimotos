'use strict'

import Get from "./get";
import { Domain } from "./store";


const ParseData = (data)=>{


    let  new_data = [];

    //convertir objeto de objetos en array
    let parse_data = Object.entries(data);


    parse_data.map((data,index)=>
        new_data.push(data[1])
    )


   return new_data;
}



async function Get_llantas_for_marcaAnchoPerfilRin(marca,ancho,perfil,rin){

    const response = [];

    try {

        const data = await Get(Domain + 'api/search/llantas/'+marca+'/'+ancho+'/'+perfil+'/'+rin);
        (data === undefined) ? response.push('Error can not get data') : response.push(ParseData(data));


    } catch (error) {

        console.log('Error method Get_llantas_for_marcaAnchoPerfilRin   from services/get-llanta-marca-ancho-perfil-rin.js '.error);
        response.push(error);
    }


    return response;
}


export default Get_llantas_for_marcaAnchoPerfilRin;
