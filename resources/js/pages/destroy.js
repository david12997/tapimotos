import React, { useEffect } from "react";
import styled from "styled-components";


import { useParams } from "react-router-dom";
import Status from "../components/status-paid";
import Footer_render from "../components/footer";


const DestroyStyle = styled.div`

   width:100%;


`;


const Destroy = ()=>{

    let {status} = useParams();
    let color = 'gray';

    let message_success = 'Tu pago se debito correctamente, recibiras toda la informacion por parte de mercadopago a tu email';
    let message_failed = 'Ups, tu pago no fue aprovado, ponte en contacto con tu entidad bancaria o intenta con otro método de pago';
    let message_pending = 'No te preocupes, tu pago esta en proceso, una vez sea autorizado mercadopago te notificara a ti y a nosotros';

    let image_success = '/images/success.png';
    let image_pending = '/images/pending.png';
    let image_failed = '/images/failed.png'


    status === 'success' ? color = 'green':
    status === 'failed' ? color = 'red':
    status === 'pending' ? color = '#FF890C' : color = 'gray';

    let data = [];

    useEffect(()=>{

        console.log(status); //failed success pending
        console.log( window.location.href.split('?')[1].split('&'));



        return()=>{

        }

    },[]);



    return(
        <DestroyStyle>

            <br></br>
            <div className="d-flex justify-content-center align-items-center ">
                <b style={{color:color,fontSize:'20px'}}>
                    {
                        status === 'success' ? '¡Pago exitoso!':
                        status === 'failed' ? '¡Pago rechazado!':
                        status === 'pending' && '¡Pago pendiente!'
                    }
                </b>
            </div>

            <br></br>
            <Status message={
                        status === 'success' ? message_success:
                        status === 'failed' ? message_failed:
                        status === 'pending' && message_pending}

                    image={
                        status === 'success' ? image_success:
                        status === 'failed' ? image_failed:
                        status === 'pending' && image_pending}

            ></Status>

            <br></br>
            <br></br>
            <Footer_render></Footer_render>


        </DestroyStyle>
    )
}



export default Destroy;
