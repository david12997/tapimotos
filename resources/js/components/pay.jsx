import React from "react";
import styled from "styled-components";
import { Domain } from "../services/store";

const Pay_style = styled.div`

    width:100%;

    .btn-salir{

       position:absolute;
       margin-right:80%;
       color:gray;
       cursor:pointer;

    }

    .card-comprar{

        width:90%;
        box-shadow:0px 0px 8px rgba(0,0,0,0.25);
        font-size:17px;
        margin:15px;
        margin-bottom:25px;
    }

    input{

        width:80%
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

    let resumen = [];
    let total_pay = 0;

    console.log(data_pay);
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
        Buy.append('tapi','5719326');



    }


    console.log(resumen);

    return(

        <Pay_style>


            <div className="d-flex justify-content-center align-items-center p-2 text-gray position-relative">
                <small className="btn-salir">
                    <b>Salir</b>
                </small>
                <b style={{fontSize:'18px'}}>Realizar compra</b>

            </div>

            <hr style={{width:'90%',marginLeft:'5%'}}></hr>

            <br></br>

            <div className="d-flex justify-content-center align-items-center">
                <form  onSubmit={(e)=>DoBuy(e)}style={{width:'100%'}}  className="d-flex justify-content-center  flex-wrap">
                    <div className="card card-comprar" >
                        <div style={{background:'rgb(0, 150, 210)',color:'white'}} className="card-header">
                        <b>1. Resumen de tu compra</b>
                        </div>
                        <ul className="list-group list-group-flush ">

                            <li className="list-group-item">
                                <label><b>Metodo de pago: </b></label>
                                <b style={{color:'rgb(0, 150, 210)'}}> Mercadopago </b>
                                <br></br>
                                <small style={{color:'#ff890c'}}>
                                    <p>*Emitimos factura y garantia de tu compra, recuerda que todos tus pagos estan protegidos por mercadopago</p>
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
                                <b style={{color:'green'}}>  $ {new Intl.NumberFormat().format(Math.ceil(parseInt(20000)))} COP</b>
                            </li>

                            <li style={{fontSize:'18px'}} className="list-group-item">
                                <b>Productos :</b>
                                <b style={{color:'green'}}>  $ {new Intl.NumberFormat().format(Math.ceil(parseInt(total_pay)))} COP</b>
                            </li>
                            <li style={{fontSize:'18px'}} className="list-group-item">
                                <b>Total a pagar :</b>
                                <b style={{color:'green'}}>  $ {new Intl.NumberFormat().format(Math.ceil(parseInt(total_pay+20000)))} COP</b>
                            </li>



                        </ul>
                    </div>

                    <div className="card card-comprar" >
                        <div style={{background:'rgb(0, 150, 210)',color:'white'}} className="card-header">
                        <b> 2. Datos del comprador</b>
                        </div>
                        <ul className="list-group list-group-flush">



                            <li className="list-group-item">
                                <label><b>Nombre completo:</b> </label>
                                <br></br>
                                <input className="data-payer" required type="text"/>
                            </li>

                            <li className="list-group-item">
                                <label><b>Ciudad/Municipio:</b> </label>
                                <br></br>
                                <input className="data-payer" required type="text"/>
                            </li>

                            <li className="list-group-item">
                                <label><b>Direccion exacta:</b> </label>
                                <br></br>
                                <input className="data-payer" required type="text"/>
                            </li>

                            <li className="list-group-item">
                                <label><b> N° Celular :</b> </label>
                                <br></br>
                                <input className="data-payer" required type="number"/>
                            </li>

                            <li className="list-group-item">
                                <label><b>Correo electronico:</b> </label>
                                <br></br>
                                <input className="data-payer" required type="email"/>
                            </li>

                            <li className="list-group-item">
                                <button  type="submit" style={{width:'100%',fontSize:'20px'}} className="btn btn-primary text-white">
                                    <b>Pagar</b>
                                </button>
                            </li>
                        </ul>
                    </div>
                </form>

            </div>

        </Pay_style>
    )

}

export default Pay_component;
