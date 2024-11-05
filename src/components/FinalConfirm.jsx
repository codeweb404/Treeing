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
  const [files, setFiles] = useState([
    { id: 1, name: 'Robot_Display_Setup', preview: 'IMG_5543.jpg' },
    { id: 2, name: 'KMLA_OnlineDB_Diagram', preview: 'IMG_5974.jpg' },
    { id: 3, name: 'Graduation Photo 2022', preview: 'IMG_6832.jpg' },
    { id: 4, name: 'DEFCON Brochure', preview: 'IMG_2342.jpg' },
    { id: 5, name: 'DEFCON Promo Photo', preview: 'IMG_9248.jpg' },
  ]);

  const [editingFileId, setEditingFileId] = useState(null);
  const [newFileName, setNewFileName] = useState('');

  const handleEditClick = (file) => {
    setEditingFileId(file.id);
    setNewFileName(file.name);
  };

  const handleSaveClick = (fileId) => {
    setFiles(files.map(file =>
      file.id === fileId ? { ...file, name: newFileName } : file
    ));
    setEditingFileId(null);
    setNewFileName('');
  };

  return (
    <div className="final-confirm">
      <h2>Final Confirm</h2>
      <div className="file-confirm-list">
        {files.map(file => (
          <div key={file.id} className="file-each-item">
            <div className="file-name-name">
              {editingFileId === file.id ? (
                <input
                  type="text"
                  value={newFileName}
                  onChange={(e) => setNewFileName(e.target.value)}
                  onBlur={() => handleSaveClick(file.id)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSaveClick(file.id)}
                />
              ) : (
                <span onClick={() => handleEditClick(file)}>
                  {file.name}
                </span>
              )}
              <PencilIcon onClick={() => handleEditClick(file)} />
            </div>
            <div className="file-preview">{file.preview}</div>
          </div>
        ))}
      </div>
      <button onClick={() => onNavigate('successPage')}>Final Confirm</button>
    </div>
  );
}

// PropTypes validation for FinalConfirm
FinalConfirm.propTypes = {
  onNavigate: PropTypes.func.isRequired, // onNavigate is a required function
};

export default FinalConfirm;
