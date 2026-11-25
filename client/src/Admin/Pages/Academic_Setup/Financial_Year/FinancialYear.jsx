import React, { useState } from 'react';
import './FinancialYear.css';

const FinancialYear = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="fyPage">
            {/* Header Section with Add Button on Same Level */}
            <div className="fyHeader">
                <div>
                    <h2>Financial Year</h2>
                    <p>Manage records and associated workflows.</p>
                </div>

                <button className="fyAddBtn" onClick={() => setShowForm(true)}>
                    + Add New
                </button>
            </div>

            {/* Form Section */}
            {showForm && (
                <div className="fyFormCard">
                    <p className="fyRequiredNote">Fields marked * are required.</p>

                    <div className="fyFormGrid">
                        <div className="fyFormGroup">
                            <label>From Date *</label>
                            <input type="date" />
                        </div>

                        <div className="fyFormGroup">
                            <label>To Date *</label>
                            <input type="date" />
                        </div>
                    </div>

                    <div className="fyFormActions">
                        <button className="fyOutlineBtn">Reset</button>
                        <button className="fyOutlineBtn" onClick={() => setShowForm(false)}>
                            Cancel
                        </button>
                        <button className="fySaveBtn">Save</button>
                    </div>
                </div>
            )}

            {/* Listing Card Section */}
            <div className="fyListCard">
                <div className="fyListHeader">
                    <h3>Financial Year List</h3>
                    <input
                        type="text"
                        className="fySearchInput"
                        placeholder="Search financial year..."
                    />
                </div>

                <table className="fyTable">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Financial Year</th>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2026–2027</td>
                            <td>01 Apr 2026</td>
                            <td>31 Mar 2027</td>
                            <td>
                                <button className="fyEditBtn">Edit</button>
                                <button className="fyDeleteBtn">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2025–2026</td>
                            <td>01 Apr 2025</td>
                            <td>31 Mar 2026</td>
                            <td>
                                <button className="fyEditBtn">Edit</button>
                                <button className="fyDeleteBtn">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FinancialYear;