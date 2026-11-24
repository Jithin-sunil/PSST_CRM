
import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar'
import './AdminLayout.css'
import AdminRoute from '../../Routes/AdminRoute'

const AdminLayout = ({ children }) => {
    return (
        <div className="admin-layout">

            <Sidebar />

            <div className="admin-main">
                <Navbar />

                <main className="admin-content">
                    <AdminRoute />
                </main>
            </div>

        </div>
    )
}

export default AdminLayout
