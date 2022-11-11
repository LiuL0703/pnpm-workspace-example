import React from 'react';
import logo from './logo.svg';
import { Rate } from 'antd'
import { Button } from '@components/index'
import './App.less';
import 'antd/dist/antd.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Rate />
      <Button />
    </div>
  );
}

export default App;
