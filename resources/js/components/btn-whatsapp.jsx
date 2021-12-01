import React from 'react';
import styled from 'styled-components';

 const Main = styled.div`

    width:100%;
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:30px;
    cursor:pointer;

    .container-btn-whatsapp{

        width:90%;
        height:65%;
        background:#319713;
        border-radius:9px;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:18px;
        box-shadow:3px 3px 8px rgba(0,0,0,0.3);
    }

    .img-whatsapp{

        width:50px;
        margin-right:9%;
    }

    b{
        color:white;
    }

    @media(min-width:800px){

        .container-btn-whatsapp{

            width:40%;
            height:70%;
            background:#319713;
            border-radius:9px;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:19px;
            box-shadow:3px 3px 8px rgba(0,0,0,0.3);
        }

        .img-whatsapp{

            margin-left:-80px;
        }


    }
 `;

const Btn_whatsapp = () => {

    let redirect = ()=>{

        window.location.href='https://api.whatsapp.com/send/?phone=573208168103&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina';
    }

    return (
        <>

            <Main>

                <div className='container-btn-whatsapp' onClick={()=>redirect()}>
                    <div className='img-whatsapp'>
                        <img style={{width:'100%'}} src='./images/logo-whatsapp.svg'></img>
                    </div>
                    <b>¿Que estas buscando?</b>

                </div>

            </Main>



        </>
    );
}

export default Btn_whatsapp;
