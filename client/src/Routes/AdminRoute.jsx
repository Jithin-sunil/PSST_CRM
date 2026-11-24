import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Admin/Pages/Dashboard/Dashboard'

const AdminRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default AdminRoute