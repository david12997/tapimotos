import React, { useEffect } from 'react';
import Asesores_render from '../components/asesores';
import Btn_whatsapp from '../components/btn-whatsapp';
import Contacto_render from '../components/contacto';
import Creditos_render from '../components/credits';
import Footer_render from '../components/footer';
import Main_img from '../components/main-img';
import Main_search from '../components/main-search';
import Services_render from '../components/services';


const Home = () => {

    useEffect(()=>{

        document.title='Inicio';
        let links = document.getElementsByClassName('link');
        for(let i=0; i<links.length;i++)(links[i].innerText === 'Inicio') ? links[i].classList.add('link-activo'):links[i].classList.remove('link-activo')

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
