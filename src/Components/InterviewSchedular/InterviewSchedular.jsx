import React, { useState } from 'react';
import './InterviewSchedular.css';

const InterviewScheduler = () => {
    const [formData, setFormData] = useState({
        candidateName: '',
        candidateEmail: '',
        candidatePhone: '',
        jobTitle: '',
        jobDescription: '',
        interviewDate: '',
        interviewTime: '',
        interviewMode: 'online',
        interviewerEmail: '',
        additionalNotes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Interview Details:', formData);
    };

    return (
        <div className="main-container">
            <div className="form-container">
                <h1>Schedule Interview</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-section">
                        <h2>Candidate Details</h2>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Full Name"
                                name="candidateName"
                                value={formData.candidateName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                name="candidateEmail"
                                value={formData.candidateEmail}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                name="candidatePhone"
                                value={formData.candidatePhone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-section">
                        <h2>Job Information</h2>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Job Title"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                placeholder="Job Description"
                                name="jobDescription"
                                value={formData.jobDescription}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-section">
                        <h2>Interview Details</h2>
                        <div className="input-group">
                            <input
                                type="date"
                                name="interviewDate"
                                value={formData.interviewDate}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="time"
                                name="interviewTime"
                                value={formData.interviewTime}
                                onChange={handleChange}
                                required
                            />
                            <select
                                name="interviewMode"
                                value={formData.interviewMode}
                                onChange={handleChange}
                                required
                            >
                                <option value="online">Online Interview</option>
                                <option value="in-person">In-Person Interview</option>
                            </select>
                            <input
                                type="email"
                                placeholder="Interviewer's Email"
                                name="interviewerEmail"
                                value={formData.interviewerEmail}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                placeholder="Additional Notes"
                                name="additionalNotes"
                                value={formData.additionalNotes}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">
                        Schedule Interview
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InterviewScheduler;
