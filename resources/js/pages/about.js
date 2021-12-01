import React from 'react';
import Contenido_aobut_render from '../components/contenido-about';
import Footer_render from '../components/footer';
import Portada_nosotros from '../components/portada-about';



function Nosotros() {


    return (
        <div>
           <Portada_nosotros></Portada_nosotros>
           <Contenido_aobut_render></Contenido_aobut_render>

           <br></br>
           <br></br>
           <Footer_render></Footer_render>

        </div>

    );
}

export default Nosotros;

