import { useEffect, useState } from 'react'
import StartPage from './components/StartPage.jsx'
import QuizPage from './components/QuizPage.jsx'
import Submit from './components/Submit.jsx'
import { nanoid } from 'nanoid'

function App() {
  const [quizData, setQuizData] = useState([])
  const [start, setStart] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [count, setCount] = useState(0)


  function startQuiz(){
      setStart(true)
  }

  function pickAnswer(id, value){
    if (!isFinished){
      setQuizData(prev => prev.map((data, index )=> {
        return id === index ? {...data, selected: true, selection:value} : data
      }))
    }
    
  }

  function checkAnswers(){
    if (quizData.every(data => data.selected === true)){
      setIsFinished(true)
    }
    const score = quizData.filter(item=> item.selection === item.correct_answer)
    setCount(score.length)
  }

  function restartGame(){
    setStart(false)
    setIsFinished(false)
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((response) => response.json())
      .then((data) => setQuizData(data.results.map(item => {
        return {
          question:item.question,
          answers:item.incorrect_answers.concat(item.correct_answer).sort((a, b) => 0.5 - Math.random()),
          correct_answer: item.correct_answer,
          selected: false,
          selection:""
        }
      })))
  }, [start])

  const renderQuiz = quizData.map((data,index )=> {
    return <QuizPage key={nanoid()} questions={data.question} answers={data.answers} pickAnswer={pickAnswer} selected={data.selected} id={index} value={data.selection} isFinished={isFinished} correctAnswer={data.correct_answer}/>
  })

  return (
    <div>
      {!start && <StartPage startQuiz={startQuiz}/>}
      {start && renderQuiz}
      {start && <Submit checkAnswers={checkAnswers} count={count} isFinished={isFinished} restartGame={restartGame} quizData={quizData}/>}
    </div>
  )
}

export default App