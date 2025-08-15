import React, { useState } from 'react';

function GuessInput() {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    //prevent default so it doesn't refresh page
    e.preventDefault();
    console.log({ value });
    setValue('');
  };

  const handleChange = (e) => {
    setValue(e.target.value.toUpperCase());
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        //Add value to control input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 word input"
        value={value}
        onChange={handleChange}
        type="text"
      />
    </form>
  );
}

export default GuessInput;
