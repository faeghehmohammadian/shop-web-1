import React from "react";
import styled from "./productdisplay.module.css"
const ProductDisplay = (props) =>{
    return(
        <div className="productdisplay">
            <div className="productdisplay-left"> 
                <img src={props.image}></img>
            </div>
            <div className="productdisplay-right"> 

            </div>
        </div>
    )
}
export default ProductDisplay