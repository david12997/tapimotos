import React from "react";
import styled from "styled-components";

import Btn1_render from "./btn1";

const Cascos = styled.div`

    width:100%;
    background:white;
    border-radius:10px;



    .cascos-inputs{

        width:100%;
        margin-top:14px;

    }

    select{

        width:80%;
        height:45px;
        border:0px;
        margin-left:10%;
        margin-top:28px;
        border-radius:7px;
        color:gray;
        box-shadow:0px 0px 8px rgba(0,0,0,0.3);
        background:white;

    }

    .btn-1{

        width:80%;
        height:45px;
        margin-left:10%;
        margin-top:28px;
        margin-bottom:15px;

    }


`;


const Search_cascos_tienda = ()=>{

    return(

        <Cascos>


            <div className='cascos-inputs'>

                <select >
                    <option>Marca</option>
                </select>

                <select >
                    <option>Color</option>
                </select>

                <div className="btn-1">
                    <Btn1_render width="100%" height="100%" color="#0096d2" title="Buscar"></Btn1_render>
                </div>
                <br></br>
            </div>

        </Cascos>
    )
}

export default Search_cascos_tienda;
