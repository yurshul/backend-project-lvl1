import readlineSync from 'readline-sync'

const ROUNDS_COUNT = 3

const runGameEngine = (gameRules, generateGameData) => {
  console.log('Welcome to the Brain Games!')

  const name = readlineSync.question('May I have your name? ')

  console.log(`Hello, ${name}!`)

  console.log(gameRules)

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    const { question, answer } = generateGameData()
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `)

    const correctAnswer = String(answer)

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

export default runGameEngine
