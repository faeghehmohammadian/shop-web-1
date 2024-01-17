import Featureproducts from "../../components/featureproducts/Featureproducts";
import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/product/Product";
import styled from "./home.module.css"
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/data").then((res)=>{
            setProducts(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[]);
    return (
        <div className="container">
            <Navbar />
            <div className={styled.container}>
                <div className={styled.productContainer}>
                    <div className={styled.makeFlexCol}>
                        <div style={{ fontSize: '30px', fontWeight: 'bold', float: 'left' }}>Shop</div>
                        <div className={styled.makeFlexRow}>
                            <div>SHOWING 1-12 OF 19 RESULTS</div>
                            <select style={{ borderStyle: 'none', width: '150px' }}>
                                <option value="">DEFULD SORTING</option>
                            </select>
                        </div>

                    </div>
                    <div className={styled.productsList}>
                        {
                            products.map((product)=>(
                                <Product imgsrc={product.image} name={product.name} price={product.price}/>
                            ))
                        }
                    </div>
                </div>
                <div className={styled.sideBar}>
                    <div className={styled.sideBarRenge}>
                        <div style={{marginBottom:'15px', fontWeight:'bold'}}>Fiter by price</div>
                        <input type="range" id="volume" name="volume" min="299$" max="1000$" />
                        <div className={styled.rengeNum}>
                            <div>299$</div>
                            <div>1000$</div>
                        </div>
                        <button style={{padding:"5px",borderStyle:"none",color:"white" ,width:'70px', marginTop:"20px" ,backgroundColor:"hsl(240, 100%, 75%)"}}>FILTER</button>
                    </div>
                    <div className={styled.featuredProducts}>
                        <div style={{marginBottom:'15px', fontWeight:'bold'}}>Featured Products</div>
                        {
                            products.map((product)=>(
                                <Featureproducts imgsrc={product.image} name={product.name} price={product.price} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Home;