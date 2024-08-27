import { useState } from 'react'
import './App.css'
import { Students } from './components/students'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Students name="pradeep" age={23} ispass={true}/>
      <Students name="Deepak" age={24} ispass={true}/>
      <Students name="Yogaraj" age={25} ispass={false}/>
    </>
  )
}

export default App
