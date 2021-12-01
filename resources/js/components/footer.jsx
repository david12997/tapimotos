import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = styled.div`

    width:100%;

    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 4fr 1.5fr 0.5fr;
    grid-template-areas:
        "info info info"
        "logos logos logos"
        "pie pie pie";

    .info{

        grid-column-start:info;
        grid-column-end:info;
        grid-row-start:info;
        grid-row-end:info;

        background:black;
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-wrap:wrap;
        color:white;
        font-size:16px;
        margin-top:120px;

    }

    .info1 , .info2 , .info3{

        width:300px;
        height:30%;
        margin-top:15px;


    }

    .main-logo{

       width:70%;
        margin-bottom:5px;
        margin-left:10%;
    }

    .data1, .title, .data2, .title3, .data3{

        margin-left:17%;
    }

    .logos{
        grid-column-start:logos;
        grid-column-end:logos;
        grid-row-start:logos;
        grid-row-end:logos;

        background:black;
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-wrap:wrap;

    }

    .img-logos{

        width:90%;
    }

    .pie{

        grid-column-start:pie;
        grid-column-end:pie;
        grid-row-start:pie;
        grid-row-end:pie;

        background:rgb(233,128,8);
        color:white;

        display:flex;
        justify-content:space-around;
        align-items:center;
        padding-top:7px;
        flex-wrap:wrap;
    }

    @media(min-width:800px){

        height:650px;
        margin-top:0px;

        .main-logo{

            width:100%;
            margin-left:0%;
        }

        .img-logos{

            width:28%;
        }

        .info{
            margin-top:0px;
        }
        .info1, .info2, .info3{

            margin-top:-110px;
        }
    }


`;


const Footer_render = () =>{


    return(

        <Footer>
            <div className="info">

                <div className="info1">

                    <img className="main-logo"  src="/images/logo-tapimotos.png"/>

                    <div className="data1">
                            <p><b>Oficina: Cra 11-6-46 Villanueva</b></p>
                            <p><b>Casanare Colombia</b></p>
                            <p><b>email: ventas@tapimotosdk.com</b></p>
                    </div>

                </div>

                <div className="info2">

                    <div style={{color:'rgb(233,128,8)'}} className="title">
                        <b>Servicio al cliente</b>
                    </div>
                    <br></br>
                    <div className="data2">

                        <p><b>ventas: ventas@tapimotosdk.com</b></p>
                        <p><b>Whatsapp: 3208168103</b></p>
                        <p><b>Métodos de pago</b></p>
                        <p><b>Envíos</b></p>
                        <p><b>Garantías</b></p>

                    </div>

                </div>
                <div className="info3">

                    <div style={{color:'rgb(233,128,8)'}} className="title3">
                        <b>Legal</b>
                    </div>
                    <br></br>
                    <div className="data3">

                        <p><b>legal@tapimotosdk.com</b></p>
                        <p><b>Términos y condiciones</b></p>
                        <p><b>Tratamiento de datos</b></p>
                        <p><b>Manual de usuario</b></p>

                    </div>
                </div>

            </div>

            <div className="logos">
                <img className="img-logos" src="/images/mercadopago.png"></img>
                <img className="img-logos" src="/images/addi.png"></img>
            </div>

            <div className="pie">
                <div className="d-block">
                    <p><small><b>Todos los derechos reservados </b></small></p>
                    <p><small>Tapimotosdk villanueva casanare</small></p>
                </div>

                <div className="d-block">
                    <p><small><b><FontAwesomeIcon icon={ faFacebook }/> Tapimotos DK</b></small></p>
                    <p><small><b><FontAwesomeIcon icon={ faWhatsapp }/> 320 816 8103</b></small></p>
                </div>
            </div>
        </Footer>
    )
}

export default Footer_render;
