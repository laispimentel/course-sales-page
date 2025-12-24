import { useState } from 'react'
import './App.css'
import { SectionPrincipal } from './components/SectionPrincipal/index.jsx'
import { OqueSeraAbordado } from './components/oqueSeraAbordado/index.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SectionPrincipal />
      <OqueSeraAbordado />
    </div>
  )
}

export default App
