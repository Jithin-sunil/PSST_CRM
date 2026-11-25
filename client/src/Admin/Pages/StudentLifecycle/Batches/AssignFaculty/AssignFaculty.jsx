import React, { useState } from 'react';
import './AssignFaculty.css';

const AssignFaculty = ({ batch, onBack }) => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="asfPage">
            <div className="asfHeader">
                <div>
                    <h2>Assign Faculty</h2>
                    <p>Manage records and associated workflows.</p>
                </div>
            </div>

            <div className="asfBackBar">
                <button type="button" className="asfOutlineBtn" onClick={onBack}>
                    ← Back to Batches
                </button>
            </div>

            {/* Form Section (Hidden Until + Add New Is Clicked) */}
            {showForm && (
                <div className="asfFormCard">
                    <p className="asfRequiredNote">Fields marked * are required.</p>

                    <div className="asfFormGrid">
                        <div className="asfFormGroup">
                            <label>Batch ID</label>
                            <input
                                type="text"
                                defaultValue={batch?.batchId || 'BAT-2026-0001'}
                                readOnly
                            />
                        </div>

                        <div className="asfFormGroup">
                            <label>Batch Type</label>
                            <input
                                type="text"
                                defaultValue={batch?.batchType || 'Individual'}
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="asfFormGrid">
                        <div className="asfFormGroup">
                            <label>Faculty</label>
                            <select defaultValue="Priya Nair">
                                <option value="">Choose Faculty</option>
                                <option value="Priya Nair">Priya Nair</option>
                                <option value="Rahul Menon">Rahul Menon</option>
                            </select>
                        </div>
                    </div>

                    <div className="asfFormActions">
                        <button type="button" className="asfOutlineBtn">
                            Reset
                        </button>
                        <button
                            type="button"
                            className="asfOutlineBtn"
                            onClick={() => setShowForm(false)}
                        >
                            Cancel
                        </button>
                        <button type="button" className="asfSaveBtn">
                            Save
                        </button>
                    </div>
                </div>
            )}

            <div className="asfInfoCard">
                <span>Batch:</span> <strong>{batch?.batchId || 'BAT-2026-0001'}</strong>
            </div>

            {/* Add Button Above Table Layout */}
            <div className="asfActionBar">
                <button
                    type="button"
                    className="asfSaveBtn"
                    onClick={() => setShowForm(true)}
                >
                    + Add New
                </button>
            </div>

            <div className="asfListCard">
                <div className="asfListHeader">
                    <h3>Assign Faculty List</h3>

                    <input
                        type="text"
                        className="asfSearchInput"
                        placeholder="Search assign faculty..."
                    />

                    <select className="asfFilterSelect" defaultValue="">
                        <option value="">All Batch Type</option>
                        <option value="Individual">Individual</option>
                        <option value="Batch">Batch</option>
                    </select>

                    <select className="asfFilterSelect" defaultValue="">
                        <option value="">All Faculty</option>
                        <option value="Priya Nair">Priya Nair</option>
                        <option value="Rahul Menon">Rahul Menon</option>
                    </select>
                </div>

                <table className="asfTable">
                    <thead>
                        <tr>
                            <th>Batch ID</th>
                            <th>Batch Type</th>
                            <th>Faculty</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{batch?.batchId || 'BAT-2026-0001'}</td>
                            <td>{batch?.batchType || 'Individual'}</td>
                            <td>Priya Nair</td>
                            <td className="asfActionCell">
                                <button type="button" className="asfOutlineBtn">
                                    Edit
                                </button>
                                <button type="button" className="asfDeleteBtn">
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

export default AssignFaculty;