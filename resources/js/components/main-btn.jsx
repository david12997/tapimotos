import React from 'react';
import styled from 'styled-components';

const Btn_category = styled.div`

    width:360px;
    height:100px;
    background:${prop=>prop.color};
    border-radius:10px;
    display:flex;
    margin-top:25px;
    cursor:pointer;
    box-shadow:3px 3px 8px rgba(0,0,0,0.3);
    overflow:hidden ;

    .textos{

        width:60%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;

    }

    .img{

        width:40%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    @media(min-width:800px){

        margin-bottom:18px;
    }

`;


const Main_btn_category = ({name,discount,img,color}) => {

    return (
        <Btn_category  color={color}>

            <div className='textos'>
                <div>
                    <b style={{display:'block',fontSize:'18px',color:'white'}}>{name}</b>

                    <b style={{display:'block',marginLeft:'40px'}}>{discount}</b>
                </div>

            </div>

            <div className='img'>
                <img style={{width:'70%'}} src={img}></img>
            </div>

        </Btn_category>
    );
}

export default Main_btn_category;
