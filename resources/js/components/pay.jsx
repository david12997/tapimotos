import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Domain } from "../services/store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import { DataProducts } from "../services/store";

import Spinner from "./spinner";


const Pay_style = styled.div`

    width:100%;

    .btn-salir{

       position:absolute;
       margin-right:80%;
       color:gray;
       cursor:pointer;
       display:flex;
       justify-content:center;
       align-items:center;

    }

    .card-comprar{

        width:90%;
        box-shadow:0px 0px 8px rgba(0,0,0,0.25);
        font-size:17px;
        margin:15px;
        margin-bottom:25px;
    }

    input{

        width:80%;
        border:0px;
        border-radius:4px;
        box-shadow:0px 0px 4px rgba(0,0,0,0.3);
        margin:5px;
    }


    .list-group-item{
        border:1px solid rgba(0,0,0,0.05);
        border-top:0px;
    }

    @media(min-width:800px){

        .card-comprar{

            width:40%;
        }

        input{

            width:70%
        }

    }




`;

const Pay_component = ({data_pay, type_pay})=>{

    const [step, setStep ] =  useState(1);
    const [spinner, setSpinner] = useState(false);

    useEffect(()=>{

        $('html, body').animate({

            scrollTop: $('#scrollhere').offset().top
        },1000)
        setStep(1);

        const data = new FormData();
        data.append('auth_pay','5719326');
        DataProducts().Products.Pay(Domain+'pagos/auth',data).then(response=>{ console.log(response);})


        return()=>{

            const data = new FormData();
            data.append('auth_pay','5719326');
            DataProducts().Products.Pay(Domain+'pagos/auth/delete',data).then(response=>{ console.log(response);})

        }

    },[setStep])

    let resumen = [];
    let total_pay = 0;

    data_pay !== null &&
    data_pay.map((data,index)=>resumen.push({

        product:data.product_data.name,
        image:data.product_data.img,
        cantidad:data.cuantity,
        price:data.product_data.price,
        subtotal:parseInt(data.cuantity)*parseInt(data.product_data.price)
    }));
    data_pay !== null && resumen.map((data,index)=>total_pay+=data.subtotal);




    const DoBuy = (e)=>{

        e.preventDefault();

        let data = {

            nombre: $('.data-payer')[0].value,
            ciudad: $('.data-payer')[1].value,
            direccion:  $('.data-payer')[2].value,
            celular:  $('.data-payer')[3].value,
            correo: $('.data-payer')[4].value,
            total_pay:total_pay
        };

        let Buy = new FormData();
        Buy.append('pay_tapimotos',JSON.stringify(data));
        Buy.append('data_products',JSON.stringify(resumen));


        DataProducts().Products.Pay(Domain+'pagos/crear-pago',Buy).then(response=>{

            console.log(response);
            window.location.href = response.init_point;
        })

    }

    const GetOut = ()=>{

       window.location.href= Domain+'productos';

    }

    console.log(data_pay);
    console.log(resumen);

    return(

        <Pay_style>


            <div id="scrollhere" className="d-flex justify-content-center align-items-center p-2 text-gray position-relative">
                <small onClick={()=>GetOut()} className="btn-salir">
                    <FontAwesomeIcon style={{fontSize:'18px'}} icon={faAngleLeft}/>
                    <b className="d-flex justify-content-center" style={{width:'30px'}}>Salir</b>
                </small>
                <b  style={{fontSize:'18px'}}>Realizar compra</b>

            </div>

            <hr style={{width:'90%',marginLeft:'5%'}}></hr>

            <br></br>

            <div className="d-flex justify-content-center align-items-center">

                {
                    spinner === true
                    ?
                    <Spinner></Spinner>
                    :
                    <form  onSubmit={(e)=>{DoBuy(e);setSpinner(true);window.scrollTo(0,130);}}style={{width:'100%'}}  className="d-flex justify-content-center  flex-wrap form">
                        <div className={ step === 1 ? "card card-comprar activo" : "card card-comprar d-none" }>
                            <div style={{background:'rgb(0, 150, 210)',color:'white'}} className="card-header">
                            <b>1. Resumen de tu compra</b>
                            </div>
                            <ul className="list-group list-group-flush ">

                                <li className="list-group-item">
                                    <label><b>Metodo de pago: </b></label>
                                    <b style={{color:'rgb(0, 150, 210)'}}> Mercadopago </b>
                                    <br></br>
                                    <small style={{color:'gray'}}>
                                        <p>*Emitimos factura y garantia de tu compra</p>
                                    </small>
                                </li>

                                <li style={{height:'280px',overflowY:'scroll'}} className="list-group-item">
                                    <label><b>Productos:</b></label>

                                    {
                                        resumen.map((product,indice)=>
                                        <div style={{color:'gray'}} key={indice}>

                                            <div>Nombre: {product.product}</div>
                                            <img style={{width:'40px'}} src={product.image}></img>
                                            <div>Cantidad: {product.cantidad}</div>
                                            <div>Precio*unidad :  $ {new Intl.NumberFormat().format(Math.ceil(parseInt(product.price)))} COP</div>
                                            <hr></hr>
                                        </div>)
                                    }

                                </li>

                                <li style={{fontSize:'18px'}} className="list-group-item">
                                    <b>Envío :</b>
                                    <b style={{color:'green'}}>  $ {new Intl.NumberFormat().format(Math.ceil(parseInt(35000)))} COP</b>
                                </li>

                                <li style={{fontSize:'18px'}} className="list-group-item">
                                    <b>Productos :</b>
                                    <b style={{color:'green'}}>  $ {new Intl.NumberFormat().format(Math.ceil(parseInt(total_pay)))} COP</b>
                                </li>
                                <li style={{fontSize:'18px'}} className="list-group-item">
                                    <b>Total a pagar :</b>
                                    <b style={{color:'green'}}>  $ {new Intl.NumberFormat().format(Math.ceil(parseInt(total_pay+35000)))} COP</b>
                                </li>

                                <li className="list-group-item">
                                    <button
                                        onClick={()=>{
                                            setStep(2);
                                            $('html, body').animate({

                                                scrollTop: $('#scrollhere').offset().top
                                            },1000)}
                                        }
                                        style={{width:'100%',fontSize:'20px',boxShadow:'3px 3px 8px rgba(0,0,0,0.3)'}}
                                        className="btn btn-primary text-white">
                                            <b>Siguiente</b>
                                    </button>
                                </li>

                            </ul>
                        </div>

                        <div className={ step === 1 ? "card card-comprar d-none" : "card card-comprar activo"} >
                            <div style={{background:'rgb(0, 150, 210)',color:'white'}} className="card-header">
                                <b> 2. Datos del comprador</b>
                            </div>
                            <ul className="list-group list-group-flush">

                                <div
                                    onClick={()=>{
                                        setStep(1);
                                        $('html, body').animate({

                                            scrollTop: $('#scrollhere').offset().top
                                        },1000)}
                                    }
                                    style={{color:'gray',cursor:'pointer'}}
                                    className="list-group-item">

                                        <b className="d-flex justify-content-start align-items-center">

                                            <FontAwesomeIcon style={{fontSize:'20px'}} icon={faAngleLeft}/>
                                            <small style={{marginLeft:'5px'}}>Resumen de tu compra</small>
                                        </b>
                                </div>

                                <div className="list-group-item">
                                    <label><b>Nombre completo:</b> </label>
                                    <br></br>
                                    <input className="data-payer" required type="text" placeholder="Ej: Juan Diaz" />
                                    <br></br>
                                </div>

                                <div className="list-group-item">
                                    <label><b>Ciudad/Municipio:</b> </label>
                                    <br></br>
                                    <input className="data-payer" required type="text" placeholder="Ej: Bogota Cundinamarca" />
                                    <br></br>
                                </div>

                                <li className="list-group-item">
                                    <label><b>Direccion exacta:</b> </label>
                                    <br></br>
                                    <input className="data-payer" required type="text" placeholder="Ej: Cra 10a # 123"/>
                                    <br></br>
                                </li>

                                <li className="list-group-item">
                                    <label><b> N° Celular :</b> </label>
                                    <br></br>
                                    <input className="data-payer" required type="number" placeholder="Ej: 310123456" />
                                    <br></br>
                                </li>

                                <li className="list-group-item">
                                    <label><b>Correo electronico:</b> </label>
                                    <br></br>
                                    <input className="data-payer" required type="email" placeholder="Ej: email@email.com" />
                                    <br></br>
                                </li>

                                <li className="list-group-item">
                                    <button  type="submit" style={{width:'100%',fontSize:'20px',boxShadow:'3px 3px 8px rgba(0,0,0,0.3)'}} className="btn btn-primary text-white">
                                        <b>Pagar</b>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </form>

                }



            </div>

        </Pay_style>
    )

}

export default Pay_component;
