import React, { useState } from "react";
import styled from "styled-components";
import Buscador_render from "./search-product";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { UpdateStateTienda } from "../pages/products";
import Filtro_llantas_mobile_tienda from "./mobile-filtro-llantas-tienda";



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
        width:130px;
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
    .bg-white, .btn-light{

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

        .bg-white, .btn-light{

            width:40px;
            height:40px;
            margin:3px;
            font-size:17px;
        }


    }


`;

const CheckPageCurrent = (i,current_page,buttons)=>{

    if(current_page === parseInt(buttons[i].innerText)){

        buttons[i].classList.remove('bg-white');
        buttons[i].classList.add('bg-secondary');
        buttons[i].classList.add('text-white');

    }else {
        buttons[i].classList.add('bg-white');
        buttons[i].classList.remove('bg-secondary');
        buttons[i].classList.remove('text-white');
    }
}

const UpdateLessIndexPage = (data,buttons,route,current_page) =>{


    for(let i=0;i<buttons.length;i++){

        if(buttons[i].previousSibling.classList[2] === 'anterior' && $(buttons[i]).hasClass('bg-secondary') ){

            buttons[0].innerHTML = parseInt(buttons[0].innerHTML)-3;
            buttons[1].innerHTML = parseInt(buttons[1].innerHTML)-3;
            buttons[2].innerHTML = parseInt(buttons[2].innerHTML)-3;

            buttons[0].classList.remove('bg-white');
            buttons[0].classList.add('bg-secondary');
            buttons[0].classList.add('text-white');

            CheckPageCurrent(i,current_page,buttons);
        }

        CheckPageCurrent(i,current_page,buttons);


    }


}

const UpdateMoreIndexPage = (data,buttons,route,current_page) =>{

    for(let i=0;i<buttons.length;i++){

        if(buttons[i].nextSibling.classList[2] === 'siguiente' && $(buttons[i]).hasClass('bg-secondary') ){

            buttons[0].innerHTML = parseInt(buttons[0].innerHTML)+3;
            buttons[1].innerHTML = parseInt(buttons[1].innerHTML)+3;
            buttons[2].innerHTML = parseInt(buttons[2].innerHTML)+3;

            buttons[0].classList.remove('bg-white');
            buttons[0].classList.add('bg-secondary');
            buttons[0].classList.add('text-white');

            CheckPageCurrent(i,current_page,buttons);
        }

        CheckPageCurrent(i,current_page,buttons);


    }


}

export const setIndexPagebtns = ()=>{

    let buttons = document.getElementsByClassName('index-page');
    for(let i=0;i<buttons.length;i++){

        if(i===0 ){

            $(buttons[i]).addClass('bg-secondary');
            $(buttons[i]).addClass('text-white');
            $(buttons[i]).removeClass('bg-white');

        }else{

            $(buttons[i]).removeClass('bg-secondary');
            $(buttons[i]).removeClass('text-white');
            $(buttons[i]).addClass('bg-white');

        }

        buttons[i].innerHTML = i+1;

    }


}

const redirect = (route,redireccion,dispatch,page_cascos,page_aceites,page_llantas,setPage)=>{


    setIndexPagebtns();
    setPage(1);
    UpdateStateTienda(route,dispatch,page_cascos,page_aceites,page_llantas);


    //update btn-img main categories
    let btns = [

        document.querySelector('.Llantas'),
        document.querySelector('.Aceites'),
        document.querySelector('.Cascos')
    ];

    if(route === 'todo'){

        for(let i=0;i<btns.length;i++){

            btns[i].style.borderLeft = "0px";

        }

    }else{

        for(let i=0;i<btns.length;i++){

            if(route === btns[i].classList.value.toLowerCase()) {

                btns[i].style.borderLeft = "10px solid rgb(0,150,210)";
            }else{

                btns[i].style.borderLeft = "0px";
            }
        }

    }


    route === 'llantas' && redireccion('/productos/llantas');
    route === 'cascos' && redireccion('/productos/cascos');
    route === 'aceites' && redireccion('/productos/aceites');
    route === 'todo' && redireccion('/productos');


}


const nextPage = (current_page, max_page, min_page, data, setPage, route,dispatch) =>{

    console.log(data.Productos);
    //limit max page
    //data.Productos[0].products.length for category llantas
    //data.Productos[2].data.length for category todo
    //data.Productos[0].length for categories llantas and aceites

    if( current_page !== min_page  &&  current_page !== max_page && current_page < max_page)  current_page++;
    if(current_page === max_page+1) current_page = min_page;
    if(current_page === min_page) current_page++;

    setPage(current_page);

    let buttons = document.getElementsByClassName('index-page');
    UpdateMoreIndexPage(data,buttons,route,current_page);

    if(route === 'busqueda'){
        UpdateStateTienda(route,dispatch,current_page,current_page,current_page,'not null');
    }else{

        UpdateStateTienda(route,dispatch,current_page,current_page,current_page);
    }




}

const previusPage = (current_page, max_page, min_page,setPage,route,dispatch) =>{

    let buttons = document.getElementsByClassName('index-page');
    if(buttons[0].innerText === '1' && $(buttons[0]).hasClass('bg-secondary')) return 0; // this line no permite indice de pagina negativo


    if( current_page !== min_page  &&  current_page !== max_page && current_page > min_page)  current_page--;
    if(current_page === max_page)  current_page--;
    if(current_page <= 0) current_page = max_page;

    setPage(current_page);
    UpdateLessIndexPage('Less page',buttons,route,current_page);

    if(route === 'busqueda'){
        UpdateStateTienda(route,dispatch,current_page,current_page,current_page,'not null');
    }else{

        UpdateStateTienda(route,dispatch,current_page,current_page,current_page);
    }



}

const ClickIndexPage = (category,dispatch,page_cascos,page_aceites,page_llantas,setPage)=>{

    let buttons = document.getElementsByClassName('index-page');

    for(let i=0;i<buttons.length;i++){

        CheckPageCurrent(i,parseInt(page_llantas),buttons);
    }

    setPage(page_llantas);

    if(category === 'busqueda'){

        UpdateStateTienda(category,dispatch,page_cascos,page_aceites,page_llantas,'not null');
    }else{
        UpdateStateTienda(category,dispatch,page_cascos,page_aceites,page_llantas);
    }



}




const Filtros_render = ({data_state}) =>{

    let redireccion = useNavigate();
    let dispatch = useDispatch();

    const [page,setPage] = useState(1);


    return(

        <Filtros_html>
            <div className="filtros">

                <div className="buscador">
                    <Buscador_render></Buscador_render>
                </div>


                <div className="titulo">

                    <div style={{cursor:'pointer'}} className="btn-filtrar-busqueda" onClick={()=>{$('.filtros-mobile').css('display','block');$('.filtros-mobile').css('animation-name','open');}}>
                        <FontAwesomeIcon icon={faFilter}/>
                        <span> Filtrar busqueda</span>
                    </div>

                    <select value={(data_state.Categoria !== null) && data_state.Categoria.name } onChange={(e)=>redirect(e.currentTarget.value.toLowerCase(),redireccion,dispatch,1,1,1,setPage)} className="title-category">
                        <option defaultValue="/">Todo</option>
                        <option defaultValue="llantas">Llantas</option>
                        <option defaultValue="cascos">Cascos</option>
                        <option defaultValue='aceites' >Aceites</option>
                    </select>

                </div>

                <hr></hr>


                <div className="filtro-aplicado">

                {(data_state.Filtros !== null) && data_state.Filtros.map((filtro,index)=>

                    <p key={index} className="container-filter">
                        <b className="filter">{filtro.type} : </b>
                        <b> {filtro.value}</b>
                    </p>

                )}


                </div>



                <div className="container-pagination">

                    <div className="container-filtros-desktop">

                        {(data_state.Filtros !== null) && data_state.Filtros.map((filtro,index)=>

                            <p key={index} className="container-filter">
                                <b className="filter">{filtro.type}  : </b>
                                <b> {filtro.value}</b>
                            </p>

                    )}
                    </div>


                    <div className="contanier-link-pages">
                        <div className="btn  btn-light anterior" onClick={()=>previusPage(page,data_state.Paginacion.last_page,data_state.Paginacion.first_page,setPage, data_state.Categoria.name.toLowerCase(),dispatch)}>
                            <FontAwesomeIcon icon={faAngleLeft}/>
                        </div>
                        <div className="btn  bg-secondary text-white index-page" onClick={(e)=>ClickIndexPage(data_state.Categoria.name.toLowerCase(),dispatch,e.currentTarget.innerHTML,e.currentTarget.innerHTML,e.currentTarget.innerHTML,setPage)}>
                            1
                        </div>
                        <div className="btn  bg-white  index-page"  onClick={(e)=>ClickIndexPage(data_state.Categoria.name.toLowerCase(),dispatch,e.currentTarget.innerHTML,e.currentTarget.innerHTML,e.currentTarget.innerHTML,setPage)}>
                            2
                        </div>
                        <div className="btn  bg-white  index-page"  onClick={(e)=>ClickIndexPage(data_state.Categoria.name.toLowerCase(),dispatch,e.currentTarget.innerHTML,e.currentTarget.innerHTML,e.currentTarget.innerHTML,setPage)}>
                            3
                        </div>

                        <div  className="btn btn-light siguiente" onClick={()=>nextPage(page,data_state.Paginacion.last_page,data_state.Paginacion.first_page,data_state,setPage, data_state.Categoria.name.toLowerCase(),dispatch)}>
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

