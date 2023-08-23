import { decode } from 'html-entities'
const Question = ({ questionData, holdAnswer }) => {

  const {question, answers, key } = questionData;

  return (
  <article className="flex flex-col justify-center">
    <h2 className="md:text-xl font-medium text-blue-900">
    {decode(question)}
    </h2>
    <div className="border-b-2 py-4 flex flex-nowrap shrink sm:shrink">
      {answers.map(({ value, id, isHeld, right, wrong }) =>
        <button
          className='text-medium rounded-xl py-1 md:px-4 px-2
            border text-blue-950 border-blue-900 mr-2 md:mr-4' 
          id={id}
          key={id}
          text={value}
          style={{ 
            backgroundColor: 
              isHeld 
              ? '#d6dbf5' 
              : wrong 
              ? '#f8bcbc' 
              : right 
              ? '#94d7a2' : ''}}
          onClick={() => holdAnswer(key, id)}
        >
        {value}
        </button>
      )}
    </div>
  </article>
)
}


export default Question