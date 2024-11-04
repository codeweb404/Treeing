import { useState } from 'react';
import PropTypes from 'prop-types';

function FileClassification({ onNavigate }) {
  // State to manage the list of selected files
  const [selectedFiles, setSelectedFiles] = useState([
    { id: 1, name: 'Robot_Display_Setup' },
    { id: 2, name: 'KMLA_OnlineDB_Diagram' },
    // Add more file items as needed
  ]);

  // Function to remove a file from the list
  const handleRemove = (id) => {
    setSelectedFiles(selectedFiles.filter(file => file.id !== id));
  };

  return (
    <div className="file-classification">
      <h2>Selected Files</h2>
      <div className="selected-files">
        {selectedFiles.map(file => (
          <div className="file-item" key={file.id}>
            {file.name} <span className="remove-btn" onClick={() => handleRemove(file.id)}>x</span>
          </div>
        ))}
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
