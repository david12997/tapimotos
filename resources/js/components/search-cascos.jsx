import React from "react";
import styled from "styled-components";

import Btn1_render from "./btn1";

const Cascos = styled.div`

    width:100%;
    height:390px;
    background:#eeecec;

    .cascos-title{

        width:70%;
        margin-left:15%;
        height:60px;
        background:rgb(233, 128, 8);
        color:white;
        border-radius:0px 0px 10px 10px;
        display:flex;
        justify-content:Center;
        align-items:center;
        font-size:16px;

    }

    .cascos-inputs{

        width:100%;
        margin-top:14px;
        height:320px;
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
    }

    @media(min-width:800px){

        height:225px;


        .cascos-title{

            width:20%;
            margin-left:5%;
        }

        .cascos-inputs{

            height:130px;
            display:flex;
            justify-content:space-around;
            align-items:center;
            flex-wrap:wrap;
        }

        select{

            width:250px;
            margin-left:0;
            font-size:18px;
        }

        .btn-1{

            width:250px;
            margin-left:0;
            font-size:18px;
        }
    }
`;


const Search_cascos = ()=>{

    return(

        <Cascos>

        <div className='cascos-title'>
            <b>Cascos</b>
        </div>
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

        </div>

        </Cascos>
    )
}

export default Search_cascos;
