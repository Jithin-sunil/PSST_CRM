
import React from 'react'
import './Sidebar.css'
import image from '../../../assets/psst_logo.png'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

    const location = useLocation()

    const menuSections = [
        {
            title: 'OVERVIEW',
            items: [
                { name: 'Dashboard', path: '/admin/dashboard' }
            ]
        },
        {
            title: 'ACADEMIC SETUP',
            items: [
                { name: 'Academic Year', path: '/admin/academic-year' },
                { name: 'Financial Year', path: '/admin/financial-year' },
                { name: 'Universities', path: '/admin/universities' },
                { name: 'Colleges', path: '/admin/colleges' },
                { name: 'Programmes', path: '/admin/programmes' },
                { name: 'Specializations', path: '/admin/specializations' }
            ]
        },
        {
            title: 'COURSE CATALOG',
            items: [
                { name: 'Category', path: '/admin/category' },
                { name: 'Our Technologies', path: '/admin/technologies' },
                { name: 'Fees', path: '/admin/fees' }
            ]
        },
        {
            title: 'ACCESS & STAFF',
            items: [
                { name: 'Users', path: '/admin/users' },
                { name: 'Roles', path: '/admin/roles' }
            ]
        },
        {
            title: 'STUDENT LIFECYCLE',
            items: [
                { name: 'Enquiries', path: '/admin/enquiries' },
                { name: 'Admissions', path: '/admin/admissions' },
                { name: 'Batches', path: '/admin/batches' },
                { name: 'Daily Log', path: '/admin/daily-log' }
            ]
        }
    ]

    return (
        <aside className="sidebar">

            {/* Logo */}
            <div className="sidebar-logo">
                <img src={image} alt="" width={220} height={80} />
            </div>

            {/* Sidebar Menu */}
            <div className="sidebar-menu">

                {menuSections.map((section, index) => (
                    <div className="menu-section" key={index}>

                        <div className="section-title">
                            <span>{section.title}</span>
                        </div>

                        {section.items.map((item) => (
                            <Link to={item.path} key={item.path} className={`menu-item ${location.pathname === item.path ? 'active' : ''}`}>
                                <span className="menu-icon"></span>
                                <span>{item.name}</span>
                            </Link>
                        ))}

                    </div>
                ))}

            </div>




        </aside>
    )
}

export default Sidebar
