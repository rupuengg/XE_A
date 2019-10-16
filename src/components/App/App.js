import React from 'react';
import './App.css';
import Search from '../Search';
import MusicList from '../MusicList';

function App() {
  return (
    <div className="container-fluid">
      <Search />
      <MusicList />
    </div>
  );
}

export default App;
