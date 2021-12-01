import React, { useEffect } from 'react';
import Filtros_render from '../components/filtros-products';
import Footer_render from '../components/footer';

//parametros url
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

//data ajax localstorage
import  { DataProducts } from '../services/store';

//data redux
import {  Productos, Paginacion, Filtros, Categoria, Busqueda } from '../database/index';
import { useDispatch, useSelector } from 'react-redux';
import Body_tienda from '../components/body-tienda';






export const UpdateStateTienda = (category,dispatch) =>{


    if(category==='busqueda'){

        dispatch(Busqueda(true));
        return 0;

    }else{

        dispatch(Busqueda(false));
    }


    dispatch(Productos(null));


    if(category === 'llantas'){

        dispatch(Categoria({name:'Llantas'}));
        dispatch(Filtros({marca:['Marca:','--'],ancho:['Ancho:','--'],perfil:['Perfil:','--'],rin:['N° rin:','--']}));

        DataProducts().Products.getLlantas('').then(data=>{
            dispatch( Productos(data));

        });
    }

    if(category === 'cascos'){

        dispatch(Categoria({name:'Cascos'}));
        dispatch(Filtros({marca:['Marca:','--'],color:['Color:','--']}));
        DataProducts().Products.getCascos('').then(data=>{

            dispatch( Productos(data));

        });
    }

    if(category === 'aceites'){

        dispatch(Categoria({name:'Aceites'}));
        dispatch(Filtros({marca:['Marca:','--'],tipo:['Tipo de moto:','--']}));
        DataProducts().Products.getAceites('').then(data=>{

            dispatch( Productos(data));

        });
    }

    if( category=== 'todo' || category === undefined || category === null){

        dispatch(Categoria({name:'Todo'}));
        DataProducts().Products.getAll('','','').then(data=>{

            dispatch( Productos(data));

        });
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



        UpdateStateTienda(category,dispatch);

        if(category === 'busqueda' && StateTienda.Productos === null){

            navegar('/productos');
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

