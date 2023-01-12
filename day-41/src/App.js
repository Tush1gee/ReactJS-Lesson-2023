import './App.css';
import { useState } from 'react'
import UpdateArrays from './components/updateArrays';
import List from './components/SpreadArray';
import UpdatingObject from './components/UpdatingObject';

function App() {

  const [counter, setCounter] = useState(0)
  const [inputText, setInputText] = useState("")


  const handleClick = () => {
    setCounter(counter + 1)

  }


  const handleInput = function(event){
    console.log(event.target.value)
    console.log('handle input clicket')
    setInputText(event.target.value)
  }
  

  return (
    <div className="App">
      <UpdatingObject />
      <List/>
      <UpdateArrays />
      <div className='ex1'>
        <p>{counter}</p>
        <button onClick={ handleClick }>click</button>
      </div>

      <div className='ex2'>
        <p>{inputText}</p>
        <input value={""} onChange={(e) => {handleInput()}} />
      </div>
    </div>
  );
}

export default App;
