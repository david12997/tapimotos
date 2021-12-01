'use strict'

import Get from "./get";



const ParseData = (data)=>{

    let new_data = [];

    data.map((dato,indice)=>{

        new_data.push({

            'img':dato.jetpack_featured_media_url,
            'title':dato.title.rendered,
            'content':dato.content.rendered,
            'link':dato.link
        })

    })

    return new_data;
}



async function Get_credits(){

    const response = [];

    try {

        const data = await Get('https://tapimotosdk.com/blog/wp-json/wp/v2/posts?categories=360');
        (data === undefined) ? response.push('Error can not get data') : response.push(ParseData(data));


    } catch (error) {

        console.log('Error method Get_credits   from services/get-credits.js '.error);
        response.push(error);
    }


    return response;
}


export default Get_credits;
