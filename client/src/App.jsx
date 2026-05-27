import React, { useState, useEffect } from 'react';
import { Printer } from 'lucide-react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';

function App() {
  const [resumeData, setResumeData] = useState({
    personal: {
      name: '',
      email: '',
      phone: '',
      location: '',
      website: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: []
  });

  // Load from localStorage on initial render
  useEffect(() => {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      try {
        setResumeData(JSON.parse(savedData));
      } catch (e) {
        console.error('Failed to parse saved resume data');
      }
    } else {
      // Add initial empty fields if no data
      setResumeData(prev => ({
        ...prev,
        experience: [{ id: 1, company: '', role: '', startDate: '', endDate: '', description: '' }],
        education: [{ id: 1, school: '', degree: '', year: '' }]
      }));
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const handlePrint = () => {
    window.print();
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all data?')) {
      const resetData = {
        personal: { name: '', email: '', phone: '', location: '', website: '', summary: '' },
        experience: [{ id: 1, company: '', role: '', startDate: '', endDate: '', description: '' }],
        education: [{ id: 1, school: '', degree: '', year: '' }],
        skills: []
      };
      setResumeData(resetData);
      localStorage.setItem('resumeData', JSON.stringify(resetData));
    }
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="header">
          <h1>Resume Maker</h1>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn btn-secondary" onClick={handleClear}>Clear</button>
            <button className="btn btn-primary" onClick={handlePrint}>
              <Printer size={18} /> Print / PDF
            </button>
          </div>
        </div>
        <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
      </div>
      
      <ResumePreview resumeData={resumeData} />
    </div>
  );
}

export default App;
