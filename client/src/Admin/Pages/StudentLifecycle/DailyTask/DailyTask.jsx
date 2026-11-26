import React, { useState } from 'react';
import './DailyTask.css';
import { useNavigate } from 'react-router-dom';

const DailyTask = ({ projectName = 'Smart Learning Portal', batchCode = 'BAT-2026-0001', onBack }) => {
    const [showForm, setShowForm] = useState(false);

    const navigate = useNavigate();

    const handleBackBtn = () => {
    navigate('/admin/projectdiscussion');
    };

    return (
        <div className="dtPage">

            {/* Header Section */}
            <div className="dtHeader">
                <div>
                    <h2>Daily Task</h2>
                    <p>Manage records and associated workflows.</p>
                </div>

                {!showForm && (
                    <button type="button" className="dtAddBtn" onClick={() => setShowForm(true)}>
                        + Add New
                    </button>
                )}
            </div>

            <div className="dtBackBar">
                <button type="button" className="dtOutlineBtn" onClick={handleBackBtn}>
                    ← Back to Project Discussion
                </button>
            </div>

            <div className="dtInfoCard">
                <span>Project:</span> <strong>{projectName}</strong> · <span>Batch</span> <strong>{batchCode}</strong>
            </div>

            {/* Form Section */}
            {showForm && (
                <div className="dtFormCard">
                    <p className="dtRequiredNote">Fields marked * are required.</p>

                    <div className="dtFormGrid">
                        <div className="dtFormGroup">
                            <label>Date *</label>
                            <input type="date" defaultValue="2026-11-26" />
                        </div>

                        <div className="dtFormGroup">
                            <label>Work *</label>
                            <select defaultValue="">
                                <option value="" disabled>Choose Work</option>
                                <option value="Authentication module">Authentication module</option>
                                <option value="UI Dashboard Design">UI Dashboard Design</option>
                                <option value="API Integration">API Integration</option>
                            </select>
                        </div>

                        <div className="dtFormGroup dtFullWidth">
                            <label>Description</label>
                            <textarea rows="3" placeholder="Enter description" />
                        </div>

                        <div className="dtFormGroup">
                            <label>Estimated Hours</label>
                            <input type="number" step="0.5" min="0" placeholder="Estimated Hours" />
                        </div>
                    </div>

                    <div className="dtFormActions">
                        <button type="button" className="dtOutlineBtn">
                            Reset
                        </button>
                        <button type="button" className="dtOutlineBtn" onClick={() => setShowForm(false)}>
                            Cancel
                        </button>
                        <button type="button" className="dtSaveBtn">
                            Save
                        </button>
                    </div>
                </div>
            )}

            {/* Listing Card Section */}
            <div className="dtListCard">
                <div className="dtListHeader">
                    <div className="dtListLeft">
                        <h3>Daily Task List</h3>

                        <input
                            type="text"
                            className="dtSearchInput"
                            placeholder="Search daily task..."
                        />

                        <select className="dtFilterSelect" defaultValue="All">
                            <option value="All">All Status</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>

                <table className="dtTable">
                    <thead>
                        <tr>
                            <th>S. No</th>
                            <th>Date</th>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>26 Nov 2026</td>
                            <td>Authentication module</td>
                            <td>
                                <span className="dtStatusBadge dtStatusProgress">In Progress</span>
                            </td>
                            <td>
                                <div className="dtActionBtns">
                                    <button type="button" className="dtOutlineBtn dtSmallBtn">
                                        Complete
                                    </button>
                                    <button type="button" className="dtOutlineBtn dtSmallBtn">
                                        Remark
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="dtFooter">
                    <span>Showing 1–1 of 1 records</span>

                    <div className="dtPagination">
                        <button type="button" className="dtPageBtn" disabled>
                            Previous
                        </button>
                        <span>Page 1 / 1</span>
                        <button type="button" className="dtPageBtn" disabled>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyTask;