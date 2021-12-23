import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight ,faTrash} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

import {  useDispatch } from "react-redux";
import { UpdateCart, UpdateCuantity, UpdateProductsBuy, UpdateTypeBuy } from "../database";
import Btn1_render from "./btn1";
import { useNavigate } from "react-router-dom";



const Carrito_mobile = styled.div`

    width:100%;
    height:100%;
    position:fixed;
    background:white;
    box-shadow:0px 0px 35px rgba(0,0,0,0.3);
    z-index:99999;
    animation-duration:1s;
    padding-top:15px;
    padding-left:20px;
    padding-right:20px;
    display:none;

    .container-productos-carrito{

        width:100%;
        height:350px;
        border-top:1px solid rgba(0,0,0,0.3);
        border-bottom:1px solid rgba(0,0,0,0.3);
        margin-top:20px;
        overflow-y:scroll;
    }

    @media(min-width:800px){

        width:46%;
        margin-left:54%;
        padding-top:25px;
        padding-left:40px;
        padding-right:40px;
    }

    @media(min-width:1300px){

        width:39%;
        margin-left:61%;

    }

    @keyframes open-carrito{

        0%{left:900px;}
        100%{left:0px;}
    }

    @keyframes close-carrito{

        0%{left:0px;}
        100%{left:1200px;}
    }
`;


const CartEmpty=()=>{

    return(
        <div style={{marginTop:'10px'}}>

            <div style={{width:'100%'}}  className="d-flex justify-content-center align-items-center">
                <img style={{height:'250px'}} src="/images/carrito-vacio.png"></img>
            </div>

            <br></br>
            <br></br>
            <div style={{color:'gray',fontSize:'18px'}} className="d-flex justify-content-center algin-items-center">
                <b><li style={{width:'115%'}}>Ups, nada por aquí todavía</li></b>
            </div>
        </div>
    )
}

const CartLleno = ({name,price,img}) =>{

    let dispatch = useDispatch();

    let DeleteOfCart = (name_product)=>{


        //limpiar cards producto btn carrito
        let products_rendered = $('.name-product-card-element');

        for(let i = 0; i < products_rendered.length;i++){


            if(name_product.trim() === products_rendered[i].innerText.trim()){

                $('.add-cart-element')[i].style.color='gray';
            }

        }

        //eliminar producto dle carrito
        let productos = JSON.parse(localStorage.getItem('products_carrito'));

        if(productos !== null && productos !== undefined && productos.length !==0){

            for(let i = 0; i < productos.length;i++){


                if(name_product.trim() === productos[i].name.trim()){

                    productos.splice(i,1);

                }

            }

            dispatch(UpdateCart(productos));
            dispatch(UpdateCuantity(productos.length));
        }




    }

    const [cuantity, setCuantity] =  useState(1);

    const LessCuantity = (max)=>{

        if(cuantity > 1) setCuantity(cuantity-1);
        if(cuantity === 1) setCuantity(max);


    }

    const MoreCuantity = (max)=>{


        if(cuantity === max) setCuantity(1);
        if(cuantity < max) setCuantity(cuantity+1);

    }
    return(

        <div style={{width:'100%',height:'130px',borderTop:'1px solid rgba(0,0,0,0.3)',borderBottom:'1px solid rgba(0,0,0,0.3)'}} className="d-flex justify-content-center align-items-center product-carrito">

            <div style={{width:'30%',height:'100%'}} className="imagen-producto d-flex justify-content-center align-items-center">
                <img style={{height:'80%'}} src={img}></img>
            </div>


            <div style={{width:'70%',height:'100%'}} className="info-producto">

                <div style={{width:'100%',height:'30%'}} className="nombre-producto d-flex justify-content-center align-items-center">
                    {name}
                </div>

                <div style={{width:'100%',height:'30%',fontSize:'18px'}} className="precio-producto d-flex justify-content-center align-items-center">
                    <b style={{color:'gray'}}><span style={{color:'green'}}>$ {new Intl.NumberFormat().format(Math.ceil(parseInt(price)))} COP</span> - C/U</b>
                </div>

                <div style={{width:'100%',height:'30%',position:'relative'}} className="controles-producto d-flex justify-content-center align-items-center">


                    <div onClick={()=>LessCuantity(4)} style={{fontSize:'16px'}} className="btn btn-danger">
                        <b>-</b>
                    </div>

                    <input className="cuantity-product-carrito" style={{width:'30px',height:'40px',marginLeft:'6px',marginRight:'6px'}} type="text" value={cuantity} readOnly></input>

                    <div onClick={()=>MoreCuantity(4)}  style={{fontSize:'16px'}} className="btn btn-success">
                        <b>+</b>
                    </div>


                    <div style={{position:'absolute',fontSize:'12px',color:'gray',marginLeft:'-72%'}} className="cantidad-title">
                       <b>cantidad</b>
                    </div>

                    <div onClick={()=>DeleteOfCart(name)} style={{position:'absolute',fontSize:'25px',color:'red',marginLeft:'79%'}} className="eliminar">
                        <FontAwesomeIcon icon={faTrash}/>
                    </div>

                </div>



            </div>

        </div>
    )
}

