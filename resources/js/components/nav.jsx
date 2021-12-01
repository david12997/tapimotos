import React, {useRef, useEffect} from 'react';
import { Nav, Nav_mobile, Nav_desktop, Menu_desktop} from './styles/styles-nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'
import {  faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const open_nav_mobile = (nav) =>{

    nav.current.style.display="block";

}


const Carrito = ({fondo_numero}) =>{


    return (

        <div style={{width:'40px',position:'relative'}}>

        <div style={{
            background:fondo_numero,
            position:'absolute',
            marginLeft:'85%',
            width:'20px',
            height:'26px',
            color:'white',
            fontSize:'18px',
            borderRadius:'50%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
            }}>

            <strong>0</strong>
        </div>
        <img style={{width:'100%'}} src='/images/carrito.svg'></img>
    </div>
    )
}


const  Bars = ({screen_nav}) => {

    return(

        <div onClick={()=>open_nav_mobile(screen_nav)} style={{
            width:'40px',
            marginLeft:'35px',
            background:'#FF890C',
            padding:'6px',
            borderRadius:'5px',
            boxShadow:'0px 0px 8px rgba(0,0,0,0.3)'}}>

            <img style={{width:'100%'}} src='/images/bars.svg'></img>
        </div>
    )

}


const Logo = ({width}) => {

    return(

        <img style={{width:width,marginLeft:'12px'}} src="/images/logo-tapimotos.png"></img>
    )
}


const Nav_render = ({screen_nav})=>{

    let my_clases = 'd-flex justify-content-center align-items-center link',
    link_home = useRef(null),
    link_products = useRef(null),
    link_services = useRef(null),
    link_credits = useRef(null),
    link_about = useRef(null);

    let my_links = [link_home,link_products,link_services,link_credits,link_about];
    let redirects =[
        'https://api.whatsapp.com/send/?phone=573118928239&text=Hola%21+estoy+interesad%40+en+los+productos+de+la+pagina',
        'https://www.facebook.com/Tapimotos-DK-110123437269115'

    ];

    useEffect(()=>{

        (window.location.pathname === '/') && link_home.current.classList.add('link-activo');
        (window.location.pathname === '/productos') && link_products.current.classList.add('link-activo');
        (window.location.pathname === '/servicios') && link_services.current.classList.add('link-activo');
        (window.location.pathname === '/creditos') && link_credits.current.classList.add('link-activo');
        (window.location.pathname === '/nosotros') && link_about.current.classList.add('link-activo');

    },[link_home,link_products,link_services,link_credits,link_about,]);


    const Select_page = (activo,others)=>{

        others.map((link,indice)=>{

            (activo.current.innerHTML === link.current.innerHTML) ? activo.current.classList.add('link-activo') : link.current.classList.remove('link-activo');


        })
    }

    const redirect = (url) =>{

        window.location.href=url;
    }

    return(

        <div>
            <Nav>
                <Nav_mobile>

                    <Logo width='150px'></Logo>
                    <div style={{width:'30%',display:'flex',justifyContent:'space-between',alignItems:'center',marginRight:'12px'}}>

                        <Carrito fondo_numero='#0096D2'></Carrito>
                        <Bars screen_nav={screen_nav}></Bars>

                    </div>

                </Nav_mobile>

                <Nav_desktop>

                    <div className='d-flex justify-content-around'
                        style={{width:'180px',marginLeft:'40px',fontSize:'30px',cursor:'pointer'}}>

                        <FontAwesomeIcon onClick={()=>redirect(redirects[1])} icon={faFacebook} />
                        <FontAwesomeIcon onClick={()=>redirect(redirects[0])} icon={faWhatsapp}/>
                        <FontAwesomeIcon onClick={()=>redirect(redirects[0])} style={{fontSize:'24px'}} icon={faPhoneAlt}/>

                    </div>
                    <div>
                        <Logo width='170px'></Logo>
                    </div>

                    <div className='d-flex' style={{marginRight:'40px'}}>

                        <div onClick={()=>redirect(redirects[0])} style={{fontSize:'16px',color:'#0096D2',marginRight:'30px', paddingTop:'5px',cursor:'pointer'}}>
                            <b>Contactar asesor </b>
                            <img style={{width:'13px'}} src="/images/phone-contact.svg"></img>
                        </div>

                        <Carrito fondo_numero='#ff890c'></Carrito>

                    </div>

                </Nav_desktop>

                <Menu_desktop>

                    <Link ref={link_home} onClick={()=>{Select_page(link_home,my_links) }}  className={my_clases} to="/">
                        <b>Inicio</b>
                    </Link>


                    <Link ref={link_products} onClick={()=>{Select_page(link_products,my_links)}}  className={my_clases} to="/productos">
                        <b>Productos</b>
                    </Link>


                    <Link ref={link_services} onClick={()=>{Select_page(link_services,my_links)}}  className={my_clases} to="/servicios">
                        <b>Servicios</b>
                    </Link>


                    <Link ref={link_credits} onClick={()=>{Select_page(link_credits,my_links)}}   className={my_clases} to="/creditos">
                        <b>Creditos</b>
                    </Link>


                    <Link ref={link_about} onClick={()=>{Select_page(link_about,my_links)}}   className={my_clases} to="/nosotros">
                        <b>Nosotros</b>
                    </Link>

                </Menu_desktop>
            </Nav>
        </div>
    )
}

export default Nav_render;
