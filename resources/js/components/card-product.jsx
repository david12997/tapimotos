import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Btn1_render from "./btn1";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons';

import {  useDispatch } from "react-redux";
import { UpdateCart, UpdateCuantity } from "../database";


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


    const [cuantity, setCuantity ] = useState(1);
    const [añadido,setAñadido] = useState(0)
    const dispatch = useDispatch();
    const btn_carrito = useRef(null);



    const UpdateCarrito_component = (btn) =>{

        console.log(btn.style.color);
        //falta arreglar el btn card producto añadir al carrito cuandos se elimina ese mismo producto desde el carrito

        if(btn.style.color === 'gray'){
            setAñadido(0);
        }else{
            setAñadido(1);
        }

        console.log(añadido);

        let current_cart = JSON.parse(localStorage.getItem('products_carrito'));

        if(current_cart === null){

            setAñadido(1);
            dispatch(UpdateCart([{name:name,img:img,price:price}]));
            dispatch(UpdateCuantity(1));


        }else{

            if(añadido === 1){

                for(let i =0; i<current_cart.length;i++){

                    if(current_cart[i].name === name) {

                        setAñadido(0);
                        current_cart.splice(i,1);
                        dispatch(UpdateCart(current_cart));
                        dispatch(UpdateCuantity(current_cart.length));
                    }
                }

            }else{

                setAñadido(1);
                current_cart.push({name:name,img:img,price:price});
                dispatch(UpdateCart(current_cart));
                dispatch(UpdateCuantity(current_cart.length));

            }

        }

        añadido === 0 ?  btn.style.color='rgb(0,150,210)' : btn.style.color='gray';

    }

    const LessCuantity = (max)=>{

        if(cuantity > 1) setCuantity(cuantity-1);
        if(cuantity === 1) setCuantity(max);


    }

    const MoreCuantity = (max)=>{


        if(cuantity === max) setCuantity(1);
        if(cuantity < max) setCuantity(cuantity+1);

    }

    let redirect = ()=>{

        window.location.href=`https://api.whatsapp.com/send/?phone=573208168103&text=Hola%21+estoy+interesad%40+en+el+producto+${name}+de+la+pagina+tapimotosdk.com`;
    }

    useEffect(()=>{

        let current_cart = JSON.parse(localStorage.getItem('products_carrito'));

        if(current_cart !== null){

            for(let i =0; i<current_cart.length;i++){

                if(current_cart[i].name === name) {

                    setAñadido(1);

                    añadido === 0 ?  btn_carrito.current.style.color='rgb(0,150,210)'
                    : btn_carrito.current.style.color='gray';

                }
            }

            dispatch(UpdateCart(current_cart));
            dispatch(UpdateCuantity(current_cart.length));
        }
    },[btn_carrito]);


    return(

        <Card_element >
            <div className="img-product">
                <img style={{height:'100%'}} src={img}/>

            </div>
            <div className="name-product">
                <p className="name name-product-card-element"><b>{name}</b></p>
            </div>
            <div className="price-product">
                <p><b>$ {new Intl.NumberFormat().format(Math.ceil(parseInt(price)))} COP</b> <b style={{color:'gray'}}>C/U</b> </p>
            </div>
            <div className="actions-card">
                <div className="container-cantidad">
                    <b style={{color:'gray'}}>Cantidad</b>
                    <div className="controls-cuantity">
                        <div onClick={()=>LessCuantity(4)} style={{fontWeight:'bold'}} className="btn-less btn btn-danger"><b>-</b></div>
                        <input type="number" className="cuantity" readOnly value={cuantity}></input>
                        <div onClick={()=>MoreCuantity(4)} style={{fontWeight:'bold'}} className="btn-more btn btn-success"><b>+</b></div>
                    </div>
                </div>
                <div className="iconos">
                    <div style={{fontSize:'27px',color:'green'}} className="whatsapp"  onClick={()=>redirect()}>
                        <FontAwesomeIcon icon={faWhatsapp}/>
                    </div>
                    <div ref={btn_carrito} style={{fontSize:'24px',color:'gray'}} className="add-cart add-cart-element" onClick={(e)=>UpdateCarrito_component(e.currentTarget)}>
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
