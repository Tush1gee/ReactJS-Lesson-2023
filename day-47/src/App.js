import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CounterFunc from './components/Counter';

function App() {

  return (
    <div className="App">
      <CounterFunc/>
      <CounterFunc/>
    </div>
  );
}

export default App;
