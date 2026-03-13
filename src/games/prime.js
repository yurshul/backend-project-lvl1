import runGameEngine from '../index.js'
import getRandomNumber from '../utils.js'

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (num) => {
  if (num < 2) {
    return false
  }

  const limit = Math.sqrt(num)

  for (let divisor = 2; divisor <= limit; divisor += 1) {
    if (num % divisor === 0) {
      return false
    }
  }

  return true
}

const generateGameData = () => {
  const question = getRandomNumber(1, 10000)
  const answer = isPrime(question) ? 'yes' : 'no'

  return { question, answer }
}

export default () => runGameEngine(gameRules, generateGameData)
