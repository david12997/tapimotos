import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faHome, faBox, faBriefcase, faFolderPlus, faMotorcycle, faAngleLeft, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { keyframes } from 'styled-components';
import {Link} from 'react-router-dom';

let open_screen = keyframes`

    from{

        margin-left:700px;
    }
    to{
        margin-left:0px;
    }

`;

let close_screen = keyframes`

    from{

        margin-left:0px;
    }
    to{
        margin-left:700px;
    }

`;

const Menu = styled.div`

    display: none;
    width:100%;
    height:100vh;
    background:white;
    position:fixed;
    z-index:999;
    padding:15px;
    animation-name:${props=> props.animation};
    animation-duration:1s;


`;


const hidde_screen = (ref,setAnimation,open_screen)=>{

    setTimeout(()=>{

        ref.current.style.display="none";
        setAnimation(open_screen);

    },900)
}


const Screen_menu_mobile = React.forwardRef(({},ref) =>{

    const [animation,setAnimation] = useState(open_screen);
    const  Links = [

        { 'path':'/','title':'Inicio','icon':faHome},
        { 'path':'/productos','title':'Productos','icon':faBox},
        { 'path':'/servicios','title':'Servicios','icon':faBriefcase},
        { 'path':'/creditos','title':'Creditos','icon':faFolderPlus},
        { 'path':'/nosotros','title':'Nosotros','icon':faMotorcycle}

    ]

    return(

        <Menu ref={ref}  animation={animation}>

            <button
                className='btn btn-primary btn-block text-white  d-flex justify-content-start'
                onClick={()=>{setAnimation(close_screen);hidde_screen(ref,setAnimation,open_screen)}}
            >
                <div style={{fontSize:'22px'}}><FontAwesomeIcon icon={faAngleLeft} /></div>
                <b style={{fontSize:'18px', marginLeft:'33%'}}>Menu</b>
            </button>



            {
                Links.map((link,indice)=>
                    <Link
                    onClick={()=>{setAnimation(close_screen);hidde_screen(ref,setAnimation,open_screen)}}
                    key={indice} to={link.path}
                    className='btn btn-secondary btn-block text-white d-flex justify-content-start mt-4'>

                        <div style={{fontSize:'22px'}}><FontAwesomeIcon icon={link.icon} /></div>
                        <b style={{ marginLeft:'30%',fontSize:'18px' }}>{link.title}</b>

                    </Link>
                )
            }

            <br></br>
            <br></br>
            <br></br>

            <div style={{width:'100%',fontSize:'30px'}} className='d-flex justify-content-around'>

                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faWhatsapp} />
                <FontAwesomeIcon icon={faPhoneAlt} />

            </div>

        </Menu>
    )
});



export default Screen_menu_mobile;
