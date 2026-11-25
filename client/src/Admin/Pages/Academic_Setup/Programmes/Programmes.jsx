import React, { useState } from 'react';
import './Programmes.css';

const Programmes = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="progPage">
            {/* Header Section with Add Button on Same Level */}
            <div className="progHeader">
                <div>
                    <h2>Programmes</h2>
                    <p>Manage records and associated workflows.</p>
                </div>

                <button
                    type="button"
                    className="progAddBtn"
                    onClick={() => setShowForm(true)}
                >
                    + Add New
                </button>
            </div>

            {/* Form Section */}
            {showForm && (
                <div className="progFormCard">
                    <p className="progRequiredNote">Fields marked * are required.</p>

                    <label>Programme Name *</label>
                    <input type="text" placeholder="Programme Name" />

                    <div className="progFormActions">
                        <button type="button" className="progOutlineBtn">
                            Reset
                        </button>
                        <button
                            type="button"
                            className="progOutlineBtn"
                            onClick={() => setShowForm(false)}
                        >
                            Cancel
                        </button>
                        <button type="button" className="progSaveBtn">
                            Save
                        </button>
                    </div>
                </div>
            )}

            {/* Listing Card Section */}
            <div className="progListCard">
                <div className="progListHeader">
                    <h3>Programmes List</h3>
                    <input
                        type="text"
                        className="progSearchInput"
                        placeholder="Search programmes..."
                    />
                </div>

                <table className="progTable">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Programme Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>B.Tech</td>
                            <td>
                                <button type="button" className="progEditBtn">
                                    Edit
                                </button>
                                <button type="button" className="progDeleteBtn">
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>B.Sc</td>
                            <td>
                                <button type="button" className="progEditBtn">
                                    Edit
                                </button>
                                <button type="button" className="progDeleteBtn">
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>BCA</td>
                            <td>
                                <button type="button" className="progEditBtn">
                                    Edit
                                </button>
                                <button type="button" className="progDeleteBtn">
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

export default Programmes;