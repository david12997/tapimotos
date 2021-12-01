'use strict'

import Get_categories from "./get-categories";
import Get_credits from "./get-credits";
import Get_services from "./get-services";
import Get_marca_llantas from "./get-marca-llantas";
import Get_llantas_for_marca from "./get-llanta-marca";
import Get_llantas_for_marcaAncho from "./get-llantas-marca-ancho";
import Get_llantas from "./get-llantas";
import Get_cascos from "./get-cascos";
import Get_aceites from "./get-aceites";
import Get_all_products from "./get-all-products";
import Get_llantas_for_marcaAnchoPerfil from "./get-llanta-marca-ancho-perfil";
import Get_llantas_for_marcaAnchoPerfilRin from "./get-llanta-marca-ancho-perfil-rin";
import Get_nosotros from "./get-nosotros";

//DOMAIN

export const Domain = 'https://tapimotosdk.com/';

//data store
const keys_storage = [

    "categories_tapi",
    "credits_tapi",
    "services_tapi",
    "marca_llantas_tapi",
    "llantas_for_marca",
    "llantas_for_marca_ancho",
    "llantas_for_marca_ancho_perfil",
    "llantas_for_marca_ancho_perfil_rin",
    "get_llantas_tapi",
    "get_aceites_tapi",
    "get_all_tapi",
    "get_cascos_tapi",
    "get_nosotros_tapi"


];

let categories = JSON.parse(localStorage.getItem(keys_storage[0]));
let credits  = JSON.parse(localStorage.getItem(keys_storage[1]));
let services = JSON.parse(localStorage.getItem(keys_storage[2]));
let marca_llantas = JSON.parse(localStorage.getItem(keys_storage[3]));
let llantas_for_marca = JSON.parse(localStorage.getItem(keys_storage[4]));
let llantas_for_marca_ancho = JSON.parse(localStorage.getItem(keys_storage[5]));
let llantas_for_marca_ancho_perfil = JSON.parse(localStorage.getItem(keys_storage[6]));
let llantas_for_marca_ancho_perfil_rin = JSON.parse(localStorage.getItem(keys_storage[7]));
let get_llantas = JSON.parse(localStorage.getItem(keys_storage[8]));
let get_aceites = JSON.parse(localStorage.getItem(keys_storage[9]));
let get_all = JSON.parse(localStorage.getItem(keys_storage[10]));
let get_cascos = JSON.parse(localStorage.getItem(keys_storage[11]));
let get_nosotros = JSON.parse(localStorage.getItem(keys_storage[12]));




//save data
const SaveCategories = (data,key) =>{

    localStorage.setItem(key,JSON.stringify(data));

    return data;
}

const SaveCredits = (data,key) =>{

    localStorage.setItem(key,JSON.stringify(data));

    return data;
}

const SaveServices = (data,key) =>{

    localStorage.setItem(key,JSON.stringify(data));

    return data;
}

const SaveMarcaLlantas = (data,key) =>{

    localStorage.setItem(key,JSON.stringify(data));

    return data;
}

const SaveLlantasForMarca = (data,key) =>{

    localStorage.setItem(key,JSON.stringify(data));

    return data;
}

const SaveLlantasForMarcaAncho = (data,key) =>{

    localStorage.setItem(key,JSON.stringify(data));

    return data;
}


const SaveLlantasForMarcaAnchoPerfil = (data,key) =>{

    localStorage.setItem(key,JSON.stringify(data));

    return data;
}

const SaveLlantasForMarcaAnchoPerfilRin = (data,key) =>{

    localStorage.setItem(key,JSON.stringify(data));

    return data;
}

const SaveGetLlantas = (data,key) =>{

    localStorage.setItem(key,JSON.stringify(data));

    return data;
}

const SaveGetAceites = (data,key) =>{

    localStorage.setItem(key,JSON.stringify(data));

    return data;
}

const SaveGetAll = (data,key) =>{

    localStorage.setItem(key,JSON.stringify(data));

    return data;
}

const SaveGetCascos = (data,key) =>{

    localStorage.setItem(key,JSON.stringify(data));

    return data;
}

const SaveGetNosotros = (data,key) =>{

    localStorage.setItem(key,JSON.stringify(data));

    return data;
}










