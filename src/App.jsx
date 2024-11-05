// src/App.js
import { useState } from 'react';
import { Layout, Menu } from 'antd';
import LandingPage from './components/LandingPage';
import FileRenaming from './components/FileRenaming';
import FinalConfirm from './components/FinalConfirm';
import SuccessPage from './components/SuccessPage';
import FileClassification from './components/FileClassification';
import './styles.css';

const { Header, Content, Footer } = Layout;

function App() {
  const [page, setPage] = useState('landing'); // 기본 페이지를 'landing'으로 설정

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
      case 'successPage':
        return <SuccessPage onNavigate={setPage} />
      default:
        return <LandingPage onNavigate={setPage} />;
    }
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Home</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {renderPage()}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Google Drive File Naming App ©2024
      </Footer>
    </Layout>
  );
}

export default App;
