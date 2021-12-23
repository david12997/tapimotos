import React, { useEffect } from 'react';
import Footer_render from '../components/footer';
import Pay_component from '../components/pay';

//update carrito
import {  useDispatch, useSelector } from "react-redux";
import { UpdateCart, UpdateCuantity } from "../database";

import { useNavigate } from 'react-router-dom';




const Pay = () => {

    let dispatch = useDispatch();
    let navegar = useNavigate();
    let data_pay = useSelector(state=>state.comprar.productos);
    let type_pay = useSelector(state=>state.comprar.type);

    useEffect(()=>{


        (data_pay === null) && navegar('/productos');


        //reset title page
        document.title='Pagar';

        //update menu page
        let links = document.getElementsByClassName('link');
        for(let i=0; i<links.length;i++)links[i].classList.remove('link-activo')

        //update carrito
        let carrito = JSON.parse(localStorage.getItem('products_carrito'));
        if(carrito !== null){

            dispatch(UpdateCart(carrito));
            dispatch(UpdateCuantity(carrito.length));
        }
    },[]);

    return (
        <div>

            <br></br>
            <br></br>

            <Pay_component data_pay={data_pay} type_pay={type_pay}></Pay_component>

            <br></br>
            <br></br>

            <Footer_render></Footer_render>
        </div>
    );
}

export default Pay;