const DataHome = () =>{



    const response ={

        main_search:{

            action:'get categories',
            response:()=>(categories === null) ? Get_categories().then(data => SaveCategories(data,keys_storage[0])) : new Promise((resolve,reject)=>resolve(categories))
        },
        credits:{

            action:'get credits',
            response:()=>(credits === null) ?  Get_credits().then(data =>SaveCredits(data,keys_storage[1]))  : new Promise((resolve,reject)=>resolve(credits))
        },
        services:{

            action:'get services',
            response:()=>(services === null) ?  Get_services().then(data =>SaveServices(data,keys_storage[2]))  :  new Promise((resolve,reject)=>resolve(services))
        },
        search_llantas:{

            action:'get marca llantas',

            response:()=>(marca_llantas === null) ?
                Get_marca_llantas().then(data=>SaveMarcaLlantas(data,keys_storage[3]))
                : new Promise((resolve,reject)=>resolve(marca_llantas)),

            llantas_for_marca:(marca)=>(llantas_for_marca === null) ?

                Get_llantas_for_marca(marca).then(data=>SaveLlantasForMarca(data,keys_storage[4])):
                new Promise((resolve,reject)=>resolve(llantas_for_marca)),

            llantas_for_marcaAncho:(marca,ancho)=>(llantas_for_marca_ancho === null) ?

                Get_llantas_for_marcaAncho(marca,ancho).then(data=>SaveLlantasForMarcaAncho(data,keys_storage[5])):
                new Promise((resolve,reject)=>resolve(llantas_for_marca_ancho)),

            llantas_for_marcaAnchoPerfil:(marca,ancho,perfil)=>(llantas_for_marca_ancho_perfil === null) ?

                Get_llantas_for_marcaAnchoPerfil(marca,ancho,perfil).then(data=>SaveLlantasForMarcaAnchoPerfil(data,keys_storage[6])):
                new Promise((resolve,reject)=>resolve(llantas_for_marca_ancho_perfil)),

            llantas_for_marcaAnchoPerfilRin:(marca,ancho,perfil,rin)=>(llantas_for_marca_ancho_perfil_rin === null) ?

                Get_llantas_for_marcaAnchoPerfilRin(marca,ancho,perfil,rin).then(data=>SaveLlantasForMarcaAnchoPerfilRin(data,keys_storage[7])):
                new Promise((resolve,reject)=>resolve(llantas_for_marca_ancho_perfil_rin)),

        },
        functions:{

            clear:()=> keys_storage.map((key,index)=>(localStorage.getItem(key)!== null) && localStorage.removeItem(key))
        }
    }


    return response;

}


const DataProducts = () =>{

    const response = {

       Products:{

            getLlantas:(page)=>(get_llantas === null) ?

                Get_llantas(page).then(data=> SaveGetLlantas(data,keys_storage[8])):
                new Promise((resolve,reject)=>resolve(get_llantas)),


            getAceites:(page)=>(get_aceites === null) ?

                Get_aceites(page).then(data=> SaveGetAceites(data,keys_storage[9])):
                new Promise((resolve,reject)=>resolve(get_aceites)),


            getAll:(page_cascos,page_aceites,page_llantas)=>(get_all === null) ?

                Get_all_products(page_cascos,page_aceites,page_llantas).then(data=>SaveGetAll(data,keys_storage[10])):
                new Promise((resolve,reject)=>resolve(get_all)),


            getCascos:(page)=>(get_cascos === null) ?
                Get_cascos(page).then(data=>SaveGetCascos(data,keys_storage[11])):
                new Promise((resolve,reject)=>resolve(get_cascos)),

            getServices:()=>(services === null) ?

                Get_services().then(data =>SaveServices(data,keys_storage[2]))  :
                new Promise((resolve,reject)=>resolve(services)),

            getCredits:()=>(credits === null) ?
                Get_credits().then(data =>SaveCredits(data,keys_storage[1]))
                : new Promise((resolve,reject)=>resolve(credits))


        }

    }

    return response;
}

const DataNosotros = () =>{

    const response = {

      Nosotros:{

            getNosotros:()=>(get_nosotros === null) ?
                Get_nosotros().then(data =>SaveGetNosotros(data,keys_storage[12]))
                : new Promise((resolve,reject)=>resolve(get_nosotros))


        }

    }

    return response;
}

export  {DataHome, DataProducts, DataNosotros};
