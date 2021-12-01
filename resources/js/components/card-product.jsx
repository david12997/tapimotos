import React from "react";
import styled from "styled-components";
import Btn1_render from "./btn1";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Card_element = styled.div`

    width:300px;
    height:450px;
    margin:5px;
    background:white;
    box-shadow:0px 0px 4px rgba(0,0,0,0.4);
    border-radius:7px;
    margin-top:25px;

    .img-product{

        width:100%;
        height:150px;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .name-product{

        width:100%;
        height:60px;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        font-weight:bold;

    }

    .name{

        background:rgb(0, 150, 210);
        color:white;
        height:76%;
        width:85%;
        padding:8px;
        font-size:15px;
        display:flex;
        justify-content:center;
        align-items:center;

    }

    .price-product{

        width:100%;
        height:40px;
        font-size:17px;
        color:green;
        padding:7px;
    }
    .actions-card{

        width:100%;
        height:100px;

        display:flex;
        justify-content:space-around;
        align-items:center;
        padding:7px;
        cursor:pointer;
    }

    .container-cantidad{

        width:50%;
    }


    .cuantity, .btn-less, .btn-more{

        width:30%;
        font-size:16px;
    }

    .cuantity{

        margin-left:5px;
        margin-right:5px;
    }

    .iconos{
        width:40%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        margin-top:23px;
    }

    .container-btn-comprar{

        width:100%;
        height:70px;
        display:flex;
        justify-content:center;
        align-items:center;
        curosr:pointer
    }

    .ver-detalle{

        width:100%;
        height:30px;
        display:flex;
        justify-content:center;
        align-items:center;
        color:gray;
        cursor:pointer

    }


`;

const Card_render = ({img,name,price}) =>{


    return(

        <Card_element>
            <div className="img-product">
                <img style={{height:'100%'}} src={img}/>

            </div>
            <div className="name-product">
                <p className="name"><b>{name}</b></p>
            </div>
            <div className="price-product">
                <p><b>$ {new Intl.NumberFormat().format(Math.ceil(parseInt(price)))} COP</b> <b style={{color:'gray'}}>C/U</b> </p>
            </div>
            <div className="actions-card">
                <div className="container-cantidad">
                    <b style={{color:'gray'}}>Cantidad</b>
                    <div className="controls-cuantity">
                        <div style={{fontWeight:'bold'}} className="btn-less btn btn-danger"><b>-</b></div>
                        <input type="number" className="cuantity"></input>
                        <div style={{fontWeight:'bold'}} className="btn-more btn btn-success"><b>+</b></div>
                    </div>
                </div>
                <div className="iconos">
                    <div style={{fontSize:'27px',color:'green'}} className="whatsapp">
                        <FontAwesomeIcon icon={faWhatsapp}/>
                    </div>
                    <div  style={{fontSize:'24px',color:'gray'}} className="add-cart">
                    <FontAwesomeIcon icon={faCartPlus}/>
                    </div>
                </div>

            </div>
            <div className="container-btn-comprar">
                <Btn1_render width="90%" height="80%" title="Comprar" color="rgb(255,137,12)"></Btn1_render>

            </div>
            <div className="ver-detalle">
                <p style={{paddingTop:'15px'}}><b>Ver detalles</b></p>
            </div>
        </Card_element>
    )
}

export default Card_render;
