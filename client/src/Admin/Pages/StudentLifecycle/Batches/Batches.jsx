import React, { useState } from 'react';
import './Batches.css';
import AssignFaculty from './AssignFaculty/AssignFaculty';
import ProjectDiscussion from './ProjectDiscussion/ProjectDiscussion';

const Batches = () => {
    const [activeView, setActiveView] = useState('list');
    const [selectedBatch, setSelectedBatch] = useState(null);

    if (activeView === 'assignFaculty' && selectedBatch) {
        return (
            <AssignFaculty
                batch={selectedBatch}
                onBack={() => {
                    setSelectedBatch(null);
                    setActiveView('list');
                }}
            />
        );
    }

    if (activeView === 'projectDiscussion' && selectedBatch) {
        return (
            <ProjectDiscussion
                batch={selectedBatch}
                onBack={() => {
                    setSelectedBatch(null);
                    setActiveView('list');
                }}
            />
        );
    }

    const batches = [
        { id: 1, batchId: 'BAT-2026-0001', category: 'Course', batchType: 'Individual', memberCount: 1, students: 'Akhil N', status: 'Active' },
        { id: 2, batchId: 'BAT-2026-0002', category: 'Project', batchType: 'Individual', memberCount: 1, students: 'Divya R', status: 'Active' },
        { id: 3, batchId: 'BAT-2026-0003', category: 'Project', batchType: 'Individual', memberCount: 1, students: 'Jishnu P', status: 'Active' },
        { id: 4, batchId: 'BAT-2026-0004', category: 'Course', batchType: 'Individual', memberCount: 1, students: 'Manu K', status: 'Active' },
        { id: 5, batchId: 'BAT-2026-0005', category: 'Project', batchType: 'Individual', memberCount: 1, students: 'Tina S', status: 'Active' },
        { id: 6, batchId: 'BAT-2026-0006', category: 'Project', batchType: 'Individual', memberCount: 1, students: 'Anjana V', status: 'Active' },
    ];

    return (
        <div className="batPage">
            {/* Header Section */}
            <div className="batHeader">
                <div>
                    <h2>Batches</h2>
                    <p>Batches generated automatically from admissions.</p>
                </div>
            </div>

            {/* Listing Card Section */}
            <div className="batListCard">
                <div className="batListHeader">
                    <h3>Batches List</h3>

                    <input
                        type="text"
                        className="batSearchInput"
                        placeholder="Search batches..."
                    />

                    <select className="batFilterSelect" defaultValue="">
                        <option value="">All Category</option>
                        <option value="Course">Course</option>
                        <option value="Project">Project</option>
                    </select>

                    <select className="batFilterSelect" defaultValue="">
                        <option value="">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Completed">Completed</option>
                    </select>

                    <select className="batFilterSelect" defaultValue="">
                        <option value="">All Batch Type</option>
                        <option value="Individual">Individual</option>
                        <option value="Batch">Batch</option>
                    </select>
                </div>

                <table className="batTable">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Batch ID</th>
                            <th>Category</th>
                            <th>Batch Type</th>
                            <th>Member Count</th>
                            <th>Students</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {batches.map((row, index) => (
                            <tr key={row.id}>
                                <td>{index + 1}</td>
                                <td>{row.batchId}</td>
                                <td>{row.category}</td>
                                <td>{row.batchType}</td>
                                <td>{row.memberCount}</td>
                                <td>{row.students}</td>
                                <td>
                                    <span className="batStatusBadge">{row.status}</span>
                                </td>
                                <td className="batActionCell">
                                    <button type="button" className="batOutlineBtn">
                                        View
                                    </button>
                                    <button
                                        type="button"
                                        className="batOutlineBtn"
                                        onClick={() => {
                                            setSelectedBatch(row);
                                            setActiveView('assignFaculty');
                                        }}
                                    >
                                        Assign Faculty
                                    </button>
                                    <button
                                        type="button"
                                        className="batPrimaryBtn"
                                        onClick={() => {
                                            setSelectedBatch(row);
                                            setActiveView('projectDiscussion');
                                        }}
                                    >
                                        Project Discussion
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="batFooter">
                    <span>Showing 1–6 of 8 records</span>

                    <div className="batPagination">
                        <button type="button" className="batPageBtn" disabled>
                            Previous
                        </button>
                        <span>Page 1 / 2</span>
                        <button type="button" className="batPageBtnActive">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Batches;