import React from 'react'
import Navbar from './Navbar'

const JoinScreen = ({start}) => {
  return (
  
    <div className='join-screen'>
      <Navbar/>
        <h1> The Daily <span>React.JS</span>  Quiz </h1>

<img src="/image/img.png" alt="" />


        <p> This daily quiz test is designed to evaluate an individuals knowledge and skills.It covers an wide range of topics.</p>
  
        
        <ul>
        <h3>Instruction:</h3>
            <li>Quiz includes 5 questions</li>
            <li>10sec for each question</li>
            <li>50% Passing percentage</li>
            <li>To start quiz click on Start</li>
            
        </ul>
    <button onClick={start}> Start Quiz</button>
    </div>
  )
}

export default JoinScreen