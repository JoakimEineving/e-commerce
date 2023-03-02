import React from "react"
import { Navbar, Header, ProductCard, Footer } from '../../components/index';

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