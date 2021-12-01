import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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


    return(

        <Buscador>
            <input className="input-search" type='text' placeholder="Buscar producto"></input>
            <button className="btn btn-secondary btn-search">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </Buscador>
    )
}

export default Buscador_render;
