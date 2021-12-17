import React, { useEffect } from 'react';
import Conteindo_services from '../components/contenido-services';
import Footer_render from '../components/footer';
import Portada_services_render from '../components/portada-services';

//update carrito
import {  useDispatch } from "react-redux";
import { UpdateCart, UpdateCuantity } from "../database";



function Services() {

    let dispatch = useDispatch();
    useEffect(()=>{

        document.title='Servicios';
        let links = document.getElementsByClassName('link');
        for(let i=0; i<links.length;i++)(links[i].innerText === 'Servicios') ? links[i].classList.add('link-activo'):links[i].classList.remove('link-activo')


        //update carrito
        let carrito = JSON.parse(localStorage.getItem('products_carrito'));
        if(carrito !== null){

            dispatch(UpdateCart(carrito));
            dispatch(UpdateCuantity(carrito.length));
        }

    },[]);

    return (
        <div>
            <Portada_services_render></Portada_services_render>
            <Conteindo_services></Conteindo_services>
            <br></br>
            <br></br>
            <br></br>
            <Footer_render></Footer_render>
        </div>
    );
}

export default Services;

