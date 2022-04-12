import React from "react";
import styled from "styled-components";
import Btn1_render from "./btn1";

const Status_style = styled.div`

    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;

    .container-img{

        width:300px;
        margin:5px;
    }

    .container-img > img{

        width:300px;
    }

    .container-data{

        width:310px;
        margin:5px;
        padding:5px;
        font-size:17px;
    }

    @media(min-width:800px){

        .container-data{

            margin:40px;
        }

        .container-img{

            margin:40px;
        }
    }

`;


const Status = ({message, image})=>{

    return(
        <Status_style>

            <div className="container-img">
                <img src={image} />
            </div>

            <div className="container-data">
                <b style={{color:'gray'}}>{message}</b>
                <br></br>
                <br></br>
                <br></br>
                <small style={{color:'#FF890C'}}><b>Descarga la factura de tu transacción</b> </small>
                <br></br>
                <span onClick={()=>window.location.href='/pagos/transaccion/pdf'}>
                    <Btn1_render width="290px" height="50px" color="rgb(0, 150, 210)" title="Descargar factura"></Btn1_render>
                </span>
            </div>
        </Status_style>
    )

}

export default Status;
