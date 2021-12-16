import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {  faEnvelope, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import Filtro_llantas_mobile_tienda from './mobile-filtro-llantas-tienda';


const Header = styled.div`

    width:100%;
    height:50px;
    background:black;
    color:#FF890C;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:15px;
    cursor:pointer;

    .text-whatsapp{
        display:flex;
        justify-content:space-around;
        align-items:center;
    }

    .text-contacto{

        display:none;
    }

    .text-location{

        display:none;
    }


    @media(min-width:800px){

        justify-content:space-between;

        .text-contacto{

            display:flex;
            justify-content:center;
            align-items:center;
            color:white;
            width:280px;
        }

        .text-location{

            display:flex;
            justify-content-center;
            align-items:center;
            color:white;
            width:280px;

        }

    }

`;

const Header_render = ()=>{

    let redirect = ()=>{

        window.location.href='https://api.whatsapp.com/send/?phone=573208168103&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina+tapimotosdk.com';
    }

    return(

        <div>

            <Header>
                <div className='text-contacto'>
                    <strong> Contacto </strong>

                    <div style={{marginLeft:'10px', fontSize:'25px'}}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>


                <div className='text-whatsapp' onClick={()=>redirect()}>
                    <strong> ESCRIBENOS AL 320 816 8103 </strong>

                    <div style={{marginLeft:'10px', fontSize:'25px'}}>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                </div>


                <div className='text-location'>
                    <strong> Carrera 11 - 6 - 46 Villanueva </strong>

                    <div style={{marginLeft:'10px', fontSize:'25px'}}>
                        <FontAwesomeIcon icon={faMapMarked} />
                    </div>
                </div>
            </Header>
        </div>
    )
}

export default Header_render;
