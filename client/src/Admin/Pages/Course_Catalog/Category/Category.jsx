import React, { useState } from 'react';
import './category.css';

const Category = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="categoryPage">
            {/* Header Section */}
            <div className="categoryHeader">
                <div>
                    <h2>category</h2>
                    <p>Manage records and associated workflows.</p>
                </div>

                <button className="categoryAddBtn" onClick={() => setShowForm(true)}>
                    + Add New
                </button>
            </div>

            {/* Form Section */}
            {showForm && (
                <div className="categoryFormCard">
                    <p className="categoryRequiredNote">Fields marked * are required.</p>

                    <label>category Name *</label>
                    <input type="text" placeholder="category Name" />

                    <div className="categoryFormActions">
                        <button className="categoryOutlineBtn">Reset</button>
                        <button className="categoryOutlineBtn" onClick={() => setShowForm(false)}>
                            Cancel
                        </button>
                        <button className="categorySaveBtn">Save</button>
                    </div>
                </div>
            )}

            {/* Listing Card Section */}
            <div className="categoryListCard">
                <div className="categoryListHeader">
                    <h3>category List</h3>
                    <input
                        type="text"
                        className="categorySearchInput"
                        placeholder="Search category..."
                    />
                </div>

                <table className="categoryTable">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>React</td>
                            <td>
                                <button className="categoryEditBtn">Edit</button>
                                <button className="categoryDeleteBtn">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Python</td>
                            <td>
                                <button className="categoryEditBtn">Edit</button>
                                <button className="categoryDeleteBtn">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Category;