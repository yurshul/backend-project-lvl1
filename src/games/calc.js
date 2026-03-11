import runGameEngine from '../index.js'
import getRandomNumber from '../utils.js'

const calc = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2
    case '-':
      return operand1 - operand2
    case '*':
      return operand1 * operand2
    default:
      throw new Error('Unknown operator')
  }
}

const gameRules = 'What is the result of the expression?'

const generateGameData = () => {
  const operators = ['+', '-', '*']

  const operand1 = getRandomNumber(1, 100)
  const operand2 = getRandomNumber(1, 100)
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)]
  const question = `${operand1} ${randomOperator} ${operand2}`
  const answer = calc(operand1, operand2, randomOperator)

  return { question, answer }
}

export default () => runGameEngine(gameRules, generateGameData)
