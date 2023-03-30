

const EndGame = ({success , failure}) => {
    let endMessage
    if(success){
        endMessage = 'Congratulations!'
    }

    if(failure){
        endMessage = 'GAME OVER!'
    }
    
    return (
        <div>{endMessage}</div>
    )
}

export default EndGame