import React, { useState } from 'react';
import './Specializations.css';

const Specializations = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="specPage">
            {/* Header Section with Add Button on Same Level */}
            <div className="specHeader">
                <div>
                    <h2>Specializations</h2>
                    <p>Manage records and associated workflows.</p>
                </div>

                <button
                    type="button"
                    className="specAddBtn"
                    onClick={() => setShowForm(true)}
                >
                    + Add New
                </button>
            </div>

            {/* Form Section */}
            {showForm && (
                <div className="specFormCard">
                    <p className="specRequiredNote">Fields marked * are required.</p>

                    <div className="specFormGrid">
                        <div className="specFormGroup">
                            <label>Programme</label>
                            <select defaultValue="">
                                <option value="">Choose Programme</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="B.Sc">B.Sc</option>
                                <option value="BCA">BCA</option>
                            </select>
                        </div>

                        <div className="specFormGroup">
                            <label>Specialization Name *</label>
                            <input type="text" placeholder="Specialization Name" />
                        </div>
                    </div>

                    <div className="specFormActions">
                        <button type="button" className="specOutlineBtn">
                            Reset
                        </button>
                        <button type="button" className="specOutlineBtn" onClick={() => setShowForm(false)} >
                            Cancel
                        </button>
                        <button type="button" className="specSaveBtn">
                            Save
                        </button>
                    </div>
                </div>
            )}

            {/* Listing Card Section */}
            <div className="specListCard">
                <div className="specListHeader">
                    <h3>Specializations List</h3>

                    <input type="text" className="specSearchInput" placeholder="Search specializations..." />

                    <select className="specFilterSelect" defaultValue="">
                        <option value="">All Programme</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="B.Sc">B.Sc</option>
                        <option value="BCA">BCA</option>
                    </select>
                </div>

                <table className="specTable">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Programme</th>
                            <th>Specialization</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>B.Tech</td>
                            <td>Computer Science</td>
                            <td>
                                <button type="button" className="specEditBtn">
                                    Edit
                                </button>
                                <button type="button" className="specDeleteBtn">
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>B.Sc</td>
                            <td>Information Technology</td>
                            <td>
                                <button type="button" className="specEditBtn">
                                    Edit
                                </button>
                                <button type="button" className="specDeleteBtn">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Specializations;