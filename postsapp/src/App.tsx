import React from 'react';
import { PostsList } from './features/posts/PostsList';
import './App.css';
import { Layout } from 'antd';
const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <PostsList />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
