
import React, { useState } from 'react';
import './Users.css';

const Users = () => {

    const [showForm, setShowForm] = useState(false);

    const [formData, setFormData] = useState({
        employeeId: '',
        fullName: '',
        email: '',
        mobile: ''
    });

    const users = [
        {
            employeeId: 'EMP0101',
            fullName: 'Amal Mathew',
            email: 'amal.mathew@progressive.edu',
            mobile: '9876501000'
        },
        {
            employeeId: 'EMP0102',
            fullName: 'Sneha Raj',
            email: 'sneha.raj@progressive.edu',
            mobile: '9876502000'
        }
    ]


    // Cancel form
    const handleCancel = () => {
        setShowForm(false);
    };


    return (
        <div className="usersContainer">

            {/* Page Header */}
            <div className="usersPageHeader">
                <h2>Users</h2>
                <p>Manage records and associated workflows.</p>
            </div>

            {/* Add New Button */}
            {!showForm && (
                <div className="usersTopActions">
                    <button className="usersAddBtn" onClick={() => setShowForm(true)}>
                        + Add New
                    </button>
                </div>
            )}

            {/* User Form */}
            {showForm && (
                <div className="usersFormSection">

                    <p className="usersRequiredNote">
                        Fields marked * are required.
                    </p>

                    <form >

                        <div className="usersFormGrid">

                            <div className="usersFormGroup">
                                <label>Employee ID *</label>
                                <input type="text" name="employeeId" placeholder="Employee ID" required />
                            </div>

                            <div className="usersFormGroup">
                                <label>Full Name *</label>
                                <input type="text" name="fullName" placeholder="Full Name" required />
                            </div>

                            <div className="usersFormGroup">
                                <label>Email Address *</label>
                                <input type="email" name="email" placeholder="Email Address" required />
                            </div>

                            <div className="usersFormGroup">
                                <label>Mobile Number *</label>
                                <input type="tel" name="mobile" placeholder="Mobile Number" required />
                            </div>

                        </div>

                        {/* Form Buttons */}
                        <div className="usersFormActions">

                            <button type="button" className="usersOutlineBtn">
                                Reset
                            </button>

                            <button type="button" className="usersOutlineBtn" onClick={handleCancel}>
                                Cancel
                            </button>

                            <button type="submit" className="usersSaveBtn">
                                Submit
                            </button>

                        </div>

                    </form>
                </div>
            )}

            {/* Users List */}
            <div className="usersListCard">

                <div className="usersListHeader">

                    <h3>Users List</h3>

                    <input type="text" className="usersSearchInput" placeholder="Search users..." />

                </div>

                {/* Users Table */}
                <div className="usersTableWrapper">

                    <table className="usersTable">

                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Employee ID</th>
                                <th>User</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.employeeId}</td>
                                    <td>{user.fullName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>

                                    <td>
                                        <button className="usersEditBtn">
                                            Edit
                                        </button>

                                        <button className="usersDeleteBtn">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
};

export default Users;
