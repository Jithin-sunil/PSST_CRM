
import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">

            {/* Breadcrumb */}
            <div className="breadcrumb">
                <span>Workspace</span>
                <span>/</span>
                <span>Overview</span>
                <span>/</span>
                <strong>Dashboard</strong>
            </div>

            {/* Right Section */}
            <div className="navbar-right">

                {/* Profile */}
                <div className="navbar-profile">
                    AM
                </div>

            </div>

        </nav>
    )
}

export default Navbar
