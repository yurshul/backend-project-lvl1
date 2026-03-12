import runGameEngine from '../index.js'
import getRandomNumber from '../utils.js'

const gameRules = 'Find the greatest common divisor of given numbers.'

const gcd = (num1, num2) =>
  num1 === 0 ? num2 : gcd(num2 % num1, num1)

const generateGameData = () => {
  const num1 = getRandomNumber(2, 100)
  const num2 = getRandomNumber(2, 100)

  const question = `${num1} ${num2}`
  const answer = gcd(num1, num2)

  return { question, answer }
}

export default () => runGameEngine(gameRules, generateGameData)
