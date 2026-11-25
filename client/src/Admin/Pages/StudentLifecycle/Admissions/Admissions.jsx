import React, { useState } from 'react';
import './Admissions.css';

const Admissions = () => {
    const [showForm, setShowForm] = useState(false);
    const [educationType, setEducationType] = useState('College');
    const [photoName, setPhotoName] = useState('');
    const [signatureName, setSignatureName] = useState('');

    const handleReset = () => {
        setEducationType('College');
        setPhotoName('');
        setSignatureName('');
    };

    return (
        <div className="admPage">
            {/* Header Section with Add Button on Same Level */}
            <div className="admHeader">
                <div>
                    <h2>Admissions</h2>
                    <p>Manage records and associated workflows.</p>
                </div>

                <button
                    type="button"
                    className="admAddBtn"
                    onClick={() => setShowForm(true)}
                >
                    + Add New
                </button>
            </div>

            {/* Form Section */}
            {showForm && (
                <form className="admFormCard" onReset={handleReset}>
                    <p className="admRequiredNote">Fields marked * are required.</p>

                    <div className="admFormGrid">
                        <div className="admFormGroup">
                            <label>Photo</label>
                            <div className="admFileBox">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setPhotoName(e.target.files?.[0]?.name || '')
                                    }
                                />
                            </div>
                            <span className="admHelperText">
                                {photoName
                                    ? `Selected: ${photoName}`
                                    : 'Choose a file (filename is stored in this offline demo)'}
                            </span>
                        </div>

                        <div className="admFormGroup">
                            <label>Registration Number</label>
                            <input type="text" placeholder="Registration Number" />
                        </div>

                        <div className="admFormGroup">
                            <label>Name *</label>
                            <input type="text" placeholder="Name" required />
                        </div>

                        <div className="admFormGroup">
                            <label>Category</label>
                            <select defaultValue="Project">
                                <option value="">Choose Category</option>
                                <option value="Project">Project</option>
                                <option value="Course">Course</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        <div className="admFormGroup">
                            <label>Batch Type</label>
                            <select defaultValue="Individual">
                                <option value="Individual">Individual</option>
                                <option value="Batch">Batch</option>
                            </select>
                        </div>

                        <div className="admFormGroup">
                            <label>Technology</label>
                            <select defaultValue="">
                                <option value="">Choose Technology</option>
                                <option value="React">React</option>
                                <option value="Node.js">Node.js</option>
                                <option value="Python">Python</option>
                            </select>
                        </div>

                        <div className="admFormGroup">
                            <label>Date of Birth</label>
                            <input type="date" />
                        </div>

                        <div className="admFormGroup">
                            <label>Gender</label>
                            <select defaultValue="">
                                <option value="">Choose Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="admFormGroup">
                            <label>Parent Name</label>
                            <input type="text" placeholder="Parent Name" />
                        </div>

                        <div className="admFormGroup">
                            <label>Phone</label>
                            <input type="tel" placeholder="Phone" />
                        </div>

                        <div className="admFormGroup">
                            <label>Alternate Phone</label>
                            <input type="tel" placeholder="Alternate Phone" />
                        </div>
                    </div>

                    <div className="admFormGroup admFullWidth">
                        <label>Address</label>
                        <textarea rows="2" placeholder="Enter address" />
                    </div>

                    <div className="admFormGrid">
                        <div className="admFormGroup">
                            <label>Pincode</label>
                            <input type="text" placeholder="Pincode" />
                        </div>

                        <div className="admFormGroup">
                            <label>Signature</label>
                            <div className="admFileBox">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setSignatureName(e.target.files?.[0]?.name || '')
                                    }
                                />
                            </div>
                            <span className="admHelperText">
                                {signatureName
                                    ? `Selected: ${signatureName}`
                                    : 'Choose a file (filename is stored in this offline demo)'}
                            </span>
                        </div>

                        <div className="admFormGroup">
                            <label>Admission Date</label>
                            <input type="date" defaultValue="2026-11-25" />
                        </div>
                    </div>

                    {/* Education Type Radio Group */}
                    <div className="admFormGroup admFullWidth">
                        <label>Education Type</label>
                        <div className="admRadioBox">
                            <label className="admRadioLabel">
                                <input
                                    type="radio"
                                    name="educationType"
                                    value="College"
                                    checked={educationType === 'College'}
                                    onChange={(e) => setEducationType(e.target.value)}
                                />
                                College
                            </label>

                            <label className="admRadioLabel">
                                <input
                                    type="radio"
                                    name="educationType"
                                    value="School"
                                    checked={educationType === 'School'}
                                    onChange={(e) => setEducationType(e.target.value)}
                                />
                                School
                            </label>

                            <label className="admRadioLabel">
                                <input
                                    type="radio"
                                    name="educationType"
                                    value="Other"
                                    checked={educationType === 'Other'}
                                    onChange={(e) => setEducationType(e.target.value)}
                                />
                                Other
                            </label>
                        </div>
                    </div>

                    {/* Dynamic Fields Based on Selected Education Type */}
                    {educationType === 'College' && (
                        <>
                            <div className="admFormGrid">
                                <div className="admFormGroup">
                                    <label>College Name</label>
                                    <select defaultValue="">
                                        <option value="">Choose College Name</option>
                                        <option value="College 1">College 1</option>
                                        <option value="College 2">College 2</option>
                                    </select>
                                </div>

                                <div className="admFormGroup">
                                    <label>Programme</label>
                                    <select defaultValue="">
                                        <option value="">Choose Programme</option>
                                        <option value="B.Tech">B.Tech</option>
                                        <option value="B.Sc">B.Sc</option>
                                        <option value="BCA">BCA</option>
                                    </select>
                                </div>
                            </div>

                            <div className="admFormGrid">
                                <div className="admFormGroup">
                                    <label>Specialization</label>
                                    <select defaultValue="">
                                        <option value="">Choose Specialization</option>
                                        <option value="Computer Science">Computer Science</option>
                                        <option value="AI & Data Science">AI & Data Science</option>
                                        <option value="Information Technology">Information Technology</option>
                                    </select>
                                </div>
                            </div>
                        </>
                    )}

                    {educationType === 'School' && (
                        <div className="admFormGrid">
                            <div className="admFormGroup">
                                <label>School Name</label>
                                <input type="text" placeholder="School Name" />
                            </div>

                            <div className="admFormGroup">
                                <label>Class</label>
                                <input type="text" placeholder="Class" />
                            </div>
                        </div>
                    )}

                    {educationType === 'Other' && (
                        <div className="admFormGrid">
                            <div className="admFormGroup">
                                <label>Qualification</label>
                                <input type="text" placeholder="Qualification" />
                            </div>
                        </div>
                    )}

                    <div className="admFormActions">
                        <button type="reset" className="admOutlineBtn">
                            Reset
                        </button>
                        <button
                            type="button"
                            className="admOutlineBtn"
                            onClick={() => setShowForm(false)}
                        >
                            Cancel
                        </button>
                        <button type="button" className="admSaveBtn">
                            Save
                        </button>
                    </div>
                </form>
            )}

            {/* Listing Card Section */}
            <div className="admListCard">
                <div className="admListHeader">
                    <h3>Admissions List</h3>

                    <input
                        type="text"
                        className="admSearchInput"
                        placeholder="Search admissions..."
                    />

                    <select className="admFilterSelect" defaultValue="">
                        <option value="">All Category</option>
                        <option value="Project">Project</option>
                        <option value="Course">Course</option>
                        <option value="Internship">Internship</option>
                    </select>

                    <select className="admFilterSelect" defaultValue="">
                        <option value="">All Batch Type</option>
                        <option value="Individual">Individual</option>
                        <option value="Batch">Batch</option>
                    </select>

                    <select className="admFilterSelect" defaultValue="">
                        <option value="">All Education Type</option>
                        <option value="College">College</option>
                        <option value="School">School</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <table className="admTable">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Registration Number</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Batch Type</th>
                            <th>Batch ID</th>
                            <th>Admission Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>REG-2026-0001</td>
                            <td>Akhil N</td>
                            <td>Course</td>
                            <td>Individual</td>
                            <td>BAT-2026-0001</td>
                            <td>10 Oct 2026</td>
                            <td className="admActionCell">
                                <button type="button" className="admEditBtn">
                                    Edit
                                </button>
                                <button type="button" className="admDeleteBtn">
                                    Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>REG-2026-0002</td>
                            <td>Divya R</td>
                            <td>Project</td>
                            <td>Individual</td>
                            <td>BAT-2026-0002</td>
                            <td>11 Oct 2026</td>
                            <td className="admActionCell">
                                <button type="button" className="admEditBtn">
                                    Edit
                                </button>
                                <button type="button" className="admDeleteBtn">
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

export default Admissions;