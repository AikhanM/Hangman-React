function Words({ hiddenWord, randHint, incorrectNumb}) {
  
  return (
    <>
      <p className="word-container">{hiddenWord}</p>
      <div className="hint-container">
        <p className="hint">
          Hint:
          <span>
           {randHint}
          </span>
        </p>
      </div>
      <div className="incorrect-container">
        <p>
          Incorrect guesses: <span> {incorrectNumb} / 6</span>
        </p>
      </div>
    </>
  );
}

export default Words;
