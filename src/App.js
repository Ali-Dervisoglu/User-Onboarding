import React from 'react';
import logo from './logo.svg';
import './App.css';
import HumanForm from './components/HumanForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="human-form">
          <HumanForm />
        </div>
      </header>
    </div>
  );
}

export default App;
