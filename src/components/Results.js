import React from 'react'

const Results = ({userAnswer,questions,resetQuiz}) => {
  const correctAnswer = userAnswer.filter((answer)=>answer).length;
  return (
    <div className='results'>
       <h2>Results</h2>
       <p>You answered  {correctAnswer} out of {questions.length} questions
       <span onClick={resetQuiz}>Click Here to retry </span></p>
       <ul>
          {questions.map((question,index)=>(
            <li data-correct={userAnswer[index]} key={index}>Q{index+1}. {question.question}</li>
          ))}
       </ul>
    </div>
  )
}

export default Results
