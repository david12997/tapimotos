'use strict'

import Get from "./get";
import { Domain } from "./store";


const ParseData = (data)=>{


    let numero_rin = [];

    //convertir objeto de objetos en array
    let parse_data = Object.entries(data);

    //guardar el rin de las llantas
    parse_data.map((llanta,index)=>
       numero_rin.push(llanta[1].numero_rin)
    )

    //eliminar repetidos
    let new_data =  numero_rin.filter((el,pos)=>numero_rin.indexOf(el) == pos);

    //ordenar de menor a mayor
    new_data.sort((a,b)=>a-b);



   return new_data;
}



async function Get_llantas_for_marcaAnchoPerfil(marca,ancho,perfil){

    const response = [];

    try {

        const data = await Get(Domain + 'api/search/llantas/'+marca+'/'+ancho+'/'+perfil);
        (data === undefined) ? response.push('Error can not get data') : response.push(ParseData(data));


    } catch (error) {

        console.log('Error method Get_llantas_for_marcaAnchoPerfil   from services/get-llanta-marca-ancho-perfil.js '.error);
        response.push(error);
    }


    return response;
}


export default Get_llantas_for_marcaAnchoPerfil;
