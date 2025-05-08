import React from 'react'
import Cards from '../Components/Cards'

const Project = () => {
  return (
    <>
    <div className="container">
        <h1>See our work</h1>
        <div className="cards flex justify-center items-center">
            <Cards/>
            <Cards/>
        </div>
    </div>
    </>
  )
}

export default Project
