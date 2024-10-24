import React from 'react';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const App = () => {
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
          File Naming App Placeholder
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Google Drive File Naming App ©2024
      </Footer>
    </Layout>
  );
};

export default App;
