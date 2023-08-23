import { nanoid } from "nanoid"

const transformData = (arr) => {
  return arr.map(quiz => {
    const key = nanoid()

    let ans = []
    quiz.incorrect_answers.forEach(a => {
      ans.push({ id: nanoid(), value: a, isHeld: false,
      right: false, wrong: false })
    })

    ans.push({ 
      id: nanoid(), 
      value: quiz.correct_answer, 
      isHeld: false, right: false, wrong: false
    })

    const answers = ans.sort(() => Math.random() - 0.5)

    return { question: quiz.question, key, answers, correct: quiz.correct_answer }  
  })
}


export { transformData }