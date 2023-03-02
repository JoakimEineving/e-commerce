import React from "react"
import { Navbar, OrdersOverview, UploadForm, ProductOverview } from '../../components/index';

const AdminPage = () => {
    
    return (
        <div >
            <Navbar />
            <UploadForm />
            <ProductOverview />
            <OrdersOverview />
        </div>
    )
}

export default AdminPage