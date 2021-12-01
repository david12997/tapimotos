import React,{useRef,useState, useEffect} from 'react';
import styled from "styled-components";




import {useNavigate} from 'react-router-dom';

import {DataHome} from "../services/store";
import { useDispatch } from 'react-redux';
import {  Productos, Paginacion, Filtros, Categoria, Busqueda } from '../database/index';

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

`;

const Filtro_llantas_tienda = ()=>{



    const Marca_llantas_element = useRef(null);
    const Ancho_llantas_element = useRef(null);
    const Perfil_llantas_element = useRef(null);

    const [cargandoMarca, setCargandoMarca] = useState('Marca de la llanta');
    const [cargandoAncho, setCargandoAncho] = useState('Ancho de la llanta');
    const [cargandoPerfil, setCargandoPerfil] = useState('Perfil de la llanta');
    const [cargandoRin, setCargandoRin] = useState('Numero de rin');

    const [marcaLlantas, setMarcaLlantas ] = useState(null);
    const[llantas_for_marca, set_llantasForMarca] = useState(null);
    const[llantas_marcaAncho, setLlantasMarcaAncho] = useState(null);
    const[llantas_marcaAnchoPerfil, setLlantasMarcaAnchoPerfil] = useState(null);

    let dispath = useDispatch();
    let redirect = useNavigate();


    const GetLlantasMarca = (value)=>{

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




    const GetLlantasMarcaAncho=(marca,ancho)=>{

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


    const GetLlantasMarcaAnchoPerfil=(marca,ancho,perfil)=>{

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

            dispatch(Categoria({name:categoria}));
            dispatch(Filtros({marca:['Marca',marca],ancho:['Ancho',ancho],perfil:['Perfil',perfil],rin:['N° rin',rin]}));

            setCargandoRin(rin);
            DataHome().search_llantas.llantas_for_marcaAnchoPerfilRin(marca,ancho,perfil,rin).then(data=>{

                console.log(data);
                dispatch(Productos(data[0]));
                dispatch(Busqueda(true))

                navegar('/productos/busqueda')

            })

        }



    }


    useEffect(()=>{

        setCargandoMarca('Cargando resultados...');
        DataHome().search_llantas.response().then(data=>{

            setMarcaLlantas(data[0]);
            setCargandoMarca('Marca de la llanta');

        });

    },[])




    return(

        <Filtro_llantas_element>
            <select  value={cargandoMarca} ref={Marca_llantas_element}   onChange={(e)=>GetLlantasMarca(e.target.value)}>

                <option value="Marca de la llanta">Marca de la llanta</option>
                {
                    (marcaLlantas === null) ?   <option value="Cargando resultados...">Cargando resultados...</option> :  marcaLlantas.map((marca,index)=><option value={marca.nombre} key={index}>{marca.nombre}</option>)
                }

            </select>


            <select value={cargandoAncho} ref={Ancho_llantas_element} onChange={(e)=>GetLlantasMarcaAncho(Marca_llantas_element.current.value,e.target.value)}>
                <option value="Ancho de la llanta">Ancho de la llanta</option>
                {
                    (llantas_for_marca === null) ?   <option value="Cargando resultados...">Cargando resultados...</option> : llantas_for_marca.map((ancho_llanta,index)=><option value={ancho_llanta} key={index}>{ancho_llanta}</option>)
                }

            </select>


            <select  value={cargandoPerfil}  ref={Perfil_llantas_element} onChange={(e)=>GetLlantasMarcaAnchoPerfil(Marca_llantas_element.current.value,Ancho_llantas_element.current.value,e.target.value)}>
                <option value="Perfil de la llanta" >Perfil de la llanta</option>
                {
                    (llantas_marcaAncho === null) ?   <option value="Cargando resultados...">Cargando resultados...</option> : llantas_marcaAncho.map((perfil_llanta,index)=><option value={perfil_llanta} key={index}>{perfil_llanta}</option>)
                }
            </select>


            <select value={cargandoRin} onChange={(e)=>GoSearchLlantaRin(Marca_llantas_element.current.value,Ancho_llantas_element.current.value,Perfil_llantas_element.current.value,e.target.value,'Buscar',dispath,redirect)}>
                <option value="Numero de rin" >Numero de rin</option>
                {
                    (llantas_marcaAnchoPerfil === null) ?   <option value="Cargando resultados...">Cargando resultados...</option> : llantas_marcaAnchoPerfil.map((numero_rin,index)=><option value={numero_rin} key={index}>{numero_rin}</option>)
                }

            </select>
        </Filtro_llantas_element>
    )
}
export default Filtro_llantas_tienda;
