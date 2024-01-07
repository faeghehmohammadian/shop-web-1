import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styled from "./aboutus.module.css"

function AboutUS() {
    return (
        <div className={styled.container}>
            <Navbar />
            About Us
            <Footer/>
        </div>
    )
}
export default AboutUS;