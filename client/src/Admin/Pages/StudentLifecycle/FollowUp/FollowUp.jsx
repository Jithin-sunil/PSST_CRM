import React, { useState } from 'react';
import './FollowUp.css';

const FollowUp = ({ enquiryName, onBack }) => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="fupPage">
            <div className="fupBreadcrumb">LINKED WORKFLOW / MASTER DATA</div>

            {/* Header Section */}
            <div className="fupHeader">
                <div>
                    <h2>Follow Up</h2>
                    <p>Manage records and associated workflows.</p>
                </div>
            </div>

            <div className="fupBackBar">
                <button type="button" className="fupOutlineBtn" onClick={onBack}>
                    ← Back to Enquiries
                </button>
            </div>

            <div className="fupInfoCard">
                <span>Enquiry:</span> <strong>{enquiryName}</strong>
            </div>

            {/* Form Section */}
            {showForm && (
                <div className="fupFormCard">
                    <p className="fupRequiredNote">Fields marked * are required.</p>

                    <div className="fupFormGrid">
                        <div className="fupFormGroup">
                            <label>Follow-up Date *</label>
                            <input type="date" defaultValue="2026-11-25" />
                        </div>

                        <div className="fupFormGroup">
                            <label>Description *</label>
                            <input type="text" placeholder="Enter description" />
                        </div>
                    </div>

                    <div className="fupFormActions">
                        <button type="button" className="fupOutlineBtn">
                            Reset
                        </button>
                        <button type="button" className="fupOutlineBtn" onClick={() => setShowForm(false)}>
                            Cancel
                        </button>
                        <button type="button" className="fupSaveBtn">
                            Save
                        </button>
                    </div>
                </div>
            )}

            {/* Listing Card Section */}
            <div className="fupListCard">
                <div className="fupListHeader">
                    <div className="fupListLeft">
                        <h3>Follow Up List</h3>

                        <input
                            type="text"
                            className="fupSearchInput"
                            placeholder="Search follow up..."
                        />
                    </div>

                    <button type="button" className="fupAddBtn" onClick={() => setShowForm(true)}>
                        + Add New
                    </button>
                </div>

                <table className="fupTable">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Follow-up Date</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td colSpan="4" className="fupEmptyRow">
                                No records found. Try a different search or filter.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="fupFooter">
                    <span>Showing 0–0 of 0 records</span>

                    <div className="fupPagination">
                        <button type="button" className="fupPageBtn" disabled>
                            Previous
                        </button>
                        <span>Page 1 / 1</span>
                        <button type="button" className="fupPageBtn" disabled>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FollowUp;