import Featureproducts from "../../components/featureproducts/Featureproducts";
import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/product/Product";
import styled from "./home.module.css"
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [products,setProducts]=useState([])
    const [priceRange, setPriceRange] = useState({ min: 299, max: 1000 });
    useEffect(()=>{
        axios.get("http://localhost:8000/data").then((res)=>{
            setProducts(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[]);
    const handleFilter = () => {
        // Perform filtering based on the price range (priceRange)
        // You can modify this logic based on your requirements
        const filteredProducts = products.filter((product) => {
            const productPrice = parseFloat(product.price.replace('$', ''));
            return productPrice >= priceRange.min && productPrice <= priceRange.max;
        });

        // Set the filtered products in the state
        setProducts(filteredProducts);
    };
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
                        <input type="range" id="volume" name="volume" min={priceRange.min} max={priceRange.max} 
                                value={priceRange.max}
                                onChange={(e) => setPriceRange(e.target.value)}/>
                        <div className={styled.rengeNum}>
                            <div>{priceRange.min}$</div>
                            <div>{priceRange.max}$</div>
                        </div>
                        <button onClick={handleFilter} style={{padding:"5px",borderStyle:"none",color:"white" ,width:'70px', marginTop:"20px" ,backgroundColor:"hsl(240, 100%, 75%)"}}>FILTER</button>
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