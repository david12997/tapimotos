import React, { useEffect } from 'react';
import Asesores_render from '../components/asesores';
import Btn_whatsapp from '../components/btn-whatsapp';
import Contacto_render from '../components/contacto';
import Creditos_render from '../components/credits';
import Footer_render from '../components/footer';
import Main_img from '../components/main-img';
import Main_search from '../components/main-search';
import Services_render from '../components/services';

//update carrito
import {  useDispatch } from "react-redux";
import { UpdateCart, UpdateCuantity } from "../database";




const Home = () => {

    let dispatch = useDispatch();

    useEffect(()=>{

        //reset title page
        document.title='Inicio';

        //update menu page
        let links = document.getElementsByClassName('link');
        for(let i=0; i<links.length;i++)(links[i].innerText === 'Inicio') ? links[i].classList.add('link-activo'):links[i].classList.remove('link-activo')

        //update carrito
        let carrito = JSON.parse(localStorage.getItem('products_carrito'));
        if(carrito !== null){

            dispatch(UpdateCart(carrito));
            dispatch(UpdateCuantity(carrito.length));
        }
    },[]);

    return (
        <div>
            <Main_img></Main_img>
            <Btn_whatsapp></Btn_whatsapp>
            <Main_search></Main_search>
            <Creditos_render></Creditos_render>
            <Services_render></Services_render>
            <Contacto_render></Contacto_render>
            <Asesores_render></Asesores_render>
            <Footer_render></Footer_render>
        </div>
    );
}

export default Home;
