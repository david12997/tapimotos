'use strict'

import Get from "./get";
import { Domain } from "./store";


const ParseData = (data)=>{

    let new_data = [];

    data.map((marca,index)=>

        new_data.push({

            id_marca:marca.id_marca_llanta,
            nombre:marca.nombre

        })
    );

   return new_data;
}



async function Get_marca_llantas(){

    const response = [];

    try {

        const data = await Get(Domain+'api/marca-llantas');
        (data === undefined) ? response.push('Error can not get data') : response.push(ParseData(data));


    } catch (error) {

        console.log('Error method Get_marca_llantas   from services/get-marca-llantas.js '.error);
        response.push(error);
    }


    return response;
}


export default Get_marca_llantas;
