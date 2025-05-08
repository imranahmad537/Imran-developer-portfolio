import { useState } from 'react'
import Hero from './Pages/Hero'
import Bento from './Pages/Bento'  
import Logos from './Pages/Logos'
// import Grid  from  './Pages/Grid'
import Subscribe from './Pages/Subscribe'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <hr />
    <Bento/>
    <hr />
    <Logos/>
    <hr />
    <Subscribe/>
    {/* <Grid/> */}
    </>
  )
}

export default App
