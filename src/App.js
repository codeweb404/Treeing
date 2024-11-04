// src/App.js
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import FileRenaming from './components/FileRenaming';
import FinalConfirm from './components/FinalConfirm';
import FileClassification from './components/FileClassification';
import './styles.css';

function App() {
  const [page, setPage] = useState('landing');

  const renderPage = () => {
    switch (page) {
      case 'landing':
        return <LandingPage onNavigate={setPage} />;
      case 'fileRenaming':
        return <FileRenaming onNavigate={setPage} />;
      case 'finalConfirm':
        return <FinalConfirm onNavigate={setPage} />;
      case 'fileClassification':
        return <FileClassification onNavigate={setPage} />;
      default:
        return <LandingPage onNavigate={setPage} />;
    }
  };

  return (
    <div className="app-container">
      {renderPage()}
    </div>
  );
}

export default App;