const Screen_carrito = ()=>{

    let dispatch = useDispatch();
    let navegar = useNavigate();

    const stateCarrito = {

        productos:useSelector(state=>state.carrito.productos),
        cantidad:useSelector(state=>state.carrito.cantidad)
    };


    const CloseScreenCarrito = ()=>{

        $('.screen-carrito-mobile').css('animation-name','close-carrito');
        setTimeout(()=>{
            $('.screen-carrito-mobile').css('display','none');
        },800)


    }

    const ComprarCarrito = ()=>{

        let data_pay_carrito = [];

        for(let i=0; i < stateCarrito.productos.length;i++){

            data_pay_carrito.push({

                product_data:stateCarrito.productos[i],
                cuantity:$('.cuantity-product-carrito')[i].value
            })
        }

        dispatch(UpdateProductsBuy(data_pay_carrito));
        dispatch(UpdateTypeBuy('Carrito'));

        $('.screen-carrito-mobile').css('animation-name','close-carrito');

        setTimeout(()=>{
            $('.screen-carrito-mobile').css('display','none');
        },900);

        navegar('/pagar');


    }



    return(

        <Carrito_mobile  className="screen-carrito-mobile">

            <div onClick={()=>{CloseScreenCarrito()}}  style={{width:'100%',fontSize:'17px'}} className="btn btn-primary d-flex justify-content-end align-items-center  text-white">
               <div style={{marginRight:'40%'}}><b>Carrito</b></div>
               <FontAwesomeIcon icon={faAngleRight}/>
            </div>
            <div className="container-productos-carrito">
                {
                    stateCarrito.productos !== null &&
                    stateCarrito.productos.length !== undefined &&
                    stateCarrito.productos.length !== null &&
                    stateCarrito.productos.length !== 0 ?
                    stateCarrito.productos.map((product,index)=><CartLleno key={index} name={product.name} img={product.img} price={product.price} />)
                    :
                    <CartEmpty ></CartEmpty>

                }
            </div>
            <br></br>

            {

                stateCarrito.productos !== null &&
                stateCarrito.productos.length !== undefined &&
                stateCarrito.productos.length !== null &&
                stateCarrito.productos.length !== 0 &&
                <div  style={{width:'100%',fontSize:'18px'}}>
                    <div style={{width:'100%'}} onClick={()=>ComprarCarrito()}>
                        <Btn1_render  width="100%" height="60px" title="Comprar ahora" color="rgb(0,150,210)"></Btn1_render>
                    </div>
                    <p style={{width:'100%',margin:'5px',color:'gray'}} className="d-flex justify-content-center align-items-center">
                        <b>ó</b>
                    </p>
                    <p style={{width:'100%',color:"green"}} className="d-flex justify-content-center align-items-center">
                        <b>¡Comprar en whatsapp!</b>
                    </p>
                </div>
            }


        </Carrito_mobile>
    )
}

export default Screen_carrito;
