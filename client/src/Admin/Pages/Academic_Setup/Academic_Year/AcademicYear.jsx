import React, { useState } from 'react';
import './AcademicYear.css';

const AcademicYear = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="ayPage">
            {/* Header Section with Add Button on Same Level */}
            <div className="ayHeader">
                <div>
                    <h2>Academic Year</h2>
                    <p>Manage records and associated workflows.</p>
                </div>

                <button className="ayAddBtn" onClick={() => setShowForm(true)}>
                    + Add New
                </button>
            </div>

            {/* Form Section */}
            {showForm && (
                <div className="ayFormCard">
                    <p className="ayRequiredNote">Fields marked * are required.</p>

                    <div className="ayFormGrid">
                        <div className="ayFormGroup">
                            <label>From Date *</label>
                            <input type="date" />
                        </div>

                        <div className="ayFormGroup">
                            <label>To Date *</label>
                            <input type="date" />
                        </div>
                    </div>

                    <div className="ayFormActions">
                        <button className="ayOutlineBtn">Reset</button>
                        <button className="ayOutlineBtn" onClick={() => setShowForm(false)}>
                            Cancel
                        </button>
                        <button className="aySaveBtn">Save</button>
                    </div>
                </div>
            )}

            {/* Listing Card Section */}
            <div className="ayListCard">
                <div className="ayListHeader">
                    <h3>Academic Year List</h3>
                    <input
                        type="text"
                        className="aySearchInput"
                        placeholder="Search academic year..."
                    />
                </div>

                <table className="ayTable">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Academic Year</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2026–2027</td>
                            <td>01 Jun 2026</td>
                            <td>31 May 2027</td>
                            <td>
                                <button className="ayEditBtn">Edit</button>
                                <button className="ayDeleteBtn">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2025–2026</td>
                            <td>01 Jun 2025</td>
                            <td>31 May 2026</td>
                            <td>
                                <button className="ayEditBtn">Edit</button>
                                <button className="ayDeleteBtn">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AcademicYear;