import React, { useState } from 'react';
import './Colleges.css';

const Colleges = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="colPage">
            {/* Header Section with Add Button on Same Level */}
            <div className="colHeader">
                <div>
                    <h2>Colleges</h2>
                    <p>Manage records and associated workflows.</p>
                </div>

                <button type="button" className="colAddBtn" onClick={() => setShowForm(true)}>
                    + Add New
                </button>
            </div>

            {/* Form Section */}
            {showForm && (
                <div className="colFormCard">
                    <p className="colRequiredNote">Fields marked * are required.</p>

                    <div className="colFormGrid">
                        <div className="colFormGroup">
                            <label>University</label>
                            <select defaultValue="">
                                <option value="">Choose University</option>
                                <option value="Kerala University">Kerala University</option>
                                <option value="APJ Abdul Kalam Technological University">
                                    APJ Abdul Kalam Technological University
                                </option>
                                <option value="Mahatma Gandhi University">
                                    Mahatma Gandhi University
                                </option>
                            </select>
                        </div>

                        <div className="colFormGroup">
                            <label>College Name *</label>
                            <input type="text" placeholder="College Name" />
                        </div>

                        <div className="colFormGroup">
                            <label>Location</label>
                            <input type="text" placeholder="Location" />
                        </div>

                        <div className="colFormGroup">
                            <label>Autonomous</label>
                            <select defaultValue="">
                                <option value="">Choose Autonomous</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>

                    <div className="colFormActions">
                        <button type="button" className="colOutlineBtn">
                            Reset
                        </button>
                        <button type="button" className="colOutlineBtn" onClick={() => setShowForm(false)} >
                            Cancel
                        </button>
                        <button type="button" className="colSaveBtn">
                            Save
                        </button>
                    </div>
                </div>
            )}

            {/* Listing Card Section */}
            <div className="colListCard">
                <div className="colListHeader">
                    <h3>Colleges List</h3>

                    <input type="text" className="colSearchInput" placeholder="Search colleges..."
                    />

                    <select className="colFilterSelect" defaultValue="">
                        <option value="">All University</option>
                        <option value="Kerala University">Kerala University</option>
                        <option value="APJ Abdul Kalam Technological University">
                            APJ Abdul Kalam Technological University
                        </option>
                        <option value="Mahatma Gandhi University">
                            Mahatma Gandhi University
                        </option>
                    </select>
                </div>

                <table className="colTable">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>College Name</th>
                            <th>University</th>
                            <th>Location</th>
                            <th>Autonomous</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Progressive College</td>
                            <td>Kerala University</td>
                            <td>Thiruvananthapuram</td>
                            <td>Yes</td>
                            <td>
                                <button type="button" className="colEditBtn">
                                    Edit
                                </button>
                                <button type="button" className="colDeleteBtn">
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

export default Colleges;