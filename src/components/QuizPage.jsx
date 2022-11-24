import React from 'react'
import { nanoid } from 'nanoid'

function QuizPage(props) {

  function decodeHtml(html) {
    let txt = document.createElement("textarea")
    txt.innerHTML = html
    return txt.value
  }

  const renderOptions = props.answers.map((data,index) => {
    return <button className={!props.isFinished ? props.value === data ? 'answered' : 'answer' : props.correctAnswer === data ? 'correct-answer' : props.value === data ? 'wrong-answer' : 'unanswered'}
      key={nanoid()} 
      onClick={() => props.pickAnswer(props.id, data)}
      value={data}>
        {decodeHtml(data)}
    </button>
  })

  return (
    <main className='quiz-page'>
      <h2 className='questions'>{decodeHtml(props.questions)}</h2>
      {renderOptions} 
      <hr />
    </main>
  )
}

export default QuizPage