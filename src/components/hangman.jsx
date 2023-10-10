import { useEffect, useState } from "react"
import hangman0 from "../assets/images/hangman-0.svg"
import hangman1 from "../assets/images/hangman-1.svg"
import hangman2 from "../assets/images/hangman-2.svg"
import hangman3 from "../assets/images/hangman-3.svg"
import hangman4 from "../assets/images/hangman-4.svg"
import hangman5 from "../assets/images/hangman-5.svg"
import hangman6 from "../assets/images/hangman-6.svg"

function View({index}) {

const [hangman, setHangman] = useState("")
const Images = [hangman0, hangman1, hangman2, hangman3, hangman4, hangman5, hangman6]
useEffect(() => {
setHangman(()=> 
Images[index])
},[index])
  return (
      <>
        <img src={hangman} alt="" />
        <h2>HANGMAN GAME</h2>
      </>
    )
}

export default View