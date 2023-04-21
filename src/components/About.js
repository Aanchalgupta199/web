import React from 'react'
import useLogger from "../utils/useLogger"

const About = () => {

  const [count,SetCount] =useLogger(0);

  return (
    <>
    <h1>About</h1>
    <button onClick={() => SetCount(count+1)}>Click</button>
    </>
  )
}

export default About