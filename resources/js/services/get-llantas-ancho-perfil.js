'use strict'

import Get from "./get";
import { Domain } from "./store";


const ParseData = (data)=>{

    let perfil_llanta = [];

    //convertir objeto de objetos en array
    let parse_data = Object.entries(data.data);

    //guardar el perfil de las llanatas como entero
    parse_data.map((llanta,index)=>{

        if (llanta[1].perfil_llanta  === 'N-A')  perfil_llanta.push(llanta[1].perfil_llanta)
        else perfil_llanta.push(parseInt(llanta[1].perfil_llanta))
    }

    )
    console.log(perfil_llanta);
    //eliminar repetidos
    let new_data =  perfil_llanta.filter((el,pos)=>perfil_llanta.indexOf(el) == pos);

    //ordenar de menor a mayor
    new_data.sort((a,b)=>a-b);



   return new_data;
}



async function Get_llantas_ancho_perfil(ancho){

    const response = [];

    try {

        const data = await Get(Domain+'api/search/v2/llantas/'+ancho);
        (data === undefined) ? response.push('Error can not get data') : response.push(ParseData(data));


    } catch (error) {

        console.log('Error method Get_llantas_ancho_perfil   from services/get-llanta-for-marcas.js '.error);
        response.push(error);
    }


    return response;
}


export default Get_llantas_ancho_perfil;
