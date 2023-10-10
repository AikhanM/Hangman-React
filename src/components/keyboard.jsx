import { useEffect, useState } from "react";
function Keyboard({ Alphabet, corrects, incorrects, onGuess, isWin, isLose }) {

  return (
    <div>
      {Alphabet.map((letter, index) => (
        <button
          key={index}
          onClick={() => onGuess(letter)} 
          disabled={corrects.includes(letter) || incorrects.includes(letter) || isLose ==true || isWin == true}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
