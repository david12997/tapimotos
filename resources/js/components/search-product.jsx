import React, { useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { DataProducts } from "../services/store";

import { useDispatch } from "react-redux";
import { Productos, Categoria, Busqueda } from "../database";
import { useNavigate } from "react-router-dom";

const Buscador = styled.div`

    width:250px;
    height:60px;
    display:flex;
    justify-content:center;
    align-items:center;

    .input-search{

        width:90%;
        height:75%;
        color:gray;
        border:0px;
        box-shadow:0px 0px 5px rgba(0,0,0,0.35);
        border-radius:5px 0px 0px 5px;
    }

    .btn-search{

        font-size:20px;
        box-shadow:0px 0px 5px rgba(0,0,0,0.35);
    }
`;


const Buscador_render = ()=>{

    const input_value = useRef(null);
    const dispatch = useDispatch();
    const navegar = useNavigate();

    let Search = (e,data)=>{

        e.preventDefault();
        if(data.current.value === '') return 0;

        dispatch(Categoria({name:'Busqueda',type:'buscar'}));
        dispatch(Productos(null));

        localStorage.setItem('data_busqueda',data.current.value);

        DataProducts().Products.SearchAll(data.current.value,`&page=${1}`,`&page=${1}`,`?page=${1}`).then(response=>{

            dispatch(Productos(response));
            dispatch(Busqueda(true));
            navegar('/productos/busqueda');

        });

        data.current.value = "";

        $('html, body').animate({

            scrollTop: $('#scrollhere').offset().top
        },1000)
    }

    return(

        <Buscador>
            <form style={{width:'100%',height:'100%'}} className="d-flex justify-content-center align-items-center" onSubmit={(e)=>Search(e,input_value)}>
                <input ref={input_value} className="input-search" type='text' placeholder="Buscar producto"></input>
                <button type="submit" className="btn btn-secondary btn-search">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </Buscador>
    )
}

export default Buscador_render;
