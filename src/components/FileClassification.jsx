// src/components/FileClassification.js
import React from 'react';

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

export default FileClassification;
