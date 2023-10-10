import loseImg from "../assets/images/lost.gif"
function LoseSection({resetGame}){
    return(
        <div className="loseContainer passive" >
            <h1>YOU LOSE!</h1>
                <img src={loseImg} alt="" />
            <button onClick={resetGame}>TRY AGAİN</button>
        </div>
    )
}

export default LoseSection