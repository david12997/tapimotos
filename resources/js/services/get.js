'use strict';


function Get(url){

    return fetch(url,{

        method:'GET'

    })
    .then(response=>response.json())
    .then(json=>json)
    .catch(error=>{

        console.log('Error method Get from services/get.js '+ error)
    })

}


export default Get;
