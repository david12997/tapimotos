'use strict'

import Get from "./get";
import { Domain } from "./store";


const ParseData = (data)=>{

    let new_data = data;

   return new_data;
}



async function Search_all_products(data){

    const response = [];

    try {

        const cascos = await Get('https://tapimotosdk.com/blog/wp-json/public-woo/v1/products?category=356&search='+data);
        (cascos === undefined) ? response.push('Error can not get data') : response.push(ParseData(cascos));

        const aceites = await Get('https://tapimotosdk.com/blog/wp-json/public-woo/v1/products?category=358&search='+data);
        (aceites === undefined) ? response.push('Error can not get data') : response.push(ParseData(aceites));

        const llantas = await Get(Domain +'api/search/all/'+data);
        (llantas === undefined) ? response.push('Error can not get data') : response.push(ParseData(llantas));


    } catch (error) {

        console.log('Error method Search_all_products   from services/search-all.js '.error);
        response.push(error);
    }


    return response;
}


export default Search_all_products;
