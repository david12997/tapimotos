import React from "react";
import styled from "styled-components";

const About = styled.div`

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
        text-shadow:0px 0px 10px black;
        width:100%;
        display:flex;
        justify-content:center;
        margin-top:14%;
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

const Portada_nosotros = ()=>{

    return(
        <About>
            <div className="container-titulo">
                <h1>TAPIMOTOS DK</h1>
            </div>
            <img className="img-desktop" src="./images/portada-servicios-desktop.png"></img>
            <img className="img-mobile" src="./images/portada-servicios-mobile.png"></img>



        </About>
    )
}

export default Portada_nosotros;
