import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  function addValue() {
    setCounter((prevCounter)=>{ return prevCounter == 20 ? prevCounter: prevCounter + 1});
  }

  function removeValue() {
    setCounter((prevCounter)=>{return prevCounter == 0 ? prevCounter: prevCounter - 1});
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
