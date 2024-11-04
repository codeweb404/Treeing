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
    <div className="App">
      Hello World!
    </div>
    /*
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Home</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          File Naming App Placeholder
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Google Drive File Naming App ©2024
      </Footer>
    </Layout>*/
  );
  
}

export default App;

