'use strict';


function Get_pay(url,data){

    return fetch(url,{

        headers:{

            'X-CSRF-TOKEN':window.CSRF_TOKEN

        },
        method:'POST',
        body:data


    })
    .then(response=>response.json())
    .then(json=>json)
    .catch(error=>error)

}


export default Get_pay;
