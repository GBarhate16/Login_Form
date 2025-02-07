import React, { useState } from 'react';
import './FeedbackForm.css';

  const FeedbackForm = () => {
    const [formData, setFormData] = useState({
      technicalSkills: '',
      problemSolving: '',
      communicationSkills: '',
      culturalFit: '',
      additionalComments: '',
      draftSaved: false,
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSaveDraft = () => {
      setFormData({ ...formData, draftSaved: true });
      alert('Draft saved successfully!');
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.technicalSkills && formData.problemSolving && 
          formData.communicationSkills && formData.culturalFit) {
        alert('Feedback submitted successfully!');
        // Here you would send the formData to the backend
      } else {
        alert('Please fill in all required fields.');
      }
    };

    return (
      <div className="feedback-page">
        <div className="feedback-container">
          <form onSubmit={handleSubmit} className="feedback-form">
            <h2>Feedback Form</h2>
          
            <div className="form-group">
              <label>Technical Skills (1-5):</label>
              <input 
                type="number" 
                name="technicalSkills" 
                min="1" 
                max="5" 
                value={formData.technicalSkills} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Problem-solving Ability (1-5):</label>
              <input 
                type="number" 
                name="problemSolving" 
                min="1" 
                max="5" 
                value={formData.problemSolving} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Communication Skills (1-5):</label>
              <input 
                type="number" 
                name="communicationSkills" 
                min="1" 
                max="5" 
                value={formData.communicationSkills} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Cultural Fit (1-5):</label>
              <input 
                type="number" 
                name="culturalFit" 
                min="1" 
                max="5" 
                value={formData.culturalFit} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Additional Comments:</label>
              <textarea 
                name="additionalComments" 
                value={formData.additionalComments} 
                onChange={handleChange}
                rows="4"
              />
            </div>

            <div className="button-group">
              <button type="button" onClick={handleSaveDraft} className="draft-btn">
                Save Draft
              </button>
              <button type="submit" className="submit-btn">
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default FeedbackForm;
