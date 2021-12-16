'use strict'

import Get from "./get";


const ParseData = (data)=>{

    let new_data = data;

   return new_data;
}



async function Get_aceites(page){

    const response = [];

    try {


        const data = await Get('https://tapimotosdk.com/blog/wp-json/public-woo/v1/products?category=358&per_page=9'+page);
        (data === undefined) ? response.push('Error can not get data') : response.push(ParseData(data));


    } catch (error) {

        console.log('Error method Get_aceites   from services/get-aceites.js '.error);
        response.push(error);
    }


    return response;
}


export default Get_aceites;
