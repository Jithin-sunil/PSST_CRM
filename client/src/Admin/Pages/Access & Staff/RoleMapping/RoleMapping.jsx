
import React, { useState } from 'react';
import './RoleMapping.css';

const RoleMapping = () => {

    const [showForm, setShowForm] = useState(false);

    const users = [
        'Amal Mathew',
        'Priya Nair',
        'Sneha Raj'
    ];

    const roleList = [
        'Super Admin',
        'Faculty',
        'Counsellor'
    ];

    const screenGroups = [
        {
            title: 'Overview',
            screens: ['Dashboard']
        },
        {
            title: 'Academic Setup',
            screens: [
                'Academic Year',
                'Financial Year',
                'Universities',
                'Colleges',
                'Programmes',
                'Specializations'
            ]
        },
        {
            title: 'Course Catalog',
            screens: [
                'Category',
                'Our Technologies',
                'Fees'
            ]
        },
        {
            title: 'Access & Staff',
            screens: [
                'Users',
                'Roles',
                'User Role Mapping'
            ]
        },
        {
            title: 'Student Lifecycle',
            screens: [
                'Enquiries',
                'Admissions',
                'Batches',
                'Daily Log'
            ]
        },
        {
            title: 'Linked Screens',
            screens: [
                'Follow Up',
                'Assign Faculty',
                'Project Discussion',
                'Backlog',
                'Sprint Planning',
                'Daily Task'
            ]
        }
    ];

    const mappings = [
        {
            user: 'Amal Mathew',
            roles: 'Super Admin',
            screens: 'Dashboard, Academic Year, Financial Year, Universities, Colleges, Programmes, Specializations, Category, Our Technologies, Fees, Users, Roles, User Role Mapping, Enquiries, Admissions, Batches, Daily Log, Follow Up, Assign Faculty, Project Discussion, Backlog, Sprint Planning, Daily Task'
        },
        {
            user: 'Priya Nair',
            roles: 'Faculty',
            screens: 'Dashboard, Batches, Daily Log, Assign Faculty, Project Discussion, Backlog, Sprint Planning, Daily Task'
        }
    ];

    // Cancel form
    const handleCancel = () => {
        setShowForm(false);
    };

    return (
        <div className="mappingContainer">

            {/* Page Header */}
            <div className="mappingPageHeader">
                <h2>User Role Mapping</h2>
                <p>Manage records and associated workflows.</p>
            </div>

            {/* Add New Button */}
            {!showForm && (
                <div className="mappingTopActions">
                    <button className="mappingAddBtn" onClick={() => setShowForm(true)}>
                        + Add New
                    </button>
                </div>
            )}

            {/* Mapping Form */}
            {showForm && (
                <div className="mappingFormSection">

                    <p className="mappingRequiredNote">
                        Fields marked * are required.
                    </p>

                    <form onSubmit={(e) => e.preventDefault()}>

                        {/* Select User */}
                        <div className="mappingUserGroup">

                            <label>User</label>

                            <select defaultValue="">
                                <option value="" disabled>
                                    Choose User
                                </option>

                                {users.map((user, index) => (
                                    <option key={index} value={user}>
                                        {user}
                                    </option>
                                ))}
                            </select>

                        </div>

                        {/* Select Roles */}
                        <div className="mappingSectionGroup">

                            <label>Select Roles</label>

                            <div className="mappingRoleBox">

                                {roleList.map((role, index) => (
                                    <label className="mappingCheckbox" key={index}>
                                        <input type="checkbox" value={role} />
                                        <span>{role}</span>
                                    </label>
                                ))}

                            </div>

                        </div>

                        {/* Accessible Screens */}
                        <div className="mappingSectionGroup">

                            <label>Accessible Screens</label>

                            <div className="mappingScreensBox">

                                {screenGroups.map((group, index) => (
                                    <div className="mappingScreenGroup" key={index}>

                                        <h4>{group.title}</h4>

                                        <div className="mappingScreenGrid">

                                            {group.screens.map((screen, i) => (
                                                <label className="mappingCheckbox" key={i}>
                                                    <input type="checkbox" value={screen} />
                                                    <span>{screen}</span>
                                                </label>
                                            ))}

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* Form Buttons */}
                        <div className="mappingFormActions">

                            <button type="reset" className="mappingOutlineBtn">
                                Reset
                            </button>

                            <button type="button" className="mappingOutlineBtn" onClick={handleCancel}>
                                Cancel
                            </button>

                            <button type="submit" className="mappingSaveBtn">
                                Save
                            </button>

                        </div>

                    </form>

                </div>
            )}

            {/* Mapping List */}
            <div className="mappingListCard">

                <div className="mappingListHeader">

                    <h3>User Role Mapping List</h3>

                    <input type="text" className="mappingSearchInput" placeholder="Search user role mapping..." />

                </div>

                {/* Mapping Table */}
                <div className="mappingTableWrapper">

                    <table className="mappingTable">

                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>User</th>
                                <th>Selected Roles</th>
                                <th>Accessible Screens</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {mappings.map((mapping, index) => (
                                <tr key={index}>

                                    <td>{index + 1}</td>

                                    <td>{mapping.user}</td>

                                    <td>{mapping.roles}</td>

                                    <td className="mappingScreenText">
                                        {mapping.screens}
                                    </td>

                                    <td>
                                        <button className="mappingEditBtn">
                                            Edit
                                        </button>

                                        <button className="mappingDeleteBtn">
                                            Delete
                                        </button>
                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

                {/* Pagination */}
                <div className="mappingPagination">

                    <span>Showing 1–2 of 2 records</span>

                    <div>
                        <button disabled>Previous</button>
                        <span>Page 1 / 1</span>
                        <button disabled>Next</button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default RoleMapping;


