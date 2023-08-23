
import Question from "./Question"

const QuestionsPage = ({ 
  questionsData, holdAnswer, 
  checkAnswers, checked, score, replay 
}) => {

  const quizzes = questionsData.map(data => 
    <Question 
      key={data.key} 
      questionData={data}
      holdAnswer={holdAnswer}
     />
  )

  return (
    <div className="md:w-[40rem] lg:w-[50rem] h-full mx-auto pb-3 pt-6">
      <div className="">
        {quizzes}
      </div>
      
      {checked ? 
        <div className="flex md:items-center flex-col md:flex-row md:justify-center mt-4">
            <p className="inline">
            {`You scored ${score} / ${questionsData.length} correct answers`}</p>
            <button className="bg-indigo-800 text-white p-4 
            rounded-xl md:ml-6 lg:ml-6 mt-3
            text-lg self-center" onClick={replay}>
              Play again
            </button>
        </div>
      : <button onClick={checkAnswers}
      className="bg-indigo-800 text-white mt-4
      py-4 px-4 rounded-xl
      text-lg self-center mx-auto block">
        Check answers
      </button>
    }
    </div> 
  )
}


export default QuestionsPage