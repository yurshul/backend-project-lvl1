#!/usr/bin/env node
import readlineSync from 'readline-sync'
import runGameCalc from '../src/games/calc.js'
import runGameEven from '../src/games/even.js'
import runGameGcd from '../src/games/gcd.js'
import runGamePrime from '../src/games/prime.js'
import runGameProgression from '../src/games/progression.js'

const games = [
  { name: 'brain-calc', run: runGameCalc },
  { name: 'brain-even', run: runGameEven },
  { name: 'brain-gcd', run: runGameGcd },
  { name: 'brain-prime', run: runGamePrime },
  { name: 'brain-progression', run: runGameProgression },
]

const runChoice = () => {
  const gameItems = games.map(game => game.name)
  const index = readlineSync.keyInSelect(gameItems, 'Choose a game?')

  if (index === -1) {
    console.log('Game selection canceled')
    return
  }

  games[index].run()
}

runChoice()
