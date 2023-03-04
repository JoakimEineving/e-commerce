import React from "react"
import { Navbar, OrdersOverview, UploadForm, ProductOverview, UserOverview } from '../../components/index';

const AdminPage = () => {
    
    return (
        <div >
            <Navbar />
            <UploadForm />
            <ProductOverview />
            <OrdersOverview />
            <UserOverview />
        </div>
    )
}

export default AdminPage