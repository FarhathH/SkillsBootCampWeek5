import logo from './logo.svg';
import './App.css';
import Counter from './counter.js'
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      {/* print outs function  */}
        <Counter/> 
      </header>
    </div>
  );
}

export default App;
