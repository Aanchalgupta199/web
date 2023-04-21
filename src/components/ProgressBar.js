import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = () => {
  return (
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar value={66} text={"50"}/>
    </div>
  )
}

export default ProgressBar