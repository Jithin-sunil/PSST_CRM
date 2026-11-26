
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sprint.css';

const Sprint = () => {
    const navigate = useNavigate();

    // Form is hidden initially
    const [showForm, setShowForm] = useState(false);

    const handleBack = () => {
        navigate('/admin/projectdiscussion');
    };

    const handleSave = (e) => {
        e.preventDefault();
        setShowForm(false);
    };

    return (
        <div className="sprintPage">

            <div className="sprintHeader">
                <h2>Sprint Planning</h2>
                <p>Manage records and associated workflows.</p>
            </div>

            <button className="sprintBackBtn" onClick={handleBack}>
                ← Back to Project Discussion
            </button>

            {/* Sprint Form - Show only after clicking Add New */}
            {showForm && (
                <form className="sprintForm" onSubmit={handleSave}>
                    <p className="sprintNote">
                        Fields marked * are required.
                    </p>

                    <div className="sprintGrid">
                        <div className="sprintGroup">
                            <label>Sprint Name *</label>
                            <input
                                type="text"
                                placeholder="Sprint Name"
                                required
                            />
                        </div>

                        <div className="sprintGroup">
                            <label>Sprint Date</label>
                            <input type="date" />
                        </div>
                    </div>

                    <div className="sprintGroup">
                        <label>Select Backlogs</label>

                        <div className="sprintBacklogs">
                            <label>
                                <input type="checkbox" />
                                Authentication module
                            </label>

                            <label>
                                <input type="checkbox" />
                                Student dashboard
                            </label>
                        </div>
                    </div>

                    <div className="sprintActions">
                        <button type="reset" className="sprintCancelBtn">
                            Reset
                        </button>

                        <button
                            type="button"
                            className="sprintCancelBtn"
                            onClick={() => setShowForm(false)}
                        >
                            Cancel
                        </button>

                        <button type="submit" className="sprintSaveBtn">
                            Save
                        </button>
                    </div>
                </form>
            )}

            <div className="sprintInfo">
                Project: <strong>Smart Learning Portal</strong> ·
                Batch BAT-2026-0001
            </div>

            <div className="sprintList">

                <div className="sprintListHeader">
                    <h3>Sprint Planning List</h3>

                    <input
                        type="text"
                        placeholder="Search sprint planning..."
                        className="sprintSearch"
                    />

                    <select className="sprintFilter">
                        <option>All Status</option>
                        <option>Pending</option>
                        <option>Accepted</option>
                    </select>

                    <button
                        type="button"
                        className="sprintAddBtn"
                        onClick={() => setShowForm(true)}
                    >
                        + Add New
                    </button>
                </div>

                <table className="sprintTable">
                    <thead>
                        <tr>
                            <th>S. No</th>
                            <th>Sprint Name</th>
                            <th>Sprint Date</th>
                            <th>View</th>
                            <th>Status</th>
                            <th>Remark</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sprint 1</td>
                            <td>25/11/2026</td>
                            <td>
                                <button className="sprintSmallBtn">
                                    View
                                </button>
                            </td>
                            <td>
                                <span className="sprintStatus">
                                    Pending
                                </span>
                            </td>
                            <td>-</td>
                            <td>
                                <button className="sprintSmallBtn">
                                    Edit
                                </button>
                                <button className="sprintSmallBtn">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="sprintFooter">
                    <span>Showing 1–1 of 1 records</span>

                    <div>
                        <button disabled>Previous</button>
                        <span> Page 1 / 1 </span>
                        <button disabled>Next</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Sprint;
