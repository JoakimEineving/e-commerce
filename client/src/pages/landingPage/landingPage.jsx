import React from "react"
import Navbar from '../../components/navbar/navbar';
import ProductCard from '../../components/productCard/productCard';
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const LandingPage = () => {
    
    return (
        <div className="min-h-screen">
            <Navbar />
            <Header />
            <ProductCard />
            <Footer />
        </div>
    )
}

export default LandingPage