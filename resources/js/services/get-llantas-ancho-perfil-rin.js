'use strict'

import Get from "./get";
import { Domain } from "./store";


const ParseData = (data)=>{

    let rin_llanta = [];

    //convertir objeto de objetos en array
    let parse_data = Object.entries(data.data);

    //guardar el rin de las llanatas como entero
    parse_data.map((llanta,index)=>{

        if (llanta[1].numero_rin  === 'N-A') rin_llanta.push(llanta[1].numero_rin)
        else rin_llanta.push(parseInt(llanta[1].numero_rin))

    }

    )

    //eliminar repetidos
    let new_data =  rin_llanta.filter((el,pos)=>rin_llanta.indexOf(el) == pos);

    //ordenar de menor a mayor
    new_data.sort((a,b)=>a-b);



   return new_data;
}



async function Get_llantas_ancho_perfil_rin(ancho,perfil){

    const response = [];

    try {

        const data = await Get(Domain+'api/search/v2/llantas/'+ancho+'/'+perfil);
        (data === undefined) ? response.push('Error can not get data') : response.push(ParseData(data));


    } catch (error) {

        console.log('Error method Get_llantas_ancho_perfil_rin   from services/get-llanta-for-marcas.js '.error);
        response.push(error);
    }


    return response;
}


export default Get_llantas_ancho_perfil_rin;
