import React, { useState } from 'react';
import './Universities.css';

const Universities = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="uniPage">
            {/* Top Header Row: Title/Subtitle on left, + Add New on top right */}
            <div className="uniHeader">
                <div>
                    <h2>Universities</h2>
                    <p>Manage records and associated workflows.</p>
                </div>

                <button type="button" className="uniAddBtn" onClick={() => setShowForm(true)} >
                    + Add New
                </button>
            </div>

            {/* Form Section (Appears only after clicking + Add New) */}
            {showForm && (
                <div className="uniFormCard">
                    <p className="uniRequiredNote">Fields marked * are required.</p>

                    <label>University Name *</label>
                    <input type="text" placeholder="University Name" />

                    <div className="uniFormActions">
                        <button type="button" className="uniOutlineBtn">
                            Reset
                        </button>
                        <button
                            type="button"
                            className="uniOutlineBtn"
                            onClick={() => setShowForm(false)}
                        >
                            Cancel
                        </button>
                        <button type="button" className="uniSaveBtn">
                            Save
                        </button>
                    </div>
                </div>
            )}

            {/* Listing Card Section */}
            <div className="uniListCard">
                <div className="uniListHeader">
                    <h3>Universities List</h3>
                    <input type="text" className="uniSearchInput" placeholder="Search universities..." />
                </div>

                <table className="uniTable">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>University Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Kerala University</td>
                            <td>
                                <button type="button" className="uniEditBtn">
                                    Edit
                                </button>
                                <button type="button" className="uniDeleteBtn">
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>APJ Abdul Kalam Technological University</td>
                            <td>
                                <button type="button" className="uniEditBtn">
                                    Edit
                                </button>
                                <button type="button" className="uniDeleteBtn">
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Mahatma Gandhi University</td>
                            <td>
                                <button type="button" className="uniEditBtn">
                                    Edit
                                </button>
                                <button type="button" className="uniDeleteBtn">
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

export default Universities;