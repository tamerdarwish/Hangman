const Score = ({score}) => {
    return (
    score >= 80 ? <div className="high-score">{score}</div> 
    : score >=50 && score < 80? <div className="medium-score">{score}</div> 
    : <div className="low-score">{score}</div> 
    )
}

export default Score