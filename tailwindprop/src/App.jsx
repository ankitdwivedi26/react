import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card companyName='Capita'/>
      <Card companyName='InfoGain'/>
    </>
  )
}

export default App
