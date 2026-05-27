import React from 'react';

const ResumePreview = ({ resumeData }) => {
  const { personal, experience, education, skills } = resumeData;

  return (
    <div className="preview-container">
      <div className="resume-paper" id="resume-document">
        <div className="resume-header">
          <h1 className="resume-name">{personal.name || 'Your Name'}</h1>
          <div className="resume-contact">
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && (
              <>
                <span>•</span>
                <span>{personal.phone}</span>
              </>
            )}
            {personal.location && (
              <>
                <span>•</span>
                <span>{personal.location}</span>
              </>
            )}
            {personal.website && (
              <>
                <span>•</span>
                <span>{personal.website}</span>
              </>
            )}
          </div>
        </div>

        {personal.summary && (
          <div className="resume-section">
            <div className="resume-item-desc">{personal.summary}</div>
          </div>
        )}

        {experience && experience.length > 0 && (
          <div className="resume-section">
            <h2 className="resume-section-title">Experience</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="resume-item">
                <div className="resume-item-header">
                  <div className="resume-item-title">{exp.role ? exp.role : 'Job Title'}</div>
                  <div className="resume-item-date">
                    {exp.startDate ? exp.startDate : 'Start'} - {exp.endDate ? exp.endDate : 'End'}
                  </div>
                </div>
                <div className="resume-item-subtitle">{exp.company ? exp.company : 'Company Name'}</div>
                {exp.description && (
                  <div className="resume-item-desc mt-2">{exp.description}</div>
                )}
              </div>
            ))}
          </div>
        )}

        {education && education.length > 0 && (
          <div className="resume-section">
            <h2 className="resume-section-title">Education</h2>
            {education.map((edu) => (
              <div key={edu.id} className="resume-item">
                <div className="resume-item-header">
                  <div className="resume-item-title">{edu.school ? edu.school : 'School Name'}</div>
                  <div className="resume-item-date">{edu.year ? edu.year : 'Year'}</div>
                </div>
                <div className="resume-item-subtitle">{edu.degree ? edu.degree : 'Degree'}</div>
              </div>
            ))}
          </div>
        )}

        {skills && skills.length > 0 && skills[0] !== '' && (
          <div className="resume-section">
            <h2 className="resume-section-title">Skills</h2>
            <div className="resume-skills">
              {skills.map((skill, index) => (
                skill.trim() && (
                  <span key={index} className="resume-skill-tag">
                    {skill.trim()}
                  </span>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
