import React,{useRef,useState, useEffect} from 'react';
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

import {DataHome} from "../services/store";
import { useDispatch } from 'react-redux';
import {  Productos, Paginacion, Filtros, Categoria, Busqueda } from '../database/index';
import { setIndexPagebtns } from './filtros-products';

const Filtro_llantas_element = styled.div`

    width:100%;

    select{

        width:90%;
        border:0px;
        background:white;
        color:gray;
        margin-top:15px;
        box-shadow:0px 0px 6px rgba(0,0,0,0.4);
        margin-left:5%;
        height:40px;
        border-radius:5px;
        margin-bottom:25px;
        font-weight:bold;
    }

    .incluir-marca > b{
        background: #0096d2;
        color:white;
        padding:7px ;
        border-radius:5px;
        font-size:16px ;
        margin-left: 80px;

    }

    .incluir-marca{

        margin-bottom:20px ;
    }

`;

const Filtro_llantas_tienda = ()=>{



    const Marca_llantas_element = useRef(null);
    const Ancho_llantas_element = useRef(null);
    const Perfil_llantas_element = useRef(null);

    const v2_Ancho_llantas_element = useRef(null);
    const v2_Perfil_llantas_element = useRef(null);

    const [cargandoMarca, setCargandoMarca] = useState('Marca de la llanta');
    const [cargandoAncho, setCargandoAncho] = useState('Ancho de la llanta');
    const [cargandoPerfil, setCargandoPerfil] = useState('Perfil de la llanta');
    const [cargandoRin, setCargandoRin] = useState('Numero de rin');

    const [marcaLlantas, setMarcaLlantas ] = useState(null);
    const[llantas_for_marca, set_llantasForMarca] = useState(null);
    const[llantas_marcaAncho, setLlantasMarcaAncho] = useState(null);
    const[llantas_marcaAnchoPerfil, setLlantasMarcaAnchoPerfil] = useState(null);

        /* search llantas sin marca */

        const [v2_anchoLlantas,v2_setAnchoLlantas] = useState(null);
        const [v2_perfilLlantas,v2_setPerfilLlantas] = useState(null);
        const [v2_rinLlantas,v2_setRinLlantas] = useState(null);


        /* mostar buscador con marca o sin marca */
        const [msg,setMsg] = useState('Incluir marca');
        const [conMarca, setConMarca] = useState('none');
        const [sinMarca, setSinMarca] = useState('block');

    let dispath = useDispatch();
    let redirect = useNavigate();


    const GetLlantasMarca = (value,dispatch)=>{

        setCargandoAncho('Cargando resultados...');
        setCargandoMarca(value);

        if(value !== 'Marca de la llanta' && value!== 'Cargando resultados...'){

            DataHome().search_llantas.llantas_for_marca(value).then(data=>{

                (data[0].length === 0) ? set_llantasForMarca(['Sin resultados'])  :set_llantasForMarca(data[0]);
                setCargandoAncho('Ancho de la llanta');

            })

        }else{

            setCargandoAncho('Ancho de la llanta');
        }

    }

    const GetLlantasMarcaAncho=(marca,ancho,dispatch)=>{

        setCargandoPerfil('Cargando resultados...');
        setCargandoAncho(ancho);


        if(ancho !== 'Ancho de la llanta' && ancho !== 'Sin resultados'  && ancho !== 'Cargando resultados...'){


            DataHome().search_llantas.llantas_for_marcaAncho(marca,ancho).then(data=>{

                (data[0].length === 0) ? setLlantasMarcaAncho(['Sin resultados'])  :setLlantasMarcaAncho(data[0]);
                setCargandoPerfil('Perfil de la llanta');


            })
        }else{

            setCargandoPerfil('Perfil de la llanta');

        }

    }

    const GetLlantasMarcaAnchoPerfil=(marca,ancho,perfil,dispatch)=>{

        setCargandoRin('Cargando resultados...');
        setCargandoPerfil(perfil)


        if(perfil !== 'Perfil de la llanta' && perfil !== 'Sin resultados'  && perfil !== 'Cargando resultados...'){

            DataHome().search_llantas.llantas_for_marcaAnchoPerfil(marca,ancho,perfil).then(data=>{

                (data[0].length === 0) ? setLlantasMarcaAnchoPerfil(['Sin resultados'])  :setLlantasMarcaAnchoPerfil(data[0]);
                setCargandoRin('Numero de rin');

            })

        }else{

            setCargandoRin('Numero de rin');

        }

    }

    const GoSearchLlantaRin = (marca,ancho,perfil,rin,categoria,dispatch,navegar) =>{

        if(rin !== 'Numero de rin'  && rin !== 'Sin resultados'  && rin !== 'Cargando resultados...' ){

            dispatch(Categoria({name:categoria,type:'llantas'}));
            dispatch(Filtros([
                {type:'Marca ',value:marca},
                {type:'Ancho ',value:ancho},
                {type:'Perfil  ',value:perfil},
                {type:'N?? rin ',value:rin}

            ]));

            setCargandoRin(rin);
            dispatch(Productos(null));
            DataHome().search_llantas.llantas_for_marcaAnchoPerfilRin(marca,ancho,perfil,rin).then(data=>{

                console.log('from filtros-llantas-tienda.jsx ',data);
                dispatch(Productos(data[0]));
                dispatch(Busqueda(true));
                $('html, body').animate({

                    scrollTop: $('#scrollhere2').offset().top
                },1000)



            })
            setIndexPagebtns();

            $('.filtros-mobile').css('animation-name','close');
            setTimeout(()=>{
                $('.filtros-mobile').css('display','none');
            },600);

            setCargandoMarca('Marca de la llanta');
            setCargandoAncho('Ancho de la llanta');
            setCargandoPerfil('Perfil de la llanta');
            setCargandoRin('Numero de rin')

            navegar('/productos/busqueda');

        }



    }



    /* Metodos search llantas sin marca */
    const V2GetLlantasAnchoPerfil = (value)=>{

        setCargandoPerfil('Cargando resultados...');
        setCargandoAncho(value);

        if( value !== 'Ancho de la llanta' && value !== 'Cargando resultados...'){

            DataHome().search_v2.llantas_ancho_perfil(value).then(data=>{

                setCargandoPerfil('Perfil de la llanta');
                v2_setPerfilLlantas(data[0]);

            })
        }
    }

    const V2GetLlantasAnchoPerfilRin = (ancho,perfil)=>{


        setCargandoRin('Cargando resultados...');
        setCargandoPerfil(perfil);

        if( perfil !== 'Cargando resultados...' && perfil !== 'Perfil de la llanta' && perfil !== 'Sin resultados'){

            DataHome().search_v2.llantas_ancho_perfil_rin(ancho,perfil).then(response=>{

                setCargandoRin('Numero de rin');
                v2_setRinLlantas(response[0]);
            })
        }


    }

    const V2GoSearchLlantasRin = (ancho, perfil, rin, categoria, dispatch, navegar)=>{

        if(rin !== 'Numero de rin'  && rin !== 'Sin resultados'  && rin !== 'Cargando resultados...' ){

            dispatch(Categoria({name:categoria,type:'llantas v2'}));
            dispatch(Filtros([
                {type:'Marca ',value:'--'},
                {type:'Ancho ',value:ancho},
                {type:'Perfil ',value:perfil},
                {type:'N?? rin ',value:rin}

            ]));


            setCargandoRin(rin);
            dispatch(Productos(null));

            DataHome().search_v2.llantas_ancho_perfil_rin_resultado(ancho,perfil,rin).then(data=>{

                console.log('from filtros-llantas-tienda.jsx ',data);
                dispatch(Productos(data[0]));
                dispatch(Busqueda(true));
                $('html, body').animate({

                    scrollTop: $('#scrollhere2').offset().top
                },1000)



            })
            setIndexPagebtns();

            $('.filtros-mobile').css('animation-name','close');
            setTimeout(()=>{
                $('.filtros-mobile').css('display','none');
            },600);

            setCargandoMarca('Marca de la llanta');
            setCargandoAncho('Ancho de la llanta');
            setCargandoPerfil('Perfil de la llanta');
            setCargandoRin('Numero de rin')

            localStorage.setItem('data_busqueda',`${ancho}x${perfil}x${rin}`);
            navegar('/productos/busqueda');
        }
    }

    const CambiarBuscador = ()=>{

        if(msg === 'Incluir marca'){

            setMsg('Quitar marca');
            setConMarca('block');
            setSinMarca('none');

        }else{

            setMsg('Incluir marca');
            setConMarca('none');
            setSinMarca('block');

        }

    }


    useEffect(()=>{

        setCargandoMarca('Cargando resultados...');
        DataHome().search_llantas.response().then(data=>{

            setMarcaLlantas(data[0]);
            setCargandoMarca('Marca de la llanta');

        });

        setCargandoAncho('Cargando resultados...');
        DataHome().search_v2.llantas_ancho().then(data=>{

            setCargandoAncho('Ancho de la llanta')
            v2_setAnchoLlantas(data[0]);
        })


        return ()=>{
            setMarcaLlantas(null);
            setCargandoMarca('Marca de la llanta');

            setCargandoAncho('Ancho de la llanta')
            v2_setAnchoLlantas(null);
        }


    },[])




    return(

        <Filtro_llantas_element>

            <div style={{'display':conMarca}} className='llantas-inputs'>

                <div style={{'cursor':'pointer'}} className="incluir-marca" onClick={()=>CambiarBuscador()}>
                    <b>{msg}</b>
                </div>
                 <select  value={cargandoMarca} ref={Marca_llantas_element}   onChange={(e)=>GetLlantasMarca(e.target.value,dispath)}>

                <option value="Marca de la llanta">Marca de la llanta</option>
                {
                    (marcaLlantas === null) ?   <option value="Cargando resultados...">Cargando resultados...</option> :  marcaLlantas.map((marca,index)=><option value={marca.nombre} key={index}>{marca.nombre}</option>)
                }

            </select>


            <select value={cargandoAncho} ref={Ancho_llantas_element} onChange={(e)=>GetLlantasMarcaAncho(Marca_llantas_element.current.value,e.target.value,dispath)}>
                <option value="Ancho de la llanta">Ancho de la llanta</option>
                {
                    (llantas_for_marca === null) ?   <option value="Cargando resultados...">Cargando resultados...</option> : llantas_for_marca.map((ancho_llanta,index)=><option value={ancho_llanta} key={index}>{ancho_llanta}</option>)
                }

            </select>


            <select  value={cargandoPerfil}  ref={Perfil_llantas_element} onChange={(e)=>GetLlantasMarcaAnchoPerfil(Marca_llantas_element.current.value,Ancho_llantas_element.current.value,e.target.value,dispath)}>
                <option value="Perfil de la llanta" >Perfil de la llanta</option>
                {
                    (llantas_marcaAncho === null) ?   <option value="Cargando resultados...">Cargando resultados...</option> : llantas_marcaAncho.map((perfil_llanta,index)=><option value={perfil_llanta} key={index}>{perfil_llanta}</option>)
                }
            </select>


            <select value={cargandoRin} onChange={(e)=>GoSearchLlantaRin(Marca_llantas_element.current.value,Ancho_llantas_element.current.value,Perfil_llantas_element.current.value,e.target.value,'Busqueda',dispath,redirect)}>
                <option value="Numero de rin" >Numero de rin</option>
                {
                    (llantas_marcaAnchoPerfil === null) ?   <option value="Cargando resultados...">Cargando resultados...</option> : llantas_marcaAnchoPerfil.map((numero_rin,index)=><option value={numero_rin} key={index}>{numero_rin}</option>)
                }

            </select>

            </div>

             {/* buscador ancjo x perfil x rin */}
            <div style={{'display':sinMarca}} className='llantas-inputs'>
            <div style={{'cursor':'pointer'}} className="incluir-marca" onClick={()=>CambiarBuscador()}>
                <b>{msg}</b>
            </div>

            <select value={cargandoAncho} ref={v2_Ancho_llantas_element}
                onChange={(e)=>V2GetLlantasAnchoPerfil(e.target.value)}
            >
                <option value="Ancho de la llanta">Ancho de la llanta</option>
                {
                    (v2_anchoLlantas === null) ?   <option value="Cargando resultados...">Cargando resultados...</option> :  v2_anchoLlantas.map((ancho,index)=><option value={ancho} key={index}>{ancho}</option>)
                }
            </select>

            <select  value={cargandoPerfil}  ref={v2_Perfil_llantas_element}
                onChange={(e)=>V2GetLlantasAnchoPerfilRin(v2_Ancho_llantas_element.current.value,e.target.value)}
            >
                <option value="Perfil de la llanta" >Perfil de la llanta</option>
                {
                    (v2_perfilLlantas === null) ?   <option value="Cargando resultados...">Cargando resultados...</option> :  v2_perfilLlantas.map((perfil,index)=><option value={perfil} key={index}>{perfil}</option>)
                }
            </select>

            <select value={cargandoRin}
                onChange={(e)=>V2GoSearchLlantasRin(v2_Ancho_llantas_element.current.value,v2_Perfil_llantas_element.current.value,e.target.value,'Busqueda',dispath,redirect)}
            >
                <option value="Numero de rin" >Numero de rin</option>
                {
                    (v2_rinLlantas === null) ?   <option value="Cargando resultados...">Cargando resultados...</option> :  v2_rinLlantas.map((rin,index)=><option value={rin} key={index}>{rin}</option>)
                }
            </select>

            </div>

        </Filtro_llantas_element>
    )
}
export default Filtro_llantas_tienda;
