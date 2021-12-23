import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Asesores_render from "./asesores";
import Contacto_render from "./contacto";



const Contenido_about = styled.div`

    width:100%;

    .title-nosotros{

        margin-top:35px;
        width:100%;
        height:50px;
        display:flex;
        justify-content:center;
        align-item:center;
        font-size:20px;
        font-weigt:bold;
    }

    .contenido1{

        width:100%;
        padding:10px;
    }

    .text1{

        display:flex;
        justify-content:center;
        align-items:center;
        color:gray;
        font-size:18px;
        font-weight:bold;
        padding:18px;

    }

    .galeria{
        margin-top:9px;
        width:100%;

        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-wrap:wrap;



    .container-img{

        width:300px;
        height:400px;
        margin:30px;
        border-radius:10px;
    }

    .texto{
        margin:5px;
        color:gray;
        font-weight:bold;
    }

    img{
        width:100%;
        height:180px;
    }



`;


const Contenido_aobut_render = ()=>{


    return(
        <Contenido_about>

            <div className="title-nosotros">

                <b>Nosotros</b>

            </div>

            <div className="contenido1">

                <div className="text1">
                    Tapimotos es una distribuidora de llantas, accesorios y respuestos para tu moto, todos nuestros productos estan garantizados, nos enfocamos en
                    presentar productos de la mas alta calidad, contamos con  el mejor equipo para atender
                    tus dudas y darte el mejor servicio ....
                </div>

                <div className="galeria">

                    <div className="container-img">
                        <img src="https://tapimotosdk.com/blog/wp-content/uploads/2021/11/nosotros-tapi-4.jpg"></img>
                        <div className="texto"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo quam, commodo nec sagittis ac,
                         blandit sed neque. Donec erat lectus, sollicitudin feugiat lorem ut,
                        </div>
                        <div className="btn btn-secondary mt-3 btn-block">
                            <b>Ver más...</b>
                        </div>
                    </div>

                    <div className="container-img">
                        <img src="https://tapimotosdk.com/blog/wp-content/uploads/2021/11/nosotros-tapi-3.jpg"></img>
                        <div className="texto"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo quam, commodo nec sagittis ac,
                         blandit sed neque. Donec erat lectus, sollicitudin feugiat lorem ut,
                        </div>
                        <div className="btn btn-secondary mt-3 btn-block">
                            <b>Ver más...</b>
                        </div>
                    </div>



                    <div className="container-img">
                        <img src="https://tapimotosdk.com/blog/wp-content/uploads/2021/11/nosotros-tapi-5.jpg"></img>
                        <div className="texto"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo quam, commodo nec sagittis ac,
                         blandit sed neque. Donec erat lectus, sollicitudin feugiat lorem ut,
                        </div>
                        <div className="btn btn-secondary mt-3 btn-block">
                            <b>Ver más...</b>
                        </div>
                    </div>

                </div>
            </div>

            <hr></hr>

            <div className="title-nosotros">

                <b>Nuestras instalaciones</b>

            </div>


            <div style={{width:'100%'}} className="instalaciones d-flex justify-content-around align-items-center flex-wrap">

                    <div style={{width:'300px',margin:'15px'}} className="videos ">
                        <video style={{width:'100%'}}  controls src="https://tapimotosdk.com/video/video-api-2.mp4"></video>
                    </div>

                    <div style={{width:'300px',margin:'15px'}} className="videos ">
                        <video style={{width:'100%'}}  controls src="https://tapimotosdk.com/video/video-tapi-1.mp4"></video>
                    </div>

                    <div style={{width:'300px',margin:'15px'}} className="videos ">
                        <video style={{width:'100%'}}  controls src="https://tapimotosdk.com/video/video-tapi-3.mp4"></video>
                    </div>
            </div>

            <Contacto_render></Contacto_render>
            <br></br>
            <hr></hr>
            <Asesores_render></Asesores_render>

        </Contenido_about>
    )

}

export default Contenido_aobut_render;
