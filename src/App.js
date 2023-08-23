import { useState, useEffect } from 'react'
import StartPage from "./components/StartPage"
import { transformData } from './helperFunction'
import Loading from './components/Loading'
import QuestionsPage from './components/QuestionsPage'


const App = () => {
  const [start, setStart] = useState(false)
  const [loading, setLoading] = useState(true)
  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0)
  const [checked, setChecked] = useState(false)
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    difficulty: '',
    type: ''
  })

  useEffect(() => {
    const getData = async () => {
      
      let apiUrl = `https://opentdb.com/api.php?amount=${formData.amount}`;

      if (formData.category !== 'any') 
        apiUrl += `&category=${formData.category}`;

      if (formData.difficulty !== 'any')
        apiUrl += `&difficulty=${formData.difficulty}`;

      if (formData.type !== 'any')
        apiUrl += `&type=${formData.type}`;

      try {
        const res = await fetch(apiUrl)
        const body = await res.json()

        setLoading(false)
        setQuestions(transformData(body.results))
      } catch (e) {
        console.log(e.message)
      }
      
    }
    getData()
  },[formData])

  const startQuiz = () => {
    setStart(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setFormData(formData)
    startQuiz()
  }

  const playAgain = () => {
    setQuestions([])
    setChecked(false)
    setStart(false)
    setFormData(data => ({...data, amount: 5 }))
    setScore(0)
  }
  
  const holdAnswer = (q, a) => {
    setQuestions(prev => 
      prev.map(p => {
        if (p.key !== q) {
          return p;
        } else {
          const held = p.answers.map(ans => 
            ans.id === a 
            ?  { ...ans, isHeld: !ans.isHeld }
            : { ...ans, isHeld: false });
            return { ...p, answers: held }
        }
      })
    );
  }

  const checkAnswers = () => {
    setQuestions(prev =>
      prev.map(q => {
        const answersChecked = q.answers.map(a => {
          if (a.value === q.correct && a.isHeld) {
            setScore(s => s + 1);
            return { ...a, right: true, isHeld: false }
          } else if (a.value !== q.correct  && a.isHeld) {
            return { ...a, wrong: true, isHeld: false }
          } else if (a.value === q.correct && !a.isHeld) {
            return { ...a, right: true }
          } else {
            return a
          }
        })
        return { ...q, answers: answersChecked }
      })
    )
    setChecked(true)
  }

  return (
    <div className="App flex h-full w-full justify-center items-center overflow-auto">
      <div className="blob1">
      </div>
      <div className="blob2"></div>
      <div className='max-h-full max-w-full m-4 p-4 mx-auto 
      sm:mx-auto sm:container md:mx-auto md:container z-10
      overflow-auto'>
      {start 
        ? (!questions.length && loading 
          ? <Loading
              type='spin'
              color='rgb(30 58 138)'
           />
          : <QuestionsPage
            questionsData={questions}
            holdAnswer={holdAnswer}
            checkAnswers={checkAnswers}
            checked={checked}
            score={score}
            replay={playAgain}
          />)
        : (<StartPage
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />)}
        </div>
    </div>
  )
}


export default App
