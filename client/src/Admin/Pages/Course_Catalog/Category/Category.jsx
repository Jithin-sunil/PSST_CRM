import React, { useState } from 'react';
import './category.css';

const Category = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="coursePage">
            {/* Header Section */}
            <div className="courseHeader">
                <div>
                    <h2>Course</h2>
                    <p>Manage records and associated workflows.</p>
                </div>

                <button className="courseAddBtn" onClick={() => setShowForm(true)}>
                    + Add New
                </button>
            </div>

            {/* Form Section */}
            {showForm && (
                <div className="courseFormCard">
                    <p className="courseRequiredNote">Fields marked * are required.</p>

                    <label>Course Name *</label>
                    <input type="text" placeholder="Course Name" />

                    <div className="courseFormActions">
                        <button className="courseOutlineBtn">Reset</button>
                        <button className="courseOutlineBtn" onClick={() => setShowForm(false)}>
                            Cancel
                        </button>
                        <button className="courseSaveBtn">Save</button>
                    </div>
                </div>
            )}

            {/* Listing Card Section */}
            <div className="courseListCard">
                <div className="courseListHeader">
                    <h3>Course List</h3>
                    <input
                        type="text"
                        className="courseSearchInput"
                        placeholder="Search course..."
                    />
                </div>

                <table className="courseTable">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Course</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>React</td>
                            <td>
                                <button className="courseEditBtn">Edit</button>
                                <button className="courseDeleteBtn">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Python</td>
                            <td>
                                <button className="courseEditBtn">Edit</button>
                                <button className="courseDeleteBtn">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Category;