import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DataProducts } from "../services/store";
import Spinner from "./spinner";


const Services_contenido = styled.div`

    width:100%;

    .title{

        width:100%;
        height:50px;
        font-size:22px;
        color:black;
        font-weight:bold;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:20px;
        margin-top:20px;
    }

`;

const Conteindo_services = ()=>{

    const [servicios, setServicios] = useState(null)

    useEffect(()=>{

        DataProducts().Products.getServices().then(data=>{

            setServicios(data[0]);
        })

        return()=>{

            setServicios(null);
        }

    },[]);

    console.log(servicios);

    return(

        <Services_contenido>

            <div className="title">
                ¡Conoce lo mejor de tapimotos!
            </div>
            <div style={{padding:'10px'}} className="d-flex justify-content-around align-items-center flex-wrap">

                {
                    (servicios === null) ?

                    <Spinner width="150px" height="150px" size="20px"></Spinner>
                    :
                    servicios.map((service,index)=>

                        <div style={{margin:'16px',marginTop:'22px'}} key={index} className="servicio">
                            <div className="card" style={{width: "19rem",boxShadow:"0px 0px 6px rgba(0,0,0,0.1)"}}>
                                <img style={{height:'210px'}} className="card-img-top" src={service.img} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"><b>{service.title}</b></h5>
                                    <p style={{height:'150px',overflow:'hidden',color:'gray',fontWeight:'bold'}} dangerouslySetInnerHTML={{ __html: service.content }} className="card-text"/>
                                    <a href="#" className="btn btn-secondary btn-block text-white"><b>Ver más</b></a>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>

        </Services_contenido>
    )
}

export default Conteindo_services;
