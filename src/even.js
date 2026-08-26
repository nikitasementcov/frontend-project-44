import readlineSync from 'readline-sync';

const EVEN_GAME_NUMBER_OF_QUESTIONS = 3;
const EVEN_GAME_MAX_NUMBER = 1000;

const isEven = number % 2 === 0;

function even() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let question = 0; question < EVEN_GAME_NUMBER_OF_QUESTIONS; question++) {
    const number = Math.floor(Math.random() * EVEN_GAME_MAX_NUMBER);
    console.log(`Question: ${number}`);
    const expectedAnswer = isEven(number) ? 'yes' : 'no';
    const actualAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();
    if (expectedAnswer !== actualAnswer) return { isSuccessful: false };
  }
  return { isSuccessful: true };
}

export default even;
