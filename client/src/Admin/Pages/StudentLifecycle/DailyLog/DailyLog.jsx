import React, { useState } from 'react';
import './DailyLog.css';

const STUDENT_BATCH_MAP = {
    'Akhil N': 'BAT-2026-0001',
    'Divya R': 'BAT-2026-0002',
    'Jishnu P': 'BAT-2026-0003',
    'Manu K': 'BAT-2026-0004',
    'Tina S': 'BAT-2026-0005',
    'Anjana V': 'BAT-2026-0006',
};

const DailyLog = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [batchCode, setBatchCode] = useState('');

    const handleStudentChange = (e) => {
        const studentName = e.target.value;
        setSelectedStudent(studentName);
        setBatchCode(STUDENT_BATCH_MAP[studentName] || '');
    };

    const handleReset = () => {
        setSelectedStudent('');
        setBatchCode('');
    };

    const logs = [
        {
            id: 1,
            studentName: 'Akhil N',
            batchCode: 'BAT-2026-0001',
            date: '25 Nov 2026',
            inTime: '09:30',
            outTime: '16:45',
            remarks: 'Completed scheduled activities',
            progress: 75,
        },
        {
            id: 2,
            studentName: 'Divya R',
            batchCode: 'BAT-2026-0002',
            date: '25 Nov 2026',
            inTime: '',
            outTime: '',
            remarks: '',
            progress: 0,
        },
        {
            id: 3,
            studentName: 'Jishnu P',
            batchCode: 'BAT-2026-0003',
            date: '25 Nov 2026',
            inTime: '',
            outTime: '',
            remarks: '',
            progress: 0,
        },
        {
            id: 4,
            studentName: 'Manu K',
            batchCode: 'BAT-2026-0004',
            date: '25 Nov 2026',
            inTime: '',
            outTime: '',
            remarks: '',
            progress: 0,
        },
        {
            id: 5,
            studentName: 'Tina S',
            batchCode: 'BAT-2026-0005',
            date: '25 Nov 2026',
            inTime: '',
            outTime: '',
            remarks: '',
            progress: 0,
        },
        {
            id: 6,
            studentName: 'Anjana V',
            batchCode: 'BAT-2026-0006',
            date: '25 Nov 2026',
            inTime: '',
            outTime: '',
            remarks: '',
            progress: 0,
        },
    ];

    return (
        <div className="dlgPage">
            {/* Header Section */}
            <div className="dlgHeader">
                <div>
                    <h2>Daily Log</h2>
                    <p>Student attendance and daily time records.</p>
                </div>
            </div>

            {/* Form Section */}
            {showForm && (
                <form className="dlgFormCard" onReset={handleReset}>
                    <p className="dlgRequiredNote">Fields marked * are required.</p>

                    <div className="dlgFormGrid">
                        <div className="dlgFormGroup">
                            <label>Date</label>
                            <input type="date" defaultValue="2026-11-25" />
                        </div>

                        <div className="dlgFormGroup">
                            <label>Student Name *</label>
                            <select value={selectedStudent} onChange={handleStudentChange} required>
                                <option value="">Choose Student Name</option>
                                {Object.keys(STUDENT_BATCH_MAP).map((student) => (
                                    <option key={student} value={student}>
                                        {student}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="dlgFormGroup">
                            <label>Batch Code</label>
                            <input type="text" value={batchCode} onChange={(e) => setBatchCode(e.target.value)} readOnly/>
                        </div>

                        <div className="dlgFormGroup">
                            <label>In Time</label>
                            <input type="time" />
                        </div>

                        <div className="dlgFormGroup">
                            <label>Out Time</label>
                            <input type="time" />
                        </div>
                    </div>

                    <div className="dlgFormGroup dlgFullWidth">
                        <label>Remarks</label>
                        <textarea rows="2" placeholder="Enter remarks" />
                    </div>

                    <div className="dlgFormGrid">
                        <div className="dlgFormGroup">
                            <label>Progress (%)</label>
                            <input type="number" min="0" max="100" placeholder="Progress (%)"/>
                        </div>
                    </div>

                    <p className="dlgHelperNote">
                        Batch Code is populated automatically from the selected student.
                    </p>

                    <div className="dlgFormActions">
                        <button type="reset" className="dlgOutlineBtn">
                            Reset
                        </button>
                        <button type="button" className="dlgOutlineBtn" onClick={() => setShowForm(false)}>
                            Cancel
                        </button>
                        <button type="button" className="dlgSaveBtn">
                            Save
                        </button>
                    </div>
                </form>
            )}

            {/* Listing Card Section */}
            <div className="dlgListCard">
                <div className="dlgListHeader">
                    <div className="dlgListLeft">
                        <h3>Daily Log List</h3>

                        <input type="text" className="dlgSearchInput" placeholder="Search daily log..."/>

                        <input type="date" className="dlgDateFilter" defaultValue="2026-11-25"/>
                    </div>

                    <button type="button" className="dlgSaveBtn" onClick={() => setShowForm(true)}>
                        + Add New
                    </button>
                </div>

                <table className="dlgTable">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Batch Code</th>
                            <th>Date</th>
                            <th>In Time</th>
                            <th>Out Time</th>
                            <th>Remarks</th>
                            <th>Progress</th>
                        </tr>
                    </thead>

                    <tbody>
                        {logs.map((row) => (
                            <tr key={row.id}>
                                <td>{row.studentName}</td>
                                <td>{row.batchCode}</td>
                                <td>{row.date}</td>
                                <td>{row.inTime}</td>
                                <td>{row.outTime}</td>
                                <td>{row.remarks}</td>
                                <td>
                                    <div className="dlgProgressCell">
                                        <div className="dlgProgressTrack">
                                            <div
                                                className="dlgProgressFill"
                                                style={{ width: `${row.progress}%` }}
                                            />
                                        </div>
                                        <span className="dlgProgressText">{row.progress}%</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="dlgFooter">
                    <span>Showing 1–6 of 8 records</span>

                    <div className="dlgPagination">
                        <button type="button" className="dlgPageBtn" disabled>
                            Previous
                        </button>
                        <span>Page 1 / 2</span>
                        <button type="button" className="dlgPageBtnActive">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyLog;