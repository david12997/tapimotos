import React, { useEffect } from 'react';
import Filtros_render from '../components/filtros-products';
import Footer_render from '../components/footer';

//parametros url
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

//data ajax localstorage
import  { DataHome, DataProducts } from '../services/store';

//data redux
import {  Productos, Paginacion, Filtros, Categoria, Busqueda } from '../database/index';
import { useDispatch, useSelector } from 'react-redux';
import Body_tienda from '../components/body-tienda';




//falta terminar funcionamiento del card
//falta vista del producto y  proceso de pago


export const UpdateStateTienda = (category,dispatch,page_cascos,page_aceites,page_llantas,data_busqueda) =>{

    let filtros = JSON.parse(localStorage.getItem('filtros_state'));
    let category_store = JSON.parse(localStorage.getItem('category'));

    dispatch(Productos(null));

    if(category==='busqueda'){

        if(category_store.type === 'buscar' && data_busqueda !== undefined){

            DataProducts().Products.SearchAll(data_busqueda,`&page=${page_cascos}`,`&page=${page_aceites}`,`?page=${page_llantas}`).then(response=>{

                dispatch(Productos(response));

            });
        }

        if(category_store.type === 'llantas'){

            DataHome().search_llantas.llantas_for_marcaAnchoPerfilRin(filtros[0].value,filtros[1].value,filtros[2].value,filtros[3].value).then(data=>{

                dispatch( Productos(data[0]));

            });
        }

        if(category_store.type === 'llantas v2'){

            DataHome().search_v2.llantas_ancho_perfil_rin_resultado(filtros[1].value,filtros[2].value,filtros[3].value).then(data=>{

                dispatch( Productos(data[0]));

            });
        }
        dispatch(Busqueda(true));
        return 0;

    }else{

        dispatch(Busqueda(false));
    }

    if(category === 'llantas'){

        DataProducts().Products.getLlantas(`?page=${page_llantas}`).then(data=>{
            dispatch( Productos(data));

        });

        dispatch(Categoria({name:'Llantas',type:'llantas'}));

        dispatch(Filtros([
            {type:'Marca',value:'--'},
            {type:'Ancho',value:'--'},
            {type:'Perfil',value:'--'},
            {type:'N° rin',value:'--'}

        ]));
        dispatch(Paginacion({first_page:1,last_page:50}));

;
    }

    if(category === 'cascos'){

        DataProducts().Products.getCascos(`&page=${page_cascos}`).then(data=>{

            dispatch( Productos(data));

        });
        dispatch(Categoria({name:'Cascos',type:'cascos'}));
        dispatch(Filtros([
            {type:'Marca',value:'--'},
            {type:'Color',value:'--'}

        ]));
        dispatch(Paginacion({first_page:1,last_page:50}));


    }

    if(category === 'aceites'){

        DataProducts().Products.getAceites(`&page=${page_aceites}`).then(data=>{

            dispatch( Productos(data));

        });
        dispatch(Categoria({name:'Aceites',type:'aceites'}));
        dispatch(Filtros([
            {type:'Marca',value:'--'},
            {type:'Tipo',value:'--'}

        ]));
        dispatch(Paginacion({first_page:1,last_page:50}));


    }

    if( category=== 'todo' || category === undefined || category === null){

        DataProducts().Products.getAll(`&page=${page_cascos}`,`&page=${page_aceites}`,`?page=${page_llantas}`).then(data=>{

            dispatch( Productos(data));

        });

        dispatch(Categoria({name:'Todo',type:'todo'}));
        dispatch(Filtros([
            {type:'Marca',value:'--'},
            {type:'Ancho',value:'--'},
            {type:'Perfil',value:'--'},
            {type:'N° rin',value:'--'}

        ]));
        dispatch(Paginacion({first_page:1,last_page:50}));



    }

}



const  Products = () => {


    let {category} =  useParams();
    let dispatch = useDispatch();
    let navegar = useNavigate();

    let StateTienda = {

        Productos: useSelector(state=>state.tienda.productos),
        Paginacion:useSelector(state=>state.tienda.paginacion),
        Filtros:useSelector(state=>state.tienda.filtros),
        Categoria:useSelector(state=>state.tienda.categoria),
        Busqueda:useSelector(state=>state.tienda.busqueda)
    }




    useEffect(()=>{

        document.title='Productos';
        let links = document.getElementsByClassName('link');

        for(let i=0; i<links.length;i++)(links[i].innerText === 'Productos')
        ?
        links[i].classList.add('link-activo')
        :
        links[i].classList.remove('link-activo')


        if(category === 'busqueda' && StateTienda.Productos === null){

            UpdateStateTienda('todo',dispatch,1,1,1);
            navegar('/productos');

        }else if(category === 'busqueda'  && StateTienda.Productos !== null){

            let data_busqueda = JSON.parse(localStorage.getItem('category'));
            UpdateStateTienda(category,dispatch,1,1,1,data_busqueda);
        }else{

            UpdateStateTienda(category,dispatch,1,1,1);

        }


    },[]);



    return (


        <div>

         <Filtros_render data_state={StateTienda}></Filtros_render>
         <Body_tienda data_state={StateTienda}></Body_tienda>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <Footer_render></Footer_render>

        </div>
    );
}

export default Products;

