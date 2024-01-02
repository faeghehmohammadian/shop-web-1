import styled from "./product.module.css"
import { FaRegHeart } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

function Product(props) {
    return (
        <div className={styled.productWrapper}>
            <div className={styled.content}>
                <div style={{ display: "flex", justifyContent: "end" }}>
                    <FaRegHeart />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={props.imgsrc} alt=" " />
                </div>
                <p style={{fontWeight:'bold'}}>New</p>
                <p style={{fontWeight:'bold'}}>{props.name}</p>
                <div style={{ display: "flex", justifyContent: "end" }}>
                    <li className={styled.hasCirle} >
                        <FontAwesomeIcon icon={faBagShopping} />
                    </li>
                </div>
                <p>299$</p>
            </div>
        </div>
    )
}
export default Product;