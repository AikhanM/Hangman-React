import { useState , useEffect, Component} from "react";
import "./components/hangman.jsx";
import "./App.css";
import View from "./components/hangman.jsx";
import Words from "./components/words.jsx";
import wordList from "./components/wordlists.jsx";
import Keyboard from "./components/keyboard.jsx";
import Alphabet from "./components/alphabet.jsx"
import LoseSection from "./components/loseSection.jsx"
import WinSection from "./components/winSection.jsx"
function App() {
  const containerElement = document.querySelector('.container');
  const loseContainer = document.querySelector('.loseContainer')
  const winContainer = document.querySelector(".winContainer")
  const [randWord, changeWord] = useState("");
  const [randHint, changeHint] = useState("");
  const [hiddenWord, setHiddenWord] = useState("");
  const [corrects, setCorrects] = useState("")
  const [incorrects, setIncorrects] = useState("")
  const [isLose, setLose] = useState(false)
  const [isWin, setWin] = useState(false)
  const [incorrectNumb, increacseIncorrect] = useState(0)
  useEffect(() => {
    // Oyun başladığında bir kelime seç
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const selectedWord = wordList[randomIndex].word.toUpperCase();
    const selectedHint = wordList[randomIndex].hint;
    changeWord(selectedWord);
    changeHint(selectedHint);
    setHiddenWord(() =>
      selectedWord
        .split("")
        .map((letter) => (corrects.includes(letter) ? letter : "_"))
        .join(" ")
    );
  }, []);

  useEffect(() => {
    if (
      corrects.length &&
      randWord.split("").every((letter) => corrects.includes(letter))
      ) setWin(true)
  }, [corrects]);

  useEffect(() => {
    if(isWin == true){
        winContainer.classList.remove("passive")
        containerElement.classList.add("blur")
    }
  },[isWin])

  useEffect(() => {
    if (incorrectNumb === 6) {
      loseContainer.classList.remove('passive')
      containerElement.classList.add('blur');
    }
  }, [incorrects]);
  const onGuess = (letter) => {
    if (randWord.includes(letter)) {
      setCorrects([...corrects, letter]);
    } else {
      setIncorrects([...incorrects, letter]);
      increacseIncorrect(incorrectNumb + 1);
    }
  };
  
  console.log(randWord)

  useEffect(() => {
    setHiddenWord(() =>
      randWord
        .split("")
        .map((char) => (corrects.includes(char) ? char : "_"))
        .join(" ")
    );
  }, [corrects, randWord]);
  
  const resetGame = () => {
    const newIndex = Math.floor(Math.random() * wordList.length)
    const selectedWord = wordList[newIndex].word;
    const selectedHint = wordList[newIndex].hint;
    changeWord(selectedWord)
    changeHint(selectedHint)
    setLose(false)
    setWin(false)
    setCorrects("")
    setIncorrects("")
    increacseIncorrect(0)
    containerElement.classList.remove("blur")
    winContainer.classList.add("passive")
    loseContainer.classList.add("passive")
  }

  return (
    <>
    <div className="gameModal">
      <LoseSection isLose={isLose} resetGame={resetGame}/>
      <WinSection isWin={isWin} resetGame={resetGame}/>
    </div>
  
    <div className="container">    
      <div className="container-left">
        <View index={incorrectNumb} />
      </div>
      <div className="container-right">
        <Words hiddenWord={hiddenWord} randHint={randHint} incorrectNumb={incorrectNumb} />
        <div>
          <Keyboard
            selectedWord={randWord}
            Alphabet={Alphabet}
            incorrects={incorrects}
            corrects={corrects}
            onGuess={onGuess}
            isWin={isWin}
            isLose={isLose}
            />
        </div>
      </div>
    </div>
  </>
  );
}

export default App;


