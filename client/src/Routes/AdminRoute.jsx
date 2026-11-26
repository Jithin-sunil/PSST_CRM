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
import Enquiries from '../Admin/Pages/StudentLifecycle/Enquiries/Enquiries'
import Admissions from '../Admin/Pages/StudentLifecycle/Admissions/Admissions'
import Batches from '../Admin/Pages/StudentLifecycle/Batches/Batches'
import DailyLog from '../Admin/Pages/StudentLifecycle/DailyLog/DailyLog'
import AssignFaculty from '../Admin/Pages/Academic_Setup/AssignFaculty/AssignFaculty'
import ProjectDiscussion from '../Admin/Pages/StudentLifecycle/ProjectDiscussion/ProjectDiscussion'
import Backlog from '../Admin/Pages/StudentLifecycle/Backlog/Backlog'
import Sprint from '../Admin/Pages/StudentLifecycle/Sprint/Sprint'
import DailyTask from '../Admin/Pages/StudentLifecycle/DailyTask/DailyTask'

const AdminRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="dashboard" element={<Dashboard />} />
z
                {/* access & staff*/}
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
                
                {/* access & staff */}
                <Route path="users" element={<Users />} />
                <Route path="roles" element={<Roles />} />
                <Route path="rolemapping" element={<RoleMapping/>} />

                {/* student lifecycle */}
                <Route path="enquiries" element={<Enquiries/>} />
                <Route path="admissions" element={<Admissions/>} />
                <Route path="batches" element={<Batches/>} />
                <Route path="dailylog" element={<DailyLog/>} />

                {/* batch */}
                <Route path="assignFaculty" element={<AssignFaculty/>} />
                <Route path="projectdiscussion" element={<ProjectDiscussion/>} />
                        
                {/* Project Discussion */}
                <Route path="backlog" element={<Backlog/>} />
                <Route path="sprint" element={<Sprint/>} />
                <Route path="dailytask" element={<DailyTask/>} />
                

            </Routes>
        </div>
    )
}

export default AdminRoute