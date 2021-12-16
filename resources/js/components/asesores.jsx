import React from "react";
import styled from "styled-components";
import Asesor_render from "./asesor";


const Asesores = styled.div`

    width:100%;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    margin-top:100px;

    .asesores{

       margin-top:50px;

    }

    .main-title{

        margin-top:50px;
        width:100%;
        height:50px;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:17px;


    }

    @media(min-width:800px){

        .asesores{

            margin:70px;
        }

        .main-title{

            font-size:18px;
        }
    }

`;

const Asesores_render =  () =>{


    let data =[

        {
            'img':'./images/asesor.png',
            'asesor':'Asesor1',
            'number':'3208168103',
            'email':'asesor1@tapimotosdk.com','link':'https://api.whatsapp.com/send/?phone=573208168103&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina+tapimotosdk.com'
        },
        {
            'img':'./images/asesor.png',
            'asesor':'Asesor2',
            'number':'3118928239',
            'email':'asesor2@tapimotosdk.com','link':'https://api.whatsapp.com/send/?phone=573118928239&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina+tapimotosdk.com'
        },
        {
            'img':'./images/asesor.png',
            'asesor':'Asesor3',
            'number':'3208168103',
            'email':'asesor3@tapimotosdk.com','link':'https://api.whatsapp.com/send/?phone=573208168103&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina+tapimotosdk.com'
        },
        {
            'img':'./images/asesor.png',
            'asesor':'Asesor4',
            'number':'3118928239',
            'email':'asesor4@tapimotosdk.com','link':'https://api.whatsapp.com/send/?phone=573118928239&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina+tapimotosdk.com'
        }
    ];

    return(

        <div style={{width:'100%'}}>

        <Asesores>

            <div className="main-title">
                <b>¿NECESITAS AYUDA?</b>
            </div>
            {
                data.map((dato,index)=>

                    <div className="asesores"  key={index}>
                    <Asesor_render

                        img={dato.img}
                        asesor={dato.asesor}
                        number={dato.number}
                        email={dato.email}
                        link={dato.link}
                    ></Asesor_render>
                    </div>
                )
            }

        </Asesores>

        <br></br>

        </div>
    )
}

export default Asesores_render;

