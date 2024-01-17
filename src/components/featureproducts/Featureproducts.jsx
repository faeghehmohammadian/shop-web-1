import styled from "./Featureproducts.module.css"

function Featureproducts(props) {
    return (
        <div className={styled.productWrapper}>
            <div className={styled.content}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={props.imgsrc} alt=" " />
                </div>
                <div className={styled.contentLeft}>
                    <p style={{ fontWeight: 'bold' }}>{props.name}</p>
                    <p style={{ fontWeight: 'bold' }}>{props.price}$</p>
                </div>
            </div>
        </div>
    )
}
export default Featureproducts;