'use strict'

import Get from "./get";



const ParseData = (data)=>{

    let new_data = [];

    data.map((dato, indice)=>{

        if(dato.id !== 15){

            new_data.push(
                {
                    'name':dato.name.toUpperCase(),
                    'discount':dato.description.toUpperCase(),
                    'img':dato.image.src
                }
            )
        }

    });

    return new_data.reverse();
}



async function Get_categories(){

    const response = [];

    try {

        const data = await Get('https://tapimotosdk.com/blog/wp-json/public-woo/v1/products/categories');
        (data === undefined) ? response.push('Error can not get data') : response.push(ParseData(data));


    } catch (error) {

        console.log('Error method Get_categories   from services/get-categories.js '.error);
        response.push(error);
    }


    return response;
}


export default Get_categories;
