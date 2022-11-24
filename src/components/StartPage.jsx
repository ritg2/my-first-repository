import React from 'react'

function StartPage(props) {

  return (
    <main className='start-page'>
        <div className='start-page-container'>
          <h1 className='title'>Quizzical</h1>
          <p className='description'>Test your knowledge</p>
          <button className='start-btn' onClick={props.startQuiz}>Start quiz</button>
        </div>
    </main>
  )
}

export default StartPage