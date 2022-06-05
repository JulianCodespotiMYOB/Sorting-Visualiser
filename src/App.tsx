import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './features/counter/Components/Body/Body';
import { useDispatch } from 'react-redux';
import { setColumns } from './features/counter/Slices/columnSlice';
import Toolbar from './features/counter/Components/Toolbar/Toolbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Toolbar />
      </header>
      <Body />
    </div>
  );
}

export default App;
