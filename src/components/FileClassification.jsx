// src/components/FileClassification.js

import PropTypes from 'prop-types';

function FileClassification({ onNavigate }) {
  return (
    <div className="file-classification">
      <h2>Selected Files</h2>
      <div className="selected-files">
        <div className="file-item">Robot_Display_Setup <span className="remove-btn">x</span></div>
        <div className="file-item">KMLA_OnlineDB_Diagram <span className="remove-btn">x</span></div>
        {/* Add more file items as needed */}
      </div>
      <button onClick={() => onNavigate('landing')}>Start Auto Classification</button>
    </div>
  );
}

// PropTypes validation
FileClassification.propTypes = {
  onNavigate: PropTypes.func.isRequired, // onNavigate is a required function
};

export default FileClassification;
