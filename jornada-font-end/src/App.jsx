import { useState } from 'react'
import './App.css'
import { SectionPrincipal } from './components/SectionPrincipal/index.jsx'
import { FitaRoxa } from "./components/fitaRoxa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SectionPrincipal />
      <FitaRoxa />
    </div>
  )
}

export default App
