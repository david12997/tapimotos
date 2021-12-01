import React from 'react';
import styled from 'styled-components';
import Card_render from './card-product';
import Spinner from './spinner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFilter } from '@fortawesome/free-solid-svg-icons';
import Filtro_llantas_tienda from './filtros-llantas-tienda';


const  Cuerpo_tienda = styled.div`

    width:100%;
    background:#eeecec;
    display:flex;
    justify-content:center;
    padding-top:10px;

    .filtros-desktop-body{

        display:none;
    }

    .container-productos{

        width:90%;
        height:99%;
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
        padding:8px;
    }

    .filtro{

        border-radius:10px 10px 10px 10px;
        background:white;
    }
    .img-filtro{

        background:rgb(0,150,210);
        border-radius:10px 10px 0px 0px;


    }

    .categories-filtro{

        border-radius:10px 10px 10px 10px;
        background:white;
        padding:10px;
        margin-top:35px;

    }

    .Llantas, .Aceites, .Cascos{

        margin-left:10%;
        width:80%;
        margin-top:12px;
        margin-bottom:12px;
        border-bottom:2px solid gray;
        cursor:pointer;
    }

    @media(min-width:800px){

        .filtros-desktop-body{

            display:block;
            width:20%;
            border-radius:10px 10px 10px 10px;
            margin-top:33px;

        }

        .container-productos{

            width:75%;
            height:99%;

        }


    }

`;


const Body_tienda = ({data_state})=>{


    console.log(data_state.Productos);

    const AllProducts = ()=>{

        let Products = []

        data_state.Productos[2].data.map((llantas,indice)=>Products.push({name:llantas.nombre_llanta,img:llantas.img,price:llantas.precio_llanta}));
        data_state.Productos[1].map((casco,indice)=>Products.push({name:casco.name,img:"/images/casco.png",price:casco.regular_price}));
        data_state.Productos[0].map((aceite,indice)=>Products.push({name:aceite.name,img:"/images/aceite.png",price:aceite.regular_price}));

       return Products;
    }

    return(

        <Cuerpo_tienda>
            <div className='filtros-desktop-body'>

                <div className='filtro'>

                    <div className='img-filtro'>
                        <img style={{width:'100%'}} src='/images/ejemplo-llantas.png'/>
                    </div>
                    <div className='inputs-filtro'>

                        <p style={{width:'100%',margin:'18px',color:'gray'}}><FontAwesomeIcon icon={faFilter}/><b>Filtrar busqueda</b></p>
                        <Filtro_llantas_tienda></Filtro_llantas_tienda>

                    </div>

                </div>

                <div className='categories-filtro'>
                    <p style={{width:'100%',margin:'2px',color:'gray',display:'flex',justifyContent:'center'}}><b>Catgeorias</b></p>

                    <div className='Llantas'>
                        <img style={{width:'100%'}} src="/images/llantas.png"></img>
                    </div>
                    <div className='Aceites'>
                        <img style={{width:'100%'}} src="/images/aceite.png"></img>
                    </div>
                    <div className='Cascos'>
                        <img style={{width:'100%'}} src="/images/casco.png"></img>
                    </div>
                </div>
            </div>


            <div className='container-productos'>
                {
                    (data_state.Productos === null )
                    ?
                    <Spinner width="250px" height="250px" size="20px"></Spinner>
                    :
                    (data_state.Categoria.name === 'Todo')
                    ?
                    AllProducts().map((product,indice)=><Card_render key={indice} img={product.img} name={product.name} price={product.price}/>)
                    :
                    (data_state.Categoria.name === 'Llantas')
                    ?
                    data_state.Productos[0].products.map((llantas,indice)=><Card_render key={indice} img={llantas.img} name={llantas.nombre_llanta} price={llantas.precio_llanta}/>)
                    :
                    (data_state.Categoria.name === 'Cascos')
                    ?
                    data_state.Productos[0].map((casco,index)=><Card_render key={index} img="/images/casco.png" name={casco.name} price={casco.regular_price}/>)
                    :
                    (data_state.Categoria.name === 'Aceites')
                    ?
                    data_state.Productos[0].map((aceite,index)=><Card_render key={index} img="/images/aceite.png" name={aceite.name} price={aceite.regular_price}/>)
                    :
                    (data_state.Categoria.name === 'Buscar')
                    ?
                    data_state.Productos.map((product,index)=><Card_render key={index} img="/images/llantas.png" name={product.nombre_llanta} price={product.precio_llanta}/>)
                    :
                    <div>Ups, categoria erronea.</div>
                }
            </div>
        </Cuerpo_tienda>
    )

}

export default Body_tienda;
