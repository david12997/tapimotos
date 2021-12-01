import React from "react";
import styled from "styled-components";

const Creditos = styled.div`

    width:100%;
    position:relative;

    .img-desktop{

        display:none;
    }
    .img-mobile{

        display:block;
        width:100%;
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

    }
`;

const Portada_creditos_render = ()=>{

    return(
        <Creditos>

            <img className="img-desktop" src="./images/creditos-desktop.png"></img>
            <img className="img-mobile" src="./images/creditos-mobile.png"></img>



        </Creditos>
    )
}

export default Portada_creditos_render;
