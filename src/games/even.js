import readlineSync from 'readline-sync'
import getRandomNumber, { isEven } from '../utils.js'

export default () => {
  console.log('Welcome to the Brain Games!')

  const name = readlineSync.question('May I have your name? ')

  console.log(`Hello, ${name}!`)

  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'

  console.log(gameRules)

  const ROUNDS_COUNT = 3

  for (let round = 1; round <= ROUNDS_COUNT; round += 1) {
    const question = getRandomNumber(0, 1000)
    const correctAnswer = isEven(question) ? 'yes' : 'no'

    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `)

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}
