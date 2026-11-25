import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Enquiries.css';
import FollowUp from './FollowUp';

const Enquiries = () => {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [educationType, setEducationType] = useState('College');
    const [followUpEnquiry, setFollowUpEnquiry] = useState(null);

    if (followUpEnquiry) {
        return (
            <FollowUp
                enquiryName={followUpEnquiry}
                onBack={() => setFollowUpEnquiry(null)}
            />
        );
    }

    return (
        <div className="enqPage">
            {/* Header Section with Add Button on Same Level */}
            <div className="enqHeader">
                <div>
                    <h2>Enquiries</h2>
                    <p>Manage records and associated workflows.</p>
                </div>

                <button
                    type="button"
                    className="enqAddBtn"
                    onClick={() => setShowForm(true)}
                >
                    + Add New
                </button>
            </div>

            {/* Form Section */}
            {showForm && (
                <div className="enqFormCard">
                    <p className="enqRequiredNote">Fields marked * are required.</p>

                    <div className="enqFormGrid">
                        <div className="enqFormGroup">
                            <label>Enquiry Date</label>
                            <input type="date" defaultValue="2026-11-25" />
                        </div>

                        <div className="enqFormGroup">
                            <label>Name *</label>
                            <input type="text" placeholder="Name" />
                        </div>

                        <div className="enqFormGroup">
                            <label>Mobile Number</label>
                            <input type="text" placeholder="Mobile Number" />
                        </div>
                    </div>

                    <div className="enqFormGroup enqFullWidth">
                        <label>Address</label>
                        <textarea rows="2" placeholder="Enter address" />
                    </div>

                    <div className="enqFormGrid">
                        <div className="enqFormGroup">
                            <label>Category</label>
                            <select defaultValue="">
                                <option value="">Choose Category</option>
                                <option value="Project">Project</option>
                                <option value="Course">Course</option>
                            </select>
                        </div>
                    </div>

                    <div className="enqFormGroup enqFullWidth">
                        <label>Enquiry Details</label>
                        <textarea rows="2" placeholder="Enter enquiry details" />
                    </div>

                    <div className="enqFormGroup enqFullWidth">
                        <label>Education Type</label>
                        <div className="enqRadioBox">
                            <label className="enqRadioLabel">
                                <input
                                    type="radio"
                                    name="educationType"
                                    value="College"
                                    checked={educationType === 'College'}
                                    onChange={(e) => setEducationType(e.target.value)}
                                />
                                College
                            </label>

                            <label className="enqRadioLabel">
                                <input
                                    type="radio"
                                    name="educationType"
                                    value="School"
                                    checked={educationType === 'School'}
                                    onChange={(e) => setEducationType(e.target.value)}
                                />
                                School
                            </label>

                            <label className="enqRadioLabel">
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

                    {educationType === 'College' && (
                        <div className="enqFormGrid">
                            <div className="enqFormGroup">
                                <label>College Name</label>
                                <select defaultValue="">
                                    <option value="">Choose College Name</option>
                                    <option value="College 1">College 1</option>
                                    <option value="College 2">College 2</option>
                                </select>
                            </div>

                            <div className="enqFormGroup">
                                <label>Programme</label>
                                <select defaultValue="">
                                    <option value="">Choose Programme</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="B.Sc">B.Sc</option>
                                    <option value="BCA">BCA</option>
                                </select>
                            </div>

                            <div className="enqFormGroup">
                                <label>Specialization</label>
                                <select defaultValue="">
                                    <option value="">Choose Specialization</option>
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Information Technology">Information Technology</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {educationType === 'School' && (
                        <div className="enqFormGrid">
                            <div className="enqFormGroup">
                                <label>School Name</label>
                                <input type="text" placeholder="School Name" />
                            </div>

                            <div className="enqFormGroup">
                                <label>Class</label>
                                <input type="text" placeholder="Class" />
                            </div>
                        </div>
                    )}

                    {educationType === 'Other' && (
                        <div className="enqFormGrid">
                            <div className="enqFormGroup">
                                <label>Qualification</label>
                                <input type="text" placeholder="Qualification" />
                            </div>
                        </div>
                    )}

                    <div className="enqFormActions">
                        <button
                            type="button"
                            className="enqOutlineBtn"
                            onClick={() => setEducationType('College')}
                        >
                            Reset
                        </button>
                        <button
                            type="button"
                            className="enqOutlineBtn"
                            onClick={() => setShowForm(false)}
                        >
                            Cancel
                        </button>
                        <button type="button" className="enqSaveBtn">
                            Save
                        </button>
                    </div>
                </div>
            )}

            {/* Listing Card Section */}
            <div className="enqListCard">
                <div className="enqListHeader">
                    <h3>Enquiries List</h3>

                    <input
                        type="text"
                        className="enqSearchInput"
                        placeholder="Search enquiries..."
                    />

                    <select className="enqFilterSelect" defaultValue="">
                        <option value="">All Category</option>
                        <option value="Project">Project</option>
                        <option value="Course">Course</option>
                    </select>

                    <select className="enqFilterSelect" defaultValue="">
                        <option value="">All Status</option>
                        <option value="Open">Open</option>
                        <option value="Converted">Converted</option>
                    </select>

                    <select className="enqFilterSelect" defaultValue="">
                        <option value="">All Education Type</option>
                        <option value="College">College</option>
                        <option value="School">School</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <table className="enqTable">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Student Name</th>
                            <th>Category</th>
                            <th>Enquiry Details</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Nikhil Ravi</td>
                            <td>Project</td>
                            <td>Interested in technical training</td>
                            <td>
                                <span className="enqStatusBadge">Open</span>
                            </td>
                            <td className="enqActionCell">
                                <button type="button" className="enqEditBtn">
                                    Edit
                                </button>
                                <button type="button" className="enqDeleteBtn">
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    className="enqActionBtn"
                                    onClick={() => navigate('/admissions')}
                                >
                                    Convert to Admission
                                </button>
                                <button
                                    type="button"
                                    className="enqActionBtn"
                                    onClick={() => setFollowUpEnquiry('Nikhil Ravi')}
                                >
                                    Follow Up
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Sana Mohammed</td>
                            <td>Course</td>
                            <td>Interested in technical training</td>
                            <td>
                                <span className="enqStatusBadge">Open</span>
                            </td>
                            <td className="enqActionCell">
                                <button type="button" className="enqEditBtn">
                                    Edit
                                </button>
                                <button type="button" className="enqDeleteBtn">
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    className="enqActionBtn"
                                    onClick={() => navigate('/admissions')}
                                >
                                    Convert to Admission
                                </button>
                                <button
                                    type="button"
                                    className="enqActionBtn"
                                    onClick={() => setFollowUpEnquiry('Sana Mohammed')}
                                >
                                    Follow Up
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Enquiries;