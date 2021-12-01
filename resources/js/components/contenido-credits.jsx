import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DataProducts } from "../services/store";
import Spinner from "./spinner";


const Credits_contenido = styled.div`

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
        margin-top:40px;
    }

`;

const Conteindo_credits = ()=>{

    const [creditos, setCreditos] = useState(null)

    useEffect(()=>{

        DataProducts().Products.getCredits().then(data=>{

            setCreditos(data[0]);
        })

        return()=>{

            setCreditos(null);
        }

    },[]);

    console.log(creditos);

    return(

        <Credits_contenido>

            <div className="title">
                ¡Financiamos tus accesorios y repuestos!
            </div>
            <div style={{padding:'10px'}} className="d-flex justify-content-around align-items-center flex-wrap">

                {
                    (creditos === null) ?

                    <Spinner width="150px" height="150px" size="20px"></Spinner>
                    :
                    creditos.map((credito,index)=>

                        <div style={{margin:'16px',marginTop:'22px'}} key={index} className="credito">
                            <div className="card" style={{width: "19rem",boxShadow:"0px 0px 6px rgba(0,0,0,0.1)"}}>
                                <img style={{height:'210px'}} className="card-img-top" src={credito.img} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"><b>{credito.title}</b></h5>
                                    <p style={{height:'150px',overflow:'hidden',color:'gray',fontWeight:'bold'}} dangerouslySetInnerHTML={{ __html: credito.content }} className="card-text"/>
                                    <a href="#" className="btn btn-secondary btn-block text-white"><b>Ver más</b></a>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>

        </Credits_contenido>
    )
}

export default Conteindo_credits;
