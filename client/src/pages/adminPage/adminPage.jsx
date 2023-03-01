import React from "react"
import { Navbar, OrdersOverview, UploadForm } from '../../components/index';

const AdminPage = () => {
    
    return (
        <div >
            <Navbar />
            <UploadForm />
            <OrdersOverview />
        </div>
    )
}

export default AdminPage