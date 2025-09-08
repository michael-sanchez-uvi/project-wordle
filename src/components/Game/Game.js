import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import Keyboard from '../Keyboard/Keyboard';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('running');
  const [answer, setAnswer] = useState(sample(WORDS));

  const handleGuess = (tentativeGuess) => {
    const nextGuess = [...guesses, tentativeGuess];

    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }

    setGuesses(nextGuess);
  };

  const handleRestart = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus('running');
  };

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessList validatedGuesses={validatedGuesses} />
      <Keyboard validatedGuesses={validatedGuesses} />
      <GuessInput gameStatus={gameStatus} handleGuess={handleGuess} />
      {gameStatus === 'won' && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
