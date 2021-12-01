import React from 'react';
import styled from 'styled-components';


const Portada = styled.div`

    width:100%;
    margin-top:0px;


    .img-desktop{

        display:none;
    }

    .img-mobile{

        display:block;
    }

    @media(min-width:800px){

        margin-top:-18px;

        .img-desktop{

            display:block;
        }

        .img-mobile{

            display:none;
        }

    }

`;

const Main_img = () => {


    return (
        <div>

            <Portada>
                <img className='img-desktop' style={{width:'100%'}} src='./images/portada-desktop.png'></img>
                <img className='img-mobile' style={{width:'100%'}} src='./images/portada-principal-mobile.png'></img>
            </Portada>


        </div>
    );
}

export default Main_img;
