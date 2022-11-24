import React from 'react'


function Submit(props) {

  return (
    <div className='submit'>
        {!props.isFinished && <button className='check' onClick={props.checkAnswers}>Check answers</button>}
        {props.isFinished && <p className='score'>You scored {props.count}/{props.quizData.length} correct answers</p>}
        {props.isFinished && <button className='restart' onClick={props.restartGame}>Play again</button>}
    </div>
  )
}

export default Submit