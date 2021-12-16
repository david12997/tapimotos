'use strict'

import Get from "./get";
import { Domain } from "./store";


const ParseData = (data)=>{


    let new_data = {

        products:data.data,
        pages:data.last_page,
        total_products:data.total
    };



   return new_data;
}



async function Get_llantas(page){

    const response = [];

    try {


        const data = await Get(Domain +'api/llantas'+page);
        (data === undefined) ? response.push('Error can not get data') : response.push(ParseData(data));


    } catch (error) {

        console.log('Error method Get_llantas   from services/get-llantas.js '.error);
        response.push(error);
    }


    return response;
}


export default Get_llantas;
