import React from 'react';
import AboutMe from './components/AboutMe'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>tabs to go to sections</div>
      </header>

      <div>
        <AboutMe></AboutMe>
      </div>
      <div>Links to linkedin/github</div>
      <div>experience</div>
      <div>Projects</div>
      <div>Skills</div>
      <div>Education</div>
    </div>
  );
}

export default App;
