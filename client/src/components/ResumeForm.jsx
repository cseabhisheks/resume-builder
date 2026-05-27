import React, { useState } from 'react';
import { Printer, Download, Plus, Trash2 } from 'lucide-react';

const ResumeForm = ({ resumeData, setResumeData }) => {
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setResumeData({
      ...resumeData,
      personal: { ...resumeData.personal, [name]: value }
    });
  };

  const handleExperienceChange = (id, e) => {
    const { name, value } = e.target;
    const updatedExperience = resumeData.experience.map(exp => 
      exp.id === id ? { ...exp, [name]: value } : exp
    );
    setResumeData({ ...resumeData, experience: updatedExperience });
  };

  const addExperience = () => {
    const newId = resumeData.experience.length ? Math.max(...resumeData.experience.map(e => e.id)) + 1 : 1;
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, { id: newId, company: '', role: '', startDate: '', endDate: '', description: '' }]
    });
  };

  const removeExperience = (id) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter(exp => exp.id !== id)
    });
  };

  const handleEducationChange = (id, e) => {
    const { name, value } = e.target;
    const updatedEducation = resumeData.education.map(edu => 
      edu.id === id ? { ...edu, [name]: value } : edu
    );
    setResumeData({ ...resumeData, education: updatedEducation });
  };

  const addEducation = () => {
    const newId = resumeData.education.length ? Math.max(...resumeData.education.map(e => e.id)) + 1 : 1;
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { id: newId, school: '', degree: '', year: '' }]
    });
  };

  const removeEducation = (id) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter(edu => edu.id !== id)
    });
  };

  const handleSkillsChange = (e) => {
    const skillsArray = e.target.value.split(',').map(skill => skill.trim());
    setResumeData({ ...resumeData, skills: skillsArray });
  };

  return (
    <div className="form-container">
      <div className="form-section">
        <h2>Personal Information</h2>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" value={resumeData.personal.name} onChange={handlePersonalChange} placeholder="e.g. John Doe" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={resumeData.personal.email} onChange={handlePersonalChange} placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" value={resumeData.personal.phone} onChange={handlePersonalChange} placeholder="(555) 123-4567" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Location</label>
            <input type="text" name="location" value={resumeData.personal.location} onChange={handlePersonalChange} placeholder="City, State" />
          </div>
          <div className="form-group">
            <label>Website / LinkedIn</label>
            <input type="text" name="website" value={resumeData.personal.website} onChange={handlePersonalChange} placeholder="linkedin.com/in/johndoe" />
          </div>
        </div>
        <div className="form-group">
          <label>Professional Summary</label>
          <textarea name="summary" value={resumeData.personal.summary} onChange={handlePersonalChange} placeholder="Brief summary of your professional background..."></textarea>
        </div>
      </div>

      <div className="form-section">
        <h2>Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={exp.id} className="item-card">
            <div className="item-card-header">
              <strong>Experience #{index + 1}</strong>
              <button className="btn btn-danger" onClick={() => removeExperience(exp.id)}><Trash2 size={14} /> Remove</button>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Company</label>
                <input type="text" name="company" value={exp.company} onChange={(e) => handleExperienceChange(exp.id, e)} placeholder="Company Name" />
              </div>
              <div className="form-group">
                <label>Job Title</label>
                <input type="text" name="role" value={exp.role} onChange={(e) => handleExperienceChange(exp.id, e)} placeholder="Software Engineer" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Start Date</label>
                <input type="text" name="startDate" value={exp.startDate} onChange={(e) => handleExperienceChange(exp.id, e)} placeholder="Jan 2020" />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input type="text" name="endDate" value={exp.endDate} onChange={(e) => handleExperienceChange(exp.id, e)} placeholder="Present" />
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea name="description" value={exp.description} onChange={(e) => handleExperienceChange(exp.id, e)} placeholder="Describe your responsibilities and achievements..."></textarea>
            </div>
          </div>
        ))}
        <button className="btn btn-secondary" onClick={addExperience}><Plus size={16} /> Add Experience</button>
      </div>

      <div className="form-section">
        <h2>Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={edu.id} className="item-card">
            <div className="item-card-header">
              <strong>Education #{index + 1}</strong>
              <button className="btn btn-danger" onClick={() => removeEducation(edu.id)}><Trash2 size={14} /> Remove</button>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>School / University</label>
                <input type="text" name="school" value={edu.school} onChange={(e) => handleEducationChange(edu.id, e)} placeholder="University Name" />
              </div>
              <div className="form-group">
                <label>Degree</label>
                <input type="text" name="degree" value={edu.degree} onChange={(e) => handleEducationChange(edu.id, e)} placeholder="Bachelor of Science" />
              </div>
            </div>
            <div className="form-group">
              <label>Graduation Year</label>
              <input type="text" name="year" value={edu.year} onChange={(e) => handleEducationChange(edu.id, e)} placeholder="2022" />
            </div>
          </div>
        ))}
        <button className="btn btn-secondary" onClick={addEducation}><Plus size={16} /> Add Education</button>
      </div>

      <div className="form-section">
        <h2>Skills</h2>
        <div className="form-group">
          <label>Skills (comma separated)</label>
          <input type="text" value={resumeData.skills.join(', ')} onChange={handleSkillsChange} placeholder="React, Node.js, JavaScript, HTML, CSS" />
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
