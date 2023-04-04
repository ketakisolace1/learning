//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar.js';
// import States from './components/States.js';
import Function from './components/Function.js';



function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode==='light'){
      setMode ('dark');
    } else{
      setMode ('light');
    }
  }
  return (
    <>
   
    <Navbar title="Learnings" mode={mode} toggleMode={toggleMode}/>
    <Function/>
     

    {/* <States/> */}
    </>
  
  );
}

export default App;
