// src/components/LandingPage.js

import PropTypes from 'prop-types';

function LandingPage({ onNavigate }) {
  return (
    <div className="landing-page">
      <h1>Welcome to TREEING</h1>
      <button onClick={() => onNavigate('fileRenaming')}>Google Drive File Renaming →</button>
      <button onClick={() => onNavigate('fileClassification')}>Google Drive File Classification →</button>
    </div>
  );
}

// PropTypes validation
LandingPage.propTypes = {
  onNavigate: PropTypes.func.isRequired, // onNavigate is a required function
};

export default LandingPage;
