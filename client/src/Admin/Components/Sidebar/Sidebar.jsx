
import React from 'react'
import './Sidebar.css'
import image from '../../../assets/psst_logo.png'

const Sidebar = () => {
    const menuSections = [
        {
            title: 'OVERVIEW',
            items: ['Dashboard']
        },
        {
            title: 'ACADEMIC SETUP',
            items: [
                'Academic Year',
                'Financial Year',
                'Universities',
                'Colleges',
                'Programmes',
                'Specializations'
            ]
        },
        {
            title: 'COURSE CATALOG',
            items: ['Category', 'Our Technologies', 'Fees']
        },
        {
            title: 'ACCESS & STAFF',
            items: ['Users', 'Roles']
        },
        {
            title: 'STUDENT LIFECYCLE',
            items: ['Enquiries', 'Admissions','Batches','Daily Log']
        }
    ]

    return (
        <aside className="sidebar">

            {/* Logo */}
            <div className="sidebar-logo">
                <img src={image} alt="" width={220} height={80} />
            </div>

            {/* Menu */}
            <div className="sidebar-menu">

                {menuSections.map((section, index) => (
                    <div className="menu-section" key={index}>

                        <div className="section-title">
                            <span>{section.title}</span>
                        </div>

                        {section.items.map((item) => (
                            <div key={item} className={`menu-item ${item === 'Dashboard' ? 'active' : ''}`}  >
                                <span className="menu-icon"></span>
                                <span>{item}</span>
                            </div>
                        ))}

                    </div>
                ))}

            </div>



        </aside>
    )
}

export default Sidebar
