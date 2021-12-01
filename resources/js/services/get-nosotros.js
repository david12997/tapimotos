'use strict'

import Get from "./get";



const ParseData = (data)=>{

    let new_data = [data];


    return new_data
}



async function Get_nosotros(){

    const response = [];

    try {

        const data = await Get("https://tapimotosdk.com/blog/wp-json/wp/v2/pages/326");
        (data === undefined) ? response.push('Error can not get data') : response.push(ParseData(data));


    } catch (error) {

        console.log('Error method Get_nosotros   from services/get-nosotros.js '.error);
        response.push(error);
    }


    return response;
}


export default Get_nosotros;
