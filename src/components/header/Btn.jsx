import React from 'react'
import CV from "../../assets/Augustine-John-CV.pdf"
const Btn = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let`s Talk</a>
    </div>
  )
}

export default Btn