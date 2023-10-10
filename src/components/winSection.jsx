import winImg from "../assets/images/victory.gif"
function winSection({resetGame}){
    return(
        <div className="winContainer passive">
            <h1>YOU WIN!</h1>
                <img src={winImg} alt="" />
            <button onClick={resetGame}>PLAY AGAIN!</button>
        </div>
    )
}

export default winSection