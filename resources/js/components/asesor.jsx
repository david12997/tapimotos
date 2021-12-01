import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Btn1_render from "./btn1";

const Asesor =  styled.div`

    width:330px;
    height:200px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    grid-template-areas:
        "imagen  datos"
        "btn     btn  ";
    grid-gap:10px;


    .imagen{

        grid-column-start: imagen;
        grid-column-end: imagen;
        grid-row-start:imagen;
        grid-row-end:imagen;


    }

    .datos{

        grid-column-start: datos;
        grid-column-end: datos;
        grid-row-start:datos;
        grid-row-end:datos;

        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        color:gray;
    }

    .dato{

        width:90%;
        height:30%;
        margin-top:3px;
        font-size:16px;


    }

    .btn-asesor{

        grid-column-start: btn;
        grid-column-end: btn;
        grid-row-start:btn;
        grid-row-end:btn;


    }

`;


const Asesor_render =  ({img,asesor,number,email,link}) =>{

    return(

        <Asesor>

            <div className="imagen">
                <img style={{width:'90%'}} src={img}></img>
            </div>

            <div className="datos">
                <div className="dato">
                    <b>{asesor}</b>
                </div>
                <div className="dato">
                    <FontAwesomeIcon icon={faWhatsapp} /> <b> {number}</b>
                </div>
                <div className="dato">
                    <b>{email}</b>
                </div>
            </div>

            <div className="btn-asesor" onClick={()=>window.location.href=link}>
                <Btn1_render color="rgb(233,128,8)" width="330px" height="47px" title="Contactar"/>
            </div>

        </Asesor>
    )
}

export default Asesor_render;
