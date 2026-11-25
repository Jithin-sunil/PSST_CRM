import React, { useState } from 'react';
import './Technology.css';

const Technology = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="techPage">
            {/* Header Section */}
            <div className="techHeader">
                <div>
                    <h2>Technology</h2>
                    <p>Manage records and associated workflows.</p>
                </div>

                <button className="techAddBtn" onClick={() => setShowForm(true)}>
                    + Add New
                </button>
            </div>

            {/* Form Section */}
            {showForm && (
                <div className="techFormCard">
                    <p className="techRequiredNote">Fields marked * are required.</p>

                    <label>Technology Name *</label>
                    <input type="text" placeholder="Technology Name" />

                    <div className="techFormActions">
                        <button className="techOutlineBtn">Reset</button>
                        <button className="techOutlineBtn" onClick={() => setShowForm(false)}>
                            Cancel
                        </button>
                        <button className="techSaveBtn">Save</button>
                    </div>
                </div>
            )}

            {/* Listing Card Section */}
            <div className="techListCard">
                <div className="techListHeader">
                    <h3>Technology List</h3>
                    <input
                        type="text"
                        className="techSearchInput"
                        placeholder="Search technology..."
                    />
                </div>

                <table className="techTable">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Technology</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>React</td>
                            <td>
                                <button className="techEditBtn">Edit</button>
                                <button className="techDeleteBtn">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Node.js</td>
                            <td>
                                <button className="techEditBtn">Edit</button>
                                <button className="techDeleteBtn">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Technology;