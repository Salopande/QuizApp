import { useState } from "react";
import "./App.css";
import questions from "./constant/questions.json";
import Questions from "./components/questions";
import Results from "./components/Results";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer([...userAnswer, isCorrect]);
  };

  const resetQuiz = ()=>{
    setCurrentQuestion(0);
    setUserAnswer([]);
  }

  return (
    <div className="App">
      <h1>World Quiz</h1>
      {currentQuestion < questions.length && (
        <Questions
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}

      {questions.length === currentQuestion && <Results userAnswer={userAnswer} questions={questions} resetQuiz={resetQuiz}/>}
    </div>
  );
}

export default App;
