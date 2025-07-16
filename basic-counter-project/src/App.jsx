import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  function addValue() {
    const increasedValue = counter + 1;
    if(increasedValue > 20){
      return;
    }
    setCounter(increasedValue);
  }

  function removeValue() {
    const decreasedValue = counter - 1;
    if(decreasedValue < 0){
      return;
    }
    setCounter(decreasedValue);
  }

  return (
    <>
       <h1>Counter Project</h1>
       <h6>Counter value: {counter}</h6>
       <button onClick={addValue}>Increase</button>
       <button onClick={removeValue}>Decrease</button>
    </>
  )
}

export default App
