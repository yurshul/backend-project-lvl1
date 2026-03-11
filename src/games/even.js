import runGameEngine from '../index.js'
import getRandomNumber, { isEven } from '../utils.js'

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateGameData = () => {
  const question = getRandomNumber(1, 100)
  const answer = isEven(question) ? 'yes' : 'no'

  return { question, answer }
}

export default () => runGameEngine(gameRules, generateGameData)
