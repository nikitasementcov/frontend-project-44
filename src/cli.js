import readlineSync from 'readline-sync';
import even from './even.js';

const state = {
  user: null,
};

function cli() {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const user = readlineSync.question('Your answer: ');
  state.user = user;
  console.log(`Hello, ${state.user}`);
  const result = selectGame()();
  if (result.isSuccessful) {
    console.log(`Congratulations, ${state.user}!`);
  } else {
    console.log(`Let's try again, ${state.user}!`);
  }
}

function selectGame() {
  return even;
}

export default cli;
