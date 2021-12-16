import React from "react";
import styled from "styled-components";
import Btn1_render from "./btn1";

const Aceites = styled.div`

    width:100%;
    background:white;
    padding:6px;
    border-radius:10px;



    .aceites-inputs{

        width:100%;
        margin-top:5px;
    }

    select{

        width:80%;
        height:40px;
        border:0px;
        margin-left:10%;
        margin-top:18px;
        border-radius:7px;
        color:gray;
        box-shadow:0px 0px 4px rgba(0,0,0,0.3);
        background:white;

    }
    .btn-1{

        width:80%;
        height:45px;
        margin-top:18px;
        margin-left:10%;
        margin-bottom:15px;
    }


`;


const Search_aceites_tienda = ()=>{

    return(

        <Aceites>

        <div className='aceites-inputs'>

            <select >
                <option>Marca</option>
            </select>

            <select >
                <option>Tipo de moto</option>
            </select>

            <div className="btn-1">
                <Btn1_render width="100%" height="100%" color="#0096d2" title="Buscar"></Btn1_render>
            </div>

        </div>

        </Aceites>
    )
}

export default Search_aceites_tienda;
