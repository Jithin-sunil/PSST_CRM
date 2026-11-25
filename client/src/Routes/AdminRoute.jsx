import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Admin/Pages/Dashboard/Dashboard'
import Category from '../Admin/Pages/Course_Catalog/Category/Category'
import Technology from '../Admin/Pages/Course_Catalog/Technology/Technology'
import Fees from '../Admin/Pages/Course_Catalog/Fees/Fees'
import AcademicYear from '../Admin/Pages/Academic_Setup/Academic_Year/AcademicYear'
import FinancialYear from '../Admin/Pages/Academic_Setup/Financial_Year/FinancialYear'
import Universities from '../Admin/Pages/Academic_Setup/Universities/Universities'
import Colleges from '../Admin/Pages/Academic_Setup/Colleges/Colleges'
import Programmes from '../Admin/Pages/Academic_Setup/Programmes/Programmes'
import Specializations from '../Admin/Pages/Academic_Setup/Specializations/Specializations'
import Users from '../Admin/Pages/Access & Staff/Users/Users'
import Roles from '../Admin/Pages/Access & Staff/Roles/Roles'
import RoleMapping from '../Admin/Pages/Access & Staff/RoleMapping/RoleMapping'

const AdminRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="dashboard" element={<Dashboard />} />

                {/* Academic setup */}
                <Route path="academicyear" element={<AcademicYear/>} />
                <Route path="financialyear" element={<FinancialYear/>} />
                <Route path="universities" element={<Universities/>} />
                <Route path="colleges" element={<Colleges/>} />
                <Route path="programmes" element={<Programmes/>} />
                <Route path="specializations" element={<Specializations/>} />


                {/* course catalog */}
                <Route path="category" element={<Category />} />
                <Route path="technology" element={<Technology />} />
                <Route path="fees" element={<Fees />} />

                <Route path="users" element={<Users />} />
                <Route path="roles" element={<Roles />} />
                <Route path="role-mapping" element={<RoleMapping />} />
            </Routes>
        </div>
    )
}

export default AdminRoute