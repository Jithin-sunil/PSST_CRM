import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Admin/Pages/Dashboard/Dashboard'
import Users from '../Admin/Pages/Access & Staff/Users/Users'
import Roles from '../Admin/Pages/Access & Staff/Roles/Roles'
import RoleMapping from '../Admin/Pages/Access & Staff/RoleMapping/RoleMapping'

const AdminRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="users" element={<Users />} />
                <Route path="roles" element={<Roles />} />
                <Route path="role-mapping" element={<RoleMapping />} />
            </Routes>
        </div>
    )
}

export default AdminRoute