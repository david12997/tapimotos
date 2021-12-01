import React from "react";
import styled from "styled-components";
import Btn1_render from "./btn1";

const Aceites = styled.div`

    width:100%;
    height:390px;
    background:#eeecec;

    .aceites-title{

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

    .aceites-inputs{

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


        .aceites-title{

            width:20%;
            margin-left:5%;
        }

        .aceites-inputs{

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


const Search_aceites = ()=>{

    return(

        <Aceites>

        <div className='aceites-title'>
            <b>Aceites</b>
        </div>
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

export default Search_aceites;
