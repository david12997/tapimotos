import React, { useEffect } from 'react';
import Conteindo_credits from '../components/contenido-credits';
import Footer_render from '../components/footer';
import Portada_creditos_render from '../components/portada-credits';


//update carrito
import {  useDispatch } from "react-redux";
import { UpdateCart, UpdateCuantity } from "../database";




function Creditos() {

    let dispatch = useDispatch();

    useEffect(()=>{
        document.title = 'Creditos';
        let links = document.getElementsByClassName('link');
        for(let i=0; i<links.length;i++)(links[i].innerText === 'Creditos') ? links[i].classList.add('link-activo'):links[i].classList.remove('link-activo')

        //update carrito
        let carrito = JSON.parse(localStorage.getItem('products_carrito'));
        if(carrito !== null){

            dispatch(UpdateCart(carrito));
            dispatch(UpdateCuantity(carrito.length));
        }

    },[]);

    return (
        <div>
            <Portada_creditos_render></Portada_creditos_render>
            <Conteindo_credits></Conteindo_credits>
            <br></br>
            <br></br>
            <Footer_render></Footer_render>
        </div>
    );
}

export default Creditos;

