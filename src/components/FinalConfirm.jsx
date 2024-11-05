import { useState } from 'react';
import PropTypes from 'prop-types';

// Pencil Icon Component
const PencilIcon = ({ onClick }) => (
  <span onClick={onClick} style={{ cursor: 'pointer', marginLeft: '8px' }}>
    ✏️ 
  </span>
);

// PropTypes validation for PencilIcon
PencilIcon.propTypes = {
  onClick: PropTypes.func.isRequired, // onClick is a required function
};

function FinalConfirm({ onNavigate }) {
  // State to manage the list of files
  const [files, setFiles] = useState([
    { id: 1, name: 'Robot_Display_Setup'}, 
    { id: 2, name: 'KMLA_OnlineDB_Diagram'},
    // Add more items if needed
  ]);

  // State to manage the currently editing file
  const [editingFileId, setEditingFileId] = useState(null);
  const [newFileName, setNewFileName] = useState('');

  // Function to handle file name edit
  const handleEditClick = (file) => {
    setEditingFileId(file.id);
    setNewFileName(file.name);
  };

  // Function to save the new file name
  const handleSaveClick = (fileId) => {
    setFiles(files.map(file =>
      file.id === fileId ? { ...file, name: newFileName } : file
    ));
    setEditingFileId(null); // Exit editing mode
    setNewFileName(''); // Clear input
  };

  return (
    <div className="final-confirm">
      <h2>Final Confirm</h2>
      <table className="file-list">
        <thead>
          <tr>
            <th>File Name</th>
            <th>File Preview</th>
          </tr>
        </thead>
        <tbody>
          {files.map(file => (
            <tr key={file.id}>
              <td>
                {editingFileId === file.id ? (
                  <input
                    type="text"
                    value={newFileName}
                    onChange={(e) => setNewFileName(e.target.value)}
                    onBlur={() => handleSaveClick(file.id)} // Save on blur
                    onKeyPress={(e) => e.key === 'Enter' && handleSaveClick(file.id)} // Save on Enter key
                  />
                ) : (
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    {file.name}
                    <PencilIcon onClick={() => handleEditClick(file)} />
                  </span>
                )}
              </td>
              <td>
                <img alt={file.name}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => onNavigate('successPage')}>Final Confirm</button>
    </div>
  );
}

// PropTypes validation for FinalConfirm
FinalConfirm.propTypes = {
  onNavigate: PropTypes.func.isRequired, // onNavigate is a required function
};

export default FinalConfirm;
