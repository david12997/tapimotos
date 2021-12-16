import React from "react";
import styled from "styled-components";
import Filtro_llantas_tienda from "./filtros-llantas-tienda";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFilter,faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import Search_cascos_tienda from "./filtros-cascos-tienda";
import Search_aceites_tienda from "./filtros-aceite-tienda";

const Container_filtro_mobile = styled.div`

    overflow-y:scroll;
    width:100%;
    height:100%;
    background:white;
    position:fixed;
    z-index:9999;
    padding:30px;
    padding-top:30px;
    animation-duration:1s;
    display:none;

    .filtro{

        border-radius:10px 10px 10px 10px;
        background:white;
        box-shadow:0px 0px 3px rgba(0,0,0,0.4);
    }
    .img-filtro{

        background:rgb(0,150,210);
        border-radius:10px 10px 0px 0px;
        height:240px;
        display:flex;
        justify-content:center;
        align-items:center;


    }

    @keyframes open{

        0%{left:-900px;}
        100%{left:0px;}
    }

    @keyframes close{

        0%{left:0px;}
        100%{left:-900px;}
    }

    @media(min-width:800px){

        display:none;
    }



`;

const Filtro_llantas_mobile_tienda =()=>{

    let data_state = {

        Categoria:useSelector(state=>state.tienda.categoria)

    }

    let imgFiltro = '/images/ejemplo-llantas.png';
    let width ='100%';

    if(data_state.Categoria !== null){

        if( data_state.Categoria.type === 'llantas'){ imgFiltro ='/images/ejemplo-llantas.png';width ='100%'}
        else if( data_state.Categoria.type === 'cascos') {imgFiltro ='/images/casco.png';width='60%'}
        else if( data_state.Categoria.type === 'aceites') {imgFiltro ='/images/aceite.png';width='65%'}
        else { imgFiltro ='/images/ejemplo-llantas.png';width='100%'}
    }
    return(

        <Container_filtro_mobile className="filtros-mobile">

            <div className="d-flex justify-content-center align-items-center p-1">

                <div style={{width:'100%'}} className="btn btn-primary text-white d-flex justify-content-start "
                    onClick={()=>{
                        $('.filtros-mobile').css('animation-name','close');
                        setTimeout(()=>{
                            $('.filtros-mobile').css('display','none');
                        },600);
                    }

                }>

                    <FontAwesomeIcon style={{fontSize:'20px'}} icon={faAngleLeft} />
                    <div style={{marginLeft:'40%'}}>Filtros</div>

                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>

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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Container_filtro_mobile>
    )


}

export default Filtro_llantas_mobile_tienda;
