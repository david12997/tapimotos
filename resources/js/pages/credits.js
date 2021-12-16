import React, { useEffect } from 'react';
import Conteindo_credits from '../components/contenido-credits';
import Footer_render from '../components/footer';
import Portada_creditos_render from '../components/portada-credits';



function Creditos() {

    useEffect(()=>{
        document.title = 'Creditos';
        let links = document.getElementsByClassName('link');
        for(let i=0; i<links.length;i++)(links[i].innerText === 'Creditos') ? links[i].classList.add('link-activo'):links[i].classList.remove('link-activo')

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

