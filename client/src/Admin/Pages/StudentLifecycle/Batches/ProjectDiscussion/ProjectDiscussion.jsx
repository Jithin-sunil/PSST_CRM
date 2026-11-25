import React, { useState } from 'react';
import './ProjectDiscussion.css';

const ProjectDiscussion = ({ batch, onBack }) => {
    const [showForm, setShowForm] = useState(false);
    const [showDocModal, setShowDocModal] = useState(false);
    const [subPage, setSubPage] = useState(null); // 'backlog' | 'sprint' | 'dailyTask'
    const [abstractFileName, setAbstractFileName] = useState('');
    const [diagramFileName, setDiagramFileName] = useState('');

    const handleReset = () => {
        setAbstractFileName('');
        setDiagramFileName('');
    };

    if (subPage) {
        return (
            <div className="pjdPage">
                <div className="pjdHeader">
                    <div>
                        <h2>
                            {subPage === 'backlog' && 'Add Backlog'}
                            {subPage === 'sprint' && 'Add Sprint'}
                            {subPage === 'dailyTask' && 'Daily Task'}
                        </h2>
                        <p>Manage records and associated workflows.</p>
                    </div>
                </div>

                <div className="pjdBackBar">
                    <button
                        type="button"
                        className="pjdOutlineBtn"
                        onClick={() => setSubPage(null)}
                    >
                        ← Back to Project Discussion
                    </button>
                </div>

                <div className="pjdInfoCard">
                    <span>Batch:</span> <strong>{batch?.batchId || 'BAT-2026-0001'}</strong> · Project: <strong>Smart Learning Portal</strong>
                </div>
            </div>
        );
    }

    return (
        <div className="pjdPage">
            <div className="pjdHeader">
                <div>
                    <h2>Project Discussion</h2>
                    <p>Manage records and associated workflows.</p>
                </div>
            </div>

            <div className="pjdBackBar">
                <button type="button" className="pjdOutlineBtn" onClick={onBack}>
                    ← Back to Batches
                </button>
            </div>

            {/* Form Section (Hidden Until + Add New Is Clicked) */}
            {showForm && (
                <form className="pjdFormCard" onReset={handleReset}>
                    <p className="pjdRequiredNote">Fields marked * are required.</p>

                    <div className="pjdFormGrid">
                        <div className="pjdFormGroup">
                            <label>Batch</label>
                            <input
                                type="text"
                                defaultValue={batch?.batchId || 'BAT-2026-0001'}
                                readOnly
                            />
                        </div>

                        <div className="pjdFormGroup">
                            <label>Project Title *</label>
                            <input type="text" placeholder="Project Title" required />
                        </div>
                    </div>

                    <div className="pjdFormGroup pjdFullWidth">
                        <label>Description</label>
                        <textarea rows="2" placeholder="Enter description" />
                    </div>

                    <div className="pjdFormGrid">
                        <div className="pjdFormGroup">
                            <label>Abstract</label>
                            <div className="pjdFileBox">
                                <input
                                    type="file"
                                    onChange={(e) =>
                                        setAbstractFileName(e.target.files?.[0]?.name || '')
                                    }
                                />
                            </div>
                            <span className="pjdHelperText">
                                {abstractFileName
                                    ? `Selected: ${abstractFileName}`
                                    : 'Choose a file (filename is stored in this offline demo)'}
                            </span>
                        </div>

                        <div className="pjdFormGroup">
                            <label>Use Case Diagram</label>
                            <div className="pjdFileBox">
                                <input
                                    type="file"
                                    onChange={(e) =>
                                        setDiagramFileName(e.target.files?.[0]?.name || '')
                                    }
                                />
                            </div>
                            <span className="pjdHelperText">
                                {diagramFileName
                                    ? `Selected: ${diagramFileName}`
                                    : 'Choose a file (filename is stored in this offline demo)'}
                            </span>
                        </div>
                    </div>

                    <div className="pjdFormActions">
                        <button type="reset" className="pjdOutlineBtn">
                            Reset
                        </button>
                        <button
                            type="button"
                            className="pjdOutlineBtn"
                            onClick={() => setShowForm(false)}
                        >
                            Cancel
                        </button>
                        <button type="button" className="pjdSaveBtn">
                            Save
                        </button>
                    </div>
                </form>
            )}

            <div className="pjdInfoCard">
                <span>Batch:</span> <strong>{batch?.batchId || 'BAT-2026-0001'}</strong> · Project discussions and approvals for this batch
            </div>

            {/* Add Button Above Table Layout */}
            <div className="pjdActionBar">
                <button
                    type="button"
                    className="pjdSaveBtn"
                    onClick={() => setShowForm(true)}
                >
                    + Add New
                </button>
            </div>

            <div className="pjdListCard">
                <div className="pjdListHeader">
                    <h3>Project Discussion List</h3>

                    <input
                        type="text"
                        className="pjdSearchInput"
                        placeholder="Search project discussion..."
                    />

                    <select className="pjdFilterSelect" defaultValue="">
                        <option value="">All Status</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>

                <table className="pjdTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>View</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Smart Learning Portal</td>
                            <td>
                                <button type="button" className="pjdOutlineBtn">
                                    View
                                </button>
                            </td>
                            <td>
                                <span className="pjdStatusBadge">Accepted</span>
                            </td>
                            <td className="pjdActionCell">
                                <button
                                    type="button"
                                    className="pjdOutlineBtn"
                                    onClick={() => setShowDocModal(true)}
                                >
                                    Add Document
                                </button>
                                <button
                                    type="button"
                                    className="pjdOutlineBtn"
                                    onClick={() => setSubPage('backlog')}
                                >
                                    Add Backlog
                                </button>
                                <button
                                    type="button"
                                    className="pjdOutlineBtn"
                                    onClick={() => setSubPage('sprint')}
                                >
                                    Add Sprint
                                </button>
                                <button
                                    type="button"
                                    className="pjdOutlineBtn"
                                    onClick={() => setSubPage('dailyTask')}
                                >
                                    Daily Task
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="pjdFooter">
                    <span>Showing 1–1 of 1 records</span>

                    <div className="pjdPagination">
                        <button type="button" className="pjdPageBtn" disabled>
                            Previous
                        </button>
                        <span>Page 1 / 1</span>
                        <button type="button" className="pjdPageBtn" disabled>
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {/* Add Document Modal */}
            {showDocModal && (
                <div className="pjdModalOverlay">
                    <div className="pjdModalCard">
                        <h3>Add Document</h3>
                        <p className="pjdRequiredNote">Fields marked * are required.</p>

                        <div className="pjdFormGroup">
                            <label>Document Title *</label>
                            <input type="text" placeholder="Document Title" />
                        </div>

                        <div className="pjdFormGroup">
                            <label>File *</label>
                            <input type="file" />
                        </div>

                        <div className="pjdFormActions">
                            <button
                                type="button"
                                className="pjdOutlineBtn"
                                onClick={() => setShowDocModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="pjdSaveBtn"
                                onClick={() => setShowDocModal(false)}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDiscussion;