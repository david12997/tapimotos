import React from "react";


const Spinner = ({width = "250px",height = " 250px",size = "20px"})=>{

    return(
        <div className="d-flex justify-content-center align-items-center" style={{width:"100%"}}>
            <div className="d-flex justify-content-center align-items-center" style={{width:"100%",padding:"10px",paddingTop:'30px'}}>
                <div style={{width:width,height:height,fontSize:size}} className=" d-flex justify-content-center align-center spinner-border text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Spinner;
