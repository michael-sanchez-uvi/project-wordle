const keyboardLetters = [
  // Top row
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  // Middle row
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  // Bottom row
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

const getStatusByLetter = (validatedGuesses) => {
  const statusObj = {};
  const allLetters = validatedGuesses.flat();

  const STATUS_RANKS = {
    correct: 1,
    misplaced: 2,
    incorrect: 3,
  };

  allLetters.forEach(({ letter, status }) => {
    const currentStatus = statusObj[letter];

    if (currentStatus === undefined) {
      statusObj[letter] = status;
      return;
    }

    const currentStatusRank = STATUS_RANKS[currentStatus];
    const newStatusRank = STATUS_RANKS[status];

    if (newStatusRank < currentStatusRank) {
      statusObj[letter] = status;
    }
  });

  return statusObj;
};

function Keyboard({ validatedGuesses }) {
  const statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className="keyboard">
      {keyboardLetters.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((letter) => (
            <button
              key={letter}
              className={`key-input ${statusByLetter[letter] || ''} `}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
