// src/components/LandingPage.js
import React from 'react';

function LandingPage({ onNavigate }) {
  return (
    <div className="landing-page">
      <h1>Welcome to TREEING</h1>
      <img src="logo.png" alt="Tree Logo" className="logo" />
      <button onClick={() => onNavigate('fileRenaming')}>Google Drive File Renaming →</button>
      <button onClick={() => onNavigate('fileClassification')}>Google Drive File Classification →</button>
    </div>
  );
}

export default LandingPage;
