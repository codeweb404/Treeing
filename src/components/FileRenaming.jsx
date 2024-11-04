
import PropTypes from 'prop-types';

function FileRenaming({ onNavigate }) {
  return (
    <div className="file-renaming">
      <h2>File Renaming</h2>
      <select className="file-select">
        <option>Select from Google Drive</option>
        {/* Add options dynamically if needed */}
      </select>
      <div className="selected-files">
        <div className="file-item">IMG_5543 <span className="remove-btn">x</span></div>
        <div className="file-item">IMG_5974 <span className="remove-btn">x</span></div>
        {/* Add more file items as needed */}
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
