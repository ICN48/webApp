import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "@mui/material";

// page読み込み
import { Index } from './views/pages/index';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Index />
      </header>
    </div>
  );
}

export default App;
