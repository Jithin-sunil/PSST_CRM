import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './Backlog.css';

const Backlog = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { batchId } = useParams();

    const batch = location.state?.batch || {
        id: batchId || 1,
        batchId: 'BAT-2026-0001',
        projectName: 'Smart Learning Portal',
    };

    const [backlogs, setBacklogs] = useState([
        { id: 1, title: 'Authentication module', status: 'Pending' },
        { id: 2, title: 'Student dashboard', status: 'Pending' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        status: 'Pending',
    });

    const handleOpenAdd = () => {
        setEditingId(null);
        setFormData({ title: '', status: 'Pending' });
        setShowForm(true);
    };

    const handleEdit = (item) => {
        setEditingId(item.id);
        setFormData({ title: item.title, status: item.status });
        setShowForm(true);
    };

    const handleDelete = (id) => {
        setBacklogs((prev) => prev.filter((item) => item.id !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim()) return;

        if (editingId) {
            setBacklogs((prev) =>
                prev.map((item) =>
                    item.id === editingId
                        ? { ...item, title: formData.title.trim(), status: formData.status }
                        : item
                )
            );
        } else {
            const newItem = {
                id: Date.now(),
                title: formData.title.trim(),
                status: formData.status,
            };
            setBacklogs((prev) => [...prev, newItem]);
        }

        setFormData({ title: '', status: 'Pending' });
        setEditingId(null);
        setShowForm(false);
    };

    const handleCancelForm = () => {
        setFormData({ title: '', status: 'Pending' });
        setEditingId(null);
        setShowForm(false);
    };

    const filteredBacklogs = backlogs.filter((item) => {
        const matchesSearch = item.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter ? item.status === statusFilter : true;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="bklPage">
            {/* Header Section */}
            <div className="bklHeader">
                <h2>Backlog</h2>
                <p>Manage records and associated workflows.</p>
            </div>

            {/* Back Navigation Button */}
            <div className="bklBackRow">
                <button type="button" className="bklBackBtn" onClick={() => navigate('/admin/projectdiscussion')}>
                ← Back to Project Discussion
                </button>
            </div>

            {/* Context Info Banner */}
            <div className="bklContextBanner">
                Project: <strong>{batch.projectName || 'Smart Learning Portal'}</strong> &middot; Batch{' '}
                {batch.batchId || 'BAT-2026-0001'}
            </div>

            {/* Progressive Disclosure Add/Edit Form */}
            {showForm && (
                <div className="bklFormCard">
                    <h3>{editingId ? 'Edit Backlog' : 'Add New Backlog'}</h3>
                    <form onSubmit={handleSubmit} className="bklFormGrid">
                        <div className="bklFormGroup">
                            <label>Backlog Title</label>
                            <input type="text" placeholder="Enter backlog item..." value={formData.title} onChange={(e) =>
                                    setFormData({ ...formData, title: e.target.value })
                                }
                                required
                            />
                        </div>

                        <div className="bklFormGroup">
                            <label>Status</label>
                            <select value={formData.status} onChange={(e) =>
                                    setFormData({ ...formData, status: e.target.value })
                                }
                            >
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>

                        <div className="bklFormActions">
                            <button type="submit" className="bklPrimaryBtn">
                                {editingId ? 'Update' : 'Save'}
                            </button>
                            <button
                                type="button"
                                className="bklOutlineBtn"
                                onClick={handleCancelForm}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Listing Card Section */}
            <div className="bklListCard">
                <div className="bklListHeader">
                    <div className="bklFilterBar">
                        <h3>Backlog List</h3>

                        <input
                            type="text"
                            className="bklSearchInput"
                            placeholder="Search backlog..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        <select
                            className="bklFilterSelect"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="">All Status</option>
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                    <button
                        type="button"
                        className="bklPrimaryBtn"
                        onClick={handleOpenAdd}
                    >
                        + Add New
                    </button>
                </div>

                <table className="bklTable">
                    <thead>
                        <tr>
                            <th>S. No</th>
                            <th>Backlog</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredBacklogs.length > 0 ? (
                            filteredBacklogs.map((row, index) => (
                                <tr key={row.id}>
                                    <td>{index + 1}</td>
                                    <td>{row.title}</td>
                                    <td>
                                        <span
                                            className={`bklStatusBadge ${
                                                row.status === 'Completed'
                                                    ? 'bklStatusCompleted'
                                                    : row.status === 'In Progress'
                                                    ? 'bklStatusProgress'
                                                    : 'bklStatusPending'
                                            }`}
                                        >
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="bklActionCell">
                                        <button
                                            type="button"
                                            className="bklOutlineBtn"
                                            onClick={() => handleEdit(row)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="bklDeleteBtn"
                                            onClick={() => handleDelete(row.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="bklEmptyRow">
                                    No backlog records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="bklFooter">
                    <span>
                        Showing {filteredBacklogs.length > 0 ? 1 : 0}–
                        {filteredBacklogs.length} of {filteredBacklogs.length} records
                    </span>

                    <div className="bklPagination">
                        <button type="button" className="bklPageBtn" disabled>
                            Previous
                        </button>
                        <span>Page 1 / 1</span>
                        <button type="button" className="bklPageBtn" disabled>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Backlog;