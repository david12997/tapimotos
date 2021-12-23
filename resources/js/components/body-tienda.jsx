import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Card_render from './card-product';
import Spinner from './spinner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFilter } from '@fortawesome/free-solid-svg-icons';

import Filtro_llantas_tienda from './filtros-llantas-tienda';
import { UpdateStateTienda } from '../pages/products';
import { useDispatch } from "react-redux";
import { useNavigate} from 'react-router-dom';
import { setIndexPagebtns } from './filtros-products';
import Search_cascos_tienda from './filtros-cascos-tienda';
import Search_aceites_tienda from './filtros-aceite-tienda';


const  Cuerpo_tienda = styled.div`

    width:100%;
    background:#eeecec;
    display:flex;
    justify-content:center;
    padding-top:10px;
    padding-bottom:50px;

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
        box-shadow:0px 0px 3px rgba(0,0,0,0.4);
    }
    .img-filtro{

        background:rgb(0,150,210);
        border-radius:10px 10px 0px 0px;
        display:flex;
        justify-content:center;
        align-items:center;


    }

    .categories-filtro{

        border-radius:10px 10px 10px 10px;
        background:white;
        padding:10px;
        margin-top:35px;
        box-shadow:0px 0px 4px rgba(0,0,0,0.4);

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




const setCategory = (category,dispatch,page_cascos,page_aceites,page_llantas,btn,navigate)=>{

    let btns = [

        document.querySelector('.Llantas'),
        document.querySelector('.Aceites'),
        document.querySelector('.Cascos')
    ];

    for(let i=0;i<btns.length;i++){

        if(btn.innerHTML === btns[i].innerHTML) {

            btns[i].style.borderLeft = "10px solid rgb(0,150,210)";
        }else{

            btns[i].style.borderLeft = "0px";
        }
    }


    setIndexPagebtns();

    UpdateStateTienda(category,dispatch,page_cascos,page_aceites,page_llantas);
    navigate(`/productos/${category}`)
}



const Body_tienda = ({data_state})=>{

    let dispatch = useDispatch();
    let navigate = useNavigate();

    let btn1 = useRef(null);
    let btn2 =  useRef(null);
    let btn3 =  useRef(null);

    let imgFiltro = '/images/ejemplo-llantas.png';
    let width ='100%';

    if(data_state.Categoria !== null){

        if( data_state.Categoria.type === 'llantas'){ imgFiltro ='/images/ejemplo-llantas.png';width ='100%'}
        else if( data_state.Categoria.type === 'cascos') {imgFiltro ='/images/casco.png';width='60%'}
        else if( data_state.Categoria.type === 'aceites') {imgFiltro ='/images/aceite.png';width='65%'}
        else { imgFiltro ='/images/ejemplo-llantas.png';width='100%'}
    }else{

        imgFiltro = '/images/ejemplo-llantas.png';
    }


    const AllProducts = ()=>{

        let Products = []

        data_state.Productos[2].data.map((llantas,indice)=>Products.push({
            name:llantas.nombre_llanta,
            img:llantas.img,
            price:llantas.precio_llanta,
            all:llantas,
            category:'Llantas'})
        );

        data_state.Productos[1].map((casco,indice)=>Products.push({
            name:casco.name,
            img:(casco.images.length !==0) ? casco.images[0].src :'/images/casco.png',
            price:casco.regular_price,
            all:casco,
            category:'Cascos'})
        );

        data_state.Productos[0].map((aceite,indice)=>Products.push({
            name:aceite.name,
            img:(aceite.images.length !==0) ? aceite.images[0].src :'/images/aceite.png',
            price:aceite.regular_price,
            all:aceite,
            category:'Aceites'})
        );

       return Products.sort((a,b)=>(a.price<b.price) &&  Math.random()-0.5);
    }

    const AllProductsSearch = () =>{

        let Products = [];

        if( data_state.Productos[0] !== undefined && data_state.Productos[0].length !== 0){

            data_state.Productos[0].map((aceite,indice)=>Products.push({
                name:aceite.name,
                img:(aceite.images.length !==0) ? aceite.images[0].src :'/images/aceite.png',
                price:aceite.regular_price,
                all:aceite,
                category:'Aceites'})
            );
        }

        if(data_state.Productos[1] !== undefined && data_state.Productos[1].length !== 0){

            data_state.Productos[1].map((casco,indice)=>Products.push({
                name:casco.name,
                img:(casco.images.length !==0) ? casco.images[0].src :'/images/casco.png',
                price:casco.regular_price,
                all:casco,
                category:'Cascos'})
            );
        }

        if(data_state.Productos[2] !== undefined && data_state.Productos[2].length !== 0){

            data_state.Productos[2].map((llantas,indice)=>Products.push({name:llantas.nombre_llanta,img:llantas.img,price:llantas.precio_llanta,all:llantas,category:'Llantas'}));
        }

        return Products.sort((a,b)=>(a.price<b.price) &&  Math.random()-0.5);
    }


    useEffect(()=>{

        let route =window.location.pathname;
        if(btn3  !== null){

            let btns = [btn1.current,btn2.current,btn3.current];

            if(route === '/' ){

                for(let i=0;i<btns.length;i++){

                    btns[i].style.borderLeft = "0px";

                }

            }else{

                for(let i=0;i<btns.length;i++){

                    if(route === `/productos/${btns[i].classList[0].toLowerCase()}`) {

                        btns[i].style.borderLeft = "10px solid rgb(0,150,210)";
                    }else{

                        btns[i].style.borderLeft = "0px";
                    }
                }

            }
        }




    },[btn1,btn2,btn3]);



    return(

        <Cuerpo_tienda>
            <div className='filtros-desktop-body'>

                <div className='filtro'>

                    <div className='img-filtro'>
                        <img style={{width:width}} src={imgFiltro}/>
                    </div>
                    <div className='inputs-filtro'>

                        <p style={{width:'100%',margin:'18px',color:'gray'}}><FontAwesomeIcon icon={faFilter}/><b>Filtrar busqueda</b></p>
                        {
                            data_state.Categoria === null
                            ?
                            <Filtro_llantas_tienda></Filtro_llantas_tienda>
                            :
                            data_state.Categoria.type === 'cascos'
                            ?
                            <Search_cascos_tienda></Search_cascos_tienda>
                            :
                            data_state.Categoria.type === 'llantas'
                            ?
                            <Filtro_llantas_tienda></Filtro_llantas_tienda>
                            :
                            data_state.Categoria.type === 'aceites'
                            ?
                            <Search_aceites_tienda></Search_aceites_tienda>
                            :
                            <Filtro_llantas_tienda></Filtro_llantas_tienda>



                        }

                    </div>

                </div>

                <div className='categories-filtro'>
                    <p style={{width:'100%',margin:'2px',color:'gray',display:'flex',justifyContent:'center'}}>
                        <b>Catgeorias</b>
                    </p>

                    <div  ref={btn1} className='Llantas' onClick={(e)=>setCategory('llantas',dispatch,1,1,1,e.currentTarget,navigate)}>
                        <img style={{width:'100%'}} src="/images/llantas.png"></img>
                    </div>
                    <div ref={btn2} className='Aceites' onClick={(e)=>setCategory('aceites',dispatch,1,1,1,e.currentTarget,navigate)}>
                        <img style={{width:'100%'}} src="/images/aceite.png"></img>
                    </div>
                    <div ref={btn3} className='Cascos' onClick={(e)=>setCategory('cascos',dispatch,1,1,1,e.currentTarget,navigate)}>
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
                    AllProducts().map((product,indice)=><Card_render all_data={product} key={indice} img={product.img} name={product.name} price={product.price}/>)
                    :
                    (data_state.Categoria.name === 'Llantas')
                    ?
                    data_state.Productos[0].products.map((llantas,indice)=><Card_render all_data={{all:llantas,category:'Llantas',img:llantas.img,name:llantas.nombre_llanta,price:llantas.precio_llanta}} key={indice} img={llantas.img} name={llantas.nombre_llanta} price={llantas.precio_llanta}/>)
                    :
                    (data_state.Categoria.name === 'Cascos')
                    ?
                    data_state.Productos[0].map((casco,index)=><Card_render all_data={casco} key={index} img="/images/casco.png" name={casco.name} price={casco.regular_price}/>)
                    :
                    (data_state.Categoria.name === 'Aceites')
                    ?
                    data_state.Productos[0].map((aceite,index)=><Card_render all_data={aceite} key={index} img="/images/aceite.png" name={aceite.name} price={aceite.regular_price}/>)
                    :
                    (data_state.Categoria.name === 'Busqueda') && (data_state.Categoria.type !== 'buscar')
                    ?
                    data_state.Productos.map((product,index)=><Card_render all_data={{all:product,category:'Llantas',img:product.img,name:product.nombre_llanta,price:product.precio_llanta}} key={index} img={product.img} name={product.nombre_llanta} price={product.precio_llanta}/>)
                    :
                    (data_state.Categoria.name === 'Busqueda') && (data_state.Categoria.type === 'buscar')
                    ?
                    AllProductsSearch().map((product,indice)=><Card_render all_data={product} key={indice} img={product.img} name={product.name} price={product.price}/>)
                    :
                    <div>Ups, categoria erronea.</div>
                }


            </div>

        </Cuerpo_tienda>
    )

}

export default Body_tienda;
