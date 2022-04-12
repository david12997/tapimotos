import React, {  useEffect, useState} from "react";
import styled from "styled-components";
import {DataHome} from "../services/store";

const Creditos = styled.div`

    width:100%;


    .container-articles{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
    }


    .title-main{

        width:100%;
        height:60px;
        font-size:18px;
    }
    .article{

        width:300px;
        height:550px;
        display:block;
        margin-top:50px;
    }

    img{

        height:298px;
        box-shadow:0px 0px 10px rgba(0,0,0,0.25);
        border-radius:30px;
    }

    .title-article{

        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        height:60px;
        color:#e98008;
    }

    .content-article{

        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        color:gray;
        height:150px;
        overflow:hidden;

    }

    .know-more{

        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        color:#0096d2;
        height:22px;
        text-decoration:none;
    }

    @media(min-width:800px){

        .article{

            margin:30px;
        }

        .title-main{

            font-size:20px;
        }

        .title-article{
            font-size:17px;
        }

        .content-article{

            font-size:17px;
        }

        .know-more{
            font-size:17px;
        }
    }
`;


const Creditos_render =  ()=>{

    const [credits, setCredits] = useState(null);

    useEffect(()=>{

        DataHome().credits.response().then(response=>{


          setCredits(response[0]);


        });

        return()=>{

            setCredits(null)
        }

    },[])

    return(

        <Creditos>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>

            <div className="title-main d-flex justify-content-center align-items-center">
                <b>Financiación y Creditos</b>
            </div>

            <div className="container-articles">

                {
                    (credits!==null) && credits.map((credit,index)=>{

                        while(index < 3){//this line print just three credits article

                            return(
                                <div className="article" key={index}>
                                    <img src={credit.img}></img>
                                    <b className="title-article">{credit.title}</b>
                                    <b className="content-article">
                                        <div dangerouslySetInnerHTML={{ __html:credit.content}} />
                                    </b>
                                    <a href={credit.link} className="know-more"><b>Saber más</b></a>
                                </div>
                            )
                        }

                    })
                }


            </div>

        </Creditos>
    )
}


export default Creditos_render;
