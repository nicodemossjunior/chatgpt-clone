import {useState} from 'react';

import './styles/App.css';
import './styles/reset.css';

import { makeRequest } from './api/api';
import { SideMenu } from './components/SideMenu/SideMenu';

function App() {
  return (
    <div className="App">
      <SideMenu></SideMenu>
      <h1>App works!!</h1>
    </div>
  );
}

export default App;
