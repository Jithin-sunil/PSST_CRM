import React, { useState } from 'react';
import './Fees.css';

const Fees = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="feesPage">
            {/* Header Section with Add Button on Same Level */}
            <div className="feesHeader">
                <div>
                    <h2>Fees</h2>
                    <p>Manage records and associated workflows.</p>
                </div>

                <button className="feesAddBtn" onClick={() => setShowForm(true)}>
                    + Add New
                </button>
            </div>

            {/* Form Section */}
            {showForm && (
                <div className="feesFormCard">
                    <p className="feesRequiredNote">Fields marked * are required.</p>

                    <div className="feesFormGrid">
                        <div className="feesFormGroup">
                            <label>Choose</label>
                            <select>
                                <option value="Project">Project</option>
                                <option value="Course">Course</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        <div className="feesFormGroup">
                            <label>Programme</label>
                            <select>
                                <option value="">Choose Programme</option>
                                <option value="BCA">BCA</option>
                                <option value="MCA">MCA</option>
                                <option value="BTech">B.Tech</option>
                            </select>
                        </div>

                        <div className="feesFormGroup">
                            <label>Technology</label>
                            <select>
                                <option value="">Choose Technology</option>
                                <option value="React">React</option>
                                <option value="Python">Python</option>
                                <option value="Java">Java</option>
                            </select>
                        </div>

                        <div className="feesFormGroup">
                            <label>Fees</label>
                            <input type="text" placeholder="Fees" />
                        </div>

                        <div className="feesFormGroup">
                            <label>Financial Year</label>
                            <select>
                                <option value="">Choose Financial Year</option>
                                <option value="2025-2026">2025-2026</option>
                                <option value="2026-2027">2026-2027</option>
                            </select>
                        </div>
                    </div>

                    <div className="feesFormActions">
                        <button className="feesOutlineBtn">Reset</button>
                        <button className="feesOutlineBtn" onClick={() => setShowForm(false)}>
                            Cancel
                        </button>
                        <button className="feesSaveBtn">Save</button>
                    </div>
                </div>
            )}

            {/* Listing Card Section */}
            <div className="feesListCard">
                <div className="feesListHeader">
                    <h3>Fees List</h3>

                    <input
                        type="text"
                        className="feesSearchInput"
                        placeholder="Search fees..."
                    />

                    <select className="feesFilterSelect">
                        <option value="">All Choose</option>
                        <option value="Project">Project</option>
                        <option value="Course">Course</option>
                    </select>

                    <select className="feesFilterSelect">
                        <option value="">All Technology</option>
                        <option value="React">React</option>
                        <option value="Python">Python</option>
                    </select>

                    <select className="feesFilterSelect">
                        <option value="">All Programme</option>
                        <option value="BCA">BCA</option>
                        <option value="MCA">MCA</option>
                    </select>
                </div>

                <table className="feesTable">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Type</th>
                            <th>Programme / Course</th>
                            <th>Technology</th>
                            <th>Financial Year</th>
                            <th>Fees</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Project</td>
                            <td>MCA</td>
                            <td>React</td>
                            <td>2026-2027</td>
                            <td>5000</td>
                            <td>
                                <button className="feesEditBtn">Edit</button>
                                <button className="feesDeleteBtn">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Fees;