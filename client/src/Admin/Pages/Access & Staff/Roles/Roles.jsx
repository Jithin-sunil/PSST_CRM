
import React, { useState } from 'react';
import './Roles.css';

const Roles = () => {

    const [showForm, setShowForm] = useState(false);

    const roles = [
        { roleName: 'Super Admin' },
        { roleName: 'Faculty' },
        { roleName: 'Counsellor' }
    ];

    // Cancel form
    const handleCancel = () => {
        setShowForm(false);
    };

    return (
        <div className="rolesContainer">

            {/* Page Header */}
            <div className="rolesPageHeader">
                <h2>Roles</h2>
                <p>Manage records and associated workflows.</p>
            </div>

            {/* Add New Button - Above the List */}
            {!showForm && (
                <div className="rolesTopActions">
                    <button className="rolesAddBtn" onClick={() => setShowForm(true)}>
                        + Add New
                    </button>
                </div>
            )}

            {/* Role Form */}
            {showForm && (
                <div className="rolesFormSection">

                    <p className="rolesRequiredNote">
                        Fields marked * are required.
                    </p>

                    <form>

                        <div className="rolesFormGroup">
                            <label>Role Name *</label>

                            <input type="text" name="roleName" placeholder="Role Name" required />
                        </div>

                        {/* Form Buttons */}
                        <div className="rolesFormActions">

                            <button type="reset" className="rolesOutlineBtn">
                                Reset
                            </button>

                            <button type="button" className="rolesOutlineBtn" onClick={handleCancel}>
                                Cancel
                            </button>

                            <button type="submit" className="rolesSaveBtn">
                                Save
                            </button>

                        </div>

                    </form>
                </div>
            )}

            {/* Roles List */}
            <div className="rolesListCard">

                <div className="rolesListHeader">

                    <h3>Roles List</h3>

                    <input type="text" className="rolesSearchInput" placeholder="Search roles..." />

                </div>

                {/* Roles Table */}
                <div className="rolesTableWrapper">

                    <table className="rolesTable">

                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {roles.map((role, index) => (
                                <tr key={index}>

                                    <td>{index + 1}</td>

                                    <td>{role.roleName}</td>

                                    <td>
                                        <button className="rolesEditBtn">
                                            Edit
                                        </button>

                                        <button className="rolesDeleteBtn">
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

export default Roles;
