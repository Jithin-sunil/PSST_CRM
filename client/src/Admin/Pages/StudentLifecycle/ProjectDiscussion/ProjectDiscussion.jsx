
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectDiscussion.css';

const ProjectDiscussion = ({ batch }) => {
    const navigate = useNavigate();

    const [showForm, setShowForm] = useState(false);
    const [showDocModal, setShowDocModal] = useState(false);

    const [abstractFileName, setAbstractFileName] = useState('');
    const [diagramFileName, setDiagramFileName] = useState('');

    // Load saved discussions from sessionStorage
    const [discussions, setDiscussions] = useState(() => {
        const savedData = sessionStorage.getItem('discussions');

        return savedData
            ? JSON.parse(savedData)
            : [
                {
                    id: 1,
                    name: 'Smart Learning Portal',
                    status: 'Pending',
                },
            ];
    });

    // Save discussions whenever the state changes
    useEffect(() => {
        sessionStorage.setItem(
            'discussions',
            JSON.stringify(discussions)
        );
    }, [discussions]);

    const handleReset = () => {
        setAbstractFileName('');
        setDiagramFileName('');
    };

    // Accept Project
    const handleAccept = (id) => {
        setDiscussions((prev) =>
            prev.map((item) =>
                item.id === id && item.status === 'Pending'
                    ? { ...item, status: 'Accepted' }
                    : item
            )
        );
    };

    // Reject Project
    const handleReject = (id) => {
        setDiscussions((prev) =>
            prev.map((item) =>
                item.id === id && item.status === 'Pending'
                    ? { ...item, status: 'Rejected' }
                    : item
            )
        );
    };

    // Edit Project
    const handleEdit = (id) => {
        const target = discussions.find((item) => item.id === id);

        if (!target || target.status !== 'Pending') {
            return;
        }

        const updatedName = window.prompt(
            'Edit Project Title:',
            target.name
        );

        if (updatedName && updatedName.trim()) {
            setDiscussions((prev) =>
                prev.map((item) =>
                    item.id === id && item.status === 'Pending'
                        ? { ...item, name: updatedName.trim() }
                        : item
                )
            );
        }
    };

    // Delete Project
    const handleDelete = (id) => {
        setDiscussions((prev) =>
            prev.filter(
                (item) => item.id !== id || item.status === 'Accepted'
            )
        );
    };

    return (
        <div className="pjdPage">

            {/* Page Header */}
            <div className="pjdHeader">
                <div>
                    <h2>Project Discussion</h2>
                    <p>Manage records and associated workflows.</p>
                </div>
            </div>

            {/* Back Button */}
            <div className="pjdBackBar">
                <button
                    type="button"
                    className="pjdOutlineBtn"
                    onClick={() => navigate('/admin/batches')}
                >
                    ← Back to Batches
                </button>
            </div>

            {/* Project Form */}
            {showForm && (
                <form
                    className="pjdFormCard"
                    onReset={handleReset}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <p className="pjdRequiredNote">
                        Fields marked * are required.
                    </p>

                    <div className="pjdFormGrid">

                        <div className="pjdFormGroup">
                            <label>Batch</label>
                            <input
                                type="text"
                                defaultValue={
                                    batch?.batchId || 'BAT-2026-0001'
                                }
                                readOnly
                            />
                        </div>

                        <div className="pjdFormGroup">
                            <label>Project Title *</label>
                            <input
                                type="text"
                                placeholder="Project Title"
                                required
                            />
                        </div>

                    </div>

                    <div className="pjdFormGroup pjdFullWidth">
                        <label>Description</label>
                        <textarea
                            rows="2"
                            placeholder="Enter description"
                        />
                    </div>

                    <div className="pjdFormGrid">

                        <div className="pjdFormGroup">
                            <label>Abstract</label>

                            <div className="pjdFileBox">
                                <input
                                    type="file"
                                    onChange={(e) =>
                                        setAbstractFileName(
                                            e.target.files?.[0]?.name || ''
                                        )
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
                                        setDiagramFileName(
                                            e.target.files?.[0]?.name || ''
                                        )
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

                        <button
                            type="reset"
                            className="pjdOutlineBtn"
                        >
                            Reset
                        </button>

                        <button
                            type="button"
                            className="pjdOutlineBtn"
                            onClick={() => setShowForm(false)}
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            className="pjdSaveBtn"
                            onClick={() => setShowForm(false)}
                        >
                            Save
                        </button>

                    </div>
                </form>
            )}

            {/* Batch Information */}
            <div className="pjdInfoCard">
                <span>Batch:</span>

                <strong>
                    {batch?.batchId || 'BAT-2026-0001'}
                </strong>

                · Project discussions and approvals for this batch
            </div>

            {/* Add New Button */}
            <div className="pjdActionBar">
                <button
                    type="button"
                    className="pjdSaveBtn"
                    onClick={() => setShowForm(true)}
                >
                    + Add New
                </button>
            </div>

            {/* Project Discussion List */}
            <div className="pjdListCard">

                <div className="pjdListHeader">

                    <h3>Project Discussion List</h3>

                    <input
                        type="text"
                        className="pjdSearchInput"
                        placeholder="Search project discussion..."
                    />

                    <select
                        className="pjdFilterSelect"
                        defaultValue=""
                    >
                        <option value="">All Status</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
                    </select>

                </div>

                {/* Table */}
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

                        {discussions.length > 0 ? (

                            discussions.map((item) => (

                                <tr key={item.id}>

                                    <td>{item.name}</td>

                                    <td>
                                        <button
                                            type="button"
                                            className="pjdOutlineBtn"
                                        >
                                            View
                                        </button>
                                    </td>

                                    <td>
                                        <span className="pjdStatusBadge">
                                            {item.status}
                                        </span>
                                    </td>

                                    <td className="pjdActionCell">

                                        {/* Accepted Project */}
                                        {item.status === 'Accepted' ? (

                                            <>
                                                <button
                                                    type="button"
                                                    className="pjdOutlineBtn"
                                                    onClick={() =>
                                                        setShowDocModal(true)
                                                    }
                                                >
                                                    Add Document
                                                </button>

                                                <button
                                                    type="button"
                                                    className="pjdOutlineBtn"
                                                    onClick={() =>
                                                        navigate('/admin/backlog')
                                                    }
                                                >
                                                    Add Backlog
                                                </button>

                                                <button
                                                    type="button"
                                                    className="pjdOutlineBtn"
                                                    onClick={() =>
                                                        navigate('/admin/sprint')
                                                    }
                                                >
                                                    Add Sprint
                                                </button>

                                                <button
                                                    type="button"
                                                    className="pjdOutlineBtn"
                                                    onClick={() =>
                                                        navigate('/admin/dailytask')
                                                    }
                                                >
                                                    Daily Task
                                                </button>
                                            </>

                                        ) : item.status === 'Rejected' ? (

                                            <span>Rejected</span>

                                        ) : (

                                            /* Pending Project */
                                            <>

                                                <button
                                                    type="button"
                                                    className="pjdOutlineBtn"
                                                    onClick={() =>
                                                        handleAccept(item.id)
                                                    }
                                                >
                                                    Accept
                                                </button>

                                                <button
                                                    type="button"
                                                    className="pjdOutlineBtn"
                                                    onClick={() =>
                                                        handleReject(item.id)
                                                    }
                                                >
                                                    Reject
                                                </button>

                                                <button
                                                    type="button"
                                                    className="pjdOutlineBtn"
                                                    onClick={() =>
                                                        handleEdit(item.id)
                                                    }
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    type="button"
                                                    className="pjdOutlineBtn"
                                                    onClick={() =>
                                                        handleDelete(item.id)
                                                    }
                                                >
                                                    Delete
                                                </button>

                                            </>

                                        )}

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>
                                <td colSpan="4">
                                    No records found.
                                </td>
                            </tr>

                        )}

                    </tbody>

                </table>

                {/* Footer */}
                <div className="pjdFooter">

                    <span>
                        Showing {discussions.length > 0
                            ? `1–${discussions.length}`
                            : '0–0'} of {discussions.length} records
                    </span>

                    <div className="pjdPagination">

                        <button
                            type="button"
                            className="pjdPageBtn"
                            disabled
                        >
                            Previous
                        </button>

                        <span>Page 1 / 1</span>

                        <button
                            type="button"
                            className="pjdPageBtn"
                            disabled
                        >
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

                        <p className="pjdRequiredNote">
                            Fields marked * are required.
                        </p>

                        <div className="pjdFormGroup">
                            <label>Document Title *</label>
                            <input
                                type="text"
                                placeholder="Document Title"
                            />
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
