
import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {

    const stats = [
        { title: 'Total Enquiries', value: 7 },
        { title: 'Total Admissions', value: 8 },
        { title: 'Total Students', value: 8 },
        { title: 'Active Batches', value: 8 },
        { title: 'Pending Follow-ups', value: 7 },
        { title: 'Total Faculty', value: 1 },
        { title: 'Total Projects', value: 2 },
        { title: 'Completed Projects', value: 0 }
    ]

    const chartData = [
        { month: 'May', value: 35 },
        { month: 'Jun', value: 55 },
        { month: 'Jul', value: 45 },
        { month: 'Aug', value: 75 },
        { month: 'Sep', value: 90 },
        { month: 'Oct', value: 68 },
        { month: 'Nov', value: 95 }
    ]

    const enquiries = [
        { name: 'Akshay S', category: 'Course', status: 'Open' },
        { name: 'Sneha Raj', category: 'Project', status: 'Open' },
        { name: 'Aswin K', category: 'Course', status: 'Open' },
        { name: 'Fathima N', category: 'Project', status: 'Open' },
        { name: 'Rahul Kumar', category: 'Course', status: 'Open' }
    ]

    const admissions = [
        { name: 'Aisha A', batch: 'BAT-2026-0008', date: '17 Oct 2026' },
        { name: 'Kevin T', batch: 'BAT-2026-0007', date: '16 Oct 2026' },
        { name: 'Anjana V', batch: 'BAT-2026-0006', date: '15 Oct 2026' },
        { name: 'Tina S', batch: 'BAT-2026-0005', date: '14 Oct 2026' },
        { name: 'Manu K', batch: 'BAT-2026-0004', date: '13 Oct 2026' }
    ]

    return (
        <div className="dashboard">

            {/* Heading */}
            <div className="dashboard-header">
                <span className="dashboard-breadcrumb">
                    OVERVIEW / OVERVIEW
                </span>

                <h1>Dashboard</h1>

                <p>
                    CRM activity, academic operations, and project management.
                </p>
            </div>

            {/* Statistics */}
            <div className="stats-grid">
                {stats.map((item, index) => (
                    <div className="stat-card" key={index}>
                        <p>{item.title}</p>
                        <h2>{item.value}</h2>
                        <span>Education CRM overview</span>
                    </div>
                ))}
            </div>

            {/* Chart and Quick Actions */}
            <div className="dashboard-grid">

                {/* Chart */}
                <div className="dashboard-card chart-card">
                    <h3>Enquiries & Admissions Overview</h3>

                    <div className="chart">
                        {chartData.map((item, index) => (
                            <div className="chart-column" key={index}>
                                <div
                                    className="chart-bar"
                                    style={{ height: `${item.value}%` }}
                                ></div>

                                <span>{item.month}</span>
                            </div>
                        ))}
                    </div>

                    <div className="chart-footer">
                        Illustrative trend for the prototype. KPI totals above
                        are derived from current records.
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="dashboard-card quick-card">

                    <h3>Quick Actions</h3>

                    <div className="quick-actions">
                        <Link to="/admin/enquiries" className="quick-btn">
                            New Enquiry
                        </Link>

                        <Link to="/admin/admissions" className="quick-btn">
                            New Admission
                        </Link>

                        <Link to="/admin/batches" className="quick-btn">
                            View Batches
                        </Link>

                        <Link to="/admin/daily-log" className="quick-btn">
                            Daily Log
                        </Link>
                    </div>

                    <div className="project-status">
                        <h3>Project Status</h3>

                        <p>
                            <span>1 accepted</span> ·
                            <span> 1 pending</span> ·
                            <span> 0 rejected</span>
                        </p>
                    </div>

                </div>

            </div>

            {/* Recent Tables */}
            <div className="dashboard-grid recent-grid">

                {/* Recent Enquiries */}
                <div className="dashboard-card table-card">

                    <div className="table-header">
                        <h3>Recent Enquiries</h3>

                        <Link to="/admin/enquiries" className="view-btn">
                            View All
                        </Link>
                    </div>

                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {enquiries.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.category}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

                {/* Recent Admissions */}
                <div className="dashboard-card table-card">

                    <div className="table-header">
                        <h3>Recent Admissions</h3>

                        <Link to="/admin/admissions" className="view-btn">
                            View All
                        </Link>
                    </div>

                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Batch ID</th>
                                    <th>Admission Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {admissions.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.batch}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Dashboard
