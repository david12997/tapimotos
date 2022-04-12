'use strict'

import Get from "./get";
import { Domain } from "./store";


const ParseData = (data)=>{


    let ancho_llanta = [];

    //convertir objeto de objetos en array
    let parse_data = Object.entries(data.data);


    //guardar el ancho de las llantas
    parse_data.map((llanta,index)=>
       ancho_llanta.push(llanta[1].ancho_llanta)
    )

    //eliminar repetidos
    let new_data =  ancho_llanta.filter((el,pos)=>ancho_llanta.indexOf(el) == pos);

    //ordenar de menor a mayor
    new_data.sort((a,b)=>a-b);



   return new_data;
}



async function Get_llantas_ancho(){

    const response = [];

    try {

        const data = await Get(Domain + 'api/search/v2/llantas/');
        (data === undefined) ? response.push('Error can not get data') : response.push(ParseData(data));


    } catch (error) {

        console.log('Error method Get_llantas_ancho   from services/llanta-marca-ancho.js '.error);
        response.push(error);
    }


    return response;
}


export default Get_llantas_ancho;
