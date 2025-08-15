import React from 'react';

function GuessList({ guesses = [''] }) {
  return (
    <div className="guess-results">
      {guesses.map(({ value, id }) => (
        <p key={id} className="guess">
          {value}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
