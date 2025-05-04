import { useState } from 'react'
import Hero from './Pages/Hero'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    </>
  )
}

export default App
