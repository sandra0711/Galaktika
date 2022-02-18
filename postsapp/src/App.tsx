import React from 'react';
import { PostsList } from './features/posts/PostsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostsList />
      </header>
    </div>
  );
}

export default App;
