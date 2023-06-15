import React, { useState } from 'react';
import './App.css';

function App() {
  const [isButtonOn, setIsButtonOn] = useState(false);
  const [profileSummary, setProfileSummary] = useState('Profile Summary');
  const [summerInternshipExperience, setSummerInternshipExperience] = useState('Summer Internship Experience');
  const [workExperience, setWorkExperience] = useState('Work Experience');
  const [projects, setProjects] = useState('Projects');
  const [certifications, setCertifications] = useState('Certifications');
  const [leadershipPositions, setLeadershipPositions] = useState('Leadership Positions');
  const [extracurricular, setExtracurricular] = useState('Extracurricular');
  const [education, setEducation] = useState('Education');
  const [editedSummary, setEditedSummary] = useState('');
  const [editedSummerInternshipExperience, setEditedSummerInternshipExperience] = useState('');
  const [editedWorkExperience, setEditedWorkExperience] = useState('');
  const [editedProjects, setEditedProjects] = useState('');
  const [editedCertifications, setEditedCertifications] = useState('');
  const [editedLeadershipPositions, setEditedLeadershipPositions] = useState('');
  const [editedExtracurricular, setEditedExtracurricular] = useState('');
  const [editedEducation, setEditedEducation] = useState('');
  const [isSectionEnabled, setIsSectionEnabled] = useState(true);

  const handleToggleEdit = () => {
    setIsButtonOn(!isButtonOn);
  };

  const handleProfileSummaryChange = (event) => {
    setEditedSummary(event.target.value);
  };

  const handleSummerInternshipExperienceChange = (event) => {
    setEditedSummerInternshipExperience(event.target.value);
  };

  const handleWorkExperienceChange = (event) => {
    setEditedWorkExperience(event.target.value);
  };

  const handleProjectsChange = (event) => {
    setEditedProjects(event.target.value);
  };

  const handleCertificationsChange = (event) => {
    setEditedCertifications(event.target.value);
  };

  const handleLeadershipPositionsChange = (event) => {
    setEditedLeadershipPositions(event.target.value);
  };

  const handleExtracurricularChange = (event) => {
    setEditedExtracurricular(event.target.value);
  };

  const handleEducationChange = (event) => {
    setEditedEducation(event.target.value);
  };

  const handleSaveChanges = () => {
    setProfileSummary(editedSummary);
    setSummerInternshipExperience(editedSummerInternshipExperience);
    setWorkExperience(editedWorkExperience);
    setProjects(editedProjects);
    setCertifications(editedCertifications);
    setLeadershipPositions(editedLeadershipPositions);
    setExtracurricular(editedExtracurricular);
    setEducation(editedEducation);
    setIsButtonOn(false);
  };

  const handleToggleSection = () => {
    setIsSectionEnabled(!isSectionEnabled);
  };

  const handleDragStart = (event, field) => {
    event.dataTransfer.setData('text/plain', field);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, field) => {
    event.preventDefault();
    const droppedItem = event.dataTransfer.getData('text/plain');
    if (droppedItem === 'button=') {
      // Swap the dropped button with the "=" button or perform any desired logic
      console.log('Button swapped!');
    } else if (droppedItem === 'profileSummary') {
      setProfileSummary(field);
    } else if (droppedItem === 'summerInternshipExperience') {
      setSummerInternshipExperience(field);
    } else if (droppedItem === 'workExperience') {
      setWorkExperience(field);
    } else if (droppedItem === 'projects') {
      setProjects(field);
    } else if (droppedItem === 'certifications') {
      setCertifications(field);
    } else if (droppedItem === 'leadershipPositions') {
      setLeadershipPositions(field);
    } else if (droppedItem === 'extracurricular') {
      setExtracurricular(field);
    } else if (droppedItem === 'education') {
      setEducation(field);
    }
  };

  return (
    <div>
      <div className="container">
        <h1 className="title">Select your sections</h1>
      </div>
      <div className="section">
        <button
          className="button"
          draggable
          onDragStart={(event) => handleDragStart(event, 'profileSummary')}
        >
          =
        </button>
        <button
          className="button"
          draggable
          onDragStart={(event) => handleDragStart(event, 'summerInternshipExperience')}
        >
          i
        </button>
        {isButtonOn ? (
          <>
            <input
              type="text"
              value={editedSummary}
              onChange={handleProfileSummaryChange}
            />
            <button className="button" onClick={handleSaveChanges}>
              Save
            </button>
          </>
        ) : (
          <>
            {isSectionEnabled ? (
              <span className="text">{profileSummary}</span>
            ) : (
              <span className="text disabled">Profile Summary</span>
            )}
            <button className="button" onClick={handleToggleEdit}>
              Edit
            </button>
          </>
        )}
        <button className={`slidebutton ${isSectionEnabled ? 'active' : ''}`} onClick={handleToggleSection}>
          {isSectionEnabled ? '+' : '-'}
        </button>
      </div>

      <div
        className="section"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 'Summer Internship Experience')}
      >
        <button
          className="button"
          draggable
          onDragStart={(event) => handleDragStart(event, 'summerInternshipExperience')}
        >
          =
        </button>
        <button
          className="button"
          draggable
          onDragStart={(event) => handleDragStart(event, 'profileSummary')}
        >
          i
        </button>
        {isButtonOn ? (
          <>
            <input
              type="text"
              value={editedSummerInternshipExperience}
              onChange={handleSummerInternshipExperienceChange}
            />
            <button className="button" onClick={handleSaveChanges}>
              Save
            </button>
          </>
        ) : (
          <>
            {isSectionEnabled ? (
              <span className="text">{summerInternshipExperience}</span>
            ) : (
              <span className="text disabled">Summer Internship Experience</span>
            )}
            <button className="button" onClick={handleToggleEdit}>
              Edit
            </button>
          </>
        )}
        <button className={`slidebutton ${isSectionEnabled ? 'active' : ''}`} onClick={handleToggleSection}>
          {isSectionEnabled ? '+' : '-'}
        </button>
      </div>

      <div
        className="section"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 'Work Experience')}
      >
        <button
          className="button"
          draggable
          onDragStart={(event) => handleDragStart(event, 'workExperience')}
        >
          =
        </button>
        <button
          className="button"
          draggable
          onDragStart={(event) => handleDragStart(event, 'profileSummary')}
        >
          i
        </button>
        {isButtonOn ? (
          <>
            <input
              type="text"
              value={editedWorkExperience}
              onChange={handleWorkExperienceChange}
            />
            <button className="button" onClick={handleSaveChanges}>
              Save
            </button>
          </>
        ) : (
          <>
            {isSectionEnabled ? (
              <span className="text">{workExperience}</span>
            ) : (
              <span className="text disabled">Work Experience</span>
            )}
            <button className="button" onClick={handleToggleEdit}>
              Edit
            </button>
          </>
        )}
        <button className={`slidebutton ${isSectionEnabled ? 'active' : ''}`} onClick={handleToggleSection}>
          {isSectionEnabled ? '+' : '-'}
        </button>
      </div>

      <div
        className="section"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 'Projects')}
      >
        <button
          className="button"
          draggable
          onDragStart={(event) => handleDragStart(event, 'projects')}
        >
          =
        </button>
        <button
          className="button"
          draggable
          onDragStart={(event) => handleDragStart(event, 'profileSummary')}
        >
          i
        </button>
        {isButtonOn ? (
          <>
            <input
              type="text"
              value={editedProjects}
              onChange={handleProjectsChange}
            />
            <button className="button" onClick={handleSaveChanges}>
              Save
            </button>
          </>
        ) : (
          <>
            {isSectionEnabled ? (
              <span className="text">{projects}</span>
            ) : (
              <span className="text disabled">Projects</span>
            )}
            <button className="button" onClick={handleToggleEdit}>
              Edit
            </button>
          </>
        )}
        <button className={`slidebutton ${isSectionEnabled ? 'active' : ''}`} onClick={handleToggleSection}>
          {isSectionEnabled ? '+' : '-'}
        </button>
      </div>

      <div
        className="section"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 'Certifications')}
      >
        <button
          className="button"
          draggable
          onDragStart={(event) => handleDragStart(event, 'certifications')}
        >
          =
        </button>
        <button
          className="button"
          draggable
          onDragStart={(event) => handleDragStart(event, 'profileSummary')}
        >
          i
        </button>
        {isButtonOn ? (
          <>
            <input
              type="text"
              value={editedCertifications}
              onChange={handleCertificationsChange}
            />
            <button className="button" onClick={handleSaveChanges}>
              Save
            </button>
          </>
        ) : (
          <>
            {isSectionEnabled ? (
              <span className="text">{certifications}</span>
            ) : (
              <span className="text disabled">Certifications</span>
            )}
            <button className="button" onClick={handleToggleEdit}>
              Edit
            </button>
          </>
        )}
        <button className={`slidebutton ${isSectionEnabled ? 'active' : ''}`} onClick={handleToggleSection}>
          {isSectionEnabled ? '+' : '-'}
        </button>
      </div>

      <div
        className="section"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 'Leadership Positions')}
      >
        <button
          className="button"
          draggable
          onDragStart={(event) => handleDragStart(event, 'leadershipPositions')}
        >
          =
        </button>
        <button
          className="button"
          draggable
          onDragStart={(event) => handleDragStart(event, 'profileSummary')}
        >
          i
        </button>
        {isButtonOn ? (
          <>
            <input
              type="text"
              value={editedLeadershipPositions}
              onChange={handleLeadershipPositionsChange}
            />
            <button className="button" onClick={handleSaveChanges}>
              Save
            </button>
          </>
        ) : (
          <>
            {isSectionEnabled ? (
              <span className="text">{leadershipPositions}</span>
            ) : (
              <span className="text disabled">Leadership Positions</span>
            )}
            <button className="button" onClick={handleToggleEdit}>
              Edit
            </button>
          </>
        )}
        <button className={`slidebutton ${isSectionEnabled ? 'active' : ''}`} onClick={handleToggleSection}>
          {isSectionEnabled ? '+' : '-'}
        </button>
      </div>

      <div
        className="section"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 'Extracurricular')}
      >
        <button
          className="button"
          draggable
          onDragStart={(event) => handleDragStart(event, 'extracurricular')}
        >
          =
        </button>
        <button
          className="button"
          draggable
          onDragStart={(event) => handleDragStart(event, 'profileSummary')}
        >
          i
        </button>
        {isButtonOn ? (
          <>
            <input
              type="text"
              value={editedExtracurricular}
              onChange={handleExtracurricularChange}
            />
            <button className="button" onClick={handleSaveChanges}>
              Save
            </button>
          </>
        ) : (
          <>
            {isSectionEnabled ? (
              <span className="text">{extracurricular}</span>
            ) : (
              <span className="text disabled">Extracurricular</span>
            )}
            <button className="button" onClick={handleToggleEdit}>
              Edit
            </button>
          </>
        )}
        <button className={`slidebutton ${isSectionEnabled ? 'active' : ''}`} onClick={handleToggleSection}>
          {isSectionEnabled ? '+' : '-'}
        </button>
      </div>

      <div
        className="section"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 'Education')}
      >
        <button
          className="button"
          draggable
          onDragStart={(event) => handleDragStart(event, 'education')}
        >
          =
        </button>
        <button
          className="button"
          draggable
          onDragStart={(event) => handleDragStart(event, 'profileSummary')}
        >
          i
        </button>
        {isButtonOn ? (
          <>
            <input
              type="text"
              value={editedEducation}
              onChange={handleEducationChange}
            />
            <button className="button" onClick={handleSaveChanges}>
              Save
            </button>
          </>
        ) : (
          <>
            {isSectionEnabled ? (
              <span className="text">{education}</span>
            ) : (
              <span className="text disabled">Education</span>
            )}
            <button className="button" onClick={handleToggleEdit}>
              Edit
            </button>
          </>
        )}
        <button className={`slidebutton ${isSectionEnabled ? 'active' : ''}`} onClick={handleToggleSection}>
          {isSectionEnabled ? '+' : '-'}
        </button>
      </div>
    </div>
  );
};

export default App;