import { useState } from 'react'
import Hero from './Pages/Hero'
import Bento from './Pages/Bento'  
import Logos from './Pages/Logos'
// import Grid  from  './Pages/Grid'
import Subscribe from './Pages/Subscribe'
import './App.css'
// import Project from './Pages/Project'
import Project1 from './Pages/Project1'
import About from './Pages/About'
import Subscribe1 from './Pages/Subscribe1'
import Achievements from './Pages/Achievements'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <hr />
  
      <Subscribe1/>
      <br />
      <br />
     
    <Subscribe/>
    <br />
    <Achievements/>
    {/* <Project/> */}
    <Project1/>
    {/* <Grid/> */}
    </>
  )
}

export default App
