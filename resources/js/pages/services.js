import React from 'react';
import Conteindo_services from '../components/contenido-services';
import Footer_render from '../components/footer';
import Portada_services_render from '../components/portada-services';


function Services() {
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

