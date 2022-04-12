'use strict'

import Get from "./get";
import { Domain } from "./store";


const ParseData = (data)=>{

    let new_data = data;

   return new_data;
}



async function Search_all_products(data,page_cascos,page_aceites,page_llantas){

    const response = [];

    try {

        //const cascos = await Get('https://tapimotosdk.com/blog/wp-json/public-woo/v1/products?category=356&per_page=3&search='+data+page_cascos);
        //(cascos === undefined) ? response.push('Error can not get data') : response.push(ParseData(cascos));

        //const aceites = await Get('https://tapimotosdk.com/blog/wp-json/public-woo/v1/products?category=358&per_page=3&search='+data+page_aceites);
        //(aceites === undefined) ? response.push('Error can not get data') : response.push(ParseData(aceites));

        const llantas = await Get(Domain +'api/search/all/'+data+page_llantas);
        (llantas === undefined) ? response.push('Error can not get data') : response.push(ParseData(llantas));


    } catch (error) {

        console.log('Error method Search_all_products   from services/search-all.js '.error);
        response.push(error);
    }


    return response;
}


export default Search_all_products;
