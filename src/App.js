import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [userAgent, setUserAgent] = useState('');

  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Agent</h1>
        <p>{userAgent}</p>
      </header>
    </div>
  );
}

export default App;
