import React from "react";
import styled from "styled-components";

const Btn1 = styled.div`

    width:${prop=>prop.width};
    height:${prop=>prop.height};

    display:flex;
    justify-content:center;
    align-items:center;

    .btn1{

        width:99%;
        height:89%;
        boder-radius:10px;
        background:${prop=>prop.color};
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:8px;
        color:white;
        box-shadow:2px 2px 6px rgba(0,0,0,0.4);
        font-size:17px;
        cursor:pointer;
    }

    .btn1:hover{

        width:100%;
        height:91%;
    }

    .btn1:active{
        width:98%;
        height:88%;
    }


`;

const Btn1_render = ({width,height, title,color})=>{

    return(

        <Btn1 color={color} width={width} height={height}>

            <div className="btn1">
                <b>{title}</b>
            </div>

        </Btn1>
    )

}


export default Btn1_render;
