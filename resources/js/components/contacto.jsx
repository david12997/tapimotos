import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp,  faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import {  faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Contacto = styled.div`

    width:100%;
    height:650px;


    .title-contacto{

        width:100%;
        height:50px;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:18px;
        margin-bottom:30px;
    }

    .body-contacto{

        width:100%;
        height:510px;
        background:#0096d2;
    }

    .text1-contacto{

        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        height:40px;
        color:white;
    }
    .container-iconos{

        width:100%;
        height:420px;
        color:white;

        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;

    }

    .icon{

        width:300px;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:10px;
        cursor:pointer;

    }

    .Whatsapp{

        font-size:60px;
    }

    .Messenger{

        font-size:55px;
    }
    .Contacto{

        font-size:50px;
    }

    @media(min-width:800px){

        height:400px;

        .icon{
            font-size:18px;
            margin-top:-40px;

        }

        .title-contacto{
            font-size:20px;

        }

        .text1-contacto{
            font-size:18px;
            margin-top:40px;
            height:60px;
        }

        .body-contacto{

            height:330px;
        }

        .container-iconos{
            height:310px;
        }


        .Whatsapp{

            font-size:80px;
        }

        .Messenger{

            font-size:75px;
        }
        .Contacto{

            font-size:70px;
        }

    }
`;


const Contacto_render = ()=>{

    let redirects =[
        'https://api.whatsapp.com/send/?phone=573208168103&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina',
        'https://api.whatsapp.com/send/?phone=573118928239&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina',
        'https://www.facebook.com/Tapimotos-DK-110123437269115'

    ];
    const data = [

        {'icono':faWhatsapp,'info1':'Whatsapp','info2':'3132954370',link:redirects[0]},
        {'icono':faFacebookMessenger,'info1':'Messenger','info2':'¡Click aquí!',link:redirects[2]},
        {'icono':faPhoneAlt,'info1':'Contacto','info2':'3118928239',link:redirects[1]}
    ]


    return(

        <Contacto>

            <br></br>
            <hr></hr>

            <div className="title-contacto ">
                <b>Contacto</b>
            </div>

            <div className="body-contacto">
                <div className="text1-contacto">
                    <b style={{color:'white'}}>Comprar en Tapimotos nunca fue tan fácil</b>
                </div>

                <div className="container-iconos">

                    {
                        data.map((dato,index)=>


                            <div onClick={()=>window.location.href=dato.link} key={index} className="icon">
                                <div>
                                    <div className={ dato.info1 +  " Svg"}>
                                        <FontAwesomeIcon className={data.info1}  icon={dato.icono}/>
                                    </div>

                                    <div className="info1">
                                        <b>{dato.info1}</b>
                                    </div>
                                    <div className="info2">
                                        <b>{dato.info2}</b>
                                    </div>
                                </div>


                            </div>
                        )
                    }





                </div>

            </div>
            <br></br>
            <hr></hr>

        </Contacto>
    )
}

export default Contacto_render;
