import React from "react"
import Navbar from '../../components/navbar/navbar';
import  OrdersOverview from '../../components/admin/ordersOverview';
import UploadForm from '../../components/admin/uploadForm';

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