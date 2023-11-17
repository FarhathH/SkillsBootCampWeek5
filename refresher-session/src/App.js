import logo from './logo.svg';
import './App.css';
import Counter from './counter.js'
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Counter startNum = {45}/> {/* print outs function  */}
        <Counter startNum = {18}/> {/* print outs function  */}
        
      </header>
    </div>
  );
}

export default App;
