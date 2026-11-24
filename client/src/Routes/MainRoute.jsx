import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminRoute from './AdminRoute'
import AdminLayout from '../Admin/AdminLayout/AdminLayout'

const MainRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="admin/*" element={<AdminLayout />} />
            </Routes>
        </div>
    )
}

export default MainRoute