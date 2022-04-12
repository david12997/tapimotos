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
import Search_all_products from "./search-all";
import Get_pay from "./pay";
import Get_creditsPage from "./get-credits-page";
import Get_servicesPage from "./get-services-page";
import Get_llantas_ancho from "./get-llantas-ancho";
import Get_llantas_ancho_perfil from "./get-llantas-ancho-perfil";
import Get_llantas_ancho_perfil_rin from "./get-llantas-ancho-perfil-rin";
import Get_llantas_for_AnchoPerfilRin from "./get-llantas-search-v2";

//DOMAIN
export const Domain = 'https://tapimotosdk.com/';
//export const Domain = 'http://127.0.0.1:8000/';



const DataHome = () =>{


    const response ={

        main_search:{

            action:'get categories',
            response:()=> Get_categories().then(data => data)
        },
        credits:{

            action:'get credits home', //credits home
            response:()=> Get_credits().then(data =>data)
        },
        services:{

            action:'get services',
            response:()=> Get_services().then(data =>data)
        },
        search_llantas:{

            action:'get marca llantas',

            response:()=>Get_marca_llantas().then(data=>data),

            llantas_for_marca:(marca)=>Get_llantas_for_marca(marca).then(data=>data),

            llantas_for_marcaAncho:(marca,ancho)=>Get_llantas_for_marcaAncho(marca,ancho).then(data=>data),

            llantas_for_marcaAnchoPerfil:(marca,ancho,perfil)=> Get_llantas_for_marcaAnchoPerfil(marca,ancho,perfil).then(data=>data),

            llantas_for_marcaAnchoPerfilRin:(marca,ancho,perfil,rin)=> Get_llantas_for_marcaAnchoPerfilRin(marca,ancho,perfil,rin).then(data=>data),

        },
        search_v2:{

            action:'get llantas ancho',

            llantas_ancho:()=>Get_llantas_ancho().then(data=>data),

            llantas_ancho_perfil:(ancho)=>Get_llantas_ancho_perfil(ancho).then(data=>data),

            llantas_ancho_perfil_rin:(ancho,perfil)=>Get_llantas_ancho_perfil_rin(ancho,perfil).then(data=>data),

            llantas_ancho_perfil_rin_resultado:(ancho,perfil,rin)=>Get_llantas_for_AnchoPerfilRin(ancho,perfil,rin).then(data=>data)
        }

    }

    return response;

}




const DataProducts = () =>{

    const response = {

       Products:{

            getLlantas:(page)=>Get_llantas(page).then(data=> data),

            getAceites:(page)=>Get_aceites(page).then(data=> data),

            getAll:(page_cascos,page_aceites,page_llantas)=>Get_all_products(page_cascos,page_aceites,page_llantas).then(data=>data),

            getCascos:(page)=> Get_cascos(page).then(data=>data),

            getServices:()=>Get_services().then(data =>data),

            getServicesPage:()=>Get_servicesPage().then(data =>data),

            getCredits:()=>Get_credits().then(data =>data),

            getCreditsPage:()=> Get_creditsPage().then(data =>data),

            SearchAll:(data,page_cascos,page_aceites,page_llantas)=>Search_all_products(data,page_cascos,page_aceites,page_llantas),

            Pay:(url,data)=>Get_pay(url,data)


        }

    }

    return response;
}




const DataNosotros = () =>{


    const response = {

      Nosotros:{

            getNosotros:()=>Get_nosotros().then(data =>data)


        }

    }

    return response;
}

export  {DataHome, DataProducts, DataNosotros};
