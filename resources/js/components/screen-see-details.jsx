import React, { useRef } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";

const Deatil = styled.div`

    width:100%;
    height:100%;
    background:white;
    position:fixed;
    z-index:99999;
    animation-duration:1s;
    display:none;
    box-shadow:0px 0px 35px rgba(0,0,0,0.25);
    overflow-y:scroll;
    font-size:17px;


    @keyframes open-details{

        0%{left:900px;}
        100%{left:0px;}
    }

    @keyframes close-details{

        0%{left:0px;}
        100%{left:900px;}
    }

    @media(min-width:900px){

        width:40%;
        margin-left:60%;
    }
`;


const Detail_render = ()=>{

    let Screen_details = useRef(null);
    let product_detail = useSelector(state=>state.vista_producto.producto);


    let CloseDetails = (element)=>{

        element.current.style.animationName = 'close-details';
        setTimeout(()=>{
            element.current.style.display = 'none';
        },900);
    }

    return(

        <Deatil ref={Screen_details} className="screen-see-details p-3">

            <div className="d-flex justify-content-center align-items-center">

                <div onClick={()=>CloseDetails(Screen_details)} style={{width:'100%'}} className="text-white btn btn-primary text-white d-flex justify-content-end align-items-center">
                    <div style={{marginRight:'41%'}}><b> Producto</b></div>
                    <FontAwesomeIcon icon={faAngleRight}/>
                </div>
            </div>
            <br></br>
            {
                product_detail !== null
                &&
                <div style={{width:'100%'}}>

                    <div style={{width:'60%',marginLeft:'20%'}} className="img d-flex justify-content-center align-items-center">
                        <img style={{width:'100%'}} src={ product_detail.img}></img>
                    </div>
                    <br></br>
                    <div className="d-flex justify-content-center">
                        <b> Nombre del producto :   { product_detail.name} </b>
                    </div>
                    <div className="d-flex justify-content-center">
                        <b> Precio por unidad :  $ {new Intl.NumberFormat().format(Math.ceil(parseInt(product_detail.price)))} COP</b>
                    </div>
                    <div className="d-flex justify-content-center">
                        <b> Categoria :   { product_detail.category} </b>
                    </div>
                    <br></br>
                    {
                        product_detail.category === 'Llantas'
                        ?
                        <div>
                            <div className="d-flex justify-content-center">
                                <b> Marca:   { product_detail.all.marca_llanta} </b>
                            </div>
                            <div className="d-flex justify-content-center">
                                <b> Ancho:   { product_detail.all.ancho_llanta} </b>
                            </div>
                            <div className="d-flex justify-content-center">
                                <b> Perfil:   { product_detail.all.perfil_llanta} </b>
                            </div>
                            <div className="d-flex justify-content-center">
                                <b> N° rin:   { product_detail.all.numero_rin} </b>
                            </div>
                        </div>
                        :
                        product_detail.category === 'Cascos'
                        ?
                        <div>

                            <div className="d-flex justify-content-center">
                                <b> Descripcion: <p dangerouslySetInnerHTML={{__html:product_detail.all.description}}></p></b>
                            </div>

                        </div>
                        :
                        product_detail.category === 'Aceites'
                        &&
                        <div>

                            <div className="d-flex justify-content-center">
                            <b> Descripcion: <p dangerouslySetInnerHTML={{__html:product_detail.all.description}}></p></b>
                            </div>

                        </div>


                    }



                </div>
            }





        </Deatil>
    )
}

export default Detail_render;
