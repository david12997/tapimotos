'use strict'

import Get from "./get";
import { Domain } from "./store";


const ParseData = (data)=>{

    console.log(data)

    let perfil_llanta = [];

    //convertir objeto de objetos en array
    let parse_data = Object.entries(data);

    //guardar el perfil de las llantas
    parse_data.map((llanta,index)=>
       perfil_llanta.push(llanta[1].perfil_llanta)
    )

    //eliminar repetidos
    let new_data =  perfil_llanta.filter((el,pos)=>perfil_llanta.indexOf(el) == pos);

    //ordenar de menor a mayor
    new_data.sort((a,b)=>a-b);



   return new_data;
}



async function Get_llantas_for_marcaAncho(marca,ancho){

    const response = [];

    try {

        const data = await Get(Domain + 'api/search/llantas/'+marca+'/'+ancho);
        (data === undefined) ? response.push('Error can not get data') : response.push(ParseData(data));


    } catch (error) {

        console.log('Error method Get_llantas_for_marcaAncho   from services/llanta-marca-ancho.js '.error);
        response.push(error);
    }


    return response;
}


export default Get_llantas_for_marcaAncho;
