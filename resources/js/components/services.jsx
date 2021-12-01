import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {DataHome} from "../services/store";


const Services = styled.div`

    width:100%;

    .title-services{

        width:100%;
        height:60px;
        font-size:18px;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .container-services{

        width:100%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-wrap:wrap;

    }

    .service{

        width:330px;
        height:200px;
        display:flex;
        margin-top:50px;
        cursor:pointer;
    }

    .img{

        width:44%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-right:1%;
    }

    .content{

        margin-left:2%;
        width:53%;
        height:100%;
    }

    .title-service{

        height:40px;
        color:#e98008;
    }

    .body{
        width:100%;
        height:130px;
        overflow:hidden;
        color:gray;
    }

    @media(min-width:800px){

        .title-services{

            font-size:20px;
        }

        .container-services{

            padding-left:100px;
            padding-right:100px;
        }
        .service{

            width:345px;
            font-size:17px;
            margin:40px;
        }

    }
`;


const Services_render = ()=>{

    const [service, setService] = useState(null);

    useEffect(()=>{

       DataHome().services.response().then(response=>{

            setService(response[0]);
        });

        return ()=>{

            setService(null);
        }


    },[]);


    let redirect = (url) =>{

        window.location.href= url
    }

    return(

        <Services>

            <br></br>
            <hr></hr>

            <div className="title-services">

                <b>Servicios</b>

            </div>

            <div className="container-services">

                {
                    (service !== null) && service.map((data,index)=>{

                        while (index < 4) {

                            return(

                                <div onClick={()=>redirect(data.link)} key={index} className="service">

                                    <div className="img">
                                        <img style={{width:'100%',borderRadius:'40px'}} src={data.img}></img>
                                    </div>
                                    <div className="content">
                                        <div className="title-service d-flex justify-content-start align-items-center">
                                            <b>{data.title}</b>
                                        </div>
                                        <div className="body d-flex justify-content-center align-items-center">
                                            <b>
                                                <div dangerouslySetInnerHTML={{__html:data.content}}/>
                                            </b>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    })
                }

            </div>

        </Services>
    )
}

export default Services_render;
