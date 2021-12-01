import React from "react";
import styled from "styled-components";

const Portada = styled.div`

    width:100%;
    position:relative;

    .img-desktop{

        display:none;
    }
    .img-mobile{

        display:block;
        width:100%;
    }

    .container-titulo{

        position:absolute;
        color:white;
        text-shadow:0px 0px 15px black;
        width:100%;
        display:flex;
        justify-content:center;
        margin-top:20%;
        font-weight:bold;
    }

    @media(min-width:800px){

        margin-top:-19px;

        .img-desktop{

            width:100%;
            display:block;
        }

        .img-mobile{

            display:none;
        }

        .container-titulo{

            margin-top:13%;
        }
    }
`;

const Portada_services_render = ()=>{

    return(
        <Portada>
            <div className="container-titulo">
                <h1>Servicios</h1>
            </div>
            <img className="img-desktop" src="./images/portada-servicios-desktop.png"></img>
            <img className="img-mobile" src="./images/portada-servicios-mobile.png"></img>



        </Portada>
    )
}

export default Portada_services_render;
