import runGameEngine from '../index.js'
import getRandomNumber from '../utils.js'

const gameRules = 'What number is missing in the progression?'

const generateProgression = (firstElement, progressionStep, progressionLength) => {
  const progression = []

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstElement + i * progressionStep)
  }

  return progression
}

const generateGameData = () => {
  const firstElement = getRandomNumber(2, 100)
  const progressionStep = getRandomNumber(2, 100)
  const progressionLength = getRandomNumber(5, 10)

  const progression = generateProgression(firstElement, progressionStep, progressionLength)
  const hiddenElementIndex = getRandomNumber(0, progression.length - 1)
  const answer = progression[hiddenElementIndex]
  const hiddenSymbol = '..'
  progression[hiddenElementIndex] = hiddenSymbol

  const question = progression.join(' ')

  return { question, answer }
}

export default () => runGameEngine(gameRules, generateGameData)
