import React from "react";
import styled from "styled-components";
import Buscador_render from "./search-product";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { UpdateStateTienda } from "../pages/products";



const Filtros_html = styled.div`

    width:100%;


    .filtros{

        width:100%;
    }

    .buscador{
        padding:12px;
        width:100%;
        display:flex;
        justify-content:flex-end;
    }

    .titulo{

        width:100%;
        height:40px;
        margin-top:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        position:relative;
    }

    .title-category{

        background:transparent;
        border:0px;
        font-size:20px;
        font-weight:bold;
        margin-left:12%;
    }

    .btn-filtrar-busqueda{

        position:absolute;
        color:gray;
        margin-right:64%;
    }

    .filtro-aplicado{

        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-wrap:wrap;

    }

    .container-filter{

        display:flex;
        justify-content:center;
        align-items:center;
        width:107px;
        margin-top:-6px;
    }

    .filter{

        color:gray;

    }

    .container-pagination{

        width:100%;
        height:50px;
        background:rgb(255, 137, 12);
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .container-link-pages{
        width:100%;
    }
    .bg-white{

        width:36px;
        height:36px;
        margin:2px;
    }

    .container-buscador-desktop{

        display:none;
    }

    .container-filtros-desktop{

        display:none;
    }


    @media(min-width:800px){

        .buscador{

            display:none;
        }

        .btn-filtrar-busqueda{

            display:none;
        }

        .filtro-aplicado{

            display:none;
        }

        .container-pagination{

            height:80px;
            justify-content:space-around;
        }

        .title-category{

            margin-left:0px;
        }

        .container-buscador-desktop{

            border-left:2px solid white;
            display:flex;
            justify-content:center;
            align-items:center;
            width:300px;
        }

        .container-filtros-desktop{

            border-right:2px solid white;
            display:flex;
            width:300px;
            justify-content:space-around;
            aign-items:center
            padding:5px;
            font-size:15px;
        }

        .container-filter{

            display:flex;
            justify-content:space-around;
            flex-wrap:wrap;
            width:100px;
            margin-left:5px;
            margin-right:5px;
            margin-top:0px;
        }

        .filter{

            color:white;
        }

        .bg-white{

            width:40px;
            height:40px;
            margin:3px;
            font-size:17px;
        }


    }


`;



const redirect = (route,redireccion,dispatch)=>{

    route === 'llantas' && redireccion('/productos/llantas');
    route === 'cascos' && redireccion('/productos/cascos');
    route === 'aceites' && redireccion('/productos/aceites');
    route === 'todo' && redireccion('/productos');

    UpdateStateTienda(route,dispatch);
}


const Filtros_render = ({data_state}) =>{

    let redireccion = useNavigate();
    let dispatch = useDispatch();


    return(

        <Filtros_html>
            <div className="filtros">

                <div className="buscador">
                    <Buscador_render></Buscador_render>
                </div>


                <div className="titulo">

                    <div className="btn-filtrar-busqueda">
                        <FontAwesomeIcon icon={faFilter}/>
                        <span> Filtrar busqueda</span>
                    </div>

                    <select value={(data_state.Categoria !== null) && data_state.Categoria.name } onChange={(e)=>redirect(e.currentTarget.value.toLowerCase(),redireccion,dispatch)} className="title-category">
                        <option defaultValue="/">Todo</option>
                        <option defaultValue="llantas">Llantas</option>
                        <option defaultValue="cascos">Cascos</option>
                        <option defaultValue='aceites' >Aceites</option>
                    </select>

                </div>

                <hr></hr>

                <div className="filtro-aplicado">

                    <p className="container-filter">
                        <b className="filter">Marca: </b>
                        <b> MICHELIN</b>
                    </p>
                    <p className="container-filter">
                        <b className="filter">Ancho :</b>
                        <b> 180</b>
                    </p>
                    <p className="container-filter">
                        <b className="filter">Perfil: </b>
                        <b> 180</b>
                    </p>
                    <p className="container-filter">
                        <b className="filter">N° rin: </b>
                        <b> 180</b>
                    </p>
                </div>

                <div className="container-pagination">

                    <div className="container-filtros-desktop">

                        <p className="container-filter">
                            <b className="filter">  Marca: </b>
                            <b> MICHELIN</b>
                        </p>
                        <p className="container-filter">
                            <b className="filter">Ancho :</b>
                            <b> 180</b>
                        </p>
                        <p className="container-filter">
                            <b className="filter">Perfil: </b>
                            <b> 180</b>
                        </p>
                        <p className="container-filter">
                            <b className="filter">N° rin: </b>
                            <b> 180</b>
                        </p>
                    </div>

                    <div className="contanier-link-pages">
                        <div className="btn  bg-white">
                            <FontAwesomeIcon icon={faAngleLeft}/>
                        </div>
                        <div className="btn  bg-white">
                            1
                        </div>
                        <div className="btn  bg-white">
                            2
                        </div>
                        <div className="btn  bg-white">
                            3
                        </div>

                        <div className="btn  bg-white">
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </div>
                    </div>

                    <div className="container-buscador-desktop">
                        <Buscador_render></Buscador_render>
                    </div>

                </div>

            </div>


        </Filtros_html>
    )

}

export default Filtros_render;

