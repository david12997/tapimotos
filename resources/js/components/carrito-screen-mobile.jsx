import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight ,faTrash} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

import {  useDispatch } from "react-redux";
import { UpdateCart, UpdateCuantity } from "../database";



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

    return(

        <div style={{width:'100%',height:'130px',borderTop:'1px solid rgba(0,0,0,0.3)',borderBottom:'1px solid rgba(0,0,0,0.3)'}} className="d-flex justify-content-center align-items-center product-carrito">

            <div style={{width:'30%',height:'100%'}} className="imagen-producto d-flex justify-content-center align-items-center">
                <img style={{height:'100%'}} src={img}></img>
            </div>


            <div style={{width:'70%',height:'100%'}} className="info-producto">

                <div style={{width:'100%',height:'30%'}} className="nombre-producto d-flex justify-content-center align-items-center">
                    {name}
                </div>

                <div style={{width:'100%',height:'30%',fontSize:'18px'}} className="precio-producto d-flex justify-content-center align-items-center">
                    <b style={{color:'gray'}}><span style={{color:'green'}}>$ {new Intl.NumberFormat().format(Math.ceil(parseInt(price)))} COP</span> - C/U</b>
                </div>

                <div style={{width:'100%',height:'30%',position:'relative'}} className="controles-producto d-flex justify-content-center align-items-center">
                    <div style={{fontSize:'16px'}} className="btn btn-danger">
                        <b>-</b>
                    </div>

                    <input style={{width:'30px',height:'40px',marginLeft:'6px',marginRight:'6px'}} type="text" value="1" readOnly></input>

                    <div style={{fontSize:'16px'}} className="btn btn-success">
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

    const stateCarrito = {

        productos:useSelector(state=>state.carrito.productos),
        cantidad:useSelector(state=>state.carrito.cantidad)
    }

    const CloseScreenCarrito = ()=>{

        $('.screen-carrito-mobile').css('animation-name','close-carrito');
        setTimeout(()=>{
            $('.screen-carrito-mobile').css('display','none');
        },800)


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


        </Carrito_mobile>
    )
}

export default Screen_carrito;
