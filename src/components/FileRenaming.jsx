import { useState } from 'react';
import PropTypes from 'prop-types';

function FileRenaming({ onNavigate }) {
  // State to manage the list of selected files
  const [selectedFiles, setSelectedFiles] = useState([
    { id: 1, name: 'IMG_5543', file: 'IMG_5543.jpg' },
    { id: 2, name: 'IMG_5974', file: 'IMG_5974.jpg' },
    // Add more file items as needed
  ]);

  // Function to remove a file from the list
  const handleRemove = (id) => {
    setSelectedFiles(selectedFiles.filter(file => file.id !== id));
  };

  return (
    <div className="file-renaming">
      <h2>File Renaming</h2>
      <select className="file-select">
        <option>Select from Google Drive</option>
        {/* Add options dynamically if needed */}
      </select>
      <div className="selected-files">
        {selectedFiles.map(file => (
          <div className="file-item" key={file.id}>
            {file.name} <span className="remove-btn" onClick={() => handleRemove(file.id)}>x</span>
          </div>
        ))}
      </div>
      <button onClick={() => onNavigate('finalConfirm')}>Start Renaming</button>
    </div>
  );
}

// PropTypes validation
FileRenaming.propTypes = {
  onNavigate: PropTypes.func.isRequired, // onNavigate is a required function
};

export default FileRenaming;
